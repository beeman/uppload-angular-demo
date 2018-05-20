import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from Angular</h1>
    <p>Your image URL is: {{imageUrl}}</p>
    <uppload #uppload [settings]="settings"
             (onUpload)="onUpload($event)">
      <button (click)="uppload.openModal()">Upload</button>
    </uppload>
  `,
  styles: [ `
  ` ]
})
export class AppComponent {
  public settings = {
    minimumDelay: 2000,
    uploadFunction: file => {
      return new Promise((resolve, reject) => {
        const url = 'https://randomuser.me/api/portraits/men/18.jpg';
        resolve(url);
      });
    }
  };
  public imageUrl: string;

  onUpload(imageUrl) {
    this.imageUrl = imageUrl;
  }
}
