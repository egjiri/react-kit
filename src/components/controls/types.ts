import { DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

export type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type ReactTextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export type ReactSelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export type SpecificInputProps<T> = Omit<ReactInputProps, 'type'> & OnValueChange<T>

export type OnValueChange<T> = {
  onValueChange?: (value: T) => void;
}

export type SelectOptionValue = string | number | boolean;
export type SelectOption<T extends SelectOptionValue> = {
  value: T
  label: string
}
