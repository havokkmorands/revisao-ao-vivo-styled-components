import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }

    h1 {
        color: ${props => props.theme.titles};        
    }

    .changetheme {
        background-color: ${props => props.theme.changetheme};
        color: ${props => props.theme.text};
        height: 30px;
    }
`