import React from 'react'
import './../dashboard-layout.css'
import LeftPanel from '../components/left-panel'
import TopPanel from '../components/top-panel'
import FooterPanel from '../components/footer-panel'

const Journals = () => {
  return (
    <div className="container" style={{ overflow: 'hidden' }}>
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="top-panel">
        <TopPanel />
      </div>
      <div className="main-content">
        {/* Main Content */}
        <h1>Journals Content</h1>
        <p>This is where your Journals content goes.</p>
      </div>
      <div className="bottom-panel">
        <FooterPanel />
      </div>
    </div>
  )
}

export default Journals
