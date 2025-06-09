export interface FilesBlockProps {
  item: { [key: string]: any };
  fileFields: {
    name: string;
    label: string;
    mode: 'singleupload' | 'multiupload';
    display?: 'file' | 'iframe';
  }[];
}
