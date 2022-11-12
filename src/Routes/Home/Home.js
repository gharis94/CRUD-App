import React,{useEffect,useState} from 'react'
import {getData} from '../../utils/firebase'
import CardComponent from '../../Components/Card/Card'

const Home = () => {
    const [state,setState]=useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const rsp=await getData();
            setState(rsp)
        }
        fetchData();
    },[])
  return (
    <div>
        {
            state && state.map((user)=>(
                    <CardComponent key={user.id} user={user}/>
                ))
        }
    </div>
  )
}

export default Home;