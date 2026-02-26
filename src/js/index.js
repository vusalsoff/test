// ===================== TEMPERAMENT KEYS =====================
const J_YES = new Set([
  1, 3, 8, 10, 13, 17, 22, 25, 27, 39, 44, 46, 49, 53, 56,
]);
const J_NO = new Set([5, 15, 20, 29, 32, 34, 37, 41, 51]);
const L_YES = new Set([
  2, 4, 7, 9, 11, 14, 16, 19, 21, 23, 26, 28, 31, 33, 35, 38, 40, 43, 45, 47,
  50, 52, 55, 57,
]);
const N_YES = new Set([6, 24, 36]);
const N_NO = new Set([12, 18, 30, 42, 48, 54]);

const TEMPERAMENT_TEXT = {
  Melanxolik:
    "Melanxolikdir bu temperament tipinə mənsub hərbçilər isə hər han¬sı yeni şəraitə pis uyğunlaşır, yeni qaydaları könülsüz, sanki öz¬lə¬ri¬¬nin daxili təzyiqi altında qəbul edirlər. Belə hərbçilər ünsiyyətə gir¬¬məkdən çəkinir, insanlarla ünsiyyətdə olarkən sıxılır, utan¬caq¬lı¬ğı ilə seçilir, heç vaxt söhbətə birinci başlamır, tənhalığa daha çox üs¬tünlük verir, özünəqapanan, tez inciyən və küsəyən olurlar. Bu tem¬¬perament tipini digərlərindən fərqləndirən xüsusiy¬yətlər yük¬sək sensitivlik (digər bütün temperament tiplərində sensitivlik zəif¬dir), aşağı reaktivlik və qeyri-fəallıq (bu cəhət də ancaq melanxo¬lik¬¬lərə aiddir), ətalətlilik, yüksək emosional oya¬nıq¬lıq, depressiv sə¬ciy¬yəli emosiyalar, ağır templi reaksiya¬lar¬dır. Adə¬tən, ən çox dep¬¬ressiyaya düşən, eyforiyanın nə olduğunu çox nadir hallarda bi¬¬lən, həmişə hər hansı cəhəti ilə başqalarından pis oldu¬ğunu fi¬kir¬¬ləşən, dünyaya gələn gündən bədbəxt doğulduğuna özünü inan¬¬dıran insanlar melanxolik temperament tipinə aid edilirlər. Am¬¬ma bir cəhəti də qeyd etmək vacibdir ki, melanxolik tipli in¬san¬lar¬da məsuliyyət, cavabdehlik hissi daha yüksək olur. Bu tem¬pe¬ra¬ment tipinə malik hərbçilər onlara verilən tapşırıqları kö¬nülsüz və inamsız qəbul etsələr də, son nəticədə tapşırığı daha ba-ca¬rıq¬la yerinə yetirirlər.",
  Fleqmatik:
    " Fleqmatikdir bu temperament tipinə mənsub hərbçilərdə emosional ta¬raz¬lığın yüksək olması, əsəbilik dərəcəsinin aşağı, kon¬kor¬dant¬lı¬ğın yuxarı olması, onlarda ekstravertliyin deyil, özünəqapanmanın üs¬tünlük təşkil etməsi bu tip insanların daha təmkinli tip kimi ta¬nın¬masına gətirib çıxarır. Onlar, adətən, çox soyuqqanlı, ada¬ma¬yo¬vuşmaz olur, başqa adamlara maraq göstərmir, əksinə, də¬rindən özünütəhlilə meyilli olur, tələsik, “isti başla” qərarlar qə¬bul et¬mirlər. Zəif sensitivlik, qeyri-reaktivlik, yüksək fəallıq, rigidlik, in¬tro¬vertlik, zəif emosional oyanıqlıq, ağır templi cavab reaksiyaları kimi xüsusiyyətlər fleqmatik temperament tipli insanları xarak¬te¬ri¬zə edən cəhətlərə aiddir.",
  Sanqvinik:
    " Sanqvinikdir bu temperament tipinə mənsub hərbçilərin psixikası da¬¬ha yüksək oyanıqlıdır, belə adamlar hərbi qulluğa daha tez adap¬¬tasiya olunur, hər hansı hərbi şəraitə daha tez uyğunlaşa bi¬lir¬¬lər. Onlar tez ünsiyyətə girir, istənilən şəraitdə və istənilən kol¬lek¬tivdə özlərinə həmsöhbət, həmfikir tapa bilirlər. Liderlik xüsu¬siy¬yətləri, qabiliyyətləri, hər hansı qrupda qeyri-rəsmi lider (qrup və ya hərbi kollektivin, hərbi bölmənin rəsmi lideri həmin bölmənin bi¬l¬avasitə komandiridir) ola bilmək ehtimalları yüksəkdir. Bu tip adam¬lar heç vaxt ruhdan düşmürlər, küsəyən olmurlar, məğlubiy¬yət¬lə¬rini tez unudur, öz uğursuzluqları ilə tez barışa bilirlər. Zəif sen¬sitivlik (resseptorlarda oyanma prosesinə səbəb olan xarici və ya daxili təsirlərin, yəni stimulların təsirinə həssaslıq), yüksək reak¬¬tivlik və yüksək fəallıq, plastiklik, müvazinətlilik, ekstravertlik (ha¬¬mı ilə hər bir şeyi bölüşmək istəyi), ani oyanıqlıq, tempi sürətli olan reaksiyalar, konkordantlıq (əhlikef, laqeyd, heç nəyi ürəyinə sal¬mayan), əsəb sisteminin möhkəmliyi sanqvinik temperament ti¬pi¬nə xas xüsusiyyətlərdir. Sanqviniklər yüksək səviyyədə ün¬siy¬yət¬cil olmaları, ürəyiaçıqlığı, başqa adamlara yüksək maraq gös¬tər¬mələri müqabilində özünütəhlilə dərindən meyilli deyillər, mə¬suliyyət hissinin kifayət qədər olmaması ilə fərqlənirlər.",
  Xolerik:
    " Xolerikdir bu temperament tipinə mənsub hərbçilər digərlərinə nis¬bə¬tən ən höcət, ən dalaşqan tip sayılırlar. Çünki həmin tem¬pera¬ment tipinə mənsub hərbçilərdə emosional dəyişkənliyin, emo¬sio¬nal dayanıqsızlığın, müvazinətsizliyin, əsəbilik dərəcəsinin yüksək sə-viyyədə olması və melanxolik temperament tipində olduğunun ək¬sinə olaraq özünəqapanma göstəricisinin aşağı olması, daha doğ¬rusu, ekstravertliyin üstünlük təşkil etməsi, hər şeyi həmin an¬da¬ca üzə vurmaq istəyi, digərləri ilə çox çətin razılaşmaq, çətin kom¬promisə girmək, həmişə özlərini haqlı hesab etmək kimi xü¬su¬siyyətləri, başqa sözlə, “qırmızısifətlilikləri”, bu tip hərbçilərin şəx¬si heyət arasında dalaşqan tip kimi tanınmasına gətirib çı¬xar¬dır. Zəif sensitivlik, yüksək reaktivlik və reaktivliyi üstün olan yük¬sək fəallıq, ekstravertlik, yüksək emosional oyanıqlıq, tempi sü¬rət¬li reaksiyalar xolerik temperamentli insanlara xasdır.",
};



