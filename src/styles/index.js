import { createGlobalStyle } from "styled-components";

const poppins = require("../assets/fonts/Poppins-Regular.ttf");
const inter = require("../assets/fonts/Inter-VariableFont_slnt,wght.ttf");
const supermecado = require("../assets/fonts/SupermercadoOne-Regular.ttf");

export const Reset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, main, textarea {
        font: inherit;
        font-size: 1rem;
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const RootVariables = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${inter});
    }

    @font-face {
        font-family: "Poppins";
        src: url(${poppins});
    }

    @font-face {
        font-family: 'Supermercado One';
        src: url(${supermecado});
    }

    :root{
        //THEME COLORS
        --color-primary: #002543;
        --color-secondary-1: #2B4C64;
        --color-secondary-2: #6C8394;
        --color-background: #F3F2EF;

        //GENERAL COLORS
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-orange: #F75F30;
        --color-lightblue: #0072b1;
        --color-modal-container: rgba(134, 142, 150, 0.25);

        //GREY SCALE
        --grey-1: #F8F9FA;
        --grey-2: #E9ECEF;
        --grey-3: #868E96;
        --grey-4: #212529;
        --grey-4-semitransparent: rgba(33, 37, 41, 0.85);

        //BORDERS
        --radius-pixels-4: 4px;   
        --radius-pixels-8: 8px;  
        --radius-pixels-10: 10px;  
        --radius-percent-50: 50%;  
        
        //BOX SHADOW
        --box-shadow-layred: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
        --box-shadow-soft: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
        --box-shadow-smooth: 0 3px 3px rgba(0,0,0,0.2);

        //TRANSITIONS
        --transition-all-fast: all 0.5s ease-in-out;
        --transition-all-quick: all 0.2s ease-in-out;

        //FONTS
        --inter: 'Inter', sans-serif;
        --poppins: 'Poppins', sans-serif;

        //TYPOGRAPHY
        --title-24: bold 1.5rem var(--inter);
        --title-20: bold 1.25rem var(--inter);
        --title-16: bold 1rem var(--inter);
        --title-14: bold 0.9rem var(--inter);
        --text-14: lighter 0.85rem var(--poppins);
        --text-12: normal 0.75rem var(--poppins);
        --caption-10:  normal 0.60rem var(--poppins);
    }
`;

export const GlobalStyles = createGlobalStyle`
    body { 
        font: var(--text-12);
        background: var(--color-background);
        color: var(--grey-4);
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }
`;
