import React from 'react';
import { View, Text } from '../../../src/styled';

export default function Welcome() {
  return (
    <View className="flex-1 p-24 justify-center">
      <Text className="text-lg m-6">Welcome to React Native Storybook</Text>
      <Text className="text-xs m-4">
        This is a UI Component development environment for your React Native
        app. Here you can display and interact with your UI components as
        stories. A story is a single state of one or more UI components. You can
        have as many stories as you want. In other words a story is like a
        visual test case.
      </Text>
      <Text className="text-xs m-4">
        We have added some stories inside the "storybook/stories" directory for
        examples. Try editing the "storybook/stories/Welcome.js" file to edit
        this message.
      </Text>
    </View>
  );
}