// ===================== PORTRAIT KEY =====================
const KEY_P = {
  sari: { yes: [14], no: [1, 4, 21, 26] },
  yasil: { yes: [6, 11, 15, 18], no: [2, 8] },
  goy: { yes: [9, 23, 27, 28, 29, 30], no: [3, 17] },
  ag: { yes: [5, 13, 19], no: [25] },
  qirmizi: { yes: [7, 10, 12, 16, 20, 22, 24], no: [] },
};

// ===================== INTERPRETATIONS (Portrait) =====================
function interp1P(s) {
  if (s <= 2) return "İctimai qaydaları pozmağa meyillİ deyil.";
  if (s <= 4) return "İctimai qaydaları pozmağa meyillidir.";
  return "İctimai qaydaları pozmağa meylliliyi yüksəkdir daim ciddi nəzarət tələb edir.";
}
function interp2P(s) {
  if (s <= 3) return "Özünə nəzarət etmək qabiliyyəti zəifdir.";
  if (s <= 5) return "Özünə nəzarət edə bilir, münaqişələrin yaranma ehtimalından yayınmağı bacarır.";
  if (s === 6) return "Özünə nəzarət etmək qabiliyyəti yüksəkdir, münaqişələrin yaranma ehtimalından yayınmağı bacarır.";
  return "Özünə nəzarət etmək qabiliyyəti (diapazondan kənar).";
}
function interp3P(s) {
  if (s <= 3) return "liderlik keyfiyyətləri zəif inkişaf edib.";
  if (s <= 6) return "liderlik keyfiyyətlərinə malikdir.";
  return "liderlik keyfiyyətləri güclü inkişaf edib.";
}
function interp4P(s) {
  if (s <= 2) return "Özünə zərər yetirmə ehtimali aşağıdır.";
  if (s === 3) return "Özünə zərər yetirmə ehtimalı var, bu səbəbdəndə xidmət etdiyi bölmənin aidiyyəti üzrə komandir və rəis heyəti tərəfindən nəzarətdə saxlanılması məsləhətdir.";
  if (s >= 4) return "Özünə zərər yetirmə ehtimalı yüksəkdir, bu səbəbdəndə xidmət etdiyi bölmənin aidiyyəti üzrə komandir və rəis heyəti tərəfindən ciddi nəzarətdə saxlanılması, onunla fərdi söhbətlərin aparılması zərurət olarsa dərindən öyrənilməsi üçün ixtisaslı həkim (psixoloq, nevroloq, psixiatr) müayinəsinə göndərilməsi məsləhətdir";
  return "Özünə zərər yetirmə ehtimali (diapazondan kənar).";
}
function interp5P(s) {
  if (s <= 3)
    return "Addiktiv davranışları (spirtli içkilərə, psixotrop maddələrə münasibəti) sağlamdır.";
  if (s <= 5) return "Addiktiv davranışlara (spirtli içkilərə, psixotrop maddələrə münasibəti)  meyllidir, təsir altına düşmək ehtimalı yüksəkdir. Qeyri-sağlam əhatədə, ümumi axına düşərək, qurşanma təhlükəsi mövcuddur. Kimlərlə yoldaşlıq və dostluq etmə səbəblərinin araşdırılması məqsədə uyğundur.";
  if (s <= 7) return "Addiktiv davranışlara (spirtli içkilərə, psixotrop maddələrə münasibəti)  meylliliyi yüksəkdir, Qeyri-sağlam əhatədə, ümumi axına düşərək, qurşanma təhlükəsi mövcuddur. Kimlərlə yoldaşlıq və dostluq etmə səbəblərinin araşdırılması məqsədə uyğundur.";
  return "addiktiv davranış (diapazondan kənar).";
}

