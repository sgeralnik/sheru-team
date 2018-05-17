const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.toSlack = functions.https.onRequest((request, response) => {
  var statusArray = []
  statusArray = ["red", "yellow", "red", "red", "green", "red", "yello", "red"] // Liav change this!!!
  const colors = {
    red: "#ff0000",
    yellow: "#ffff00",
    green: "#00ff00"
  }
  response.contentType("application/json");
  var N = 8; 
  const stateIndex = Array.apply(null, {length: N}).map(Number.call, Number)
  attachments = stateIndex.map(index => {
    return {
      color: colors[statusArray[index]],
      title: "Floor " + (Math.floor(index/2) + 12).toString() + " " + (index % 2 ? "Men" : "Women")
    }
  })
  response.send(JSON.stringify({
      "text": "PANW TLV site toilet occupency",
      "attachments": attachments
  }))
})
