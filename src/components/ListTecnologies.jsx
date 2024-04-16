import '../styles/ListTecnologies.css'
import { ItemTechnology } from './ItemTechnology'
import { techs } from '../mocks/listTech'
export function ListTecnologies() {
  return (
  <div className="list-tecnologies">
    <h2>Technoligies</h2>
    {
        techs.map((tech, index) => {
          return <ItemTechnology key={index} tech={tech} />
        })
    }

  </div>
  )
}
