# DATA UPLOAD SYSTEM

This project is a frontend application developed in React that allows the loading and validation of data through CSV files, with support for user authentication. The application includes the following functionalities:

- Login page
- CSV file upload page
- Data error correction page
- Private routes protected by authentication

## Features

 > <div style="display:flex;flex-direction: column;justify-content: center; align-items: center;"><div style="display:flex;justify-content: center; align-items: center; margin-block: 2rem; gap:1rem;"><img src="https://cdn.iconscout.com/icon/free/png-256/free-react-226053.png" width="80" /><img src="https://reactrouter.com/_brand/react-router-stacked-color-inverted.png" width="150" /><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6oFwSJ0M--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/j95k9rwbdcxfhnqmyikf.png" width="200" /><img src="https://miro.medium.com/v2/resize:fit:1200/1*fEyeESs-HxVR7Zlr-fdlvw.png" width="150" /><img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" width="200" /></div></div>

 #

- **React**: JavaScript library for building user interfaces 
- **React Router**: Library to manage routes and navigation in the application
- **PapaParse**: Library for parsing CSV files 
- **Material UI**: Library of React UI components
- **Zustand**: React status library.

## Installation

1. Clone:

```bash
 git clone git@github.com:mauricioao/codeable-rt-full-stack.git .
 cd frontend
```

2. Install dependencies:

```bash
 npm install
```
3. Runs in development:

```bash
 npm run dev
```

## Estructura del Proyecto

```plaintext
├── public
├── ├── uploadicon.png
│   └── _redirects_
├── src
├── ├── assets
│   ├── modules
│   │   ├── Authentication
│   │   │   ├── components
│   │   │   ├── pages
│   │   │       ├── Login
│   │   │           ├── index.js
│   │   │           ├── Login.jsx
│   │   │           └── Login.module.css
│   │   │   ├── services
│   │   ├── Upload
│   │   │   ├── components
│   │   │       └── UserActions.jsx
│   │   │   ├── pages
│   │   │       ├── UploadEdit
│   │   │           └── ...
│   │   │       ├── UploadZone
│   │   │           └── ...
│   │   │   ├── services
│   │   │       └──upload-service.js
│   ├── routes
│   │   └── router.jsx
│   ├── shared
│   │   ├── components
│   │   │   ├── Header
│   │   │       └──...
│   │   ├── pages
│   │   │   ├── DefaultLayout
│   │   │       └──...
│   │   │   ├── Error
│   │   │       └──...
│   ├── ├── Theme.jsx
│   ├── store
│       └── store.jsx
│   └── utils
├── .env
├── .gitignore
├── index.html
├── .eslintrc.js
├── package.json
├── README.md
└── vite.config.js
```

## Dependencias

### Dependencias de Producción

- `papaparse`: CSV file parsing
- `react`: Frontend library
- `react-dom`: Library for manipulating the DOM with React 
- `react-router-dom`: Library to manage routes in React
- `zustand`: Status handler

  #### Material-ui 

- `@emotion/react`
- `@emotion/styled`
- `@fontsource/roboto`
- `@mui/icons-material`
- `@mui/lab`
- `@mui/material`
- `@mui/styled-engine-sc`
- `@mui/x-data-grid`
- `@mui/x-data-grid-generator`
- `localforage`
- `match-sorter`

### Dependencias de Desarrollo

- `@types/react`: TypeScript types for React 
- `@types/react-dom`: TypeScript types for React DOM 
- `@vitejs/plugin-react-swc`: Vite plugin for React 
- `eslint`: Linter for JavaScript 
- `eslint-plugin-react`: ESLint plugin for React 
- `eslint-plugin-react-hooks`: ESLint rules for React hooks 
- `eslint-plugin-react-refresh`: ESLint plugin for React Refresh 
- `vite`: Construction dev tools

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Despliegue

La aplicacion se encuentra desplegada en [Netlify](https://uploadsystem.netlify.app/) 


## Authors

- [@mauricioao](https://github.com/mauricioao)