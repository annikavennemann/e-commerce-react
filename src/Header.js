import styled from 'styled-components/macro'

export default function Header({children}) {

    return <HeaderStyled>
            <h1>{children}</h1>
        </HeaderStyled>

}


const HeaderStyled = styled.header`
    position: relative;
    padding: 15px;
    text-align: center;
    background-color: #242424;
    box-shadow: 0 3px 10px rgba(50, 205, 50, 0.1);
`

