import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthContext'
import toast from 'react-hot-toast'
import api from './Helpers/Axios.config'

const Cart = () => {
    const { state } = useContext(AuthContext)
    const [cartProducts, setCartProducts] = useState([])
    const [endPrice, setTotalPrice] = useState(0)

    async function getCartProducts(id) {
        const response = await api.post('/user/get-cart', { id })
        if (response.data.success) {
            setCartProducts(response.data.yourCart)
        }
    }


    async function deleteProduct(productId) {
        try {
            const response = await api.post('/user/delete-cart', { productId, userId: state?.user?.id })
            if (response.data.success) {
                toast.success(response.data.message)
                setCartProducts(response.data.products)
                setTotalPrice(0)
                GetPrice();

            }
        } catch (error) {
            console.log(error)
        }
    }






    useEffect(() => {
        if (state?.user && state?.user?.id === undefined) {
            alert("id not found")
        } else {
            if (state?.user?.id) {
                // toast(state?.user?.id)
                getCartProducts(state?.user?.id)
                // totalPrice(cartProducts)
            }
        }
    }, [state])

    function GetPrice(){
        console.log(cartProducts,"cartProducts")
        if (cartProducts?.length && endPrice === 0) {
            cartProducts.forEach(obj => {
                let value = obj["price"]
                setTotalPrice((prevValue) => value + prevValue)
            })
        }
    }

    useEffect(() => {
        GetPrice()
    }, [cartProducts])

    return (
        <div>
            <h1 style={{ marginTop: '50px' }}>Your cart Products</h1>

            {cartProducts?.length ? <div >
                <div style={{ display: "flex", margin: "20px" }}>
                    {cartProducts.map((pro) => (
                        <div style={{ margin: "20px", height: "450px", width: "300px", overflow: "hidden", boxShadow: "0px 0px 4px black" }}>
                            <div>
                                <img style={{ height: "300px", width: "300px" }} src={pro.image} alt="" />
                            </div>
                            <div>
                                <h3> {pro.name}</h3>
                                <h4> {pro.price}$ </h4>
                                <button onClick={() => deleteProduct(pro._id)} className="button">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                {cartProducts?.length !== 0 ? <h2> total amount - {endPrice} $ </h2> : <h2>add Products</h2>}
            </div> : <div style={{ display: "flex", alignItems: "center", fontSize: "25px" }}>Loading <div style={{ marginLeft: "20px" }} class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>}
        </div>
    )
}

export default Cart
