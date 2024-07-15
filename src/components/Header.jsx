import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container className='text-center text-success m-5 border border-2 border-dark-subtle rounded-5 p-3'>
        <h1>Task Tracker</h1>
    </Container>
  )
}

export default Header