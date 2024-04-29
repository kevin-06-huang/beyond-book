declare module "*.png" {
  const value: string;
  export default value;
}

export type ImageDataType = {
  src: string;
  alt: string;
};
