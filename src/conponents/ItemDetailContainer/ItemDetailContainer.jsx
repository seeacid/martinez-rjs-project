import React , {useState,useEffect} from 'react'
import loaderGif from "../assets/img/loader.gif"
import { products } from "../itemListContainer/Items"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader , setLoader] = useState(true)
    const { prodId } = useParams()
    console.log(useParams )

    useEffect(() => {
        setLoader(true)
        const getProduct = new Promise( (res) => {
            setTimeout ( () => {
                res(products)
            },2000)
        })

        getProduct.then( (result) => {
            prodId && setProduct(result.find(item => item.id === prodId))
            
        })
        .finally( ()=> {
            setLoader(false)
        })
    }, [prodId])

    return loader ? (
        <div className="loader">
            <img  src={loaderGif} alt="" />
        </div>
    ) : ( <ItemDetail {...product} /> )
}