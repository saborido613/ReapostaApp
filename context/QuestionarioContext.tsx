import React, { createContext, useContext, useState, ReactNode } from 'react';

type QuestionarioContextData = {
  respostas: number[];
  setResposta: (indice: number, valor: number) => void;
  calcularPontuacaoTotal: () => number;
  resetar: () => void;
};

const TOTAL_PERGUNTAS = 10;

const QuestionarioContext = createContext<QuestionarioContextData | undefined>(undefined);

export const QuestionarioProvider = ({ children }: { children: ReactNode }) => {
  const [respostas, setRespostas] = useState<number[]>(() => Array(TOTAL_PERGUNTAS).fill(-1));

  const setResposta = (indice: number, valor: number) => {
    if (indice < 0 || indice >= TOTAL_PERGUNTAS) {
      console.warn(`Índice de resposta inválido: ${indice}`);
      return;
    }
    setRespostas((prev) => {
      const novas = [...prev];
      novas[indice] = valor;
      return novas;
    });
  };

  const calcularPontuacaoTotal = () =>
    respostas.reduce((acc, val) => (val >= 0 ? acc + val : acc), 0);

  const resetar = () => {
    setRespostas(Array(TOTAL_PERGUNTAS).fill(-1));
  };

  return (
    <QuestionarioContext.Provider value={{ respostas, setResposta, calcularPontuacaoTotal, resetar }}>
      {children}
    </QuestionarioContext.Provider>
  );
};

export const useQuestionario = (): QuestionarioContextData => {
  const context = useContext(QuestionarioContext);
  if (!context) {
    throw new Error('useQuestionario deve ser usado dentro de um QuestionarioProvider');
  }
  return context;
};
