export interface CheckboxOption {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxProps {
  options: CheckboxOption[];
  selectedValues: string[];
  onSelectionChange: (selectedValues: string[]) => void;
  className?: string;
}

export interface SingleCheckboxProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: string, checked: boolean) => void;
  className?: string;
}