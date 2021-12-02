import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
async function sendEmail(req, res) {
  try {
    console.log("req body", req.body);
    const message = `
        Nom: ${req.body.name}\r\n
        Telephone: ${req.body.tel}\r\n
        Email: ${req.body.email}
      `;
    await sendgrid.send({
      to: "henri.bresteau@gmail.com",
      from: "henri.bresteau@gmail.com",
      subject: "Nouveau test Next Energy : ",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ status: "OK" });
}
export default sendEmail;
