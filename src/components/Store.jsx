import React, {useState} from 'react'
import ProjectGrid from './miniComponents/ProjectGrid'
import OrderDetails from './miniComponents/OrderDetails'
import {products} from '../samplesToDelete/grid-data'
import useFetch from '../customHooks/useFetch'

function Store() {
    const {products:products} = useFetch('products')

    const [orderData, setOrderData] = useState({})
    const [makeOrder, setMakeOrder] = useState(false)

    const showMakeOrder = (data) => {
        setOrderData(data)
        setMakeOrder(true)
    }

    return (
        <div style={{
                display: 'flex',
                flexWrap : 'wrap',
                justifyContent : 'space-evenly',
            }}>
            {
                products.map(product =>(
                    <ProjectGrid
                        price={product.price}
                        title={product.productName?.slice(0, 15) + '...'}
                        link={`liocam-store/${product.id}`}
                        imgSrc={product?.images[0]}
                    >
                        <i className="fas fa-share-square project-icon"
                            onClick={()=>{
                                showMakeOrder({
                                    productName : product.productName,
                                    productPrice : product.price,
                                    productId : product.id,
                                    productCategory : 'N/A',
                                    productType : 'N/A'
                                })
                            }}
                        ></i>
                    </ProjectGrid>
                ))
            }
            {
                makeOrder &&
                <OrderDetails
                    name = {orderData.productName}
                    id = {orderData.productId}
                    category = {orderData.productCategory}
                    price = {orderData.productPrice}
                    planType = {orderData.productType}
                    cancel = {()=>{setMakeOrder(false)}}
                />
            }
            
        </div>
    )
}

export default Store
