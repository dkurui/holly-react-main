import React from 'react'
// import aphrc_logo from '../../../assets/aphrc.png'

const FooterPanel = () => {
  return (
    <div>
      {/* Bottom Panel Content */}
      <hr style={{ color: 'grey', marginBottom: '1rem' }} />
      <div>
        <span style={{ display: 'inline-flex' }}>
          {/* <p>© 2021 African Population and Health Research Center</p> */}

          <p
            class="text-gray-500 dark:text-gray-400"
            style={{ marginTop: '0.8rem', fontSize: '12px' }}
          >
            Powered by:{' '}
          </p>

{/*           <img src={aphrc_logo} alt="Logo" style={{ height: '3rem', marginBottom: '1rem' }} /> */}
        </span>
      </div>
    </div>
  )
}

export default FooterPanel
