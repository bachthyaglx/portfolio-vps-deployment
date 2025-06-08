export interface SharedPageModalProps {
  pageTitle: string;
  query: any;
  deleteMutation: any;
  dataKey: string;
  textFields: {
    title: string;
    subtitle?: string;
    description: string;
    tags: string;
    start?: string;
    end?: string;
    program?: string;
  };
  fileFields?: {
    name: string;
    label: string;
    mode: 'singleupload' | 'multiupload';
  }[];
  formFields: any[];
  formTitle?: {
    add: string;
    edit: string;
  };
  createMutation: any;
  editMutation: any;
  uploadFileMutation?: any;
  deleteFileMutation?: any;
}