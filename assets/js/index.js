
const displayDiv = document.querySelector('#displayAdvice');
const getBtn = document.querySelectorAll('#getAdvice');

function getAdv() {
    fetch('https://api.adviceslip.com/advice').then( response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        displayDiv.innerHTML = `<h1>${adviceObj.advice}</h1>`; 
        console.log(adviceData);
});
}
fetch('https://api.adviceslip.com/advice').then( response => {
    return response.json();
}).then(adviceData => {
    const adviceObj = adviceData.slip;
    displayDiv.innerHTML = `<h1>${adviceObj.advice}</h1>`; 
    console.log(adviceData);
});







function getComment(){
    let name = document.getElementById("name").value;
    let messages = `Hello ${name}, We have recieved your comment we value your feedback`;
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

