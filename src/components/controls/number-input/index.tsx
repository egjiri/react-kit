import Input from 'components/controls/base/input';
import { SpecificInputProps } from 'components/controls/types';

export type NumberInputProps = SpecificInputProps<number>;

export default function NumberInput(inputProps: NumberInputProps) {
  return <Input {...inputProps} type="number" />;
}
