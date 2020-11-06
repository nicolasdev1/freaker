import React from 'react'

import SideBar from '../../components/SideBar'

import { Container } from './styles'

const Dashboard = ({ children }) => {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  )
}

export default Dashboard
