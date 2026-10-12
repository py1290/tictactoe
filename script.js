// ============================================================
// ۰) تنظیمات قابل تغییر
// ============================================================

// ایمیل پشتیبانی: این رو با ایمیل خودت عوض کن
const SUPPORT_EMAIL = "tic.tac.toe.2027p@gmail.com";

// بعد از این تعداد حرکتِ جابجایی بدون برنده، بازی مساوی می‌شه
const MOVE_LIMIT = 40;


// ============================================================
// ۱) عناصر صفحه
// ============================================================
const buttons = document.querySelectorAll("#board button");
const restartButton = document.querySelector("#restart");
const menuButton = document.querySelector("#menu-btn");
const startX = document.querySelector("#startX");
const startO = document.querySelector("#startO");
const turnText = document.querySelector("#turn");
const winnerText = document.querySelector("#winner");
const moveInfo = document.querySelector("#move-info");

// منوها
const modeMenu = document.querySelector("#mode-menu");
const difficultyMenu = document.querySelector("#difficulty-menu");
const sideMenu = document.querySelector("#side-menu");
const startPanel = document.querySelector("#start-panel");
const modeTwoButton = document.querySelector("#modeTwo");
const modeBotButton = document.querySelector("#modeBot");
const levelButtons = document.querySelectorAll(".level-btn");
const sideButtons = document.querySelectorAll(".side-btn");

// امتیازشمار
const scoreboard = document.querySelector("#scoreboard");
const labelX = document.querySelector("#label-x");
const labelO = document.querySelector("#label-o");
const scoreXEl = document.querySelector("#score-x");
const scoreOEl = document.querySelector("#score-o");
const scoreDrawEl = document.querySelector("#score-draw");

// دکمه‌های بالای صفحه
const themeToggle = document.querySelector("#theme-toggle");
const soundToggle = document.querySelector("#sound-toggle");
const langToggle = document.querySelector("#lang-toggle");
const supportButton = document.querySelector("#support-button");
const helpButton = document.querySelector("#help-button");

// پنجره‌ها
const rulesOverlay = document.querySelector("#rules-overlay");
const rulesClose = document.querySelector("#rules-close");
const supportOverlay = document.querySelector("#support-overlay");
const supportClose = document.querySelector("#support-close");
const supportLink = document.querySelector("#support-link");
const copyEmailButton = document.querySelector("#copy-email");


