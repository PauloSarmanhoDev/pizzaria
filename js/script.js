scrollAnim = () => {
    const reveals = document.querySelectorAll(".reveal, .reveal-sobre");

    let windowHt = window.innerHeight;

    reveals.forEach((element) => {
      let elementPos = element.getBoundingClientRect().top;
      if (elementPos <= windowHt) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", scrollAnim);