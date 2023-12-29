import { useState } from "react"


const menu = [
  'Home',
  'About',
  'Contact',
  'Goals',
  'Carrers'
]

function Menu() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <ul className={'nav__menu' + (open ? ' open' : '')}>
        {menu.map(item => {
          return <li key={item} className="nav__link"><a href="#">{item}</a></li>
        })}
      </ul>
       <div className={"hamburger" + (open ? ' open' : '')} onClick={() => setOpen(!open)}>
        <span className="line top"></span>
        <span className="line mid"></span>
        <span className="line bot"></span>
      </div>
    </>  
  )
}

export default Menu