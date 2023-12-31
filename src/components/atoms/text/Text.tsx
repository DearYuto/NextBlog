import React from 'react';
import { textColor, textSize, textWeight } from './text.css';
import { palette } from '@/utils/colors';

export type Props = {
  children: React.ReactNode;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: keyof typeof palette;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'bold' | 'extraBold';
};

export default function Text({
  children,
  as: Component = 'span',
  color = 'gray700',
  size = 'md',
  weight = 'normal',
}: Props) {
  return (
    <Component
      className={`${textColor[color]} ${textWeight[weight]} ${textSize[size]}`}
    >
      {children}
    </Component>
  );
}
