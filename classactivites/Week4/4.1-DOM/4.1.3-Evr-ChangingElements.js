// print the outer HTML of the navigation bar
const navBar = document.querySelector(".nav-bar");
console.log(navBar.outerHTML);
// print the inner HTML of the navigation bar
console.log(navBar.innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
console.log(firstClassWeek, "Before");
firstClassWeek.classList.add("week-1");
console.log(firstClassWeek);
// select the img element and add a src attribute
document.querySelector("img").src =
  "https://highlandcanine.com/wp-content/uploads/2021/05/yorkshire-terrier-sitting-on-decking.jpg";
// change the font color of the h1 element
document.querySelector("h1").style.color = "pink";
