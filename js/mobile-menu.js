(() => {
  const refs = {
    openmobBtn: document.querySelector("[data-mob-open]"),
    closemobBtn: document.querySelector("[data-mob-close]"),
    mob: document.querySelector("[data-mob]"),
    mobBtn: document.querySelector("[data-mobbtn]"),

  };

  refs.openmobBtn.addEventListener("click", togglemob);
  refs.closemobBtn.addEventListener("click", togglemob);

  function togglemob() {
    refs.mob.classList.toggle("is-hidden");
    refs.mobBtn.classList.toggle("is-open");
  }
})();

