const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");
const combosContainer = document.getElementById("combos-container");
const addBtn = document.getElementById("add-combo-btn");

let comboCount = 0;

// === FUNGSI BUAT COMBO BARU ===
function updateComboNumbers() {
    const allCombos = document.querySelectorAll(".combo");
    allCombos.forEach((combo, index) => {
        const newNum = index + 1;
        combo.id = `combo${newNum}`;
        const title = combo.querySelector("h2");
        if (title) {
            title.innerText = `Combo ${newNum}`;
        }
        const skill1 = combo.querySelector(".first");
        if (skill1) {
            skill1.id = `combo${newNum}-skill1`;
        }
        const elseSkills = combo.querySelectorAll(".else");
        elseSkills.forEach((img, i) => {
            img.id = `combo${newNum}-skill${i + 2}`;
        });
    });

    // 5. Update variabel global comboCount agar sinkron dengan jumlah elemen saat ini
    comboCount = allCombos.length;
}


function createCombo() {
    comboCount++;

    const combo = document.createElement("div");
    combo.classList.add("combo");
    combo.id = `combo${comboCount}`;

    let skillsHTML = "";

    // slot pertama (background1)
    skillsHTML += `
    <img src="IMG/COMBO/background1.png" 
        alt="combo-border" 
        class="first" 
        id="combo${comboCount}-skill1">
`;

    // tambahin 2 slot else kosong default
    for (let i = 2; i <= 3; i++) {
        skillsHTML += `
        <div class="else-slot">
            <img src="IMG/COMBO/background2.png" 
                alt="combo-border" 
                class="else"
                id="combo${comboCount}-skill${i}">
                <div class="display-attribute">
                <img src="IMG/SKILL/back-Off.png" 
                    alt="attr-border" 
                    class="attr">
                </div> 
        </div>
    `;
    }


    const removeButtonHTML = comboCount > 5 ? `<button class="remove-combo">-</button>` : "";

    combo.innerHTML = `
    ${comboCount > 5 ? `<button class="remove-combo">-</button>` : ""}
    <h2>Combo ${comboCount}</h2>
    <input type="text" maxlength="40" placeholder="Masukkan nama combo...">
    <div class="border">
        ${skillsHTML}
    </div>
    <button class="set-combo-btn">Set Combo</button>
    `;

    // kalau ada tombol hapus
    const removeBtn = combo.querySelector(".remove-combo");
    if (removeBtn) {
        removeBtn.onclick = () => {
            // 1. Hapus elemen dari HTML
            combo.remove();
            // 2. Jalankan fungsi penomoran ulang
            updateComboNumbers();
        };
    }

    // selipkan sebelum tombol +
    const addComboDiv = document.querySelector(".add-combo");
    combosContainer.insertBefore(combo, addComboDiv);

    if (typeof attachSetComboEvents === "function") {
        attachSetComboEvents();
    }

}

// === DEFAULT: 5 COMBO PERTAMA ===
for (let i = 0; i < 5; i++) {
    createCombo();
}

// === TOMBOL TAMBAH COMBO ===
addBtn.onclick = createCombo;

// === fungsi masukin ke slot (copy dari logikamu) ===
function addSkillToSlot(skillObj) {
    const comboSlots = document.querySelectorAll(".display-skill");

    for (let i = 0; i < comboSlots.length; i++) {
        const slot = comboSlots[i];
        if (!slot.querySelector("img")) {
            // cek "on" requirement
            if (skillObj?.on && i < (skillObj.on - 1)) {
                alert(`${skillObj.name} hanya bisa dipasang mulai slot ${skillObj.on}`);
                return;
            }

            // bg slot
            slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
            slot.style.backgroundSize = "cover";

            // gambar skill
            const img = document.createElement("img");
            img.src = skillObj.src;
            img.alt = skillObj.name;
            img.style.width = "45px";
            img.style.height = "45px";
            slot.appendChild(img);

            // attribute div
            const attrDiv = slot.querySelector(".attribute");
            if (attrDiv) {
                attrDiv.style.display = "block";
                attrDiv.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                attrDiv.dataset.attr = "none";
            }

            break;
        }
    }
}

