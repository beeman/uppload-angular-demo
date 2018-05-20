export class UpploadEndpoint {
  url?: string;
  method?: string;
  headers?: any;
}

export class UpploadCrop {
  aspectRatio?: number;
  maxSize?: any;
  minSize?: any;
}

export class UpploadBlob {
  size: number;
  type: string;
}

export class UpploadSettings {
  value?: string;
  bind?: string[];
  call?: string[];
  uploadFunction?: (file: UpploadBlob) => Promise<string>;
  endpoint?: string | UpploadEndpoint;
  services?: string[];
  defaultService?: string;
  successDelay?: number;
  minimumDelay?: number;
  errorDelay?: number;
  allowedTypes?: string | string[];
  maxFileSize?: number;
  isFileTypeAllowed?: (file: UpploadBlob) => boolean;
  isFileSizeAllowed?: (file: UpploadBlob) => boolean;
  i18n?: any;
  crop?: UpploadCrop;
}

export const UPPLOAD_EVENTS = [
  'cropEnd',
  'cropMove',
  'cropStart',
  'dragEnter',
  'dragLeave',
  'dragOver',
  'fileDropped',
  'fileError',
  'fileSelected',
  'fileUploaded',
  'modalClosed',
  'modalOpened',
  'pageChanged',
  'uploadError',
  'uploadStarted',
];
