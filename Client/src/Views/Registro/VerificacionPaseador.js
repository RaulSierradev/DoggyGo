const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export default function VerificacionPaseador(props) {
  const errores = {};
  if (!props.nombre.trim()) errores.name = "Este espacio está vacío";
  if (!props.descripcion.trim())
    errores.descripcion = "Este espacio está vacío";
  if (!props.email.trim()) errores.email = "Este espacio está vacío";
  if (!regexEmail.test(props.email)) errores.email = "Ingresa un email válido";
  if (!props.direccion.trim()) errores.direccion = "Este espacio está vacío";
  if (!props.telefono.trim()) errores.telefono = "Este espacio está vacío";
  if (!props.password.trim()) errores.telefono = "Este espacio está vacío";
  if (!regexPass.test(props.password))
    errores.password = "Contraseña incorrecta";
  if (!props.repPassword.trim()) errores.telefono = "Este espacio está vacío";
  if (props.password !== props.repPassword ) errores.repPassword = 'Las contraseñas no coinciden'

  return errores;
}
