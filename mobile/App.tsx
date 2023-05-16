import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-4xl font-bold text-gray-50">Hello World!</Text>
      <StatusBar style="light" />
    </View>
  )
}
