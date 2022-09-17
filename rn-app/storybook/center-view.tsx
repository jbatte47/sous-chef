import React, { ReactNode } from 'react';
import { SafeAreaView } from '../src/styled';

export default function CenterView({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      {children}
    </SafeAreaView>
  );
}
