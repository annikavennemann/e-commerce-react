import styled from 'styled-components/macro'

export default function Button({text, onSubmit, children}) {

    return <ButtonStyled onSubmit={onSubmit}>
            {children}
            {text}
        </ButtonStyled>

}


const ButtonStyled = styled.button`
    place-self: center;
    padding: 15px;
    text-align: center;
    width: 250px;
    background-color: #96CE7A;
    border: none;
    border-radius: 50px;
    color: white;
    font-size: inherit;
    margin: 2em;
`

