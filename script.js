// --- Konfiguráció ---

// A mezők koordinátái (Top, Left százalékban a kép bal felső sarkához képest)
// Ezt a tömböt az Ön által megadott adatok alapján hagytam benne.
const coordinates = [
    { top: 110, left: 7 },  // 0. Start mező
    { top: 110, left: 18 }, // 1
    { top: 110, left: 23 }, // 2
    { top: 110, left: 30 }, // 3
    { top: 110, left: 37 }, // 4
    { top: 110, left: 44 }, // 5 (Létra)
    { top: 110, left: 50 }, // 6
    { top: 110, left: 56 }, // 7
    { top: 110, left: 63 }, // 8
    { top: 110, left: 70 }, // 9 (Híd alatt)
    { top: 110, left: 75 }, // 10 (Létra)
    { top: 110, left: 82 }, // 11
    { top: 100, left: 87 }, // 12
    { top: 95, left: 88 }, // 13
    { top: 85, left: 89 }, // 14
    { top: 80, left: 88 }, // 15 (Csúszda le)
    { top: 75, left: 86 }, // 16
    { top: 65, left: 83 }, // 17
    { top: 65, left: 75 }, // 18
    { top: 65, left: 70 }, // 19
    { top: 65, left: 63 }, // 20
    { top: 65, left: 56 }, // 21 (Létra) - hibás
    { top: 65, left: 50 }, // 22 (Csúszda le) - hibás
    { top: 65, left: 44 }, // 23
    { top: 65, left: 37 }, // 24
    { top: 65, left: 30 }, // 25
    { top: 65, left: 23 }, // 26
    { top: 65, left: 18 }, // 27
    { top: 65, left: 12 }, // 28
    { top: 58, left: 12 }, // 29
    { top: 18, left: 15 }, // 30
    { top: 18, left: 18 }, // 31
    { top: 18, left: 23 }, // 32
    { top: 18, left: 30 }, // 33
    { top: 18, left: 37 }, // 34 (Kígyó feje)
    { top: 18, left: 44 }, // 35
    { top: 18, left: 50 }, // 36
    { top: 18, left: 56 }, // 37
    { top: 18, left: 63 }, // 38
    { top: 18, left: 70 }, // 39
    { top: 18, left: 75 }  // 40 (Cél)
];

