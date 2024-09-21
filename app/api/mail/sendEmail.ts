import { Resend } from "resend"

type sendEmailProps = {
  email: string
  subject: string
  message: string
}

const resend = new Resend("re_MbZtdhxj_2ZXw2HnZ43bJDViWE6Ko4eg2")

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message")
  const email = formData.get("email")
  const subject = formData.get("subject")

  const { data, error } = await resend.emails.send({
    from: `${email}`,
    to: ["abood.eraqi1@gmail.com"],
    subject: `${subject}`,
    reply_to: `${email}`,
    text: `${message}`,
  })

  if (error) {
    return console.error({ error })
  }
  console.log({ data })
}
