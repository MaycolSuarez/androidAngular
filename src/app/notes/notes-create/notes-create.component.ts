import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { WebcamImage } from 'ngx-webcam';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private readonly notesService: NotesService) { }

  public capturedImage: WebcamImage | null = null;

  imageUrl:any;
  coordinates:any;


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageUrl = image.webPath;

    // Can be set to the src of an image now
    this.imageUrl = imageUrl;
  };
  
  createForm: FormGroup = new FormGroup({});

  

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }

    const { title, description } = this.createForm.value;

    this.notesService.createNotes({ title, description }).then((res: any) => {
      this.router.navigate(['/notes']);
    });


  }
  

}
