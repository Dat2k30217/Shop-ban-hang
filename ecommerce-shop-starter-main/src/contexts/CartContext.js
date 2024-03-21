import React,{createContext,useState,useEffect} from 'react';

export const CartContext=createContext()
const CartProvider = ({children}) => {
  const[cart,setCart]=useState([]);
  //trạng thái số lượng mặt hàng
  const[itemAmount,setitemAmount]=useState(0);
  
  //Cap nhat sl
  useEffect(()=>{
    if (cart){
      const amount=cart.reduce((accumulator, currentItem)=>{
        return accumulator+currentItem.amount;
      },0);
      setitemAmount(amount);
    }
  },[cart]);
  //Thanh Tien Tong SL
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=>{
      return accumulator+currentItem.price*currentItem.amount;
    },0);
    setTotal(total);
  });
  //Thanh Toan
  const handleOnClick = () => {
    alert('Da thanh toan thanh cong');
    setCart([]);
    setTotal(0);
    setitemAmount(cart.length);
  };
  //them hang
  const addToCart=(product,id)=>{
    const newItem={...product,amount: 1};
    const cartItem=cart.find(item=>{
      return item.id===id;
    });
    console.log(cartItem);
    if(cartItem){
      const newCart=[...cart].map(item=>{
        if(item.id===id){
          return {...item,amount:cartItem.amount+1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart,newItem]);
    }
  };
  //xoa hang
  const removeFormCart=(id)=>{
    const newCart=cart.filter(item=>{
      return item.id !== id;
    });
    setCart(newCart);
  }
  //don dep hang
  const clearCart=()=>{
    setCart([]);
  }
  //them (+) SL
  const  increaseAmount=(id)=>{
    const item=cart.find((item)=>item.id===id);
    addToCart(item,id);
    
  }
  //Giam (-) SL
  const decreaseAmount=(id)=>{
    const cartItem=cart.find((item)=>{
      return item.id===id;
    });
    if(cartItem){
      const newCart=cart.map(item=>{
        if(item.id===id){
          return {...item,amount: cartItem.amount-1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
      if(cartItem.amount < 2){
        removeFormCart(id);
      }
    
  }
  return (
    <CartContext.Provider 
    value={{cart, addToCart, removeFormCart, clearCart,
     increaseAmount, decreaseAmount,handleOnClick, itemAmount,total}}>
    {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
