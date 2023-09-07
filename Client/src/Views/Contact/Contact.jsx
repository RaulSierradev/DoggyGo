import React, { useState } from 'react';
import style from './Contact.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import idFromToken from '../utils/getToken';

const Contact = (props) => {
	const id = idFromToken();
	console.log(id);
	const allUsers = useSelector((state) => state.users);
	let user = allUsers.find((user) => user.id === id);
	console.log(user);

	if (!user) user = { name: '', email: '' };

	const [btnActive, setBtnActive] = useState(!true);
	const [title, setTitle] = useState('');
	const [categoria, setCategoria] = useState('');
	const [message, SetMessage] = useState('');

	const SendContact = (event) => {
		if (!user.name || !user.email || !categoria || !title || !message)
			Swal.fire('Por favor rellene todos los campos');

		event.preventDefault();
		setBtnActive(true);
		axios
			.post('http:/contact', {
				name: user.name,
				email: user.email,
				category: categoria,
				title,
				message,
			})
			.then(() => {
				Swal.fire(
					'Mensaje enviado, nos pondreos en contacto cuando sea posible'
				);
				setCategoria('');
				setTitle('');
				SetMessage('');
				setBtnActive(false);
			})
			.catch((error) => {
				Swal.fire(error.message);
				setBtnActive(false);
			});
	};

	return (
		<div className={style.ovr}>
			<div className={style.vwContainer}>
				<div className={style.contact}>
					<header className={style.contacthdr}>
						<NavLink to={'/'} className={style.contact_p}>
							DoggyGo
						</NavLink>
						<hr />
					</header>
					<h1 className={style.frmttl}>
						cuentanos lo que tienes para decir👋
					</h1>
					{/* ------------------------------FORM------------------------------ */}
					<form className={style.form} onSubmit={SendContact}>
						<div className={style.inpsSection}>
							<div className={style.secInput}>
								<label className={style.lblinp}>
									Tu nombre
								</label>
								<input
									className={style.inp}
									disabled
									type="text"
									value={user.name}
									style={{
										color: 'gray',
										cursor: 'not-allowed',
									}}
								/>
							</div>
							<div className={style.secInput}>
								<label className={style.lblinp}>Tu email</label>
								<input
									className={style.inp}
									disabled
									type="text"
									value={user.email}
									style={{
										color: 'gray',
										cursor: 'not-allowed',
									}}
								/>
							</div>
							<div className={style.secInput}>
								<label className={style.lblinp}>Titulo</label>
								<input
									className={style.inp}
									type="text"
									required
									value={title}
									onChange={(event) => {
										setTitle(event.target.value);
									}}
								/>
							</div>
							<div
								style={{
									display: 'grid',
									placeItems: 'center',
								}}
							>
								<select
									required
									value={categoria}
									onChange={(event) => {
										setCategoria(event.target.value);
									}}
									style={{
										backgroundColor: 'rgba(15, 27, 76, 1)',
										color: 'white',
									}}
								>
									<option value=""></option>
									<option value="problema o queja">
										problema o queja
									</option>
									<option value="Sugerencia">
										Sugerencia
									</option>
									<option value="Contacto">Contacto</option>
									<option value="Ayuda">Ayuda</option>
								</select>
							</div>
						</div>
						<textarea
							className={style.txtar}
							required
							name=""
							id=""
							cols="30"
							rows="10"
							value={message}
							onChange={(event) => {
								SetMessage(event.target.value);
							}}
						></textarea>
						<input
							className={style[`inpsbm_${btnActive}`]}
							type="submit"
							value={btnActive ? 'Enviando' : 'enviar'}
							disabled={btnActive}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
