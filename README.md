Frontend - EcoConnect
Este é o repositório do frontend do projeto EcoConnect, desenvolvido em Next.js com TypeScript.
Ele serve como interface para gerenciar projetos relacionados à sustentabilidade energética.


Como o código funciona?
O frontend está estruturado em páginas e componentes reutilizáveis, escritos em TypeScript e estilizados com CSS Modules. Ele se comunica com o backend por meio de APIs para exibir e manipular os dados dos projetos cadastrados. As principais partes incluem:

Páginas (src/app): Cada página representa uma seção do sistema, como projetos, integrantes e o chatbot.
Componentes (src/components): São partes visuais reutilizáveis, como cabeçalhos, rodapés e carrosséis.
Estilos Globais (src/app/globals.css): Define a aparência geral do site.
Configurações (next.config.mjs, tailwind.config.ts): Arquivos de configuração para Next.js e Tailwind CSS.
O frontend é responsivo e otimizado para acessibilidade.

Estrutura das Páginas
O frontend do EcoConnect utiliza a estrutura de pastas do Next.js, onde cada subpasta em src/app representa uma página do projeto. A seguir, está uma explicação das principais páginas:

1. Página Inicial (page.tsx)
Descrição: É a página principal do projeto, projetada para apresentar o objetivo e os destaques do EcoConnect.
Funcionalidade: Contém um resumo das funcionalidades e links rápidos para outras partes do sistema, como projetos e chatbot.
Componentes Usados:
Cabecalho.tsx (header)
Rodape.tsx (footer)
Carrossel.tsx (destaques visuais)

2. Página de Projetos (ProjetosPage/page.tsx)
Descrição: Apresenta uma lista de projetos cadastrados, incluindo informações sobre fontes de energia, regiões e impacto.
Funcionalidade: Permite visualizar os projetos registrados no sistema, cadastrar novos projetos e excluir projetos.
Componentes Usados:
CProjetos.tsx 

3. Página do Chatbot (BotPage/page.tsx)
Descrição: Página dedicada ao chatbot inteligente para auxiliar usuários com dúvidas sobre energias renováveis.
Funcionalidade: Oferece uma interface interativa para conversas com o bot.
Componentes Usados:
Bot.tsx (componente do chatbot)

4. Página dos Integrantes (Integrantes/page.tsx)
Descrição: Apresenta os membros da equipe responsável pelo desenvolvimento do EcoConnect.
Funcionalidade: Mostra fotos, nomes e breves descrições de cada integrante.
Componentes Usados:
Integrantes.tsx (lista de integrantes)
Componentes Comuns
Alguns componentes são utilizados em várias páginas para manter a consistência visual:

Cabecalho.tsx: Cabeçalho com menu de navegação.
Rodape.tsx: Rodapé com informações sobre o projeto.
Carrossel.tsx: Destacado na página inicial.
























This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
