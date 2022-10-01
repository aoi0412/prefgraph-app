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
    fontSize = '16px';
  } else if (size === 'md') {
    fontSize = '20px';
  } else {
    fontSize = '40px';
  }
  return <p style={{ padding: 0, margin: 0, fontSize, fontWeight: bold ? 'bold' : 'normal' }}>{children}</p>;
};

export default Text;
