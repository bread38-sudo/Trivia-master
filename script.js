const questionBank = {

    science: [
        { q: "Water's chemical formula?", options: ["H2O", "CO2", "O2", "H2"], answer: "H20" },
        { q: "Acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8 m/s²", "12 m/s²"], answer: "9.8m/s²" },
        { q: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: "Mars" },
        { q: "Light travels fastest in?", options: ["Vacuum", "Air", "Water", "Glass"], answer: "Vacuum" },
        { q: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
        { q: "Boiling point of water at sea level?", options: ["100°C", "90°C", "80°C", "120°C"], answer: "100°C" },
        { q: "What is the center of an atom called?", options: ["Electron", "Proton", "Nucleus", "Neutron"], answer: "100°C" },
        { q: "pH of neutral water?", options: ["7", "0", "14", "1"], answer: "7" },
        { q: "Force that opposes motion?", options: ["Gravity", "Friction", "Magnetism", "Centrifugal"], answer: "Friction" },
        { q: "Chemical symbol for gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Friction" },
        { q: "Main gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
        { q: "Unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere" },
        { q: "What causes tides?", options: ["Sun", "Moon", "Earth", "Mars"], answer: "Moon" },
        { q: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Heart"], answer: "Pancreas" },
        { q: "Light year measures?", options: ["Time", "Distance", "Speed", "Mass"], answer: "Distance" },
        { q: "Speed of light approx?", options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 km/s", "3×10^7 m/s"], answer: "3×10^8 m/s" },
        { q: "H2SO4 is?", options: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid"], answer: "Sulfuric Acid" },
        { q: "What is photosynthesis?", options: ["Process of breathing", "Food-making in plants", "Water absorption", "Respiration"], answer: "Food-making in plants" },
        { q: "Unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
        { q: "Which particle has negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], answer: "Electron" },
        { q: "Earth's core is mainly?", options: ["Iron & Nickel", "Oxygen", "Silicon", "Hydrogen"], answer: "Iron & Nickel" },
        { q: "What is refraction?", options: ["Bending of light", "Reflection", "Diffusion", "Absorption"], answer: "Bending of light" },
        { q: "Bohr model explains?", options: ["Atom structure", "Molecules", "Forces", "Elements"], answer: "Atom structure" },
        { q: "Unit of energy?", options: ["Watt", "Joule", "Ampere", "Newton"], answer: "Joule" },
        { q: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Nuclear Acid", "None"], answer: "Deoxyribonucleic Acid" }
    ],

    weaponry: [
        { q: "Which is a pistol?", options: ["AK-47", "Glock 17", "M16", "Uzi"], answer: "Glock 17" },
        { q: ".22 LR is a type of?", options: ["Rifle cartridge", "Pistol cartridge", "Shotgun shell", "Machine gun round"], answer: "Pistol cartridge" },
        { q: "What does 'BPS' stand for?", options: ["Bullets Per Second", "Barrel Pressure System", "Ballistics Performance Standard", "Bullet Power Scale"], answer: "Bullets Per Second" },
        { q: "Which is a sniper rifle?", options: ["M4 Carbine", "AWM", "Glock 17", "MP5"], answer: "AWM" },
        { q: "Bulletproof vests protect primarily against?", options: ["Blades", "Bullets", "Explosions", "Chemicals"], answer: "Bullets" },
        { q: "AK-47 is of which country origin?", options: ["USA", "Russia", "Germany", "China"], answer: "Russia" },
        { q: "Reloading a firearm means?", options: ["Cleaning", "Refilling ammo", "Repairing", "Painting"], answer: "Refilling ammo" },
        { q: "Caliber measures?", options: ["Length of barrel", "Bullet diameter", "Magazine size", "Gun weight"], answer: "Bullet diameter" },
        { q: "Shotgun spreads bullets called?", options: ["Slug", "Pellets", "Rounds", "Cartridges"], answer: "Pellets" },
        { q: "M16 is what type of gun?", options: ["Pistol", "Rifle", "Sniper", "SMG"], answer: "Rifle" },
        { q: "Revolver differs from pistol how?", options: ["Single bullet", "Rotating cylinder", "Automatic", "No trigger"], answer: "Rotating cylinder" },
        { q: "Suppressor aka?", options: ["Silencer", "Scope", "Trigger", "Magazine"], answer: "Silencer" },
        { q: "SMG stands for?", options: ["Single Machine Gun", "Sub Machine Gun", "Silent Machine Gun", "Super MG"], answer: "Sub Machine Gun" },
        { q: "Bullet speed depends on?", options: ["Gun powder", "Trigger", "Weight of shooter", "Color of barrel"], answer: "Gun powder" },
        { q: "AR-15 is a type of?", options: ["Rifle", "Shotgun", "SMG", "Pistol"], answer: "Rifle" },
        { q: "Magazine stores?", options: ["Gun oil", "Bullets", "Trigger", "Safety"], answer: "Bullets" },
        { q: "Muzzle is?", options: ["End of barrel", "Handle", "Magazine", "Sight"], answer: "End of barrel" },
        { q: "What is ballistics?", options: ["Science of motion of projectiles", "Science of bullets", "Gun design", "Weapon weight"], answer: "Science of motion of projectiles" },
        { q: "Most common bullet casing metal?", options: ["Aluminium", "Brass", "Copper", "Steel"], answer: "Brass" },
        { q: "Crosshair used for?", options: ["Aim", "Reload", "Safety", "Carry"], answer: "Aim" },
        { q: "Difference between FMJ and HP?", options: ["Design", "Material", "Bullet type", "Gun type"], answer: "Bullet type" },
        { q: "Bolt action rifles are?", options: ["Automatic", "Manual", "Semi-automatic", "Pump"], answer: "Manual" },
        { q: "Tracer rounds glow because?", options: ["Paint", "Fluorescent material", "Laser", "Reflection"], answer: "Fluorescent material" },
        { q: "Recoil affects?", options: ["Aiming", "Reload", "Sight", "Trigger"], answer: "Aiming" },
        { q: "What is a chamber?", options: ["Magazine slot", "Barrel part", "Trigger", "Handle"], answer: "Barrel part" }
    ],

    sports: [
        { q: "How many players in a football team?", options: ["10", "11", "12", "9"], answer: "11" },
        { q: "How many overs in ODI cricket?", options: ["50", "20", "60", "40"], answer: "50" },
        { q: "Basketball hoop height?", options: ["3 m", "3.05 m", "3.5 m", "2.5 m"], answer: "3.05 m" },
        { q: "Which country won 2018 FIFA World Cup?", options: ["Brazil", "France", "Germany", "Argentina"], answer: "France" },
        { q: "Longest tennis match record?", options: ["11h", "10h", "9h", "12h"], answer: "11h" },
        { q: "Olympics held every?", options: ["2 years", "4 years", "5 years", "3 years"], answer: "4 years" },
        { q: "Sport with puck?", options: ["Hockey", "Soccer", "Basketball", "Cricket"], answer: "Hockey" },
        { q: "Fastest serve in tennis approx?", options: ["250 km/h", "220 km/h", "200 km/h", "180 km/h"], answer: "250 km/h" },
        { q: "NBA full form?", options: ["National Basketball Association", "National Baseball Association", "New Basketball Academy", "National Boxing Association"], answer: "National Basketball Association" },
        { q: "Football World Cup first held?", options: ["1930", "1920", "1940", "1950"], answer: "1930" },
        { q: "Which is a martial art?", options: ["Judo", "Football", "Cricket", "Tennis"], answer: "Judo" },
        { q: "How many players in basketball?", options: ["5", "6", "7", "4"], answer: "5" },
        { q: "First Olympic Games city?", options: ["Athens", "Rome", "Paris", "London"], answer: "Athens" },
        { q: "100m world record holder?", options: ["Usain Bolt", "Carl Lewis", "Justin Gatlin", "Tyson Gay"], answer: "Usain Bolt" },
        { q: "Which sport uses shuttlecock?", options: ["Badminton", "Tennis", "Squash", "Table Tennis"], answer: "Badminton" },
        { q: "Cricket test match duration?", options: ["5 days", "3 days", "4 days", "2 days"], answer: "5 days" },
        { q: "Which sport uses a bow?", options: ["Archery", "Shooting", "Fencing", "Golf"], answer: "Archery" },
        { q: "Penalty kick in football?", options: ["11 meters", "9 meters", "10 meters", "12 meters"], answer: "11 meters" },
        { q: "Who won 2020 NBA Finals?", options: ["Lakers", "Heat", "Celtics", "Bulls"], anwswer: "Lakers" },
        { q: "Which country dominates table tennis?", options: ["China", "USA", "Germany", "Japan"], answer: "China" },
        { q: "Football goalie allowed to?", options: ["Touch ball anywhere", "Only inside box", "Kick only", "No rules"], answer: "Only inside box" },
        { q: "Marathon distance?", options: ["42.195 km", "40 km", "50 km", "45 km"], answer: "42.195" },
        { q: "Olympics held in Tokyo?", options: ["2020", "2016", "2018", "2022"], answer: "2020" },
        { q: "Which sport uses pommel horse?", options: ["Gymnastics", "Weightlifting", "Athletics", "Swimming"], answer: "Gymnastics" },
        { q: "FIFA World Cup highest scorer?", options: ["Müller", "Pelé", "Messi", "Ronaldo"], answer: "Müller" }
    ],

    interstellar: [
        { q: "Which galaxy is Earth in?", options: ["Milky Way", "Andromeda", "Triangulum", "Sombrero"], answer: "Milky Way" },
        { q: "What is a black hole?", options: ["Region of strong gravity", "Planet", "Star", "Asteroid"], answer: "Region of strong gravity" },
        { q: "Light-year measures?", options: ["Distance", "Time", "Speed", "Mass"], answer: "Distance" },
        { q: "Nearest star to Earth?", options: ["Proxima Centauri", "Sirius", "Alpha Centauri A", "Betelgeuse"], answer: "Proxima Centauri" },
        { q: "Planet known as Gas Giant?", options: ["Jupiter", "Earth", "Mars", "Venus"], answer: "Jupiter" },
        { q: "Hubble is a type of?", options: ["Telescope", "Rocket", "Satellite", "Probe"], answer: "Telescope" },
        { q: "Which planet has rings?", options: ["Saturn", "Mars", "Mercury", "Venus"], answer: "Saturn" },
        { q: "What is supernova?", options: ["Star explosion", "Galaxy", "Comet", "Asteroid"], answer: "Star explosion" },
        { q: "Dark matter is?", options: ["Invisible matter", "Light", "Gas", "Plasma"], answer: "Invisible matter" },
        { q: "First man in space?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"], answer: "Yuri Gagarin" },
        { q: "Escape velocity is?", options: ["Speed to leave planet", "Orbital speed", "Rotational speed", "Light speed"], answer: "Speed to leave planet" },
        { q: "Mars is called?", options: ["Red Planet", "Blue Planet", "Green Planet", "Gas Planet"], answer: "Red Planet" },
        { q: "Sun is classified as?", options: ["Star", "Planet", "Moon", "Asteroid"], answer: "Star" },
        { q: "Which planet spins backward?", options: ["Venus", "Earth", "Mars", "Jupiter"], answer: "Venus" },
        { q: "Largest planet?", options: ["Jupiter", "Saturn", "Earth", "Neptune"], answer: "Jupiter" },
        { q: "Blackhole at center of Milky Way?", options: ["Sagittarius A*", "Orion", "Andromeda Core", "Triangulum"], answer: "Sagittarius A*" },
        { q: "Which probe left solar system?", options: ["Voyager 1", "Apollo 11", "Hubble", "Curiosity"], answer: "Voyager 1" },
        { q: "Nebula is?", options: ["Cloud of gas & dust", "Planet", "Moon", "Asteroid belt"], answer: "Cloud of gas & dust" },
        { q: "Who proposed black holes?", options: ["Einstein", "Hawking", "Galileo", "Copernicus"], answer: "Einstein" },
        { q: "Dark energy causes?", options: ["Universe expansion", "Gravity", "Light", "Magnetism"], answer: "Universe expansion" },
        { q: "Most abundant element in universe?", options: ["Hydrogen", "Helium", "Oxygen", "Carbon"], answer: "Hydrogen" },
        { q: "Exoplanets are?", options: ["Planets outside Solar System", "Planets on Earth", "Stars", "Moons"], answer: "Planets outside Solar System" },
        { q: "Neutron stars are?", options: ["Collapsed stars", "Planets", "Black holes", "Galaxies"], answer: "Collapsed stars" },
        { q: "First telescope inventor?", options: ["Galileo", "Newton", "Einstein", "Kepler"], answer: "Galileo" },
        { q: "Event horizon is?", options: ["Black hole boundary", "Galaxy edge", "Planet surface", "Star core"], answer: "Black hole boundary" },
    ],

    videogames: [
        { q: "Who created Mario?", options: ["Nintendo", "Sega", "Sony", "Capcom"], answer: "Nintendo" },
        { q: "First Call of Duty release?", options: ["2003", "2005", "2001", "2000"], answer: "2003" },
        { q: "Minecraft developer?", options: ["Mojang", "Epic Games", "Valve", "Ubisoft"], answer: "Mojang" },
        { q: "Which is a battle royale game?", options: ["Fortnite", "FIFA", "Tetris", "Mario Kart"], answer: "Fortnite" },
        { q: "League of Legends is?", options: ["MOBA", "FPS", "RPG", "Puzzle"], answer: "MOBA" },
        { q: "Best-selling console game?", options: ["Wii Sports", "Halo", "Mario Kart", "Tetris DS"], answer: "Wii Sports" },
        { q: "PUBG stands for?", options: ["PlayerUnknown's Battlegrounds", "Pro Ultimate Battle Game", "Player Ultimate Battle", "Public Battlegrounds"], answer: "PlayerUnknown's Battlegrounds" },
        { q: "Pokemon first released?", options: ["1996", "1998", "2000", "1992"], answer: "1996" },
        { q: "First PlayStation console year?", options: ["1994", "1996", "1992", "1998"], answer: "1994" },
        { q: "Which game uses creepers?", options: ["Minecraft", "Roblox", "Terraria", "Fortnite"], answer: "Minecraft" },
        { q: "FIFA series genre?", options: ["Sports", "Action", "RPG", "Puzzle"], answer: "Sports" },
        { q: "GTA setting is?", options: ["Open-world", "Linear", "2D platformer", "Text-based"], answer: "Open-world" },
        { q: "Which game is FPS?", options: ["Counter-Strike", "Mario Kart", "Minecraft", "Zelda"], answer: "Counter-Strike" },
        { q: "Mortal Kombat series genre?", options: ["Action-Adventure", "Racing", "Sports", "Fighting"], answer: "Fighting" },
        { q: "Halo main protagonist?", options: ["Master Chief", "Marcus", "Doomguy", "Link"], answer: "Master Chief" },
        { q: "Which console is Nintendo Switch?", options: ["Hybrid", "Home-only", "Portable-only", "PC"], answer: "Hybrid" },
        { q: "Which game is sandbox?", options: ["Minecraft", "FIFA", "COD", "Tetris"], answer: "Minecraft" },
        { q: "Who is Sonic?", options: ["Speedster", "Mario", "Link", "Pikachu"], answer: "Speedster" },
        { q: "Among Us genre?", options: ["Party", "FPS", "Racing", "Puzzle"], answer: "Party" },
        { q: "First Fortnite release?", options: ["2017", "2015", "2016", "2018"], answer: "2017" },
        { q: "Which is a MOBA game?", options: ["Dota 2", "Overwatch", "Minecraft", "FIFA"], answer: "Dota 2" },
        { q: "Candy Crush genre?", options: ["Puzzle", "RPG", "FPS", "Sports"], answer: "Puzzle" },
        { q: "First Xbox release?", options: ["2001", "2000", "1999", "2002"], answer: "2001" },
        { q: "Steam is?", options: ["Game platform", "Console", "Game controller", "PC hardware"], answer: "Game platform" },
        { q: "Who is Lara Croft?", options: ["Tomb Raider protagonist", "Mario character", "Link character", "Sonic character"], answer: "Tomb Raider protagonist" }
    ]
};

let questions = [];
let current = 0;
let answered = false;
let score = 0;
let attempts = 0;
let timer = null;
let timeLeft = 15;

const topicScreen = document.getElementById("topicScreen");
const quizScreen = document.getElementById("quizScreen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const topicTitle = document.getElementById("topicTitle");
const scoreEl = document.getElementById("score");
const attemptsEl = document.getElementById("attempts");
const progress = document.getElementById("progress");
const timerEl = document.getElementById("timer");



function startQuiz(topic) {
    questions = [...questionBank[topic]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 15);


    topicTitle.textContent = topic.toUpperCase();

    topicScreen.style.display = "none";
    quizScreen.style.display = "block";

    current = 0;

    score = 0;
    attempts = 0;
    scoreEl.textContent = "Score: 0";
    attemptsEl.textContent = "Attempts: 0";


    nextBtn.style.display = "block";
    nextBtn.disabled = true;

    progress.style.width = "0%";

    loadQuestion();
}

function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    optionsEl.innerHTML = "";

    progress.style.width = `${(current / 15) * 100}%`;
    startTimer();


    const q = questions[current];
    questionEl.textContent = `(${current + 1}/15) ${q.q}`;


    const shuffled = [...q.options].sort(() => Math.random() - 0.5);

    shuffled.forEach(opt => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;

        div.onclick = () => {
            if (answered) return;

            clearInterval(timer);
            answered = true;

            attempts++;
            attemptsEl.textContent = "Attempts: " + attempts;

            if (opt === q.answer) {
                score++;
                scoreEl.textContent = "Score: " + score;
            }

            nextBtn.disabled = false;


            document.querySelectorAll(".option")
                .forEach(o => o.classList.add("disabled"));

            div.style.background = opt === q.answer ? "green" : "red";
        };


        optionsEl.appendChild(div);
    });
}

nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Topic Completed,Good job 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";

        progress.style.width = "100%";
        const topic = topicTitle.textContent.toLowerCase();
        saveToLeaderboard(topic);
        showLeaderboard(topic);


    }
};
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timerEl.textContent = "15s";

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft + "s";

        if (timeLeft === 0) {
            clearInterval(timer);
            autoLock();
        }
    }, 1000);
}
function autoLock() {
    if (answered) return;

    answered = true;
    nextBtn.disabled = false;

    document.querySelectorAll(".option").forEach(o => {
        o.classList.add("disabled");
        if (o.textContent === questions[current].answer) {
            o.style.background = "green";
        }
    });
}


function saveToLeaderboard(topic) {
    const key = "leaderboard_" + topic;
    const data = JSON.parse(localStorage.getItem(key)) || [];

    data.push({
        name: username,
        score: score,
        attempts: attempts
    });

    data.sort((a, b) => b.score - a.score);

    localStorage.setItem(key, JSON.stringify(data.slice(0, 5)));
}
function showLeaderboard(topic) {
    const key = "leaderboard_" + topic;
    const data = JSON.parse(localStorage.getItem(key)) || [];

    leaderboardList.innerHTML = "";

    data.forEach((entry, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${entry.name} — ${entry.score} pts (${entry.attempts} attempts)`;
        leaderboardList.appendChild(li);
    });

    quizScreen.style.display = "none";
    leaderboardScreen.style.display = "block";
}

