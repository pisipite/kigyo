// --- Konfiguráció ---

// A mezők koordinátái (Top, Left százalékban a kép bal felső sarkához képest)
// Ezt a tömböt az Ön által megadott adatok alapján hagytam benne.
const coordinates = [
    { top: 80, left: 10 },  // 0. Start mező
    { top: 80, left: 17 }, // 1
    { top: 80, left: 24 }, // 2
    { top: 80, left: 30 }, // 3
    { top: 80, left: 37 }, // 4
    { top: 80, left: 43.5 }, // 5 (Létra)
    { top: 80, left: 50.5 }, // 6
    { top: 80, left: 56.5 }, // 7
    { top: 80, left: 63 }, // 8
    { top: 80, left: 70 }, // 9 
    { top: 80, left: 75.5 }, // 10 (Létra)
    { top: 78, left: 81 }, // 11
    { top: 74.5, left: 85 }, // 12
    { top: 69, left: 86.5 }, // 13
    { top: 64.3, left: 87.5 }, // 14
    { top: 59.4, left: 86.8 }, // 15 
    { top: 55, left: 85 }, // 16
    { top: 48, left: 82 }, // 17
    { top: 48, left: 76 }, // 18
    { top: 48, left: 69.5 }, // 19
    { top: 48, left: 63 }, // 20
    { top: 48, left: 57 }, // 21 
    { top: 48, left: 50.5 }, // 22 
    { top: 48, left: 43.5 }, // 23
    { top: 48, left: 37 }, // 24
    { top: 48, left: 30 }, // 25
    { top: 48, left: 23.5 }, // 26
    { top: 48, left: 17 }, // 27
    { top: 46, left: 10 }, // 28 utolsó lent
    { top: 35, left: 8 },  // 29
    { top: 27, left: 10 }, // 30
    { top: 25, left: 17 }, // 31 első fent
    { top: 25, left: 23.5 }, // 32
    { top: 25, left: 30 }, // 33
    { top: 25, left: 37 }, // 34 
    { top: 25, left: 43.5 }, // 35
    { top: 25, left: 50.5 }, // 36
    { top: 25, left: 56.5 }, // 37
    { top: 25, left: 63 }, // 38
    { top: 25, left: 70 }, // 39
    { top: 25, left: 76 }  // 40 (Cél)
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

// --- Infopont Konfiguráció ---
// top, left: koordináták a tábla bal felső sarkához képest (0-100%)
// title, text: a popup tartalma
// link: A K-Monitor cikk linkje
const infoPointsData = [
    { top: 38, left: 35, title: "Felcsút", text: "A Népszabadság 2012 nyarán írta meg először, hogy vasutat kaphat Orbán Viktor minisztereinek szülőfaluja: a Bicske és Székesfehérvár közti elhagyott sínek egy szakaszán nosztalgiavonat közlekedhet. A miniszterelnök alapította és Mészáros Lőrinc, Felcsút polgármestere vezetésében álló Felcsúti Utánpótlás Neveléséért Alapítvány 2013-ban már kiemelt fejlesztési státuszt és 600 millió forint elszámolható uniós forrású közkiadási keretösszeget is kapott.", link: "https://adatbazis.k-monitor.hu" },
    { top: 71, left: 10, title: "Alagutak az M6-os", text: "Az M6-os autópálya Erdi-tető - Szekszárd szakaszát a német Bilfinger Berger, míg a Szekszárd- Pécs szakaszát az orsztrák Strabag vezette koncesszió építette meg PPP konstrukcióban. Az átadás után a 2010 nyarán bekövetkezett özönvizet követő sztráda-rongálódások hívták fel a figyelmet a botrányos kivitelezésre és a szerződések visszáságaira. Az Állami Számvevőszék (ÁSZ) az autópálya-beruházásokról készített jelentése külön fejezetekben foglalkozik a négy alagúttal, azt vizsgálva, kellően alátámasztott döntést volt-e az alagutas nyomvonalváltozat megvalósítása. Az ÁSZ megállapítása szerint a Kóka János vezette gazdasági és közlekedési tárca nem vizsgált meg minden lehetőséget és körülményt, így nem teljes körűen támasztották alá az alagutas megoldás választását. 2012-ben az osztrák Die Presse arról írt, hogy házkutatásokat tartottak a Bilfinger Berger mannheimi központjában, valamint magyarországi, bécsi és pozsonyi leányvállalatánál korrupció gyanújával. A feltételezés szerint 2006-ban és 2007-ben kenőpénzek folytak annak érdekében, hogy a beruházás tető alá kerüljön.", link: "https://adatbazis.k-monitor.hu/adatbazis/cimkek/m6-alagutak" }, 
    // 19 Infopont kell, itt van még 17 hely:
    { top: 10, left: 50, title: "Infó 3", text: "Szöveg 3.", link: "https://adatbazis.k-monitor.hu" },
    { top: 18, left: 30, title: "Infó 4", text: "Szöveg 4.", link: "https://adatbazis.k-monitor.hu" },
    { top: 25, left: 85, title: "Infó 5", text: "Szöveg 5.", link: "https://adatbazis.k-monitor.hu" },
    { top: 30, left: 10, title: "Infó 6", text: "Szöveg 6.", link: "https://adatbazis.k-monitor.hu" },
    { top: 58, left: 28, title: "Balatoni vitorláskikötő", text: "A balatonfüredi Záhonyi Ferenc utca 8., illetve 10. szám alatti telkek a Magyar Nemzeti Vagyonkezelő (MNV) Zrt.-től 2012 őszén ingyen kerültek át a város tulajdonába. Alig négy hónappal később a – korábban évi 30 milliárdos nyereséget termelő – területen található olimpiai központot rövid határidővel pályáztatták, és határozatlan időre, évi 15 millió forintos bérleti díj fejében hasznosításra bérbe adták a Közgép Zrt., a Swietelsky Kft. és Fonyó Károly alkotta Solum-Invest nevű konzorciumnak.", link: "https://adatbazis.k-monitor.hu" },
    { top: 50, left: 80, title: "Infó 8", text: "Szöveg 8.", link: "https://adatbazis.k-monitor.hu" },
    { top: 59, left: 7, title: "Parlagfű", text: "Többek közt végkielégítésekre, terepjáróra, számítógépekre és irodaszerekre csoportosította át az adózók parlagfű-mentesítésre szánt forintjait a Földművelésügyi és Vidékfejlesztési Minisztérium.", link: "https://adatbazis.k-monitor.hu" },
    { top: 62.5, left: 45, title: "Paks II", text: "Magyarország és Oroszország 2014 januárjában nagy port kavaró megállapodást írt alá a paksi atomerőmű bővítéséről. A szerződést, amely szerint 2014 és 2025 között az orosz állam 10 milliárd eurós hitelkeretet biztosít Magyarország számára a beruházáshoz, az Országgyűlés utólag, 2014 februárjában, a megállapodás részleteinek ismerete nélkül fogadta el. A szerződés háttéranyagainak megismerésére vonatkozó közérdekű adatigénylést azzal utasították el, hogy a kért adatok az orosz–magyar megállapodás előkészítését szolgálták, ezért titkosak. Az Európai Bizottság jelezte, hogy Brüsszel közbeszerzési szempontból vizsgálja az üzletet, mivel a magyar állam tender kiírása nélkül ítélte oda a kivitelezés jogát az orosz állam atomenergetikai iparát irányító Roszatom óriásvállalatnak. 2017 február végén az Európai Bizottság jóváhagyta, hogy állami támogatást kapjon a paksi atomerőmű bővítése.", link: "https://adatbazis.k-monitor.hu/adatbazis/cimkek/paks-ii" },
    { top: 65.5, left: 3.6, title: "Kék plakátok", text: "Az elmúlt években rengeteg helyen megjelent kék kormányhirdetések próbálták tematizálni az állampolgárok között a társadalomról és politikáról szóló diskurzust. Megjelentek az utcákon, a televízióban, a nyomtatott és online sajtóban. 2012 óta már biztosan elköltöttünk a kampányokra legalább 35 milliárd forintot, ahogy az a nyilvánosságra került adatokból tudható.", link: "https://adatbazis.k-monitor.hu/adatbazis/cimkek/kormanyzati-tajekoztato-kampanyok-2012-" },
    { top: 80, left: 70, title: "Infó 12", text: "Szöveg 12.", link: "https://adatbazis.k-monitor.hu" },
    { top: 85, left: 25, title: "Infó 13", text: "Szöveg 13.", link: "https://adatbazis.k-monitor.hu" },
    { top: 55, left: 50, title: "Infó 14", text: "Szöveg 14.", link: "https://adatbazis.k-monitor.hu" },
    { top: 40, left: 55, title: "Infó 15", text: "Szöveg 15.", link: "https://adatbazis.k-monitor.hu" },
    { top: 20, left: 5, title: "Infó 16", text: "Szöveg 16.", link: "https://adatbazis.k-monitor.hu" },
    { top: 59.2, left: 59.5, title: "Izsáki vadászház", text: "Az izsáki vadászpanziót a helyi fideszes polgármester cége, a Mondok Kft. építette EU-s pályázati pénzből. Mondok József cége 2014-ben indult a Darányi Ignác Terv pályázaton, és 35 millió forintot nyert, mint később kiderült, a bírálóbizottság tagjaként. Noha nyilvántartásba került a ház, mégsem üzemelt rendeltetésszerűen mint szálláshely: egyedüli használói a polgármester és közeli ismerősei voltak. Januárban a Miniszterelnökség vizsgálatot indított az ügyben. A Miniszterelnökség vizsgálata megállapította, hogy a szálláshelyet szabálytalanul, magáncélra használják, az ingatlant túlnyomóan Mondok József és ismeretségi köre veszi igénybe, ezért a Magyar Államkincstár a támogatási jogosultság megszüntetésével egyidejűleg a kifizetett támogatás visszafizetésére kötelezte a Mondok Kft.-t.", link: "https://adatbazis.k-monitor.hu" },
    { top: 69.5, left: 34.5, title: "MNB alapítványok", text: "A Matolcsy György vezette Magyar Nemzeti Bank 266 milliárd forint közpénzt juttatott az általa létrehozott Pallas Athéné alapítványoknak. Az alapítványok mintegy 197 milliárd forintot állampapírokba fektettek, a fennmaradó összeg elköltésével kapcsolatban azonban számos kritika érte az alapítványokat mind a költések módját (közbeszerzés hiánya, átláthatóság), mind azok tartalmát illetően. A jegybank saját közgazdasági képzéseket indít, amelyek nem a „bukott neoliberális tanokat” hirdetik, Matolcsy szavaival. A Transparency International szerint az MNB által az alapítványokon keresztül véghezvitt közpénzköltés börtönbüntetéssel járó hűtlen kezelést valósíthatott meg. 2016. április 22-én számos szerződés közzétételét sikerült elérni. Kiderült: másfél év alatt több mint 500 millió forintot fizettek ki a Vs.hu portált is kiadó New Wave Production Kft.-nek, 70 millió forintot juttattak a Matolcsy György jegybankelnökről írt Sakk és póker c. könyv szerzőjének, továbbá az alapítványok egyenként havi 750 ezer forintért megrendelték a BanKonzult Kft.-től a „Hazai és globális gazdasági és pénzügyi trendek” c., tartalmilag azonos elemzést.", link: "https://adatbazis.k-monitor.hu" },
    { top: 40, left: 15, title: "Infó 19", text: "Szöveg 19.", link: "https://adatbazis.k-monitor.hu" }
];
// Jelenleg 19 elem van. Ezeket a koordinátákat és tartalmakat kell majd Önnek kézzel véglegesítenie!

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
    const colors = ['#C03B1A', '#0363A0', '#FFCE0A', '#4caf50', '#ff9800', '#9c27b0'];
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
    
    // --- BIZTOSÍTOTT KIEGÉSZÍTÉS ---
    setupInfoPoints(); // Létrehozzuk az infopontokat a táblán
}

