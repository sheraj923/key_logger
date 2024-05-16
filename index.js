const logDiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener ( "click" , () => {
    document.addEventlistener("keydown", handledown)
    document .addEventListener("Keyup", handleup)

} )

stopButton.addEventListener ( "click" , () => {
    document.removeEventListenerEventlistener("keydown", handledown)
    document .removeEventListener("Keyup", handleup)

    logDiv = " ";
    statediv = " ";

} )

function handledown(e){
    logDiv.textContent = ' this key '+ e.key + 'is down';
    statediv = " The key is down"
}

function handleup(e){
    logDiv.textContent =  ' this key '+ e.key + 'is down';
    statediv = " The key is up"
}