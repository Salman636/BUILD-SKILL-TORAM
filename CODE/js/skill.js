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
    canvas.width = 850;
    canvas.height = 500;
    canvas.style.backgroundColor = "black";

    container.appendChild(canvas);

    container.style.display = "none";
  });

  // Data skill -> array gambar
  const skillImages = {
    Blade: [
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hardhit.png", x: 50, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/astute.png", x: 150, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/tiggerslash.png", x: 250, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/rampage.png", x: 350, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/shutout.png", x: 650, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/meteorbreaker.png", x: 450, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/lunarslash.png", x: 550, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/sonicblade.png", x: 150, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/spiralair.png", x: 250, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordtempest.png", x: 350, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/busterblade.png", x: 450, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/aurablade.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordmastery.png", x: 50, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/quickslash.png", x: 150, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swordtechniques.png", x: 250, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/warcry.png", x: 350, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/berserk.png", x: 450, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gladiate.png", x: 550, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/swiftattack.png", x: 450, y: 500, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/hammerslam.png", x: 50, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/cleavingattack.png", x: 250, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/stormblaze.png", x: 350, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/gardeblade.png", x: 450, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/BLADE/ogreslash.png", x: 550, y: 50, w: 50, h: 50 }
    ],
    Shot: [
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/piercingshot.png", x: 650, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/snipe.png", x: 450, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/vanquisher.png", x: 750, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/powershot.png", x: 50, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/bullseye.png", x: 150, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/arrowrain.png", x: 250, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/crossfire.png", x: 550, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/retrogradeshot.png", x: 650, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/twinstorm.png", x: 650, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/quickloader.png", x: 750, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/moebashot.png", x: 150, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/paralysisshot.png", x: 350, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/smokedust.png", x: 450, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/armbreak.png", x: 550, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/spreadshot.png", x: 650, y: 450, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/parabolacannon.png", x: 750, y: 400, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/shotmastery.png", x: 50, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/longrange.png", x: 350, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/quickdraw.png", x: 450, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/decoyshot.png", x: 550, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/elementstarter.png", x: 750, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/samuraiarchery.png", x: 650, y: 550, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/sneakattack.png", x: 150, y: 650, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/huntingbuddy.png", x: 550, y: 650, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SHOT/fatalshot.png", x: 450, y: 750, w: 50, h: 50 }

    ],
    Magic: [
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/arrows.png", x: 50, y: 150, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/javelin.png", x: 150, y: 100, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/lances.png", x: 250, y: 100, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/impact.png", x: 350, y: 100, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/finale.png", x: 450, y: 100, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/chronosshift.png", x: 550, y: 100, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/laser.png", x: 650, y: 150, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/wall.png", x: 150, y: 200, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/blast.png", x: 250, y: 200, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/storm.png", x: 350, y: 200, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/burst.png", x: 450, y: 200, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magiccannon.png", x: 550, y: 200, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/crash.png", x: 650, y: 250, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magicmastery.png", x: 50, y: 350, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/magicknife.png", x: 250, y: 350, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/qadal.png", x: 350, y: 350, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/spellcalibration.png", x: 450, y: 350, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/mpcharge.png", x: 50, y: 450, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/chaincast.png", x: 250, y: 450, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/powerwave.png", x: 350, y: 450, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/maximizer.png", x: 450, y: 450, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/mpcharge.png", x: 550, y: 450, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/guardianbeam.png", x: 550, y: 550, w: 50, h: 50 },
      { src: "IMG/SKILL/WEAPON_SKILL/MAGIC/enchantedbarriers.png", x: 350, y: 550, w: 50, h: 50 }
    ],
    Martial: [
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/smash.png", x: 50, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/bash.png", x: 150, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/shellbreak.png", x: 250, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/heavysmash.png", x: 350, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chariot.png", x: 450, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/abstractarms.png", x: 550, y: 100, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/mountainpress.png", x: 650, y: 50, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/sonicwave.png", x: 150, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/earthbind.png", x: 250, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/triplekick.png", x: 350, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/rush.png", x: 450, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/asuraaura.png", x: 550, y: 200, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/seismicstomp.png", x: 650, y: 150, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/spinsweep.png", x: 650, y: 250, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/flashblink.png", x: 550, y: 300, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/martialmastery.png", x: 50, y: 350, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/martialdiscipline.png", x: 350, y: 350, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/chakra.png", x: 450, y: 350, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/energycontrol.png", x: 650, y: 350, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/aggravate.png", x: 50, y: 450, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/strongchaseattack.png", x: 250, y: 450, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MARTIAL/slide.png", x: 350, y: 550, w: 50, h: 50 }
    ],
    DualSword: [
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/twinbusterblade.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stormreaper.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/stingblade.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/spinningslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shiningcross.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/shadowstep.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/saberaura.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/reflex.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/phantomslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/lunarmisfortune.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/horizoncut.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/godspeed.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/flashblast.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/dualswordmastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/dualswordcontrol.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/crossparry.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/crescentsaber.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/chargingslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialslay.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/DUALSWORD/aerialcut.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Halberd: [
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/warcryofstruggle.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/tornadolance.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/thorshammer.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/strikestab.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/quickaura.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/punishray.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/lightninghail.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/infinitedimension.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/halberdmastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/godspeedwield.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/flashstab.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontooth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/dragontail.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/draconiccharge.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/diveimpact.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/deadlyspear.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/criticalspear.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/chronosdrive.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/cannonspear.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/busterlance.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/HALBERD/blitzspike.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Mononofu: [
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/zanteisettetsu.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/twohanded.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/triplethrust.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/tenryuransei.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shukuchi.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/shadowlessslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pulseblade.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/pomelstrike.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/meikyoshisui.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/magadachi.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kasumisetsugetsuka.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/kairikiranshin.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/issen.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/hassohappa.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/garyoutensei.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/dauntless.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/bushido.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/MONONOFU/bouncingblade.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Unarmed: [
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/unarmedmastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/ultimaraving.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/ultimalionsrage.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/ravingstorm.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/qicharge.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/lionrage.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/internalelixir.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/hiddentalent.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/earthshaker.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/UNARMED/clashofenmity.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Crusher: [
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/terrablast.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/goliathpunch.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/godhand.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/geyserkick.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/forefistpunch.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/floatingkick.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/combination.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/breathwork.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/CRUSHER/annihilator.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Sprite: [
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/stabiliz.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/spriteshield.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/resurrection.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/microheal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/magicvulcan.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/expressaid.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/enhance.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/counterforce.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/autodevice.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/WEAPON_SKILL/SPRITE/astrallance.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Guard: [
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/physicalguard.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/mirageevasion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/lightarmor.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/heavyarmor.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/advancedguard.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/GUARD/advancedevasion.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Shield: [
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shielduppercut.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldrepair.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldmastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldcannon.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/shieldbash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/protection.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/magicalshield.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/guardstrike.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/guardian.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/forceshield.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/dualshields.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/belagerung.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/SHIELD/aegis.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Dagger: [
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/throwingknife.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/spikedart.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/poisondagger.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/mailbreaker.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/knifecombat.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/intenseknife.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/hiddenarm.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/gatlingknife.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/flincherknife.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/doublethrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DAGGER/amazingthrow.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Knight: [
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/sonicthrust.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/revenir.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/ragesword.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/provoke.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/pdefense.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/parry.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightwill.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightsstance.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/knightpledge.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/fareth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/blinksword.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/bindingstrike.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/KNIGHT/assaultattack.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Priest: [
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/staffthrust.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/royalheal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/prayer.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/nemesis.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holylight.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holygrace.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holyfist.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/holybook.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/gloria.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/exorcism.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/etherbarrier.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/enhancedbless.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/bless.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PRIEST/aspissoul.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Assassin: [
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venomthief.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/venominjection.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/sicarius.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/shadowwalk.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/serum.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/foresight.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/evasion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/deathreception.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/backstep.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assaultchase.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/assassinstab.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/ASSASSIN/arcanestrike.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Wizard: [
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/stonebarrier.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/shift.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/overlimit.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/meteorstrike.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/manacrystal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/lightning.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/imperialray.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/familia.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/crystallaser.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/castmastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/blizzard.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/WIZARD/advancedfamilia.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Hunter: [
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/verticalair.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/sunrisearrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/sleeptrap.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/satellitearrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/multiplehunt.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/magicarrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/landmine.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/kick.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/hunterbowgun.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/homingshot.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/focus.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/detection.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/darktrap.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/cyclonarrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/camouflage.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/HUNTER/beartrap.png", x: 400, y: 120, w: 50, h: 50 },
    ],
    DarkPower: [
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/soulhunter.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/sacrifice.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/regretless.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/redtear.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/eternalnightmare.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/demonclaw.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/darkstinger.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/DARKPOWER/bloodybite.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    MagicBlade: [
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/unionsword.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/teleport.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/swordconversion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/siphonrecall.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/siphonbarrier.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/resonance.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/magicwarriormastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/magicskin.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/floatdash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/etherflare.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantsword.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantedspell.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/enchantedburst.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/elementslash.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/MAGICBLADE/dualbringer.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Ninja: [
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjutsu.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/NINJA/ninjaspirit.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Partisan: [
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/survivalinstinct.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/ndragontooth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangiii.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerangii.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/lboomerang.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/healingshot.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/frontliner.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/BUFF_SKILL/PARTISAN/arrowsharpening.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Survival: [
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/soberanalysis.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/shortrest.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/saferest.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/playdead.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/mpboost.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/hpboost.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/fightershigh.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/expgainup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SURVIVAL/droprateup.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Support: [
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/sanctuary.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/recovery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/quickmotion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/miniheal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/manarecharge.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/magicbarrier.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/liferecovery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/immunity.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/highcycle.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/heal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/firstaid.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/fastreaction.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/SUPPORT/braveaura.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Minstrel: [
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/wisdom.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/passion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/life.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/healing.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fantasy.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/fairy.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/MINSTREL/ad-lib.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Dancer: [
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/spirited.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/natureswonder.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/frenzy.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/fairy.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/elegantpoise.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/charming.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/DANCER/astute.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Battle: [
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/whack.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/supergrip.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/spellburst.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/secretchase.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/magicup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/intimidatingpower.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/increasedenergy.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/dodgeup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/desperateresist.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/defenseup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/defensemastery.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/criticalup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/concentrate.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/attackup.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/ASSIST_SKILL/BATTLE/accuracyup.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Smith: [
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/woodcompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/refineeq.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/processmaterials.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/noviceanvil.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/midclassrefinement.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/metalcompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/medicinecompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/masteranvil.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/manacompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/highclassrefinement.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/fabriccompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/customizeeq.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/createeq.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/craftsmananvil.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/carefulcreation.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/blacksmithanvil.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/beastcompassion.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/SMITH/accuratecustomization.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Alchemy: [
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesizeeq.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/synthesistbottle.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/processmaterials.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/novicebottle.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/midclasssynth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/masterbottle.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/itemsynth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/highclasssynth.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/ALCHEMY/craftsmanbottle.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Tamer: [
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/taming.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/skillfulcapture.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petmpcharge.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/petheal.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/carefulcapture.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/TAMER/capture.png", x: 400, y: 120, w: 50, h: 50 }
    ],
    Ninjutsu: [
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/windrelease.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/waterrelease.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/thunderrelease.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/kunaithrow.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/firerelease.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/earthrelease.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/demonshuriken.png", x: 400, y: 120, w: 50, h: 50 },
      { src: "/IMG/SKILL/OTHER_SKILL/NINJUTSUSCROLL/cloning.png", x: 400, y: 120, w: 50, h: 50 }
    ],
  };

  let activeSkill = null;
  let draggingIndex = null;
  let offsetX = 0;
  let offsetY = 0;

  const canvasSizes = {
    Blade: 475,
    Shot: 825,
    Magic: 625,
    Martial: 625,
  };

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
        container.style.display = "block";

        const canvas = container.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        canvas.height = canvasSizes[skillId] || 800;

        // Bersihkan dulu
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const images = skillImages[skillId];

        if (images && images.length) {
          images.forEach(data => {
            const img = new Image();
            img.src = data.src;
            img.onload = function () {
              ctx.drawImage(img, data.x, data.y, data.w, data.h);
            };
          });
        } else {
          console.warn("Tidak ada gambar untuk skill:", skillId);
        }
      }
    });
  });
});