import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { handlers } from '../utils/handlers';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ReAposta</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>TRANSFORME APOSTAS EM ESCOLHAS!</Text>

        <Image
          source={require('../assets/cerebro.png')}
          style={styles.brain}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>RECUPERE O CONTROLE DA SUA VIDA.</Text>

        <TouchableOpacity style={styles.button} onPress={() => handlers.goToQuestionario(navigation)}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000d2b',
  },
  header: {
    backgroundColor: '#002266',
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 16,
  },
  brain: {
    width: 160,
    height: 160,
    marginVertical: 30,
    tintColor: '#fff',
  },
  button: {
    backgroundColor: '#1c6cd3',
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 16,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
});