// === Script Canvas ===
const links = document.querySelectorAll("#skillList a");
const containers = document.querySelectorAll(".canvasContainer");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // sembunyikan semua canvas
        containers.forEach(c => {
            c.classList.remove("active");
            c.innerHTML = "<h3>" + c.querySelector("h3").innerText + "</h3>"; // reset isi
        });

        // ambil target id dari href (#Blade, #Shot, dll)
        const targetId = this.getAttribute("href").substring(1);
        const targetCanvas = document.getElementById("canvas_" + targetId);

        if (targetCanvas) {
            targetCanvas.classList.add("active");

            // jika ada data skill, generate gambar + nama
            if (skills[targetId]) {
                const listContainer = document.createElement("div");
                listContainer.style.display = "flex";
                listContainer.style.flexDirection = "column";
                listContainer.style.gap = "10px";
                listContainer.style.marginTop = "10px";

                skills[targetId].forEach(skill => {
                    const item = document.createElement("div");
                    item.style.display = "flex";
                    item.style.alignItems = "center";
                    item.style.gap = "15px";

                    // background skill slot
                    const bgWrapper = document.createElement("div");
                    bgWrapper.style.width = "50px";
                    bgWrapper.style.height = "50px";
                    bgWrapper.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                    bgWrapper.style.backgroundSize = "cover";
                    bgWrapper.style.display = "flex";
                    bgWrapper.style.justifyContent = "center";
                    bgWrapper.style.alignItems = "center";
                    bgWrapper.style.objectFit = "contain";
                    bgWrapper.style.cursor = "pointer";

                    const img = document.createElement("img");
                    img.src = skill.src;
                    img.alt = skill.name;
                    img.style.width = "40px";
                    img.style.height = "40px";

                    bgWrapper.appendChild(img);

                    const name = document.createElement("span");
                    name.textContent = skill.name;
                    name.style.fontSize = "16px";
                    name.style.fontWeight = "600";

                    item.appendChild(bgWrapper);
                    item.appendChild(name);
                    listContainer.appendChild(item);
                });
                targetCanvas.appendChild(listContainer);
            }
        }
    });
});

document.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.closest(".canvasContainer")) {
        const skillImg = e.target;

        if (skillImg.dataset.used === "true") return;

        // ambil nama skill yg diklik
        const skillName = skillImg.alt;
        // cari skill object di semua category
        let skillObj = null;
        for (let category in skills) {
            skillObj = skills[category].find(s => s.name === skillName);
            if (skillObj) break;
        }

        // cari slot kosong
        const comboSlots = document.querySelectorAll(".display-skill");
        for (let i = 0; i < comboSlots.length; i++) {
            const slot = comboSlots[i];
            if (!slot.querySelector("img")) {

                // cek jika skill punya "on" requirement
                if (skillObj?.on && i < (skillObj.on - 1)) {
                    alert(`${skillObj.name} hanya bisa dipasang mulai slot ${skillObj.on}`);
                    return;
                }

                // === Background muncul hanya ketika skill masuk ===
                slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
                slot.style.backgroundSize = "cover";

                // tambahkan gambar skill
                const img = document.createElement("img");
                img.src = skillImg.src;
                img.alt = skillImg.alt;
                img.style.width = "45px";
                img.style.height = "45px";
                slot.appendChild(img);

                // attribute
                const attrDiv = slot.querySelector(".attribute");
                if (attrDiv) {
                    attrDiv.style.display = "block";
                    attrDiv.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                    attrDiv.dataset.attr = "none";
                }

                // tandai skill sudah dipakai
                skillImg.dataset.used = "true";
                skillImg.style.opacity = "0.5";

                break;
            }
        }

    }
});

// buka popup attribute setelah pilih skill
document.querySelectorAll(".display-skill").forEach((slot, index) => {
    slot.addEventListener("click", function () {
        // kalau slot ada skill (misalnya ada <img> skill di dalamnya)
        if (slot.querySelector("img")) {
            // tampilkan popup pilih attribute
            document.getElementById("attrPopup").style.display = "block";

            // simpan slot yang sedang aktif
            window.activeSkillSlot = slot;
        }
    });
});

