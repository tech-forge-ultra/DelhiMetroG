/* ══════════════════════════════════════════════════
   METRO DATA & GRAPH LOGIC (Includes Corrected Pink Line)
══════════════════════════════════════════════════ */
const METRO = {
  lines: {
    red:{id:"red",name:"Red Line",color:"#E53935",short:"RL",stations:["Rithala","Rohini West","Rohini East","Madhuban Chowk","Kohat Enclave","Netaji Subhash Place","Keshav Puram","Kanhaiya Nagar","Inderlok","Shastri Nagar","Pratap Nagar","Pulbangash","Tis Hazari","Kashmere Gate","Shastri Park","Seelampur","Welcome","Shahdara","Mansarovar Park","Jhilmil","Dilshad Garden","Shaheed Nagar","Raj Bagh","Shyam Park","Major Mohit Sharma Rajendra Nagar","Arthala","Mohan Nagar","Hindon River","Shaheed Sthal (New Bus Adda)"]},
    yellow:{id:"yellow",name:"Yellow Line",color:"#D4A800",short:"YL",stations:["Samaypur Badli","Rohini Sector 18-19","Haiderpur Badli Mor","Jahangirpuri","Adarsh Nagar","Azadpur","Model Town","GTB Nagar","Vishwa Vidyalaya","Vidhan Sabha","Civil Lines","Kashmere Gate","Chandni Chowk","Chawri Bazar","New Delhi","Rajiv Chowk","Patel Chowk","Central Secretariat","Seva Teerth","Jor Bagh","INA","AIIMS","Green Park","Hauz Khas","Malviya Nagar","Saket","Qutab Minar","Chhattarpur","Sultanpur","Ghitorni","Arjangarh","Guru Dronacharya","Sikanderpur","MG Road","IFFCO Chowk","Millennium City Centre Gurugram"]},
    blue:{id:"blue",name:"Blue Line",color:"#1565C0",short:"BL",stations:["Dwarka Sector 21","Dwarka Sector 8","Dwarka Sector 9","Dwarka Sector 10","Dwarka Sector 11","Dwarka Sector 12","Dwarka Sector 13","Dwarka Sector 14","Dwarka","Dwarka Mor","Nawada","Uttam Nagar West","Uttam Nagar East","Janakpuri West","Janakpuri East","Tilak Nagar","Subhash Nagar","Tagore Garden","Rajouri Garden","Ramesh Nagar","Moti Nagar","Kirti Nagar","Shadipur","Patel Nagar","Rajendra Place","Karol Bagh","Jhandewalan","Ramakrishna Ashram Marg","Rajiv Chowk","Barakhamba Road","Mandi House","Supreme Court","Indraprastha","Yamuna Bank","Laxmi Nagar","Nirman Vihar","Preet Vihar","Karkarduma","Anand Vihar ISBT","Kaushambi","Vaishali","Noida Sector 15","Noida Sector 16","Noida Sector 18","Botanical Garden","Golf Course","Noida City Centre","Noida Sector 34","Noida Sector 52","Noida Sector 61","Noida Sector 59","Noida Sector 62","Noida Electronic City"]},
    blue_branch:{id:"blue_branch",name:"Blue Line (Branch)",color:"#1976D2",short:"BB",stations:["Yamuna Bank","Akshardham","Mayur Vihar Phase-1","Shree Ram Mayur Vihar Mandir","Mayur Vihar Extension","New Ashok Nagar","Noida Sector 15","Noida Sector 16","Noida Sector 18","Botanical Garden","Golf Course","Noida City Centre","Noida Sector 34","Noida Sector 52","Noida Sector 61","Noida Sector 59","Noida Sector 62","Noida Electronic City"]},
    green:{id:"green",name:"Green Line",color:"#2E7D32",short:"GL",stations:["Inderlok","Ashok Park Main","Punjabi Bagh West","ESI-Basaidarapur","Rajouri Garden","Madipur","Paschim Vihar East","Paschim Vihar West","Peera Garhi","Udyog Nagar","Surajmal Stadium","Nangloi","Nangloi Railway Station","Rajdhani Park","Mundka","Mundka Industrial Area","Ghevra","Tikri Kalan","Tikri Border","Pandit Shree Ram Sharma","Bahadurgarh City","Brigadier Hoshiyar Singh","Kirti Nagar","Satguru Ram Singh Marg","Mayapuri"]},
    violet:{id:"violet",name:"Violet Line",color:"#6A1B9A",short:"VL",stations:["Kashmere Gate","Lal Quila","Jama Masjid","Delhi Gate","ITO","Mandi House","Janpath","Central Secretariat","Khan Market","Jawaharlal Nehru Stadium","Jangpura","Lajpat Nagar","Moolchand","Kailash Colony","Nehru Place","Kalkaji Mandir","Govind Puri","Harkesh Nagar Okhla","Jasola Apollo","Sarita Vihar","Mohan Estate","Tughlakabad","Badarpur Border","Sarai","NHPC Chowk","Mewala Maharajpur","Sector 28 Faridabad","Badkhal Mor","Old Faridabad","Neelam Chowk Ajronda","Bata Chowk","Eskay Chowk","Sarai Kale Khan - Nizamuddin","Raja Nahar Singh (Ballabhgarh)"]},
    pink:{id:"pink",name:"Pink Line",color:"#C2185B",short:"PL",stations:["Majlis Park", "Azadpur", "Shalimar Bagh", "Netaji Subhash Place", "Shakurpur", "Punjabi Bagh West", "ESI-Basaidarapur", "Rajouri Garden", "Mayapuri", "Naraina Vihar", "Delhi Cantt", "Durgabai Deshmukh South Campus", "Sir M. Visvesvaraya Moti Bagh", "Bhikaji Cama Place", "Sarojini Nagar", "Dilli Haat - INA", "South Extension", "Lajpat Nagar", "Vinobapuri", "Ashram", "Sarai Kale Khan - Nizamuddin", "Mayur Vihar Phase-1", "Mayur Vihar Pocket I", "Trilokpuri Sanjay Lake", "East Vinod Nagar - Mayur Vihar-II", "Mandawali - West Vinod Nagar", "IP Extension", "Anand Vihar ISBT", "Karkarduma", "Karkarduma Court", "Krishna Nagar", "East Azad Nagar", "Welcome", "Jaffrabad", "Maujpur - Babarpur", "Gokulpuri", "Johri Enclave", "Shiv Vihar"]},
    magenta:{id:"magenta",name:"Magenta Line",color:"#AD1457",short:"ML",stations:["Janakpuri West","Dabri Mor - Janakpuri South","Dashrathpuri","Palam","Sadar Bazar Cantonment","Terminal 1 IGI Airport","Shankar Vihar","Vasant Vihar","Munirka","RK Puram","IIT Delhi","Hauz Khas","Panchsheel Park","Chirag Delhi","Greater Kailash","Nehru Enclave","Kalkaji Mandir","Okhla NSIC","Jasola Vihar Shaheen Bagh","Okhla Vihar","Jamia Millia Islamia","Sukhdev Vihar","Botanical Garden"]},
    grey:{id:"grey",name:"Grey Line",color:"#607D8B",short:"GY",stations:["Dwarka","Nangli","Najafgarh","Dhansa Bus Stand"]},
    airport:{id:"airport",name:"Airport Express",color:"#E65100",short:"AE",stations:["New Delhi","Shivaji Stadium","Dhaula Kuan","Delhi Aerocity","IGI Airport T3","Dwarka Sector 21","Yashobhoomi Dwarka Sector 25"]},
    rapid:{id:"rapid",name:"Rapid Metro Gurugram",color:"#00695C",short:"RM",stations:["Sikanderpur","Phase 1","Moulsari Avenue","Cybercity","Belvedere Towers","Sector 53-54","Sector 55-56","Phase 3"]},
    aqua:{id:"aqua",name:"Aqua Line (Noida Metro)",color:"#0097A7",short:"AL",stations:["Noida Sector 51","Noida Sector 50","Noida Sector 76","Noida Sector 101","Noida Sector 81","NSEZ","Noida Sector 83","Noida Sector 137","Noida Sector 142","Noida Sector 143","Noida Sector 144","Noida Sector 145","Noida Sector 146","Noida Sector 147","Noida Sector 148","Knowledge Park II","Pari Chowk","Alpha 1","Delta 1","GNIDA Office","Depot Station"]}
  },
  interchanges:{
    "Kashmere Gate":["red","yellow","violet"], "Rajiv Chowk":["yellow","blue"], "Central Secretariat":["yellow","violet"],
    "Hauz Khas":["yellow","magenta"], "INA":["yellow","pink"], "Dilli Haat - INA":["pink","yellow"],
    "Botanical Garden":["blue","blue_branch","magenta"], "Yamuna Bank":["blue","blue_branch"],
    "Mandi House":["blue","violet"], "Inderlok":["red","green"], "Netaji Subhash Place":["red","pink"],
    "Kirti Nagar":["blue","green"], "Rajouri Garden":["blue","green","pink"], "ESI-Basaidarapur":["green","pink"],
    "Lajpat Nagar":["violet","pink"], "Kalkaji Mandir":["violet","magenta"], "New Delhi":["yellow","airport"],
    "Dwarka Sector 21":["blue","airport"], "Dwarka":["blue","grey"], "Azadpur":["yellow","pink"],
    "Janakpuri West":["blue","magenta"], "Sarai Kale Khan - Nizamuddin":["violet","pink"], "Sikanderpur":["yellow","rapid"],
    "Mayapuri":["green","pink"], "Punjabi Bagh West":["pink","green"], "Welcome":["red","pink"], "Karkarduma":["blue","pink"], 
    "Anand Vihar ISBT":["blue","pink"], "Mayur Vihar Phase-1":["blue_branch","pink"], "Noida Sector 52":["blue","blue_branch"]
  },
  walkingLinks:[
    { stationA:"Noida Sector 51", stationB:"Noida Sector 52", walkMinutes:5, description:"~300m walk between Noida Metro (Aqua) and Delhi Metro (Blue Line)" }
  ]
};

