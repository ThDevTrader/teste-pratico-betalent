# Meu Teste Técnico para Front-end BeTalent

Esta é uma aplicação React que exibe tabela com dados de colaboradores, permitindo pesquisa por nome, cargo ou telefone.

## 📌 Pré-Requisitos
✅ Construir a aplicação utilizando React ou Vanilla JS  
✅ Ser responsivo  
✅ Consumir API simulada rodando com json-server  
✅ Formatar - no Front - datas e números de telefone para os formatos brasileiros  
✅ Seguir guia de estilo -> [Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?type=design&node-id=1%3A4&mode=dev&t=vVxs9eyKybrYmq4Z-1)  

## 📌 Funcionalidades
✅ Visualizar tabela de colaboradores ao carregar a página  
✅ Ser possível filtrar colaboradores por nome, cargo ou número de telefone  
✅ Layout responsivo e ajustável para telas menores  

## 🖥️ Tecnologias Utilizadas
- React.js
- json-server (API simulada)
- Axios
- [date-fns](https://www.npmjs.com/package/date-fns?activeTab=readme) Para formatação de datas
- [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) Para formatação de números de telefone


## 🚀 Instalação e Configuração

### 1. Clonar o repositório  
via SSH
```bash
git clone git@github.com:ThDevTrader/teste-pratico-betalent.git
```
ou via HTTPS
```bash
git clone https://github.com/ThDevTrader/teste-pratico-betalent.git
```

### 2. Entre na pasta do projeto clonado
```bash
cd teste-pratico-betalent
```

### 3. Instalar dependências
YARN
```bash
yarn install
```
NPM
```bash
npm install
```

### 4. Build da aplicação
YARN
```bash
yarn build
```
NPM
```bash
npm run build
```

## 🖥️ Execução do Projeto

### 1. Inicie o json-server
YARN
```bash
yarn server
```
NPM
```bash
npm run server
```

### 2. Rode a aplicação
YARN
```bash
yarn dev
```
NPM
```bash
npm run dev
```

No seu terminal aparecerá algo assim:  
![image](https://github.com/user-attachments/assets/7b5038cf-37e6-44d0-a63a-7f489413bcdf)  
Dê Ctrl + clique ou copie e cole o link destacado em azul para abrir a aplicação no seu browser

## 💥 EXTRA
Na branch **develop** está incluída a opção de internacionalização. Com switches representados por bandeiras localizadas no header  
Com as opções português-Br, inglês e espanhol  

![image](https://github.com/user-attachments/assets/7d94c7e7-b68c-4cfd-81fe-9b578013a2f2)  

## 🖥️ Para acessar esta versão

### 1. Altere para a branch develop 

```bash
git checkout develop
```

### 2. E veja as alteração no browser  
Se as alterações não refletirem na tala será necessário atualizar a página do navegador  
Recomendado fazer **Ctrl + F5**

### 📌 Informações e Funcionalidades
✅ Uso da biblioteca **i18next** para gerenciar as traduções de forma dinâmica  
✅ Identifica o idioma do browser e inicia a aplicação seguindo esta configuração  
✅ É possível trocar entre idiomas nas bandeiras posicionadas à esquerda do header  
✅ Além das strings visíveis os **alt** da aplicação também são traduzidos, para manter a acessibilidade   
