'use client';

// import { LobeHub } from '@lobehub/ui/brand';
import { createStyles } from 'antd-style';
// import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

// import { ORG_NAME } from '@/const/branding';
// import { UTM_SOURCE } from '@/const/url';
// import { isCustomORG } from '@/const/version';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    line-height: 1;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      dir={'ltr'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
     />
  );
});

export default BrandWatermark;
