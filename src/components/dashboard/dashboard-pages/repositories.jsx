import React from 'react'
import './../dashboard-layout.css'
import LeftPanel from '../components/left-panel'
import TopPanel from '../components/top-panel'
import FooterPanel from '../components/footer-panel'
import sabinet from '../../../assets/repositories/sabinet.png'
import ajol from '../../../assets/repositories/ajol.png'
import { Link } from 'react-router-dom'

const Repositories = () => {
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
        {/* <LuPanelRightClose size={30} color="grey" />  */}
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="me-2.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <Link
                  to="/dashboard-main"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  Home
                </Link>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>

                <Link
                  to="/repositories"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  Repositories
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <hr className="mt-2" />
        <p class="mb-1  mt-4 text-gray-500 dark:text-gray-400">
          Journals in this platform are sourced from these repsitories
        </p>

        <div class="grid grid-cols-2 gap-1 md:grid-cols-4">
          <div class="mt-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <a href="https://sabinet.co.za/" target="blank">
              <div
                style={{
                  maxHeight: '12rem',
                  minHeight: '12rem',
                  textAlign: '-webkit-center',
                  padding: '1rem',
                  display: 'grid',
                  alignContent: 'space-around',
                  justifyContent: 'space-between',
                }}
              >
                {<img src={sabinet} />}
              </div>
              <img class="rounded-t-lg" src="/" alt="" />
            </a>
            <div class="p-5">
              <a href="https://sabinet.co.za/" target="blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SABINET
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sabinet is an online database of full text South and Southern African journals. It
                includes coverage of a wide variety of topic areas; much of its content is in
                English, but there are also publications in various other European and African
                languages (particularly Afrikaans).{' '}
              </p>
              <a
                href="https://sabinet.co.za/"
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank"
              >
                Read more
                <svg
                  class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <a href="https://www.ajol.info/index.php/ajol">
              <div
                style={{
                  maxHeight: '12rem',
                  minHeight: '12rem',
                  textAlign: '-webkit-center',
                  padding: '1rem',
                  display: 'grid',
                  alignContent: 'space-around',
                  justifyContent: 'space-between',
                }}
              >
                {<img src={ajol} />}
              </div>
            </a>
            <div class="p-5">
              <a href="https://www.ajol.info/index.php/ajol" target="blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  AJOL
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                African Journals OnLine is a South African non-profit organisation, which is in the
                headquarters of Grahamstown, it is dedicated to improve the online visibility and
                access to the published scholarly research of African-based academics.
              </p>
              <a
                href="https://www.ajol.info/index.php/ajol"
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="blank"
              >
                Read more
                <svg
                  class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-panel">
        <FooterPanel />
      </div>
    </div>
  )
}

export default Repositories
