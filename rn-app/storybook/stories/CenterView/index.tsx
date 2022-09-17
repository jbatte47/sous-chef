import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

export interface ICenterViewProps {
  children: ReactNode;
}

export default function CenterView({ children }: ICenterViewProps) {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      {children}
    </StyledView>
  );
}
