import React, { ChangeEvent } from 'react';
import { ReactSelectProps, OnValueChange, SelectOptionValue, SelectOption } from '../../../../components/controls/types';

export type SelectProps<T extends SelectOptionValue> = ReactSelectProps & OnValueChange<T> & {
  options: SelectOption<T>[],
}

export default function Select<T extends SelectOptionValue>({ options, onChange, onValueChange, ...selectProps }: SelectProps<T>) {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (onValueChange) {
      const valueType = inferValueType(options[0].value);
      const value = getValue(event, valueType) as T;
      onValueChange(value);
    }
  };

  return (
    <select {...selectProps} onChange={onChangeHandler}>
      {options.map(({ value, label }, index) => (
        <option
          key={index}
          value={value !== undefined ? value.toString() : undefined}
          disabled={value === undefined}
        >
          {label}
        </option>
      ))}
    </select>
  );
}

function inferValueType(value: SelectOptionValue) {
  return typeof value as 'string' | 'number' | 'boolean';
}

function getValue(event: ChangeEvent<HTMLSelectElement>, valueType: 'string' | 'number' | 'boolean') {
  if (valueType === 'number') {
    return parseFloat(event.target.value);
  } else if (valueType === 'boolean') {
    return event.target.value === 'true';
  } else {
    return event.target.value;
  }
}