// ============================================================
// ۲) ترجمه‌ها (فارسی / انگلیسی)
// ============================================================
const translations = {
    fa: {
        title: "بازی دوز",
        modeQuestion: "چطوری می‌خوای بازی کنی؟",
        modeTwo: "👥 دو نفره",
        modeBot: "🤖 تک نفره (با بات)",
        levelQuestion: "سطح بات رو انتخاب کن:",
        easy: "آسون",
        medium: "متوسط",
        hard: "سخت",
        sideQuestion: "با کدوم مهره بازی می‌کنی؟",
        draw: "مساوی",
        startTitle: "دست اول کی شروع کنه؟",
        restart: "↻ بازی جدید",
        menu: "☰ منوی اصلی",
        turn: "نوبت:",
        botSuffix: " (بات 🤖)",
        youSuffix: " (شما)",
        you: "تو",
        bot: "بات",
        moveInfo: "حرکت جابجایی: {n} از {limit}",
        winTwo: "{p} برنده شد! 🎉",
        winYou: "تو برنده شدی! 🎉",
        winBot: "بات برنده شد! 🤖",
        winDraw: "مساوی شد! 🤝",
        rulesTitle: "📖 راهنمای بازی",
        rules1: "هر بازیکن ۳ مهره داره. اول به نوبت مهره‌هاتون رو روی خونه‌های خالی بذارید.",
        rules2: "بعد از اینکه هر دو نفر ۳ مهره گذاشتید، جابجایی شروع می‌شه: روی یکی از مهره‌های خودت کلیک کن، بعد روی هر خونه‌ی خالی.",
        rules3: "هر کس ۳ مهره‌اش رو توی یه خط (افقی، عمودی یا مورب) بچینه، برنده‌ست.",
        rules4: "اگه بعد از {limit} حرکت جابجایی کسی نبرده باشه، بازی مساوی می‌شه.",
        rules5: "فقط دست اول انتخاب می‌کنی کی شروع کنه؛ از دست بعد، بازنده‌ی دست قبل شروع می‌کنه (اگه مساوی شد، شروع‌کننده عوض می‌شه).",
        gotIt: "فهمیدم",
        supportTitle: "📧 پشتیبانی",
        supportText: "اگه مشکلی دیدی یا پیشنهادی داری، به این ایمیل پیام بده:",
        supportSubject: "پشتیبانی بازی دوز",
        copyEmail: "کپی ایمیل",
        copied: "کپی شد ✓",
        close: "بستن",
        tipTheme: "تغییر تم",
        tipSound: "صدا",
        tipLang: "تغییر زبان",
        tipSupport: "پشتیبانی",
        tipHelp: "راهنما",
        footerAbout: "درباره‌ی ما",
        footerPrivacy: "حریم خصوصی",
    },
    en: {
        title: "Tic-Tac-Toe",
        modeQuestion: "How do you want to play?",
        modeTwo: "👥 Two players",
        modeBot: "🤖 Single player (vs bot)",
        levelQuestion: "Choose the bot level:",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        sideQuestion: "Which piece do you want to play?",
        draw: "Draw",
        startTitle: "Who starts the first game?",
        restart: "↻ New game",
        menu: "☰ Main menu",
        turn: "Turn:",
        botSuffix: " (Bot 🤖)",
        youSuffix: " (You)",
        you: "You",
        bot: "Bot",
        moveInfo: "Move phase: {n} of {limit}",
        winTwo: "{p} wins! 🎉",
        winYou: "You win! 🎉",
        winBot: "Bot wins! 🤖",
        winDraw: "It's a draw! 🤝",
        rulesTitle: "📖 How to play",
        rules1: "Each player has 3 pieces. Take turns placing them on empty cells.",
        rules2: "Once both players have placed 3 pieces, the move phase begins: click one of your pieces, then click any empty cell.",
        rules3: "Whoever gets their 3 pieces in a line (horizontal, vertical or diagonal) wins.",
        rules4: "If nobody wins after {limit} moves in the move phase, the game is a draw.",
        rules5: "You only choose who starts the first game; after that, the loser of the previous game starts (after a draw, the starter switches).",
        gotIt: "Got it",
        supportTitle: "📧 Support",
        supportText: "Found a bug or have a suggestion? Send me an email:",
        supportSubject: "Tic-Tac-Toe support",
        copyEmail: "Copy email",
        copied: "Copied ✓",
        close: "Close",
        tipTheme: "Change theme",
        tipSound: "Sound",
        tipLang: "Change language",
        tipSupport: "Support",
        tipHelp: "Help",
        footerAbout: "About",
        footerPrivacy: "Privacy Policy",
    },
};

let lang = "fa";

// ترجمه‌ی یک کلید به زبان فعلی
function t(key) {
    return translations[lang][key];
}


// ============================================================
// ۳) وضعیت بازی
// ============================================================
document.title = t("title");

let board = Array(9).fill("");
let counts = { X: 0, O: 0 };          // تعداد مهره‌هایی که هر نفر گذاشته
let currentPlayer = "X";
let selectedIndex = null;             // مهره‌ای که برای جابجایی انتخاب شده
let gameStarted = false;
let gameOver = false;
let moveTurns = 0;                    // تعداد حرکت‌های جابجایی انجام شده
let winnerInfo = null;                // نتیجه‌ی بازی، برای ترجمه‌ی دوباره‌ی پیام برنده

