import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlace from '../OrderPlace/OrderPlace'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState('');
  const [orderSummary, setOrderSummary] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wishlist, setWishlist] = useState(()=>{
    const storeWishlist = localStorage.getItem('wishlist')
    return storeWishlist ? JSON.parse(storeWishlist) : []
  });
  const [cart, setCart] = useState(()=>{
    const storeCart = localStorage.getItem('cart')
    return storeCart ? JSON.parse(storeCart) : []
  });

  // Total Calculation 
  const subTotal = cart.reduce((acc, item)=> acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item )=> acc + item.quantity, 0);
  const shippingFee = totalItems * 200
  const orderTotal = subTotal + shippingFee;

  useEffect(()=>{
    const changeNavbar = () => {
      setIsScrolled(window.scrollY > 10)
  
    }
    window.addEventListener('scroll', changeNavbar)
  }, []);
  // Save Items to localStorage
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));


  }, [cart, wishlist])
  // HandleScroll

  const handleScroll = () =>{
    const section = document.getElementById('product-section')

    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

  // Cart And Wishlist ShowPanel Function
  const handlePanel = (tabName) =>{
    setActivePanel(prev=>(
      prev === tabName ? null : tabName

    ))

  }
  // ClosePanel Function
  const handleClose = () => setActivePanel(null)
  // RemoveItem
  const removeItem = (product) =>{
    setCart(cart.filter(item=> item.id !== product.id))
  }
  // Quantity Increment

  const quantityIncrement = (product) =>{

    setCart(cart.map(item=>
      item.id === product.id ?
      {...item, quantity: item.quantity + 1} : item
    ))
  }
  // Quantity Decrement
  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity >= 1 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    );
  };

  // AddToCart Function 
  const addToCart = (product) =>{
    const alreadyAdded = cart.find(item=> item.id === product.id);
    if(alreadyAdded){
      quantityIncrement(product);
      return;
      
    }
    setCart([...cart, {...product, quantity: 1}]);
  }
    // Wishlist Function
    const addToWishlist = (product) =>{
      const isWishlist = wishlist.some(item=> item.id === product.id);
      if(isWishlist){
        setWishlist(wishlist.filter(item=> item.id !== product.id))

      }
      else{
        const addedDate = new Date().toLocaleDateString('en-GB')
        setWishlist([...wishlist, {...product, addedDate}])
      }
      

    }
    // Clear wishlist
    const clearWishlist =() =>{
      setWishlist([]);
    }


  
  return (
    <div>
      {/* Navbar */}
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishlist={wishlist}
      />
      {/* Banner */}
      <Banner />
      {/* Products */}
      <Products
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />
      {/* Cart */}
      <Cart
        activePanel={activePanel}
        handleClose={handleClose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subTotal={subTotal}
        orderTotal={orderTotal}
        shippingFee={shippingFee}
        setOrderSummary={setOrderSummary}
      />
      {/* Wishlist */}
      <Wishlist
        activePanel={activePanel}
        handleClose={handleClose}
        wishlist={wishlist}
        addToCart={addToCart}
        clearWishlist={clearWishlist}
      />

      {/* Order Summary */}
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />
      )}

      {/* Order Placed */}
      {
        orderPlaced && 
        <OrderPlace 
        setOrderPlaced={setOrderPlaced} />}
    </div>
  );
}

export default Home
