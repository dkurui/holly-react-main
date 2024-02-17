import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
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

import afrijour_logo from '../../assets/afrijour-logo.png'

// Main navigation links
const mainNavLinks = [
  { to: '/dashboard-main', label: 'Dashboard', icon: 'MdSpaceDashboard' },
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

const DashboardLeftPanel = () => {
  const isActiveLink = (path) => {
    return location.pathname === path
  }
  //function to go to home
  const goHome = () => {
    console.log('hhdh')
    window.location.href = '/'
  }

  return (
    <div
      className="container-fluid d-flex justify-content-start align-items-start"
      style={{
        backgroundColor: 'white',
        height: '100vh', // Occupies the entire height of the viewport
        padding: '2rem', // Margin of 2rem for the content
        width: '12vw',
      }}
    >
      <div className="column">{/* Left Panel with Menu Items */}</div>
      <div className="column">
        {/* Main Content Area */}
        <div className="col-lg-10">
          <div>
            <img
              src={afrijour_logo}
              className={'h-20 w-20 object-contain'}
              alt="Logo"
              // call a function to redirect to home
              onClick={goHome}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div style={{ marginTop: '2rem', width: 'min-content' }}>
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => ({
                  color: disabled ? '#fff' : '#000',
                  backgroundColor: active ? '#000' : 'transparent',
                  '&:hover': {
                    color: 'black',
                    borderRadius: '25px 0 0 25px',
                    fontWeight: 'bold',
                  },
                }),
                label: () => ({
                  color: 'rgb(var(--accessible-color))',
                }),
              }}
            >
              {mainNavLinks.map(({ to, label, icon }) => (
                <NavLink key={to} to={to} active="active" style={{ fontWeight: '500' }}>
                  <MenuItem
                    className={`menu-item ${isActiveLink(to) ? 'menu-item-active' : ''}`}
                    icon={React.createElement(iconMapping[icon], {
                      className: `icon text-3xl ${isActiveLink(to) ? 'active-link' : ''}`,
                    })}
                    onClick={() => setSidebarCollapsed(false)}
                  >
                    <span className="text">{label}</span>
                  </MenuItem>
                </NavLink>
              ))}

              <hr style={{ margin: '1rem 0', width: '90%', border: '1px solid #fefefe' }} />
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLeftPanel
