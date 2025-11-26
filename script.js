// --- Konfiguráció ---

// A mezők koordinátái (Top, Left százalékban a kép bal felső sarkához képest)
// Ezt "szemre" lőttem be a kigyok1.jpg alapján.
// Ha valamelyik bábu rossz helyre lép, itt kell módosítani a számokat.
const coordinates = [
    { top: 88, left: 5 },  // 0. Start mező
    { top: 88, left: 13 }, // 1
    { top: 88, left: 20 }, // 2
    { top: 88, left: 27 }, // 3
    { top: 88, left: 34 }, // 4
    { top: 88, left: 41 }, // 5 (Létra)
    { top: 88, left: 49 }, // 6
    { top: 88, left: 56 }, // 7
    { top: 88, left: 63 }, // 8
    { top: 85, left: 70 }, // 9 (Híd alatt)
    { top: 83, left: 77 }, // 10 (Létra)
    { top: 80, left: 83 }, // 11
    { top: 72, left: 87 }, // 12
    { top: 65, left: 86 }, // 13
    { top: 58, left: 86 }, // 14
    { top: 51, left: 85 }, // 15 (Csúszda le)
    { top: 51, left: 78 }, // 16
    { top: 51, left: 72 }, // 17
    { top: 51, left: 65 }, // 18
    { top: 51, left: 58 }, // 19
    { top: 51, left: 51 }, // 20
    { top: 48, left: 44 }, // 21 (Létra)
    { top: 45, left: 38 }, // 22 (Csúszda le)
    { top: 41, left: 33 }, // 23
    { top: 38, left: 28 }, // 24
    { top: 38, left: 21 }, // 25
    { top: 38, left: 14 }, // 26
    { top: 30, left: 10 }, // 27
    { top: 22, left: 9 },  // 28
    { top: 15, left: 9 },  // 29
    { top: 15, left: 15 }, // 30
    { top: 15, left: 21 }, // 31
    { top: 15, left: 28 }, // 32
    { top: 15, left: 35 }, // 33
    { top: 15, left: 42 }, // 34 (Kígyó feje)
    { top: 15, left: 49 }, // 35
    { top: 15, left: 56 }, // 36
    { top: 15, left: 63 }, // 37
    { top: 15, left: 70 }, // 38
    { top: 15, left: 77 }, // 39
    { top: 15, left: 85 }  // 40 (Cél)
];

// Szabályok és szövegek (A csatolt leírás alapján)
// target: hova ugorjon a bábu (ha nincs, akkor null)
const rules = {
    4: {
        title: "Bezárják a gyárat",
        text: "Az önkormányzati pályázaton politikai kapcsolataid révén sikeresen elnyered a hirdetett lakást. (A 4-es mező szövege)",
        target: null
    },
    5: {
        title: "Kormánypárti politikus",
        text: "A családod nagy földeket vásárolt a földárverésen. Mivel jóban vagy a tűzzel, feljebb lépsz! (Irány a 24-es mező)",
        target: 24 // Létra fel
    },
    10: {
        title: "Magas állami pozíció",
        text: "Felhalmozott tudásodat az üzleti szférában hasznosítod. Lépj feljebb! (Irány a 17-es mező)", // A 10-es létra a 17-es környékére visz
        target: 17
    },
    15: {
        title: "Kormányváltás",
        text: "A felmérések szerint romlott a népszerűséged. Visszacsúszol! (Irány a 11-es mező)",
        target: 11 // Csúszda le
    },
    21: {
        title: "Közvilágítás",
        text: "Egy ismerősöd cége nyerte a közvilágítási tendert. Lépj feljebb! (Irány a 37-es mező)",
        target: 37 // Létra fel
    },
    22: {
        title: "Balaton-parti vitorláskikötő",
        text: "Túl nagy port kavart az ügy. Visszacsúszol. (Irány a 7-es mező)",
        target: 7 // Csúszda le
    },
    34: {
        title: "Trafikmutyi",
        text: "A dohányzás visszaszorítása ürügyén újraosztják a piacot, de te kimaradsz. Visszacsúszol! (Irány a 4-es mező)",
        target: 4 // Hosszú kígyó le
    }
};

