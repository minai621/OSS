import { ThemeOverride } from '@chakra-ui/react';

export const buttonStyle = {
  baseStyle: {
    borderRadius: '3xl',
    fontsize: 16,
  },
  sizes: {
    lg: {
      px: 16,
      fontSize: 14,
    },
    md: {
      px: 8,
      fontSize: 14,
    },
  },
  variants: {
    primary: (props: ThemeOverride) => ({
      bg: 'SDB',
      color: 'white',
      _hover: {
        boxShadow: 'md'
      }
    }),
    secondary: (props: ThemeOverride) => ({
      bg: 'SDB',
      color: 'white',
      _hover: {
        boxShadow: 'md'
      }
    }),
    defaultProps: {
      variant: 'primary'
    }
  }
};