const PLATFORM_INFO = {
  "Kashmere Gate": { red: { platform: 1, direction: "Towards Shaheed Sthal / Rithala", level: "Upper" }, yellow: { platform: 2, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Upper" }, violet: { platform: 3, direction: "Towards Raja Nahar Singh / Kashmere Gate", level: "Lower" } },
  "Rajiv Chowk": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Lower" }, blue: { platform: 2, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Upper" } },
  "Central Secretariat": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" }, violet: { platform: 2, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Underground" } },
  "Hauz Khas": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" }, magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Underground" } },
  "INA": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Dilli Haat - INA": { pink: { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }, yellow: { platform: 2, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" } },
  "Botanical Garden": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" }, blue_branch: { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" }, magenta: { platform: 2, direction: "Towards Janakpuri West", level: "Elevated" } },
  "Yamuna Bank": { blue: { platform: 1, direction: "Towards Dwarka Sec 21", level: "Elevated" }, blue_branch: { platform: 2, direction: "Towards Vaishali / Akshardham", level: "Elevated" } },
  "Mandi House": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Underground" }, violet: { platform: 2, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Underground" } },
  "Inderlok": { red: { platform: 1, direction: "Towards Rithala / Shaheed Sthal", level: "Elevated" }, green: { platform: 2, direction: "Towards Kirti Nagar / Brigadier Hoshiyar Singh", level: "Elevated" } },
  "Netaji Subhash Place": { red: { platform: 1, direction: "Towards Rithala / Shaheed Sthal", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Kirti Nagar": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" }, green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" } },
  "Rajouri Garden": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" }, green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" }, pink: { platform: 3, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "ESI-Basaidarapur": { green: { platform: 1, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Lajpat Nagar": { violet: { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Kalkaji Mandir": { violet: { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" }, magenta: { platform: 3, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" } },
  "New Delhi": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" }, airport: { platform: 2, direction: "Towards Yashobhoomi Dwarka Sec 25 / IGI Airport", level: "Underground" } },
  "Dwarka Sector 21": { blue: { platform: 1, direction: "Towards Vaishali / Noida Electronic City", level: "Elevated" }, airport: { platform: 2, direction: "Towards New Delhi / Yashobhoomi", level: "Elevated" } },
  "Dwarka": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" }, grey: { platform: 2, direction: "Towards Dhansa Bus Stand", level: "Elevated" } },
  "Azadpur": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Janakpuri West": { blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" }, magenta: { platform: 2, direction: "Towards Botanical Garden", level: "Elevated" } },
  "Sarai Kale Khan - Nizamuddin": { violet: { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Sikanderpur": { yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Elevated" }, rapid: { platform: 2, direction: "Towards Phase 3 / Sector 55-56", level: "Elevated" } },
  "Mayapuri": { green: { platform: 1, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" }, pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" } },
  "Punjabi Bagh West": { pink: { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }, green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" } },
  "Noida Sector 52": { blue: { platform: 1, direction: "Towards Dwarka Sec 21", level: "Elevated" }, blue_branch: { platform: 2, direction: "Towards Yamuna Bank / Vaishali", level: "Elevated" } }
};

function getPlatformInfo(station, fromLine, toLine) {
  const info = PLATFORM_INFO[station]; if (!info) return null;
  const arrive = info[fromLine], board = info[toLine];
  if (!board) return null;
  return { alight: arrive?`Platform ${arrive.platform}`:null, board:`Platform ${board.platform}`, boardDirection:board.direction, boardLevel:board.level };
}

function buildGraph() {
  const g = {};
  function edge(a, b, lineId, weight=1, isWalk=false) {
    if (!g[a]) g[a] = []; if (!g[b]) g[b] = [];
    g[a].push({station:b, line:lineId, weight, isWalk});
    g[b].push({station:a, line:lineId, weight, isWalk});
  }
  for (const [lid, ld] of Object.entries(METRO.lines)) {
    const st = ld.stations;
    for (let i = 0; i < st.length - 1; i++) edge(st[i], st[i+1], lid);
  }
  for (const wl of METRO.walkingLinks) edge(wl.stationA, wl.stationB, "walk", 8, true);
  return g;
}

function findShortestPath(src, dst) {
  const graph = buildGraph(); const LINE_CHANGE_PENALTY = 3;
  const dist = {}, prev = {}, prevLine = {}, prevWalk = {}, visited = new Set(), pq = [[0, src, null]];
  for (const s of Object.keys(graph)) dist[s] = Infinity;
  dist[src] = 0;

  while (pq.length) {
    pq.sort((a,b) => a[0]-b[0]);
    const [cost, cur, curLine] = pq.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);
    if (cur === dst) break;
    if (!graph[cur]) continue;

    for (const nb of graph[cur]) {
      if (visited.has(nb.station)) continue;
      const penalty = (!nb.isWalk && curLine && curLine !== nb.line) ? LINE_CHANGE_PENALTY : 0;
      const nc = cost + nb.weight + penalty;
      if (nc < dist[nb.station]) {
        dist[nb.station] = nc; prev[nb.station] = cur; prevLine[nb.station] = nb.line; prevWalk[nb.station] = nb.isWalk;
        pq.push([nc, nb.station, nb.line]);
      }
    }
  }
  if (dist[dst] === Infinity) return null;

  const path = [], pathLines = [], pathWalk = [];
  let cur = dst;
  while (cur !== undefined) {
    path.unshift(cur); pathLines.unshift(prevLine[cur]); pathWalk.unshift(prevWalk[cur] || false); cur = prev[cur];
  }

  const segments = []; let si = 0;
  for (let i = 1; i < pathLines.length; i++) {
    if (pathLines[i] !== pathLines[i-1] && pathLines[i] !== null) {
      segments.push({ line: pathLines[i-1] || pathLines[i], stations: path.slice(si, i+1), isWalk: pathWalk[i-1] || false });
      si = i;
    }
  }
  if (si < path.length) segments.push({ line: pathLines[si] || pathLines[pathLines.length-1], stations: path.slice(si), isWalk: false });

  const cleanSegments = segments.map(seg => seg.line === "walk" ? {...seg, isWalk:true} : seg);
  const lineChanges = cleanSegments.filter(s => !s.isWalk).length - 1;
  const walkCount = cleanSegments.filter(s => s.isWalk).length;

  return {
    path, pathLines, pathWalk, segments: cleanSegments, totalStations: path.length,
    lineChanges: Math.max(0, lineChanges), walkCount, estimatedMinutes: Math.round((path.length - 1) * 2.5 + lineChanges * 5 + walkCount * 6)
  };
}

