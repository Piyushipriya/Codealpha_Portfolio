
document.addEventListener("DOMContentLoaded", function () {
    const navigationLinks = document.querySelectorAll(".nav-links a");
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }
        });
    });
});
