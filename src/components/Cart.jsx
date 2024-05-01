import styled from "styled-components";


const Cart = ({cartEl}) => {
  return (
    <>
    {cartEl.length === 0 ? (
      <Text>Your products will be here</Text>
    ):(
      <CardsContainer>
        {cartEl.map((item)=>(
        <CardContainer key={item.id}>
        <FruitsPhoto src={item.src} alt="praducts"/>
        <div>
          <p>{item.name}</p>
          <span>price{item.price}</span>
          <p>tital price:{item.totalPrice}$</p>
        </div>
        </CardContainer>
        ))}
      </CardsContainer>
    )}
    </>
  )
}

export default Cart


const FruitsPhoto = styled.img`
  width: 150px;
  height: 140px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 10px;
`;

const CardContainer = styled.div`
  padding: 20px 10px;
  border: 1px solid;
`;

const Text = styled.h1`
  text-align: center;
  margin-top: 120px;
  margin-bottom: 100px;
`;