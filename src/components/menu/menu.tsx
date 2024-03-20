import MenuItem from '@/components/menu/menu-item'

const MENU_ITEMS = [
  { name: 'Contact', to: '/contact' },
  { name: 'About Us', to: '/about' },
  { name: "FAQ's", to: '/faqs' },
  { name: 'Support', to: '/support' },
]

function Menu({ className }: { className?: string }) {
  return (
    //Gve custom color
    <ul className={className} style={{color: 'red', fontSize:'14px' }}>
      {MENU_ITEMS.map((link) => (
        <MenuItem key={link.name} to={link.to} name={link.name}  />
      ))}
    </ul>
  )
}

export default Menu
