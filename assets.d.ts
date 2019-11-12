declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";


declare module NodeJS  {
  interface Global {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any
  }
}