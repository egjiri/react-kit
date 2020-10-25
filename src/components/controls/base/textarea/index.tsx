import React, { ChangeEvent, DetailedHTMLProps, forwardRef, Ref, RefAttributes, TextareaHTMLAttributes } from 'react';

import type { OnValueChange } from '../../../controls/types';

export type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & RefAttributes<HTMLTextAreaElement> & OnValueChange<string>;

export default forwardRef(({ onChange, onValueChange, ...textareaProps }: TextareaProps, ref?: Ref<HTMLTextAreaElement>) => {
  const onchangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (onValueChange) {
      onValueChange(event.target.value);
    }
  };

  return <textarea {...textareaProps} onChange={onchangeHandler} ref={ref} />;
});
