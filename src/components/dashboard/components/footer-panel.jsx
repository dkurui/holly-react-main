import React from 'react'
import aphrc_logo from '../../../assets/aphrc.png'

const FooterPanel = () => {
  return (
    <div>
      {/* Bottom Panel Content */}
      <div>
        <p>Powered by:</p>
        <img
          src={aphrc_logo}
        
          alt="Logo"
          style={{ height: '2rem' }}
        />
      </div>
    </div>
  )
}

export default FooterPanel
