import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="bg-black p-10 w-full flex items-center justify-center">
        <Text className="text-6xl text-white justify-center items-center">Planify</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
