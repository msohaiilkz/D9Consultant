var images = [
  "image/Home1.jpg",
  "image/Home2.jpg",
  "image/Home3.jpg",
];
var currentIndex = 0;
var bgImage = document.querySelector(".bg-image");

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  bgImage.style.opacity = 0;
  setTimeout(function () {
    bgImage.style.backgroundImage = 'url("' + images[currentIndex] + '")';
    bgImage.style.opacity = 1;
  }, 150); // Change opacity after 500ms transition
}

setInterval(changeBackgroundImage, 5000); // Change every 5 seconds

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

window.addEventListener("scroll", function () {
  const parallaxAbout = document.querySelector(".parallaxAbout");
  let scrollPosition = window.pageYOffset;
  parallaxAbout.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

// Services page

function switchTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Deactivate all tab buttons
  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((button) => button.classList.remove("active"));

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");

  // Activate the corresponding tab button
  const selectedTabButton = document.querySelector(`.tab[data-tab="${tabId}"]`);
  selectedTabButton.classList.add("active");

  // Update tab image
  const tabImage = document.getElementById("tabImage");
  tabImage.src = "";

  switch (tabId) {
    case "tab1":
      tabImage.src = "image/Potential-of-your-data.png";
      break;
    case "tab2":
      tabImage.src = "image/Our-Value.png";
      break;
    case "tab3":
      tabImage.src = "image/Potential-of-your-data.png";
      break;
    default:
      // Handle default case if needed
      break;
  }
}

// Example of how to use the function with a click event
document.querySelectorAll(".tab").forEach((tabElement) => {
  tabElement.addEventListener("click", function (event) {
    const tabId = event.currentTarget.getAttribute("data-tab");
    switchTab(tabId);
  });
});

window.addEventListener("scroll", function () {
  const parallaxService = document.querySelector(".parallaxService");
  let scrollPosition = window.pageYOffset;
  parallaxService.style.transform =
    "translateY(" + scrollPosition * 0.5 + "px)";
});

// active nav-link script
// JavaScript to add 'active' class to clicked nav-link
var currentPage = window.location.href;
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(function (link) {
  if (link.href === currentPage) {
    link.classList.add("active"); 
  }
});

// counter 
function createCounter(start, end, elementId) {
  let counter = start;
  const interval = setInterval(() => {
    document.getElementById(elementId).innerText = counter;
    if (counter === end) clearInterval(interval);
    else counter++;
  }, 1); // Adjust interval time here (milliseconds)
}

window.onload = function () {
  createCounter(2900, 4351, "counter1");
  createCounter(7200, 8625, "counter2");
  createCounter(1, 25, "counter3");
  createCounter(1, 125, "counter4");
};

// slider moving 

function scrollContent(direction) {
  const scrollInterval = setInterval(function () {
    if (direction === "left") {
      document.getElementById("scrollContent").scrollBy(-1, 0);
      if (document.getElementById("scrollContent").scrollLeft === 0) {
        clearInterval(scrollInterval);
        scrollContent("right");
      }
    } else if (direction === "right") {
      document.getElementById("scrollContent").scrollBy(1, 0);
      if (
        document.getElementById("scrollContent").scrollLeft ===
        document.getElementById("scrollContent").scrollWidth -
          document.getElementById("scrollContent").clientWidth
      ) {
        clearInterval(scrollInterval);
        scrollContent("left");
      }
    }
  }, 40);
}
scrollContent("right");