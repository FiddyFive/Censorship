import { NavLink } from "react-router"

import "./Nav.css"
import { LinkData } from "../../types/routes"

function Nav() {
  const routes: LinkData[] = [
    {
      name: "Home",
      addr: "/"
    },
    {
      name: "Browsers",
      addr: "/browsers"
    },
    {
      name: "Identity Verification",
      addr: "/id-verification"
    }
  ]
  return (
    <div className="bar">
      {routes.map(({name, addr}) => <NavLink className="button" to={addr}>{name}</NavLink>)}
    </div>
  )
}

export default Nav