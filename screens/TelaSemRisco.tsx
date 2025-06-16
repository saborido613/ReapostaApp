import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

const TelaSemRisco = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>RESULTADO</Text>
        <Text style={styles.subtitulo}>SEU NÍVEL DE RISCO É:</Text>
        <Text style={styles.riscoVerde}>SEM RISCO</Text>

        <Image
          source={require("../assets/escudo_check.png")}
          style={styles.icone}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.botaoRede}
          onPress={() => navigation.navigate("RedeDeApoio")}
        >
          <Text style={styles.textoBotaoRede}>CONHEÇA NOSSA REDE DE APOIO</Text>
        </TouchableOpacity>

        <Text style={styles.textoExplicacao}>
          Você não apresenta sinais de comportamento problemático com apostas.
          {"\n\n"}
          Continue atento aos seus hábitos e mantenha o controle. Se algum dia
          sentir que o jogo está ocupando um espaço maior na sua vida, volte
          aqui para se reavaliar.
        </Text>

        <Text style={styles.recomendacao}>
          RECOMENDAMOS A PRÁTICA DE ATIVIDADES PARA QUE VOCÊ SE MANTENHA
          CONTROLADO. ESCOLHA A QUE MAIS LHE INTERESSA:
        </Text>

        <TouchableOpacity
         style={styles.botaoOpcao}
         onPress={() => Linking.openURL('https://www.terra.com.br/vida-e-estilo/saude-mental/6-exercicios-que-melhoram-a-saude-fisica-e-mental,29efe6e42d50d721ac2b62de2c70fb26mgs11r2c.html#google_vignette')}>
          <Text style={styles.textoBotao}>EXERCÍCIOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.botaoOpcao}
         onPress={() => Linking.openURL('https://www.terra.com.br/vida-e-estilo/turismo/internacional/viagens-dos-sonhos-site-lista-50-destinos-imperdiveis,642bcc1aa0391410VgnVCM4000009bcceb0aRCRD.html')}>
          <Text style={styles.textoBotao}>VIAGEM</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.botaoOpcao}
         onPress={() => Linking.openURL('https://blog.esfera.com.vc/veja-7-livros-em-alta-para-sua-lista-de-leitura/')}>
          <Text style={styles.textoBotao}>LEITURA</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TelaSemRisco;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000d2b",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  riscoVerde: {
    color: "#00FF7F",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  icone: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: "#00FF7F",
  },
  botaoRede: {
    backgroundColor: "#8a2be2",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  textoBotaoRede: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  textoExplicacao: {
    color: "#ffffff",
    fontSize: 13,
    textAlign: "justify",
    marginBottom: 24,
    lineHeight: 20,
  },
  recomendacao: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  botaoOpcao: {
    backgroundColor: "#8a2be2",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginVertical: 6,
    width: "100%",
  },
  textoBotao: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});
