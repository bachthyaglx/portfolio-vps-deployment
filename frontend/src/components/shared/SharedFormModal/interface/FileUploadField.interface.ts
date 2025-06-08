export interface FileUploadFieldProps {
  name: string;
  label: string;
  mode: 'singleupload' | 'multiupload';
  inputRef: (el: HTMLInputElement | null) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileUrls: string[];
  fileInputs: File[];
  onRemoveFileUrl: (index: number) => void;
}