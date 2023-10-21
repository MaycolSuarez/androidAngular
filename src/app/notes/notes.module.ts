import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesCreateComponent } from './notes-create/notes-create.component';
import { CamaraComponent } from './camara/camara.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NoteDetailComponent,
    NotesListComponent,
    NotesCreateComponent,
    CamaraComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteDetailComponent,
    NotesListComponent,
    NotesCreateComponent,
    CamaraComponent
  ]
})
export class NotesModule { }