// Szabályok és szövegek (A csatolt leírás alapján)
// target: hova ugorjon a bábu (ha nincs, akkor null)
const rules = {
    4: {
        title: "A csapatodat megbízzák egy lakás felújításával",
        text: "Lépj előre egy mezőt! (Irány az 5-ös mező)",
        target: 5 // Létra fel
    },
    8: {
        title: "Nem adsz számlát",
        text: "(Irány a 10-es mező)",
        target: 10 // Létra fel
    },
    10: {
        title: "Az önkormányzati pályázaton politikai kapcsolataid révén sikeresen elnyered a hirdetett lakást egy rászoruló család helyett.",
        text: "szberény városa egy frekventált helyen lévő, 85 négyzetméteres, két és fél szobás önkormányzati bérlakást tartott fenn... (Irány a 17-es mező)", 
        target: 17
    },
    19: {
        title: "Bezárják a gyárat ahol dolgozol.",
        text: "(Irány a 10-es mező)",
        target: 10 // Csúszda le
    },
    20: {
        title: "Kormánypárti politikusként családod nagy földeket vásárolhat a földárverésen.",
        text: "Az állami tulajdonú földterületek értékesítésének deklarált célja a Nemzeti Földalap vagyoni körébe tartozó 3 hektár feletti földek árveréssel történő értékesítése volt... (Irány a 37-es mező)",   
        target: 37
    },
    21: {
        title: "A civil szervezetre, ahol dolgozol, rászáll a KEHI (Kormányzati Ellenőrzési Hivatal) ",
        text: "2014 tavaszán a Kehi a Miniszterelnökség utasítására kezdte el a Norvég Alap által támogatott szervezetek vizsgálatát... (Irány a 7-es mező)",
        target: 7 // Csúszda le
    },
    23: {
        title: "A cégeddel kivételeznek a NAV-nál. ",
        text: "Horváth András, ex-adóellenőr 2013 novemberében robbantotta ki a botrányt azzal, hogy azt állította: a NAV-nál kivételezett helyzetben tartanak egy jól körülhatárolható adózói kört... (Irány a 36-os mező)",
        target: 36 
    },
    24: {
        title: "Devizahitelt vettél fel a házatokra.",
        text: "A dohányzás visszaszorítása ürügyén újraosztják a piacot, de te kimaradsz. Visszacsúszol! (Irány a 6-os mező)",
        target: 6
    },
    25: {
        title: "Múzeumigazgatóként áron alul képeket adsz kölcsön az állami gyűjteményből egy kormányközeli tanácsadó magánlakásába. ",
        text: "2015. februárjában a Szépművészeti Múzeumból 10 értékes, antik festményt kölcsönöztek abba a Szerb utca 9-ben lévő lakásba... (Irány a 33-as mező)",
        target: 33 
    },
    26: {
        title: "Magas állami pozícióban felhalmozott tudásodat az üzleti szférában hasznosítod.",
        text: "A forgóajtó jelenség arra mutat rá, amikor egyes ágazatokon belül, általában vezető beosztású munkatársak, az állami-, illetve az ahhoz kapcsolódó magánszektor között váltanak munkahelyet... (Irány a 32-es mező)",
        target: 32 
    },    
    27: {
        title: "Céged a Dagály-törvény értelmében sok középítkezés kivitelezésére kap meghívást a vizes vb-n.",
        text: "Számításaink szerint a FINA 2017 vízes világbajnokság budapesti megrendezésének költsége végül elérte a 140 milliárd forintot... (Irány a 31-es mező)",
        target: 31 
    },
    32: {
        title: "Bírósági perbe keveredsz az indokolatlanul nagy végkielégítésed miatt.",
        text: "A BKV-ügy a 2009 nyarán kirobbant... A BKV-per néven elhíresült eljárás Hagyó Miklós és vádlott társai ellen zajlik... (Irány a 26-os mező)",
        target: 26 
    },
    33: {
        title: "Nem írtad bele a vagyonnyilatkozatodba egy tulajdonodat, amiről posztoltál a facebookon, így lebuktál.",
        text: "Áprilisban a DK-s Varju László a Facebook falára posztolta a taksonyi Zöld Sziget Panziót... (Irány a 25-ös mező)",
        target: 25 
    },
    34: {
        title: "Összekülönbözöl a miniszterelnökkel, céged nem nyer többet közbeszezéseken. ",
        text: "A 2014-es választások után Simicska Lajos vállalkozó kapcsolata a kormánnyal erősen megromlott... (Irány a 23-as mező)",
        target: 23 
    },
    35: {
        title: "Kományváltás",
        text: "A felmérések szerint romlott a népszerűséged. Visszacsúszol! (Irány a 21-es mező)",
        target: 21 
    }
    // ...
};

// --- Játék Állapot ---
let players = [];
let currentPlayerIndex = 0;
let isGameOver = false;
let pendingMove = null; 
let isMoving = false; // Blokkoljuk a gombot, amíg lép
let pendingRolledSix = false; // Hatos dobás állapotának átmeneti tárolására

// --- Setup Funkciók (Változatlan) ---

function setupPlayersInput() {
    const count = document.getElementById('player-count').value;
    const container = document.getElementById('player-names-container');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `${i + 1}. Játékos neve`;
        input.id = `player-name-${i}`;
        input.value = `Játékos ${i + 1}`;
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }

    document.getElementById('start-game-btn').style.display = 'inline-block';
}

function startGame() {
    const count = document.getElementById('player-count').value;
    const colors = ['#e91e63', '#2196f3', '#ffeb3b', '#4caf50', '#ff9800', '#9c27b0'];
    players = [];
    currentPlayerIndex = 0;
    isGameOver = false;

    for (let i = 0; i < count; i++) {
        const name = document.getElementById(`player-name-${i}`).value;
        players.push({
            name: name,
            color: colors[i],
            position: 0,
            element: createPlayerPin(colors[i], i),
            rolledSix: false
        });
    }

    document.getElementById('setup-screen').classList.remove('active');
    updatePlayerInfo();
    placePlayersAtStart();
}

function createPlayerPin(color, index) {
    const pin = document.createElement('div');
    pin.classList.add('player-pin');
    pin.style.backgroundColor = color;
    document.getElementById('board-wrapper').appendChild(pin);
    return pin;
}

function placePlayersAtStart() {
    players.forEach(p => movePinVisual(p));
}

function updatePlayerInfo() {
    const p = players[currentPlayerIndex];
    const infoDiv = document.getElementById('current-player-info');
    infoDiv.innerText = `${p.name} következik`;
    infoDiv.style.color = p.color;
}

// --- Játék Logika ---