// saat pilih attribute
document.querySelectorAll("#attrPopup .attr-options img").forEach(attrImg => {
    attrImg.addEventListener("click", function () {
        if (!window.activeSkillSlot) return;

        // cari container attribute
        let attrBox = window.activeSkillSlot.querySelector(".attribute");
        attrBox.style.display = "block";
        attrBox.innerHTML = "";

        // masukkan icon attribute
        let img = document.createElement("img");
        img.src = this.src;
        img.alt = this.alt;
        img.style.width = "30px";
        img.style.height = "30px";
        attrBox.appendChild(img);

        // tutup popup
        document.getElementById("attrPopup").style.display = "none";

    });
});

// tombol X untuk attrPopup
const closeAttrBtn = document.querySelector("#attrPopup .closeAttr");
closeAttrBtn.addEventListener("click", () => {
    document.getElementById("attrPopup").style.display = "none";
});

// juga bisa close kalau klik di luar popup
window.addEventListener("click", (e) => {
    const attrPopup = document.getElementById("attrPopup");
    if (e.target === attrPopup) {
        attrPopup.style.display = "none";
    }
});

let activeComboId = null; // id combo yang sedang diatur

function attachSetComboEvents() {
    const buttons = document.querySelectorAll(".set-combo-btn");
    buttons.forEach((btn) => {
        btn.onclick = () => {
            const combo = btn.closest(".combo");
            activeComboId = combo.id;

            popup.style.display = "block";
            popup.querySelector("h2").textContent = "Atur " + activeComboId;
            popup.querySelector("p").textContent = "Silakan pilih skill untuk " + activeComboId + ".";

            // === RESET popup display ===
            const popupSlots = document.querySelectorAll(".combo-display .display-skill");
            popupSlots.forEach((slot, i) => {
                // ambil attribute kalau ada
                const attrDiv = slot.querySelector(".attribute");

                // kosongkan slot
                slot.innerHTML = "";

                // slot pertama: tidak ada attribute
                if (i === 0) {
                    slot.style.backgroundImage = "";
                } else {
                    // kalau sudah ada attribute pakai ulang, kalau belum bikin
                    if (attrDiv) {
                        slot.appendChild(attrDiv);
                    } else {
                        const newAttr = document.createElement("div");
                        newAttr.classList.add("attribute");
                        slot.appendChild(newAttr);
                    }
                }
            });

            // === SALIN isi combo ke popup display ===
            const firstImg = combo.querySelector(".border img.first");
            const elseSlots = combo.querySelectorAll(".border .else-slot");

            // --- handle slot pertama ---
            if (firstImg && firstImg.alt && firstImg.alt !== "empty" && !firstImg.src.includes("background")) {
                const slot = popupSlots[0];
                slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
                slot.style.backgroundSize = "cover";

                const skillImg = document.createElement("img");
                skillImg.src = firstImg.src;
                skillImg.alt = firstImg.alt;
                skillImg.style.width = "45px";
                skillImg.style.height = "45px";
                slot.appendChild(skillImg);
            }

            // --- handle slot selain pertama ---
            elseSlots.forEach((elseSlot, i) => {
                const img = elseSlot.querySelector("img");
                const attrDiv = elseSlot.querySelector(".display-attribute");
                const attrValue = attrDiv ? (attrDiv.dataset.attr || "none") : "none";

                if (img && img.alt && img.alt !== "empty" && !img.src.includes("background")) {
                    const slot = popupSlots[i + 1]; // +1 karena slot pertama sudah dipakai di atas
                    slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
                    slot.style.backgroundSize = "cover";

                    const skillImg = document.createElement("img");
                    skillImg.src = img.src;
                    skillImg.alt = img.alt;
                    skillImg.style.width = "45px";
                    skillImg.style.height = "45px";
                    slot.insertBefore(skillImg, slot.querySelector(".attribute"));

                    const popupAttrDiv = slot.querySelector(".attribute");
                    if (popupAttrDiv) {
                        if (attrValue && attrValue !== "none") {
                            popupAttrDiv.style.display = "block";
                            popupAttrDiv.style.backgroundImage = `url('/IMG/COMBO/${attrValue}.png')`;
                            popupAttrDiv.dataset.attr = attrValue;
                        } else {
                            popupAttrDiv.style.display = "block";
                            popupAttrDiv.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                            popupAttrDiv.dataset.attr = "none";
                        }
                    }
                }
            });
        };
    });
}



