import styled from 'styled-components/macro'
import HeaderImg from './assets/HeaderImgSimple.svg'

export default function Header() {

    return <HeaderStyled>
            <img src={HeaderImg} alt="" />
        </HeaderStyled>

}


const HeaderStyled = styled.header`
    position: relative;
    padding: 0.5em 1em;
    text-align: center;
    height: 4em;
    background-color: #141414;

    img {
    top: 0.5em;
    height: 50px;
    width: auto;
  }
`

