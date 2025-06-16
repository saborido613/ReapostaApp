import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuestionario } from '../context/QuestionarioContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const PagePerguntas5 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { respostas, setResposta, calcularPontuacaoTotal } = useQuestionario();

  const podeAvancar = respostas[8] !== -1 && respostas[9] !== -1;

  const handleFinalizar = () => {
    if (!podeAvancar) return;

    const total = calcularPontuacaoTotal();

    console.log('TOTAL FINAL:', total);
    console.log('RESPOSTAS:', respostas);

    if (total <= 5) {
      navigation.navigate('TelaSemRisco');
    } else if (total <= 12) {
      navigation.navigate('TelaBaixoRisco');
    } else if (total <= 21) {
      navigation.navigate('TelaRiscoModerado');
    } else {
      navigation.navigate('TelaAltoRisco');
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
          9. VOCÊ JÁ ESCONDEU DE ALGUÉM O QUANTO APOSTOU OU PERDEU?
        </Text>
        {renderOpcoes(8)}
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>
          10. VOCÊ JÁ PEGOU DINHEIRO EMPRESTADO PARA APOSTAR OU PARA COBRIR PERDAS COM APOSTAS?
        </Text>
        {renderOpcoes(9)}
      </View>

      <TouchableOpacity
        style={[styles.botaoProximo, !podeAvancar && styles.botaoDesabilitado]}
        onPress={handleFinalizar}
        disabled={!podeAvancar}
      >
        <Text style={styles.textoProximo}>VER RESULTADO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PagePerguntas5;

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
