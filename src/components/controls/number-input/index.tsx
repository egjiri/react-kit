import React, { forwardRef, Ref } from 'react';
import Input from '../../../components/controls/base/input';

import type { SpecificInputProps } from '../../../components/controls/types';

export type NumberInputProps = SpecificInputProps<number | null>;

export default forwardRef(({ value, onValueChange, ...inputProps }: NumberInputProps, ref?: Ref<HTMLInputElement>) => {
  const inputValue = typeof value === 'number' && !isNaN(value) ? value : '';

  const onValueChangeHandler = (value: number) => {
    if (onValueChange) {
      onValueChange(isNaN(value) ? null : value);
    }
  };

  return (
    <Input
      {...inputProps}
      type="number"
      ref={ref}
      value={inputValue}
      onValueChange={onValueChangeHandler}
    />
  );
});
