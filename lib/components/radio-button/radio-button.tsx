import React from 'react';
import { css } from '../../../styled-system/css';
import type { RadioButtonProps, RadioOption } from './types';

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  name,
  onSelectionChange,
  className
}) => {
  const handleChange = (value: string) => {
    onSelectionChange(value);
  };

  return (
    <div
      className={`${css({
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        fontFamily: 'mono',
        backgroundColor: 'glitch.dark',
        padding: '2rem',
        borderRadius: '1rem',
      })}${className ? ` ${className}` : ''}`}
    >
      {options.map((option) => (
        <RadioButtonItem
          key={option.id}
          option={option}
          name={name}
          isSelected={selectedValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

interface RadioButtonItemProps {
  option: RadioOption;
  name: string;
  isSelected: boolean;
  onChange: (value: string) => void;
}

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  option,
  name,
  isSelected,
  onChange
}) => {
  const containerClass = css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: option.disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    position: 'relative',
    
    _hover: option.disabled ? {} : {
      '& .radio-circle': {
        boxShadow: '0 0 10px token(colors.glitch.primary)'
      },
      '& .radio-label::before': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'glitch.dark',
        color: 'glitch.secondary',
        animation: 'glitchText token(animations.glitchDuration) cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      },
      '& .radio-label::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'glitch.dark',
        color: 'glitch.primary',
        animation: 'glitchText token(animations.glitchDuration) cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both'
      }
    }
  });

  const radioCircleClass = css({
    width: '1.5em',
    height: '1.5em',
    border: '2px solid',
    borderColor: option.disabled ? 'glitch.disabled' : 'glitch.primary',
    borderRadius: '50%',
    position: 'relative',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: option.disabled ? '0.5' : '1'
  });

  const radioDotClass = css({
    width: '60%',
    height: '60%',
    backgroundColor: 'glitch.primary',
    borderRadius: '50%',
    transform: isSelected ? 'scale(1)' : 'scale(0)',
    opacity: isSelected ? '1' : '0',
    transition: 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
  });

  const pulseClass = css({
    position: 'absolute',
    inset: '0',
    border: '2px solid token(colors.glitch.primary)',
    borderRadius: '50%',
    opacity: '0',
    animation: isSelected ? 'pulseWave 1.2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
  });

  const labelClass = css({
    color: isSelected ? 'glitch.primary' : (option.disabled ? 'glitch.disabled' : 'glitch.text'),
    fontWeight: '500',
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    position: 'relative',
    textShadow: isSelected ? '0 0 8px rgba(0, 242, 234, 0.7)' : 'none'
  });

  return (
    <label className={containerClass}>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={isSelected}
        disabled={option.disabled}
        onChange={() => !option.disabled && onChange(option.value)}
        className={css({
          position: 'absolute',
          opacity: '0',
          width: '0',
          height: '0'
        })}
      />
      
      <div className={`${radioCircleClass} radio-circle`}>
        <div className={radioDotClass} />
        <div className={pulseClass} style={{ animationDelay: '0s' }} />
        <div className={pulseClass} style={{ animationDelay: '0.3s' }} />
      </div>
      
      <span 
        className={`${labelClass} radio-label`}
        data-text={option.label}
      >
        {option.label} 
      </span>
    </label>
  );
};

export default RadioButton;