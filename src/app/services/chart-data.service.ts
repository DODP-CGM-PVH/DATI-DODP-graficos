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
      text: '10 - As quantidades de computadores e mesas existentes na Divisão de Controle e Análise Processual são suficientes para atender a demanda?',
      dataValues: [14, 4],
    },
    {
      text: '11 - As quantidades de impressoras existentes na Divisão de Controle e Análise Processual atendem a necessidade da equipe?',
      dataValues: [13, 5],
    },
    {
      text: '12 - A Divisão de Controle e Análise Processual possui internet Banda larga?',
      dataValues: [16, 2],
    },
    {
      text: '13 - Estão definidas no Regimento Interno dessa Secretaria, todas as  atribuições inerentes a área operacional da Divisão de Controle e Análise Processual, para que cumpram suas determinações?',
      dataValues: [12, 4, 2],
    },
    {
      text: '14 - Os procedimentos de Controle são definidos e normatizados para a operacionalização da Divisão Controle e Análise Processual?',
      dataValues: [13, 1, 3, 1],
    },
    {
      text: '15 - A Divisão de Controle e Análise Processual emite relatório (mensal/anual) acerca dos trabalhos realizados pela Unidade?',
      dataValues: [7, 5, 5, 1],
    },
    {
      text: '16 - O Planejamento das atividades da Unidade Executora de Controle  Interno - Divisão de Controle e Análise Processual estão implantados?',
      dataValues: [7, 9, 2],
    },
    {
      text: '17 Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, bem como na LC nº 767/2019, Capítulo VI, art. 10,quanto às atribuições da Divisão de Controle e Análise Processual, asatribuições descritas estão sendo realizadas? Item I - exercer os controles estabelecidos nos regulamentos do sistema administrativo afetos a sua área de atuação, no que tange as atividades específicas ou auxiliares objetivando a observância da legislação, a salvaguarda do patrimônio e a busca da eficiência operacional: (ex. análise de processo antes do pagamento, com conferência do Check - List), conforme Dec. nº 15.403/2018.',
      dataValues: [17, 1],
    },
    {
      text: '18 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas  estão sendo realizadas? Item II - exercer o acompanhamento visando o controle sobre a execução do seu Orçamento Anual visando o cumprimento dos objetivos e metas inerentes à sua área de atuação definida no Plano Plurianual e na Lei de Diretrizes Orçamentária.',
      dataValues: [8, 1, 9],
    },
    {
      text: '19 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle eAnálise Processual, as atribuições descritas estão sendo realizadas?Item III - acompanhar o exercício do controle sobre o uso e guarda de bens pertencente ao poder Executivo Municipal, que no exercício de suasfunções sejam colocados à disposição de qualquer pessoa física ou unidade que os utilize.',
      dataValues: [8, 3, 6, 1],
    },
    {
      text: '20 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item IV - avaliar e acompanhar a execução dos contratos, convênios ouinstrumentos congêneres, afetos a sua unidade.',
      dataValues: [12, 3, 3],
    },
    {
      text: ' 21 Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item V - manter atualizada relação de responsáveis por dinheiros, valores e bens públicos, cujo rol deverá ser transmitido anualmente aoTribunal de Contas, comunicando-se quadrimestralmente as alterações.',
      dataValues: [10, 3, 4, 1],
    },
    {
      text: '22 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VI - comunicar ao nível hierárquico superior competente o conhecimento da ocorrência de atos ilegais, ilegítimos, irregulares ou antieconômico de que resultem, ou não, danos ao erário, sob pena de responsabilidade solidária.',
      dataValues: [15, 2, 1],
    },
    {
      text: '23 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767 Cap. VI, quanto às atribuições daDivisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VII - propor ao Órgão Central do Sistema deControle Interno e ao órgão central do respectivo sistemaadministrativo, a atualização ou a adequação dos regulamentos inerentes às suas atividades.',
      dataValues: [10, 2, 6],
    },
    {
      text: '24 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767 Cap. VI, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estãosendo realizadas? Item VIII - apoiar os trabalhos de avaliação de controle interno de gestão, facilitando o acesso a documentos einformações.',
      dataValues: [15, 1, 2],
    },
    {
      text: '25 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos das aquisições, se estão definidas normas e procedimentos para a apuração de irregularidades, incluindodesconformidades com a Legislação e com diretrizes de governança e de gestão?',
      dataValues: [16, 2],
    },
    {
      text: '26 - NA Divisão de Controle e Análise Processual, em casos comprovados de irregularidades, são encaminhadas tempestivamente as informações para os órgãos de controle competentes?',
      dataValues: [14, 1, 3],
    },
    {
      text: '27 - A Divisão de Controle e Análise Processual tem verificado se oprocesso administrativo está devidamente autuado, protocolado, numerado e rubricado por toda Secretaria onde o processo tramite, conforme orientação do art. 38, da Lei Federal nº 8.666/93, em conformidade com Item 02, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '28 - A Divisão de Controle e Análise Processual tem verificado nosprocessos administrativos das aquisições, se são iniciados por documentono qual consta explicitamente a necessidade da aquisição  (Memorando/Justificativa) devidamente autorizado pela autoridadecompetente?',
      dataValues: [17, 1],
    },
    {
      text: '29 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos, se as aquisições são precedidas da elaboraçãode Termo de Referência ou Projeto Básico, em atendimento ao art. 6º,Inciso IX e art. 7º, § 2º, Inciso I e II, da Lei 8.666/93 e, ainda,conforme Item 10, Anexo I, do Dec. Municipal Nº 15.403/2018 Devidamenteautorizado pelo Ordenador de despesas?',
      dataValues: [17, 1],
    },
    {
      text: '30 - A Divisão de Controle e Análise Processual tem verificado nos procedimentos das aquisições se constam memória de cálculo das estimativas de preços (Mínimo de três Cotações de Preços), com especificação completa do produto ou serviço, conforme disposto no Item 03 e Item 07, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '31 - A Divisão de Controle e Análise Processual tem verificado nosprocessos administrativos, se constam dos autos o Quadro Comparativo dePreços, devidamente certificado quanto à compatibilidade dos preços como mercado local e que as empresas são do ramo de atividade pertinente aoobjeto da despesa, conforme Item 08, Anexo I, do Dec. Municipal Nº15.403/2018?',
      dataValues: [16, 2],
    },
    {
      text: '32 - A Divisão de Controle e Análise Processual tem verificado oMemorando expedido pelo setor demandante da Unidade Requisitante doproduto/serviço, datado e assinado pelo dirigente do setor requisitante,  devidamente autorizado pela autoridade competente, no qual deveráconstar a especificação do pedido de acordo com a Ata de Registro dePreços e, a partir do segundo gerenciamento da mesma ata, deverá seranexado posições de empenho impressas do Sistema Informatizado de Contabilidade referente aos gerenciamentos anteriores, conforme Item 01,Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '33 - A Divisão de Controle e Análise Processual tem verificado aautorização da despesa pelo ordenador da despesa, na Requisição deGerenciamento de Ata de Registro de Preços (Art. 25 da Lei Complementar nº 648/2017 e alterações). Conforme Item 04, Anexo III, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: ' 34 - A Divisão de Controle e Análise Processual tem verificado aautorização da despesa pelo ordenador da despesa, na Requisição deGerenciamento de Ata de Registro de Preços (Art. 25 da Lei Complementarnº 648/2017 e alterações). Conforme Item 04, Anexo III, do Dec.  Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '35 - A Divisão de Controle e Análise Processual tem verificado seconstam dos autos, despacho emitido pela unidade requisitante, enviando os autos à Superintendência Municipal de Gestão de Gastos Públicos, paraanálise do pedido e gerenciamento da ata de registro de preços, conforme Item 06, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '36 - A Divisão de Controle e Análise Processual tem verificado a Reservade Saldo Orçamentário emitida pela Secretaria Municipal de Planejamento,Orçamento e Gestão - SEMPOG, com data e assinatura, conforme Item 10, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 1, 1],
    },
    {
      text: '37 - A Divisão de Controle e Análise Processual tem verificado aassinatura na nota de empenho pelo servidor registrado no SistemaInformatizado e pelo ordenador de despesas da unidade requisitante,conforme Item 12, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 2],
    },
    {
      text: '38 - A Divisão de Controle e Análise Processual tem verificado a entregada nota de empenho ao fornecedor, quando for o caso, realizada pelaunidade requisitante, ordem de serviço ou de fornecimento, com data,assinatura e identificação do responsável pela empresa no verso dodocumento, conforme Item 13, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '39 - A Divisão de Controle e Análise Processual tem verificado oContrato emitido pela Procuradoria Geral do Município, para os casosprevistos no artigo 62 da Lei Federal nº 8.666/93, observando ascláusulas necessárias estabelecidas no art. 55 da Lei Federal nº8.666/93, conforme Item 15, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [15, 1, 1, 1],
    },
    {
      text: '40 - A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M do extrato do Contrato, quando for o caso, conforme prazo estabelecido da Lei nº 8.666/1993, conforme Item 18, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '41- A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M da nomeação do Gestor e Fiscal do Contrato, quando for o caso, realizada pelo ordenador de despesas da unidade requisitante, quando for o caso, conforme Item 19, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 2],
    },
    {
      text: '42 - A Divisão de Controle e Análise Processual tem verificado NotaFiscal com preço unitário, total, data de emissão, dados da Prefeitura de Porto Velho, marca, quantidade, volume e dimensão (especificação  completa do produto ou serviço), devidamente certificada pelosservidores que efetuaram o recebimento/conferência no verso e datada, conforme Item 20, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '43 - A Divisão de Controle e Análise Processual tem verificado Certidões Negativas de débitos: INSS, FGTS, Justiça Trabalhista, Tributos Federais, Estaduais e Municipais, com validade e autenticida verificadas e certificadas por servidor devidamente identificado comnome completo, número do cadastro e cargo que exerce. Atenção: conferir os dados do fornecedor nas certidões (número da certidão, razão social,endereço, CNPJ, etc) - (Art. 28 e 29, da Lei Federal nº 8.666/93),conforme Item 23, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '44 - Nos processos administrativos de aquisição por adesão a Ata de Registro de Preços, há declaração explícita (Mem./Justificativa), de compatibilidade entre as especificações do objeto contratado e anecessidade da Secretaria, devidamente assinada pelo ordenador dedespesa, conforme Item 03, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '45 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos realizados por meio de adesão a Ata de Registro de Preços, contêm documento com a autorização formal do gestor da ata, bem como autorização do fornecedor para a adesão,conforme Item 04, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '46 - A Divisão de Controle e Análise Processual tem verificado Cópias do edital original, e não da minuta, e da respectiva Ata de Registro de Preço Publicada, demonstrando sua vigência e previsão de adesão à ata com a possibilidade da ''Carona'', consignando, se possível, o número de adesões a serem recepcionadas pelo gerenciador, conforme Item 05, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [15, 1, 1, 1],
    },
    {
      text: '47 - A Divisão de Controle e Análise Processual tem verificado o Ofício solicitando a adesão ao órgão gerenciador e ao fornecedor que possui preço registrado na Ata. OBS.: Se a Ata for externa, tem que prever a população, conforme parecer prévio 07/2014 (DOE TCE-RO 691, de 16 de junho de 2014, conforme Item 07, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '48 - A Divisão de Controle e Análise Processual tem verificado a Autorização de adesão a Ata de Registro de Preço pelo fornecedor que  possui preço registrado na ata, conforme Item 09, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
    },
    {
      text: '49 - A Divisão de Controle e Análise Processual tem verificado a Documentação relativa à habilitação jurídica da empresa fornecedora da Ata de Registro de Preço, sendo registro comercial no caso de empresaindividual ou contrato social ou ato constitutivo no caso de sociedades comerciais, objetivando comprovar que ela é do ramo de atividade do objeto da despesa - (Art. 34 da Lei Federal nº 8.666/93), conforme Item 11, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [15, 1, 1, 1],
    },
    {
      text: '50 - A Divisão de Controle e Análise Processual tem verificado a Justificativa da Vantajosidade e Economicidade da Adesão à Ata de Registro de Preços assinada pelo ordenador de despesa, Anexo XXVIII deste Decreto, conforme Item 18, Anexo IV, do Dec. Municipal Nº15.403/2018?',
      dataValues: [18],
    },
    {
      text: '51 - A Divisão de Controle e Análise Processual tem verificado o Parecer Jurídico da Procuradoria Geral do Município (Art. 38, Parágrafo único, da Lei Federal nº 8.666/93), conforme Item 21, Anexo IV, do Dec Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '52 - A Divisão de Controle e Análise Processual tem verificado a Publicação no DOM do Termo de Adesão a Ata de Registro de Preço (Carona) expedido pela unidade requisitante, conforme Item 22, Anexo IV, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [18],
    },
    {
      text: '53 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos por meio de Pregão Presencial, constam justificativas da inviabilidade da utilização da forma  eletrônica, conforme Artigo 4º, § 1º do Decreto Federal nº 5.450/05?',
      dataValues: [15, 1, 1, 1],
    },
  ];

  private readonly questions2022: Question[] = [
    {
      text: '14 - Os procedimentos de Controle são definidos e normatizados para a operacionalização da Divisão Controle e Análise Processual?',
      dataValues: [13, 1, 3, 1],
    },
    {
      text: '15 - A Divisão de Controle e Análise Processual emite relatório (mensal/anual) acerca dos trabalhos realizados pela Unidade?',
      dataValues: [7, 5, 5, 1],
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  private readonly questions2023: Question[] = [
    {
      text: '16 - O Planejamento das atividades da Unidade Executora de Controle  Interno - Divisão de Controle e Análise Processual estão implantados?',
      dataValues: [7, 9, 2],
    },
    {
      text: '17 Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, bem como na LC nº 767/2019, Capítulo VI, art. 10,quanto às atribuições da Divisão de Controle e Análise Processual, asatribuições descritas estão sendo realizadas? Item I - exercer os controles estabelecidos nos regulamentos do sistema administrativo afetos a sua área de atuação, no que tange as atividades específicas ou auxiliares objetivando a observância da legislação, a salvaguarda do patrimônio e a busca da eficiência operacional: (ex. análise de processo antes do pagamento, com conferência do Check - List), conforme Dec. nº 15.403/2018.',
      dataValues: [17, 1],
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
