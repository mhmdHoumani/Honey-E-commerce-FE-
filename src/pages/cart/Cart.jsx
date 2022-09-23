

// import React from "react";
// import "./cart.css";

// export default function Cart() {
//   return (
//     <div  className="summaryContainer" >
//       <div>Cart</div>
//       {console.log("localstorage ", localStorage.getItem("products"))}
     
//       </div>
//   );
// }





// import { Add, Remove } from "@material-ui/icons";
// import { useSelector } from "react-redux";
// import styled from "styled-components";

// import { mobile } from "../../responsive";
// // import StripeCheckout from "react-stripe-checkout";
// import { useEffect, useState } from "react";
// // import { userRequest } from "../requestMethods";
// import { useNavigate } from "react-router";  

 

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;

// const Title = styled.h1`
//   font-weight: 300;
//   text-align: center;
// `;

// const Top = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
// `;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const Info = styled.div`
//   flex: 3;
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;

// const Image = styled.img`
//   width: 200px;
// `;

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const ProductName = styled.span``;

// const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

// const ProductSize = styled.span``;

// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
// //   const [stripeToken, setStripeToken] = useState(null);
//   const  Navigate = useNavigate();

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         const res = await userRequest.post("/checkout/payment", {
//           tokenId: stripeToken.id,
//           amount: 500,
//         });
//         history.push("/success", {
//           stripeData: res.data,
//           products: cart, });
//       } catch {}
//     };
//     stripeToken && makeRequest();
//   }, [stripeToken, cart.total, history]);
//   return (
//     <Container>
//       {/* <Navbar /> */}
      
//       <Wrapper>
//         <Title>YOUR BAG</Title>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
//           <TopTexts>
//             <TopText>Shopping Bag(2)</TopText>
//             <TopText>Your Wishlist (0)</TopText>
//           </TopTexts>
//           <TopButton type="filled">CHECKOUT NOW</TopButton>
//         </Top>
//         <Bottom>
//           <Info>
//             {cart.products.map((product) => (
//               <Product>
//                 <ProductDetail>
//                   <Image src={product.img} />
//                   <Details>
//                     <ProductName>
//                       <b>Product:</b> {product.title}
//                     </ProductName>
//                     <ProductId>
//                       <b>ID:</b> {product._id}
//                     </ProductId>
//                     <ProductColor color={product.color} />
//                     <ProductSize>
//                       <b>Weight:</b> {product.size}
//                     </ProductSize>
//                   </Details>
//                 </ProductDetail>
//                 <PriceDetail>
//                   <ProductAmountContainer>
//                     <Add />
//                     <ProductAmount>{product.quantity}</ProductAmount>
//                     <Remove />
//                   </ProductAmountContainer>
//                   <ProductPrice>
//                     $ {product.price * product.quantity}
//                   </ProductPrice>
//                 </PriceDetail>
//               </Product>
//             ))}
//             <Hr />
//           </Info>
//           {/* <Summary>
//             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Subtotal</SummaryItemText>
//               <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$ 5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$ -5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total</SummaryItemText>
//               <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
//             </SummaryItem> */}
//             {/* <StripeCheckout
//               name="Lama Shop"
//               image="https://avatars.githubusercontent.com/u/1486366?v=4"
//               billingAddress
//               shippingAddress
//               description={`Your total is $${cart.total}`}
//               amount={cart.total * 100}
//             //   token={onToken}
//             //   stripeKey={KEY}
//             >
//               <Button>CHECKOUT NOW</Button>
//             </StripeCheckout> */}
//           {/* </Summary> */}
//         </Bottom>
//       </Wrapper>
//       {/* <Footer /> */}
//     </Container>
//   );
// };

// export default Cart;




import React, { useContext } from "react";
// import Items from "./Items";
// import Navbar from "./Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./cart1";

const ContextCart = () => {
  const handleClear = () =>{
    window.location.reload();
  }
  
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  
    if (item.length === 0) {
      return (
        <>
          {/* <Navbar /> */}
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          {/* <Navbar /> */}
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    // return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <button>CheckOut</button>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </section>
        </>
      );
    }
  }


export default ContextCart;
