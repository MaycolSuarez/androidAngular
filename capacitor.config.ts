import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-login',
  webDir: 'dist',
  "plugins": {
    "Camera": {
      "sync": true
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