// ===================== COMMON UI HELPERS =====================
function mkQuestionCard(prefix, answersObj, q) {
  const el = document.createElement("div");
  el.className = "q";
  el.dataset.q = String(q);

  const num = document.createElement("div");
  num.className = "qnum";
  num.textContent = q;

  const opts = document.createElement("div");
  opts.className = "opts";

  const yesId = `${prefix}_q${q}_yes`;
  const noId = `${prefix}_q${q}_no`;
  const naId = `${prefix}_q${q}_na`;

  opts.innerHTML = `
    <label class="opt yes" data-kind="yes"><input type="checkbox" id="${yesId}" />Bəli</label>
    <label class="opt no"  data-kind="no"><input type="checkbox" id="${noId}" />Xeyr</label>
    <label class="opt na"  data-kind=""><input type="checkbox" id="${naId}" />Boş</label>
  `;

  opts.querySelectorAll(".opt").forEach((label) => {
    label.addEventListener("click", (e) => {
      e.preventDefault();
      answersObj[q] = label.dataset.kind;
      syncStyles(prefix, answersObj, el, q);
      refreshChipsAndMeta();
    });
  });

  el.appendChild(num);
  el.appendChild(opts);
  return el;
}

function syncStyles(prefix, answersObj, cardEl, q) {
  const kind = answersObj[q];
  cardEl.querySelectorAll(".opt").forEach((l) => l.classList.remove("sel"));
  const target = Array.from(cardEl.querySelectorAll(".opt")).find(
    (l) => l.dataset.kind === kind,
  );
  if (target) target.classList.add("sel");

  cardEl
    .querySelectorAll("input[type=checkbox]")
    .forEach((i) => (i.checked = false));
  if (kind === "yes")
    cardEl.querySelector(`#${prefix}_q${q}_yes`).checked = true;
  else if (kind === "no")
    cardEl.querySelector(`#${prefix}_q${q}_no`).checked = true;
  else cardEl.querySelector(`#${prefix}_q${q}_na`).checked = true;
}

