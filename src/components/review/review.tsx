import { NavLink } from "react-router"
import { LinkData } from "../../types/routes"
import "./review.css"

type Prop = {
  title: string,
  links?: LinkData[],
  internal?: boolean,
  children: any
}

function Review({title, links, internal, children}: Prop) {
  return (
    <div>
      <h2>{title}</h2>
      {links && (
        <div className="external">
          {internal ?
          links.map(({name, addr}) => <NavLink to={addr} className="button">{name}</NavLink>)
          :
          links.map(({name, addr}) => <a href={addr} className="button">{name}</a>)}
        </div>
      )}

      {children}
    </div>
  )
}

export default Review
