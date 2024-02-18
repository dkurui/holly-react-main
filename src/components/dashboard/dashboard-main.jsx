import React from 'react'
import './dashboard-layout.css'
import {
  MdOutlineInventory,
  MdSpaceDashboard,
  MdContactSupport,
  MdStore,
  MdOutlineAddLink,
} from 'react-icons/md'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { GoPackage } from 'react-icons/go'
import { FaBoxArchive, FaChartSimple, FaHandshakeAngle, FaRegCreditCard } from 'react-icons/fa6'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'
import { LuNewspaper } from 'react-icons/lu'
import { GrAnalytics } from 'react-icons/gr'

import LeftPanel from './components/left-panel'
import TopPanel from './components/top-panel'
import FooterPanel from './components/footer-panel'

// Main navigation links
const mainNavLinks = [
  { to: '/dashboard-main', label: 'Dashboard', icon: 'MdSpaceDashboard' },
  { to: '/analytics', label: 'Analytics', icon: 'GrAnalytics' },
  // { to: '/admin', label: 'Admin', icon: 'MdSpaceDashboard' },
  { to: '/journals', label: 'Journals', icon: 'GoPackage' },
  // { to: '/partners', label: 'Partners', icon: 'FaHandshakeAngle' },
  { to: '/indexers', label: 'Indexers', icon: 'MdOutlineInventory' },
  { to: '/repositories', label: 'Repositories', icon: 'FaBoxArchive' },
  { to: '/reviewers', label: 'Reviewers', icon: 'BsFillPersonFill' },
  // { to: '/channels', label: 'Channels', icon: 'MdOutlineAddLink' },
  { to: '/reports', label: 'Reports', icon: 'FaChartSimple' },
  { to: '/news', label: 'News & Updates', icon: 'LuNewspaper' },
]
const iconMapping = {
  MdSpaceDashboard: MdSpaceDashboard,
  GrAnalytics: GrAnalytics,
  RiMoneyDollarCircleFill: RiMoneyDollarCircleFill,
  GoPackage: GoPackage,
  FaHandshakeAngle: FaHandshakeAngle,
  MdOutlineInventory: MdOutlineInventory,
  FaRegCreditCard: FaRegCreditCard,
  BsFillPersonFill: BsFillPersonFill,
  MdOutlineAddLink: MdOutlineAddLink,
  FaChartSimple: FaChartSimple,
  FaBoxArchive: FaBoxArchive,
  MdStore: MdStore,
  MdContactSupport: MdContactSupport,
  AiTwotoneSetting: AiTwotoneSetting,
  LuNewspaper: LuNewspaper,
}

const DashboardMain = () => {
  const isActiveLink = (path) => {
    return location.pathname === path
  }
  //function to go to home
  const goHome = () => {
    console.log('hhdh')
    window.location.href = '/'
  }

  return (
    <div className="container" style={{ overflow: 'hidden' }}>
      <div className="left-panel">
        {/*  */}
        <LeftPanel />
      </div>
      <div className="top-panel">
        {/* Top Panel Content */}

        <TopPanel />
        {/* <div class="col-start-3 col-end-4">
          <div class="profile">
            <BsPersonCircle style={{ marginTop: '5px' }} />
            <AiFillCaretDown style={{ marginTop: '5px' }} />
          </div>
        </div> */}
      </div>
      <div className="main-content">
        {/* Main Content */}
        <h1>Main Content</h1>
        <p>This is where your main content goes.</p>
      </div>
      <div className="bottom-panel">
        {/* Bottom Panel Content */}
        <FooterPanel />
      </div>
    </div>
  )
}

export default DashboardMain
