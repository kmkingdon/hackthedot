const form = document.querySelector('form');
const message = document.getElementById('message');
const h1 = document.querySelector('h1');

let breakupInfo = {};

let data = { theirFault: [
  "I think your timing is off.",
  "I just can't take bad sex anymore.",
  "Roses are red, Violets are blue. Garbage is dumped, now so are you.",
  "I now pronounce you dumped and single. You may now kiss my ass.",
  "I just can't take the bad sex anymore.",
  "Roses are red, Violets are blue. Garbage is dumped, now so are you.",
  "I now pronounce you dumped and single. You may now kiss my ass.",
  "It's not you...it's your taste in music",
  "Hey baby, are you being followed? Because I've been seeing people behind your back.",
  "Really, our time together has just become more effort than you're worth.",
  "I wish I could say you were the most special person in the world, but you're not.",
  "You're not Mr. Right.... just Mr. Right Now.",
  "You just don't get me like you use to.",
  "My cat doesn't like you.",
  "It's not because I don't like you, it's because I hate you",
  "Roses are red,violets are blue. We're breaking up because i never loved you.",
  "You just know me too well, and that freaks me out.",
  "Our relationship is like a fat guy. It's not working out.",
  "there's someone else.", "It's not you...it's me...well ok..it is you.",
  "dear Baby: Welcome to Dumpsville. Population: YOU.",
  "look, our relationship is like doing pushups on your knees, it's just not working out.",
  "i treated this relationship like my diet, one cheat day a week.",
  "we are done-ion rings.",
  "hey baby, are you being followed? Because I've been seeing people behind your back."
  ],
  myFault: [
    "You're perfect in every way, just not for me.",
    "We're just at different points in our lives.",
    "Maybe this is not the right time for us.",
    "I just can't handle the distance....Sorry.",
    "Maybe we're not compatible.",
    "I need space.",
    "Sorry I stopped contacting you. I had to go back to rehab.",
    "I need to find myself and I just can't do that with you.",
    "You deserve better and so do I.",
    "I think you feel more than I do and I don't want to hurt you.",
    "We should be free to meet our special someone.",
    "I found a new running partner.",
    "I still care about you, but I just don't find my heart jumping out of my chest when I see you anymore.",
    "I think you love me more than I love you.",
    "I need time to focus on my career.",
    "Look, our relationship is like doing push ups on your knees... It's just not working out.",
    "I need to learn to love myself before I can love you.",
    "I think our timing is off.",
    "I'm looking for a long-term relationship and I just can't pursue that with you.",
    "The longer we are together, the less serious I am about you.",
    "Maybe we should take a break.",
    "It’s not working, but lets still share a netflix account.",
    "You should search for someone with the same principles and values.",
    "I don't want to hold you back.",
    "I don't want the responsibility of someone else's happiness.",
    "Maybe we have too much in common. We are too much alike.",
    "i need something more.",
    "i just don’t see this working.",
    "i need to figure out myself before I can share my life with someone."]
};


form.addEventListener("submit", getFormData);

function getFormData(event) {
  event.preventDefault();
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
      let lengthOf = data[breakupInfo.reason].length;
      let index = Math.floor(Math.random() * Math.floor(lengthOf));
      reason = data[breakupInfo.reason][index]


  let mainMessage = `Hey ${breakupInfo.partnerName}, it's ${breakupInfo.yourName}.  Even though we've been together
  ${breakupInfo.length}, but I'm feeling ${breakupInfo.mood}.  I think it's time that we end our relationship
  because ${reason} `;

  if (breakupInfo.comment != "") {
    mainMessage += breakupInfo.comment;
  }

  form.classList.add("hidden");
  h1.classList.add("hidden");
  message.classList.remove("hidden");
  message.innerHTML = mainMessage;
}
