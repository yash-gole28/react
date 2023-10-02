import React ,{ useEffect ,useState} from "react"

import axios from "axios"

function Products(){
    const [products , setProcucts] = useState([])

    useEffect(()=>{
       async function getProducts(){
            const jsonData = await axios.get('https://fakestoreapi.com/products/')
        console.log(jsonData.data)
        setProcucts(jsonData.data)
        }
        getProducts()
    },[])
    return (
        <div>
            {products?.length ? <div>{products.map((pro)=>(
                <div>
                    <div>{pro.title}</div>
                    <div>{pro.price}</div>
                    <div>{pro.description}</div>
                </div>
            ))}</div> : <div>Loading...</div>}
           
        </div>
    )
}

export default Products