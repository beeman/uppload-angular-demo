import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import Uppload from 'uppload';

export class UpploadSettings {
  value: string;
  bind: string[];
  call: string[];
  endpoint: string;
  maxFileSize: number;
  allowedTypes: 'image';
}

@Component({
  selector: 'uppload',
  template: `
    <ng-content></ng-content>
  `,
})
export class UpploadComponent implements OnInit {
  @Input() public settings: UpploadSettings;
  @Input() public onUpload = new EventEmitter();

  private uppload: Uppload;

  openModal() {
    this.uppload.openModal();
  }

  ngOnInit() {
    this.uppload = new Uppload(this.settings);
    this.uppload.on('fileUploaded', url => {
      this.onUpload.emit(url);
    });
  }

}
