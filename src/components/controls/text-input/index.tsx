import React, { forwardRef, Ref } from 'react';
import Input from '../../../components/controls/base/input';
import { SpecificInputProps } from '../../../components/controls/types';

export type TextInputProps = SpecificInputProps<string> & {
  type?: 'text' | 'password' | 'email'
}

export default forwardRef(({ type = 'text', ...inputProps }: TextInputProps, ref?: Ref<HTMLInputElement>) => {
  return <Input {...inputProps} type={type} ref={ref} />;
});