function createPlayerPin(color, index) {
    const pin = document.createElement('div');
    pin.classList.add('player-pin');
    pin.style.backgroundColor = color;
    // Megjegyzés: A CSS már kezeli a középre igazítást a transform: translate(-50%, -50%)-vel.
    // Nem teszünk ide fix eltolásokat (pl. index * 2px), mert az csak fix felbontáson jó.

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
    const rollBtn = document.getElementById('roll-btn');
    const diceDisplay = document.getElementById('dice-display');

    // 1. Biztonsági ellenőrzés
    if (players.length === 0 || rollBtn.disabled) {
        if (players.length === 0) {
            alert("Kérlek, indítsd el a játékot a 'Játék indítása' gombbal!");
        }
        return; 
    }

    rollBtn.disabled = true; // Letiltjuk a gombot a pörgetés idejére
    diceDisplay.style.fontWeight = 'normal'; // Visszaállítjuk normálra

    const diceValue = Math.floor(Math.random() * 6) + 1;
    let spinCount = 0;
    const totalSpinTime = 2000; // 2000 ms = 2 másodperc
    const intervalTime = 100; // 100 ms-onként pörög a szám

    // 2. Pörgetés animáció elindítása
    const spinInterval = setInterval(() => {
        // Véletlenszerű számot írunk ki a pörgetés illúziójához
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceDisplay.innerText = randomValue;

        spinCount += intervalTime;

        // 3. Pörgetés befejezése (2 másodperc után)
        if (spinCount >= totalSpinTime) {
            clearInterval(spinInterval);
            
            // Kiírjuk a tényleges dobott számot és FÉLKÖVÉRRE állítjuk
            diceDisplay.innerText = diceValue; 
            diceDisplay.style.fontWeight = 'bold'; 

            // Ellenőrizzük, hogy hatos-e
            const rolledSix = (diceValue === 6);
            
            // 4. Játéklogika folytatása (kis késleltetéssel)
            setTimeout(() => {
                // Meghívjuk a mozgató funkciót a dobott értékkel és a hatos infóval
                movePlayer(diceValue, rolledSix);
            }, 500); 
        }
    }, intervalTime);
}

