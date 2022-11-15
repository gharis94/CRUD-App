import React,{useContext} from 'react'
import styled from 'styled-components'
import CardComponent from '../../Components/Card/Card'
import {GlobalContext} from '../../context/GlobatContext'
import CustomizedDialogs from '../../Components/Dialog/Dialog'
const Home = () => {
    const {users,isEdit} = useContext(GlobalContext)
    
    return (
    <Container>
        {
            users.length && users.map((user)=>(
                    <CardComponent key={user.id} user={user}/>
                ))
        }
        {isEdit? <CustomizedDialogs/>:null}
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