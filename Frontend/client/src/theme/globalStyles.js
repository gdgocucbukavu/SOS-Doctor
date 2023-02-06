// globalStyles.js
import { createGlobalStyle } from "styled-components";

/**
 * Global styles
 * @returns {JSX.Element}
 * C'est ici que l'on peut définir des styles globaux pour l'application
 */
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
