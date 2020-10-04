import React, { forwardRef, Ref } from 'react';
import Input from '../../../components/controls/base/input';
import { SpecificInputProps } from '../../../components/controls/types';

export type NumberInputProps = SpecificInputProps<number>;

export default forwardRef((inputProps: NumberInputProps, ref?: Ref<HTMLInputElement>) => {
  return <Input {...inputProps} type="number" ref={ref} />;
});
