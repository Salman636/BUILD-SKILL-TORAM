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
    <img src="/IMG/COMBO/background1.png" 
        alt="combo-border" 
        class="first" 
        id="combo${comboCount}-skill1">
`;

    // tambahin 2 slot else kosong default
    for (let i = 2; i <= 3; i++) {
        skillsHTML += `
        <div class="else-slot">
            <img src="/IMG/COMBO/background2.png" 
                alt="combo-border" 
                class="else"
                id="combo${comboCount}-skill${i}">
                <div class="display-attribute">
                <img src="/IMG/SKILL/back-off.png" 
                    alt="attr-border" 
                    class="attr"
                    id="combo${comboCount}-attr${i}">                   
                </div> 
        </div>
    `;
    }

    combo.innerHTML = `
    ${comboCount > 5 ? `<button class="remove-combo">-</button>` : ""}
    <h2>Combo ${comboCount}</h2>
    <input id="comboName-${comboCount}" type="text" maxlength="40" placeholder="Masukkan nama combo...">
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

// === Skill ===
const skills = {
    Blade: [
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hammerslam.png", name: "Hammer Slam" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/cleavingattack.png", name: "Cleaving Attack" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/stormblaze.png", name: "Storm Blaze" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gardeblade.png", name: "Garde Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/ogreslash.png", name: "Ogre Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hardhit.png", name: "Hard Hit" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/astute.png", name: "Astute" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/tiggerslash.png", name: "Trigger Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/rampage.png", name: "Rampage" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/meteorbreaker.png", name: "Meteor Breaker" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/shutout.png", name: "Shut Out" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/lunarslash.png", name: "Lunar Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/sonicblade.png", name: "Sonic Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/spiralair.png", name: "Spiral Air" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordtempest.png", name: "Sword Tempest" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/busterblade.png", name: "Buster Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/aurablade.png", name: "Aura Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/warcry.png", name: "Warcry" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/berserk.png", name: "Berserk" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swiftattack.png", name: "Swift Attack" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gladiate.png", name: "Gladiate" },
    ],
    Shot: [
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/powershot.png", name: "Power Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/bullseye.png", name: "Bullseye" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/arrowrain.png", name: "Arrow Rain" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/snipe.png", name: "Snipe" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/crossfire.png", name: "Cross Fire" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/piercingshot.png", name: "Piercing Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/vanquisher.png", name: "Vanquisher" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/retrogradeshot.png", name: "Retrograde Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/quickloader.png", name: "Quick Loader" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/moebashot.png", name: "Moeba Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/paralysisshot.png", name: "Paralysis Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/smokedust.png", name: "Smoke Dust" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/armbreak.png", name: "Arm Break" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/parabolacannon.png", name: "Parabola Cannon" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/spreadshot.png", name: "Spread Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/decoyshot.png", name: "Decoy Shot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/sneakattack.png", name: "Sneak Attack" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/fatalshot.png", name: "Fatal Shot" },
    ],
    Magic: [
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/arrows.png", name: "Magic: Arrows" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/javelin.png", name: "Magic: Javelin" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/lances.png", name: "Magic: Lances" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/impact.png", name: "Magic: Impact" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/finale.png", name: "Magic: Finale" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/laser.png", name: "Magic: Laser" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/wall.png", name: "Magic: Wall" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/blast.png", name: "Magic: Blast" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/storm.png", name: "Magic: Storm" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/burst.png", name: "Magic: Burst" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/magiccannon.png", name: "Magic: Cannon" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/crash.png", name: "Magic: Crash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/magicknife.png", name: "Magic Knife", on: 2 },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/maximizer.png", name: "Maximizer" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/enchantedbarriers.png", name: "Enchanted Barriers" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MAGIC/guardianbeam.png", name: "Magic: Guardian Beam" },
    ],
    Martial: [
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/smash.png", name: "Smash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/bash.png", name: "Bash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/shellbreak.png", name: "Shell Break" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/heavysmash.png", name: "Heavy Smash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chariot.png", name: "Chariot" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/mountainpress.png", name: "Mountain Press" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/sonicwave.png", name: "Sonic Wave" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/earthbind.png", name: "Earthbind" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/triplekick.png", name: "Triple Kick" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/rush.png", name: "Rush" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/asuraaura.png", name: "Asura Aura", on: 2 },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/seismicstomp.png", name: "Seismic Stomp" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/spinsweep.png", name: "Spin Sweep" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/flashblink.png", name: "Flash Blink" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chakra.png", name: "Chakra" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/energycontrol.png", name: "Energy Control" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/slide.png", name: "Slide" },
    ],
    DualSword: [
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinslash.png", name: "Twin Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/spinningslash.png", name: "Spinning Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/phantomslash.png", name: "Phantom Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialcut.png", name: "Aerial Cut" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/crossparry.png", name: "Cross Parry" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/chargingslash.png", name: "Charging Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shadowstep.png", name: "Shadow Step" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shiningcross.png", name: "Shining Cross" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/lunarmisfortune.png", name: "Lunar Misfortune" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinbusterblade.png", name: "Twin Buster Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/reflex.png", name: "Reflex" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/flashblast.png", name: "Flash Blast" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stormreaper.png", name: "Storm Reaper" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialslay.png", name: "Aerial Slay" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/horizoncut.png", name: "Horizon Cut" },
        { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stingblade.png", name: "Sting Blade" },
    ],
    Halberd: [
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/flashstab.png", name: "Flash Stab" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/cannonspear.png", name: "Cannon Spear" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontail.png", name: "Dragon Tail" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/diveimpact.png", name: "Dive Impact" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontooth.png", name: "Dragon Tooth" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/draconiccharge.png", name: "Draconic Charge" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/deadlyspear.png", name: "Deadly Spear" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/strikestab.png", name: "Strike Stab" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/chronosdrive.png", name: "Chronos Drive" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/infinitedimension.png", name: "Infinite Dimension" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/punishray.png", name: "Punish Ray" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/blitzspike.png", name: "Blitz Spike" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/lightninghail.png", name: "Lightning Hail" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/thorshammer.png", name: "Thor's Hammer" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/quickaura.png", name: "Quick Aura", on: 2 },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/godspeedwield.png", name: "GodSpeed Wield" },
        { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/busterlance.png", name: "Buster Lance" },
    ],
    Mononofu: [
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/issen.png", name: "Issen" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pulseblade.png", name: "Pulse Blade" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/triplethrust.png", name: "Triple Thrust" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/hassohappa.png", name: "Hasso Happa" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/tenryuransei.png", name: "Tenryu Ransei" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kasumisetsugetsuka.png", name: "Kasumi Setsu Getsu Ka" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/garyoutensei.png", name: "Garyou Tensei" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shadowlessslash.png", name: "Shadowless Slash" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pomelstrike.png", name: "Pommel Strike" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/magadachi.png", name: "Magadachi" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/zanteisettetsu.png", name: "Zantei Settetsu" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/meikyoshisui.png", name: "Meikyo Shisui" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kairikiranshin.png", name: "Kairiki Ranshin" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/guts.png", name: "Guts" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/zephyrrush.png", name: "Zephyr Rush" },
        { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/bouncingblade.png", name: "Bouncing Blade" },
    ],
    BareHand: [
        { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/qicharge.png", name: "Qi Charge" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/lionrage.png", name: "Lion Rage" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/ravingstorm.png", name: "Raving Storm" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/internalelixir.png", name: "Internal Elixir" },
        { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/earthshaker.png", name: "Earthshaker" },
    ],
    Crusher: [
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/forefistpunch.png", name: "Forefist Punch" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/goliathpunch.png", name: "Goliath Punch" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/godhand.png", name: "God Hand" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/breathwork.png", name: "Breathwork" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/floatingkick.png", name: "Floating Kick" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/geyserkick.png", name: "Geyser Kick" },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/combination.png", name: "Combination", on: 2 },
        { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/terrablast.png", name: "Terra Blast" },
    ],
    Sprite: [
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/autodevice.png", name: "Auto Device" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/microheal.png", name: "Micro Heal" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/enhance.png", name: "Enchance" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/stabiliz.png", name: "Stabiliz" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/spriteshield.png", name: "Spirite Shield", on: 2 },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/counterforce.png", name: "Counterforce" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/astrallance.png", name: "Astral Lance" },
        { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/magicvulcan.png", name: "Magic Vulcan" },
    ],
    Shield: [
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldbash.png", name: "Shield Bash" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldcannon.png", name: "Shield Cannon" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shielduppercut.png", name: "Shield Uppercut" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/dualshields.png", name: "Dual Shields" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldrepair.png", name: "Shield Repair" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/belagerung.png", name: "Belagerung" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/protection.png", name: "Protection" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/aegis.png", name: "Aegis" },
        { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/guardian.png", name: "Guardian" },
    ],
    Dagger: [
        { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/spikedart.png", name: "Spike Dart" },
        { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/gatlingknife.png", name: "Gatling Knife" },
        { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/poisondagger.png", name: "Poison Dagger" },
        { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/flincherknife.png", name: "Flincher Knife" },
    ],
    Knight: [
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/assaultattack.png", name: "Assault Attack" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/pdefense.png", name: "P. Defense" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/fareth.png", name: "Fareth" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/ragesword.png", name: "Rage Sword" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/bindingstrike.png", name: "Binding Strike" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/blinksword.png", name: "Blink Sword" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/sonicthrust.png", name: "Sonic Thrust" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/revenir.png", name: "Revenir" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightsstance.png", name: "Knight's Stance" },
        { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightpledge.png", name: "Knight's Pledge" },
    ],
    Priest: [
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/bless.png", name: "Bless" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/gloria.png", name: "Gloria" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holyfist.png", name: "Holy Fist" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holylight.png", name: "Holy Light" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/etherbarrier.png", name: "Ether Barrier" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/prayer.png", name: "Prayer" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/staffthrust.png", name: "Staff Thrust" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/exorcism.png", name: "Exorcism" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holybook.png", name: "Holy Book" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/nemesis.png", name: "Nemesis" },
        { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holygrace.png", name: "Holy Grace" },
    ],
    Assassin: [
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assassinstab.png", name: "Assassin Stab" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/backstep.png", name: "Backstep" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/arcanestrike.png", name: "Arcane Strike" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/evasion.png", name: "Evasion" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/serum.png", name: "Serum" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/shadowwalk.png", name: "Shadow Walk" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assaultchase.png", name: "Assault Chase" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venominjection.png", name: "Venom Injection" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venomthief.png", name: "Venom Thief" },
        { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/deathreception.png", name: "Death Reception" },
    ],
    Wizard: [
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/lightning.png", name: "Lightning", on: 2 },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/blizzard.png", name: "Blizzard" },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/meteorstrike.png", name: "Meteor Strike" },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/imperialray.png", name: "Imperial Ray" },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/stonebarrier.png", name: "Stone Barrier" },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/crystallaser.png", name: "Crystal Laser" },
        { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/overlimit.png", name: "Overlimit" },
    ],
    Hunter: [
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/kick.png", name: "Kick" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/sunrisearrow.png", name: "Sunrise Arrow" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/magicarrow.png", name: "Magic Arrow" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/satellitearrow.png", name: "Satellite Arrow" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/focus.png", name: "Focus" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/camouflage.png", name: "Camouflage" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/homingshot.png", name: "Homing Shot" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/detection.png", name: "Detection" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/cyclonarrow.png", name: "Cyclone Arrow" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/verticalair.png", name: "Vertical Air" },
        { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/multiplehunt.png", name: "Multiple Hunt" },
    ],
    DarkPower: [
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/bloodybite.png", name: "Bloody Bite" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/darkstinger.png", name: "Dark Stinger" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/redtear.png", name: "Red Tear" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/soulhunter.png", name: "Soul Hunter" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/demonclaw.png", name: "Demon Claw" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/regretless.png", name: "Regretless" },
        { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/eternalnightmare.png", name: "Eternal Nightmare" },
    ],
    MagicBlade: [
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/swordconversion.png", name: "Conversion" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/resonance.png", name: "Resonance", on: 2 },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/dualbringer.png", name: "Dual Bringer" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/etherflare.png", name: "Ether Flare" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/elementslash.png", name: "Element Slash" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantsword.png", name: "Enchanted Sword" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantedburst.png", name: "Enchanted Burst" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/unionsword.png", name: "Union Sword" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/siphonbarrier.png", name: "Siphon Barrier" },
        { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/teleport.png", name: "Teleport" },
    ],
    Partisan: [
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerang.png", name: "L Boomerang" },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangii.png", name: "L Boomerang II" },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangiii.png", name: "L Boomerang III" },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/ndragontooth.png", name: "N Dragon Tooth" },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/healingshot.png", name: "Healing Arrow", on: 2 },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/arrowsharpening.png", name: "Arrow Sharpening" },
        { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/frontliner.png", name: "Frontliner" },
    ],
    Necromencer: [
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/gravediggder.png", name: "Grave Digger" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/phantommissile.png", name: "Phantom Missile" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/bloodsiphon.png", name: "Blood Siphon" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/soulstream.png", name: "Soul Stream" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/skeletoncall.png", name: "Skeleton Call" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/demonicpact.png", name: "Demonic Pact" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/tomb.png", name: "Tomb" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/skullshaker.png", name: "Skull Shaker" },
        { src: "/IMG/SKILL/BUFF_SKILL/NECROMENCER/hazzardstrike.png", name: "Hazzard Strike" },
    ],
    Support: [{ src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/sanctuary.png", name: "Sanctuary" }],
    Minstrel: [
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/healing.png", name: "Healing Song" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fairy.png", name: "Fairy Song" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/life.png", name: "Life Song" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fantasy.png", name: "Fantasy Song" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/ad-lib.png", name: "Ad Lib" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/passion.png", name: "Passion Song" },
        { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/wisdom.png", name: "Wisdom Song" },
    ],
    Dancer: [
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/fairy.png", name: "Fairy Dance" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/frenzy.png", name: "Frenzy Dance" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/spirited.png", name: "Spirited Dance" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/astute.png", name: "Astute Dance" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/charming.png", name: "Charming Dance" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/elegantpoise.png", name: "Elegant Poise" },
        { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/natureswonder.png", name: "Nature's Wonder" },
    ],
    Tamer: [
        { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petheal.png", name: "Pet Heal" },
        { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petmpcharge.png", name: "Pet MP Charge" },
    ],
    NinjutsuScroll: [
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/kunaithrow.png", name: "Kunai Throw" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/firerelease.png", name: "Fire Release" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/waterrelease.png", name: "Water Release" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/earthrelease.png", name: "Earth Release" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/windrelease.png", name: "Wind Release" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/demonshuriken.png", name: "Demon Wind Shuriken" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/cloning.png", name: "Cloning" },
        { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/thunderrelease.png", name: "Thunder Release" },
    ],
};

// === fungsi masukin ke slot (copy dari logikamu) ===
function addSkillToSlot(skillObj) {
    const comboSlots = document.querySelectorAll(".display-skill");

    for (let i = 0; i < comboSlots.length; i++) {
        const slot = comboSlots[i];
        if (!slot.querySelector("img")) {
            // cek "on" requirement
            if (skillObj?.on && i < skillObj.on - 1) {
                alert(`${skillObj.name} hanya bisa dipasang mulai slot ${skillObj.on}`);
                return;
            }

            const oldSkillImg = slot.querySelector(":scope > img");
            if (oldSkillImg) oldSkillImg.remove();

            // === MASUKKAN SKILL BARU ===
            slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
            slot.style.backgroundSize = "cover";

            const img = document.createElement("img");
            img.src = skillImg.src;
            img.alt = skillImg.alt;
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

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        // sembunyikan semua canvas
        containers.forEach((c) => {
            c.classList.remove("active");
        });

        // ambil target id dari href (#Blade, #Shot, dll)
        const targetId = this.getAttribute("href").substring(1);
        const targetCanvas = document.getElementById("canvas_" + targetId);

        if (targetCanvas) {
            targetCanvas.classList.add("active");

            const alreadyRendered = targetCanvas.querySelector(".generated-skill-list");

            if (alreadyRendered) return;

            // jika ada data skill, generate gambar + nama
            if (skills[targetId]) {
                const listContainer = document.createElement("div");
                listContainer.classList.add("generated-skill-list");
                listContainer.style.display = "flex"; listContainer.style.display = "flex";
                listContainer.style.flexDirection = "column";
                listContainer.style.gap = "10px";
                listContainer.style.marginTop = "10px";

                skills[targetId].forEach((skill) => {
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
        const skillName = skillImg.alt;

        // 1. Cek Duplikat Lokal
        const currentSlots = document.querySelectorAll(".combo-display .display-skill img");
        let alreadyInCombo = false;
        currentSlots.forEach((img) => {
            if (img.alt === skillName) alreadyInCombo = true;
        });

        if (alreadyInCombo) {
            alert("Skill ini sudah ada di combo ini!");
            return;
        }

        // cari skill object di semua category
        let skillObj = null;
        for (let category in skills) {
            skillObj = skills[category].find((s) => s.name === skillName);
            if (skillObj) break;
        }

        const comboSlots = document.querySelectorAll(".display-skill");
        let inserted = false;

        for (let i = 0; i < comboSlots.length; i++) {
            const slot = comboSlots[i];

            // cari slot kosong
            if (!slot.querySelector("img")) {

                // Cek requirement "on"
                if (skillObj?.on && i < skillObj.on - 1) {
                    alert(`${skillObj.name} hanya bisa dipasang mulai slot ${skillObj.on}`);
                    return;
                }

                // === MASUKKAN SKILL KE SLOT ===
                slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
                slot.style.backgroundSize = "cover";

                const img = document.createElement("img");
                img.src = skillImg.src;
                img.alt = skillImg.alt;
                img.style.width = "45px";
                img.style.height = "45px";
                slot.appendChild(img);

                const attrDiv = slot.querySelector(".attribute");
                if (attrDiv) {
                    attrDiv.style.display = "block";
                    attrDiv.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                    attrDiv.dataset.attr = "none";
                }

                // visual skill terpilih
                skillImg.style.opacity = "0.5";

                inserted = true;
                break;
            }
        }

        // 🔥 JIKA TIDAK ADA SLOT KOSONG
        if (!inserted) {
            alert("Combo skill sudah penuh!");
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
// === ATTRIBUTE CLICK LISTENER (FIXED) ===
document.querySelectorAll("#attrPopup .attr-options img").forEach((attrImg) => {
    attrImg.addEventListener("click", function () {
        if (!window.activeSkillSlot) return;

        // Cari container attribute di slot yang aktif
        let attrBox = window.activeSkillSlot.querySelector(".attribute");

        // Tampilkan box-nya
        attrBox.style.display = "block";
        attrBox.innerHTML = "";

        // === INI KUNCI PERBAIKANNYA ===
        // Ambil nama dari data-attr ATAU alt. Jika tidak ada, default ke "none"
        const attrName = this.getAttribute("data-attr") || this.alt || "none";

        // Simpan ke dataset elemen DOM slot tersebut
        attrBox.dataset.attr = attrName;

        // Tampilkan gambar icon kecil di popup slot
        let img = document.createElement("img");
        img.src = this.src;
        img.alt = attrName;
        img.style.width = "30px";
        img.style.height = "30px";

        attrBox.appendChild(img);

        // Tutup popup attribute
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

            // === A. RESET BERSIH (Agar tidak ada sisa combo sebelumnya) ===
            const allSkillImages = document.querySelectorAll(".canvasContainer img");
            allSkillImages.forEach((img) => (img.style.opacity = "1")); // Semua skill jadi terang

            const popupSlots = document.querySelectorAll(".combo-display .display-skill");
            popupSlots.forEach((slot, i) => {
                slot.innerHTML = "";
                slot.style.backgroundImage = "";
                // Buat ulang wadah atribut kosong untuk slot > 1
                if (i > 0) {
                    const newAttr = document.createElement("div");
                    newAttr.classList.add("attribute");
                    newAttr.style.display = "none"; // Sembunyikan dulu
                    slot.appendChild(newAttr);
                }
            });

            // === B. LOAD DATA DARI HALAMAN UTAMA ===
            const firstImg = combo.querySelector(".border img.first");
            const elseSlots = combo.querySelectorAll(".border .else-slot");

            // Fungsi Helper: Masukkan skill & atribut ke popup
            const loadSkillToPopup = (src, alt, attrValue, slotIndex) => {
                const slot = popupSlots[slotIndex];
                slot.style.backgroundImage = "url('/IMG/COMBO/background3.png')";
                slot.style.backgroundSize = "cover";

                // === HAPUS DULU SKILL LAMA DI SLOT ===
                const old = slot.querySelector(":scope > img");
                if (old) old.remove();

                // 1. Masukkan Gambar Skill
                const skillImg = document.createElement("img");
                skillImg.src = src;
                skillImg.alt = alt;
                skillImg.style.width = "45px";
                skillImg.style.height = "45px";

                if (slotIndex === 0) {
                    slot.appendChild(skillImg);
                } else {
                    // Masukkan sebelum div attribute
                    const attrContainer = slot.querySelector(".attribute");
                    slot.insertBefore(skillImg, attrContainer);

                    // 2. RESTORE ATRIBUT (PENTING)
                    if (attrContainer) {
                        attrContainer.style.display = "block";

                        if (attrValue && attrValue !== "none") {
                            // Jika ada atribut (smite, save, dll), tampilkan gambarnya
                            attrContainer.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                            attrContainer.style.backgroundSize = "contain";
                            const attrimg = document.createElement("img");
                            attrimg.src = `/IMG/COMBO/${attrValue}.png`;
                            attrimg.style.width = "29px";
                            attrimg.style.height = "29px";
                            attrContainer.dataset.attr = attrValue; // Simpan di dataset popup
                            attrContainer.appendChild(attrimg);
                        } else {
                            // Jika 'none', tampilkan default
                            attrContainer.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                            attrContainer.dataset.attr = "none";
                        }
                    }
                }

                // 3. Update Visual List (Bikin Transparan)
                allSkillImages.forEach((listImg) => {
                    if (listImg.alt === alt) {
                        listImg.style.opacity = "0.5";
                    }
                });
            };

            // Jalankan Load untuk Slot 1
            if (firstImg && firstImg.alt && !firstImg.src.includes("background")) {
                loadSkillToPopup(firstImg.src, firstImg.alt, null, 0);
            }

            // Jalankan Load untuk Slot Lainnya (Looping)
            elseSlots.forEach((elseSlot, i) => {
                const img = elseSlot.querySelector("img.else"); // Seleksi gambar skill
                const attrDiv = elseSlot.querySelector(".display-attribute"); // Seleksi div atribut

                // BACA DATA YANG DISIMPAN TADI
                const attrValue = attrDiv ? attrDiv.dataset.attr || "none" : "none";

                if (img && img.alt && !img.src.includes("background")) {
                    loadSkillToPopup(img.src, img.alt, attrValue, i + 1);
                }
            });
        };
    });
}

// === REMOVE BUTTON ===
document.getElementById("remove-combo-skill").addEventListener("click", () => {
    const slots = document.querySelectorAll(".combo-display .display-skill");

    for (let i = slots.length - 1; i >= 0; i--) {
        const slot = slots[i];

        // Jika ada skill di slot
        const imgSkill = slot.querySelector(":scope > img") || slot.querySelector("img:not(.attribute img)");
        if (imgSkill) {
            const removedSkillName = imgSkill.alt; // ambil skill name

            // 🔥 KEMBALIKAN OPACITY PADA LIST CANVAS
            const listImages = document.querySelectorAll(".canvasContainer img");
            listImages.forEach((listImg) => {
                if (listImg.alt === removedSkillName) {
                    listImg.style.opacity = "1"; // NORMALKAN LAGI
                }
            });

            // Reset slot
            if (i === 0) {
                slot.innerHTML = "";
                slot.style.backgroundImage = "";
            } else {
                slot.innerHTML = '<div class="attribute"></div>';
                slot.style.backgroundImage = "";
            }

            break; // Hentikan setelah menghapus 1 slot
        }
    }
});


// === SAVE BUTTON ===
document.getElementById("save-combo-skill").addEventListener("click", () => {
    if (!activeComboId) return;

    try {
        const popupSlots = document.querySelectorAll(".combo-display .display-skill");
        const combo = document.getElementById(activeComboId);
        const border = combo.querySelector(".border");

        // === 1. Ambil data dari popup dengan AMAN ===
        const chosenSkills = Array.from(popupSlots)
            .map((slot) => {
                // PENTING: Ambil img yang merupakan anak langsung (Direct Child)
                // Agar tidak tertukar dengan img di dalam div .attribute
                let img = slot.querySelector(":scope > img");

                // Fallback jika browser lama tidak support :scope
                if (!img) {
                    const allImgs = slot.querySelectorAll("img");
                    for (let i = 0; i < allImgs.length; i++) {
                        if (!allImgs[i].parentElement.classList.contains("attribute")) {
                            img = allImgs[i];
                            break;
                        }
                    }
                }

                if (!img) return null; // Slot kosong

                const attrDiv = slot.querySelector(".attribute");
                // Ambil data-attr, jika kosong set "none"
                const attrVal = attrDiv ? (attrDiv.dataset.attr || "none") : "none";

                return {
                    src: img.src,
                    alt: img.alt,
                    attr: attrVal
                };
            })
            .filter(Boolean); // Hapus slot yang null

        // === 2. Validasi ===
        if (chosenSkills.length === 0) {
            alert("⚠️ Pilih minimal 1 skill sebelum menyimpan!");
            return;
        }
        if (!chosenSkills[0]) {
            alert("⚠️ Slot pertama wajib diisi sebagai skill utama!");
            return;
        }

        // === 3. Bersihkan tampilan combo lama ===
        border.innerHTML = "";

        // === 4. Fungsi Render Ulang ===
        chosenSkills.forEach((skill, index) => {
            const slotNumber = index + 1;

            // Bersihkan nama attribute (hilangkan spasi, ubah ke huruf kecil)
            // Contoh: "Smite " -> "smite"
            const safeAttr = skill.attr.trim().toLowerCase();

            if (index === 0) {
                // --- RENDER SKILL UTAMA (SLOT 1) ---
                const img = document.createElement("img");
                img.src = skill.src;
                img.alt = skill.alt;
                img.classList.add("first");
                img.id = `${activeComboId}-skill${slotNumber}`;

                img.style.backgroundImage = "url('/IMG/COMBO/background1.png')";
                img.style.backgroundSize = "contain";
                img.style.height = "90px";
                img.style.width = "90px";
                img.style.padding = "20px";

                border.appendChild(img);

            } else {
                // --- RENDER SKILL LANJUTAN (SLOT 2 dst) ---
                const elseSlot = document.createElement("div");
                elseSlot.classList.add("else-slot");
                elseSlot.style.backgroundImage = "url('/IMG/COMBO/background2.png')";
                elseSlot.style.backgroundSize = "contain";
                elseSlot.style.height = "50px";
                elseSlot.style.width = "50px";
                elseSlot.style.margin = "10px";
                elseSlot.style.position = "relative";

                // Gambar Skill
                const img = document.createElement("img");
                img.src = skill.src;
                img.alt = skill.alt;
                img.classList.add("else");
                img.id = `${activeComboId}-skill${slotNumber}`;
                img.style.width = "38px";
                img.style.height = "38px";
                img.style.position = "absolute";
                img.style.top = "50%";
                img.style.left = "50%";
                img.style.transform = "translate(-50%, -50%)";
                img.style.zIndex = "5";

                // Gambar Attribute
                const attrDiv = document.createElement("div");
                attrDiv.classList.add("display-attribute");
                attrDiv.id = `${activeComboId}-attr${slotNumber}`;
                attrDiv.dataset.attr = safeAttr; // Simpan dataset agar bisa diedit lagi nanti
                attrDiv.style.position = "absolute";
                attrDiv.style.top = "0";
                attrDiv.style.left = "0";

                const attrImg = document.createElement("img");
                attrImg.style.backgroundImage = "url('/IMG/SKILL/back-off.png')";
                attrImg.style.backgroundSize = "contain";
                attrImg.style.position = "absolute";
                attrImg.style.width = "30px";
                attrImg.style.height = "30px";
                attrImg.style.top = "-15px";
                attrImg.style.left = "-18px";
                attrImg.style.zIndex = "10";

                // LOGIKA SOURCE GAMBAR ATTRIBUTE
                if (safeAttr && safeAttr !== "none" && safeAttr !== "undefined") {
                    // Pastikan file gambar kamu namanya "smite.png", "save.png" (huruf kecil)
                    attrImg.src = `/IMG/COMBO/${safeAttr}.png`;
                } else {
                    attrImg.src = "/IMG/SKILL/back-off.png";
                }

                attrDiv.appendChild(attrImg);
                elseSlot.appendChild(attrDiv);
                elseSlot.appendChild(img);
                border.appendChild(elseSlot);
            }
        });

        // === 5. Tutup popup ===
        popup.style.display = "none";

    } catch (error) {
        console.error("Gagal menyimpan combo:", error);
        alert("Terjadi kesalahan saat menyimpan. Cek Console (F12) untuk detail.");
    }
});


// === POPUP CLOSE ===
closeBtn.onclick = () => (popup.style.display = "none");

// === KLIK LUAR POPUP ===
window.onclick = (e) => {
    if (e.target === popup) popup.style.display = "none";
};



// === SAVE PDF (PRINT PREVIEW) ===
document.addEventListener("DOMContentLoaded", function () {

    // ===================== IMAGE CACHE =====================
    const imageCache = {};

    async function loadImage(src) {
        if (imageCache[src]) return imageCache[src];

        const img = new Image();
        img.src = src;
        await img.decode();
        imageCache[src] = img;
        return img;
    }

    // ===================== BUTTON =====================
    const btnPDF = document.getElementById("btnSavePDF");
    if (!btnPDF) return;

    btnPDF.addEventListener("click", async () => {

        btnPDF.disabled = true;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
            compress: false
        });

        const marginX = 15;
        let currentY = 5;
        const pageWidth = doc.internal.pageSize.getWidth();

        // ===================== PRELOAD ASSET =====================
        await Promise.all([
            loadImage("/IMG/LOGO/logo1.png"),
            loadImage("/IMG/COMBO/background1.png"),
            loadImage("/IMG/COMBO/background2.png"),
            loadImage("/IMG/SKILL/back-off.png")
        ]);

        const logo = imageCache["/IMG/LOGO/logo1.png"];
        const bg1 = imageCache["/IMG/COMBO/background1.png"];
        const bg2 = imageCache["/IMG/COMBO/background2.png"];
        const bg3 = imageCache["/IMG/SKILL/back-off.png"];

        // ===================== HEADER =====================
        doc.addImage(logo, "PNG", marginX, currentY, 40, 40);

        doc.setFont("times", "bold");
        doc.setFontSize(30);
        doc.setTextColor(0, 135, 181);

        const title = "SHARE YOUR BUILD";
        const titleWidth = doc.getTextWidth(title);
        doc.text(title, pageWidth / 2 - titleWidth / 2 + 15, currentY + 23);

        doc.setDrawColor(0, 135, 181);
        doc.setLineWidth(1);
        doc.line(marginX, currentY + 40, pageWidth - marginX, currentY + 40);
        doc.setLineWidth(0.5);
        doc.line(marginX, currentY + 42, pageWidth - marginX, currentY + 42);

        currentY += 55;

        // ===================== ISI =====================
        const combos = document.querySelectorAll(".combo");
        let printedCombo = 0;

        for (let c = 0; c < combos.length; c++) {

            const combo = combos[c];
            const border = combo.querySelector(".border");

            const hasFirst = border.querySelector("img.first");
            const hasElse = border.querySelector("img.else");

            // combo kosong → skip
            if (!hasFirst && !hasElse) continue;

            // ========== PAGE BREAK TIAP 5 COMBO ==========
            if (printedCombo > 0 && printedCombo % 5 === 0) {
                doc.addPage();
                currentY = 15;
            }

            printedCombo++;

            // ========== NAMA COMBO ==========
            const nameInput = combo.querySelector("input[type=text]");
            const comboName = nameInput?.value || "(Tanpa Nama)";

            doc.setFillColor(0, 135, 181);
            doc.rect(marginX, currentY, pageWidth - marginX * 2, 10, "F");

            doc.setFontSize(14);
            doc.setTextColor(255, 255, 255);
            doc.text(`COMBO ${printedCombo} : ${comboName}`, marginX + 3, currentY + 7);

            currentY += 15;

            // ========== RENDER SKILL ==========
            const slots = Array.from(border.children);
            let x = marginX;
            let y = currentY;

            const bgSize = 15;
            const iconSize = 12;
            const gap = 3;

            let rendered = 0;

            for (let s = 0; s < slots.length && rendered < 10; s++) {

                const slot = slots[s];

                // ---- SLOT UTAMA ----
                if (slot.tagName === "IMG" && slot.classList.contains("first")) {

                    const skillImg = await loadImage(slot.src);

                    doc.addImage(bg1, "PNG", x - 3, y - 3, bgSize + 5, bgSize + 5);
                    doc.addImage(
                        skillImg,
                        "PNG",
                        x + (bgSize - iconSize) / 2,
                        y + (bgSize - iconSize) / 2,
                        iconSize,
                        iconSize
                    );

                    x += bgSize + gap;
                    rendered++;
                    continue;
                }

                // ---- SLOT KE-2+ ----
                if (slot.classList.contains("else-slot")) {

                    const img = slot.querySelector("img.else");
                    if (!img) continue;

                    const skillImg = await loadImage(img.src);

                    doc.addImage(bg2, "PNG", x, y, bgSize, bgSize);
                    doc.addImage(
                        skillImg,
                        "PNG",
                        x + (bgSize - iconSize) / 2,
                        y + (bgSize - iconSize) / 2,
                        iconSize,
                        iconSize
                    );

                    doc.addImage(bg3, "PNG", x - 4, y - 3, 8, 8);

                    const attrEl = slot.querySelector(".display-attribute img");
                    if (attrEl) {
                        const attrImg = await loadImage(attrEl.src);
                        doc.addImage(attrImg, "PNG", x - 4, y - 3, 8, 8);
                    }

                    x += bgSize + gap;
                    rendered++;
                }
            }

            currentY = y + bgSize + 15;
        }

        // ===================== FOOTER =====================
        const pageCount = doc.internal.getNumberOfPages();

        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFillColor(0, 135, 181);
            doc.rect(0, 287, pageWidth, 10, "F");
            doc.setFontSize(10);
            doc.setTextColor(255, 255, 255);
            doc.text("© 2025 LUCIS_CAELUM. ALL RIGHTS RESERVED.", 15, 293);
        }

        // ===================== OUTPUT =====================
        doc.save(fileName);

        btnPDF.disabled = false;
    });
});


