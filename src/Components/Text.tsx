/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { css } from '@emotion/css';
import { FC } from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  bold?: boolean;
  children: string;
};

const Text: FC<Props> = ({ size = 'sm', bold = false, children }) => (
  <p className={styles.text(size, bold)}>{children}</p>
);

const styles = {
  text: (size: 'sm' | 'md' | 'lg', bold: boolean) => css`
    padding: 0;
    margin: 0;
    font-size: ${size === 'sm' ? 16 : size === 'md' ? 20 : 40}px;
    font-weight: ${bold ? 'bold' : 'normal'};
  `,
};

export default Text;
