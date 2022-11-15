import React,{createContext,useEffect,useState} from 'react';
import {getData,updateData} from '../utils/firebase'


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
        }
        fetchData()
    },[])

    const updateEdit=(id)=>{
        setIsEdit(prev=>(!prev))
        console.log(users.length)
        if(users.length > 0){
            let cur = users.find(u=>u.id ===id)
            console.log(cur)
            setCurrentUser(cur)
        }        
    }
    const updateState=async(data)=>{
        (async () => {
            await updateData(data)
            updateEdit()
        })()
    }
    return(
        <GlobalContext.Provider value={{users,setUsers,isEdit,updateEdit,currentUser,updateState}}>
            {children}
        </GlobalContext.Provider>
    )
}