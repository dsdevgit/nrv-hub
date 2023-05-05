import { ElectronHandler } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
  }
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.module.css';
declare module '*.module.scss';

export {};
