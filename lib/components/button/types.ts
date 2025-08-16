import React from 'react';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}