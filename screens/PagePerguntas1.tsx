import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuestionario } from '../context/QuestionarioContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const PagePerguntas1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { respostas, setResposta } = useQuestionario();

  const podeAvancar = respostas[0] !== -1 && respostas[1] !== -1;

  const handleAvancar = () => {
    if (podeAvancar) {
      navigation.navigate('PagePerguntas2');
    }
  };

  const renderOpcoes = (indicePergunta: number) => {
    const opcoes = ['0 - NUNCA', '1 - ÀS VEZES', '2 - FREQUENTEMENTE', '3 - SEMPRE'];
    
    return opcoes.map((texto, idx) => (
      <TouchableOpacity
        key={idx}
        style={[styles.botao, respostas[indicePergunta] === idx && styles.botaoSelecionado]}
        onPress={() => setResposta(indicePergunta, idx)}
      >
        <Text style={styles.botaoTexto}>{texto}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>
          1. VOCÊ JÁ APOSTOU MAIS DO QUE PODIA GASTAR?
        </Text>
        {renderOpcoes(0)}
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>
          2. VOCÊ JÁ PRECISOU APOSTAR VALORES CADA VEZ MAIORES PARA TER A MESMA EMOÇÃO?
        </Text>
        {renderOpcoes(1)}
      </View>

      <TouchableOpacity
        style={[styles.botaoProximo, !podeAvancar && styles.botaoDesabilitado]}
        onPress={handleAvancar}
        disabled={!podeAvancar}
      >
        <Text style={styles.textoProximo}>PRÓXIMA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PagePerguntas1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000d2b',
  },
  scrollContainer: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  perguntaContainer: {
    marginBottom: 40,
  },
  pergunta: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  botao: {
    backgroundColor: '#1c6cd3',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 6,
  },
  botaoSelecionado: {
    backgroundColor: '#468ef2',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.8,
  },
  botaoProximo: {
    backgroundColor: '#8a2be2',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 20,
  },
  textoProximo: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoDesabilitado: {
    opacity: 0.5,
  },
});
