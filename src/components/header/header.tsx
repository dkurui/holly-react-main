// import { Logo } from '@/components/logo'
import { Link } from 'react-router-dom'
import logo from '../../assets/APHRC.png'
// import afrijour_logo from '../../assets/afrijour-logo.png'

function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center gap-2 no-underline">
              {/* <Logo /> */}
              {/* <img src={afrijour_logo} alt="logo" style={{height:'10rem'}}/> */}
              <img src={logo} alt="logo" style={{height:'4rem', marginLeft:'-1rem'}}/>
              <span>{title}</span>
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header