// JAVÍTOTT movePlayer: Lépés animáció + Visszalépés (túldobás) logika
function movePlayer(steps, rolledSix) {
    if (isGameOver) return;

    const player = players[currentPlayerIndex];
    const finalSquare = coordinates.length - 1; // 40-es mező
    const currentPos = player.position;
    const targetPos = currentPos + steps;
    
    let movePath = [];

    // Visszalépés (Túldobás) logika
    if (targetPos > finalSquare) {
        const overshoot = targetPos - finalSquare;
        
        // Előre a célig
        for (let i = currentPos + 1; i <= finalSquare; i++) {
            movePath.push(i);
        }
        // Visszafelé az overshoot mértékével
        for (let i = 1; i <= overshoot; i++) {
            movePath.push(finalSquare - i);
        }
        
        // JAVÍTÁS: Túldobásnál is megtartjuk az extra dobás jogát, ha 6-os volt
        // A jog elvesztését csak a győzelem (checkTile) vagy a kör vége (endTurn) kezeli.
        player.rolledSix = rolledSix; 
    } else {
        // Normál lépés
        for (let i = currentPos + 1; i <= targetPos; i++) {
            movePath.push(i);
        }
        player.position = targetPos;
        player.rolledSix = rolledSix; // Elmentjük, hogy hatos volt-e
    }

    // Animáció
    let stepIndex = 0;
    
    function animateStep() {
        if (stepIndex < movePath.length) {
            const nextPos = movePath[stepIndex];
            player.position = nextPos;
            movePinVisual(player);
            stepIndex++;
            setTimeout(animateStep, 400); // 400ms lépésenként
        } else {
            // Animáció vége - Ellenőrizzük a mezőt
            checkTile(player);
        }
    }
    
    animateStep();
}

