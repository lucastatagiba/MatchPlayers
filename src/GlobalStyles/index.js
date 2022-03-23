import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Roboto Mono", monospace;
}
body,input,button{
    font-size: 1rem;
}
h1, h2, h3, h4, h5, h6{
    font-weight: 700;
}
button{
    cursor: pointer;
}
a{
    text-decoration: none;
}

:root{
    --Blue-primary: #002543;
    --Blue-secundary: #2B4C64;
    --Color-Secondary: #6C8394;
    --Background-Color: #F3F2EF;
    --White-primary: #FFFFFF;
    --Black-primary: #000000;
    --Orange-primary: #F75F30;
//tons de cinza
    --Gray-4: #212529;
    --Gray-3: #868E96;
    --Gray-2: #E9ECEF;
    --Gray-1: #F8F9FA;
//fontsizes


}

body{
    background: var(--Background-Color);
}

`;
