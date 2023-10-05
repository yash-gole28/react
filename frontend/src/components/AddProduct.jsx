import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const AddProduct = () => {
    const [productDetails ,SetProductDetails] = useState({name : "", image : "" , price : ""})
    
    const handleChange = (event) =>{
        
        SetProductDetails({...productDetails ,[event.target.name]:event.target.value})
        // console.log(productDetails)
    
    }
   
   
   
    async function AddNewProduct(event){
        event.preventDefault()
        if(productDetails.name && productDetails.price && productDetails.image && productDetails.price>0){
           try{
            const response = await axios.post('https://fakestoreapi.com/products',{title : productDetails.name,price : productDetails.price,image : productDetails.image})
            console.log(response.data)
            toast.success(`Registered with Product id - ${response.data.id}`)
            SetProductDetails({name : "", image : "" , price : ""})
        }
        catch(error){
            toast.error(error)
        }
        }
        else{
            toast.error("all fields are mandatory")
        }
        console.log(productDetails)
    }
    return(
        <div>
            <h1>Add new Product</h1>
            <form action=""onSubmit={AddNewProduct}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={handleChange} value={productDetails.name}/>
                <label htmlFor="">Image</label>
                <input type="url" name="image" id="" onChange={handleChange} value={productDetails.image}/>
                <label htmlFor="">Product Price</label>
                <input type="number" name="price" id="" onChange={handleChange} value={productDetails.price}/><br />
                <input type="submit" value="Add Product" />
                
            </form>
        </div>
    )
}

export default AddProduct