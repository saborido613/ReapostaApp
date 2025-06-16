import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

export const handlers = {
  goToQuestionario: (navigation: NativeStackNavigationProp<RootStackParamList>) => {
    navigation.navigate('ChamadaQuestionario');
  },

 responderQuestionario: (navigation: NativeStackNavigationProp<RootStackParamList>) => {
    navigation.navigate('PagePerguntas1');
  },
};
