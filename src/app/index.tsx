import { View, Text, StyleSheet } from "react-native"

export default function Home() {
  return (
    <View style={styles.container} >
      <Text>Hello React Native</Text>
    </View>
  )
}

// criando um objeto de estilização
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  }
})