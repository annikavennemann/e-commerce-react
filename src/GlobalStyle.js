import {createGlobalStyle} from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: 112.5%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #242424;
        color: limegreen;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        font-size: 30px;
        font-weight: 500;
    }

    h2 {
        margin:0;
    }

`