function applyFilter(inputEl, gridEl) {
  const raw = inputEl.value.trim();
  if (!raw) {
    gridEl.querySelectorAll(".q").forEach((el) => (el.style.display = ""));
    return;
  }
  const nums = raw
    .split(/[^0-9]+/)
    .filter(Boolean)
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n));
  const set = new Set(nums);
  gridEl.querySelectorAll(".q").forEach((el) => {
    const q = parseInt(el.dataset.q, 10);
    el.style.display = set.has(q) ? "" : "none";
  });
}

// ===================== STATE =====================
const answersT = Object.create(null);
for (let i = 1; i <= 57; i++) answersT[i] = "";

const answersP = Object.create(null);
for (let i = 1; i <= 30; i++) answersP[i] = "";

// ===================== DOM REFS (IMPORTANT: define BEFORE use) =====================
const qgridT = document.getElementById("qgridT");
const qgridP = document.getElementById("qgridP");
const metaT = document.getElementById("metaT");
const metaP = document.getElementById("metaP");

const finalTextEl = document.getElementById("finalText");
const copyFinalBtn = document.getElementById("copyFinal");
const copyHint = document.getElementById("copyHint");

const finalTempTextEl = document.getElementById("finalTempText");
const copyTempBtn = document.getElementById("copyTemp");
const copyHintTemp = document.getElementById("copyHintTemp");

// ===================== BUILD QUESTIONS =====================
function renderQuestions() {
  qgridT.innerHTML = "";
  for (let q = 1; q <= 57; q++) {
    const card = mkQuestionCard("t", answersT, q);
    qgridT.appendChild(card);
    syncStyles("t", answersT, card, q);
  }

  qgridP.innerHTML = "";
  for (let q = 1; q <= 30; q++) {
    const card = mkQuestionCard("p", answersP, q);
    qgridP.appendChild(card);
    syncStyles("p", answersP, card, q);
  }

  refreshChipsAndMeta();
}

function refreshChipsAndMeta() {
  const doneT = Object.values(answersT).filter((v) => v).length;
  const doneP = Object.values(answersP).filter((v) => v).length;

  const chipT = document.getElementById("chipT");
  const chipP = document.getElementById("chipP");
  if (chipT) chipT.textContent = `Temperament: ${doneT}/57`;
  if (chipP) chipP.textContent = `Portret: ${doneP}/30`;

  if (metaT) {
    metaT.innerHTML = `
      <span class="chip">Sual: <b>57</b></span>
      <span class="chip">Doldurulan: <b>${doneT}</b></span>
      <span class="chip">Qalan: <b>${57 - doneT}</b></span>
    `;
  }
  if (metaP) {
    metaP.innerHTML = `
      <span class="chip">Sual: <b>30</b></span>
      <span class="chip">Doldurulan: <b>${doneP}</b></span>
      <span class="chip">Qalan: <b>${30 - doneP}</b></span>
    `;
  }
}

