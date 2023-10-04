import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const { id } = useParams()
    const [productData, SetProductData] = useState({})

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                if (data) {
                    SetProductData(data)
                }
            }
            catch (error) {
                toast.error(error.message)
            }
        }

        if (id) {
            getSingleProductData()
        }
    }, [id])

    console.log(productData)
    return (
        <div className="single-product-component">
            {productData?.id ? <div className="single-product-container">
                <div className="single-product-image"><img src={productData.image} alt="" /></div>
                <div className="single-product-details">
                    <div className="s-p-title">{productData.title}</div>
                    <div className="s-p-price">Price : {productData.price} $</div>
                    <div className="s-p-description">{productData.description}</div>
                </div>
            </div> :
                <div>loading ... </div>
            }
        </div>
    )
}

export default SingleProduct