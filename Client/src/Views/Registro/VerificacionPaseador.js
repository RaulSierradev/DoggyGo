const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export default function VerificacionPaseador(props) {
  const errors = {};
  if (!props.name.trim()) errors.name = "Este espacio está vacío";
  if (!props.email.trim()) errors.email = "Este espacio está vacío";
  if (!regexEmail.test(props.email)) errors.email = "Ingresa un email válido";
  if (!props.address.trim()) errors.address = "Este espacio está vacío";
  if (!props.phone.trim()) errors.phone = "Este espacio está vacío";
  if (!props.password.trim()) errors.password = "Este espacio está vacío";
  if (!regexPass.test(props.password))
    errors.password = "Contraseña incorrecta";
  if (!props.repPassword.trim()) errors.phone = "Este espacio está vacío";
  if (props.password !== props.repPassword)
    errors.repPassword = "Las contraseñas no coinciden";

  return errors;
}
