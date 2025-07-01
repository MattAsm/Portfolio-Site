const senderName = document.getElementById("name-input");
const message = document.getElementById("message");

function templateEmail(){
    const sender = senderName.value;
    const mesg = message.value;
    location.href = `mailto:matthew.asmunt@yahoo.ca?subject=${encodeURIComponent(sender)}&body=${encodeURIComponent(mesg)}`;
    console.log(sender + " " + mesg);
}