function getAllStations() {
  const s = new Set(); for (const ld of Object.values(METRO.lines)) for (const st of ld.stations) s.add(st); return Array.from(s).sort();
}
function getStationLines(name) { return Object.entries(METRO.lines).filter(([,ld]) => ld.stations.includes(name)).map(([id]) => id); }

/* ══════════════════════════════════════════════════
   ANIMATED BACKGROUND CANVAS
══════════════════════════════════════════════════ */
(function() {
  const canvas = document.getElementById('bgCanvas'); const ctx = canvas.getContext('2d');
  let W, H, particles;
  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function initParticles() {
    particles = Array.from({length:55}, () => ({
      x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.5+0.4,
      vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3, a: Math.random()*0.5+0.2
    }));
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    const col = isDark() ? '150,140,255' : '100,80,220';
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0) p.x=W; if (p.x>W) p.x=0;
      if (p.y<0) p.y=H; if (p.y>H) p.y=0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle = `rgba(${col},${p.a})`; ctx.fill();
    }
    for (let i=0;i<particles.length;i++) {
      for (let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if (d<100) {
          ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(${col},${0.12*(1-d/100)})`; ctx.lineWidth=0.8; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  resize(); initParticles(); draw(); window.addEventListener('resize', () => { resize(); initParticles(); });
})();

/* ══════════════════════════════════════════════════
   TOKEN-BASED FUZZY SEARCH
══════════════════════════════════════════════════ */
function normalizeForSearch(str) {
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  // Catch common user typos/abbreviations
  s = s.replace('millinium', 'millennium').replace('huda', 'millennium').replace('gurgaon', 'gurugram');
  return s;
}

function matchStation(query, station) {
  const qTokens = normalizeForSearch(query).split(' ').filter(Boolean);
  const sTokens = normalizeForSearch(station).split(' ').filter(Boolean);
  if (qTokens.length === 0) return true;
  return qTokens.every(qT => sTokens.some(sT => sT.includes(qT) || sT === qT));
}

function hlMatch(text, q) {
  if (!q) return text;
  const qTokens = normalizeForSearch(q).split(' ').filter(Boolean);
  if (!qTokens.length) return text;
  qTokens.sort((a,b) => b.length - a.length);
  const regex = new RegExp(`(${qTokens.join('|')})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

function fuzzy(q){
  if(!q) return '';
  const exact = allStations.find(s => s.toLowerCase() === q.toLowerCase().trim());
  if (exact) return exact;
  const match = allStations.find(s => matchStation(q, s));
  return match || q;
}

/* ══════════════════════════════════════════════════
   APP LOGIC & DOM
══════════════════════════════════════════════════ */
const FARE_TABLE = [{max:2,fare:10},{max:5,fare:20},{max:12,fare:30},{max:21,fare:40},{max:32,fare:50},{max:Infinity,fare:60}];
const $ = id => document.getElementById(id);
const srcInput=$('srcInput'), dstInput=$('dstInput'), srcDd=$('srcDd'), dstDd=$('dstDd');
const swapBtn=$('swapBtn'), findBtn=$('findBtn'), themeBtn=$('themeBtn'), themeIcon=$('themeIcon');
const recentSec=$('recentSec'), recentRow=$('recentRow'), resultsWrap=$('resultsWrap');
const errCard=$('errCard'), errMsg=$('errMsg'), skeletonLoader=$('skeletonLoader');
const sStations=$('sStations'), sTime=$('sTime'), sChanges=$('sChanges'), sFare=$('sFare');
const routeTrack=$('routeTrack'), rvPath=$('rvPath'), segList=$('segList'), legendGrid=$('legendGrid');
const shareBtn=$('shareBtn');

let allStations=[], selSrc='', selDst='', activeDd=null, fi=-1;

(function init(){
  allStations = getAllStations();
  renderLegend(); loadRecent(); bindEvents();
  const t=localStorage.getItem('dm-theme')||'dark';
  document.documentElement.setAttribute('data-theme',t);
  themeIcon.textContent = t==='dark'?'◐':'☀';
})();

function bindEvents(){
  themeBtn.addEventListener('click',()=>{
    const n = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',n); localStorage.setItem('dm-theme',n);
    themeIcon.textContent=n==='dark'?'◐':'☀';
  });
  swapBtn.addEventListener('click',()=>{
    swapBtn.classList.add('spin'); setTimeout(()=>swapBtn.classList.remove('spin'),400);
    [srcInput.value,dstInput.value]=[dstInput.value,srcInput.value];
    [selSrc,selDst]=[selDst,selSrc];
  });
  findBtn.addEventListener('click', handleFind);
  
  // Ripple Effect for buttons
  document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripples = document.createElement('span');
      ripples.className = 'ripple'; ripples.style.left = x + 'px'; ripples.style.top = y + 'px';
      this.appendChild(ripples);
      setTimeout(() => ripples.remove(), 600);
    });
  });

  setupAC(srcInput,srcDd,v=>{selSrc=v}); setupAC(dstInput,dstDd,v=>{selDst=v});
  document.addEventListener('click',e=>{ if(!e.target.closest('.ac-wrap')) closeAllDd(); });
  [srcInput,dstInput].forEach(inp=>inp.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!activeDd) handleFind(); }));

  if(shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareText = `Delhi Metro Route: ${selSrc} to ${selDst}. Estimated time: ${sTime.textContent}, Fare: ${sFare.textContent}.`;
      if (navigator.share) {
        try { await navigator.share({ title: 'Delhi Metro Route', text: shareText, url: window.location.href }); } catch (err) {}
      } else {
        navigator.clipboard.writeText(shareText); showToast('Route copied to clipboard!');
      }
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'app-toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function setupAC(inp, dd, onSel){
  inp.addEventListener('input',()=>{
    fi=-1; const q=inp.value.trim().toLowerCase();
    if(!q){closeDd(dd);return}
    const m = allStations.filter(s => matchStation(q, s)).slice(0, 14);
    renderDd(m,dd,inp,onSel);
  });
  inp.addEventListener('focus',()=>{
    const q=inp.value.trim().toLowerCase();
    if(q){ const m = allStations.filter(s => matchStation(q, s)).slice(0, 14); renderDd(m,dd,inp,onSel); }
  });
  inp.addEventListener('keydown',e=>{
    const items=dd.querySelectorAll('.dd-item'); if(!items.length)return;
    if(e.key==='ArrowDown'){e.preventDefault();fi=Math.min(fi+1,items.length-1);hlItem(items)}
    else if(e.key==='ArrowUp'){e.preventDefault();fi=Math.max(fi-1,0);hlItem(items)}
    else if(e.key==='Enter'&&fi>=0){e.preventDefault();items[fi].dispatchEvent(new MouseEvent('mousedown'))}
    else if(e.key==='Escape') closeDd(dd);
  });
}