// تنظیمات بازی
let gameMode = null;                  // "two" یا "bot"
let setupDone = false;                // یعنی منوها تموم شدن
let difficulty = "hard";              // "easy" | "medium" | "hard"
let humanPlayer = "X";                // مهره‌ی انسان در حالت تک نفره
let botPlayer = "O";                  // مهره‌ی بات
let botBusy = false;                  // وقتی بات داره فکر می‌کنه، کلیک انسان نادیده گرفته می‌شه
let botTimer = null;
let lastStarter = null;               // کی دست قبل شروع کرده (null = هنوز دست اول شروع نشده)

// امتیازها (تا وقتی به منوی اصلی برنگردی حفظ می‌شن)
let scores = { X: 0, O: 0, draw: 0 };

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


// ============================================================
// ۴) صدا (با Web Audio، بدون نیاز به فایل صوتی)
// ============================================================
let soundOn = true;
let audioCtx = null;

function playTone(freq, duration, type, delay) {
    if (!soundOn) return;

    try {
        // AudioContext باید بعد از اولین کلیک کاربر ساخته بشه
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = audioCtx.currentTime + (delay || 0);

        osc.type = type || "sine";
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + duration);
    } catch (e) {}
}

const sounds = {
    place: function () { playTone(440, 0.12); },
    select: function () { playTone(660, 0.08); },
    move: function () { playTone(520, 0.12); },
    win: function () {
        [523, 659, 784, 1047].forEach(function (f, i) {
            playTone(f, 0.2, "triangle", i * 0.15);
        });
    },
    lose: function () {
        [392, 330, 262].forEach(function (f, i) {
            playTone(f, 0.25, "triangle", i * 0.2);
        });
    },
    draw: function () {
        playTone(300, 0.25, "sawtooth");
        playTone(240, 0.3, "sawtooth", 0.25);
    },
};

function setSound(on) {
    soundOn = on;
    soundToggle.textContent = on ? "🔊" : "🔇";
    try {
        localStorage.setItem("sound", on ? "on" : "off");
    } catch (e) {}
}

soundToggle.addEventListener("click", function () {
    setSound(!soundOn);
    if (soundOn) sounds.select();
});


// ============================================================
// ۵) توابع کمکی و نمایش
// ============================================================

function other(player) {
    return player === "X" ? "O" : "X";
}

// اگه کسی برده باشه، خط برنده (مثلاً [0,1,2]) رو برمی‌گردونه، وگرنه null
function getWinningLine(b) {
    for (const combo of winningCombinations) {
        const [a, c, d] = combo;
        if (b[a] !== "" && b[a] === b[c] && b[a] === b[d]) {
            return combo;
        }
    }
    return null;
}

// تغییر متن و رنگ نوبت
function updateTurn() {
    let text = t("turn") + " " + currentPlayer;

    if (gameMode === "bot") {
        text += currentPlayer === botPlayer ? t("botSuffix") : t("youSuffix");
    }

    turnText.textContent = text;
    turnText.classList.remove("x-turn", "o-turn");
    turnText.classList.add(currentPlayer === "X" ? "x-turn" : "o-turn");
}

// شمارنده‌ی حرکت‌های جابجایی (فقط وقتی فاز جابجایی شروع شده)
function updateMoveInfo() {
    if (counts.X === 3 && counts.O === 3) {
        moveInfo.textContent = t("moveInfo")
            .replace("{n}", moveTurns)
            .replace("{limit}", MOVE_LIMIT);
    } else {
        moveInfo.textContent = "";
    }
}

// امتیازشمار
function updateScoreboard() {
    if (gameMode === "bot") {
        labelX.textContent =
            (humanPlayer === "X" ? t("you") : t("bot")) + " (X)";
        labelO.textContent =
            (humanPlayer === "O" ? t("you") : t("bot")) + " (O)";
    } else {
        labelX.textContent = "X";
        labelO.textContent = "O";
    }

    scoreXEl.textContent = scores.X;
    scoreOEl.textContent = scores.O;
    scoreDrawEl.textContent = scores.draw;
}

