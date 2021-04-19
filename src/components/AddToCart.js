import React, { useEffect, useContext, useState } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { cartItemAdd, CartItemAdd, onChangeC } from "../actions";
import { ADD_CART_ITEM } from "../utils/constants";
import Cookie from "js-cookie";

export default function AddToCart({ product }) {
  const [count, setCount] = useState(0);
  const { dispatch, state:{cartItems} } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: '購買通知',
      description:
        '新增了'+{count}+'堂課至購物車',
      onClick: () => {
        console.log(count);
      },
      placement: 'bottomRight'
    });
  };



  const addToCart = () => {
    openNotification();
    onChangeC(dispatch);
    CartItemAdd(dispatch,product);
    //cartItemAdd(dispatch, product, qty);
    setCount(count + 1)
  };

  useEffect(()=>{
    Cookie.set("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <Button type="primary" className="btn-tocar bg-white" onClick={addToCart}>
      <span>加入購物車</span>
      <img
      className="btn-tocar-icon"
      src="/image/addtocartbtn.png"
      />
    </Button>
  );
}