function renderDd(stations,dd,inp,onSel){
  if(!stations.length){closeDd(dd);return}
  dd.innerHTML=stations.map(s=>{
    const lines=getStationLines(s);
    const dots=lines.map(l=>`<span class="dd-ldot" style="background:${METRO.lines[l]?.color||'#888'}"></span>`).join('');
    return`<div class="dd-item" data-s="${s}"><span class="dd-line-dots">${dots}</span><span class="dd-sname">${hlMatch(s,inp.value)}</span></div>`;
  }).join('');
  dd.querySelectorAll('.dd-item').forEach(item=>item.addEventListener('mousedown',e=>{
    e.preventDefault(); inp.value=item.dataset.s; onSel(item.dataset.s); closeDd(dd);
  }));
  dd.classList.add('open'); activeDd=dd;
}
function hlItem(items){ items.forEach((it,i)=>it.classList.toggle('hi',i===fi)); if(items[fi])items[fi].scrollIntoView({block:'nearest'}); }
function closeDd(dd){dd.classList.remove('open');if(activeDd===dd)activeDd=null}
function closeAllDd(){[srcDd,dstDd].forEach(closeDd)}

/* ── Route Finding with Skeleton Anim ── */
function handleFind(){
  if(!selSrc) selSrc=srcInput.value.trim();
  if(!selDst) selDst=dstInput.value.trim();
  
  selSrc = fuzzy(selSrc); selDst = fuzzy(selDst);
  srcInput.value = selSrc; dstInput.value = selDst;

  if(!selSrc||!selDst){showErr('Please enter both source and destination.');return}
  if(selSrc===selDst){showErr('Source and destination are the same station.');return}
  if(!allStations.includes(selSrc)){showErr(`Station not found: "${selSrc}"`);return}
  if(!allStations.includes(selDst)){showErr(`Station not found: "${selDst}"`);return}

  const r=findShortestPath(selSrc,selDst);
  if(!r){showErr('No route found. The stations may not be connected in this network.');return}

  saveRecent(selSrc,selDst);
  hideErr(); resultsWrap.classList.add('hidden'); skeletonLoader.classList.remove('hidden');

  setTimeout(() => {
    skeletonLoader.classList.add('hidden');
    showResults(r,selSrc,selDst);
  }, 750);
}