// پیام برنده / مساوی (از روی winnerInfo ساخته می‌شه تا با عوض شدن زبان هم درست بمونه)
function updateWinnerText() {
    if (winnerInfo === null) {
        winnerText.textContent = "";
    } else if (winnerInfo.type === "draw") {
        winnerText.textContent = t("winDraw");
    } else if (gameMode === "bot") {
        winnerText.textContent =
            winnerInfo.winner === botPlayer ? t("winBot") : t("winYou");
    } else {
        winnerText.textContent = t("winTwo").replace("{p}", winnerInfo.winner);
    }
}

// آرایه‌ی board رو روی دکمه‌ها نشون می‌ده
function render(winLine) {
    buttons.forEach(function (button, i) {
        button.textContent = board[i];
        button.className = "";

        if (board[i] === "X") button.classList.add("x-piece");
        if (board[i] === "O") button.classList.add("o-piece");
        if (i === selectedIndex) button.classList.add("selected-piece");
        if (winLine && winLine.includes(i)) button.classList.add("winning-cell");

        button.disabled = gameOver;
    });
}

function playWinnerAnimation() {
    winnerText.style.animation = "none";
    void winnerText.offsetWidth;
    winnerText.style.animation = "winnerAnimation 0.5s ease";
}


// ============================================================
// ۶) پایان بازی و تغییر نوبت
// ============================================================

function endGame(winLine) {
    const winner = board[winLine[0]];
    gameOver = true;
    scores[winner]++;
    winnerInfo = { type: "win", winner: winner };

    render(winLine);
    updateScoreboard();
    updateWinnerText();
    playWinnerAnimation();

    if (gameMode === "bot" && winner === botPlayer) {
        sounds.lose();
    } else {
        sounds.win();
    }
}

function endDraw() {
    gameOver = true;
    scores.draw++;
    winnerInfo = { type: "draw" };

    render(null);
    updateScoreboard();
    updateWinnerText();
    playWinnerAnimation();
    sounds.draw();
}

// بعد از هر حرکت (انسان یا بات) این تابع صدا زده می‌شه
// kind: "place" (گذاشتن مهره) یا "move" (جابجایی)
function finishTurn(kind) {
    if (kind === "move") moveTurns++;

    const winLine = getWinningLine(board);
    render(winLine);
    updateMoveInfo();

    if (winLine) {
        endGame(winLine);
        return;
    }

    if (moveTurns >= MOVE_LIMIT) {
        endDraw();
        return;
    }

    if (kind === "move") sounds.move(); else sounds.place();

    currentPlayer = other(currentPlayer);
    updateTurn();

    if (gameMode === "bot" && currentPlayer === botPlayer) {
        scheduleBotMove();
    }
}


// ============================================================
// ۷) کلیک انسان روی خانه‌ها
// ============================================================

function handleCellClick(i) {
    if (!gameStarted || gameOver || botBusy) return;

    // فاز ۱: گذاشتن مهره (هر نفر ۳ مهره)
    if (counts[currentPlayer] < 3) {
        if (board[i] !== "") return;

        board[i] = currentPlayer;
        counts[currentPlayer]++;
        finishTurn("place");
        return;
    }

    // فاز ۲: جابجایی مهره
    // کلیک روی مهره‌ی خودت = انتخاب (یا عوض کردن انتخاب)
    if (board[i] === currentPlayer) {
        selectedIndex = i;
        render(null);
        sounds.select();
        return;
    }

    // کلیک روی خانه‌ی خالی بعد از انتخاب = حرکت
    if (selectedIndex !== null && board[i] === "") {
        board[selectedIndex] = "";
        board[i] = currentPlayer;
        selectedIndex = null;
        finishTurn("move");
    }
}

