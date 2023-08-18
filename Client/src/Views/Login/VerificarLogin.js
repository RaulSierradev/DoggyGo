const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export default function VerificacionPaseador(props) {
  const errors = {};
  if (!props.email.trim()) errors.email = "Este espacio está vacío";
  if (!regexEmail.test(props.email)) errors.email = "Ingresa un email válido";
  if (!props.password.trim()) errors.password = "Este espacio está vacío";
  if (!regexPass.test(props.password))
    errors.password = "Contraseña incorrecta";

  return errors;
}