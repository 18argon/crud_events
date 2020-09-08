export interface EditFormState {
  fields: EditFormFields;
}

export interface EditFormFields {
  title: string;
  description: string;
  date: Date;
}
