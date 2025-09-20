import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { QuestionarioProvider } from "./context/QuestionarioContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import HomeScreen from "./screens/HomeScreen";
import ChamadaQuestionario from "./screens/ChamadaQuestionario";
import PagePerguntas1 from "./screens/PagePerguntas1";
import PagePerguntas2 from "./screens/PagePerguntas2";
import PagePerguntas3 from "./screens/PagePerguntas3";
import PagePerguntas4 from "./screens/PagePerguntas4";
import PagePerguntas5 from "./screens/PagePerguntas5";
import TelaSemRisco from "./screens/TelaSemRisco";
import TelaBaixoRisco from "./screens/TelaBaixoRisco";
import TelaRiscoModerado from "./screens/TelaRiscoModerado";
import TelaAltoRisco from "./screens/TelaAltoRisco";
import TelaRedeDeApoio from "./screens/TelaRedeDeApoio";
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function QuestionarioStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ChamadaQuestionario"
        component={ChamadaQuestionario}
      />
      <Stack.Screen name="PagePerguntas1" component={PagePerguntas1} />
      <Stack.Screen name="PagePerguntas2" component={PagePerguntas2} />
      <Stack.Screen name="PagePerguntas3" component={PagePerguntas3} />
      <Stack.Screen name="PagePerguntas4" component={PagePerguntas4} />
      <Stack.Screen name="PagePerguntas5" component={PagePerguntas5} />
      <Stack.Screen name="TelaSemRisco" component={TelaSemRisco} />
      <Stack.Screen name="TelaBaixoRisco" component={TelaBaixoRisco} />
      <Stack.Screen name="TelaRiscoModerado" component={TelaRiscoModerado} />
      <Stack.Screen name="TelaAltoRisco" component={TelaAltoRisco} />
    </Stack.Navigator>
  );
}

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#002266", 
        },
        headerTintColor: "#fff", 
        drawerStyle: {
          backgroundColor: "#000d2b", 
        },
        drawerLabelStyle: {
          color: "#fff", 
        },
      }}
    >
      <Drawer.Screen name="Questionário" component={QuestionarioStack} />
      <Drawer.Screen name="Rede de Apoio" component={TelaRedeDeApoio} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  const { userToken } = useAuth();
  return userToken ? <MainDrawerNavigator /> : <LoginScreen />;
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <QuestionarioProvider>
          <RootNavigator />
        </QuestionarioProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
