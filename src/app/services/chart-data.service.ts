import { Injectable } from '@angular/core';
import { Question } from '../interfaces/questionInterface';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  private readonly questions2021: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle e Análise Processual da sua Secretaria já está definida e publicada no DOM?',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores lotados na Divisão de Controle e Análise Processual de sua Secretaria atende à demanda existente?',
      dataValues: [11, 1, 6],
    },
    {
      text: '3 - O vínculo com o Município, dos servidores lotados na Divisão de Controle e Análise Processual, é preferencialmente efetivo?',
      dataValues: [9, 4, 5],
    },
    {
      text: '4 - Os servidores lotados na Divisão de Controle e Análise Processual são designados especificamente para essa atividade em atendimento ao Princípio da Segregação de Funções?',
      dataValues: [14, 1, 3],
    },
    {
      text: '5 - Há nessa Secretaria, Portaria de Designação da Equipe de Controle e Análise Processual, publicada no DOM e informada ao Órgão Central de Controle Interno?',
      dataValues: [7, 3, 8],
    },
    {
      text: '6 - O servidor nomeado na Unidade Executora como Gerente da Divisão de Controle e Análise Processual tem experiência na área de controle interno?',
      dataValues: [9, 1, 8],
    },
    {
      text: '7 - Qual o nível de escolaridade dos servidores lotados nessa Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual?',
      dataValues: [6, 1, 1, 6, 2, 2],
    },
    {
      text: '8 -  Os treinamentos oferecidos aos servidores da Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual atende anecessidade para o desempenho das funções afetas ao controle interno?',
      dataValues: [4, 3, 11],
    },
    {
      text: '9 - quantidades de computadores e mesas existentes na Divisão de Controle e Análise Processual são suficientes para atender a demanda?',
      dataValues: [8, 1, 9],
    },
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },



  ];

  private readonly questions2022: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores...',
      dataValues: [11, 1, 6],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  private readonly questions2023: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1],
    },
    {
      text: '2 - O quantitativo de servidores...',
      dataValues: [11, 1, 6],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  constructor() { }

  getQuestions(year: string): Question[] {
    switch (year) {
      case '2021':
        return this.questions2021;
      case '2022':
        return this.questions2022;
      case '2023':
        return this.questions2023;
      default:
        console.warn(`Data from year ${year} not found!`);
        return [];
    }
  }
}
