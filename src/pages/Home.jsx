import React from 'react'
import PortalNavBar from '../components/PortalNavBar'
import SearchBar from '../components/SearchBar'
import DarkLightBar from '../components/DarkLightBar'
import PieChartCard from '../ui/PieChartCard'


const Home = () => {

  const userData = {
    name: 'Mohd Rejoan',
    
  }


  return (
    <section>
      <SearchBar />
      <DarkLightBar name={userData.name} />
      <PieChartCard />
    </section>
  )
}

export default Home