buttons.forEach(function (button, i) {
    button.addEventListener("click", function () {
        handleCellClick(i);
    });
});


// ============================================================
// ۸) مغز بات
// ============================================================

// همه‌ی حرکت‌های ممکن برای یک بازیکن
// from === null یعنی «گذاشتن مهره‌ی جدید»، وگرنه «جابجایی از خانه‌ی from»
function getMoves(b, player, cnt) {
    const moves = [];
    const empties = [];
    b.forEach(function (v, i) {
        if (v === "") empties.push(i);
    });

    if (cnt[player] < 3) {
        empties.forEach(function (to) {
            moves.push({ from: null, to: to });
        });
    } else {
        b.forEach(function (v, from) {
            if (v === player) {
                empties.forEach(function (to) {
                    moves.push({ from: from, to: to });
                });
            }
        });
    }
    return moves;
}

// حرکت رو روی «کپی» صفحه اجرا می‌کنه (صفحه‌ی اصلی دست نمی‌خوره)
function applyMove(b, cnt, player, move) {
    const nb = b.slice();
    const nc = { X: cnt.X, O: cnt.O };

    if (move.from === null) {
        nc[player]++;
    } else {
        nb[move.from] = "";
    }
    nb[move.to] = player;

    return { board: nb, counts: nc };
}

// امتیاز تقریبی وقتی بات بیشتر از عمق مجاز جلو نمی‌ره
function evaluate(b, me) {
    const opp = other(me);
    let score = 0;

    for (const combo of winningCombinations) {
        let mine = 0;
        let theirs = 0;
        combo.forEach(function (i) {
            if (b[i] === me) mine++;
            if (b[i] === opp) theirs++;
        });

        if (theirs === 0) score += mine === 2 ? 3 : mine === 1 ? 1 : 0;
        if (mine === 0) score -= theirs === 2 ? 3 : theirs === 1 ? 1 : 0;
    }

    if (b[4] === me) score += 2;   // وسط ارزشمنده
    if (b[4] === opp) score -= 2;
    return score;
}

// مینیمکس با هرس آلفا-بتا
// depth = چند حرکت دیگه جلو بره، bot = کسی که امتیازها از دید اونه
function search(b, cnt, player, depth, alpha, beta, bot) {
    const line = getWinningLine(b);
    if (line) {
        // برد سریع‌تر امتیاز بیشتر داره (depth بیشتر = زودتر)
        return b[line[0]] === bot ? 100 + depth : -(100 + depth);
    }
    if (depth === 0) return evaluate(b, bot);

    const moves = getMoves(b, player, cnt);
    const maximizing = player === bot;
    let best = maximizing ? -Infinity : Infinity;

    for (const move of moves) {
        const next = applyMove(b, cnt, player, move);
        const score = search(
            next.board, next.counts, other(player),
            depth - 1, alpha, beta, bot
        );

        if (maximizing) {
            best = Math.max(best, score);
            alpha = Math.max(alpha, best);
        } else {
            best = Math.min(best, score);
            beta = Math.min(beta, best);
        }
        if (beta <= alpha) break;   // هرس: ادامه دادن فایده‌ای نداره
    }
    return best;
}

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// انتخاب حرکت بات بر اساس سطح
function chooseBotMove() {
    const moves = getMoves(board, botPlayer, counts);

    if (difficulty === "easy") {
        return randomItem(moves);
    }

    // متوسط: ۳۰٪ مواقع اشتباه می‌کنه و تصادفی بازی می‌کنه
    if (difficulty === "medium" && Math.random() < 0.3) {
        return randomItem(moves);
    }

    const depth = difficulty === "hard" ? 6 : 2;
    let bestScore = -Infinity;
    let bestMoves = [];

    for (const move of moves) {
        const next = applyMove(board, counts, botPlayer, move);
        const score = search(
            next.board, next.counts, other(botPlayer),
            depth - 1, -Infinity, Infinity, botPlayer
        );

        if (score > bestScore) {
            bestScore = score;
            bestMoves = [move];
        } else if (score === bestScore) {
            bestMoves.push(move);
        }
    }

    // بین حرکت‌های هم‌ارزش یکی رو تصادفی انتخاب می‌کنه تا بازی تکراری نشه
    return randomItem(bestMoves);
}

