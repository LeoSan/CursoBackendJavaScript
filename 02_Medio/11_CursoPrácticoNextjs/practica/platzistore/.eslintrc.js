module.exports = {
  root: true,
  env: {
      browser: true,//Me permite trabajar con el browser
      amd: true,//manejor de protocolos internos de js
      node: true,//
      es6: true,//para que activo los entornos de trabajo
  },
  extends: [//Me permite usar pluging o recomendaciones 
      'eslint:recommended',
      'plugin:jsx-a11y/recommended',// plugin para accesibildad
      'plugin:prettier/recommended',//configuración base para respetar los ;
      'next',//Configuraciones basicas
      'next/core-web-vitals',//Configuraciones basicas
  ],
  rules: {//Reglas 
      'semi': ['error', 'always'],//implementamos que se use ; 
  },
}