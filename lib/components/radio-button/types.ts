export interface RadioOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupState {
  selectedValue: string | null;
  options: RadioOption[];
  name: string;
}

export interface RadioGroupActions {
  onSelectionChange: (value: string) => void;
}

// Domain model for our glitch radio - think of it like a cyberpunk jukebox
// Each option is like a frequency you can tune into
export interface RadioButtonProps extends RadioGroupActions {
  options: RadioOption[];
  selectedValue?: string;
  name: string;
  className?: string;
}