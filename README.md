# ShortLink
Este é um projeto que visa a construção de um serviço de encurtamento de URLs, com as seguintes funcionalidades:

- Cadastro de usuário básico (sign up/login)
- Criação de URLs de forma anônima (sem fazer login)
- Deleção de URLs criadas pelo próprio usuário registrado
- Redirecionamento para a URL original quando a URL encurtada é visitada (por exemplo, shr.c/abcd -> www.google.com)
- Contagem do número de visitas de uma URL a cada visita
- Página com o top 100 das URLs mais visitadas
- Exibição do título das URLs no top 100

# Tecnologias usadas

- Node.js para o backend
- Vue.js para o frontend
- Quasar para o frontend
- MongoDB para o armazenamento de dados


# Como rodar o projeto
Para executar o projeto, siga os seguintes passos:

- Faça o clone do repositório.
- Instale as dependências do projeto executando o comando npm init para back e yarn para o front.
- Execute o comando npm run dev para iniciar o servidor de desenvolvimento.
- Execute o comando yarn quasar dev para iniciar o frontend.

# Melhorias futuras
Algumas partes do código que poderiam ser melhoradas com mais tempo disponível incluem:

- Adicionar testes automatizados para garantir que o sistema esteja funcionando corretamente em todas as situações.
- Melhorar a forma como é feita a requisição de atualização do ranking para o servidor visando fazer menos requisições para o mesmo.
- Melhorar a interface do usuário com mais recursos de design e uma experiência mais intuitiva.
- Implementar uma função para expirar URLs após um determinado período de tempo para evitar o acúmulo de URLs antigas no sistema.
- Melhorar a segurança do sistema, garantindo que as URLs criadas não possam ser usadas para realizar ataques.
- Implementar a possibilidade de personalizar URLs encurtadas, permitindo que os usuários escolham sua própria sequência de caracteres para encurtar a URL.

# Features que ficaram de fora

- Usuarios registrados podem deletar urls criadas por eles mesmos.
- Testes unitários e e2e
 
 # Vídeo de explicação da aplicação.
 - obs: Dados sensíveis estão expostos no backend pq ñ utilizei o .env e o git ignore com o intuito de agilizar o teste do projeto. 
 https://share.vidyard.com/watch/qNCYH7mPqQNDr3ecZfo8nr?
 