function movePinVisual(player) {
    const coord = coordinates[player.position];
    if (coord) {
        // Dinamikus eltolás százalékban, hogy a bábuk ne fedjék el egymást.
        // A 0.5% az 1.8%-os bábumérethez képest megfelelő eltolást biztosít.
        const offset = players.indexOf(player) * 0.5; 
        
        player.element.style.top = `${coord.top + offset}%`;
        player.element.style.left = `${coord.left + offset}%`;
    }
}

function checkTile(player) {
    const pos = player.position;
    
    // Győzelem ellenőrzése
    if (pos === coordinates.length - 1) {
        isGameOver = true;
        showPopup({ title: "Győztél!", text: `${player.name} megnyerte a játékot!`, target: null });
        document.getElementById('roll-btn').disabled = true;
        return;
    }

    // Szabályok ellenőrzése (Létra/Csúszda)
    if (rules[pos]) {
        showPopup(rules[pos]);
    } else {
        // Ha nincs akció, jön a kör vége (vagy extra dobás)
        endTurn();
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
    
    // ÚJ: Ha a játék véget ért, a popup bezárása után jön az újrakezdés
    if (isGameOver) {
        resetGame(); // Ezzel hívjuk meg a játék alaphelyzetbe állítását
        return; 
    }

    if (pendingMove !== null) {
        const player = players[currentPlayerIndex];
        // Speciális mozgás (csúszda/létra)
        player.position = pendingMove;
        movePinVisual(player);
        pendingMove = null;
        
        // Ugrás után elveszik az extra dobás joga
        player.rolledSix = false; 
        
        setTimeout(() => {
             endTurn();
        }, 550); // Várjuk meg a bábu ugrását
    } else {
        endTurn();
    }
}

function endTurn() {
    const player = players[currentPlayerIndex];
    document.getElementById('roll-btn').disabled = false;

    // Ha hatost dobott (és nem vesztette el a jogot pl. túldobás vagy popup miatt), újra ő jön
    if (player.rolledSix) {
        document.getElementById('current-player-info').innerText = `${player.name} újra dobhat (Hatos!).`;
        player.rolledSix = false; // Reseteljük, hogy a kövi dobásnál újra kelljen hatost dobni
        // Nem növeljük a currentPlayerIndex-et, tehát ugyanaz a játékos marad
    } else {
        // Következő játékos
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length) {
            currentPlayerIndex = 0;
        }
        updatePlayerInfo();
    }
}

