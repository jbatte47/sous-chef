import React, { ReactNode } from 'react';
import { SafeAreaView } from '../../../src/styled';

export interface ICenterViewProps {
  children: ReactNode;
}

export default function CenterView({ children }: ICenterViewProps) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      {children}
    </SafeAreaView>
  );
}
