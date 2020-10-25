import React, { ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref, RefAttributes } from 'react';

import type { ForwardRef, OnValueChange, ValueType } from '../../../../components/controls/types';

export type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type InputProps<T> = ReactInputProps & RefAttributes<HTMLInputElement> & OnValueChange<T>;

export default forwardRef(<T extends string | number | boolean>({ type, onChange, onValueChange, ...inputProps }: InputProps<T>, ref?: Ref<HTMLInputElement>) => {
  const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (onValueChange) {
      const valueType = inferValueType(type);
      const value = getValue(event, valueType) as T;
      onValueChange(value);
    }
  };

  return <input {...inputProps} type={type} onChange={onchangeHandler} ref={ref} />;
}) as ForwardRef<HTMLInputElement>;

function inferValueType(inputType: ReactInputProps['type']) {
  if (inputType === 'number') {
    return 'number';
  } else if (inputType === 'checkbox') {
    return 'boolean';
  } else {
    return 'string';
  }
}

function getValue(event: ChangeEvent<HTMLInputElement>, valueType: ValueType) {
  if (valueType === 'number') {
    return parseFloat(event.target.value);
  } else if (valueType === 'boolean') {
    return event.target.checked;
  } else {
    return event.target.value;
  }
}

// test-private-code
export const testExports = { inferValueType, getValue };
// end-test-private-code
