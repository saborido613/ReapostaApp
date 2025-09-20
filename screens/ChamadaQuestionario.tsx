import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type ChamadaQuestionarioNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PagePerguntas1'>;

const ChamadaQuestionario = () => {
  const navigation = useNavigation<ChamadaQuestionarioNavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000d2b" />
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PagePerguntas1')}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChamadaQuestionario;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000d2b',
  },
  container: {
    flex: 1,
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
