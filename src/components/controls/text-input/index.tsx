import React from 'react';
import Input from '../../../components/controls/base/input';
import { SpecificInputProps } from '../../../components/controls/types';

export type TextInputProps = SpecificInputProps<string> & {
  type?: 'text' | 'password' | 'email'
}

export default function TextInput({ type = 'text', ...inputProps }: TextInputProps) {
  return <Input {...inputProps} type={type} />;
}
