import React from "react";
import { css } from '../../../styled-system/css';
import type { CheckboxProps, SingleCheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({
  options,
  selectedValues,
  onSelectionChange,
  className,
}) => {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedValues, value]);
    } else {
      onSelectionChange(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <div
      className={`${css({
        display: 'flex',
        flexDirection: 'column',
        gap: 'token(spacing.checkboxWrapperGap)',
        fontFamily: 'token(fonts.mono)',
        backgroundColor: 'glitch.dark',
        padding: 'token(spacing.checkboxWrapperPadding)',
        borderRadius: 'token(radii.checkboxWrapper)',
      })}${className ? ` ${className}` : ""}`}
    >
      {options.map((option) => (
        <CheckboxItem
          key={option.id}
          id={option.id}
          name={option.id}
          value={option.value}
          label={option.label}
          checked={selectedValues.includes(option.value)}
          disabled={option.disabled}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

const CheckboxItem: React.FC<SingleCheckboxProps> = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  onChange,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(value, event.target.checked);
    }
  };

  const containerClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: 'token(spacing.checkboxGap)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    position: 'relative',
    
    _hover: disabled ? {} : {
      '& .checkbox-box': {
        boxShadow: '0 0 10px token(colors.glitch.primary)'
      },
      '& .checkbox-label::before': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'glitch.dark',
        color: 'glitch.secondary',
        animation: 'glitchText token(animations.glitchCheckboxDuration) cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      },
      '& .checkbox-label::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'glitch.dark',
        color: 'glitch.primary',
        animation: 'glitchText token(animations.glitchCheckboxDuration) cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both'
      }
    }
  });

  const checkboxBoxClass = css({
    width: 'token(sizes.checkboxSize)',
    height: 'token(sizes.checkboxSize)',
    border: '2px solid',
    borderColor: disabled ? 'glitch.disabled' : 'glitch.primary',
    position: 'relative',
    transition: 'all 0.3s ease',
    opacity: disabled ? '0.5' : '1',
    clipPath: 'polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)'
  });

  const checkboxMarkClass = css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'token(sizes.checkboxMarkSize)',
    height: 'token(sizes.checkboxMarkSize)',
    backgroundColor: 'glitch.primary',
    transform: checked ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
    opacity: checked ? '1' : '0',
    transition: 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
    clipPath: 'inherit',
    animation: checked ? 'glitchCheckbox token(animations.glitchCheckboxDuration) both' : 'none'
  });

  const labelClass = css({
    color: checked ? 'glitch.primary' : (disabled ? 'glitch.disabled' : 'glitch.text'),
    fontWeight: '500',
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    position: 'relative',
    textShadow: checked ? '0 0 8px rgba(0, 242, 234, 0.7)' : 'none',
    transition: 'color 0.3s ease, text-shadow 0.3s ease'
  });

  return (
    <label className={`${containerClass}${className ? ` ${className}` : ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={css({
          position: 'absolute',
          opacity: '0',
          width: '0',
          height: '0'
        })}
      />
      <div className={`${checkboxBoxClass} checkbox-box`}>
        <div className={`${checkboxMarkClass} checkbox-mark`}></div>
      </div>
      <span className={`${labelClass} checkbox-label`} data-text={label}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
export { CheckboxItem };
