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

  const skillImages = {
    Blade: [
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hammerslam.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/cleavingattack.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/stormblaze.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gardeblade.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/ogreslash.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hardhit.png", x: 50, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/astute.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/tiggerslash.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/rampage.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/shutout.png", x: 650, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/meteorbreaker.png", x: 450, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/lunarslash.png", x: 550, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/sonicblade.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/spiralair.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordtempest.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/busterblade.png", x: 450, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/aurablade.png", x: 550, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordmastery.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/quickslash.png", x: 150, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordtechniques.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/warcry.png", x: 350, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/berserk.png", x: 450, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gladiate.png", x: 550, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swiftattack.png", x: 450, y: 612.5, w: 50, h: 50 }
    ],
    Shot: [
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/powershot.png", x: 50, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/bullseye.png", x: 150, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/snipe.png", x: 350, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/piercingshot.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/vanquisher.png", x: 650, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/arrowrain.png", x: 250, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/crossfire.png", x: 450, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/twinstorm.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/retrogradeshot.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/quickloader.png", x: 650, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/moebashot.png", x: 150, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/paralysisshot.png", x: 250, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/smokedust.png", x: 350, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/armbreak.png", x: 450, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/spreadshot.png", x: 550, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/parabolacannon.png", x: 650, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/shotmastery.png", x: 50, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/longrange.png", x: 250, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/quickdraw.png", x: 350, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/decoyshot.png", x: 450, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/elementstarter.png", x: 650, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/samuraiarchery.png", x: 550, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/sneakattack.png", x: 150, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/huntingbuddy.png", x: 450, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/fatalshot.png", x: 350, y: 675, w: 50, h: 50 }
    ],
    Magic: [
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/arrows.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/javelin.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/lances.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/impact.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/finale.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/chronosshift.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/laser.png", x: 650, y: 112.5, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/wall.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/blast.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/storm.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/burst.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magiccannon.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/crash.png", x: 650, y: 237.5, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magicmastery.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magicknife.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/qadal.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/spellcalibration.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/mpcharge.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/chaincast.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/powerwave.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/maximizer.png", x: 450, y: 425, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/mpcharge.png", x: 550, y: 425, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/enchantedbarriers.png", x: 550, y: 550, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/guardianbeam.png", x: 350, y: 550, w: 50, h: 50 }
    ],
    Martial: [
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/smash.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/bash.png", x: 150, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/shellbreak.png", x: 250, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/heavysmash.png", x: 350, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chariot.png", x: 450, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/mountainpress.png", x: 650, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/abstractarms.png", x: 550, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/sonicwave.png", x: 150, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/earthbind.png", x: 250, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/seismicstomp.png", x: 650, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/triplekick.png", x: 350, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/flashblink.png", x: 550, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/rush.png", x: 450, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/spinsweep.png", x: 650, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/asuraaura.png", x: 550, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/martialmastery.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/martialdiscipline.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chakra.png", x: 450, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/energycontrol.png", x: 650, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/aggravate.png", x: 50, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/strongchaseattack.png", x: 250, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/slide.png", x: 350, y: 612.5, w: 50, h: 50 }
    ],
    DualSword: [
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/dualswordmastery.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinslash.png", x: 150, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/spinningslash.png", x: 250, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialcut.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/phantomslash.png", x: 350, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/crossparry.png", x: 150, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/chargingslash.png", x: 250, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shadowstep.png", x: 350, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shiningcross.png", x: 450, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/lunarmisfortune.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinbusterblade.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/reflex.png", x: 150, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/flashblast.png", x: 350, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stormreaper.png", x: 450, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/dualswordcontrol.png", x: 150, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/godspeed.png", x: 250, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/saberaura.png", x: 450, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/crescentsaber.png", x: 550, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialslay.png", x: 450, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stingblade.png", x: 650, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/horizoncut.png", x: 550, y: 612.5, w: 50, h: 50 }
    ],
    Halberd: [
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/flashstab.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/cannonspear.png", x: 150, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontail.png", x: 250, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontooth.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/draconiccharge.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/diveimpact.png", x: 350, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/deadlyspear.png", x: 150, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/strikestab.png", x: 350, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/chronosdrive.png", x: 450, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/infinitedimension.png", x: 550, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/punishray.png", x: 250, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/blitzspike.png", x: 350, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/lightninghail.png", x: 450, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/thorshammer.png", x: 550, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/halberdmastery.png", x: 50, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/criticalspear.png", x: 350, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/tornadolance.png", x: 550, y: 487.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/quickaura.png", x: 50, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/warcryofstruggle.png", x: 250, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/godspeedwield.png", x: 450, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/godspeedwield.png", x: 550, y: 612.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/busterlance.png", x: 350, y: 675, w: 50, h: 50 },
    ],
    Mononofu: [
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/issen.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pulseblade.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/triplethrust.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/hassohappa.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/tenryuransei.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kasumisetsugetsuka.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/garyoutensei.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shadowlessslash.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pomelstrike.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/magadachi.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/zanteisettetsu.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/bushido.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shukuchi.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shukuchi.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/twohanded.png", x: 150, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/meikyoshisui.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kairikiranshin.png", x: 450, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/dauntless.png", x: 550, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/auspiciouswind.png", x: 250, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/guts.png", x: 350, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/zephyrrush.png", x: 450, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/guts.png", x: 550, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/bouncingblade.png", x: 350, y: 675, w: 50, h: 50 }
    ],
    BareHand: [
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/qicharge.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/lionrage.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/ultimalionsrage.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/ravingstorm.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/ultimaraving.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/internalelixir.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/clashofenmity.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/internalelixir.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/qicharge.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/hiddentalent.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/unarmedmastery.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BAREHAND/earthshaker.png", x: 350, y: 112.5, w: 50, h: 50 }
    ],
    Crusher: [
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/forefistpunch.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/goliathpunch.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/godhand.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/godhand.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/breathwork.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/floatingkick.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/geyserkick.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/combination.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/annihilator.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/terrablast.png", x: 350, y: 300, w: 50, h: 50 }
    ],
    Sprite: [
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/autodevice.png", x: 50, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/expressaid.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/microheal.png", x: 250, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/resurrection.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/enhance.png", x: 250, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/stabiliz.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/spriteshield.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/counterforce.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/astrallance.png", x: 250, y: 362.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/magicvulcan.png", x: 350, y: 425, w: 50, h: 50 }
    ],
    Guard: [
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/heavyarmor.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/advancedguard.png", x: 150, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/physicalguard.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/lightarmor.png", x: 50, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/advancedevasion.png", x: 150, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/mirageevasion.png", x: 250, y: 300, w: 50, h: 50 }
    ],
    Shield: [
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldmastery.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldbash.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldcannon.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/guardstrike.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/forceshield.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/magicalshield.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shielduppercut.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/dualshields.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldrepair.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/belagerung.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/protection.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/aegis.png", x: 150, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/guardian.png", x: 350, y: 425, w: 50, h: 50 }
    ],
    Dagger: [
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/throwingknife.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/spikedart.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/gatlingknife.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/amazingthrow.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/poisondagger.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/doublethrow.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/hiddenarm.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/intenseknife.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/mailbreaker.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/knifecombat.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/flincherknife.png", x: 350, y: 425, w: 50, h: 50 }
    ],
    Knight: [
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/assaultattack.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/parry.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/pdefense.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/fareth.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/pdefense.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/provoke.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/ragesword.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/bindingstrike.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightwill.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/blinksword.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/sonicthrust.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/revenir.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightsstance.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightsstance.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightpledge.png", x: 450, y: 425, w: 50, h: 50 }
    ],
    Priest: [
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/bless.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/gloria.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/enhancedbless.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/royalheal.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/royalheal.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holyfist.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holylight.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/etherbarrier.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/prayer.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/aspissoul.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/staffthrust.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/exorcism.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holybook.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/nemesis.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holygrace.png", x: 450, y: 300, w: 50, h: 50 }
    ],
    Assassin: [
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assassinstab.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/backstep.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/sicarius.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/arcanestrike.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assassinstab.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/evasion.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/serum.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/foresight.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/shadowwalk.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assaultchase.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venominjection.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venominjection.png", x: 150, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venomthief.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/deathreception.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venominjection.png", x: 450, y: 425, w: 50, h: 50 }
    ],
    Wizard: [
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/familia.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/lightning.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/blizzard.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/meteorstrike.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/imperialray.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magicmastery.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/manacrystal.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/stonebarrier.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/advancedfamilia.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/familia.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/castmastery.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/crystallaser.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/overlimit.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/overlimit.png", x: 450, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/shift.png", x: 550, y: 425, w: 50, h: 50 }
    ],
    Hunter: [
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/kick.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/sunrisearrow.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/magicarrow.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/satellitearrow.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/focus.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/sleeptrap.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/beartrap.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/landmine.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/darktrap.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/camouflage.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/homingshot.png", x: 50, y: 362, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/detection.png", x: 150, y: 362, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/cyclonarrow.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/verticalair.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/hunterbowgun.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/multiplehunt.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/multiplehunt.png", x: 450, y: 425, w: 50, h: 50 }
    ],
    DarkPower: [
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/bloodybite.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/darkstinger.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/redtear.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/soulhunter.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/sacrifice.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/demonclaw.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/regretless.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/eternalnightmare.png", x: 350, y: 175, w: 50, h: 50 }
    ],
    MagicBlade: [
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/magicwarriormastery.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/swordconversion.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/resonance.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantedspell.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/dualbringer.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/etherflare.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/elementslash.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantsword.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantedburst.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/unionsword.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/siphonbarrier.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/teleport.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/siphonrecall.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/floatdash.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/magicskin.png", x: 450, y: 300, w: 50, h: 50 }
    ],
    Ninja: [
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjutsu.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjaspirit.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjaspirit.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjaspirit.png", x: 350, y: 175, w: 50, h: 50 }

    ],
    Partisan: [
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerang.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangii.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangiii.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/ndragontooth.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/healingshot.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/arrowsharpening.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/survivalinstinct.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/frontliner.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/frontliner.png", x: 150, y: 425, w: 50, h: 50 }
    ],
    Survival: [
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/saferest.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/hpboost.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/fightershigh.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/shortrest.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/mpboost.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/soberanalysis.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/playdead.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/expgainup.png", x: 50, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/droprateup.png", x: 50, y: 362.5, w: 50, h: 50 }
    ],
    Support: [
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/firstaid.png", x: 50, y: 112.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/miniheal.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/recovery.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/sanctuary.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/heal.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/liferecovery.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/braveaura.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/highcycle.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/quickmotion.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/manarecharge.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/magicbarrier.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/immunity.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/fastreaction.png", x: 450, y: 300, w: 50, h: 50 },
    ],
    Minstrel: [
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/healing.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fairy.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/passion.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/wisdom.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/life.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fantasy.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/ad-lib.png", x: 250, y: 425, w: 50, h: 50 }
    ],
    Dancer: [
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/fairy.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/frenzy.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/astute.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/charming.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/spirited.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/elegantpoise.png", x: 250, y: 237.5, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/natureswonder.png", x: 350, y: 237.5, w: 50, h: 50 }
    ],
    Battle: [
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/magicup.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/concentrate.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/desperateresist.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/increasedenergy.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/spellburst.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/attackup.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/whack.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/criticalup.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/intimidatingpower.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/secretchase.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/defenseup.png", x: 50, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/dodgeup.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/accuracyup.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/defensemastery.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/supergrip.png", x: 450, y: 300, w: 50, h: 50 }
    ],
    Smith: [
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/refineeq.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/noviceanvil.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/craftsmananvil.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/blacksmithanvil.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/masteranvil.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/masteranvil.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/midclassrefinement.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/highclassrefinement.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/highclassrefinement.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/createeq.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/carefulcreation.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/carefulcreation.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/customizeeq.png", x: 250, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/accuratecustomization.png", x: 350, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/accuratecustomization.png", x: 450, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/accuratecustomization.png", x: 550, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/processmaterials.png", x: 50, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/metalcompassion.png", x: 650, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/fabriccompassion.png", x: 650, y: 125, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/beastcompassion.png", x: 650, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/woodcompassion.png", x: 650, y: 425, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/medicinecompassion.png", x: 650, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/manacompassion.png", x: 650, y: 675, w: 50, h: 50 }
    ],
    Alchemy: [
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/itemsynth.png", x: 50, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/novicebottle.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/craftsmanbottle.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesistbottle.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/masterbottle.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/masterbottle.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/midclasssynth.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/midclasssynth.png", x: 350, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/highclasssynth.png", x: 450, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/highclasssynth.png", x: 550, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesizeeq.png", x: 250, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesizeeq.png", x: 350, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesizeeq.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesizeeq.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/processmaterials.png", x: 50, y: 300, w: 50, h: 50 },
    ],
    Tamer: [
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/taming.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/capture.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/capture.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/skillfulcapture.png", x: 150, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/carefulcapture.png", x: 250, y: 175, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petheal.png", x: 150, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petmpcharge.png", x: 250, y: 300, w: 50, h: 50 },
    ],
    NinjutsuScroll: [
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/kunaithrow.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/firerelease.png", x: 150, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/waterrelease.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/earthrelease.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/windrelease.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/demonshuriken.png", x: 550, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/cloning.png", x: 650, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/thunderrelease.png", x: 750, y: 50, w: 50, h: 50 }
    ],
  };

  const defaultSize = { width: 800, height: 800 };

  const canvasSizes = {
    Blade: { width: 725, height: 687.5 },
    Shot: { width: 725, height: 750 },
    Magic: { width: 725, height: 625 },
    Martial: { width: 725, height: 687.5 },
    DualSword: { width: 725, height: 687.5 },
    Halberd: { width: 625, height: 750 },
    Mononofu: { width: 625, height: 750 },
    BareHand: { width: 425, height: 500 },
    Crusher: { width: 425, height: 375 },
    Sprite: { width: 425, height: 500 },
    Guard: { width: 325, height: 375 },
    Shield: { width: 425, height: 500 },
    Dagger: { width: 425, height: 500 },
    Knight: { width: 625, height: 500 },
    Priest: { width: 525, height: 375 },
    Assassin: { width: 525, height: 500 },
    Wizard: { width: 625, height: 500 },
    Hunter: { width: 525, height: 500 },
    DarkPower: { width: 425, height: 250 },
    MagicBlade: { width: 625, height: 375 },
    Ninja: { width: 426, height: 250 },
    Partisan: { width: 325, height: 500 },
    Survival: { width: 325, height: 500 },
    Support: { width: 525, height: 375 },
    Minstrel: { width: 425, height: 500 },
    Dancer: { width: 425, height: 312.5 },
    Battle: { width: 525, height: 375 },
    Smith: { width: 725, height: 750 },
    Alchemy: { width: 625, height: 375 },
    Tamer: { width: 325, height: 375 },
    NinjutsuScroll: { width: 825, height: 125 },
  };

  const skillConnections = {
    Blade: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [6, 7], [7, 8], [8, 9], [7, 10], [10, 11], [12, 13], [13, 14], [13, 15], [15, 16], [17, 18], [18, 19], [18, 20], [20, 21], [21, 22]],
      splits: [[5, 6], [5, 12],]
    },
    Shot: {
      lines: [[0, 1], [1, 2], [2, 3], [2, 4], [1, 5], [5, 6], [6, 9], [10, 11], [11, 12], [12, 13], [13, 14], [13, 15], [16, 17], [17, 18], [18, 19], [19, 20], [16, 21], [16, 22], [22, 23]],
      splits: [[6, 7], [6, 8], [0, 10]]
    },
    Magic: {
      lines: [[1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [7, 8], [8, 9], [9, 10], [10, 11], [9, 12], [13, 14], [14, 15], [15, 16], [17, 18], [18, 19], [19, 20], [20, 21],],
      splits: [[0, 1], [0, 7], [20, 22]]
    },
    Martial: {
      lines: [[1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [7, 8], [8, 9], [8, 10], [10, 11], [10, 12], [12, 13], [12, 14], [15, 16], [16, 17], [17, 18], [19, 20]],
      splits: [[0, 1], [0, 7]]
    },
    DualSword: {
      lines: [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [6, 7], [7, 8], [11, 12], [12, 13], [14, 15], [15, 16], [16, 17], [15, 18], [18, 19], [18, 20]],
      splits: [[0, 5], [0, 11], [0, 14], [8, 9], [8, 10]]
    },
    Halberd: {
      lines: [[0, 1], [1, 2], [2, 3], [2, 4], [2, 5], [6, 7], [7, 8], [8, 9], [6, 10], [10, 11], [11, 12], [12, 13], [14, 15], [15, 16], [17, 18], [18, 19], [19, 20]],
      splits: [[0, 6]]
    },
    Mononofu: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [6, 7], [8, 9], [9, 10], [11, 12], [12, 13], [14, 15], [15, 16], [16, 17], [15, 18], [18, 19], [19, 20], [20, 21]],
      splits: [[3, 6], [11, 14],]
    },
    BareHand: {
      lines: [[1, 2], [3, 4], [5, 6], [6, 7], [0, 8], [8, 9]],
      splits: [[0, 1], [0, 3], [0, 5]]
    },
    Crusher: {
      lines: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [7, 8], [8, 9]],
      splits: [[4, 7]]
    },
    Sprite: {
      lines: [],
      splits: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [4, 6], [0, 7], [7, 8], [8, 9]]
    },
    Guard: {
      lines: [[0, 1], [0, 2], [3, 4], [3, 5]],
      splits: []
    },
    Shield: {
      lines: [[1, 2], [2, 3], [0, 4], [4, 5], [6, 7], [7, 8], [10, 11], [11, 12]],
      splits: [[0, 1], [0, 6]]
    },
    Dagger: {
      lines: [[1, 2], [2, 3], [4, 5], [6, 7], [7, 8], [9, 10]],
      splits: [[0, 1], [0, 4], [7, 9]]
    },
    Knight: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [6, 10], [10, 11], [12, 13], [13, 14]],
      splits: []
    },
    Priest: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [6, 11], [11, 12], [12, 13], [13, 14]],
      splits: []
    },
    Assassin: {
      lines: [[0, 1], [1, 2], [1, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [10, 11], [11, 12], [12, 13], [13, 14]],
      splits: []
    },
    Wizard: {
      lines: [[0, 1], [0, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [8, 9]],
      splits: [[6, 11], [11, 12], [12, 13], [13, 14]]
    },
    Hunter: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [10, 11], [12, 13], [14, 15], [15, 16]],
      splits: [[11, 12], [11, 14]]
    },
    DarkPower: {
      lines: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 7]],
      splits: []
    },
    MagicBlade: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [10, 11], [11, 12], [12, 13], [13, 14]],
      splits: []
    },
    Ninja: {
      lines: [[0, 1], [0, 2], [2, 3]],
      splits: []
    },
    Partisan: {
      lines: [[0, 1], [1, 2], [4, 5], [5, 6], [7, 8]],
      splits: []
    },
    Survival: {
      lines: [[0, 2], [3, 4]],
      splits: [[0, 1], [3, 5]]
    },
    Support: {
      lines: [[1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [9, 10], [10, 11], [11, 12]],
      splits: []
    },
    Minstrel: {
      lines: [[0, 1], [1, 2], [1, 3], [4, 5]],
      splits: [[0, 4]]
    },
    Dancer: {
      lines: [[0, 1], [1, 2], [1, 3], [5, 6]],
      splits: [[0, 4]]
    },
    Battle: {
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [8, 9], [10, 11], [11, 12], [12, 13], [13, 14]],
      splits: []
    },
    Smith: {
      lines: [[1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [9, 10], [10, 11], [12, 13], [13, 14], [14, 15]],
      splits: [[0, 1], [0, 9], [9, 12]]
    },
    Alchemy: {
      lines: [[1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8], [8, 9], [10, 11], [11, 12], [12, 13]],
      splits: [[0, 1], [0, 10]]
    },
    Tamer: {
      lines: [[0, 1], [1, 2], [3, 4], [5, 6]],
      splits: [[0, 3], [0, 5]]
    },
    NinjutsuScroll: {
      lines: [],
      splits: []
    }
  };

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
      const output = statDiv.querySelector("output");
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
      const output = statDiv.querySelector("output");
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