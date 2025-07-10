// deskripsi
const textarea = document.getElementById("deskripsi");
const maxWords = 50;

textarea.addEventListener("input", () => {
  const words = textarea.value.trim().split(/\s+/);
  if (words.length > maxWords) {
    textarea.value = words.slice(0, maxWords).join(" ");
  }
});

// skill
document.querySelectorAll(".nested").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    const submenu = this.nextElementSibling;
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      this.classList.remove("active");
    } else {
      submenu.style.display = "block";
      this.classList.add("active");
    }
  });
});
