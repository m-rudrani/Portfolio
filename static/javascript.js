document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-link");
    const sections = document.querySelectorAll("section");
  
    // Function to remove active class from all links
    function removeActiveClass() {
      navLinks.forEach(link => link.classList.remove("active"));
    }
  
    // Function to add active class to the link
    function setActiveClass(targetLink) {
      removeActiveClass();
      targetLink.classList.add("active");
    }
  
    // Event listener for clicking on a nav link
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        setActiveClass(this);  // Set the active class on clicked link
      });
    });
  
    // Scroll Event: This will check which section is currently in view and set the active class accordingly
    window.addEventListener("scroll", function() {
      let currentSection = null;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section;
        }
      });
  
      if (currentSection) {
        const activeLink = document.querySelector(`a[href="#${currentSection.id}"]`);
        setActiveClass(activeLink);  // Update active link when section is in view
      }
    });
  });
  