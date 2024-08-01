import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Pretendard-Medium";
    font-size: 18px;
    line-height: 140%;
}

a {
    text-decoration: none;
    color: #000000;
}

input {
    border: none;
}

input:focus {
    outline: none;
}

textarea {
    border: none;
}

textarea:focus {
    outline: none;
}

button {
    border: none;
    background: #ffffff;
}
`;

export default GlobalStyle;
