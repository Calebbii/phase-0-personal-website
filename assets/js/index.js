function getComment(){
    let name = document.getElementById("name").value;
    let messages = `Hello ${name}, I have recieved your comment we value your feedback`;
    alertMessage(messages);
}

function clicked(){
    
}

function alertMessage(message){
    alert(message);
}

document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();
    getComment();
})