import { ChangeEvent } from 'react';
import { ReactTextareaProps, OnValueChange } from 'components/controls/types';

export type TextareaProps = ReactTextareaProps & OnValueChange<string>;

export default function Textarea({ onChange, onValueChange, ...textareaProps }: TextareaProps) {
  const onchangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return <textarea {...textareaProps} onChange={onchangeHandler} />;
}
