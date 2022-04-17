export interface Button {
  type: string;
  class?: string;
  content?: string | undefined;
  disabled?: boolean | undefined;
}

export interface FormItem {
  type: string;
  id: string;
  placeholder: string;
  formControl: string;
}
