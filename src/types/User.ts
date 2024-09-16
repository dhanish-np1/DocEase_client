export interface InputFieldProps {
    id?: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }


export interface ButtonProps {
  color?:string;
  value:string;

}