[Back to main Logbook Page](../hci_logbook.md)

---

# E. Functional Prototype and Evaluation

# Prototype
O protótipo desenvolvido consiste numa aplicação de streaming com as seguintes funcionalidades principais:

- Pesquisa Avançada de Filmes: Com filtros.

- Gestão de Listas Pessoais: Permite criar várias listas personalizadas (ex. "Favoritos") e adicionar/remover conteúdos.

- Reprodução de Conteúdo: Capacidade de assistir episódios ou filmes diretamente a partir das listas.

- Perfil Personalizado: Os utilizadores podem editar preferências (géneros favoritos) para receber recomendações automáticas.

- Integração com Listas Públicas: Possibilidade de seguir listas populares que o sistema tem.


# E.X. User Evaluation

1. A funcionalidade de adicionar géneros ao perfil não é consistente com o sistema de filtros da pesquisa. Sugestão: unificar o design/interação entre ambos.

Em Recommendations, os géneros usados como filtro deviam ser visíveis (ex. etiqueta "Horror").

2. Interface e Navegação
Falta um atalho visível para "My Lists" na barra de navegação principal, dificultando o acesso rápido.

O botão "Adicionar à lista" (amarelo) Deve ser centralizado e mais intuitivo. Sugestão: trocar o texto por um ícone de "check" após clique, indicando sucesso ou adicionar um '+' para dar a entender a possivel ação.

3. Terminologia e Consistência
O texto “Adicionar aos Favoritos” na página do filme é confuso. Sugestão: mudar para “Adicionar às Minhas Listas” para refletir melhor a funcionalidade real.

4. Feedback Visual e Notificações
Ao adicionar uma lista às “listas seguidas”, o utilizador não recebe confirmação. Sugestão: implementar uma notificação rápida ("toast") a confirmar a ação.

5. Página Inicial e Recomendações
Recomendações personalizadas devem ser deslocadas para a página inicial para promover descoberta direta.

O sistema atual não mostra filtros ativos de forma clara. Sugeriu-se melhorar a visibilidade dos filtros aplicados na página de recomendações.

6. Repetição
Foi observado que filmes podiam ser repetidos em "Favoritos".

Nota: 
é só preciso fazer Paginas html, css, js para que seja possivel estas açoes serem feitas,
(a pessoa ja fez login, n é preciso fazer login)


---
[Back to main Logbook Page](../hci_logbook.md)

---