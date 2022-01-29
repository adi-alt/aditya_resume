let first = document.querySelector(".specifica"); 
let second = document.querySelector(".specificb");
let third = document.querySelector(".specificc");
let fourth = document.querySelector(".specificd");
first.addEventListener("click", () => {
  first.style.borderBottom = "3px solid blanchedalmond";
  second.style.borderBottom = "";
  third.style.borderBottom = "";
  fourth.style.borderBottom = "";
});

second.addEventListener("click", () => {
  second.style.borderBottom = "3px solid blanchedalmond";
  first.style.borderBottom = "";
  third.style.borderBottom = "";
  fourth.style.borderBottom ="";
});

third.addEventListener("click", () => {
  third.style.borderBottom = "3px solid blanchedalmond";
  fourth.style.borderBottom = "";
  first.style.borderBottom = "";
  second.style.borderBottom = "";
});
fourth.addEventListener("click", () => {
  fourth.style.borderBottom = "3px solid transparent";
  third.style.borderBottom ="";
  first.style.borderBottom = "";
  second.style.borderBottom = "";
});