const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({
  origin: ["https://mlrental.cl", "https://www.mlrental.cl"],
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

app.post("/api/contacto", async (req, res) => {
  const { name, lastName, region, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: "Nuevo mensaje de contacto",
    text: `
Nombre: ${name}
Apellido: ${lastName}
Región: ${region}
Correo: ${email}
Teléfono: ${phone}
Mensaje: ${message}
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", result);
    res.status(200).json({ message: "Mensaje enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ message: "Error al enviar el mensaje" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});