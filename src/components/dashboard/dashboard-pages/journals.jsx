import React from 'react'
import './../dashboard-layout.css'
import LeftPanel from '../components/left-panel'
import TopPanel from '../components/top-panel'
import FooterPanel from '../components/footer-panel'
import JournalsTable from './journals-table/journals-table'
/* styles.css */

const Journals = () => {
  return (
    <div className="container" style={{ overflow: 'hidden', maxWidth: '-webkit-fill-available' }}>
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="top-panel">
        <TopPanel />
      </div>
      <div className="main-content">
        {/* Main Content */}

        <h4 class="text-2xl font-bold dark:text-white">African Journals List</h4>

        <div
          class="relative overflow-x-auto shadow-md sm:rounded-lg"
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            background: 'white',
            width: '100%',
          }}
        >
          <div style={{ width: '100%' }}>
            <JournalsTable />
          </div>
        </div>
      </div>
      <div className="bottom-panel">
        <FooterPanel />
      </div>
    </div>
  )
}

export default Journals
