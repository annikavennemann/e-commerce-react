import styled from 'styled-components/macro'

export default function Button({text, onSubmit}) {

    return <ButtonStyled onSubmit={onSubmit}>
            {text}
        </ButtonStyled>

}


const ButtonStyled = styled.button`
    place-self: center;
    padding: 15px;
    text-align: center;
    width: 250px;
    background-color: limegreen;
    opacity: 0.9;
    border: none;
    border-radius: 50px;
    color: #242424;
    font-size: inherit;
`

