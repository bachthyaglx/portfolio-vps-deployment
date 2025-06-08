interface FieldConfig {
  name: string;
  type: 'text' | 'textarea' | 'date' | 'select';
  label: string;
  required?: boolean;
  options?: { label: string; value: string }[]; // Only for select
}

interface FileFieldConfig {
  name: string;
  label: string;
  mode: 'singleupload' | 'multiupload';
}

export interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: any;
  fields: FieldConfig[];
  fileFields?: FileFieldConfig[];
  createMutation: any;
  editMutation: any;
  uploadFileMutation?: any;
  deleteFileMutation?: any;
}