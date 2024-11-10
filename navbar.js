const navbar = document.getElementsByClassName("navbar")[0];
const navbarButtons = document.getElementsByClassName("navbarButton");
const logo = document.getElementsByClassName("logo")[0];

// Set initial state of navbar buttons (hidden and positioned below)
Array.from(navbarButtons).forEach(button => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(-120px)';
});

// On mouseover, show buttons, move logo back, and reposition it
navbar.addEventListener("mouseover", function() {
    Array.from(navbarButtons).forEach(button => {
        button.style.transform = 'translateY(0)';
        button.style.opacity = '1';
    });

    // On hover, move the logo back to its original position
    if (window.innerWidth > 1200) {
        logo.style.transform = 'translateX(calc(-50vw + 120px))';
        navbar.style.padding = "0 210px";
    }
    else {
        logo.style.transform = 'translateX(calc(-50vw - 120px))';
        navbar.style.padding = "0 10px";
    }
});

// On mouseout, hide buttons, move logo to center, and reset positions
navbar.addEventListener("mouseout", function() {
    Array.from(navbarButtons).forEach(button => {
        // Fade out and move back to original position
        button.style.opacity = '0';
        button.style.transform = 'translateY(-120px)';
    });

    // On mouseout, center the logo
    logo.style.transform = 'translateX(0)'; // Move logo to the center of the navbar
    navbar.style.justifyContent = 'space-evenly'; // Center the logo and hide the buttons
});