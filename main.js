const form = document.getElementById("form");

function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: 'momenomer136@gmail.com',
        Password: "2D572C028AC945E2F6BD77E6ACBDB4122158",
        To: "momenomer136@gmail.com",
        From: "momenomer136@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
      message => alert("Email sent successfully!")
    ).catch(
      error => alert("Failed to send email: " + error)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    sendEmail(name, email, subject, message);
});