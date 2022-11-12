import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  const navigateTo = useNavigate()
  return (
    <>
      <Container>
        <H4 onClick={()=>navigateTo('/')}>Home</H4>
        <Button onClick={()=>navigateTo('add')}>
          <span>Add User</span>
        </Button>
      </Container>
      <Outlet/>
    </>
  )
}

export default Nav;


const Container = styled.div`
  display:flex;
  justify-content:space-between;
  background-color:black;
  color:white;
  padding:10px
`
const H4 = styled.h4`
  cursor:pointer
`
const Button= styled.button`
  height:50px;
  border-radius:15px;
  border:none;
  cursor:pointer;
`