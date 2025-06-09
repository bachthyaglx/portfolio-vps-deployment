export interface ImagesBlockProps {
  item: { [key: string]: any };
  fileFields: {
    name: string;
    mode?: 'singleupload' | 'multiupload';
  }[];
}
