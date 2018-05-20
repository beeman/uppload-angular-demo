import { Component } from '@angular/core';
import { UpploadEvents, UpploadSettings } from 'uppload-angular';

@Component({
  selector: 'app-root',
  template: `
    <pre> Modal Open: {{modalOpen}} Page: {{upploadPage}} </pre>
    <div class="container">
      <h1>Hello from Angular</h1>
      <p>Your image URL is: {{imageUrl}}</p>
      <uppload #uppload [settings]="settings" (event)="handleEvent($event)">
        <button class="btn" data-uppload-button>Upload</button>
      </uppload>
      <br>
      <button class="btn"
              (click)="openCamera(uppload)">Open Camera
      </button>
      <br>
      <button class="btn"
              (click)="openClose(uppload)">Open link page
      </button>
      (closes after timeout)
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
  public modalOpen = false;
  public upploadPage: string;

  avatarSize = [200, 200];

  public settings: UpploadSettings = {
    crop: { aspectRatio: 1, maxSize: [ 300, 300 ], minSize: [ 100, 100 ] },
    minimumDelay: 2000,
    isFileSizeAllowed: ({ size }) => {
      console.log('Custom size check', size);
      return true;
    },
    isFileTypeAllowed: ({ type }) => {
      console.log('Custom type check', type);
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
      case UpploadEvents.fileUploaded:
        return this.imageUrl = payload;
      case UpploadEvents.modalClosed:
        this.upploadPage = '';
        return this.modalOpen = false;
      case UpploadEvents.modalOpened:
        return this.modalOpen = true;
      case UpploadEvents.pageChanged:
        return this.upploadPage = payload;
      default:
        return console.log(`Unhandled event`, { event, payload });
    }
  }

  openCamera(uppload) {
    uppload.openModal();
    uppload.changePage('camera');
  }
  openClose(uppload) {
    uppload.openModal();
    uppload.changePage('link');
    setTimeout(() => uppload.closeModal(), 3000);
  }
}
