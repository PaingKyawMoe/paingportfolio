
      // Initialize AOS
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });

      // Initialize Typed.js
      var typed = new Typed(".typed-text", {
        strings: [
          "Full-Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "Problem Solver",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });

      // Initialize Particles.js
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#f89b29",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });

      // Navbar scroll effect
      window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        var scrollTop = document.querySelector(".scroll-top");

        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
          scrollTop.classList.add("active");
        } else {
          navbar.classList.remove("scrolled");
          scrollTop.classList.remove("active");
        }

        // Animate progress bars when in viewport
        var progressBars = document.querySelectorAll(".progress");
        progressBars.forEach(function (progressBar) {
          var position = progressBar.getBoundingClientRect();
          if (position.top < window.innerHeight && position.bottom >= 0) {
            var width = progressBar.getAttribute("data-width") + "%";
            progressBar.style.width = width;
          }
        });
      });

      // Menu toggle for mobile
      var menuToggle = document.querySelector(".menu-toggle");
      var navbarItems = document.querySelector(".navbar-items");

      if (menuToggle) {
        menuToggle.addEventListener("click", function () {
          this.classList.toggle("active");
          navbarItems.classList.toggle("active");
        });
      }

      // Close menu when clicking on a nav link (mobile)
      var navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
          if (navbarItems.classList.contains("active")) {
            navbarItems.classList.remove("active");
            menuToggle.classList.remove("active");
          }
        });
      });

      // Scroll to top button
      var scrollTopBtn = document.querySelector(".scroll-top");
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      }

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });