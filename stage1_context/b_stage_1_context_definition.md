[Back to main Logbook Page](../hci_logbook.md)

---
# B. Stage 1 - Context Definition


# B.1. Competitor Identification
>	The competitor analysis will entail an identification of all competitors, with brief descriptions and a collection of the look and feel of their solutions, e.g., with screenshots, etc. It will also include a detailed analysis of the competitor deemed the best or more representative. It ends with a summary of the main findings including an HCI SWOT analysis



## B.1a. Competitors


| **Competitor**    | **Description**                             | Information repository              |
| ----------------- | ------------------------------------------- | ----------------------------------- |
| [PobreTV]    | [Plataforma online para ver filmes(for free)]        | ... |
| [Stremio] | [Plataforma que permite assistir a conteúdos via addons] |                                     |
| ...               |                                             |                                     |




## B.1b. Detailed Competitor Analysis
>	Choose the most notable competitor and do a more thorough analysis of their interactive solution
PobreTV fornece muitas funcionalidades presentes em muitos sites do estilo, como poder visualizar quais os conteudos disponíveis, butões para ações do utilizador mais usadas, diferentes opções para ver o mesmo video,
etc. Um dos aspetos que nos chamou a atenção em particular é porque é muito utilizado por pessoas à volta de
alguns dos membros da equipa e porque tem a opção de adiciona filmes aos favoritos sem ser necessária a criação duma conta. 

### - Heuristic Evaluation

#### Method
[ Describe the method used for the heuristic evaluation: procedure, number of experts, heuristics, severity scale considered, how was consensus done.]
>	Foram considerados os seguintes aspetos:
Cada um dos membros da equipa (3) utilizou e testou diferentes ações no site em si para cada um ter uma noção. Depois utilizamos os criterios de  ("10 Usability Heuristics for User Interface Design" by Jakob Nielsen) a medida que íamos utilizando o site, para cada criterio procuramos possíveis melhorias do mesmo e falta de possíveis funcionalidades úteis para o utilizador.
Depois de identificar estes problemas ou possíveis melhorias usamos e aplicamos uma escala de severidade a cada um deles. De 0 a 4, sendo 0 considerado não importante ou nem sequer é um problema de usabilidade e 4 sendo um problema de usabilidade catastrófico.


- Percorrer a interface e identificar funcionalidades importantes (ex: Pesquisa, Trailers, Avaliações).  
- Identificar problemas como botões escondidos, design confuso, falta de feedback.  
- Atribuir um **Severity Rating** de acordo com a gravidade do problema:

| Severidade | Significado |
|------------|------------|
| 1 | Pequeno (Não afeta muito) |
| 2 | Médio (Causa frustração) |
| 3 | Grave (Impede a tarefa) |
| 4 | Crítico (Deixa o site inutilizável) |

#### Individual Evaluations
<!-- For the individual heuristic evaluations by each member of the group, you can use the templates below, grouping problems by heuristic OR each evaluator can have a table listing all the detected problems with the number of the violated heuristics on the second column. Whichever your choice, you should have a list of problems, the severity, and a recommendation to mitigate it -->



- [expert1_heuristic_evaluation_workbook](heuristic_evaluations/expert1_heuristic_evaluation_workbook.md)

- [expert2_heuristic_evaluation_workbook](heuristic_evaluations/expert2_heuristic_evaluation_workbook.md)

- [expert3_heuristic_evaluation_workbook](heuristic_evaluations/expert3_heuristic_evaluation_workbook.md)


#### Consensus

>	After the individual analysis by each expert, all results should be gathered in a consensus table. If an expert has not found any of the problems found by other experts, they should analyse it, at this point, and give it a severity.


  | **Issue** | **Rúben** | **Carlos** | **Lázaro** | **Recommendations** |
|-----------|------------|------------|------------|-------------------|
| Quando não há resultados, aparece mensagem genérica ou sugestões aleatórias | 2 | 2 | 2 | Melhorar sugestões para conteúdos mais relevantes |
| Botão de favoritos muito pequeno e escondido | 2 | 3 | 3 | Aumentar o tamanho e destacar o botão de favoritos |
| Lista de favoritos escondida | 3 | 3 | 3 | Melhorar a visibilidade e o acesso à lista de favoritos |
| Não há um indicador claro de buffering (pode demorar tempo e o utilizador não saber) | 1 | 2 | 2 | Adicionar uma estimativa de tempo nos casos em que se sabe que a espera será longa devido à falta de rede |
| Algumas traduções automáticas podem causar confusão | 1 | 2 | 1 | Revisar traduções para evitar ambiguidades |
| Faltam botões para ações comuns, como ativar modo escuro, voltar ao topo ou trocar de episódios | 3 | 4 | 3 | Adicionar botões para facilitar essas ações |
| Muitos links levam a páginas quebradas ou sites suspeitos | 2 | 3 | 3 | Identificar quando um filme está indisponível e exibir um aviso claro |
| Não há opção para baixar vídeos para ver depois | 2 | 4 | 3 | Adicionar a opção de download para visualização offline |
| Falta suporte ao usuário para problemas mais complexos | 1 | 3 | 2 | Criar um link para contato com os criadores da página ou um fórum onde os usuários possam pedir ajuda |



