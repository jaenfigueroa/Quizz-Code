import { Link } from 'react-router-dom'
import './CategoryCard.css'

//////////////////////////////////////
const CategoryCard = ({ category }) => {
  const { name } = category;



  //////////////////////////////////////
  return (
    <article className='card-language'>
      {/* LOGO */}
      <div className='card-language__icon-mask'>
        <img className='card-language__icon' src={category.icon} alt="" />
      </div>

      {/* TITULO */}
      <span className="card-language__title">{name}</span>

      {/* NUMERO DE EJERCICIOS */}
      <p className='card-language__number'>5/20 completados</p>

      {/* BARRA DE EJERCICIOS COMPLETADOS */}
      <div className='card-language__bar'></div>
      
      {/* BOTON ENTRAR */}
      <Link className='card-language__button' to={`/category/${name}`}>Entrar</Link>
    </article>
  )
}

export default CategoryCard