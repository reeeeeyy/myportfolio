// Get all the navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Function to handle the scrolling and setting the active link
const handleNavLinkClick = (event) => {
  // Prevent default link behavior
  event.preventDefault();

  // Get the clicked link's href attribute value
  const targetId = event.target.getAttribute("href");

  // Scroll to the target section
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
  });

  // Remove the 'active' class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add the 'active' class to the clicked link
  event.target.classList.add("active");
};

// Attach click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavLinkClick);
});

// Function to update the active link based on the current section
const updateActiveLink = () => {
  // Remove the 'active' class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Iterate over each section and check if it is in the viewport
  document.querySelectorAll("section").forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Add the 'active' class to the corresponding navigation link
      document
        .querySelector(`nav ul li a[href="#${sectionId}"]`)
        .classList.add("active");
    }
  });
};

// Attach scroll event listener to update the active link
window.addEventListener("scroll", updateActiveLink);

document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
