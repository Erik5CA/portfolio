import '../styles/ListTecnologies.css'
import { ItemTechnology } from './ItemTechnology'
import { techs } from '../mocks/listTech'
export function ListTecnologies() {
  return (
  <div className="list-tecnologies">
    <h2>Technoligies</h2>
    <div className='container-list-technologies'>
    {
        techs.map((tech) => {
          return <ItemTechnology key={tech.id} tech={tech} />
        })
    }
    </div>

  </div>
  )
}
