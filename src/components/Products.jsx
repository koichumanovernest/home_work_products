import ProductsItem from "./ProductsItem";
import styled from "styled-components";
import {FaShoppingBasket} from "react-icons/fa";

const Products = ({ onAddProducts,products,onDecreaseProducts,onRemoveProduct , totalPrice }) => {
  return (
    <ProductsContainer>
      
      <Title>Товары</Title>
      <StyledTextContainer>
        <p>#</p>
        <p>product</p>
        <p>ProductName</p>
        <StyledText>
        <p>price</p>
        <StyledQuantiry>quantity</StyledQuantiry>
        <p>Remove</p>
        </StyledText>
      </StyledTextContainer>
      <InnerDiv>
        {products.map((item) => (
          <ProductsItem onAddProducts={onAddProducts} onDecreaseProducts={onDecreaseProducts} onRemoveProduct={onRemoveProduct}  {...item} key={item.id} />
        ))}
      </InnerDiv>
      <h3>
      <ShoppingCartIcon/> TotalPrie {totalPrice}$
          </h3>
    </ProductsContainer>
  );
};


const ProductsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ShoppingCartIcon = styled(FaShoppingBasket)`
  font-size: 36px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTextContainer = styled.div`
margin-left: -7.1rem;
  display: flex;
  justify-content: space-between;
  /* gap: 123px; */
  font-weight:700;
  border: 0.9px solid #c9c7c7 ;
  padding: 7px;
  width: 813px;
`
const StyledText = styled.div`
display: flex;
justify-content: space-between;
position: relative;
gap: 20px;
left: -15px;
width: 300px;
`
const StyledQuantiry = styled.p`
  position: relative;
  left: 50px;
`

export default Products;
