export const portfolioData: Record<"pt" | "en", any> = {
  pt: {
    objetivo: "Estudante de Análise e Desenvolvimento de Sistemas (27 anos) com experiência prática como Estagiária em Análise de Dados no INSS. Possuo conhecimentos em SQL, Python e Excel Avançado, aplicados na manipulação de bases de dados e suporte a processos analíticos. Com histórico em atendimento ao cliente, busco utilizar minha capacidade de resolução de problemas para contribuir com a eficiência da equipe e expandir minhas competências técnicas na área de dados.",
    graduacao: {
      instituicao: "Estácio de Sá",
      curso: "Análise e Desenvolvimento de Sistemas (EAD)",
      status: "3º Semestre | Previsão: Agosto 2027",
      descricao: "Formação superior focada em desenvolvimento de software, análise de sistemas, banco de dados e metodologias ágeis."
    },
    projects: [
      { title: "CineData", description: "Aplicação web interativa desenvolvida com Streamlit para análise e visualização de dados cinematográficos.", tags: ["Python", "Streamlit", "Pandas", "Plotly"], features: ["Dashboard interativo com filtros dinâmicos", "Análise de tendências temporais", "Visualizações customizadas com Plotly"], link: "https://lnkd.in/dg4DHpk8" },
      { title: "Dashboard de Combustíveis", description: "Dashboard analítico no Power BI processando mais de 420 mil registros de preços de combustíveis no Brasil.", tags: ["Power BI", "DAX", "Power Query", "SQL"], features: ["Processamento de 420k+ registros", "Análises geográficas por região", "KPIs de variação de preços"], link: "https://app.powerbi.com/links/8Rdq51rL08?ctid=da49a844-e2e3-40af-86a6-c3819d704f49&pbi_source=linkShare" },
      { title: "Gestão Zoop (RH)", description: "Sistema de gestão de RH e Performance desenvolvido para otimizar processos de recursos humanos.", tags: ["Power BI", "Excel", "Python"], features: ["Monitoramento de Turnover", "Análise de Headcount", "Indicadores de Performance"], link: "https://app.powerbi.com/links/wzg90pEuS3?ctid=da49a844-e2e3-40af-86a6-c3819d704f49&pbi_source=linkShare" },
      { title: "Análise de ROI (INSS)", description: "Projeto focado no cálculo e visualização do Retorno sobre Investimento (ROI) para processos internos.", tags: ["Power BI", "Análise Financeira", "Excel"], features: ["Cálculo automatizado de ROI", "Projeções de economia", "Dashboard de eficiência"], link: "https://liveestacio-my.sharepoint.com/:u:/g/personal/202506043397_alunos_estacio_br/IQAmxKaiUVdXSIn8rWNojlgrAcUktYzZ9DLN0DZS5Dirr_s?e=cPpEpw" },
      { title: "Análise de Salários", description: "Exploração de dados salariais utilizando Python e Streamlit para identificar padrões e médias.", tags: ["Python", "Streamlit", "EDA", "Pandas"], features: ["Análise exploratória (EDA)", "Gráficos de distribuição", "Filtros por nível de experiência"], link: "https://lnkd.in/dpGu4P3c" }
    ],
    certificados: [
      { nome: "Power BI: analisando dados de forma inteligente", horas: "12h", org: "Alura", cat: "dados", tag: "Power BI" },
      { nome: "Power BI: conceitos do uso de DAX", horas: "8h", org: "Alura", cat: "dados", tag: "DAX" },
      { nome: "Power BI: modelagem de dados", horas: "8h", org: "Alura", cat: "dados", tag: "Modelagem" },
      { nome: "Análise de dados: uma leitura crítica das informações", horas: "23h", org: "Enap", cat: "dados", tag: "Análise" },
      { nome: "Desenvolvimento de Painéis em Qlik Sense no INSS", horas: "20h", org: "INSS", cat: "dados", tag: "Qlik" },
      { nome: "Data Storytelling: transformando dados em histórias impactantes", horas: "8h", org: "Alura", cat: "dados", tag: "Storytelling" },
      { nome: "Introdução à Análise de Dados - Microsoft Power BI", horas: "5h", org: "Enap", cat: "dados", tag: "Power BI" },
      { nome: "Trabalhando com dados: fundamentos da análise de dados", horas: "6h", org: "Alura", cat: "dados", tag: "Fundamentos" },
      { nome: "Data Science: explorando e analisando dados", horas: "10h", org: "Alura", cat: "dados", tag: "Data Science" },
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
      { nome: "Excel Avançado", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
      { nome: "Excel Intermediário", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
      { nome: "Excel para análise de dados: funções, tabelas e gráficos", horas: "10h", org: "Alura", cat: "gestao", tag: "Excel" },
      { nome: "Excel: domine o editor de planilhas", horas: "8h", org: "Alura", cat: "gestao", tag: "Excel" },
      { nome: "Atuação do Encarregado na LGPD: A Função de Orientar", horas: "15h", org: "Enap", cat: "gestao", tag: "LGPD" },
      { nome: "Redação Oficial e Noções de SEI", horas: "10h", org: "Enap", cat: "gestao", tag: "Oficial" },
      { nome: "Prevenção e Enfrentamento ao Assédio", horas: "12h", org: "INSS", cat: "gestao", tag: "Ética" },
      { nome: "Workshop - Microsoft Office 365", horas: "9h", org: "INSS", cat: "gestao", tag: "Office" }
    ],
    notebooks: [
      { title: "Análise de Vendas (EDA)", description: "Exploração de dados e identificação de padrões de sazonalidade.", tags: ["🐼 Pandas", "📊 Matplotlib", "📈 Seaborn"], codeSnippet: "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('vendas.csv')\ndf.groupby('mes')['valor'].sum().plot()", link: "https://github.com/Emiliabz" },
      { title: "Previsão de Churn", description: "Modelo de Machine Learning para prever a probabilidade de cancelamento.", tags: ["⚙️ Scikit-learn", "🐼 Pandas", "🌳 XGBoost"], codeSnippet: "from sklearn.ensemble import RandomForestClassifier\n\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)", link: "https://github.com/Emiliabz" },
      { title: "Segmentação de Clientes", description: "Clusterização de clientes baseada em comportamento de compra.", tags: ["⚙️ Scikit-learn", "📊 Matplotlib", "🐼 Pandas"], codeSnippet: "from sklearn.cluster import KMeans\n\nkmeans = KMeans(n_clusters=4)\nlabels = kmeans.fit_predict(X)\ndf['Cluster'] = labels", link: "https://github.com/Emiliabz" }
    ]
  },
  en: {
    objetivo: "Systems Analysis and Development Student (27 years old) with practical experience as a Data Analysis Intern at INSS. I have knowledge in SQL, Python, and Advanced Excel, applied to database manipulation and analytical processes support. With a background in customer service, I aim to use my problem-solving skills to contribute to team efficiency and expand my technical skills in the data field.",
    graduacao: {
      instituicao: "Estácio de Sá",
      curso: "Systems Analysis and Development (Distance Learning)",
      status: "3rd Semester | Expected: August 2027",
      descricao: "Higher education focused on software development, systems analysis, databases, and agile methodologies."
    },
    projects: [
      { title: "CineData", description: "Interactive web application developed with Streamlit for cinematic data analysis and visualization.", tags: ["Python", "Streamlit", "Pandas", "Plotly"], features: ["Interactive dashboard with dynamic filters", "Temporal trends analysis", "Custom visualizations with Plotly"], link: "https://lnkd.in/dg4DHpk8" },
      { title: "Fuel Dashboard", description: "Analytical dashboard in Power BI processing over 420k fuel price records in Brazil.", tags: ["Power BI", "DAX", "Power Query", "SQL"], features: ["Processed 420k+ records", "Geographic analysis by region", "Price variation KPIs"], link: "https://app.powerbi.com/links/8Rdq51rL08?ctid=da49a844-e2e3-40af-86a6-c3819d704f49&pbi_source=linkShare" },
      { title: "Zoop Management (HR)", description: "HR and Performance management system developed to optimize human resources processes.", tags: ["Power BI", "Excel", "Python"], features: ["Turnover monitoring", "Headcount analysis", "Performance indicators"], link: "https://app.powerbi.com/links/wzg90pEuS3?ctid=da49a844-e2e3-40af-86a6-c3819d704f49&pbi_source=linkShare" },
      { title: "ROI Analysis (INSS)", description: "Project focused on calculating and visualizing the Return on Investment (ROI) for internal processes.", tags: ["Power BI", "Financial Analysis", "Excel"], features: ["Automated ROI calculation", "Savings projections", "Efficiency dashboard"], link: "https://liveestacio-my.sharepoint.com/:u:/g/personal/202506043397_alunos_estacio_br/IQAmxKaiUVdXSIn8rWNojlgrAcUktYzZ9DLN0DZS5Dirr_s?e=cPpEpw" },
      { title: "Salary Analysis", description: "Salary data exploration using Python and Streamlit to identify patterns and averages.", tags: ["Python", "Streamlit", "EDA", "Pandas"], features: ["Exploratory Data Analysis (EDA)", "Distribution charts", "Filters by experience level"], link: "https://lnkd.in/dpGu4P3c" }
    ],
    certificados: [
      { nome: "Power BI: Intelligent Data Analysis", horas: "12h", org: "Alura", cat: "dados", tag: "Power BI" },
      { nome: "Power BI: DAX Concepts", horas: "8h", org: "Alura", cat: "dados", tag: "DAX" },
      { nome: "Power BI: Data Modeling", horas: "8h", org: "Alura", cat: "dados", tag: "Modeling" },
      { nome: "Data Analysis: Critical Information Reading", horas: "23h", org: "Enap", cat: "dados", tag: "Analysis" },
      { nome: "Qlik Sense Dashboard Development at INSS", horas: "20h", org: "INSS", cat: "dados", tag: "Qlik" },
      { nome: "Data Storytelling: Transforming Data into Impactful Stories", horas: "8h", org: "Alura", cat: "dados", tag: "Storytelling" },
      { nome: "Introduction to Data Analysis - Microsoft Power BI", horas: "5h", org: "Enap", cat: "dados", tag: "Power BI" },
      { nome: "Working with Data: Data Analysis Fundamentals", horas: "6h", org: "Alura", cat: "dados", tag: "Fundamentals" },
      { nome: "Data Science: Exploring and Analyzing Data", horas: "10h", org: "Alura", cat: "dados", tag: "Data Science" },
      { nome: "Python for Data: First Steps", horas: "10h", org: "Alura", cat: "programacao", tag: "Python" },
      { nome: "Python for Data: Working with Functions and Structures", horas: "8h", org: "Alura", cat: "programacao", tag: "Python" },
      { nome: "Pandas: Getting to Know the Library", horas: "8h", org: "Alura", cat: "programacao", tag: "Pandas" },
      { nome: "MySQL: Executing Procedures", horas: "12h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "MySQL: Working with Functions", horas: "10h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "MySQL: Getting to Know the Tool", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "MySQL: Applied to Data Analysis", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "Querying with SQL: Joins, Views, and Transactions", horas: "10h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "SQLite Online: Executing SQL Queries", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "SQLite Online: Getting to Know SQL Statements", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "SQLite Online: Data Analysis with SQL", horas: "8h", org: "Alura", cat: "programacao", tag: "SQL" },
      { nome: "Data Immersion with Python", horas: "4h", org: "Alura", cat: "programacao", tag: "Python" },
      { nome: "Advanced Excel", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
      { nome: "Intermediate Excel", horas: "30h", org: "Enap", cat: "gestao", tag: "Excel" },
      { nome: "Excel for Data Analysis: Functions, Tables, and Charts", horas: "10h", org: "Alura", cat: "gestao", tag: "Excel" },
      { nome: "Excel: Master the Spreadsheet Editor", horas: "8h", org: "Alura", cat: "gestao", tag: "Excel" },
      { nome: "LGPD Officer Role: The Function of Guiding", horas: "15h", org: "Enap", cat: "gestao", tag: "LGPD" },
      { nome: "Official Drafting and SEI Basics", horas: "10h", org: "Enap", cat: "gestao", tag: "Official" },
      { nome: "Harassment Prevention and Coping", horas: "12h", org: "INSS", cat: "gestao", tag: "Ethics" },
      { nome: "Workshop - Microsoft Office 365", horas: "9h", org: "INSS", cat: "gestao", tag: "Office" }
    ],
    notebooks: [
      { title: "Sales Analysis (EDA)", description: "Data exploration and seasonality pattern identification.", tags: ["🐼 Pandas", "📊 Matplotlib", "📈 Seaborn"], codeSnippet: "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('sales.csv')\ndf.groupby('month')['value'].sum().plot()", link: "https://github.com/Emiliabz" },
      { title: "Churn Prediction", description: "Machine Learning model to predict cancellation probability.", tags: ["⚙️ Scikit-learn", "🐼 Pandas", "🌳 XGBoost"], codeSnippet: "from sklearn.ensemble import RandomForestClassifier\n\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)", link: "https://github.com/Emiliabz" },
      { title: "Customer Segmentation", description: "Customer clustering based on purchasing behavior.", tags: ["⚙️ Scikit-learn", "📊 Matplotlib", "🐼 Pandas"], codeSnippet: "from sklearn.cluster import KMeans\n\nkmeans = KMeans(n_clusters=4)\nlabels = kmeans.fit_predict(X)\ndf['Cluster'] = labels", link: "https://github.com/Emiliabz" }
    ]
  }
};

export const educationData = portfolioData.pt;