import { createGlobalStyle } from 'styled-components'
export const cores = {
  branca: '#eee',
  preto: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#a3a3a3'
}

export const breakPoints = {
  desktop: '1024px',
  table: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${breakPoints.desktop}) {
    max-width: 80%;
  }
  }
`
