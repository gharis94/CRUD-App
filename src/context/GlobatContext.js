import React,{createContext,useEffect,useState} from 'react';
import {getData} from '../utils/firebase'

const INITIAL_STATE={
    users:[]
}

export const GlobalContext = createContext(INITIAL_STATE);


export const GlobalProvider = ({children}) =>{
    const [users,setUsers] = useState(INITIAL_STATE)
    useEffect(()=>{
        const fetchData =async()=>{
            const rsp=await getData();
            setUsers(rsp)
            console.log(rsp)
        }
        fetchData()
    },[])
    return(
        <GlobalContext.Provider value={{users,setUsers}}>
            {children}
        </GlobalContext.Provider>
    )
}