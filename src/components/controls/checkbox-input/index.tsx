import React from 'react';
import Input from '../../../components/controls/base/input';
import { SpecificInputProps } from '../../../components/controls/types';

export type CheckboxInputProps = Omit<SpecificInputProps<boolean>, 'value'> & {
  value?: boolean;
};

export default function CheckboxInput({ value, ...inputProps }: CheckboxInputProps) {
  return <Input {...inputProps} type="checkbox" checked={value} />;
}
