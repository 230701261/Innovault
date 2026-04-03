// Highlight active page
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Add authors dynamically
function addAuthor() {
    let input = document.createElement("input");
    input.placeholder = "Author Name";
    document.getElementById("authors").appendChild(input);
}

// Conference search demo
function searchConference() {
    document.getElementById("results").innerHTML =
        "<li>AI Conference 2025</li><li>Cloud Expo 2025</li>";
}