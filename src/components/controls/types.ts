import type { ReactElement, RefAttributes } from 'react';
import type { InputProps } from './base/input';

export type SpecificInputProps<T> = Omit<InputProps<T>, 'type'>;

export type OnValueChange<T> = {
  onValueChange?: (value: T) => void;
};

export type ValueType = 'string' | 'number' | 'boolean';
export type SelectOptionValue = string | number | boolean;
export type SelectOption<T extends SelectOptionValue> = {
  value: T;
  label: string;
};

export type ForwardRef<T> = <Props>(props: Props & RefAttributes<T>) => ReactElement | null;
