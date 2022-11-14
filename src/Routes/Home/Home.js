import React,{useContext} from 'react'
import styled from 'styled-components'
import CardComponent from '../../Components/Card/Card'
import {GlobalContext} from '../../context/GlobatContext'

const Home = () => {
    const {users} = useContext(GlobalContext)
    
    return (
    <Container>
        {
            users.length && users.map((user)=>(
                    <CardComponent key={user.id} user={user}/>
                ))
        }
    </Container>
  )
}

export default Home;


const Container = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    padding:10px;

`