// --- Játék Állapot ---
let players = [];
let currentPlayerIndex = 0;
let isGameOver = false;
let pendingMove = null; // Ha popup után kell lépni

// --- Setup Funkciók ---

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
    const colors = ['#e91e63', '#2196f3', '#ffeb3b', '#4caf50', '#ff9800', '#9c27b0']; // Piros, Kék, Sárga, Zöld, Narancs, Lila

    for (let i = 0; i < count; i++) {
        const name = document.getElementById(`player-name-${i}`).value;
        players.push({
            name: name,
            color: colors[i],
            position: 0, // Start mező (index 0)
            element: createPlayerPin(colors[i], i)
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
    // Kicsit eltoljuk őket, hogy ne takarják egymást teljesen
    pin.style.marginTop = `${index * 2}px`; 
    pin.style.marginLeft = `${index * 2}px`;
    document.getElementById('board-wrapper').appendChild(pin);
    return pin;
}

function placePlayersAtStart() {
    players.forEach(p => movePinVisual(p));
}

// --- Játék Logika ---

function rollDice() {
    if (isGameOver) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-display').innerText = `🎲 ${roll}`;
    
    // Disable gomb a mozgás alatt
    document.getElementById('roll-btn').disabled = true;

    movePlayer(roll);
}

function movePlayer(steps) {
    const player = players[currentPlayerIndex];
    let newPos = player.position + steps;

    // Ha túlmegy a 40-en, megáll a 40-nél (vagy visszapattanhatna, de egyszerűsítsünk: megáll)
    if (newPos >= coordinates.length - 1) {
        newPos = coordinates.length - 1;
    }

    // Léptetés animáció (egyesével lépked)
    let currentStep = player.position;
    
    const stepInterval = setInterval(() => {
        if (currentStep < newPos) {
            currentStep++;
            player.position = currentStep;
            movePinVisual(player);
        } else {
            clearInterval(stepInterval);
            checkTile(player);
        }
    }, 400); // 400ms minden lépés
}

function movePinVisual(player) {
    const coord = coordinates[player.position];
    if (coord) {
        player.element.style.top = coord.top + '%';
        player.element.style.left = coord.left + '%';
    }
}

function checkTile(player) {
    const pos = player.position;

    // Győzelem ellenőrzés
    if (pos === coordinates.length - 1) {
        isGameOver = true;
        document.getElementById('winner-name').innerText = `${player.name} győzött!`;
        document.getElementById('winner-modal').classList.add('active');
        return;
    }

    // Szabályok ellenőrzése
    if (rules[pos]) {
        showPopup(rules[pos]);
    } else {
        nextTurn();
    }
}

function showPopup(rule) {
    document.getElementById('modal-title').innerText = rule.title;
    document.getElementById('modal-text').innerText = rule.text;
    document.getElementById('action-modal').classList.add('active');

    if (rule.target !== null) {
        pendingMove = rule.target;
    } else {
        pendingMove = null;
    }
}

function closeModal() {
    document.getElementById('action-modal').classList.remove('active');
    
    if (pendingMove !== null) {
        const player = players[currentPlayerIndex];
        // Speciális mozgás (csúszda/létra)
        player.position = pendingMove;
        movePinVisual(player);
        pendingMove = null;
        
        // Ellenőrizzük, hogy az új helyen van-e valami (láncreakció elkerülése végett most egyszerűsítünk és nem hívjuk meg újra a checkTile-t, csak ha nagyon kell)
    }
    
    nextTurn();
}

function nextTurn() {
    currentPlayerIndex++;
    if (currentPlayerIndex >= players.length) {
        currentPlayerIndex = 0;
    }
    updatePlayerInfo();
    document.getElementById('roll-btn').disabled = false;
}

function updatePlayerInfo() {
    const p = players[currentPlayerIndex];
    const infoDiv = document.getElementById('current-player-info');
    infoDiv.innerText = `${p.name} következik`;
    infoDiv.style.color = p.color;
}