renderQuestions();

// ===================== SEARCH HOOKS =====================
const searchT = document.getElementById("searchT");
const searchP = document.getElementById("searchP");
if (searchT)
  searchT.addEventListener("input", () => applyFilter(searchT, qgridT));
if (searchP)
  searchP.addEventListener("input", () => applyFilter(searchP, qgridP));

const clearSearchT = document.getElementById("clearSearchT");
const clearSearchP = document.getElementById("clearSearchP");

if (clearSearchT && searchT) {
  clearSearchT.addEventListener("click", () => {
    searchT.value = "";
    applyFilter(searchT, qgridT);
    searchT.focus();
  });
}
if (clearSearchP && searchP) {
  clearSearchP.addEventListener("click", () => {
    searchP.value = "";
    applyFilter(searchP, qgridP);
    searchP.focus();
  });
}

// ===================== SCORING (Temperament) =====================
function scoreJ1T() {
  let s = 0;
  for (let q = 1; q <= 57; q++) {
    const a = answersT[q];
    if (!a) continue;
    if (J_YES.has(q) && a === "yes") s++;
    if (J_NO.has(q) && a === "no") s++;
  }
  return s;
}
function scoreL1T() {
  let s = 0;
  for (const q of L_YES) if (answersT[q] === "yes") s++;
  return s;
}
function scoreN1T() {
  let s = 0;
  for (const q of N_YES) if (answersT[q] === "yes") s++;
  for (const q of N_NO) if (answersT[q] === "no") s++;
  return s;
}

function labelJ11T(j1) {
  if (j1 <= 2) return "güclü introvert";
  if (j1 <= 6) return "introvert";
  if (j1 <= 10) return "potensial introvert";
  if (j1 <= 14) return "ambivert";
  if (j1 <= 18) return "potensial ekstravert";
  if (j1 <= 22) return "ekstravert";
  if (j1 <= 24) return "güclü ekstravert";
  return "—";
}
function labelJ14T(l1) {
  if (l1 <= 2) return "güclü konkordant";
  if (l1 <= 6) return "konkordant";
  if (l1 <= 10) return "potensial konkordant";
  if (l1 <= 14) return "normostennik";
  if (l1 <= 18) return "potensial diskordant";
  if (l1 <= 22) return "diskordant";
  if (l1 <= 24) return "güclü diskordant";
  return "—";
}
function labelJ17T(n1) {
  if (n1 <= 3) return "səmimilik amilinə görə səmimi, açıqürəkli, düz danışan";
  if (n1 <= 6)
    return "səmimilik amilinə görə situativ (“şəraitə, situasiyaya görə hərəkət edən”)";
  if (n1 <= 9)
    return "səmimilik amilinə görə qeyri-səmimi, yalan danışmağa meyilli";
  return "—";
}
function explExtrByLabel(label) {
  switch (label) {
    case "güclü introvert":
      return "tamamilə özünə qapanmış insan";
    case "introvert":
      return "ingilis dilindən tərcümədə “içinə çəkilən” insan";
    case "potensial introvert":
      return "özünə qapanmaya meyilli insan";
    case "ambivert":
      return "neytral insan";
    case "potensial ekstravert":
      return "ətrafına qovuşmağa meyilli insan";
    case "ekstravert":
      return "ingilis dilindən tərcümədə “ətrafına açıq” insan";
    case "güclü ekstravert":
      return "hər şeyə tamamilə açıq insan";
    default:
      return "";
  }
}

