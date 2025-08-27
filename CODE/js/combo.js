const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");
const combosContainer = document.getElementById("combos-container");
const addBtn = document.getElementById("add-combo-btn");

let comboCount = 0;

// === FUNGSI PASANG EVENT "SET COMBO" ===
function attachSetComboEvents() {
    const buttons = document.querySelectorAll(".set-combo-btn");
    buttons.forEach((btn) => {
        btn.onclick = () => {
            const combo = btn.closest(".combo");
            const index = Array.from(combosContainer.querySelectorAll(".combo")).indexOf(combo) + 1;

            popup.style.display = "block";
            popup.querySelector("h2").textContent = "Atur Combo " + index;
            popup.querySelector("p").textContent = "Silakan pilih skill untuk Combo " + index + ".";
        };
    });
}

// === FUNGSI BUAT COMBO BARU ===
function createCombo() {
    comboCount++;

    const combo = document.createElement("div");
    combo.classList.add("combo");
    combo.id = `combo${comboCount}`;

    let skillsHTML = "";
    for (let i = 1; i <= 10; i++) {
        skillsHTML += `
        <img src="IMG/COMBO/${i === 1 ? "background1" : "background2"}.png" 
            alt="combo-border" 
            class="${i === 1 ? "first" : "else"}" 
            id="combo${comboCount}-skill${i}">
    `;
    }

    combo.innerHTML = `
    ${comboCount > 5 ? `<button class="remove-combo">-</button>` : ""}
    <h2>Combo ${comboCount}</h2>
    <input type="text" maxlength="40" placeholder="Masukkan nama combo...">
    <div class="border">
        <button class="set-combo-btn">Set Combo</button>
        ${skillsHTML}
    </div>
    `;

    // kalau ada tombol hapus
    const removeBtn = combo.querySelector(".remove-combo");
    if (removeBtn) {
        removeBtn.onclick = () => combo.remove();
    }

    // selipkan sebelum tombol +
    const addComboDiv = document.querySelector(".add-combo");
    combosContainer.insertBefore(combo, addComboDiv);

    attachSetComboEvents();
}

// === DEFAULT: 5 COMBO PERTAMA ===
for (let i = 0; i < 5; i++) {
    createCombo();
}

// === TOMBOL TAMBAH COMBO ===
addBtn.onclick = createCombo;

// === POPUP CLOSE ===
closeBtn.onclick = () => popup.style.display = "none";

// === KLIK LUAR POPUP ===
window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
};

const links = document.querySelectorAll("#skillList a");
const containers = document.querySelectorAll(".canvasContainer");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // sembunyikan semua canvas
        containers.forEach(c => c.classList.remove("active"));

        // ambil target id dari href (#Blade, #Shot, dll)
        const targetId = this.getAttribute("href").substring(1);
        const targetCanvas = document.getElementById("canvas_" + targetId);

        if (targetCanvas) {
            targetCanvas.classList.add("active");
        }
    });
});