// === REMOVE BUTTON ===
document.getElementById("remove-combo-skill").addEventListener("click", () => {
    const slots = document.querySelectorAll(".combo-display .display-skill");

    // cari slot terakhir yang ada skill-nya
    for (let i = slots.length - 1; i >= 0; i--) {
        const slot = slots[i];
        const skillImg = slot.querySelector("img");

        if (skillImg) {
            // balikin status skill supaya bisa dipilih lagi
            const allSkillImgs = document.querySelectorAll(".canvasContainer img");
            allSkillImgs.forEach(img => {
                if (img.alt === skillImg.alt) {
                    img.dataset.used = "false";
                    img.style.opacity = "1";
                }
            });

            // kalau slot pertama → hapus skill saja (tanpa attribute)
            if (i === 0) {
                slot.innerHTML = "";
                slot.style.backgroundImage = "";
            } else {
                // reset slot normal
                slot.innerHTML = '<div class="attribute"></div>';
                slot.style.backgroundImage = "";
            }
            break; // cuma hapus 1 skill, lalu stop
        }
    }
});

// === SAVE BUTTON ===
document.getElementById("save-combo-skill").addEventListener("click", () => {
    if (!activeComboId) return;

    const combo = document.getElementById(activeComboId);
    const border = combo.querySelector(".border");
    const popupSlots = document.querySelectorAll(".combo-display .display-skill");

    // ambil semua skill yang dipilih dari popup
    const chosenSkills = [];
    popupSlots.forEach(slot => {
        const popupSkill = [...slot.children].find(el => el.tagName === "IMG");
        if (popupSkill) {
            chosenSkills.push({
                src: popupSkill.src,
                alt: popupSkill.alt,
                attr: slot.querySelector(".attribute")?.dataset.attr || "none"
            });
        }
    });

    if (chosenSkills.length === 0) {
        alert("Pilih minimal 1 skill sebelum menyimpan!");
        return;
    }

    // clear isi border dulu
    border.innerHTML = "";

    // render ulang border sesuai skill
    chosenSkills.forEach((skill, i) => {
        if (i === 0) {
            // skill pertama = langsung <img class="first">
            const img = document.createElement("img");
            img.src = skill.src;
            img.alt = skill.alt;
            img.classList.add("first");
            img.id = `${activeComboId}-skill${i + 1}`;
            border.appendChild(img);
        } else {
            const elseSlot = document.createElement("div");
            elseSlot.classList.add("else-slot");

            // border untuk skill selain pertama
            const borderImg = document.createElement("img");
            borderImg.src = skill.src;
            borderImg.alt = skill.alt;
            borderImg.classList.add("else");
            borderImg.id = `${activeComboId}-skill${i + 1}`;

            // div untuk atribut
            const attrDiv = document.createElement("div");
            attrDiv.classList.add("display-attribute");
            attrDiv.dataset.attr = skill.attr || "none";

            if (skill.attr && skill.attr !== "none") {
                const attrImg = document.createElement("img");
                attrImg.src = "/IMG/SKILL/back-Off.png"; // gambar atribut
                attrImg.alt = "attr-border";
                attrImg.classList.add("attr");
                attrDiv.appendChild(attrImg);
            }

            elseSlot.appendChild(borderImg);
            elseSlot.appendChild(attrDiv);
            border.appendChild(elseSlot);
        }
    });

    popup.style.display = "none"; // tutup popup
});


// === POPUP CLOSE ===
closeBtn.onclick = () => popup.style.display = "none";

// === KLIK LUAR POPUP ===
window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
};
