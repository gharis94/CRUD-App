import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <>
      <Container>
        <h4>Home</h4>
        <Button>
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
const Button= styled.button`
  height:50px;
  border-radius:15px;
  border:none;
  cursor:pointer;
`