const checkbox = document.getElementById('checkbox');

function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
}

checkbox.addEventListener('click', toggleDarkTheme);



// // Check if the user's theme preference is already set
// const userThemePreference = localStorage.getItem('theme');

// // If the preference is set, apply the theme
// if (userThemePreference === 'dark') {
//   document.body.classList.add('dark-theme');
// }

// // Event listener for the theme toggle button
// themeToggle.addEventListener('click', () => {
//   // Toggle the dark theme class on the body element
//   document.body.classList.toggle('dark-theme');

//   // Save the user's theme preference to Local Storage
//   const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
//   localStorage.setItem('theme', currentTheme);
// });


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);