import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
  return (
    <section className="flex items-center justify-center bg-black/90 fixed inset-0 z-40 px-4">
      <div className="bg-zinc-100 p-6 sm:p-8 text-center w-full max-w-sm rounded-lg border border-zinc-300">
        <h2 className="text-2xl text-green-600 font-bold">Order Placed!</h2>
        <p className="text-zinc-800 my-4">Thanks for your Purchase</p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg active:bg-blue-700"
          onClick={() => setOrderPlaced(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default OrderPlace
