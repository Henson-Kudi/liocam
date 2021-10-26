import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../samplesToDelete/grid-data'
import OrderDetails from './miniComponents/OrderDetails'
import ProjectGrid from './miniComponents/ProjectGrid'

function SingleProduct() {
    const {id} = useParams()
    const data = products?.filter(item => item.id === Number(id))
    const [currentImg, setCurrentImg] = useState(0)
    const [makeOrder, setMakeOrder] = useState(false)
    const [orderData, setOrderData] = useState({})

    const length = data[0]?.images?.length
    const prevSlide = ()=>{
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }
    const nextSlide = ()=>{
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const showMakeOrder = (data)=>{
        setOrderData(data)
        setMakeOrder(true)
    }



    return (
        <div>
            <div className="single-plan-top">
                <div className="plan-top-left">
                    <i className="fas fa-chevron-left fa-lg icon icon-left" onClick={prevSlide}></i>
                    <i className="fas fa-chevron-right fa-lg icon icon-right" onClick={nextSlide}></i>

                    {
                        data[0]?.images?.map((img, i) => (
                            <div className={i === currentImg ? 'slide active' : 'slide'} key={data.id}>
                                {
                                    i === currentImg && <img src={img} alt="hero display 1" className='image' />
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="plan-top-right">
                    <h3>{data[0]?.name}</h3>
                    <p>
                        {data[0]?.description}
                    </p>
                    <div className="btnSub-cont">
                        <input type="button" value="Place Order" className="btnSub" onClick={()=>{
                            showMakeOrder({
                                productName : data[0]?.name,
                                productPrice : data[0]?.price,
                                productId : data[0]?.id,
                                productCategory : 'N/A',
                                productType : 'N/A'
                            })
                        }} />
                    </div>
                </div>
            </div>
            <div className="relatedProducts">
                <h3>You may also like:</h3>
                <div style={{
                        display: 'flex',
                        flexWrap : 'wrap',
                        justifyContent : 'space-evenly',
                    }}>
                    {
                        products?.filter(item => item.id !== Number(id)).slice(0, 10).map(product =>(
                            <ProjectGrid
                                price={product.price}
                                title={product.name.slice(0, 15) + '...'}
                                link={`liocam-store/${product.id}`}
                                imgSrc={product.images[0]}
                            >
                                <i className="fas fa-share-square project-icon"
                                    onClick={()=>{
                                        showMakeOrder({
                                            productName : product.name,
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
                    
                </div>
            </div>
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

export default SingleProduct
