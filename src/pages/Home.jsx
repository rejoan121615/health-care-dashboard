import React from 'react'
import PortalNavBar from '../components/PortalNavBar'
import SearchBar from '../components/SearchBar'
import DarkLightBar from '../components/DarkLightBar'


const Home = () => {

  const userData = {
    name: 'Mohd Rejoan',
    
  }


  return (
    <section>
      <SearchBar />
      <DarkLightBar name={userData.name} />
    </section>
  )
}

export default Home