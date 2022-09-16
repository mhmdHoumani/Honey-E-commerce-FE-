import "./singleProduct.css"
import image1 from "../../Assets/Images/honeyDrops.jpg";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

//Images
import minus from "../../Assets/Images/icon-minus.svg";
import plus from "../../Assets/Images/icon-plus.svg";
import cart from "../../Assets/Images/icon-cart-white.svg";

const SingleProd = (props) => {
  const { title, description,weight, price_1kg,price_500g, image , id} = props;
  const [quantity, setQuantity] = useState(1);
  const [preview, setPreview] = useState(0);
  const ref = useRef(null);
  const [weight1, setWeight1] = useState("1");



  const quantityHandler = (increment) => {
    if (increment) {
      setQuantity((prev) => (prev === 100 ? prev : prev + 1));
    } else {
      setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    }
  };

  return (
    <>
      <Body>
        <Images>
          <div className="displayed">
            <div className="desktop-carousel">
              <img
                src={image}
                alt="current image"
                className="current-image"
              />
            </div>
            <div className="mobile-carousel">
            <img
                  src={image}
                  alt="current image"
                 
                  className="current-image"
                  
                />
           
            </div>
          </div>
        </Images>
        <Details>
          <Name>
            <div className="brand">Esper Honey Bee</div>
            <div className="name">{title}</div>
          </Name>
          <ProductDetails>
            <Description>{description}</Description>
            <Price>
              <div className="total-price">
                <div className="discouted-price">
                  <p>
                  {weight1==="1" ? price_1kg*quantity
                 : price_500g*quantity}$
                  </p>
                </div>
              </div>
              {/* <div className="original-weight"> </div> */}
              
              <radioWrapper>
                <FormControl >
                  <FormLabel id="demo-radio-buttons-group-label">
                    Weight
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1" 
                      control={<Radio />}
                      label="1Kg"
                      onChange={()=>setWeight1("1")}
                    />
                    <FormControlLabel
                      value="0.5"
                      control={<Radio />}
                      label="1/2 Kg"
                      onChange={()=>setWeight1("0.5")}

                    />
                  </RadioGroup>
                </FormControl>
              </radioWrapper>
            </Price>
          </ProductDetails>
          <Buttons>
            <div className="quantity">
              <div
                className="dec"
                onClick={() => {
                  quantityHandler(false);
                }}
              >
                <img src={minus} alt={minus} />
              </div>
              <div className="current-quantity">{quantity}</div>
              <div
                className="inc"
                onClick={() => {
                  quantityHandler(true);
                }}
              >
                <img src={plus} alt={plus} />
              </div>
            </div>
            <div className="add-to-cart">
              <button>
                <img src={cart} alt={cart} /> Add to cart
              </button>
            </div>
          </Buttons>
        </Details>
      </Body>
    </>
  );
};

const Body = styled.div`
  max-width: 1152px;
  margin: auto;
  padding: 90px 50px 90px 50px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  img {
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 1099px) {
    grid-column-gap: 40px;
  }

  @media (max-width: 1039px) {
    padding: 90px;
  }

  @media (max-width: 768px) {
    padding: 70px 0 0 0;
    grid-template-columns: 100%;
  }
`;

const Images = styled.div`
  width: 450px;

  .displayed {
    position: relative;
    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    .current-image {
      width: 100%;
      border-radius: 20px;
    }
  }

  .mobile-carousel {
    display: none;
    overflow: hidden;
  }

  @media (max-width: 1099px) {
    width: 100%;
  }

  @media (max-width: 1039px) {
    .desktop-carousel {
      display: none;
    }

    .mobile-carousel {
      /* overflow: hidden; */
      display: block;
      .slider {
        display: flex;
        transition: 500ms ease;
      }
    }

    .thumbnails {
      display: none;
    }

    .overlay {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .displayed {
      .current-image {
        border-radius: 0;
      }
    }
  }
`;

const Details = styled.div`
  padding: 40px;
  @media (max-width: 1099px) {
    padding: 40px 0;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Name = styled.div`
  .brand {
    text-transform: uppercase;
    color: #ffbf00;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }

  .name {
    font-size: 45px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .name {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
`;

const ProductDetails = styled.div``;

const Description = styled.div`
  color: hsl(219, 9%, 45%);
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Price = styled.div`
  margin-bottom: 30px;
  .total-price {
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  .discouted-price {
    font-size: 25px;
    margin-right: 15px;
  }

  .original-weight {
    margin-top: 10px;
    font-weight: 700;
    // text-decoration: line-through;
    // color: hsl(220, 14%, 75%);
  }



  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .original-weight {
      margin-top: 0px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  .quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: hsl(223, 64%, 98%);
    width: fit-content;
    height: 55px;
    width: 160px;
    border-radius: 10px;
    user-select: none;
    margin-right: 20px;

    .quantity img{
      color: black;
    }
    .current-quantity {
      font-weight: 700;
      width: 50px;
      text-align: center;
    }

    .dec {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;

      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }

    .inc {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
  }

  .add-to-cart {
    button {
      height: 55px;
      width: 250px;
      background-color: #ffbf00;
      border: none;
      border-radius: 10px;

      align-items: center;
      display: flex;
      justify-content: center;

      img {
        margin-right: 10px;
      }

      color: white;
      font-weight: 700;
      cursor: pointer;
      transition: 100ms ease;

      &:hover {
        opacity: 80%;
        transition: 100ms ease;
        // background-color: black;
      }
    }
  }

  @media (max-width: 499px) {
    .quantity {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }

    .add-to-cart {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;


const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 100;
  user-select: none;

  .next,
  .prev {
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
const radioWrapper = styled.div`
  display: flex;
  background-color: red;

`;
export default SingleProd;
