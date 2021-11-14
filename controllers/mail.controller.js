let nodemailer = require('nodemailer');


exports.sendEmail = async function (req, res, next){
    
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        //host: 'svp-02715.fibercorp.local',
        //secure: false,
        port:25,
        service: 'Gmail',
        auth: {
            user: 'pruebalabs@gmail.com',//poner cuenta gmail
            pass: 'QWERasdf1234'  //contraseña cuenta  IMPORTANTE HABILITAR acceso apps poco seguras google
        }
     });
    // Definimos el email
    var mailOptions = {
        from: 'pruebalabs@gmail.com',
        to: req.body.destinatario,
        subject: req.body.asunto,
        html: '<h1> y aca se muestra el texto  </h1><h3>' +req.body.texto+'</h3>',
        
    };
    console.log("mail",mailOptions)
    // Enviamos el email
    try
    {
        let info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
    }
    catch(error)
    {
        console.log("Error envio mail: ",error);            
    }
};