import React from 'react'
import PortalHOC from '../HOC/PortalHOC'
import NavigationBar from './NavigationBar'

const PortalNavBar = () => {
  return (
    <div>
      <NavigationBar />
    </div>
  )
}

export default PortalHOC(PortalNavBar)