import styled from 'styled-components/macro'

export default function ProductCard({productDetails={id: 1, name: "Wein", price: 12, description: "lecker", usability: "before-php"}}) {
    const {name, price, description, usability} = productDetails
    return <CardWrapper>
            <h2>{name}</h2>
            <p>{price} Euro</p>
            <p>{description}</p>
            <p>{usability}</p>
        </CardWrapper>

}


const CardWrapper = styled.header`
    grid-template-columns: 1fr ;
    gap: 20px;
    padding: 15px;
    text-align: center;
    background-color: #242424;
    box-shadow: 0 0 15px rgba(50, 205, 50, 0.1);
    border-radius: 5px;
    opacity: 0.9;
`