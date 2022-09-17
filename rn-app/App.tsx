import React from 'react';
import { SafeAreaView, Text } from './src/styled';
import StorybookUI from './storybook';

function App() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-start">
      <Text className="m-10 text-xl">
        Hi! I'm just an empty template right now, but I'm going to be the open
        source sous-chef app! Stay tuned!
      </Text>
    </SafeAreaView>
  );
}

const defaultExport =
  __DEV__ && process.env.START_STORYBOOK_OVERRIDE == '1' ? StorybookUI : App;

export default defaultExport;
