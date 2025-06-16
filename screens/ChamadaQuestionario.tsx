import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { handlers } from '../utils/handlers';

const ChamadaQuestionario = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        VAMOS DAR O PRIMEIRO PASSO JUNTOS:{'\n'}
        DESCUBRA SEU NÍVEL DE RISCO NAS APOSTAS.{'\n'}
        RESPONDA O QUESTIONÁRIO A SEGUIR.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => handlers.responderQuestionario(navigation)}>
        <Text style={styles.buttonText}>RESPONDER AO QUESTIONÁRIO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChamadaQuestionario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000d2b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  message: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1c6cd3',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    minWidth: 260,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    letterSpacing: 0.8,
  },
});
