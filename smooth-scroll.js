// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links with href starting with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // Add click event listener to each link
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default jump

            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});