function explNervByLabel(label) {
  switch (label) {
    case "güclü konkordant":
      return "əhli-kef, heç nəyi vecinə almayan, hər şeyə laqeyd insan";
    case "konkordant":
      return "ingilis dilindən tərcümədə “razılaşan” insan";
    case "potensial konkordant":
      return "razılığa meyilli insan";
    case "normostennik":
      return "bitərəf insan";
    case "potensial diskordant":
      return "narazılığa meyilli insan";
    case "diskordant":
      return "ingilis dilindən tərcümədə “razılaşmayan” insan";
    case "güclü diskordant":
      return "heç nə ilə razılaşmayan, “höcət” insan";
    default:
      return "";
  }
}
function temperamentT(j1, l1) {
  const intro = j1 <= 12;
  const stable = l1 <= 12;
  if (intro && stable) return "Fleqmatik";
  if (intro && !stable) return "Melanxolik";
  if (!intro && stable) return "Sanqvinik";
  return "Xolerik";
}
function temperamentNoteT(j1, l1, n1) {
  let note = `Ox: ${j1} (${j1 <= 12 ? "İntroversiya" : "Ekstraversiya"}), ${l1} (${l1 <= 12 ? "Emosional sabitlik" : "Emosional dayanıqsızlıq"}).`;
  if (n1 >= 7)
    note += " ⚠️ N1 yüksəkdir (7–9): nəticənin etibarlılığı aşağı ola bilər.";
  return note;
}

function updateTemperamentUI() {
  const j1 = scoreJ1T();
  const l1 = scoreL1T();
  const n1 = scoreN1T();

  const elJ1 = document.getElementById("j1T");
  const elL1 = document.getElementById("l1T");
  const elN1 = document.getElementById("n1T");
  if (elJ1) elJ1.textContent = j1;
  if (elL1) elL1.textContent = l1;
  if (elN1) elN1.textContent = n1;

  const elJ11 = document.getElementById("j11T");
  const elJ14 = document.getElementById("j14T");
  const elJ17 = document.getElementById("j17T");
  if (elJ11) elJ11.textContent = labelJ11T(j1);
  if (elJ14) elJ14.textContent = labelJ14T(l1);
  if (elJ17)
    elJ17.textContent = labelJ17T(n1).replace("səmimilik amilinə görə ", "");

  const t = temperamentT(j1, l1);
  const elK4 = document.getElementById("k4T");
  const elNote = document.getElementById("k4noteT");
  const elI21 = document.getElementById("i21T");

  if (elK4) elK4.textContent = t;
  if (elNote) elNote.textContent = temperamentNoteT(j1, l1, n1);
  if (elI21) elI21.textContent = TEMPERAMENT_TEXT[t] || "—";

  return { j1, l1, n1, t };
}

// ===================== SCORING (Portrait) =====================
function scoreGroupP(g) {
  let s = 0;
  g.yes.forEach((q) => {
    if (answersP[q] === "yes") s++;
  });
  g.no.forEach((q) => {
    if (answersP[q] === "no") s++;
  });
  return s;
}

function updatePortraitUI() {
  const b1 = scoreGroupP(KEY_P.sari);
  const b2 = scoreGroupP(KEY_P.goy);
  const b3 = scoreGroupP(KEY_P.yasil);
  const b4 = scoreGroupP(KEY_P.ag);
  const b5 = scoreGroupP(KEY_P.qirmizi);

  const elB1 = document.getElementById("b1P");
  const elB2 = document.getElementById("b2P");
  const elB3 = document.getElementById("b3P");
  const elB4 = document.getElementById("b4P");
  const elB5 = document.getElementById("b5P");
  if (elB1) elB1.textContent = b1;
  if (elB2) elB2.textContent = b2;
  if (elB3) elB3.textContent = b3;
  if (elB4) elB4.textContent = b4;
  if (elB5) elB5.textContent = b5;

  const r1 = document.getElementById("r1P");
  const r2 = document.getElementById("r2P");
  const r3 = document.getElementById("r3P");
  const r4 = document.getElementById("r4P");
  const r5 = document.getElementById("r5P");

  if (r1)
    r1.textContent =
      "Keçirilmiş psixoloji testlərin nəticələrinə görə " + interp1P(b1);
  if (r2) r2.textContent = interp3P(b2);
  if (r3) r3.textContent = interp2P(b3);
  if (r4) r4.textContent = interp4P(b4);
  if (r5) r5.textContent = interp5P(b5);

  return { b1, b2, b3, b4, b5 };
}