---
### - Cognitive Walkthrough
-Pesquisar filme/serie
-Identificar filme/serie
-Selecionar o mesmo
-Reproduzir

#### Method
[Briefly described  the method you used for the Cognitive Walkthrough analysis. ]
Analizar tarefas comuns, que seriam realizadas por utilizadores, verificar se compreendem os passos necessários e se se identifica possíveis bloqueios.  

#### Task Selection and Task Analysis

[Which tasks did you select and why. What are the subtasks entailed for each ]


| Task                        | Subtasks                               |
| --------------------------- | -------------------------------------- |
| **1. Procurar um filme/série** | Clicar na barra de pesquisa     |
|                             | Escrever o nome |
|                             | Confirmar pesquisa      |



| Task                          | Subtasks                                |
| ----------------------------- | --------------------------------------- |
| **2. Ver detalhes do filme (sinopse, avaliação)** | Pesquisar o filme |
|                               | Selecionar da lista de filmes que aparecem             |
|                               | Ver informações na página do filme             |

| Task                          | Subtasks                                |
| ----------------------------- | --------------------------------------- |
| **3. Adicionar aos favoritos e ver Watchlist** | Pesquisar o filme |
|                               | Selecionar filme             |
|                               | Carregar em "Favorito"             | 			|
|  | ir para o fundo da página |
|  | Ver lista de favoritos (carregar botão favoritos)	|

#### Results

Task: [Procurar um Filme]

| Step # | Task/Action to Perform | Will User Know What to do at this step? (Yes/No) | Notes | If the user does the right thing, will they know it is progressing towards goal? (Yes/No) | Notes | Is Action Successful? (Yes/No) | Suggestions for Improvement |     |
| ------ | ---------------------- | ------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------- | ----- | ------------------------------ | --------------------------- | --- |
| 1 | Clicar na barra de pesquisa | Sim | Ícone de pesquisa claro | Sim | Placeholder ajuda | Sim | Nenhuma alteração necessária |
| 2 | Escrever nome do filme | Sim | O utilizador recebe feedback visual | Sim | Placeholder orienta | Sim | Nenhuma alteração necessária |
| 3 | Clicar enter ou símbolo da lupa | Sim | O botão está visível | Sim | Enter é interativo | Sim | Nenhuma alteração necessária |

Task: [Ver detalhes do filme]

| Step # | Task/Action to Perform | Will User Know What to do at this step? (Yes/No) | Notes | If the user does the right thing, will they know it is progressing towards goal? (Yes/No) | Notes | Is Action Successful? (Yes/No) | Suggestions for Improvement |     |
| ------ | ---------------------- | ------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------- | ----- | ------------------------------ | --------------------------- | --- |
| 1 | Pesquisar filme | Sim | Pesquisa fácil | Sim | Nome e imagem ajudam | Sim | Nenhuma alteração necessária |
| 2 | Selecionar filme da lista | Sim | Nome e imagem facilitam escolha | Sim | Feedback visual claro | Sim | Nenhuma alteração necessária |
| 3 | Deslizar para baixo e ver detalhes | Sim | Informação aparece após deslizar | Sim | Avaliação e sinopse são visíveis | Sim | Nenhuma alteração necessária |


Task: [Adicionar aos favoritos e ver Watchlist]

| Step # | Task/Action to Perform | Will User Know What to do at this step? (Yes/No) | Notes | If the user does the right thing, will they know it is progressing towards goal? (Yes/No) | Notes | Is Action Successful? (Yes/No) | Suggestions for Improvement |     |
| ------ | ---------------------- | ------------------------------------------------ | ----- | ----------------------------------------------------------------------------------------- | ----- | ------------------------------ | --------------------------- | --- |
| 1 | Pesquisar filme | Sim | Pesquisa intuitiva | Sim | Nome e imagem ajudam | Sim | Nenhuma alteração necessária |
| 2 | Selecionar filme da lista | Sim | Nome e imagem facilitam escolha | Sim | Feedback visual claro | Sim | Nenhuma alteração necessária |
| 3 | Carregar em "Favorito" | Sim | Botão visível, mas pequeno | Sim | Feedback visual presente | Sim | Aumentar botão de favoritos |
| 4 | Ir para o fundo da página | Não | Sem indicação clara de que a lista de favoritos está no fundo | Não | Pode ser confuso para o utilizador | Não | Tornar o acesso à lista de favoritos mais visível e intuitivo |
| 5 | Ver lista de favoritos (carregar botão favoritos) | Não | Botão pequeno e escondido | Não | Muitos cliques necessários | Não | Melhorar visibilidade da lista de favoritos |

## B.1c. Overall Analysis

[Here, you should summarize the main findings for the competitor panorama, listing key points that are valuable to inform the design of your solution, and also make an HCI SWOT analysis for the main competitor, taking into consideration what you learned from the heuristic evaluatio, cognitive walkthrough, online reviews, user feedback, etc.]

