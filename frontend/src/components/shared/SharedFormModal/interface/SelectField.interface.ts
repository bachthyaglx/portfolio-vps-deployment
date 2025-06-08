export interface Option {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  name: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  required?: boolean;
  options: Option[];
  label: string;
}