// ===================== FINAL TEXT (Temperament) =====================
function buildTemperamentFinal(temp) {
  const extrLabel = labelJ11T(temp.j1);
  const nervLabel = labelJ14T(temp.l1);
  const sincLabel = labelJ17T(temp.n1).replace("səmimilik amilinə görə ", "");
  const note = temperamentNoteT(temp.j1, temp.l1, temp.n1);
  const tExp = TEMPERAMENT_TEXT[temp.t] || "";

  return `Ekstraversiya
0–24
${temp.j1}

Əsəbilik
0–24
${temp.l1}

Səmimilik
0–9
${temp.n1}

Ekstraversiya nəticəsi
${extrLabel}

Əsəbilik nəticəsi
${nervLabel}

Səmimilik nəticəsi
${sincLabel}

Temperament
${temp.t}

${note}

Temperament izahı
${tExp}`;
}

function setTemperamentFinal(temp) {
  if (!finalTempTextEl) return;
  finalTempTextEl.value = buildTemperamentFinal(temp);
  if (copyHintTemp) copyHintTemp.textContent = "✅ Temperament mətn hazırdır.";
}

// ===================== FINAL TEXT (Combined / WhatsApp) =====================
// Sənin əsas textarea-nın dolmamasının FIX-i buradır: setFinalText() əlavə olunur.
function buildFinalText(temp, port) {
  // Portret cümlələri
  const p1 =
    "Keçirilmiş psixoloji testlərin nəticələrinə görə " + interp1P(port.b1);
  const p2 = interp3P(port.b2);
  const p3 = interp2P(port.b3);
  const p4 = interp4P(port.b4);
  const p5 = interp5P(port.b5);

  // Ayzenq label-ləri
  const sinc = labelJ17T(temp.n1).replace("səmimilik amilinə görə ", "");
  const extrLabel = labelJ11T(temp.j1);
  const nervLabel = labelJ14T(temp.l1);

  // Sənin verdiyin şkalaya uyğun mötərizə izahları
  const extrExpl = explExtrByLabel(extrLabel);
  const nervExpl = explNervByLabel(nervLabel);

  // Temperament izahı (mətdə artıq “...dir” var)
  const tText = TEMPERAMENT_TEXT[temp.t] || "";

  // Nöqtələri 2 dəfə etməsin deyə təhlükəsiz punktuasiya
  const sent = (s) => {
    const x = String(s || "").trim();
    if (!x) return "";
    return /[.!?)]$/.test(x) ? x : x + ".";
  };

  // Burada “temperament tipinə görə Fleqmatik” yazmırıq ki, 2 dəfə olmasın.
  // Birbaşa izah mətnini əlavə edirik: "temperament tipinə görə Fleqmatikdir (...)".
  const ayzenqPart =
    `Ayzenq testinin nəticələrinə əsasən, ` +
    `səmimilik amilinə görə ${sinc}, ` +
    `ətraf mühitə münasibətinə görə ${extrLabel}${extrExpl ? ` (“${extrExpl}”)` : ""}, ` +
    `emosionallıq (əsəbilik) amilinə görə ${nervLabel}${nervExpl ? ` (“${nervExpl}”)` : ""}, ` +
    `temperament tipinə görə${tText ? " " + tText.trim() : " —"}`;

  return [sent(p1), sent(p2), sent(p3), sent(p4), sent(p5), ayzenqPart].join(
    " ",
  );
}
function setFinalText(temp, port) {
  if (!finalTextEl) return;
  finalTextEl.value = buildFinalText(temp, port);
  if (copyHint) copyHint.textContent = "✅ Yekun mətn hazırdır.";
}
// ===================== ONE BUTTON: CALC ALL =====================
const calcAllBtn = document.getElementById("calcAll");
if (calcAllBtn) {
  calcAllBtn.addEventListener("click", () => {
    const temp = updateTemperamentUI();
    const port = updatePortraitUI();

    // İKİ textarea da dolsun:
    setTemperamentFinal(temp);
    setFinalText(temp, port);

    if (finalTextEl)
      finalTextEl.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// ===================== RESET / DEMO ALL =====================
const resetAllBtn = document.getElementById("resetAll");
if (resetAllBtn) {
  resetAllBtn.addEventListener("click", () => {
    for (let i = 1; i <= 57; i++) answersT[i] = "";
    for (let i = 1; i <= 30; i++) answersP[i] = "";

    renderQuestions();

    if (searchT) applyFilter(searchT, qgridT);
    if (searchP) applyFilter(searchP, qgridP);

    ["j1T", "l1T", "n1T"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "0";
    });
    ["j11T", "j14T", "j17T", "k4T", "k4noteT", "i21T"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "—";
    });

    ["b1P", "b2P", "b3P", "b4P", "b5P"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "0";
    });
    ["r1P", "r2P", "r3P", "r4P", "r5P"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "—";
    });

    if (finalTextEl) finalTextEl.value = "—";
    if (finalTempTextEl) finalTempTextEl.value = "—";
    if (copyHint) copyHint.textContent = "—";
    if (copyHintTemp) copyHintTemp.textContent = "—";
  });
}

