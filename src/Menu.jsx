import { useState } from "react"
import { Link } from "react-router-dom"


const menu = [
  'Home',
  'About',
  'Projects',
  'Contact'
]

function Menu() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <ul className={'nav__menu' + (open ? ' open' : '')}>
        {menu.map(item => {
          return (
            <li key={item} className="nav__link">
              <Link 
                onClick={() => {
                  if (!open) return
                  setOpen(!open)
                }}
                to={'/' + item.toLowerCase()}>{item}
              </Link>
            </li>
          )
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