function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Bilandaauudnour@gmail.com",
        Password : "Khalad123456",
        To : 'ladkadaud@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquary",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}