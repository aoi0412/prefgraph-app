/* eslint-disable react/require-default-props */
import { FC } from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  bold?: boolean;
  children: string;
};

const Text: FC<Props> = ({ size = 'sm', bold = false, children }) => {
  let fontSize;
  if (size === 'sm') {
    fontSize = '12px';
  } else if (size === 'md') {
    fontSize = '16px';
  } else {
    fontSize = '20px';
  }
  return <p style={{ fontSize, fontWeight: bold ? 'bold' : 'normal' }}>{children}</p>;
};

export default Text;
