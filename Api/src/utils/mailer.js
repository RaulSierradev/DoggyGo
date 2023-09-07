require("dotenv").config();
const nodemailer = require('nodemailer')
const { MAILER_PASSWORD } = process.env

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'doggygo.noreply@gmail.com',
        pass: MAILER_PASSWORD
    }
})

const email1 = async (email) => {
    const info = await transporter.sendMail({
        from: 'doggygo.noreply@gmail.com',
        to: email,
        subject: '¡Bienvenido a GOGGYGO! Confirmación de registro exitoso.',
        text: '¡Gracias por unirte a GOGGYGO! Estamos encantados de que te hayas registrado y te damos la más cordial bienvenida a nuestra comunidad dedicada a encontrar tu pasiador favorito.',

    })
    console.log('Correo enviado:', info.messageId);
}

const emailContraseña = async (email, id) => {
    const info = await transporter.sendMail({
        from: 'doggygo.noreply@gmail.com',
        to: email,
        subject: '¡Recuperar Contraseña.',
        html: href = `${process.env.BASE_URL}/recuperarcontrase%C3%B1a/${id}`,
        text: '¡Ingrese al siguiente enlace para recuperar su contraseña.',


    })
    console.log('Correo enviado:', info.messageId);

}






module.exports = { email1, emailContraseña }