function rollDice() {
    // Biztonsági ellenőrzés a hiba elkerülésére (TypeError: player is undefined)
    if (players.length === 0) {
        alert("Kérlek, indítsd el a játékot a 'Játék indítása' gombbal!");
        document.getElementById('roll-btn').disabled = false;
        return; 
    }
    
    if (isGameOver || isMoving) return;
    isMoving = true;
    document.getElementById('roll-btn').disabled = true;

    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-display').innerText = `🎲 ${roll}`;
    
    const rolledSix = (roll === 6);
    
    movePlayer(roll, rolledSix);
}

// 🎯 JAVÍTOTT movePlayer funkció a visszalépés animálásához
function movePlayer(steps, rolledSix = false) {
    const player = players[currentPlayerIndex];
    const finalSquare = coordinates.length - 1; // 40-es mező
    const currentPos = player.position;
    const targetPos = currentPos + steps;
    
    let movePath = [];

    // Visszalépés (Túldobás) logika
    if (targetPos > finalSquare) {
        const overshoot = targetPos - finalSquare;
        
        // 1. lépés: Lépkedés a célmezőig (pl. 38 -> 39, 40)
        for (let i = currentPos + 1; i <= finalSquare; i++) {
            movePath.push(i);
        }
        
        // 2. lépés: Visszalépés az overshoot mértékével (pl. 40 -> 39, 38, 37)
        for (let i = 1; i <= overshoot; i++) {
            movePath.push(finalSquare - i);
        }
        
        // Frissítjük a kijelzést és elveszi az extra dobás jogát
        document.getElementById('dice-display').innerText += ` (Túldobás! Visszalépés ${overshoot} mezőt.)`;
        player.rolledSix = false; 
        
    } else {
        // Normál lépkedés
        for (let i = currentPos + 1; i <= targetPos; i++) {
            movePath.push(i);
        }
        player.rolledSix = rolledSix;
    }

    // Animáció indítása
    let stepIndex = 0;
    
    function animateStep() {
        if (stepIndex < movePath.length) {
            const nextPos = movePath[stepIndex];
            player.position = nextPos;
            movePinVisual(player);
            stepIndex++;
            setTimeout(animateStep, 400); // Folytatjuk a következő lépéssel 400ms szünettel
        } else {
            // Animáció vége - A bábu a végső pozícióján áll
            checkTile(player);
        }
    }
    
    animateStep();
}

function movePinVisual(player) {
    const coord = coordinates[player.position];
    if (coord) {
        const offset = players.indexOf(player) * 2; 
        player.element.style.top = `calc(${coord.top}% + ${offset}px)`;
        player.element.style.left = `calc(${coord.left}% + ${offset}px)`;
    }
}

function checkTile(player) {
    const pos = player.position;
    const rolledSix = player.rolledSix;

    if (pos === coordinates.length - 1) {
        // Játék Vége (Pontosan a 40-es mezőre érkezett, vagy visszalépés után állt meg)
        isGameOver = true;
        document.getElementById('winner-name').innerText = `${player.name} győzött!`;
        document.getElementById('winner-modal').classList.add('active');
        isMoving = false;
        return;
    }

    if (rules[pos] && rules[pos].target !== null) {
        // Létra vagy Kígyó (ugrás van)
        showPopup(rules[pos], rolledSix); 
    } else {
        // Nincs ugrás, vége a mozgásnak
        endTurn(rolledSix); 
    }
}

function showPopup(rule, rolledSix) {
    document.getElementById('modal-title').innerText = rule.title;
    document.getElementById('modal-text').innerText = rule.text;
    document.getElementById('action-modal').classList.add('active');
    
    pendingMove = rule.target;
    pendingRolledSix = rolledSix; 
}

function closeModal() {
    document.getElementById('action-modal').classList.remove('active');
    
    if (pendingMove !== null) {
        const player = players[currentPlayerIndex];
        // Speciális mozgás (csúszda/létra)
        player.position = pendingMove;
        movePinVisual(player);
        pendingMove = null;
        
        // Kígyó/létra után MINDIG vége a körnek
        endTurn(false); 
        
    } else {
        // Játék befejezése: Felhasználjuk az elmentett hatos dobás állapotot
        endTurn(pendingRolledSix); 
    }
    
    pendingRolledSix = false; 
}

function endTurn(rolledSix) {
    isMoving = false;
    document.getElementById('roll-btn').disabled = false;
    
    // ÚJ SZABÁLY: Ha hatost dobott (és nem létrán/kígyón keresztül jött):
    if (rolledSix) {
        document.getElementById('current-player-info').innerText = `${players[currentPlayerIndex].name} még egyszer dobhat (Hatos!).`;
        // Játékos index nem változik
    } else {
        // Váltás a következő játékosra
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length) {
            currentPlayerIndex = 0;
        }
        updatePlayerInfo();
    }
}