const nav = document.querySelector(".js-navigator");
const navI = document.querySelector(".nav-icon");
const div = nav.querySelector("div");
const NAV = "navigator";

const iconList = [
  { name: "🎨 Paint", link: "paint.html" },
  { name: "🔢 Calculator", link: "calculator.html" },
  { name: "🎰 Random Number", link: "randomNum.html" },
  { name: "💡 Other things" },
];

const LINKS_CN = "link-icon";

function paintNav(item) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = item.name;
  a.href = item.link;
  li.appendChild(a);
  li.classList.add(LINKS_CN);
  navI.appendChild(li);

  const navIcon = document.querySelector(".nav-icon");
  const anchors = navIcon.querySelectorAll("a");
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function popupOpen(e) {
      e.preventDefault();
      const url = anchor.href;
      console.log(url);
      const options =
        "width=900, height=600, top=30, left=30, resizable=no, scrollbars=no, location=no";
      window.open(url, "windowPop", options);
    });
  });
}

function handlenavigator() {
  console.log("nav works!");
  div.classList.toggle(NAV);
}

function init() {
  iconList.forEach(function (item) {
    console.log(item);
    paintNav(item);
  });
  nav.addEventListener("click", handlenavigator);
}
init();
