from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
import aiosmtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS (so React frontend can send requests)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.mlrental.cl/#"],  # You can later replace "*" with your domain for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a Pydantic model for form validation
class ContactForm(BaseModel):
    name: str
    last_name: str
    region: str
    email: EmailStr
    phone: str
    message: str

# Function to send an email
async def send_email(name: str, last_name: str, region: str, email: str, phone: str, message: str):
    sender_email = os.getenv("SMTP_SENDER")
    recipient_email = os.getenv("SMTP_RECIPIENT")
    smtp_server = os.getenv("SMTP_SERVER")
    smtp_port = int(os.getenv("SMTP_PORT"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")

    # Create the email
    msg = EmailMessage()
    msg["From"] = sender_email
    msg["To"] = recipient_email
    msg["Subject"] = "Nuevo mensaje a traves del formulario de contacto de la pagina web"
    msg.set_content(
        f"Nombre: {name}\n"
        f"Apellido: {last_name}\n"
        f"Región: {region}\n"
        f"Email: {email}\n"
        f"Phone: {phone}\n"
        f"Mensaje: {message}\n")

    try:
        await aiosmtplib.send(
            msg,
            hostname=smtp_server,
            port=smtp_port,
            username=smtp_username,
            password=smtp_password,
            use_tls=True,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Email sending failed: {e}")

@app.post("/contacto")
async def contact_form(data: ContactForm):
    await send_email(data.name, data.last_name, data.region, data.email, data.phone, data.message)
    return {"message": "Your message has been sent successfully"}
