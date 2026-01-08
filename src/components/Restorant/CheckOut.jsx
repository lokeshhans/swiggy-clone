import React from 'react'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const data = useSelector(state=>state.cartSlice.cartList)
  return (
    <div>{data && data.map(value=><div>{value.name}</div>)}</div>
  )
}

export default CheckOut