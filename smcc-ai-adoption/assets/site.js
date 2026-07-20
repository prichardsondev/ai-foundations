(function () {
  var printButtons = document.querySelectorAll("[data-print]");
  printButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.print();
    });
  });

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  if (!slides.length) {
    return;
  }

  var current = 0;
  var prev = document.querySelector("[data-prev]");
  var next = document.querySelector("[data-next]");
  var progress = document.querySelector("[data-progress]");
  var progressText = document.querySelector("[data-progress-text]");

  function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("active", slideIndex === current);
      slide.setAttribute("aria-hidden", slideIndex === current ? "false" : "true");
    });

    var percent = ((current + 1) / slides.length) * 100;
    if (progress) {
      progress.style.width = percent + "%";
    }
    if (progressText) {
      progressText.textContent = current + 1 + " / " + slides.length;
    }
    if (prev) {
      prev.disabled = current === 0;
    }
    if (next) {
      next.disabled = current === slides.length - 1;
    }
  }

  if (prev) {
    prev.addEventListener("click", function () {
      showSlide(current - 1);
    });
  }
  if (next) {
    next.addEventListener("click", function () {
      showSlide(current + 1);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      showSlide(current + 1);
    }
    if (event.key === "ArrowLeft") {
      showSlide(current - 1);
    }
  });

  showSlide(0);
})();
