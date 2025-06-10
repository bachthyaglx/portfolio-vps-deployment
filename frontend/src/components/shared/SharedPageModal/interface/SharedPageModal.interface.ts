export interface SharedPageModalProps {
  pageTitle: string;
  query: any;
  deleteMutation: any;
  dataKey: string;
  variables?: { [key: string]: any };
  textFields: {
    title: string;
    subtitle?: string;
    program?: string;
    description: string;
    tags: string;
    start?: string;
    end?: string;
    url?: string;
  };
  fileFields?: {
    name: string;
    label: string;
    mode: 'singleupload' | 'multiupload';
    display: 'file' | 'iframe';
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