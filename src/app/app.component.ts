import { Component } from '@angular/core';
import { UpploadSettings } from 'uppload-angular';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Hello from Angular</h1>
      <p>Your image URL is: {{imageUrl}}</p>
      <uppload [settings]="settings" (event)="handleEvent($event)">
        <button class="btn" data-uppload-button>Upload</button>
      </uppload>
    </div>
  `,
  styles: [ `
    .container {
      margin: 5rem;
    }
    button {
      background-color: #666;
      color: #fff;
      font: inherit;
      border: none;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem
    }
    .btn {
      margin-top: 1rem
    }
  ` ]
})
export class AppComponent {

  public imageUrl: string;

  public settings: UpploadSettings = {
    minimumDelay: 2000,
    isFileSizeAllowed: (params: any) => {
      console.log('Custom size check', params);
      return true;
    },
    isFileTypeAllowed: (params: any) => {
      console.log('Custom type check', params);
      return true;
    },
    uploadFunction: () => {
      return new Promise((resolve) => {
        const url = 'https://randomuser.me/api/portraits/men/18.jpg';
        resolve(url);
      });
    }
  };

  handleEvent({ event, payload }) {
    switch (event) {
      case 'fileUploaded':
        return this.imageUrl = payload;
      default:
        return console.log(`Unhandled event`, { event, payload });
    }
  }
}
