import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../../context/AppContext"
import { deleteUser } from "../../../helpers/log/deleteUser"
import "./User.css"

//////////////////////////////////////
export const User = () => {
	const { setIsAuthenticated, user } = useContext(AppContext)
	const [componentActive, setComponentActive] = useState(false)

	const alternProfile = () => {
		setComponentActive(!componentActive)
	}

	//////////////////////////////////////
	return (
		<div className='user__container' onClick={alternProfile}>
			<img className='user__img' src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png" alt="foto de perfil del usuario"/>
			{
				componentActive && (
				<ul className='user__information'>
					<li className='user__name'>{user.name}</li>
					{/* <li className='user__description'>Aqui va una descripcion del usuario</li> */}
					<li className='user__description'>{user.email}</li>
					<Link className='user__button-edit' to='/profile'>Editar Perfil</Link>
					<Link className='user__button-edit' to='/' onClick={() => {
						deleteUser() //eliminar datos del uusario del local storage
						setIsAuthenticated(false)
					}}>Cerrar sesion</Link>
				</ul>
			)}
		</div>
	)
}
