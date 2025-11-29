// deskripsi
const textarea = document.getElementById("deskripsi");
const maxWords = 50;

textarea.addEventListener("input", () => {
  const words = textarea.value.trim().split(/\s+/);
  if (words.length > maxWords) {
    textarea.value = words.slice(0, maxWords).join(" ");
  }
});

// skill sidebar
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

document.querySelectorAll(".stat div").forEach(div => {
  const range = div.querySelector('input[type="range"]');
  const number = div.querySelector('input[type="number"]');
  if (range && number) {
    range.addEventListener("input", () => {
      number.value = range.value;
    });
    number.addEventListener("input", () => {
      if (parseInt(number.value) > parseInt(number.max)) {
        number.value = number.max;
      }
      if (parseInt(number.value) < parseInt(number.min)) {
        number.value = number.min;
      }
      range.value = number.value;
    });
  }
});

// weap skill
document.addEventListener("DOMContentLoaded", function () {
  // Semua skill container
  const containers = document.querySelectorAll(".canvasContainer");

  // Buat canvas di masing-masing container
  containers.forEach(container => {
    const canvas = document.createElement("canvas");
    canvas.style.backgroundColor = "black";

    container.appendChild(canvas);
    container.style.display = "none";
  });

  let hoveredSkillIndex = null;
  let temporarilyDisableHover = false;
  let selectedSkillIndex = null;
  let isLevelUpMode = true;
  const globalSkillLevels = {};
  const globalSkillStates = {};

  document.getElementById("btnToggle").onclick = () => {
    isLevelUpMode = !isLevelUpMode;
    document.getElementById("btnToggle").innerText = isLevelUpMode ? "Level +" : "Level -";
  };

  const bgOff = new Image();
  const bgOn = new Image();
  bgOff.src = "/IMG/SKILL/back-off.png";
  bgOn.src = "/IMG/SKILL/back-on.png";

  const skillLinks = document.querySelectorAll(".submenu a");
  skillLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const skillId = this.getAttribute("href").substring(1);

      // Sembunyikan semua
      containers.forEach(container => {
        container.style.display = "none";
      });

      // Tampilkan yang sesuai
      const container = document.getElementById("canvas_" + skillId);
      if (container) {
        container.style.display = "";
        const canvas = container.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        const size = canvasSizes[skillId] || defaultSize;
        canvas.width = size.width;
        canvas.height = size.height;


        const images = skillImages[skillId];
        const allConnections = [...skillConnections[skillId].lines, ...skillConnections[skillId].splits];

        if (!globalSkillLevels[skillId]) {
          globalSkillLevels[skillId] = new Array(images.length).fill(0);
        }
        if (!globalSkillStates[skillId]) {
          globalSkillStates[skillId] = new Array(images.length).fill(false);
        }

        const skillLevels = globalSkillLevels[skillId];
        const skillStates = globalSkillStates[skillId];

        function getAllPathsToNode(lines, targetIndex) {
          const parents = {};

          lines.forEach(([from, to]) => {
            if (!parents[to]) parents[to] = [];
            parents[to].push(from);
          });

          const visited = new Set();
          const path = [];

          function dfs(node) {
            if (visited.has(node)) return;
            visited.add(node);

            if (parents[node]) {
              for (const parent of parents[node]) {
                dfs(parent);
                path.unshift([parent, node]);
              }
            }
          }

          dfs(targetIndex);
          return path;
        }

        function drawAllSkills() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const padding = 5;

          // Path aktif
          let activeLines = [];
          const activeSkills = skillStates
            .map((state, index) => (state ? index : null))
            .filter((i) => i !== null);

          activeSkills.forEach((activeIdx) => {
            const path = getAllPathsToNode(allConnections, activeIdx);
            activeLines.push(...path);
          });

          // Path hover
          let hoverLines = [];
          if (hoveredSkillIndex !== null) {
            hoverLines = getAllPathsToNode(allConnections, hoveredSkillIndex);
          }

          const { lines, splits } = skillConnections[skillId];

          // Garis biasa
          lines.forEach(([fromIdx, toIdx]) => {
            const from = images[fromIdx];
            const to = images[toIdx];
            if (!from || !to) return;

            const fromX = from.x + from.w / 2;
            const fromY = from.y + from.h / 2;
            const toX = to.x + to.w / 2;
            const toY = to.y + to.h / 2;

            const isActivePath = activeLines.some(([f, t]) => f === fromIdx && t === toIdx);
            const isHoverPath = hoverLines.some(([f, t]) => f === fromIdx && t === toIdx);

            if (isActivePath) {
              ctx.strokeStyle = "white";
              ctx.lineWidth = 3;
            } else if (isHoverPath) {
              ctx.strokeStyle = "orange";
              ctx.lineWidth = 3;
            } else {
              ctx.strokeStyle = "gray";
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            ctx.lineTo(fromX, toY);
            ctx.lineTo(toX, toY);
            ctx.stroke();
          });

          // Garis split
          splits.forEach(([fromIdx, toIdx]) => {
            const from = images[fromIdx];
            const to = images[toIdx];
            if (!from || !to) return;

            const fromX = from.x + from.w / 2;
            const fromY = from.y + from.h / 2;
            const toX = to.x + to.w / 2;
            const toY = to.y + to.h / 2;

            const isActivePath = activeLines.some(([f, t]) => f === fromIdx && t === toIdx);
            const isHoverPath = hoverLines.some(([f, t]) => f === fromIdx && t === toIdx);

            if (isActivePath) {
              ctx.strokeStyle = "white";
              ctx.lineWidth = 3;
            } else if (isHoverPath) {
              ctx.strokeStyle = "orange";
              ctx.lineWidth = 3;
            } else {
              ctx.strokeStyle = "gray";
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            ctx.lineTo(fromX + 50, fromY);
            ctx.lineTo(fromX + 50, toY);
            ctx.lineTo(toX, toY);
            ctx.stroke();
          });

          // Gambar skill background dan icon
          images.forEach((data, index) => {
            const bg = skillStates[index] ? bgOn : bgOff;

            const bgX = data.x - padding;
            const bgY = data.y - padding;
            const bgW = data.w + padding * 2;
            const bgH = data.h + padding * 2;

            if (bg.complete) {
              ctx.drawImage(bg, bgX, bgY, bgW, bgH);
            } else {
              bg.onload = () => {
                ctx.drawImage(bg, bgX, bgY, bgW, bgH);
              };
            }

            const icon = new Image();
            icon.src = data.src;
            if (icon.complete) {
              ctx.drawImage(icon, data.x, data.y, data.w, data.h);
            } else {
              icon.onload = function () {
                ctx.drawImage(icon, data.x, data.y, data.w, data.h);
              };
            }

            const text = skillLevels[index].toString();
            const textX = data.x + data.w / 2;
            const textY = data.y + data.h + 20;

            ctx.font = "15px Arial";
            const metrics = ctx.measureText(text);
            const textWidth = metrics.width;
            const textHeight = 16;

            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(textX - textWidth / 2 - 4, textY - textHeight + 4, textWidth + 8, textHeight);

            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(text, textX, textY);
          });
        }

        function tryDraw() {
          if (bgOff.complete && bgOn.complete) {
            drawAllSkills();
          } else {
            bgOff.onload = tryDraw;
            bgOn.onload = tryDraw;
          }
        }
        tryDraw();

        document.getElementById("btnReset").onclick = () => {
          for (let i = 0; i < skillLevels.length; i++) {
            skillLevels[i] = 0;
            skillStates[i] = false;
          }

          drawAllSkills();
          updateSPDisplay(skillId, skillLevels);
        };

        function updateSPDisplay(skillId, skillLevels) {
          const totalSP = skillLevels.reduce((sum, lvl) => sum + lvl, 0);
          const span = document.getElementById(`spRight${skillId}`);
          if (span) {
            span.textContent = `${totalSP} SP`;
          }
        }

        function updateTotalSP() {
          let total = 0;
          for (const [treeId, levels] of Object.entries(globalSkillLevels)) {
            if (treeId === "NinjutsuScroll") continue;
            total += levels.reduce((sum, lvl) => sum + lvl, 0);
          }
          document.getElementById("spRightTotal").textContent = `${total} SP`;
        }

        function getAllChildrenFromNode(allConnections, startIndex) {
          const graph = {};
          allConnections.forEach(([from, to]) => {
            if (!graph[from]) graph[from] = [];
            graph[from].push(to);
          });

          const visited = new Set();
          const result = [];

          function dfs(node) {
            if (visited.has(node)) return;
            visited.add(node);
            if (graph[node]) {
              for (const child of graph[node]) {
                result.push(child);
                dfs(child);
              }
            }
          }

          dfs(startIndex);
          return result;
        }

        canvas.onclick = function (event) {
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          images.forEach((data, index) => {
            if (
              x >= data.x && x <= data.x + data.w &&
              y >= data.y && y <= data.y + data.h
            ) {
              selectedSkillIndex = index;

              if (isLevelUpMode) {
                if (skillId === "NinjutsuScroll") {
                  const activeCount = skillStates.filter(state => state).length;

                  if (activeCount >= 3 && !skillStates[index]) return;
                  if (skillLevels[index] >= 1) return;

                  skillLevels[index] = 1;
                  skillStates[index] = true;
                } else {
                  if (skillLevels[index] < 10) {
                    skillLevels[index] += 1;
                    skillStates[index] = true;

                    const path = getAllPathsToNode(allConnections, index);
                    path.forEach(([fromIdx, toIdx]) => {
                      skillStates[fromIdx] = true;
                      skillLevels[fromIdx] = Math.max(skillLevels[fromIdx], 5);
                    });
                  }
                }
              } else {
                if (skillLevels[index] > 0) {
                  skillLevels[index] -= 1;
                  if (skillLevels[index] === 0) {
                    skillStates[index] = false;
                  }

                  const children = getAllChildrenFromNode(allConnections, index);
                  children.forEach((childIdx) => {
                    const parentList = allConnections
                      .filter(([from, to]) => to === childIdx)
                      .map(([from]) => from);

                    const valid = parentList.every(parentIdx => skillLevels[parentIdx] >= 5);
                    if (!valid) {
                      skillLevels[childIdx] = 0;
                      skillStates[childIdx] = false;
                    }
                  });
                }
              }

              drawAllSkills();
              updateSPDisplay(skillId, skillLevels);
              updateTotalSP();
            }
          });
        };

        canvas.addEventListener("contextmenu", function (event) {
          event.preventDefault();
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          images.forEach((data, index) => {
            if (
              x >= data.x && x <= data.x + data.w &&
              y >= data.y && y <= data.y + data.h
            ) {
              // NinjutsuScroll: langsung reset
              if (skillId === "NinjutsuScroll") {
                if (skillLevels[index] > 0) {
                  skillLevels[index] = 0;
                  skillStates[index] = false;
                  drawAllSkills();
                  updateSPDisplay(skillId, skillLevels);
                  updateTotalSP();
                }
                return;
              }

              if (skillLevels[index] > 0) {
                // Kurangi 1 poin dulu
                skillLevels[index] -= 1;
                if (skillLevels[index] === 0) {
                  skillStates[index] = false;
                }

                // Setelah dikurangi, periksa semua anak dari skill ini
                const children = getAllChildrenFromNode(allConnections, index);

                children.forEach((childIdx) => {
                  const parentList = allConnections
                    .filter(([from, to]) => to === childIdx)
                    .map(([from]) => from);

                  // Cek apakah SEMUA parent level-nya < 5
                  const stillValid = parentList.some(parentIdx => skillLevels[parentIdx] >= 5);

                  if (!stillValid) {
                    skillLevels[childIdx] = 0;
                    skillStates[childIdx] = false;
                  }
                });

                drawAllSkills();
                updateSPDisplay(skillId, skillLevels);
                updateTotalSP();
              }
            }
          });
        });


        canvas.addEventListener("mousemove", (event) => {
          if (temporarilyDisableHover) return;
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          let found = false;

          images.forEach((data, index) => {
            if (
              x >= data.x && x <= data.x + data.w &&
              y >= data.y && y <= data.y + data.h
            ) {
              if (hoveredSkillIndex !== index) {
                hoveredSkillIndex = index;
                drawAllSkills();
              }
              found = true;
            }
          });

          if (!found && hoveredSkillIndex !== null) {
            hoveredSkillIndex = null;
            drawAllSkills();
          }
        });
      }
    });
  })

  document.getElementById("btnSavePDF").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      compress: true
    });

    const namaBuild = document.getElementById("nama").value || "Untitled Build";
    const deskripsi = document.getElementById("deskripsi").value;
    const totalSPText = document.getElementById("spRightTotal").textContent;
    const fileName = `${namaBuild}.pdf`;

    const marginX = 15;
    const contentWidth = 180;
    let currentY = 5;

    // === HEADER ===
    const logo = new Image();
    logo.src = "/IMG/LOGO/logo1.png";
    await new Promise((resolve) => {
      if (logo.complete) resolve();
      else logo.onload = resolve;
    });

    const logoWidth = 40;
    const logoHeight = 40;
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    // Gambar logo di kiri
    doc.addImage(logo, "PNG", marginX, currentY, logoWidth, logoHeight);

    // Tulis teks "SHARE YOUR BUILD" di tengah
    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.setTextColor(0, 135, 181);
    const titleText = "SHARE YOUR BUILD";
    const textWidth = doc.getTextWidth(titleText);
    doc.text(titleText, (centerX - textWidth / 2) + 15, currentY + logoHeight / 2 + 3);

    // Tambah garis ganda di bawah header
    const lineY = currentY + logoHeight;
    doc.setDrawColor(0, 135, 181);
    doc.setLineWidth(1);
    doc.line(marginX, lineY, pageWidth - marginX, lineY);
    doc.setLineWidth(0.5);
    doc.line(marginX, lineY + 2, pageWidth - marginX, lineY + 2);

    currentY = lineY + 15;

    // === NAMA BUILD & DESKRIPSI ===
    doc.setFontSize(14);
    doc.setTextColor(0, 135, 181);
    doc.text("Nama Build :", marginX, currentY);
    doc.setFontSize(13);
    doc.setTextColor(0);
    doc.text(namaBuild, marginX + 30, currentY);

    currentY += 10;

    doc.setFontSize(13);
    doc.setTextColor(0, 135, 181);
    doc.text("Deskripsi :", marginX, currentY);
    currentY += 6;

    // Siapkan teks
    doc.setFontSize(12);
    doc.setTextColor(0);
    const splitDescription = doc.splitTextToSize(deskripsi, contentWidth);

    // Hitung tinggi kotak
    const lineHeight = 6;
    const boxPadding = 4;
    const boxHeight = splitDescription.length * lineHeight + boxPadding * 2;
    const boxY = currentY - 2;

    // Gambar kotak: background putih + outline biru
    doc.setDrawColor(0, 135, 181);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(marginX - 2, boxY, contentWidth + 4, boxHeight, 3, 3, "FD");

    // Tulis teks deskripsi di dalam kotak
    doc.setTextColor(0);
    doc.text(splitDescription, marginX, currentY + boxPadding);
    currentY += boxHeight + 10;

    // === STAT SECTION ===
    doc.setFontSize(13);
    doc.setTextColor(0, 135, 181);
    doc.text("STAT :", marginX, currentY);
    currentY += 5;

    // Ukuran kotak hitam
    const statBoxX = marginX - 5;
    const statBoxY = currentY;
    const statBoxWidth = 190;
    const statBoxPadding = 5;
    const barFullWidth = 100;
    const barHeight = 4;
    const barColor = ["lime"];
    const maxBarValue = 255;

    const statElements = document.querySelectorAll(".stat div");

    let tempY = currentY + statBoxPadding;
    let statBoxHeight = 0;

    statElements.forEach(statDiv => {
      const label = statDiv.querySelector("label, select");
      const output = statDiv.querySelector("input[type=number], output");

      if (label && output) {
        statBoxHeight += 12;
      }
    });
    statBoxHeight += statBoxPadding * 2;

    // Gambar background kotak hitam
    doc.setFillColor(0, 0, 0);
    doc.setDrawColor(60);
    doc.roundedRect(statBoxX, statBoxY, statBoxWidth, statBoxHeight, 5, 5, "FD");

    currentY += statBoxPadding;

    statElements.forEach(statDiv => {
      const label = statDiv.querySelector("label, select");
      const output = statDiv.querySelector("input[type=number], output");

      if (label && output) {
        const name = label.value || label.textContent.trim();
        const value = parseInt(output.value || output.textContent.trim());

        const isMysteryStat = name === "???";
        const maxOriginal = isMysteryStat ? 255 : 510;

        const normalizedValue = (value / maxOriginal) * maxBarValue;

        // Label stat
        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text(name, marginX, currentY + 6);

        // Bar
        const barX = marginX + 25;
        const barY = currentY + 3;
        const filledW = (normalizedValue / maxBarValue) * barFullWidth;

        // Latar bar
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(barX, barY, barFullWidth, barHeight, 3, 3, "FD");

        // Isi bar 
        if (value > 0) {
          doc.setFillColor(...barColor);
          doc.roundedRect(barX, barY, filledW, barHeight, 3, 3, "F");
        }

        // Nilai stat
        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text(value.toString(), barX + barFullWidth + 10, currentY + 6);

        currentY += 12;
      }
    });

    currentY += 10;

    // === SKILL SECTION ===
    currentY += 5;
    doc.setFontSize(13);
    doc.setTextColor(0, 135, 181);
    doc.text("SKILL :", marginX, currentY);
    currentY += 8;

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Total Skill Point : ${totalSPText}`, marginX + 5, currentY);
    currentY += 10;

    // === SKILL TREE CANVAS ===
    const canvasScale = 7.0;
    const spacingBetweenSkillTrees = 12;

    temporarilyDisableHover = true;
    hoveredSkillIndex = null;

    const canvasContainers = document.querySelectorAll(".canvasContainer");

    canvasContainers.forEach(container => {
      const skillTreeId = container.id.replace("canvas_", "");

      const levels = globalSkillLevels[skillTreeId];
      const totalSP = levels?.reduce((sum, val) => sum + val, 0) || 0;
      if (totalSP === 0) return;

      const canvas = container.querySelector("canvas");
      if (!canvas) return;

      if (typeof drawAllSkills === "function") drawAllSkills();

      const imgData = canvas.toDataURL("image/jpeg", 0.7);
      const imgHeight = canvas.height / canvasScale;
      const imgWidth = canvas.width / canvasScale;

      if (currentY + imgHeight + 30 > 280) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFillColor(0, 0, 0);
      doc.rect(marginX - 5, currentY - 5, imgWidth + 20, imgHeight + 25, "F");

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(13);
      doc.text(`${skillTreeId} Skill Tree`, marginX, currentY + 5);

      doc.addImage(imgData, "PNG", marginX, currentY + 8, imgWidth, imgHeight);
      currentY += imgHeight + spacingBetweenSkillTrees + 20;

      doc.setTextColor(0, 0, 0);
    });

    // === FOOTER ===
    const footerHeight = 10;
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      // 1. Gambar background footer
      doc.setFillColor(0, 135, 181); // Warna biru
      doc.rect(0, 287, pageWidth, footerHeight, "F");

      // 2. Tulis teks di atas background
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255); // Putih
      doc.text("© 2025 LUCIS_CAELUM. ALL RIGHTS RESERVED.", marginX, 293);
    }


    doc.save(fileName);
  });

})

// di dalam loop saat skill dipasang ke slot
const attrDiv = slot.querySelector(".attribute");

if (skillObj?.on) {
  attrDiv.textContent = skillObj.on;  // misalnya angka "2"
  attrDiv.style.display = "block";    // munculkan
} else {
  attrDiv.textContent = "";
  attrDiv.style.display = "none";     // sembunyikan kalau ga ada atribut
}