// بات با کمی تأخیر بازی می‌کنه تا حس «فکر کردن» داشته باشه
function scheduleBotMove() {
    botBusy = true;

    botTimer = setTimeout(function () {
        if (!gameStarted || gameOver) {
            botBusy = false;
            return;
        }

        const move = chooseBotMove();
        const result = applyMove(board, counts, botPlayer, move);
        board = result.board;
        counts = result.counts;
        selectedIndex = null;

        botBusy = false;
        finishTurn(move.from === null ? "place" : "move");
    }, 600);
}


// ============================================================
// ۹) منوها و شروع بازی
// ============================================================

function showStartChoice() {
    setupDone = true;
    scoreboard.classList.remove("hidden");
    startPanel.classList.remove("hidden");
    updateScoreboard();
    updateTurn();
}

modeTwoButton.addEventListener("click", function () {
    gameMode = "two";
    modeMenu.classList.add("hidden");
    showStartChoice();
});

modeBotButton.addEventListener("click", function () {
    gameMode = "bot";
    modeMenu.classList.add("hidden");
    difficultyMenu.classList.remove("hidden");
});

levelButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        difficulty = button.dataset.level;
        difficultyMenu.classList.add("hidden");
        sideMenu.classList.remove("hidden");
    });
});

sideButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        humanPlayer = button.dataset.side;
        botPlayer = other(humanPlayer);
        sideMenu.classList.add("hidden");
        showStartChoice();
    });
});

function startGame(first) {
    if (gameStarted || !setupDone) return;

    currentPlayer = first;
    lastStarter = first;                 // یادش می‌مونه تا دست بعد خودکار عوض بشه
    startPanel.classList.add("hidden");  // بعد از دست اول دیگه نمی‌پرسه
    gameStarted = true;
    updateTurn();

    if (gameMode === "bot" && currentPlayer === botPlayer) {
        scheduleBotMove();
    }
}

startX.addEventListener("click", function () {
    startGame("X");
});

startO.addEventListener("click", function () {
    startGame("O");
});


// ============================================================
// ۱۰) بازی جدید و برگشت به منو
// ============================================================

// صفحه رو خالی می‌کنه (امتیازها و تنظیمات دست نمی‌خورن)
function resetBoardState() {
    clearTimeout(botTimer);   // اگه بات وسط فکر کردنه، لغوش کن

    board = Array(9).fill("");
    counts = { X: 0, O: 0 };
    selectedIndex = null;
    gameStarted = false;
    gameOver = false;
    botBusy = false;
    moveTurns = 0;
    winnerInfo = null;
    currentPlayer = "X";

    render(null);
    updateTurn();
    updateMoveInfo();
    updateWinnerText();
}

// بازی جدید: همون حالت و تنظیمات، فقط دوباره شروع‌کننده رو انتخاب می‌کنی
restartButton.addEventListener("click", function () {
    if (!setupDone) return;

    // قبل از خالی کردن صفحه، شروع‌کننده‌ی دست بعد رو مشخص می‌کنیم
    let nextStarter = null;
    if (lastStarter !== null) {
        if (winnerInfo !== null && winnerInfo.type === "win") {
            nextStarter = other(winnerInfo.winner);   // بازنده شروع می‌کنه
        } else {
            nextStarter = other(lastStarter);         // مساوی یا بازی نیمه‌کاره: نوبتی
        }
    }

    resetBoardState();

    if (nextStarter !== null) {
        startGame(nextStarter);
    }
});

