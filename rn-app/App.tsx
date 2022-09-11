import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    margin: 10,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tempText}>
        Hi! I'm just an empty template right now, but I'm going to be the open
        source sous-chef app! Stay tuned!
      </Text>
    </SafeAreaView>
  );
}
