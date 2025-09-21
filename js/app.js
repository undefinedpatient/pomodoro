import "../components/timer-card.js"

console.log("Connected");

await Notification.requestPermission();

if(Notification.permission !== "denied"){
    Notification.requestPermission();
}