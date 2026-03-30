import React from 'react'

const OrderSummary = ({cart,subTotal, shippingFee, orderTotal, setOrderPlaced, setOrderSummary,setCart}) => {
  
  const handlePlaceOrder = () => {
    setOrderSummary(false)
    setOrderPlaced(true);
    setCart([]);
  }
  return (
    <section className="flex items-center justify-center bg-black/90 fixed inset-0 z-40 px-4">
      <div className="bg-zinc-100 p-6 sm:p-8 w-full max-w-md rounded-lg border border-zinc-300">
        <h2 className="text-2xl sm:text-3xl text-zinc-800 font-bold text-center mb-5">
          Order Summary
        </h2>

        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-zinc-400 py-2"
            >
              <span className="text-zinc-800">
                {item.name} (x{item.quantity})
              </span>
              <span className="text-zinc-800">
                Rs {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-between pt-3">
            <span className="text-zinc-800">SubTotal</span>
            <span className="text-zinc-800">Rs {subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-zinc-800">Shipping & Handling</span>
            <span className="text-zinc-800">Rs {shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-zinc-400 mb-5">
            <span className="text-blue-600 font-bold text-xl">Order Total</span>
            <span className="text-blue-600 font-bold text-xl">
              Rs {orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-3 gap-3">
          <button
            className="flex-1 bg-zinc-800 py-3 text-white rounded-lg active:bg-zinc-900 cursor-pointer"
            onClick={() => setOrderSummary(false)}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-blue-600 py-3 text-white rounded-lg active:bg-blue-800 cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary
