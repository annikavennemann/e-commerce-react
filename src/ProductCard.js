import styled from 'styled-components/macro'

export default function ProductCard({productDetails={id: 1, name: "Wein", price: 12, description: "lecker", usability: "before-php"}}) {
    const {name, price, description, usability} = productDetails
    return <CardWrapper>
            <h2>{name}</h2>
            <p>€ {price}</p>
            <p>{description}</p>
            <p>{usability}</p>
            <label>Anzahl: <input type="number" min="0" max="10"/></label>
        </CardWrapper>

}


const CardWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr ;
    gap: 20px;
    padding: 15px;
    text-align: center;
    background-color: #242424;
    border-radius: 10px;
    opacity: 0.9;

    input {
        font-size: inherit;
        padding: 2px;
        border-color: limegreen;
        border-radius: 5px;
        background-color: #242424;
        color: limegreen;
        width: 40px;
    }

`