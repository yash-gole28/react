import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const { id } = useParams()
    const [productData, SetProductData] = useState({})
    console.log(productData)

    async function getSingleProductData() {
        try {
            const { data } = await axios.get(`/product/single-product${id}`)
            // const { data } = await axios.get(`http://localhost:8000/api/v1/product/single-product`)
            if (data.success) {
                SetProductData(data)
            }
        }
        catch (error) {
            // toast.error(error.data.message)
        }
    }

    


    useEffect(() => {
       
        if (id) {
            getSingleProductData()
        }
    }, [id])

    console.log(productData)
    return (
        <div className="single-product-component">
            {productData?._id ? <div className="single-product-container">
                <div className="single-product-image"><img src={productData.image} alt="" /></div>
                <div className="single-product-details">
                    <div className="s-p-title">{productData.name}</div>
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