// --- Infopont Funkciók ---

// Infopontok létrehozása és táblára helyezése
function setupInfoPoints() {
    const container = document.getElementById('info-points-container');
    container.innerHTML = ''; // Töröljük a korábbiakat

    infoPointsData.forEach(data => {
        const point = document.createElement('div');
        point.classList.add('info-point');
        
        // Elhelyezés a megadott koordináták alapján
        point.style.top = data.top + '%';
        point.style.left = data.left + '%';
        
        // Kattintás esetén megnyitja az infopopupot
        point.addEventListener('click', () => showInfoPopup(data));
        
        container.appendChild(point);
    });
}

// Info Popup megjelenítése
function showInfoPopup(data) {
    document.getElementById('info-modal-title').innerText = data.title;
    document.getElementById('info-modal-text').innerText = data.text;
    document.getElementById('info-modal-link').href = data.link;

    document.getElementById('info-modal').classList.add('active');
}

// Info Popup bezárása
function closeInfoModal() {
    document.getElementById('info-modal').classList.remove('active');
}


// --- Futtatás beállítása a játék indításakor ---
// MEGJEGYZÉS: A 'startGame' funkciót is módosítani kell, hogy hívja ezt a funkciót!

// --- Játék Vége és Újrakezdés ---

function resetGame() {
    // 1. Bábuk eltávolítása a tábláról
    players.forEach(player => {
        if (player.element && player.element.parentNode) {
            player.element.parentNode.removeChild(player.element);
        }
    });
    
    // 2. Globális állapotok visszaállítása
    players = [];
    currentPlayerIndex = 0;
    isGameOver = false;
    
    // 3. Vezérlőpult visszaállítása
    document.getElementById('current-player-info').innerText = 'Kezdéshez indítsd el a játékot.';
    document.getElementById('roll-btn').disabled = false;
    document.getElementById('dice-display').innerText = '🎲';
    document.getElementById('dice-display').style.fontWeight = 'normal';
    
    // 4. Setup képernyő megjelenítése
    document.getElementById('setup-screen').classList.add('active');
    document.getElementById('player-names-container').innerHTML = ''; // Játékos nevek mezőinek ürítése
    document.getElementById('start-game-btn').style.display = 'none'; // Játék indítása gomb elrejtése
}

// --- További interakciók ---

// Space gomb lenyomásának figyelése
document.addEventListener('keydown', function(event) {
    // Ellenőrizzük, hogy a lenyomott billentyű a Space (szóköz)
    if (event.code === 'Space' || event.key === ' ') {
        
        // Megakadályozzuk az alapértelmezett böngésző funkciót (pl. görgetés)
        // Különösen fontos a Space gombnál!
        event.preventDefault(); 
        
        // Elhívjuk a kockadobó funkciót
        rollDice();
    }
});