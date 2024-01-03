import { palette } from '@/utils/colors';
import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  padding: '10px 15px',
  cursor: 'pointer',
  borderRadius: '10px 10px 0 0',
});

export const tab = styleVariants({
  active: [
    base,
    {
      color: palette.primary,
      background: palette.serenity50,
      borderBottom: `2px solid ${palette.primary}`,
    },
  ],
  inactive: [base, { background: palette.white, color: palette.gray700 }],
});