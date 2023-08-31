import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function AlertDialog({ onClose }) {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		onClose();
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'No estas logueado como cliente'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Tienes que estar logueado no como paseador para poder
						ver el perfil del paseador. Inicia sesion o Registrate.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<div className="mr-3">
						<NavLink to={'/registro'} onClick={handleClose}>
							Registrate
						</NavLink>
					</div>
					<NavLink to={'/login'} onClick={handleClose} autoFocus>
						Inicia Sesion
					</NavLink>
				</DialogActions>
			</Dialog>
		</div>
	);
}
