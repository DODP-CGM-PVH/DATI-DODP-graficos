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
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '2 - O quantitativo de servidores lotados na Divisão de Controle e Análise Processual de sua Secretaria atende à demanda existente?',
      dataValues: [11, 1, 6],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '3 - O vínculo com o Município, dos servidores lotados na Divisão de Controle e Análise Processual, é preferencialmente efetivo?',
      dataValues: [9, 4, 5],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '4 - Os servidores lotados na Divisão de Controle e Análise Processual são designados especificamente para essa atividade em atendimento ao Princípio da Segregação de Funções?',
      dataValues: [14, 1, 3],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '5 - Há nessa Secretaria, Portaria de Designação da Equipe de Controle e Análise Processual, publicada no DOM e informada ao Órgão Central de Controle Interno?',
      dataValues: [7, 3, 8],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '6 - O servidor nomeado na Unidade Executora como Gerente da Divisão de Controle e Análise Processual tem experiência na área de controle interno?',
      dataValues: [9, 1, 8],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '7 - Qual o nível de escolaridade dos servidores lotados nessa Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual?',
      dataValues: [6, 1, 1, 6, 2, 2],
      labels: ["Nível superior: Todos os servidores", "Nível médio: Todos os servidores", "Nível médio: Acima de 03 servidores", "Nível superior: De 01 a 03 servidores", "Nível médio: De 01 a 03 servidores", "Nível superior: Acima de 03 servidores"],
      colors: ["#00ffff", "yellow", "purple", "red", "blue", "green"],
    },
    {
      text: '8 -  Os treinamentos oferecidos aos servidores da Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual atende anecessidade para o desempenho das funções afetas ao controle interno?',
      dataValues: [4, 3, 11],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '9 - quantidades de computadores e mesas existentes na Divisão de Controle e Análise Processual são suficientes para atender a demanda?',
      dataValues: [8, 1, 9],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '10 - As quantidades de computadores e mesas existentes na Divisão de Controle e Análise Processual são suficientes para atender a demanda?',
      dataValues: [14, 4],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow",]
    },
    {
      text: '11 - As quantidades de impressoras existentes na Divisão de Controle e Análise Processual atendem a necessidade da equipe?',
      dataValues: [13, 5],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow",]
    },
    {
      text: '12 - A Divisão de Controle e Análise Processual possui internet Banda larga?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '13 - Estão definidas no Regimento Interno dessa Secretaria, todas as  atribuições inerentes a área operacional da Divisão de Controle e Análise Processual, para que cumpram suas determinações?',
      dataValues: [12, 4, 2],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '14 - Os procedimentos de Controle são definidos e normatizados para a operacionalização da Divisão Controle e Análise Processual?',
      dataValues: [13, 1, 3, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '15 - A Divisão de Controle e Análise Processual emite relatório (mensal/anual) acerca dos trabalhos realizados pela Unidade?',
      dataValues: [7, 5, 5, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '16 - O Planejamento das atividades da Unidade Executora de Controle  Interno - Divisão de Controle e Análise Processual estão implantados?',
      dataValues: [7, 9, 2],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '17 Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, bem como na LC nº 767/2019, Capítulo VI, art. 10,quanto às atribuições da Divisão de Controle e Análise Processual, asatribuições descritas estão sendo realizadas? Item I - exercer os controles estabelecidos nos regulamentos do sistema administrativo afetos a sua área de atuação, no que tange as atividades específicas ou auxiliares objetivando a observância da legislação, a salvaguarda do patrimônio e a busca da eficiência operacional: (ex. análise de processo antes do pagamento, com conferência do Check - List), conforme Dec. nº 15.403/2018.',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '18 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas  estão sendo realizadas? Item II - exercer o acompanhamento visando o controle sobre a execução do seu Orçamento Anual visando o cumprimento dos objetivos e metas inerentes à sua área de atuação definida no Plano Plurianual e na Lei de Diretrizes Orçamentária.',
      dataValues: [8, 1, 9],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '19 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle eAnálise Processual, as atribuições descritas estão sendo realizadas?Item III - acompanhar o exercício do controle sobre o uso e guarda de bens pertencente ao poder Executivo Municipal, que no exercício de suasfunções sejam colocados à disposição de qualquer pessoa física ou unidade que os utilize.',
      dataValues: [8, 3, 6, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '20 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item IV - avaliar e acompanhar a execução dos contratos, convênios ouinstrumentos congêneres, afetos a sua unidade.',
      dataValues: [12, 3, 3],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: ' 21 Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item V - manter atualizada relação de responsáveis por dinheiros, valores e bens públicos, cujo rol deverá ser transmitido anualmente aoTribunal de Contas, comunicando-se quadrimestralmente as alterações.',
      dataValues: [10, 3, 4, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '22 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VI - comunicar ao nível hierárquico superior competente o conhecimento da ocorrência de atos ilegais, ilegítimos, irregulares ou antieconômico de que resultem, ou não, danos ao erário, sob pena de responsabilidade solidária.',
      dataValues: [15, 2, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '23 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767 Cap. VI, quanto às atribuições daDivisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VII - propor ao Órgão Central do Sistema deControle Interno e ao órgão central do respectivo sistemaadministrativo, a atualização ou a adequação dos regulamentos inerentes às suas atividades.',
      dataValues: [10, 2, 6],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '24 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767 Cap. VI, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estãosendo realizadas? Item VIII - apoiar os trabalhos de avaliação de controle interno de gestão, facilitando o acesso a documentos einformações.',
      dataValues: [15, 1, 2],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '25 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos das aquisições, se estão definidas normas e procedimentos para a apuração de irregularidades, incluindodesconformidades com a Legislação e com diretrizes de governança e de gestão?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '26 - NA Divisão de Controle e Análise Processual, em casos comprovados de irregularidades, são encaminhadas tempestivamente as informações para os órgãos de controle competentes?',
      dataValues: [14, 1, 3],
      labels: ["Atende em sua totalidade", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "yellow", "#FF1493"]
    },
    {
      text: '27 - A Divisão de Controle e Análise Processual tem verificado se oprocesso administrativo está devidamente autuado, protocolado, numerado e rubricado por toda Secretaria onde o processo tramite, conforme orientação do art. 38, da Lei Federal nº 8.666/93, em conformidade com Item 02, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '28 - A Divisão de Controle e Análise Processual tem verificado nosprocessos administrativos das aquisições, se são iniciados por documentono qual consta explicitamente a necessidade da aquisição  (Memorando/Justificativa) devidamente autorizado pela autoridadecompetente?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '29 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos, se as aquisições são precedidas da elaboraçãode Termo de Referência ou Projeto Básico, em atendimento ao art. 6º,Inciso IX e art. 7º, § 2º, Inciso I e II, da Lei 8.666/93 e, ainda,conforme Item 10, Anexo I, do Dec. Municipal Nº 15.403/2018 Devidamenteautorizado pelo Ordenador de despesas?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '30 - A Divisão de Controle e Análise Processual tem verificado nos procedimentos das aquisições se constam memória de cálculo das estimativas de preços (Mínimo de três Cotações de Preços), com especificação completa do produto ou serviço, conforme disposto no Item 03 e Item 07, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '31 - A Divisão de Controle e Análise Processual tem verificado nosprocessos administrativos, se constam dos autos o Quadro Comparativo dePreços, devidamente certificado quanto à compatibilidade dos preços como mercado local e que as empresas são do ramo de atividade pertinente aoobjeto da despesa, conforme Item 08, Anexo I, do Dec. Municipal Nº15.403/2018?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '32 - A Divisão de Controle e Análise Processual tem verificado oMemorando expedido pelo setor demandante da Unidade Requisitante doproduto/serviço, datado e assinado pelo dirigente do setor requisitante,  devidamente autorizado pela autoridade competente, no qual deveráconstar a especificação do pedido de acordo com a Ata de Registro dePreços e, a partir do segundo gerenciamento da mesma ata, deverá seranexado posições de empenho impressas do Sistema Informatizado de Contabilidade referente aos gerenciamentos anteriores, conforme Item 01,Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '33 - A Divisão de Controle e Análise Processual tem verificado aautorização da despesa pelo ordenador da despesa, na Requisição deGerenciamento de Ata de Registro de Preços (Art. 25 da Lei Complementar nº 648/2017 e alterações). Conforme Item 04, Anexo III, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: ' 34 - A Divisão de Controle e Análise Processual tem verificado aautorização da despesa pelo ordenador da despesa, na Requisição deGerenciamento de Ata de Registro de Preços (Art. 25 da Lei Complementarnº 648/2017 e alterações). Conforme Item 04, Anexo III, do Dec.  Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '35 - A Divisão de Controle e Análise Processual tem verificado seconstam dos autos, despacho emitido pela unidade requisitante, enviando os autos à Superintendência Municipal de Gestão de Gastos Públicos, paraanálise do pedido e gerenciamento da ata de registro de preços, conforme Item 06, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '36 - A Divisão de Controle e Análise Processual tem verificado a Reservade Saldo Orçamentário emitida pela Secretaria Municipal de Planejamento,Orçamento e Gestão - SEMPOG, com data e assinatura, conforme Item 10, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '37 - A Divisão de Controle e Análise Processual tem verificado aassinatura na nota de empenho pelo servidor registrado no SistemaInformatizado e pelo ordenador de despesas da unidade requisitante,conforme Item 12, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '38 - A Divisão de Controle e Análise Processual tem verificado a entregada nota de empenho ao fornecedor, quando for o caso, realizada pelaunidade requisitante, ordem de serviço ou de fornecimento, com data,assinatura e identificação do responsável pela empresa no verso dodocumento, conforme Item 13, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '39 - A Divisão de Controle e Análise Processual tem verificado oContrato emitido pela Procuradoria Geral do Município, para os casosprevistos no artigo 62 da Lei Federal nº 8.666/93, observando ascláusulas necessárias estabelecidas no art. 55 da Lei Federal nº8.666/93, conforme Item 15, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [15, 1, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '40 - A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M do extrato do Contrato, quando for o caso, conforme prazo estabelecido da Lei nº 8.666/1993, conforme Item 18, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não respondido"],
      colors: ["blue", "#FF1493"]
    },
    {
      text: '41- A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M da nomeação do Gestor e Fiscal do Contrato, quando for o caso, realizada pelo ordenador de despesas da unidade requisitante, quando for o caso, conforme Item 19, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Não respondido"],
      colors: ["blue", "#FF1493"]
    },
    {
      text: '42 - A Divisão de Controle e Análise Processual tem verificado NotaFiscal com preço unitário, total, data de emissão, dados da Prefeitura de Porto Velho, marca, quantidade, volume e dimensão (especificação  completa do produto ou serviço), devidamente certificada pelosservidores que efetuaram o recebimento/conferência no verso e datada, conforme Item 20, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não respondido"],
      colors: ["blue", "#FF1493"]
    },
    {
      text: '43 - A Divisão de Controle e Análise Processual tem verificado Certidões Negativas de débitos: INSS, FGTS, Justiça Trabalhista, Tributos Federais, Estaduais e Municipais, com validade e autenticida verificadas e certificadas por servidor devidamente identificado comnome completo, número do cadastro e cargo que exerce. Atenção: conferir os dados do fornecedor nas certidões (número da certidão, razão social,endereço, CNPJ, etc) - (Art. 28 e 29, da Lei Federal nº 8.666/93),conforme Item 23, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '44 - Nos processos administrativos de aquisição por adesão a Ata de Registro de Preços, há declaração explícita (Mem./Justificativa), de compatibilidade entre as especificações do objeto contratado e anecessidade da Secretaria, devidamente assinada pelo ordenador dedespesa, conforme Item 03, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '45 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos realizados por meio de adesão a Ata de Registro de Preços, contêm documento com a autorização formal do gestor da ata, bem como autorização do fornecedor para a adesão,conforme Item 04, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: "46 - A Divisão de Controle e Análise Processual tem verificado Cópias do edital original, e não da minuta, e da respectiva Ata de Registro de Preço Publicada, demonstrando sua vigência e previsão de adesão à ata com a possibilidade da ''Carona'', consignando, se possível, o número de adesões a serem recepcionadas pelo gerenciador, conforme Item 05, Anexo IV, do Dec. Municipal Nº 15.403/2018?",
      dataValues: [15, 1, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '47 - A Divisão de Controle e Análise Processual tem verificado o Ofício solicitando a adesão ao órgão gerenciador e ao fornecedor que possui preço registrado na Ata. OBS.: Se a Ata for externa, tem que prever a população, conforme parecer prévio 07/2014 (DOE TCE-RO 691, de 16 de junho de 2014, conforme Item 07, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não respondido"],
      colors: ["blue", "#FF1493"]
    },
    {
      text: '48 - A Divisão de Controle e Análise Processual tem verificado a Autorização de adesão a Ata de Registro de Preço pelo fornecedor que  possui preço registrado na ata, conforme Item 09, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não respondido"],
      colors: ["blue", "#FF1493"]
    },
    {
      text: '49 - A Divisão de Controle e Análise Processual tem verificado a Documentação relativa à habilitação jurídica da empresa fornecedora da Ata de Registro de Preço, sendo registro comercial no caso de empresaindividual ou contrato social ou ato constitutivo no caso de sociedades comerciais, objetivando comprovar que ela é do ramo de atividade do objeto da despesa - (Art. 34 da Lei Federal nº 8.666/93), conforme Item 11, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [15, 1, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
    {
      text: '50 - A Divisão de Controle e Análise Processual tem verificado a Justificativa da Vantajosidade e Economicidade da Adesão à Ata de Registro de Preços assinada pelo ordenador de despesa, Anexo XXVIII deste Decreto, conforme Item 18, Anexo IV, do Dec. Municipal Nº15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '51 - A Divisão de Controle e Análise Processual tem verificado o Parecer Jurídico da Procuradoria Geral do Município (Art. 38, Parágrafo único, da Lei Federal nº 8.666/93), conforme Item 21, Anexo IV, do Dec Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '52 - A Divisão de Controle e Análise Processual tem verificado a Publicação no DOM do Termo de Adesão a Ata de Registro de Preço (Carona) expedido pela unidade requisitante, conforme Item 22, Anexo IV, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '53 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos por meio de Pregão Presencial, constam justificativas da inviabilidade da utilização da forma  eletrônica, conforme Artigo 4º, § 1º do Decreto Federal nº 5.450/05?',
      dataValues: [15, 1, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Não respondido"],
      colors: ["blue", "red", "yellow", "#FF1493"]
    },
  ];

  private readonly questions2022: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle e Análise Processual da sua Secretaria já está definida e publicada no DOM?',
      dataValues: [16, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '2 - O quantitativo de servidores lotados na Divisão de Controle e Análise Processual de sua Secretaria atende à demanda existente?',
      dataValues: [7, 1, 10],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '3 - O vínculo com o Município, dos servidores lotados na Divisão de Controle e Análise Processual, é preferencialmente efetivo?',
      dataValues: [14, 4],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '4 - Os servidores lotados na Divisão de Controle e Análise Processual são designados especificamente para essa atividade em atendimento ao Princípio da Segregação de Funções?',
      dataValues: [14, 4],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '5 - Há nessa Secretaria, Portaria de Designação da Equipe de Controle e Análise Processual, publicada no DOM e informada ao Órgão Central de Controle Interno?',
      dataValues: [8, 2, 8],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '6 - O servidor nomeado na Unidade Executora como Gerente da Divisão de Controle e Análise Processual tem experiência na área de controle interno?',
      dataValues: [9, 1, 8],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '7 - Qual o nível de escolaridade dos servidores lotados nessa Unidade Executora de Controle Interno - Divisão de Controle e Análise  Processual?',
      dataValues: [13, 3, 1, 1],
      labels: ["Nível superior: Todos os servidores", "Nível superior: De 01 a 03 servidores", "Nível médio: Todos os servidores", "Nível superior: Acima de 03 servidores"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '8 - Os treinamentos oferecidos aos servidores da Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual atende a necessidade para o desempenho das funções afetas ao controle interno?',
      dataValues: [1, 4, 13],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '9 - Quanto à estrutura física, atende a Divisão de Controle e Análise Processual com espaço adequado e suficiente para o desempenho das atividades da Divisão?',
      dataValues: [9, 5, 4],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '10 - As quantidades de computadores e mesas existentes na Divisão de Controle e Análise Processual são suficientes para atender a demanda?',
      dataValues: [16, 2],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '11 - As quantidades de impressoras existentes na Divisão de Controle e Análise Processual atendem a necessidade da equipe?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue",]
    },
    {
      text: '12 - A Divisão de Controle e Análise Processual possui internet Banda larga?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue",]
    },
    {
      text: '13 - A Divisão de Controle e Análise Processual possui sistema informatizado próprio e vinculado aos demais sistemas do Poder Executivo para efetuar os registros dos trabalhos afeto ao Controle Interno?',
      dataValues: [7, 6, 5],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '14 - O Município possui Normas do Poder Executivo que regulamenta a criação da Unidade Executora de Controle (Divisão de Controle e Análise Processual), nesta Secretaria?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não atende"],
      colors: ["blue", "red",]
    },
    {
      text: '15 - Estão definidas no Regimento Interno dessa Secretaria, todas as atribuições inerentes a área operacional da Divisão de Controle e Análise Processual, para que cumpram suas determinações?',
      dataValues: [9, 4, 5],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '16 - Os procedimentos de Controle são definidos e normatizados para a operacionalização da Divisão Controle e Análise Processual?',
      dataValues: [14, 2, 2],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '17 - A Divisão de Controle e Análise Processual emite relatório(mensal/anual) acerca dos trabalhos realizados pela Unidade?',
      dataValues: [6, 6, 6],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '18 - O Planejamento das atividades da Unidade Executora de Controle Interno - Divisão de Controle e Análise Processual estão implantados?',
      dataValues: [4, 10, 4],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '19 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, bem como na LC nº 767/2019, Capítulo VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item I - exercer os controles estabelecidos nos regulamentos do sistema administrativo afetos a sua área de atuação, no que tange as atividades específicas ou auxiliares objetivando a observância da legislação, a salvaguarda do patrimônio e a busca da eficiência operacional: (ex. análise de processo antes do pagamento, com conferência do Check - List), conforme Dec. nº 15.403/2018.',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não atende"],
      colors: ["blue", "red"]
    },
    {
      text: '20 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item II - exercer o acompanhamento visando o controle sobre a execução do seu Orçamento Anual visando ocumprimento dos objetivos e metas inerentes à sua área de atuaçãodefinida no Plano Plurianual e na Lei de Diretrizes Orçamentária.',
      dataValues: [3, 12, 3],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '21 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item III - acompanhar o exercício docontrole sobre o uso e guarda de bens pertencente ao poder Executivo Municipal, que no exercício de suas funções sejam colocados à disposição de qualquer pessoa física ou unidade que os utilize.',
      dataValues: [6, 9, 3],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '22 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item IV - avaliar e acompanhar aexecução dos contratos, convênios ou instrumentos congêneres, afetos a sua unidade.',
      dataValues: [6, 8, 4],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '23 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item V - manter atualizada relação de responsáveis por dinheiros, valores e bens públicos, cujo rol deverá sertransmitido anualmente ao Tribunal de Contas, comunicando-se quadrimestralmente as alterações.',
      dataValues: [7, 8, 3],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '24 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767/2019 Capítulo VI, art. 10, quanto àsatribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VI - comunicar ao nível hierárquico superior competente o conhecimento da ocorrência de atosilegais, ilegítimos, irregulares ou antieconômico de que resultem, ou não, danos ao erário, sob pena de responsabilidade solidária.',
      dataValues: [11, 5, 2],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '25 - Considerando as orientações expedidas no Ofício Circular nº033/DOP/GAB/CGM/2017, LC nº 767/19, Cap. VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VII - propor ao Órgão Central do Sistema de Controle Interno e ao órgão central do respectivo sistema administrativo, a atualização ou a adequação dos regulamentos inerentes às suas atividades.',
      dataValues: [8, 5, 5],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '26 - Considerando as orientações expedidas no Ofício Circular nº 033/DOP/GAB/CGM/2017, LC nº 767/19, Cap. VI, art. 10, quanto às atribuições da Divisão de Controle e Análise Processual, as atribuições descritas estão sendo realizadas? Item VIII - apoiar os trabalhos de avaliação de controle interno de gestão, facilitando o acesso adocumentos e informações.',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Não atende"],
      colors: ["blue", "red"]
    },
    {
      text: '27 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos de despesas a conformidade com a Legislação vigente e com a diretrizes de governança e de gestão?',
      dataValues: [16, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '28 - Na Divisão de Controle e Análise Processual, em casos comprovados de irregularidades, são encaminhadas tempestivamente as informações para os órgãos de controle competentes?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '29 - A Divisão de Controle e Análise Processual tem verificado se o processo administrativo está devidamente autuado, protocolado, numerado e rubricado por toda Secretaria onde o processo tramite, conforme orientação do art. 38, da Lei Federal nº 8.666/93, em conformidade com Item 02, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '30 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos das aquisições, se são iniciados por documento no qual consta explicitamente a necessidade da aquisição (Memorando/Justificativa) devidamente autorizado pela autoridade  competente?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '31 - A Divisão de Controle e Análise Processual tem verificado nos processos administrativos, se as aquisições são precedidas da elaboração  de Termo de Referência ou Projeto Básico, em atendimento ao art. 6º, Inciso IX e art. 7º, § 2º, Inciso I e II, da Lei 8.666/93 e, ainda,  conforme Item 10, Anexo I, do Dec. Municipal Nº 15.403/2018 Devidamente autorizado pelo Ordenador de despesas?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '32 - A Divisão de Controle e Análise Processual tem verificado nos procedimentos das aquisições se constam memória de cálculo das estimativas de preços (Mínimo de três Cotações de Preços), com especificação completa do produto ou serviço, conforme disposto no Item  03 e Item 07, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '33 - A Divisão de Controle e Análise Processual tem verificado nos  processos administrativos, se constam dos autos o Quadro Comparativo de Preços, devidamente certificado quanto à compatibilidade dos preços com o mercado local e que as empresas são do ramo de atividade pertinente ao objeto da despesa, conforme Item 08, Anexo I, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '34 - A Divisão de Controle e Análise Processual tem verificado o Memorando expedido pelo setor demandante da Unidade Requisitante do produto/serviço, datado e assinado pelo dirigente do setor requisitante, devidamente autorizado pela autoridade competente, no qual deverá  constar a especificação do pedido de acordo com a Ata de Registro de  Preços e, a partir da mesma ata, deverá ser anexado posições de empenho impressas do Sistema Informatizado de Contabilidade referente aos gerenciamentos anteriores, conforme Item 01, Anexo III, do Dec. Municipal nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '35 - A Divisão de Controle e Análise Processual tem verificado a autorização da despesa pelo ordenador da despesa, na Requisição de Gerenciamento de Ata de Registro de Preços (Art. 25 da Lei Complementar nº 648/2017 e alterações). Conforme Item 04, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '36 - A Divisão de Controle e Análise Processual tem verificado se constam dos autos, despacho emitido pela unidade requisitante, enviando os autos à Superintendência Municipal de Gestão de Gastos Públicos, para análise do pedido e gerenciamento da ata de registro de preços, conforme  Item 06, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '37 - A Divisão de Controle e Análise Processual tem verificado a Reserva  de Saldo Orçamentário emitida pela Secretaria Municipal de Planejamento, Orçamento e Gestão - SEMPOG, com data e assinatura, conforme Item 10, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '38 - A Divisão de Controle e Análise Processual tem verificado a  assinatura na nota de empenho pelo servidor registrado no Sistema Informatizado e pelo ordenador de despesas da unidade requisitante, conforme Item 12, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '39 - A Divisão de Controle e Análise Processual tem verificado a entrega da nota de empenho ao fornecedor, quando for o caso, realizada pela unidade requisitante, ordem de serviço ou de fornecimento, com data  assinatura e identificação do responsável pela empresa no verso do documento, conforme Item 13, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '40 - A Divisão de Controle e Análise Processual tem verificado o Contrato emitido pela Procuradoria Geral do Município, para os casos previstos no artigo 62 da Lei Federal nº 8.666/93, observando as  cláusulas necessárias estabelecidas no art. 55 da Lei Federal nº 8.666/93, conforme Item 15, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '41 - A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M do extrato do Contrato, quando for o caso, conforme prazo estabelecido da Lei nº 8.666/1993, conforme Item 18, Anexo III, do  Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '42 - A Divisão de Controle e Análise Processual tem verificado a Publicação no D.O.M da nomeação do Gestor e Fiscal do Contrato, quando for o caso, realizada pelo ordenador de despesas da unidade requisitante, quando for o caso, conforme Item 19, Anexo III, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '43 - A Divisão de Controle e Análise Processual tem verificado Nota Fiscal com preço unitário, total, data de emissão, dados da Prefeitura de Porto Velho, marca, quantidade, volume e dimensão (especificação completa do produto ou serviço), devidamente certificad  pelos servidores que efetuaram o recebimento/conferência no verso e datada, conforme Item 20, Anexo III, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [18],
      labels: ["Atende em sua totalidade"],
      colors: ["blue"]
    },
    {
      text: '44 - A Divisão de Controle e Análise Processual tem verificado Certidões Negativas de débitos: INSS, FGTS, Justiça Trabalhista, Tributos Federais, Estaduais e Municipais, com validade e autenticidade  verificadas e certificadas por servidor devidamente identificado com  nome completo, número do cadastro e cargo que exerce. Atenção: conferir  os dados do fornecedor nas certidões (número da certidão, razão social, endereço, CNPJ, etc) - (Art. 28 e 29, da Lei Federal nº 8.666/93),  conforme Item 23, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '45 - Nos processos administrativos de aquisição por adesão a Ata de Registro de Preços, há declaração explícita (Mem./Justificativa), decompatibilidade entre as especificações do objeto contratado e a necessidade da Secretaria, devidamente assinada pelo ordenador de  despesa, conforme Item 03, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '46 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos realizados por meio de adesão a Ata de Registro de Preços, contêm documento com a autorização formal do gestor da ata, bem como autorização do fornecedor para a adesão, conforme Item 04, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: "47 - A Divisão de Controle e Análise Processual tem verificado Cópias do edital original, e não da minuta, e da respectiva Ata de Registro de Preço Publicada, demonstrando sua vigência e previsão de adesão à ata com a possibilidade da ''Carona'', consignando, se possível, o número de  adesões a serem recepcionadas pelo gerenciador, conforme Item 05, Anexo IV, do Dec. Municipal Nº 15.403/2018?",
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '48 - A Divisão de Controle e Análise Processual tem verificado o Ofício solicitando a adesão ao órgão gerenciador e ao fornecedor que possui  preço registrado na Ata. OBS.: Se a Ata for externa, tem que prever a população, conforme parecer prévio 07/2014 (DOE TCE-RO 691, de 16 de junho de 2014, conforme Item 07, Anexo IV, do Dec. Municipal Nº 15.403/2018)?',
      dataValues: [16, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '49 - A Divisão de Controle e Análise Processual tem verificado a  Autorização de adesão a Ata de Registro de Preço pelo fornecedor que possui preço registrado na ata, conforme Item 09, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '50 - A Divisão de Controle e Análise Processual tem verificado a Documentação relativa à habilitação jurídica da empresa fornecedora da Ata de Registro de Preço, sendo registro comercial no caso de empresa  individual ou contrato social ou ato constitutivo no caso de sociedades  comerciais, objetivando comprovar que ela é do ramo de atividade do  objeto da despesa - (Art. 34 da Lei Federal nº 8.666/93), conforme Item 11, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '51 - A Divisão de Controle e Análise Processual tem verificado a Justificativa da Vantajosidade e Economicidade da Adesão à Ata de  Registro de Preços assinada pelo ordenador de despesa, Anexo XXVIII deste Decreto, conforme Item 18, Anexo IV, do Dec. Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '52 - A Divisão de Controle e Análise Processual tem verificado o Parecer Jurídico da Procuradoria Geral do Município (Art. 38, Parágrafo único, da Lei Federal nº 8.666/93), conforme Item 21, Anexo IV, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '53 - A Divisão de Controle e Análise Processual tem verificado a Publicação no DOM do Termo de Adesão a Ata de Registro de Preço (Carona)  expedido pela unidade requisitante, conforme Item 22, Anexo IV, do Dec.Municipal Nº 15.403/2018?',
      dataValues: [17, 1],
      labels: ["Atende em sua totalidade", "Atende parcialmente"],
      colors: ["blue", "yellow"]
    },
    {
      text: '54 - A Divisão de Controle e Análise Processual tem verificado se as aquisições dos processos administrativos por meio de Pregão Presencial,  constam justificativas da inviabilidade da utilização da forma eletrônica, conforme Artigo 4º, § 1º do Decreto Federal nº 5.450/05?',
      dataValues: [15, 2, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente"],
      colors: ["blue", "red", "yellow"]
    },
    {
      text: '55 - O Órgão/Entidade possui planejamento estratégico com Missão, Visão, Valores, Objetivos, Indicadores e Metas aprovados?',
      dataValues: [10, 3, 3, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas", "Não respondeu"],
      colors: ["blue", "red", "yellow", "green", "#FF1493"]
    },
    {
      text: '56 - O Órgão/Entidade possui cadeia de valores definindo osmacroprocessos gerenciais, de apoio e finalísticos?',
      dataValues: [10, 3, 3, 1, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '57 - O Órgão/Entidade instituiu comitê interno de governança com o objetivo de garantir que as boas praticas de governança se desenvolvam e sejam apropriadas pela instituição de forma contínua e progressiva, conforme Art. 14 do Decreto nº 15.261/2018?',
      dataValues: [4, 11, 2, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '58 - O Órgão/Entidade designou unidade nova ou existente de gestão da integridade, à qual foi atribuída competência para coordenação da  estruturação, execução e monitoramento do Programa de Integridade; orientação e treinamento dos servidores com relação aos temas atinentes  ao Programa de Integridade; e promoção de outras ações relacionadas à implementação do Programa de Integridade, em conjunto com as demais  unidades do órgão ou entidade?',
      dataValues: [4, 9, 4, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '59 - O Órgão/Entidade aprovou seu plano de integridade, contendo caracterização do órgão ou entidade; ações de estabelecimento das unidades; levantamento de riscos para a integridade e medidas para seu tratamento; e previsão sobre a forma de monitoramento e a realização de  atualização periódica do Plano de Integridade?',
      dataValues: [3, 10, 4, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"],
    },
    {
      text: '60 - O Órgão/Entidade estabeleceu estratégia de organização e estrutura de gerenciamento de riscos, incluindo o estabelecimento, a manutenção, o monitoramento e o aperfeiçoamento dos controles internos da gestão?',
      dataValues: [3, 10, 4, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '61 - O Órgão/Entidade expediu instruções normativas que definam as rotinas de trabalho e que identifiquem, por subtítulos, os nomes das  unidades executoras; os conceitos que uniformizem o entendimento sobre  os aspectos mais relevantes ao assunto objeto da normatização; base  legal e regulamentar que interferem ou orientam as rotinas de trabalho e  os procedimentos de controle; processos que contemplam a gestão de  riscos descrevendo as atividades de identificar, avaliar e gerenciar  potenciais eventos que possam afetar a organização; responsabilidades  especificas das unidade responsáveis; e procedimentos de controledemonstrados em fluxograma?',
      dataValues: [6, 7, 4, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
    {
      text: '62 - Estão divulgadas no sítio eletrônico oficial do Órgão/Entidade as informações descritas nos itens anteriores?',
      dataValues: [6, 6, 5, 1],
      labels: ["Atende em sua totalidade", "Não atende", "Atende parcialmente", "Gerente da Divisão deve recorrer ao secretário Ordenador)\n por se tratar de questões gerenciais, compete ao ordenador \n deliberação quanto as respostas das questões supramencionadas"],
      colors: ["blue", "red", "yellow", "green"]
    },
  ];

  private readonly questions2023: Question[] = [
    {
      text: '1 - A nomeação e Análise Processual?',
      dataValues: [16, 1, 1],
      labels: [
        "Atende em sua totalidade",
        "Não atende",
        "Atende parcialmente"
      ],
      colors: ['red', 'blue', 'yellow']
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
