const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const frame = document.getElementById('frame');

let image = new Image();
let currentImg;

let boxX = 0, boxY = 0, boxW = 0, boxH = 0;

let mode = null;
let startX, startY;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
}

function updateBox() {
    frame.style.left = boxX + 'px';
    frame.style.top = boxY + 'px';
    frame.style.width = boxW + 'px';
    frame.style.height = boxH + 'px';
}

upload.onchange = e => {
    [...e.target.files].forEach(file => {
        const src = URL.createObjectURL(file);

        const container = document.createElement('div');
        container.className = 'item';

        const img = document.createElement('img');
        img.src = src;

        img.onclick = () => {
            image.src = src;
            currentImg = img;

            image.onload = () => {
                canvas.width = image.naturalWidth;
                canvas.height = image.naturalHeight;

                render();

                requestAnimationFrame(() => {
                    const rect = canvas.getBoundingClientRect();
                    boxX = 0;
                    boxY = 0;
                    boxW = rect.width;
                    boxH = rect.height;
                    updateBox();
                });

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // freeze scroll
            };
        };

        container.appendChild(img);
        gallery.appendChild(container);
    });
};

frame.onmousedown = e => {
    startX = e.clientX;
    startY = e.clientY;

    if (e.target.classList.contains('handle')) {
        mode = e.target.classList[1]; // tl,tr,bl,br
    } else {
        mode = 'move';
    }
};

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

window.onmousemove = e => {
    if (!mode) return;

    const rect = canvas.getBoundingClientRect();
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;

    if (mode === 'move') {
        boxX += dx;
        boxY += dy;
    }

    if (mode === 'br') {
        boxW += dx;
        boxH += dy;
    }

    if (mode === 'bl') {
        boxX += dx;
        boxW -= dx;
        boxH += dy;
    }

    if (mode === 'tr') {
        boxY += dy;
        boxH -= dy;
        boxW += dx;
    }

    if (mode === 'tl') {
        boxX += dx;
        boxY += dy;
        boxW -= dx;
        boxH -= dy;
    }

    const minSize = 30;

    boxW = clamp(boxW, minSize, rect.width);
    boxH = clamp(boxH, minSize, rect.height);

    boxX = clamp(boxX, 0, rect.width - boxW);
    boxY = clamp(boxY, 0, rect.height - boxH);

    startX = e.clientX;
    startY = e.clientY;

    updateBox();
};

window.onmouseup = () => mode = null;

document.getElementById('save-crop').onclick = () => {
    if (!currentImg) return;

    const rect = {
        width: canvas.width,
        height: canvas.height
    };

    const scaleX = image.naturalWidth / rect.width;
    const scaleY = image.naturalHeight / rect.height;

    const realX = boxX * scaleX;
    const realY = boxY * scaleY;
    const realW = boxW * scaleX;
    const realH = boxH * scaleY;

    if (realW <= 0 || realH <= 0) return;

    const temp = document.createElement('canvas');
    temp.width = realW;
    temp.height = realH;

    const tctx = temp.getContext('2d');

    tctx.drawImage(
        image,
        realX, realY, realW, realH,
        0, 0, realW, realH
    );

    const dataURL = temp.toDataURL();

    let saved = JSON.parse(localStorage.getItem('images') || '[]');
    saved.push(dataURL);
    localStorage.setItem('images', JSON.stringify(saved));

    currentImg.src = dataURL;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

document.getElementById('close').onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};