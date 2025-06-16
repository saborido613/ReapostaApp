import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const profissionais = [
  {
    nome: 'DR. MATHEUS HARUO',
    especialidade: 'Psiquiatra',
    telefone: '(011) 1111-1111',
  },
  {
    nome: 'DR. LUCCA ALEXANDRE',
    especialidade: 'Psicólogo',
    telefone: '(011) 1111-1111',
  },
  {
    nome: 'DRA. JÚLIA SILVA',
    especialidade: 'Psicóloga',
    telefone: '(011) 1111-1111',
  },
];

const TelaRedeDeApoio = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>REDE DE APOIO</Text>

        <Text style={styles.descricao}>
          Conecte-se com quem pode te ajudar.
          Aqui você encontra psicólogos voluntários e profissionais prontos para oferecer acolhimento, escuta e orientação. 
          Marque uma consulta, converse com alguém de confiança e dê um passo importante no seu processo de mudança.
          {'\n\n'}
          Você não está sozinho. A recuperação começa com o primeiro contato.
        </Text>

        <Image
          source={require('../assets/apoio_mao.png')} 
          style={styles.icone}
          resizeMode="contain"
        />

        {profissionais.map((prof, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardTopo}>
              <Image source={require('../assets/avatar_user.png')} style={styles.avatar} />
              <View>
                <Text style={styles.nome}>{prof.nome}</Text>
                <Text style={styles.especialidade}>{prof.especialidade}</Text>
              </View>
            </View>

            <View style={styles.cardRodape}>
              <Image source={require('../assets/whatsapp.png')} style={styles.whatsappIcon} />
              <Text style={styles.telefone}>{prof.telefone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TelaRedeDeApoio;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000d2b',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
    paddingBottom: 40,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  descricao: {
    color: '#ffffff',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  icone: {
    width: 70,
    height: 70,
    marginBottom: 24,
    tintColor: '#FF4C4C',
  },
  card: {
    backgroundColor: '#8a2be2',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  cardTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 10,
    tintColor: '#fff',
  },
  nome: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  especialidade: {
    color: '#ffffff',
    fontSize: 13,
  },
  cardRodape: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  whatsappIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 10,
  },
  telefone: {
    color: '#ffffff',
    fontSize: 13,
  },
});
