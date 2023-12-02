import React, { useEffect, useState } from "react"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
// import axios from "axios"
import './Dynamic.css'
import api from "./Helpers/Axios.config";

function Products() {
    const [products, setProducts] = useState([]);
    console.log(products)
    const router = useNavigate();
    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                const { data } = await api.get('/product/Allproducts');
                // console.log(data, "data here")
                if (data.success) {
                    setProducts(data.products)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProducts()
    }, [])
    return (
        <div >

            {products?.length ? <div style={{ justifyContent: 'space-around', paddingBottom: '50px' }} >
                <h1 style={{ marginTop: "70px" }}>All Products</h1>
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {products.map((pro) => (
                        // <div onClick={()=> router(`/singleProcuct/${pro.id}`)} style={{width:'23%',height:'400px'}} className="Product-container">
                        <div>
                            <div key={pro._id} onClick={() => router(`/singleProduct/${pro._id}`)} style={{ width: '300px%', height: '450px', margin: '20px ' }} className="Product-container">

                                <div style={{ width: "300px", height: '300px' }}><img style={{ width: '100%', height: '100%', objectFit: '100%' }} src={pro.image} alt="" /></div>
                                <div className="product-name">{pro.name}</div>
                                <div className="product-price">{pro.price}$</div>
                                <div><input className="button" type="button" value="view" /></div>
                                {/* <div>{pro.description}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div> : <div style={{ display: "flex", alignItems: "center", fontSize: "25px" }}>Loading <div style={{ marginLeft: "20px" }} class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>}

        </div>
    )
}

export default Products