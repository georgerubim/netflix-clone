import { StyleSheet, Text, View } from 'react-native';

export default function Login() {

  return (
    <View style={styles.container}>
        <Text style={{color:"#fff"}}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
