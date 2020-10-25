import React, { ChangeEvent, DetailedHTMLProps, forwardRef, Ref, RefAttributes, SelectHTMLAttributes } from 'react';

import type { ForwardRef, OnValueChange, SelectOption, SelectOptionValue, ValueType } from '../../../../components/controls/types';

export type SelectProps<T extends SelectOptionValue> = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & RefAttributes<HTMLSelectElement> & OnValueChange<T> & {
  options: SelectOption<T>[];
};

export default forwardRef(<T extends SelectOptionValue>({ options, onChange, onValueChange, ...selectProps }: SelectProps<T>, ref?: Ref<HTMLSelectElement>) => {
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
    <select {...selectProps} onChange={onChangeHandler} ref={ref}>
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
}) as ForwardRef<HTMLSelectElement>;

function inferValueType(value: SelectOptionValue) {
  return typeof value as ValueType;
}

function getValue(event: ChangeEvent<HTMLSelectElement>, valueType: ValueType) {
  if (valueType === 'number') {
    return parseFloat(event.target.value);
  } else if (valueType === 'boolean') {
    return event.target.value === 'true';
  } else {
    return event.target.value;
  }
}

// test-private-code
export const testExports = { inferValueType, getValue };
// end-test-private-code
