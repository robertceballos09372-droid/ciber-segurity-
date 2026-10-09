// =====================================
// MODO CLARO / OSCURO
// =====================================

const themeButton = document.getElementById("themeButton");


// Revisar si anteriormente se seleccionó
// el modo oscuro

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (themeButton) {
        themeButton.textContent = "☀️";
    }

}


// Cambiar tema

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "🌙";

        }

    });

}


// =====================================
// NAVEGACIÓN SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =====================================
// ANIMACIÓN AL HACER SCROLL
// =====================================

const cards = document.querySelectorAll(
    ".service-card, .tool-card"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});


// =====================================
// FORMULARIO DE CONTACTO
// =====================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "¡Mensaje enviado correctamente! Gracias por contactar a CyberShield Security."
            );

            contactForm.reset();

        }
    );

}


// =====================================
// CERRAR MENÚ EN CELULAR
// =====================================

const menuLinks =
    document.querySelectorAll(".navbar .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(
                    navbarCollapse
                );

            bsCollapse.hide();

        }

    });

});