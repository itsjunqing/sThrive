const transformChat = e => {
  e.preventDefault();
  var title = document.getElementById("chat-title");
  document.getElementById("chat-title").innerHTML = "Messages";
  document.getElementById(
    "interests-boxes"
  ).innerHTML = `<ul id="messages"></ul><form action="" id="m-form"><input id="m" autocomplete="off" /><button>Send</button></form>`;
};

const switchPage1 = e => {
  e.preventDefault();
  window.location = "chatPerson1.html";
}

const switchPage2 = e => {
  e.preventDefault();
  window.location = "chatPerson2.html";
} 

document.getElementById("person1").addEventListener("click", switchPage1);
document.getElementById("person2").addEventListener("click", switchPage2);
