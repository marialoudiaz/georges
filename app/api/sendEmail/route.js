// /app/api/sendEmail/route.js ou /pages/api/sendEmail.js pour le système de pages
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { prenom, nom, email } = await request.json();

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true, // Utiliser TLS
      auth: {
        user: process.env.SMTP_USER, // Variable d'environnement
        pass: process.env.SMTP_PASS, // Variable d'environnement
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.SMTP_USER,
      subject: `${prenom} a été ajouté à la liste d'attente`,
      text: `${prenom}${nom} a été ajouté à la liste d'attente. Contacter via ${email}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Auto-Reply to User
    const mailToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Confirmation d'inscription à la liste d'attente de Georges Aioli Catalan`,
      text: `Adeu ${prenom} !,
      Merci de vous être inscrit(e) à ma liste d'attente. Je vous contacterai dès que mon aioli sera prêt à l'achat.
      À très vite,
      Georges`,
    };

    await transporter.sendMail(mailToUser);

    return new Response(JSON.stringify({ message: 'Emails envoyés avec succès' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi des emails" }), { status: 500 });
  }
}
