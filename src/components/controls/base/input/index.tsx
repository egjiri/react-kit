import { ChangeEvent } from 'react';
import { ReactInputProps, OnValueChange } from 'components/controls/types';

export type InputProps<T> = ReactInputProps & OnValueChange<T>;

export default function Input<T extends string | number | boolean>({ type, onChange, onValueChange, ...inputProps }: InputProps<T>) {
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

  return <input {...inputProps} type={type} onChange={onchangeHandler} />;
}

function inferValueType(inputType: ReactInputProps['type']) {
  if (inputType === 'number') {
    return 'number';
  } else if (inputType === 'checkbox') {
    return 'boolean';
  } else {
    return 'string';
  }
}

function getValue(event: ChangeEvent<HTMLInputElement>, valueType: 'number' | 'string' | 'boolean') {
  if (valueType === 'number') {
    return parseFloat(event.target.value);
  } else if (valueType === 'boolean') {
    return event.target.checked;
  } else {
    return event.target.value;
  }
}
