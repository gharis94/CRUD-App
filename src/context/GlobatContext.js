import React,{createContext,useEffect,useState} from 'react';
import {getData} from '../utils/firebase'

const INITIAL_STATE={
    users:[]
}

export const GlobalContext = createContext(INITIAL_STATE);


export const GlobalProvider = ({children}) =>{
    const [users,setUsers] = useState(INITIAL_STATE)
    const [isEdit,setIsEdit] = useState(false)
    const [currentUser,setCurrentUser] =useState()

    useEffect(()=>{
        const fetchData =async()=>{
            const rsp=await getData();
            setUsers(rsp)
            console.log(rsp)
        }
        fetchData()
    },[])

    const updateEdit=(id)=>{
        setIsEdit(prev=>(!prev))
        if(users.lenght>0){
            setCurrentUser()
        }        
    }
    return(
        <GlobalContext.Provider value={{users,setUsers,isEdit,updateEdit}}>
            {children}
        </GlobalContext.Provider>
    )
}