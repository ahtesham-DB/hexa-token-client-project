
import  nodemailer  from 'nodemailer'
export const mailSender = async (req, res) => {
    const { uuid, emailTo, emailFrom, expiresIn } = req.body;
    if(!uuid || !emailTo || !emailFrom) {
        return res.status(422).send({ error: 'All fields are required except expiry.'});
    }
    // Get data from db 
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
            },
        });
    // console.log(transporter)
    let info = await transporter.sendMail({
        from: `ATS Password Rest <${emailFrom}>`, // sender address
        to: emailTo, // list of receivers
        subject: "ATS Password Rest Link ", // Subject line
        text: "text", // plain text body
        html: `   <!doctype html>
        <html>
        <head>
        </head>
        <body>
        <h3>ATS Password Rest Link <a href="https://google.com" target="blank_">Click here</a></h3>
        </body>
        </html>
        `, // html body
    }).then(() => {
        return res.json({success: true});
      }).catch(err => {
        return res.status(500).json({error: 'Error in email sending.'});
      });
  } catch(err) {
    return res.status(500).send({ error: 'Something went wrong.'});
  }
  
    //   const file = await File.findOne({ uuid: uuid });
    //   if(file.sender) {
    //     return res.status(422).send({ error: 'Email already sent once.'});
    //   }
    //   file.sender = emailFrom;
    //   file.receiver = emailTo;
    //   const response = await file.save();
   
  };