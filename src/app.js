const form = document.querySelector('form');
const message = document.getElementById('message');

let breakupInfo = {};


form.addEventListener("submit", getFormData);

function getFormData(event) {
  breakupInfo.yourName= event.target[0].value;
  breakupInfo.partnerName= event.target[1].value;
  breakupInfo.length= event.target[2].value;
  breakupInfo.mood= event.target[3].value;
  breakupInfo.reason= event.target[4].value;
  breakupInfo.comment= event.target[5].value;
  makeResponse(breakupInfo);
}

function makeResponse(info){
  let reason;
  fetch("../reason.json")
  .then(response => response.json())
  .then(response => {
      let lengthOf = response[breakupInfo.reason];
      let index = Math.floor(Math.random() * Math.floor(lengthOf));
      reason = response[breakupInfo.reason][index]
  })

  let mainMessage = `Hey ${breakupInfo.partnerName}, it's ${breakupInfo.yourName}.  Even though we've been together
  ${breakupInfo.length}, but I'm feeling ${breakupInfo.mood}.  I think it's time that we end our relationship
  because ${reason}`;

  if (breakupInfo.comment != "") {
    mainMessage += breakupInfo.comment;
  }

  form.classList.add("hidden");
  message.classList.remove("hidden");
  message.innerHTML = mainMessage;
}
