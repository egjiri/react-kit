import React, { forwardRef, Ref } from 'react';
import Input from '../../../components/controls/base/input';
import { SpecificInputProps } from '../../../components/controls/types';

export type CheckboxInputProps = Omit<SpecificInputProps<boolean>, 'value'> & {
  value?: boolean;
};

export default forwardRef(({ value, ...inputProps }: CheckboxInputProps, ref?: Ref<HTMLInputElement>) => {
  return <Input {...inputProps} type="checkbox" checked={value} ref={ref} />;
});