const demoAllBtn = document.getElementById("demoAll");
if (demoAllBtn) {
  demoAllBtn.addEventListener("click", () => {
    for (let i = 1; i <= 57; i++) {
      const r = Math.random();
      answersT[i] = r < 0.45 ? "yes" : r < 0.9 ? "no" : "";
    }
    for (let i = 1; i <= 30; i++) {
      const r = Math.random();
      answersP[i] = r < 0.45 ? "yes" : r < 0.9 ? "no" : "";
    }

    qgridT.querySelectorAll(".q").forEach((el) => {
      const q = parseInt(el.dataset.q, 10);
      syncStyles("t", answersT, el, q);
    });
    qgridP.querySelectorAll(".q").forEach((el) => {
      const q = parseInt(el.dataset.q, 10);
      syncStyles("p", answersP, el, q);
    });
    refreshChipsAndMeta();

    const temp = updateTemperamentUI();
    const port = updatePortraitUI();
    setTemperamentFinal(temp);
    setFinalText(temp, port);
  });
}

// ===================== COPY FINAL =====================
if (copyFinalBtn) {
  copyFinalBtn.addEventListener("click", async () => {
    const val = (finalTextEl && finalTextEl.value) || "";
    if (!val || val.trim() === "—") {
      if (copyHint) copyHint.textContent = "Əvvəl “Hesabla (hamısı)” bas.";
      return;
    }

    // ✅ YALNIZ KOPYALA
    try {
      await navigator.clipboard.writeText(val);
      if (copyHint) copyHint.textContent = "✅ Kopyalandı";
    } catch (e) {
      if (finalTextEl) {
        finalTextEl.focus();
        finalTextEl.select();
      }
      if (copyHint) copyHint.textContent = "Mətni seçdim, Ctrl+C et.";
    }
  });
}

const sendWABtn = document.getElementById("sendWA");

if (sendWABtn) {
  sendWABtn.addEventListener("click", () => {
    const val = (finalTextEl && finalTextEl.value) || "";
    if (!val || val.trim() === "—") {
      if (copyHint) copyHint.textContent = "Əvvəl “Hesabla (hamısı)” bas.";
      return;
    }

    const phone = "994702770945";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(val)}`;
    window.open(url, "_blank");
  });
}
