import React from 'react'

import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Totals from '../../components/Totals'
import AccountInformation from '../../components/AccountInformation'
import RecentActivities from '../../components/RecentActivities'
import Orders from '../../components/Orders'
import Footer from '../../components/Footer'


import { Container } from './styles'

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <NavBar />
      <Totals />
      <AccountInformation />
      <RecentActivities />
      <Orders />
      <Footer />
    </Container>
  )
}

export default Dashboard
