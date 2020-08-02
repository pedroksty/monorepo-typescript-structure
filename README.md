<h1 align="center">
    <img alt="monorepo-typescript-structure" title="monorepo-typescript-structure" src="https://i.imgur.com/uZOaY2S.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedroksty/monorepo-typescript-structure?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedroksty/monorepo-typescript-structure">

  <a href="https://www.twitter.com/pedroksty/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fpedroksty%2Fnlw1">
  </a>
	
  
  <a href="https://github.com/pedroksty/monorepo-typescript-structure/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedroksty/monorepo-typescript-structure">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/pedroksty/monorepo-typescript-structure/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pedroksty/monorepo-typescript-structure?style=social">
  </a>
</p>

## 💻 Sobre o projeto

Este é um repositório monorepo com yarn workspaces, nele você vai encontrar toda a configuração inicial para o seu projeto com NodeJS, ReactJS, React Native e Expo em TypeScript, além disso toda a parte de eslint e prettier também já estão configuradas.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]
- [TypeScript][typescript]
- [Yarn Workspaces][yarn-workspaces]
- [Eslint][eslint]
- [Prettier][prettier]

## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em quatro partes:

1. Back End (pasta packages/server)
2. Front End (pasta packages/web)
3. Mobile com React Native CLI (pasta packages/mobile)
4. Mobile com Expo (pasta packages/app-expo)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Yarn][yarn], [Ambiente React Native][https://react-native.rocketseat.dev/].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/monorepo-typescript-structure.git

# Acesse a pasta do projeto no terminal/cmd
$ cd monorepo-typescript-structure

# Vá para a pasta server
$ cd packages/server

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:4444 - acesse http://localhost:4444
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/monorepo-typescript-structure.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd monorepo-typescript-structure

# Vá para a pasta da aplicação Front End
$ cd packages/web

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile com React Native Cli

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/monorepo-typescript-structure.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd monorepo-typescript-structure

# Vá para a pasta da aplicação Front End
$ cd packages/mobile

# Instale as dependências
$ yarn

# Execute a esse código no terminal
$ yarn start

# Execute a esse código em outro terminal porém no mesmo caminho
$ yarn android

# Escanei o QR CODE com o aplicativo Expo instalado no seu Smarthphone
```

### 📱Rodando a aplicação mobile com Expo

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/monorepo-typescript-structure.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd monorepo-typescript-structure

# Vá para a pasta da aplicação Front End
$ cd packages/app-expo

# Instale as dependências
$ yarn

# Execute a esse código no terminal
$ yarn start

# Escanei o QR CODE com o aplicativo Expo instalado no seu Smarthphone
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Pedro henrique 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedro-henrique-b9541a199/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[yarn]: https://yarnpkg.com/getting-started/install
[yarn-workspaces]: https://classic.yarnpkg.com/en/docs/workspaces/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
