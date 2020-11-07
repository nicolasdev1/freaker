import React from 'react'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import NavBar from '../../components/NavBar'
import Totals from '../../components/Totals'
import AccountInformation from '../../components/AccountInformation'
import RecentActivities from '../../components/RecentActivities'
import CardOrders from '../../components/CardOrders'
import Footer from '../../components/Footer'

const Products = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <NavBar active="Produtos" />
      <Totals />
      <AccountInformation />
      <RecentActivities />
      <CardOrders />
      <Footer />
    </Container>
  )
}

export default Products