function showResults(r,src,dst){
  resultsWrap.classList.remove('hidden');
  const firstLineId = r.pathLines.find(l=>l&&l!=='walk');
  const firstColor = firstLineId ? METRO.lines[firstLineId]?.color : null;
  if(firstColor){
    const orb1 = document.querySelector('.bg-orb-1'), orb2 = document.querySelector('.bg-orb-2');
    if(orb1) orb1.style.background=`radial-gradient(circle,${firstColor}22 0%,transparent 65%)`;
    if(orb2) orb2.style.background=`radial-gradient(circle,${firstColor}14 0%,transparent 65%)`;
    setTimeout(()=>{ if(orb1) orb1.style.background=''; if(orb2) orb2.style.background=''; }, 3000);
  }

  animateNumber(sStations, r.totalStations, '');
  setTimeout(()=>{ sTime.textContent=`~${r.estimatedMinutes}m`; }, 120);
  setTimeout(()=>{ animateNumber(sChanges, r.lineChanges + r.walkCount, ''); }, 240);
  setTimeout(()=>{ sFare.textContent=`₹${calcFare(r.totalStations)}`; }, 360);

  rvPath.textContent=`${src}  →  ${dst}`;
  renderTrack(r); renderSegs(r.segments);
  setTimeout(()=>resultsWrap.scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function animateNumber(el, target, suffix) {
  let cur=0, step=Math.max(1,Math.floor(target/20)); el.textContent='0'+suffix;
  const iv=setInterval(()=>{ cur=Math.min(cur+step,target); el.textContent=cur+suffix; if(cur>=target)clearInterval(iv); },30);
}
function calcFare(n){ for(const t of FARE_TABLE) if(n<=t.max) return t.fare; return 60; }

function renderTrack(result){
  routeTrack.innerHTML=''; const {path, pathLines, pathWalk} = result; const interchSet = new Set(Object.keys(METRO.interchanges));
  const displayItems = [];

  for(let i=0;i<path.length;i++){
    const lineId=pathLines[i], isWalk=pathWalk[i], line=METRO.lines[lineId], color=line?.color||'#888';
    const isFirst=i===0, isLast=i===path.length-1, isInterch=interchSet.has(path[i]) && !isFirst && !isLast;

    if(i>0){
      const prevLineId=pathLines[i-1], prevWalk=pathWalk[i-1];
      if(isWalk){
        const wlInfo = METRO.walkingLinks.find(w=>(w.stationA===path[i-1]&&w.stationB===path[i])||(w.stationB===path[i-1]&&w.stationA===path[i]));
        displayItems.push({type:'walk', wlInfo, prevColor: METRO.lines[prevLineId]?.color||'#fb923c'});
      } else if(!prevWalk && lineId!==prevLineId){
        const pfm = getPlatformInfo(path[i], prevLineId, lineId);
        displayItems.push({type:'change', newLine:line, newColor:color, prevLineId, newLineId:lineId, boardPlatform: pfm?.board||null, boardDirection: pfm?.boardDirection||null});
      }
    }
    displayItems.push({type:'station', name:path[i], lineId, color, line, isFirst, isLast, isInterch, isWalk, prevLineId: i>0?pathLines[i-1]:null, nextLineId: i<path.length-1?pathLines[i+1]:null, nextIsWalk: i<path.length-1?pathWalk[i+1]:false });
  }

  displayItems.forEach((item, di) => {
    const animDelay = di * 60; 
    if(item.type==='station') renderStationRow(item, di, animDelay);
    else if(item.type==='change') renderChangeRow(item, di, animDelay);
    else if(item.type==='walk') renderWalkRow(item, di, animDelay);
  });

  // Inject Global Moving Train Animation
  if (displayItems.length > 0) {
    const trainWrap = document.createElement('div');
    trainWrap.className = 'global-train-wrap';
    trainWrap.innerHTML = `<div class="global-train"></div>`;
    trainWrap.style.animation = 'fadeIn 1s ease-in forwards';
    trainWrap.style.animationDelay = (displayItems.length * 60 + 600) + 'ms';
    trainWrap.style.opacity = '0';
    routeTrack.appendChild(trainWrap);
  }
}

function renderStationRow(item, di, delay){
  const {name, lineId, color, isFirst, isLast, isInterch, nextLineId, nextIsWalk} = item;
  const row = document.createElement('div'); row.className='rt-row'; row.style.animationDelay=delay+'ms';
  setTimeout(()=>row.classList.add('anim-in'), delay);

  const rail = document.createElement('div'); rail.className='rt-rail';
  if(!isFirst){ const lineAbove=document.createElement('div'); lineAbove.className='rt-rail-line grow'; lineAbove.style.background=color; lineAbove.style.boxShadow=`0 0 6px ${color}55`; lineAbove.style.setProperty('--grow-delay', delay+'ms'); lineAbove.style.setProperty('--shimmer-delay', (di*0.18)+'s'); rail.appendChild(lineAbove); } else { const sp=document.createElement('div'); sp.style.flex='1'; rail.appendChild(sp); }
  
  const dotWrap=document.createElement('div'); dotWrap.className='rt-dot-wrap'; dotWrap.style.color=color;
  if(isFirst||isLast||isInterch){ dotWrap.classList.add('has-pulse'); dotWrap.style.setProperty('--pulse-delay', (Math.random()*0.3)+'s'); dotWrap.appendChild(document.createElement('div')).className='pulse-ring'; dotWrap.appendChild(document.createElement('div')).className='pulse-ring2'; }
  const glow=document.createElement('div'); glow.className='rt-dot-glow'; const gs=isFirst||isLast?26:isInterch?20:16; glow.style.cssText=`width:${gs}px;height:${gs}px;background:${color}`; dotWrap.appendChild(glow);
  const dot=document.createElement('div'); dot.className=`rt-dot ${isFirst||isLast?'d-end':isInterch?'d-interch':'d-norm'}`; dot.style.borderColor=color; if(!isInterch&&!isFirst&&!isLast) dot.style.background='var(--bg)'; else if(isFirst||isLast) dot.style.background=color; dotWrap.appendChild(dot);
  if(isInterch) for(let s=0;s<6;s++) dotWrap.appendChild(document.createElement('div')).className='spark-p';
  rail.appendChild(dotWrap);

  const nextColor=nextLineId?(METRO.lines[nextLineId]?.color||color):color;
  if(!isLast){ const lineBelow=document.createElement('div'); lineBelow.className='rt-rail-line grow'; lineBelow.style.background=nextIsWalk?'#fb923c':nextColor; lineBelow.style.boxShadow=`0 0 6px ${nextIsWalk?'#fb923c':nextColor}55`; lineBelow.style.setProperty('--grow-delay',(delay+70)+'ms'); lineBelow.style.setProperty('--shimmer-delay',((di+0.5)*0.18)+'s'); rail.appendChild(lineBelow); } else { const sp=document.createElement('div'); sp.style.flex='1'; rail.appendChild(sp); }
  setTimeout(()=>{ dotWrap.classList.add('anim-dot'); if(isFirst||isLast||isInterch) dotWrap.classList.add('ripple'); if(isInterch) setTimeout(()=>dotWrap.classList.add('spark'), 80); }, delay+80);
  row.appendChild(rail);

  const content=document.createElement('div'); content.className='rt-content';
  const stnRow=document.createElement('div'); stnRow.className='rt-stn-row';
  let html=`<span class="${isFirst||isLast?'rt-sname bold':'rt-sname'}">${name}</span>`;
  if(isInterch) html+=`<span class="badge badge-interch">Interchange</span>`; if(isFirst) html+=`<span class="badge badge-end">Start</span>`; if(isLast) html+=`<span class="badge badge-end">End</span>`;
  stnRow.innerHTML=html; content.appendChild(stnRow);
  row.appendChild(content); routeTrack.appendChild(row);
}

function renderChangeRow(item, di, delay){
  const {newLine, newColor, boardPlatform, boardDirection} = item;
  const row=document.createElement('div'); row.className='rt-transition'; row.style.animationDelay=delay+'ms'; setTimeout(()=>row.classList.add('anim-in'), delay);
  const rail=document.createElement('div'); rail.className='rt-t-rail'; const d1=document.createElement('div'); d1.className='rt-t-line-dash'; d1.style.color=newColor; d1.style.flex='1'; const icon=document.createElement('div'); icon.className='rt-t-icon'; icon.style.color=newColor; icon.textContent='⇄'; const d2=document.createElement('div'); d2.className='rt-t-line-dash'; d2.style.color=newColor; d2.style.flex='1'; rail.append(d1,icon,d2); setTimeout(()=>icon.classList.add('spin-halo'), delay+200); row.appendChild(rail);
  const content=document.createElement('div'); content.className='rt-t-content'; const pill=document.createElement('span'); pill.className='rt-change-pill'; pill.style.background=`linear-gradient(135deg, ${newColor}, ${newColor}cc)`; pill.style.animationDelay=delay+'ms'; pill.innerHTML=`<span class="pill-dot"></span>Board ${newLine?.name||''}${boardPlatform?`<span class="pfm-tag">${boardPlatform}</span>`:''}`; content.appendChild(pill);
  if(boardDirection){ const dir=document.createElement('div'); dir.className='rt-change-dir'; dir.style.animationDelay=(delay+120)+'ms'; dir.textContent='→ '+boardDirection; content.appendChild(dir); }
  row.appendChild(content); routeTrack.appendChild(row);
}

function renderWalkRow(item, di, delay){
  const {wlInfo} = item; const row = document.createElement('div'); row.className='rt-transition'; row.style.animationDelay=delay+'ms'; setTimeout(()=>row.classList.add('anim-in'), delay);
  const rail = document.createElement('div'); rail.className='rt-t-rail'; const d1 = document.createElement('div'); d1.className='rt-t-line-dash'; d1.style.cssText='color:#fb923c;flex:1'; const icon = document.createElement('div'); icon.className='rt-t-icon'; icon.style.color='#fb923c'; icon.textContent='🚶'; icon.style.border='1.5px dashed #fb923c'; icon.style.fontSize='.9rem'; const d2 = document.createElement('div'); d2.className='rt-t-line-dash'; d2.style.cssText='color:#fb923c;flex:1'; rail.append(d1, icon, d2); row.appendChild(rail);
  const content = document.createElement('div'); content.className='rt-t-content'; const block = document.createElement('div'); block.className='rt-walk-block'; block.innerHTML=`<div class="walk-icon-anim">🚶</div><div><div class="walk-pill-title">Walk ~${wlInfo?.walkMinutes||5} mins</div><div class="walk-pill-sub">${wlInfo?.description||'Walk between stations'}</div></div>`; content.appendChild(block); row.appendChild(content); routeTrack.appendChild(row);
}

function renderSegs(segments){
  segList.innerHTML='';
  segments.forEach((seg,idx)=>{
    const isWalk=seg.isWalk||(seg.line==='walk'), line=isWalk?null:METRO.lines[seg.line], color=line?.color||'#EA580C', count=seg.stations.length, from=seg.stations[0], to=seg.stations[seg.stations.length-1];
    const wlInfo=isWalk?METRO.walkingLinks.find(w=>(w.stationA===from&&w.stationB===to)||(w.stationB===from&&w.stationA===to)):null;
    const block=document.createElement('div'); block.className='seg-block'+(isWalk?' seg-walk':''); block.style.animationDelay=`${idx*120}ms`;
    block.innerHTML=`<div class="seg-head" style="${isWalk?'':'background:'+color}"><div class="seg-num">${idx+1}</div><span class="seg-name">${isWalk?'🚶 Walking Transfer':line?.name||seg.line}</span><span class="seg-cnt">${isWalk?`~${wlInfo?.walkMinutes||5} min walk`:count+' station'+(count>1?'s':'')}</span></div><div class="seg-body"><div class="seg-ft"><span class="seg-st">${from}</span><span class="seg-arr">→</span><span class="seg-st">${to}</span></div>${isWalk&&wlInfo?`<div class="seg-walk-desc">${wlInfo.description}</div>`:''}</div>`;
    segList.appendChild(block);
  });
}

function showErr(msg){ resultsWrap.classList.add('hidden'); errCard.classList.remove('hidden'); errMsg.textContent=msg; setTimeout(()=>errCard.scrollIntoView({behavior:'smooth',block:'start'}),100); }
function hideErr(){errCard.classList.add('hidden')}

function saveRecent(src,dst){ let r=getRecent().filter(x=>!(x.s===src&&x.d===dst)); r.unshift({s:src,d:dst}); r=r.slice(0,5); localStorage.setItem('dm-recent',JSON.stringify(r)); renderRecent(r); }
function getRecent(){try{return JSON.parse(localStorage.getItem('dm-recent')||'[]')}catch{return[]}}
function loadRecent(){renderRecent(getRecent())}
function renderRecent(r){ if(!r.length){recentSec.classList.add('hidden');return} recentSec.classList.remove('hidden'); recentRow.innerHTML=r.map(x=>`<button class="recent-chip" data-s="${x.s}" data-d="${x.d}"><span>${x.s}</span><span class="ch-arr">→</span><span>${x.d}</span></button>`).join(''); recentRow.querySelectorAll('.recent-chip').forEach(c=>c.addEventListener('click',()=>{ srcInput.value=c.dataset.s; dstInput.value=c.dataset.d; selSrc=c.dataset.s; selDst=c.dataset.d; handleFind(); })); }

function renderLegend(){ legendGrid.innerHTML=Object.entries(METRO.lines).map(([,ld])=>`<div class="lg-item"><div class="lg-line" style="background:${ld.color}"></div><span>${ld.name}</span></div>`).join(''); }