| **Strengths (Forças)** | **Weaknesses (Fraquezas)** |
|--------------------|--------------------|
| Interface simples e direta | Falta de feedback quando não há resultados -> podia dar melhores resultados |
| Pesquisa eficiente e rápida | Lista de favoritos mal posicionada |
| Informações detalhadas nos filmes | Botão de favoritos pouco visível |

| **Opportunities (Oportunidades)** | **Threats (Ameaças)** |
|--------------------|--------------------|
| Melhorar sugestões personalizadas | Concorrência forte de plataformas populares |
| Tornar funcionalidades mais acessíveis | Possível dificuldade de monetização |

---

# B.2. Users
>	For the users, there are two goals: 1) understand the current status of users in the domain you are addressing. How do they manage, what are the main tasks they do, if they use some tool for the purpose, what are current challenges, what might be improved, what might be new features, ...


## B.2a. Method

[What approach was followed to talk with users; what kind of users were considered. What was the goal of the interviews? What were the questions considered?]

Para recolher informações sobre os utilizadores, foram conduzidas entrevistas informais com diferentes perfis de consumidores de filmes e séries.  
As perguntas abordaram temas como:  
- Dispositivos mais utilizados para assistir.  
- Plataformas de streaming preferidas.  
- Dificuldades na pesquisa de conteúdos.  
- Critérios para escolha de filmes/séries.  
- Preferências de personalização.  
- Qualidade das recomendações das plataformas.  
- Funcionalidades desejadas.  

Os participantes incluem utilizadores de diferentes idades e hábitos de consumo, desde aqueles que utilizam serviços pagos (Netflix, Stremio) até aqueles que prefere plataformas gratuitas ou downloads(só ouve 1 no nosso caso).

## B.2b. Results

>	This section tracks all informal user interviews, summarizing key insights and linking to detailed notes for each session. 

### Interview List 
| Date       | Participant / Role | Key Insights                                                    | Link to Notes                |     |
| ---------- | ------------------ | --------------------------------------------------------------- | ---------------------------- | --- |
| 09-03-2024 | Bob / Usuário casual | Assiste principalmente na TV, acha que as recomendações são genéricas. Gostaria de mais opções de personalização. | [📄 Notes](interviews/interview-Bob.md) |
| 09-03-2024 | Joana / Usuário avançado | Usa Stremio e Hollywood TV, considera as recomendações úteis. Prefere pesquisar diretamente o que quer ver. | [📄 Notes](interviews/interview-Joana.md) |
| 09-03-2024 | Maria / Usuário casual | Usa Netflix e sites piratas. A escolha de conteúdos é influenciada por recomendações de amigos. Ignora as sugestões automáticas. | [📄 Notes](interviews/interview-Maria.md) |
| 09-03-2024 | Rei / Usuário ocasional | Prefere assistir no PC, usa Stremio (pirata). Gosta de explorar categorias antes de escolher algo. | [📄 Notes](interviews/interview-Rei.md) |
| 09-03-2024 | João / Usuário offline | Faz download dos filmes, não utiliza plataformas de streaming. Dá importância às recomendações de amigos. | [📄 Notes](interviews/interview-Joao.md) |

### Common Themes & Patterns 

**Dispositivos mais utilizados:**  
- PC e TV são os dispositivos mais comuns para assistir.  
- Alguns utilizadores usam telemóvel, mas não como principal meio.  

**Plataformas de streaming:**  
- **Netflix** e **Stremio** são as mais citadas.  
- Alguns preferem **sites piratas** ou **downloads offline**.  

**Dificuldades na pesquisa:**  
- Títulos disponíveis apenas numa língua.  
- Falta de pesquisa por partes (exemplo: encontrar um filme sem lembrar o nome completo).  
- Falta de legendas para certos conteúdos.  

**Critérios de escolha:**  
- **Sinopse e avaliações** são muito importantes.  
- **Trailers** ajudam, mas nem todos os utilizadores os veem.  
- **Recomendações de amigos** têm um grande peso.  

**Satisfação com as plataformas atuais:**  
- **Problemas apontados:**  
  - Categorias muito genéricas.  
  - Recomendação de conteúdos pouco relevante.  
  - Algumas plataformas não possuem todas as categorias que os utilizadores gostariam que apresentassem.  
- **Aspectos positivos:**  
  - Alguns utilizadores acham que as plataformas funcionam bem e não mudariam nada.  

**Personalização e recomendações:**  
- Maioria dos utilizadores **não vê necessidade de muitas personalizações**.  
- Alguns gostariam de mais **opções de continuar a ver**.  
- **Recomendações automáticas dividem opiniões:**  
  - Alguns acham úteis.  
  - Outros ignoram nas ou consideram nas genéricas.  

**Funcionalidades desejadas:**  
- Melhor organização das categorias e recomendações.  
- Alguns gostariam de **pesquisar por categorias personalizadas** ao invés de buscar diretamente.  
- --- 



---
[Back to main Logbook Page](../hci_logbook.md)

---
