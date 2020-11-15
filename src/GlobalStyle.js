import {createGlobalStyle} from 'styled-components/macro'
import background from './assets/binary-code-background.png';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: 112.5%;
        font-family: 'Courier New', Courier, monospace;
        background-color: #141414;
        color: #96CE7A;
        font-family: sans-serif;

        /* background-image: url(${background});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; */
    
    }

    button:focus, textarea:focus, input:focus{
        outline: none;
    }
    a:link {
        text-decoration: none;
    }
      
    a:visited {
        text-decoration: none;
    }
      
    a:hover {
        text-decoration: underline;
    }
      
    a:active {
        text-decoration: underline;
    }

    h1 {
        margin:0;
        font-size: 150%;
        font-weight: 500;
    }

    h2 {
        margin:0;
        font-size: 130%;
        font-weight: 300;
    }

    p {
        margin: 0;
    }

`