import nodemailer from 'nodemailer'

export const sendEmailViaSMTP = async (email: string, messageId: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'vikas.nits8084@gmail.com',
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD!,
    },
  })

  try {
    const res = await transporter.sendMail({
      from: 'vikaskumar808425@gmail.com',
      to: email,
      subject: 'Thanks for Contacting Us',
      replyTo: {
        address: 'no-reply@vikas.gmail.com',
        name: 'No Reply',
      },
      messageId: messageId,
      html: `<div style={{display:"flex", alignItems:"center", flexDirection:"column", padding:"10px", gap:"5px"}}>
          <p>Thanks for contacting us. We will review your query and we will reach out to you soon</p>
        </div>
        `,
    })
    return res
  } catch (e) {
    console.error('Error while sending email')
  }
}
