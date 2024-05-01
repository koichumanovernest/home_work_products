import React, { useReducer } from "react";
import Cart from "./Cart";
import Products from "./Products";

const initProducts = () => {
  return {
    products: [
      {
        id: 1,
        name: "product 1",
        price: 1,
        quantity: 0,
        src: "https://o-tendencii.com/uploads/posts/2022-03/1646145112_10-o-tendencii-com-p-klubnika-na-belom-fone-foto-10.jpg",
				
      },
      {
        id: 2,
        name: "product 2",
        price: 2,
        quantity: 0,
        src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/06/27/1220021/404540/dresser_plant_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4186845_o.jpg",
        
			},
      {
        id: 3,
        name: "product 3",
        price: 3,
        quantity: 0,
        src: "https://wallpaper.dog/large/5513652.jpg",
        
			},
    ],
    cart: [],
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productToAdd = state.products.find((item) => item.id === action.id);
      if (productToAdd) {
        const updatedCart = [...state.cart];
        const cartItemIndex = updatedCart.findIndex((item) => item.id === action.id);
        if (cartItemIndex !== -1) {
          updatedCart[cartItemIndex].quantity += 1;
          updatedCart[cartItemIndex].totalPrice += productToAdd.price;
        } else {
          updatedCart.push({
            ...productToAdd,
            quantity: 1,
            totalPrice: productToAdd.price,
          });
        }
        const updatedProducts = state.products.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, products: updatedProducts, cart: updatedCart };
      }
      return state;

    case "REMOVE_PRODUCT":
      const updatedProducts = state.products.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: 0 };
        }
        return item;
      });
      const updatedCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, products: updatedProducts, cart: updatedCart };

    case "DECREASE_PRODUCT":
      const updatedCartDec = [...state.cart];
      const cartItemIndexDec = updatedCartDec.findIndex((item) => item.id === action.id);
      if (cartItemIndexDec !== -1) {
        updatedCartDec[cartItemIndexDec].quantity -= 1;
        updatedCartDec[cartItemIndexDec].totalPrice -= state.products.find((item) => item.id === action.id).price;
      }
      const updatedProductsDec = state.products.map((item) => {
        if (item.id === action.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { ...state, products: updatedProductsDec, cart: updatedCartDec };

    default:
      return state;
  }
};

export const Store = () => {
  const [state, dispatch] = useReducer(reducer, initProducts());

  const addProductsHandler = (id) => {
    dispatch({ type: "ADD_PRODUCT", id });
  };

  const decreaseProductsHandler = (id) => {
    dispatch({ type: "DECREASE_PRODUCT", id });
  };

  const removeProductHandler = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id });
  };

  const totalPrice = state.cart.reduce((acc, current) => acc + current.totalPrice, 0);

  return (
    <div>
      <Cart cartEl={state.cart} />
      <Products
        onAddProducts={addProductsHandler}
        onDecreaseProducts={decreaseProductsHandler}
        products={state.products}
        onRemoveProduct={removeProductHandler}
        totalPrice={totalPrice}
      />
    </div>
  );
};
