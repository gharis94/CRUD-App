import React,{useContext} from 'react'
import CardComponent from '../../Components/Card/Card'
import {GlobalContext} from '../../context/GlobatContext'

const Home = () => {
    const {users} = useContext(GlobalContext)
    console.log(users)
    const x=[]
    return (
    <div>
        {
            users.length && users.map((user)=>(
                    <CardComponent key={user.id} user={user}/>
                ))
        }
    </div>
  )
}

export default Home;