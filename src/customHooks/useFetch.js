import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {baseURL} from '../fetch/axios'
import app from '../firebase/firebase'

const db = app.firestore()

function useFetch(url) {
    // const {user} = useContext(UserContext)
    const [plans, setPlans] = useState([])
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        fetchProducts()
        fetchPlans()

    }, [])

    const fetchPlans = async()=>{
        try {
            setLoader(true)
            const collection = await db.collection('designs').get()

            setPlans(collection.docs.map(doc => doc.data()))
            
            // setData(await res.data)
        } catch (error) {
            console.log(error);
        }finally{setLoader(false)}
    }

    const fetchProducts = async()=>{
        try {
            setLoader(true)
            const collection = await db.collection('products').get()

            setProducts(collection.docs.map(doc => doc.data()))
            
            // setData(await res.data)
        } catch (error) {
            console.log(error);
        }finally{setLoader(false)}
    }

    // const refetchData = async()=>{
    //     await baseURL.get(`/${url}`).then(async(res)=>{
    //         const data = await res.data
    //         setData(data)
    //     })
    // }

    return {
        products, plans, loader
    }
}

export default useFetch
