import React, { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';

export interface IButtonProps {
  onPress: (...args: any[]) => void;
  children: ReactNode;
}

export default function Button({ onPress, children }: IButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
