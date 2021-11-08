import React, {useState} from 'react'
import {useParams} from 'react-router'
import { projects } from '../samplesToDelete/grid-data'
import ContactForm from './miniComponents/ContactForm'
import WhyChoseUs from './miniComponents/WhyChoseUs'
import OrderDetails from './miniComponents/OrderDetails'
import './SinglePlan.css'
import useFetch from '../customHooks/useFetch'

function SinglePlan() {
    const {plans:projects} = useFetch()
    const {id} = useParams()
    const data = projects?.filter(item => item.id === id)
    const [currentImg, setCurrentImg] = useState(0)
    const [makeOrder, setMakeOrder] = useState(false)
    const [orderData, setOrderData] = useState({})
    const [goldOrder, setGoldOrder] = useState(false)

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
        <div className="SinglePlan">
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
                    <h4>Drawings List</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Element</th>
                                <th>Format</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data[0]?.drawingList?.map(item => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td className='format'>{item.format}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="prices">
                        <span className="price" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.basicPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'basic'
                            })
                        }}>Order Basic<br/> @ {data[0]?.basicPrice}</span>
                        <span className="price" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.standardPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'standard'
                            })
                        }}>Order Standard<br/> @ {data[0]?.standardPrice}</span>
                        <span className="price" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.premiumPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'premium'
                            })
                        }}>Order Premium<br/> @ {data[0]?.premiumPrice}</span>
                    </div>
                </div>
            </div>

            <div className="single-plan-middle">
                {
                    data?.map(item => (
                        <div className="features">
                            <div className="feature">
                                <i className="fas fa-home fa-3x"></i>
                                <p>{item.stories} Stories</p>
                            </div>

                            <div className="feature">
                                <i className="fas fa-calendar-alt fa-3x"></i>
                                <p>{item.apartments} Apartments</p>
                            </div>

                            <div className="feature">
                                <i className="fas fa-calendar-alt fa-3x"></i>
                                <p>{item.rooms} Bed rooms</p>
                            </div>

                            <div className="feature">
                                <i className="fas fa-ruler-horizontal fa-3x"></i>
                                <p>Plot Width: {item.plotWidth} </p>
                            </div>

                            <div className="feature">
                                <i className="fas fa-ruler-vertical fa-3x"></i>
                                <p>Plot Length: {item.plotLength} </p>
                            </div>

                            <div className="feature">
                                <i className="fas fa-ruler-combined fa-3x"></i>
                                <p>Plot Area{item.plotArea}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="order-options">
                <div className="order-option">
                    <div className="option-title">
                        <h3>Basic</h3>
                        <p>{data[0]?.basicPrice}</p>
                    </div>
                    <div className="option-desc">
                        <h4>What You Get</h4>
                        <div>
                            <span>Complete Plans</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                        <div>
                            <span>Construction Estimate</span>
                            <i className="fas fa-times fa-sm"></i>
                        </div>
                        <div>
                            <span>Plan Modification</span>
                            <i className="fas fa-times fa-sm"></i>
                        </div>
                    </div>
                    <div className="option-select">
                        <button className="btn" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.basicPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'basic'
                            })
                        }}>
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="order-option">
                    <div className="option-title">
                        <h3>Standard</h3>
                        <p>{data[0]?.standardPrice}</p>
                    </div>
                    <div className="option-desc">
                        <h4>What You Get</h4>
                        <div>
                            <span>Complete Plans</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                        <div>
                            <span>Construction Estimate</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                        <div>
                            <span>Plan Modification</span>
                            <i className="fas fa-times fa-sm"></i>
                        </div>
                    </div>
                    <div className="option-select">
                        <button className="btn" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.standardPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'standard'
                            })
                        }}>
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="order-option">
                    <div className="option-title">
                        <h3>Premium</h3>
                        <p>{data[0]?.premiumPrice}</p>
                    </div>
                    <div className="option-desc">
                        <h4>What You Get</h4>
                        <div>
                            <span>Complete Plans</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                        <div>
                            <span>Construction Estimate</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                        <div>
                            <span>Plan Modification</span>
                            <i className="fas fa-check fa-sm"></i>
                        </div>
                    </div>
                    <div className="option-select">
                        <button className="btn" onClick={()=>{
                            showMakeOrder({
                                price : data[0]?.premiumPrice,
                                category : data[0]?.category,
                                planName: data[0]?.name,
                                id : data[0].id,
                                planType : 'premium'
                            })
                        }}>
                            Buy Now
                        </button>
                    </div>
                </div>

                <div className="order-option gold">
                    <div className="option-title">
                        <h3>Gold</h3>
                        <p>agreement</p>
                    </div>
                    <div className="option-desc">
                        <h4>What You Get</h4>
                        <p>Contact us to build your <br/> plan from scratch</p>
                    </div>
                    <div className="option-select">
                        <button className="btn" onClick={()=>{
                            setGoldOrder(true)
                        }}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            <section className="why-chose-us">
                <WhyChoseUs/>

                <div className="right-section">
                    <ContactForm/>
                </div>
            </section>
            {
                makeOrder && 
                <OrderDetails
                price={orderData?.price}
                category={orderData?.category}
                name={orderData?.planName}
                id={orderData?.id}
                planType={orderData?.planType}
                cancel={()=>{setMakeOrder(false)}}
            />
            }
            {
                goldOrder &&
                <div className="gold-order">
                    <ContactForm
                        showCan={true}
                        cancel={()=>{setGoldOrder(false)}}
                    />
                </div>
            }
            
        </div>
    )
}

export default SinglePlan
