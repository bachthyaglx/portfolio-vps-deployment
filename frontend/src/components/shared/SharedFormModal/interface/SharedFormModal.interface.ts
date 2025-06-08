export interface SharedFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  editItem?: any;
  formTitle?: { add: string; edit: string };
  formFields: any[];
  fileFields?: any[];
  createMutation: any;
  editMutation: any;
  uploadFileMutation?: any;
  deleteFileMutation?: any;
  refetch: () => void;
}