const educationData = {
  objetivo: "Estudante de Análise e Desenvolvimento de Sistemas (27 anos) com experiência prática como Estagiária em Análise de Dados no INSS. Possuo conhecimentos em SQL, Python e Excel Avançado, aplicados na manipulação de bases de dados e suporte a processos analíticos. Com histórico em atendimento ao cliente, busco utilizar minha capacidade de resolução de problemas para contribuir com a eficiência da equipe e expandir minhas competências técnicas na área de dados.",
  
  graduacao: {
    instituicao: "Estácio de Sá",
    curso: "Análise e Desenvolvimento de Sistemas (EAD)",
    status: "3º Semestre | Previsão: Agosto 2027",
    descricao: "Formação superior focada em desenvolvimento de software, análise de sistemas, banco de dados e metodologias ágeis. Combinando teoria com prática em projetos reais."
  },

  experiencias: [
    {
      cargo: "Estagiária em Proteção, Análise de Dados e Suporte Administrativo",
      empresa: "INSS – Gerência Executiva de Jundiaí",
      periodo: "set/2025 – atual",
      descricao: "Processamento, análise e garantia de qualidade de dados em sistemas corporativos | Governança e proteção de dados sensíveis, assegurando conformidade | Criação de planilhas, gráficos e relatórios para suporte à decisão | Organização de documentos e otimização de fluxos de processos internos | Suporte e resolução em problemas, manutenção e instalação de equipamentos."
    },
    {
      cargo: "Auxiliar Administrativo",
      empresa: "Esplanada Móveis",
      periodo: "abr/2025 – jun/2025",
      descricao: "Controle de planilhas de estoque e atividades internas no Excel | Organização e arquivamento de documentos | Atendimento ao cliente e suporte administrativo."
    },
    {
      cargo: "Gestora de Marketing Digital e Operações",
      empresa: "Eco Pousada Vegana Maha Devas",
      periodo: "mai/2021 – fev/2025",
      descricao: "Gerenciamento da Pousada | Gestão de funcionários e voluntários | Criação e manutenção de redes sociais com crescimento orgânico e tráfego pago | Criação e edição de conteúdo multimídia para engajamento e branding | Acompanhamento de métricas e KPIs de desempenho digital | Gestão de reservas e comunicação com clientes via WhatsApp."
    },
    {
      cargo: "Empreendedora – Cosméticos Naturais",
      empresa: "Autônoma",
      periodo: "ago/2014 – mai/2021",
      descricao: "Controle completo de estoque, finanças e logística por meio de planilhas | Análise de custos, precificação e gestão de produção | Desenvolvimento de estratégias de vendas online e presencial com base em resultados | Atendimento ao cliente e gestão de relacionamento."
    }
  ],

  certificados: [
    // --- DADOS & BI (cat: "dados") ---
    { nome: "Power BI: analisando dados de forma inteligente", horas: "12h", org: "Alura", cat: "dados", tag: "Power BI" },
    { nome: "Power BI: conceitos do uso de DAX", horas: "8h", org: "Alura", cat: "dados", tag: "DAX" },
    { nome: "Power BI: modelagem de dados", horas: "8h", org: "Alura", cat: "dados", tag: "Modelagem" },
    { nome: "Análise de dados: uma leitura crítica das informações", horas: "23h", org: "Enap", cat: "dados", tag: "Análise" },
    { nome: "Desenvolvimento de Painéis em Qlik Sense no INSS", horas: "20h", org: "INSS", cat: "dados", tag: "Qlik" },
    { nome: "Data Storytelling: transformando dados em histórias impactantes", horas: "8h", org: "Alura", cat: "dados", tag: "Storytelling" },
    { nome: "Introdução à Análise de Dados - Microsoft Power BI", horas: "5h", org: "Enap", cat: "dados", tag: "Power BI" },
    { nome: "Trabalhando com dados: fundamentos da análise de dados", horas: "6h", org: "Alura", cat: "dados", tag: "Fundamentos" },
    { nome: "Data Science: explorando e analisando dados", horas: "10h", org: "Alura", cat: "dados", tag: "Data Science" },

    // --- PROGRAMAÇÃO (cat: "programacao") ---
    { nome: "Python para Dados: primeiros passos", horas: "10h", org: "Alura", cat: "programacao", tag: "Python" },
    { nome: "Python para Dados: trabalhando com funções e estruturas", horas: "8h", org: "Alura", cat: "programacao", tag: "Python" },
    { nome: "Pandas: conhecendo a biblioteca", horas: "8h", org: "Alura", cat: "programacao", tag: "Pandas" },
    { nome: "MySQL: executando Procedures", horas: "12h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "MySQL: trabalhando com funções", horas: "10h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "MySQL: conhecendo a ferramenta", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "MySQL: aplicado para análise de dados", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "Realizando consultas com SQL: Joins, Views e transações", horas: "10h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "SQLite Online: executando consultas SQL", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "SQLite Online: conhecendo instruções SQL", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "SQLite Online: análise de dados com SQL", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
    { nome: "Imersão Dados com Python", horas: "4h", org: "Alura", cat: "programacao", tag: "Python" },

    // --- GESTÃO & OFFICE (cat: "gestao") ---
    { nome: "Excel Avançado", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
    { nome: "Excel Intermediário", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
    { nome: "Excel para análise de dados: funções, tabelas e gráficos", horas: "10h", org: "Alura", cat: "gestao", tag: "Excel" },
    { nome: "Excel: domine o editor de planilhas", horas: "8h", org: "Alura", cat: "gestao", tag: "Excel" },
    { nome: "Atuação do Encarregado na LGPD: A Função de Orientar", horas: "15h", org: "Enap", cat: "gestao", tag: "LGPD" },
    { nome: "Redação Oficial e Noções de SEI", horas: "10h", org: "Enap", cat: "gestao", tag: "Oficial" },
    { nome: "Prevenção e Enfrentamento ao Assédio", horas: "12h", org: "INSS", cat: "gestao", tag: "Ética" },
    { nome: "Workshop - Microsoft Office 365", horas: "9h", org: "INSS", cat: "gestao", tag: "Office" }
  ]
};

export { educationData };
export default educationData;