// منوی اصلی: همه‌چیز از اول، امتیازها هم صفر می‌شن
menuButton.addEventListener("click", function () {
    resetBoardState();

    gameMode = null;
    setupDone = false;
    humanPlayer = "X";
    botPlayer = "O";
    scores = { X: 0, O: 0, draw: 0 };
    updateScoreboard();
    updateTurn();

    lastStarter = null;   // با منوی اصلی، دوباره دست اول می‌پرسه
    scoreboard.classList.add("hidden");
    startPanel.classList.add("hidden");
    difficultyMenu.classList.add("hidden");
    sideMenu.classList.add("hidden");
    modeMenu.classList.remove("hidden");
});


// ============================================================
// ۱۱) پنجره‌های راهنما و پشتیبانی
// ============================================================

function closeOverlays() {
    rulesOverlay.classList.add("hidden");
    supportOverlay.classList.add("hidden");
}

helpButton.addEventListener("click", function () {
    closeOverlays();
    rulesOverlay.classList.remove("hidden");
});

supportButton.addEventListener("click", function () {
    closeOverlays();
    supportOverlay.classList.remove("hidden");
});

rulesClose.addEventListener("click", closeOverlays);
supportClose.addEventListener("click", closeOverlays);

// کلیک روی پس‌زمینه‌ی تیره هم پنجره رو می‌بنده
[rulesOverlay, supportOverlay].forEach(function (overlay) {
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) closeOverlays();
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeOverlays();
});

// لینک ایمیل (موضوع ایمیل هم با زبان فعلی ست می‌شه)
function updateSupportLink() {
    supportLink.textContent = SUPPORT_EMAIL;
    supportLink.href =
        "mailto:" + SUPPORT_EMAIL +
        "?subject=" + encodeURIComponent(t("supportSubject"));
}

// کپی متن؛ اگه مرورگر clipboard رو قبول نکرد، روش قدیمی‌تر
function copyText(text) {
    function fallback() {
        const area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        if (!ok) throw new Error("copy failed");
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).catch(fallback);
    }
    return Promise.resolve().then(fallback);
}

copyEmailButton.addEventListener("click", function () {
    copyText(SUPPORT_EMAIL).then(function () {
        copyEmailButton.textContent = t("copied");
        setTimeout(function () {
            copyEmailButton.textContent = t("copyEmail");
        }, 1500);
    }).catch(function () {});
});


// ============================================================
// ۱۲) تغییر زبان
// ============================================================

// همه‌ی متن‌های ثابت صفحه رو از روی data-i18n پر می‌کنه
function applyStaticTexts() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = t(el.dataset.i18n).replace("{limit}", MOVE_LIMIT);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
        el.title = t(el.dataset.i18nTitle);
    });
}

function setLanguage(newLang) {
    lang = newLang;

    // جهت صفحه: فارسی راست‌به‌چپ، انگلیسی چپ‌به‌راست
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.title = t("title");
    langToggle.textContent = newLang === "fa" ? "EN" : "فا";

    applyStaticTexts();
    updateTurn();
    updateMoveInfo();
    updateScoreboard();
    updateWinnerText();
    updateSupportLink();

    try {
        localStorage.setItem("lang", newLang);
    } catch (e) {}
}

langToggle.addEventListener("click", function () {
    setLanguage(lang === "fa" ? "en" : "fa");
});


// ============================================================
// ۱۳) تغییر تم روشن/تیره
// ============================================================
function setTheme(isLight) {
    document.body.classList.toggle("light", isLight);
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    try {
        localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {}
}

themeToggle.addEventListener("click", function () {
    setTheme(!document.body.classList.contains("light"));
});


// ============================================================
// ۱۴) شروع برنامه
// ============================================================
let savedLang = "fa";
try {
    setTheme(localStorage.getItem("theme") === "light");
    setSound(localStorage.getItem("sound") !== "off");
    savedLang = localStorage.getItem("lang") === "en" ? "en" : "fa";
} catch (e) {}

render(null);
setLanguage(savedLang);