import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {color: '#3b5ec3'} }>Hello world! My name is Dexter!!! Hello my friend</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abeaba',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
