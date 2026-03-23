/* ══════════════════════════════════════════════════
   METRO DATA
   Key fix: WALKING_LINKS connects Aqua Line (Noida Metro)
   to the Delhi Metro Blue Line via a ~300m walk between
   Noida Sector 51 (Aqua) ↔ Noida Sector 52 (Blue)
   This is the ONLY physical connection between the two networks.
══════════════════════════════════════════════════ */
const METRO = {
  lines: {
    red:{id:"red",name:"Red Line",color:"#E53935",short:"RL",stations:["Rithala","Rohini West","Rohini East","Madhuban Chowk","Kohat Enclave","Netaji Subhash Place","Keshav Puram","Kanhaiya Nagar","Inderlok","Shastri Nagar","Pratap Nagar","Pulbangash","Tis Hazari","Kashmere Gate","Shastri Park","Seelampur","Welcome","Shahdara","Mansarovar Park","Jhilmil","Dilshad Garden","Shaheed Nagar","Raj Bagh","Shyam Park","Major Mohit Sharma Rajendra Nagar","Arthala","Mohan Nagar","Hindon River","Shaheed Sthal (New Bus Adda)"]},
    yellow:{id:"yellow",name:"Yellow Line",color:"#D4A800",short:"YL",stations:["Samaypur Badli","Rohini Sector 18-19","Haiderpur Badli Mor","Jahangirpuri","Adarsh Nagar","Azadpur","Model Town","GTB Nagar","Vishwa Vidyalaya","Vidhan Sabha","Civil Lines","Kashmere Gate","Chandni Chowk","Chawri Bazar","New Delhi","Rajiv Chowk","Patel Chowk","Central Secretariat","Seva Teerth","Jor Bagh","INA","AIIMS","Green Park","Hauz Khas","Malviya Nagar","Saket","Qutab Minar","Chhattarpur","Sultanpur","Ghitorni","Arjangarh","Guru Dronacharya","Sikanderpur","MG Road","IFFCO Chowk","Millennium City Centre Gurugram"]},
    blue:{id:"blue",name:"Blue Line",color:"#1565C0",short:"BL",stations:["Dwarka Sector 21","Dwarka Sector 8","Dwarka Sector 9","Dwarka Sector 10","Dwarka Sector 11","Dwarka Sector 12","Dwarka Sector 13","Dwarka Sector 14","Dwarka","Dwarka Mor","Nawada","Uttam Nagar West","Uttam Nagar East","Janakpuri West","Janakpuri East","Tilak Nagar","Subhash Nagar","Tagore Garden","Rajouri Garden","Ramesh Nagar","Moti Nagar","Kirti Nagar","Shadipur","Patel Nagar","Rajendra Place","Karol Bagh","Jhandewalan","Ramakrishna Ashram Marg","Rajiv Chowk","Barakhamba Road","Mandi House","Supreme Court","Indraprastha","Yamuna Bank","Laxmi Nagar","Nirman Vihar","Preet Vihar","Karkarduma","Anand Vihar ISBT","Kaushambi","Vaishali","Noida Sector 15","Noida Sector 16","Noida Sector 18","Botanical Garden","Golf Course","Noida City Centre","Noida Sector 34","Noida Sector 52","Noida Sector 61","Noida Sector 59","Noida Sector 62","Noida Electronic City"]},
    blue_branch:{id:"blue_branch",name:"Blue Line (Branch)",color:"#1976D2",short:"BB",stations:["Yamuna Bank","Akshardham","Mayur Vihar Phase-1","Shree Ram Mayur Vihar Mandir","Mayur Vihar Extension","New Ashok Nagar","Noida Sector 15","Noida Sector 16","Noida Sector 18","Botanical Garden","Golf Course","Noida City Centre","Noida Sector 34","Noida Sector 52","Noida Sector 61","Noida Sector 59","Noida Sector 62","Noida Electronic City"]},
    green:{id:"green",name:"Green Line",color:"#2E7D32",short:"GL",stations:["Inderlok","Ashok Park Main","Punjabi Bagh West","ESI-Basaidarapur","Rajouri Garden","Madipur","Paschim Vihar East","Paschim Vihar West","Peera Garhi","Udyog Nagar","Surajmal Stadium","Nangloi","Nangloi Railway Station","Rajdhani Park","Mundka","Mundka Industrial Area","Ghevra","Tikri Kalan","Tikri Border","Pandit Shree Ram Sharma","Bahadurgarh City","Brigadier Hoshiyar Singh","Kirti Nagar","Satguru Ram Singh Marg","Mayapuri"]},
    violet:{id:"violet",name:"Violet Line",color:"#6A1B9A",short:"VL",stations:["Kashmere Gate","Lal Quila","Jama Masjid","Delhi Gate","ITO","Mandi House","Janpath","Central Secretariat","Khan Market","Jawaharlal Nehru Stadium","Jangpura","Lajpat Nagar","Moolchand","Kailash Colony","Nehru Place","Kalkaji Mandir","Govind Puri","Harkesh Nagar Okhla","Jasola Apollo","Sarita Vihar","Mohan Estate","Tughlakabad","Badarpur Border","Sarai","NHPC Chowk","Mewala Maharajpur","Sector 28 Faridabad","Badkhal Mor","Old Faridabad","Neelam Chowk Ajronda","Bata Chowk","Eskay Chowk","Sarai Kale Khan - Nizamuddin","Raja Nahar Singh (Ballabhgarh)"]},
    pink:{id:"pink",name:"Pink Line",color:"#C2185B",short:"PL",stations:["Majlis Park","Azadpur","Shalimar Bagh","Netaji Subhash Place","Shakurpur","Punjabi Bagh East","ESI-Basaidarapur","Rajouri Garden","Mayapuri","Naraina Vihar","Delhi Cantt","Durgabai Deshmukh South Campus","Sir M. Visvesvaraya Moti Bagh","Bhikaji Cama Place","Sarojini Nagar","INA","South Extension","Lajpat Nagar","Sarai Kale Khan - Nizamuddin","Ashram","Dilli Haat - INA","Vinobapuri","Kalkaji Mandir","Okhla NSIC","Sukhdev Vihar","Jamia Millia Islamia","Okhla Vihar","Jasola Vihar Shaheen Bagh","Kalindi Kunj","Okhla Bird Sanctuary","Botanical Garden"]},
    magenta:{id:"magenta",name:"Magenta Line",color:"#AD1457",short:"ML",stations:["Janakpuri West","Dabri Mor - Janakpuri South","Dashrathpuri","Palam","Sadar Bazar Cantonment","Terminal 1 IGI Airport","Shankar Vihar","Vasant Vihar","Munirka","RK Puram","IIT Delhi","Hauz Khas","Panchsheel Park","Chirag Delhi","Greater Kailash","Nehru Enclave","Kalkaji Mandir","Okhla NSIC","Jasola Vihar Shaheen Bagh","Okhla Vihar","Jamia Millia Islamia","Sukhdev Vihar","Botanical Garden"]},
    grey:{id:"grey",name:"Grey Line",color:"#607D8B",short:"GY",stations:["Dwarka","Nangli","Najafgarh","Dhansa Bus Stand"]},
    airport:{id:"airport",name:"Airport Express",color:"#E65100",short:"AE",stations:["New Delhi","Shivaji Stadium","Dhaula Kuan","Delhi Aerocity","IGI Airport T3","Dwarka Sector 21","Yashobhoomi Dwarka Sector 25"]},
    rapid:{id:"rapid",name:"Rapid Metro Gurugram",color:"#00695C",short:"RM",stations:["Sikanderpur","Phase 1","Moulsari Avenue","Cybercity","Belvedere Towers","Sector 53-54","Sector 55-56","Phase 3"]},
    aqua:{id:"aqua",name:"Aqua Line (Noida Metro)",color:"#0097A7",short:"AL",stations:["Noida Sector 51","Noida Sector 50","Noida Sector 76","Noida Sector 101","Noida Sector 81","NSEZ","Noida Sector 83","Noida Sector 137","Noida Sector 142","Noida Sector 143","Noida Sector 144","Noida Sector 145","Noida Sector 146","Noida Sector 147","Noida Sector 148","Knowledge Park II","Pari Chowk","Alpha 1","Delta 1","GNIDA Office","Depot Station"]}
  },

  // Standard metro interchange stations (same platform / paid area transfer)
  interchanges:{
    "Kashmere Gate":["red","yellow","violet"],
    "Rajiv Chowk":["yellow","blue"],
    "Central Secretariat":["yellow","violet"],
    "Hauz Khas":["yellow","magenta"],
    "INA":["yellow","pink"],
    "Dilli Haat - INA":["pink","yellow"],
    "Botanical Garden":["blue","blue_branch","magenta","pink"],
    "Yamuna Bank":["blue","blue_branch"],
    "Mandi House":["blue","violet"],
    "Inderlok":["red","green"],
    "Netaji Subhash Place":["red","pink"],
    "Kirti Nagar":["blue","green"],
    "Rajouri Garden":["blue","green","pink"],
    "ESI-Basaidarapur":["green","pink"],
    "Lajpat Nagar":["violet","pink"],
    "Kalkaji Mandir":["violet","pink","magenta"],
    "New Delhi":["yellow","airport"],
    "Dwarka Sector 21":["blue","airport"],
    "Dwarka":["blue","grey"],
    "Azadpur":["yellow","pink"],
    "Janakpuri West":["blue","magenta"],
    "Sarai Kale Khan - Nizamuddin":["violet","pink"],
    "Sikanderpur":["yellow","rapid"],
    "Mayapuri":["green","pink"],
    "Punjabi Bagh East":["pink","green"],
    "Okhla NSIC":["pink","magenta"],
    "Jasola Vihar Shaheen Bagh":["pink","magenta"],
    "Sukhdev Vihar":["pink","magenta"],
    "Jamia Millia Islamia":["pink","magenta"],
    "Okhla Vihar":["pink","magenta"],
    "Noida Sector 52":["blue","blue_branch"]
  },

  // ★★★ WALKING LINKS: physical walking connections between stations
  // that are NOT on the same metro line but are reachable on foot.
  // This is the KEY fix — Noida Sector 51 (Aqua) ↔ Noida Sector 52 (Blue)
  // These are bidirectional, treated as "walk" type edges in the graph.
  walkingLinks:[
    {
      stationA:"Noida Sector 51",   // Aqua Line terminal
      stationB:"Noida Sector 52",   // Blue Line
      walkMinutes:5,
      description:"~300m walk between Noida Metro (Aqua) and Delhi Metro (Blue Line) stations"
    }
  ]
};

/* ══════════════════════════════════════════════════
   PLATFORM NUMBERS DATABASE
   Format: { "Station Name": { "lineId": platformNumber } }
   Based on Delhi Metro's actual platform layout.
   • Underground stations: numbered 1,2 per track direction
   • Elevated stations: Platform 1 (one side) / Platform 2 (other side)
   • Interchange stations: each line has its own dedicated platform(s)
══════════════════════════════════════════════════ */
const PLATFORM_INFO = {
  // ── Kashmere Gate (Red + Yellow + Violet) ──────
  "Kashmere Gate": {
    red:    { platform: 1, direction: "Towards Shaheed Sthal / Rithala", level: "Upper" },
    yellow: { platform: 2, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Upper" },
    violet: { platform: 3, direction: "Towards Raja Nahar Singh / Kashmere Gate", level: "Lower" }
  },
  // ── Rajiv Chowk (Yellow + Blue) ────────────────
  "Rajiv Chowk": {
    yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Lower" },
    blue:   { platform: 2, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Upper" }
  },
  // ── Central Secretariat (Yellow + Violet) ──────
  "Central Secretariat": {
    yellow:  { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" },
    violet:  { platform: 2, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Underground" }
  },
  // ── Hauz Khas (Yellow + Magenta) ───────────────
  "Hauz Khas": {
    yellow:  { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Underground" }
  },
  // ── INA (Yellow + Pink) ────────────────────────
  "INA": {
    yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" },
    pink:   { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Dilli Haat - INA (Pink + Yellow) ───────────
  "Dilli Haat - INA": {
    pink:   { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    yellow: { platform: 2, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" }
  },
  // ── Botanical Garden (Blue + Magenta + Pink) ───
  "Botanical Garden": {
    blue:        { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" },
    blue_branch: { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" },
    magenta:     { platform: 2, direction: "Towards Janakpuri West", level: "Elevated" },
    pink:        { platform: 3, direction: "Towards Majlis Park / Kalindi Kunj", level: "Elevated" }
  },
  // ── Yamuna Bank (Blue + Blue Branch) ───────────
  "Yamuna Bank": {
    blue:        { platform: 1, direction: "Towards Dwarka Sec 21", level: "Elevated" },
    blue_branch: { platform: 2, direction: "Towards Vaishali / Akshardham", level: "Elevated" }
  },
  // ── Mandi House (Blue + Violet) ────────────────
  "Mandi House": {
    blue:   { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Underground" },
    violet: { platform: 2, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Underground" }
  },
  // ── Inderlok (Red + Green) ─────────────────────
  "Inderlok": {
    red:   { platform: 1, direction: "Towards Rithala / Shaheed Sthal", level: "Elevated" },
    green: { platform: 2, direction: "Towards Kirti Nagar / Brigadier Hoshiyar Singh", level: "Elevated" }
  },
  // ── Netaji Subhash Place (Red + Pink) ──────────
  "Netaji Subhash Place": {
    red:  { platform: 1, direction: "Towards Rithala / Shaheed Sthal", level: "Elevated" },
    pink: { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Kirti Nagar (Blue + Green) ─────────────────
  "Kirti Nagar": {
    blue:  { platform: 1, direction: "Towards Dwarka Sec 21 / Noida Electronic City", level: "Elevated" },
    green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" }
  },
  // ── Rajouri Garden (Blue + Green + Pink) ───────
  "Rajouri Garden": {
    blue:  { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" },
    green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" },
    pink:  { platform: 3, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── ESI-Basaidarapur (Green + Pink) ────────────
  "ESI-Basaidarapur": {
    green: { platform: 1, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" },
    pink:  { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Lajpat Nagar (Violet + Pink) ───────────────
  "Lajpat Nagar": {
    violet: { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" },
    pink:   { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Kalkaji Mandir (Violet + Pink + Magenta) ───
  "Kalkaji Mandir": {
    violet:  { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" },
    pink:    { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 3, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── New Delhi (Yellow + Airport Express) ───────
  "New Delhi": {
    yellow:  { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Underground" },
    airport: { platform: 2, direction: "Towards Yashobhoomi Dwarka Sec 25 / IGI Airport", level: "Underground" }
  },
  // ── Dwarka Sector 21 (Blue + Airport Express) ──
  "Dwarka Sector 21": {
    blue:    { platform: 1, direction: "Towards Vaishali / Noida Electronic City", level: "Elevated" },
    airport: { platform: 2, direction: "Towards New Delhi / Yashobhoomi", level: "Elevated" }
  },
  // ── Dwarka (Blue + Grey) ───────────────────────
  "Dwarka": {
    blue: { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" },
    grey: { platform: 2, direction: "Towards Dhansa Bus Stand", level: "Elevated" }
  },
  // ── Azadpur (Yellow + Pink) ────────────────────
  "Azadpur": {
    yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Elevated" },
    pink:   { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Janakpuri West (Blue + Magenta) ────────────
  "Janakpuri West": {
    blue:    { platform: 1, direction: "Towards Dwarka Sec 21 / Vaishali", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Botanical Garden", level: "Elevated" }
  },
  // ── Sarai Kale Khan - Nizamuddin (Violet + Pink)
  "Sarai Kale Khan - Nizamuddin": {
    violet: { platform: 1, direction: "Towards Kashmere Gate / Raja Nahar Singh", level: "Elevated" },
    pink:   { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Sikanderpur (Yellow + Rapid Metro) ─────────
  "Sikanderpur": {
    yellow: { platform: 1, direction: "Towards Samaypur Badli / Millennium City Centre", level: "Elevated" },
    rapid:  { platform: 2, direction: "Towards Phase 3 / Sector 55-56", level: "Elevated" }
  },
  // ── Mayapuri (Green + Pink) ────────────────────
  "Mayapuri": {
    green: { platform: 1, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" },
    pink:  { platform: 2, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" }
  },
  // ── Punjabi Bagh East (Pink + Green) ───────────
  "Punjabi Bagh East": {
    pink:  { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    green: { platform: 2, direction: "Towards Inderlok / Brigadier Hoshiyar Singh", level: "Elevated" }
  },
  // ── Okhla NSIC (Pink + Magenta) ────────────────
  "Okhla NSIC": {
    pink:    { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── Jasola Vihar Shaheen Bagh (Pink + Magenta) ─
  "Jasola Vihar Shaheen Bagh": {
    pink:    { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── Sukhdev Vihar (Pink + Magenta) ─────────────
  "Sukhdev Vihar": {
    pink:    { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── Jamia Millia Islamia (Pink + Magenta) ──────
  "Jamia Millia Islamia": {
    pink:    { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── Okhla Vihar (Pink + Magenta) ───────────────
  "Okhla Vihar": {
    pink:    { platform: 1, direction: "Towards Majlis Park / Botanical Garden", level: "Elevated" },
    magenta: { platform: 2, direction: "Towards Janakpuri West / Botanical Garden", level: "Elevated" }
  },
  // ── Noida Sector 52 (Blue + Blue Branch) ───────
  "Noida Sector 52": {
    blue:        { platform: 1, direction: "Towards Dwarka Sec 21", level: "Elevated" },
    blue_branch: { platform: 2, direction: "Towards Yamuna Bank / Vaishali", level: "Elevated" }
  }
};

/**
 * getPlatformInfo(station, fromLine, toLine)
 * Returns an object describing which platform to use when
 * arriving on `fromLine` and boarding `toLine` at `station`.
 */
function getPlatformInfo(station, fromLine, toLine) {
  const info = PLATFORM_INFO[station];
  if (!info) return null;
  const arrive = info[fromLine];
  const board  = info[toLine];
  if (!board) return null;
  return {
    alight: arrive ? `Platform ${arrive.platform}` : null,
    board:  `Platform ${board.platform}`,
    boardDirection: board.direction,
    boardLevel: board.level
  };
}

/* ══════════════════════════════════════════════════
   GRAPH + DIJKSTRA
   Each edge carries: {station, line, weight, isWalk}
   Walking edges get higher weight to prefer metro routes
   but they are available as valid paths.
══════════════════════════════════════════════════ */

function buildGraph() {
  const g = {};

  function edge(a, b, lineId, weight=1, isWalk=false) {
    if (!g[a]) g[a] = [];
    if (!g[b]) g[b] = [];
    g[a].push({station:b, line:lineId, weight, isWalk});
    g[b].push({station:a, line:lineId, weight, isWalk});
  }

  // Normal metro line edges
  for (const [lid, ld] of Object.entries(METRO.lines)) {
    const st = ld.stations;
    for (let i = 0; i < st.length - 1; i++) {
      edge(st[i], st[i+1], lid);
    }
  }

  // Walking link edges — high weight (8) to penalise but allow
  for (const wl of METRO.walkingLinks) {
    edge(wl.stationA, wl.stationB, "walk", 8, true);
  }

  return g;
}

function findShortestPath(src, dst) {
  const graph = buildGraph();
  const LINE_CHANGE_PENALTY = 3;

  const dist = {};
  const prev = {};
  const prevLine = {};
  const prevWalk = {};
  const visited = new Set();
  const pq = [[0, src, null]];

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
      // Line change penalty applies for non-walk edges
      const penalty = (!nb.isWalk && curLine && curLine !== nb.line) ? LINE_CHANGE_PENALTY : 0;
      const nc = cost + nb.weight + penalty;
      if (nc < dist[nb.station]) {
        dist[nb.station] = nc;
        prev[nb.station] = cur;
        prevLine[nb.station] = nb.line;
        prevWalk[nb.station] = nb.isWalk;
        pq.push([nc, nb.station, nb.line]);
      }
    }
  }

  if (dist[dst] === Infinity) return null;

  // Reconstruct
  const path = [], pathLines = [], pathWalk = [];
  let cur = dst;
  while (cur !== undefined) {
    path.unshift(cur);
    pathLines.unshift(prevLine[cur]);
    pathWalk.unshift(prevWalk[cur] || false);
    cur = prev[cur];
  }

  // Build segments (group by line, treating walk as special)
  const segments = [];
  let si = 0;
  for (let i = 1; i < pathLines.length; i++) {
    const lineChanged = pathLines[i] !== pathLines[i-1] && pathLines[i] !== null;
    if (lineChanged) {
      segments.push({
        line: pathLines[i-1] || pathLines[i],
        stations: path.slice(si, i+1),
        isWalk: pathWalk[i-1] || false
      });
      si = i;
    }
  }
  if (si < path.length) {
    segments.push({
      line: pathLines[si] || pathLines[pathLines.length-1],
      stations: path.slice(si),
      isWalk: false
    });
  }

  // Merge walk segments properly — a walk edge appears as a 2-station segment
  // with line="walk"; extract them and attach as walk markers
  const cleanSegments = [];
  for (const seg of segments) {
    if (seg.line === "walk") {
      cleanSegments.push({...seg, isWalk:true});
    } else {
      cleanSegments.push(seg);
    }
  }

  const lineChanges = cleanSegments.filter(s => !s.isWalk).length - 1;
  const walkCount = cleanSegments.filter(s => s.isWalk).length;
  const metroStations = path.filter((_,i) => !pathWalk[i]).length;

  return {
    path, pathLines, pathWalk,
    segments: cleanSegments,
    totalStations: path.length,
    lineChanges: Math.max(0, lineChanges),
    walkCount,
    estimatedMinutes: Math.round((path.length - 1) * 2.5 + lineChanges * 5 + walkCount * 6)
  };
}

function getAllStations() {
  const s = new Set();
  for (const ld of Object.values(METRO.lines))
    for (const st of ld.stations) s.add(st);
  return Array.from(s).sort();
}

function getStationLines(name) {
  return Object.entries(METRO.lines)
    .filter(([,ld]) => ld.stations.includes(name))
    .map(([id]) => id);
}

/* ══════════════════════════════════════════════════
   ANIMATED BACKGROUND CANVAS
══════════════════════════════════════════════════ */
(function() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = Array.from({length:55}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.5+0.4,
      vx: (Math.random()-0.5)*0.3,
      vy: (Math.random()-0.5)*0.3,
      a: Math.random()*0.5+0.2
    }));
  }

  function draw() {
    ctx.clearRect(0,0,W,H);
    const col = isDark() ? '150,140,255' : '100,80,220';
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0) p.x=W; if (p.x>W) p.x=0;
      if (p.y<0) p.y=H; if (p.y>H) p.y=0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${col},${p.a})`;
      ctx.fill();
    }
    // Draw connecting lines between close particles
    for (let i=0;i<particles.length;i++) {
      for (let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if (d<100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(${col},${0.12*(1-d/100)})`;
          ctx.lineWidth=0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  initParticles();
  draw();
  window.addEventListener('resize', () => { resize(); initParticles(); });
})();

/* ══════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════ */
const FARE_TABLE = [
  {max:2,fare:10},{max:5,fare:20},{max:12,fare:30},
  {max:21,fare:40},{max:32,fare:50},{max:Infinity,fare:60}
];

const $ = id => document.getElementById(id);
const srcInput=$('srcInput'), dstInput=$('dstInput');
const srcDd=$('srcDd'), dstDd=$('dstDd');
const swapBtn=$('swapBtn'), findBtn=$('findBtn');
const themeBtn=$('themeBtn'), themeIcon=$('themeIcon');
const recentSec=$('recentSec'), recentRow=$('recentRow');
const resultsWrap=$('resultsWrap'), errCard=$('errCard'), errMsg=$('errMsg');
const sStations=$('sStations'), sTime=$('sTime'), sChanges=$('sChanges'), sFare=$('sFare');
const routeTrack=$('routeTrack'), rvPath=$('rvPath'), segList=$('segList');
const legendGrid=$('legendGrid');

let allStations=[], selSrc='', selDst='', activeDd=null, fi=-1;

// Init
(function init(){
  allStations = getAllStations();
  renderLegend();
  loadRecent();
  bindEvents();
  const t=localStorage.getItem('dm-theme')||'dark';
  document.documentElement.setAttribute('data-theme',t);
  themeIcon.textContent = t==='dark'?'◐':'☀';
})();

function bindEvents(){
  themeBtn.addEventListener('click',()=>{
    const c=document.documentElement.getAttribute('data-theme');
    const n=c==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',n);
    localStorage.setItem('dm-theme',n);
    themeIcon.textContent=n==='dark'?'◐':'☀';
  });
  swapBtn.addEventListener('click',()=>{
    swapBtn.classList.add('spin');
    setTimeout(()=>swapBtn.classList.remove('spin'),400);
    [srcInput.value,dstInput.value]=[dstInput.value,srcInput.value];
    [selSrc,selDst]=[selDst,selSrc];
  });
  findBtn.addEventListener('click', handleFind);
  setupAC(srcInput,srcDd,v=>{selSrc=v});
  setupAC(dstInput,dstDd,v=>{selDst=v});
  document.addEventListener('click',e=>{
    if(!e.target.closest('.ac-wrap')) closeAllDd();
  });
  [srcInput,dstInput].forEach(inp=>{
    inp.addEventListener('keydown',e=>{
      if(e.key==='Enter'&&!activeDd) handleFind();
    });
  });
}

/* ── Autocomplete ── */
function setupAC(inp, dd, onSel){
  inp.addEventListener('input',()=>{
    fi=-1;
    const q=inp.value.trim().toLowerCase();
    if(!q){closeDd(dd);return}
    const m=allStations.filter(s=>s.toLowerCase().includes(q)).slice(0,14);
    renderDd(m,dd,inp,onSel);
  });
  inp.addEventListener('focus',()=>{
    const q=inp.value.trim().toLowerCase();
    if(q){
      const m=allStations.filter(s=>s.toLowerCase().includes(q)).slice(0,14);
      renderDd(m,dd,inp,onSel);
    }
  });
  inp.addEventListener('keydown',e=>{
    const items=dd.querySelectorAll('.dd-item');
    if(!items.length)return;
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
    return`<div class="dd-item" data-s="${s}">
      <span class="dd-line-dots">${dots}</span>
      <span class="dd-sname">${hlMatch(s,inp.value)}</span>
    </div>`;
  }).join('');
  dd.querySelectorAll('.dd-item').forEach(item=>{
    item.addEventListener('mousedown',e=>{
      e.preventDefault();
      inp.value=item.dataset.s;
      onSel(item.dataset.s);
      closeDd(dd);
    });
  });
  dd.classList.add('open');
  activeDd=dd;
}

function hlMatch(text,q){
  if(!q)return text;
  const i=text.toLowerCase().indexOf(q.toLowerCase());
  if(i===-1)return text;
  return text.slice(0,i)+`<strong>${text.slice(i,i+q.length)}</strong>`+text.slice(i+q.length);
}
function hlItem(items){
  items.forEach((it,i)=>it.classList.toggle('hi',i===fi));
  if(items[fi])items[fi].scrollIntoView({block:'nearest'});
}
function closeDd(dd){dd.classList.remove('open');if(activeDd===dd)activeDd=null}
function closeAllDd(){[srcDd,dstDd].forEach(closeDd)}

/* ── Route finding ── */
function handleFind(){
  if(!selSrc) selSrc=srcInput.value.trim();
  if(!selDst) selDst=dstInput.value.trim();
  selSrc=fuzzy(selSrc); selDst=fuzzy(selDst);
  srcInput.value=selSrc; dstInput.value=selDst;

  if(!selSrc||!selDst){showErr('Please enter both source and destination.');return}
  if(selSrc===selDst){showErr('Source and destination are the same station.');return}
  if(!allStations.includes(selSrc)){showErr(`Station not found: "${selSrc}"`);return}
  if(!allStations.includes(selDst)){showErr(`Station not found: "${selDst}"`);return}

  const r=findShortestPath(selSrc,selDst);
  if(!r){showErr('No route found. The stations may not be connected in this network.');return}

  saveRecent(selSrc,selDst);
  showResults(r,selSrc,selDst);
}

function fuzzy(q){
  if(!q)return'';
  const l=q.trim().toLowerCase();
  return allStations.find(s=>s.toLowerCase()===l)||
         allStations.find(s=>s.toLowerCase().includes(l))||q;
}

/* ── Results rendering ── */
function showResults(r,src,dst){
  hideErr();
  resultsWrap.classList.remove('hidden');

  // Color-reactive background: tint the orb to the first line's color
  const firstLineId = r.pathLines.find(l=>l&&l!=='walk');
  const firstColor = firstLineId ? METRO.lines[firstLineId]?.color : null;
  if(firstColor){
    const orb1 = document.querySelector('.bg-orb-1');
    const orb2 = document.querySelector('.bg-orb-2');
    if(orb1) orb1.style.background=`radial-gradient(circle,${firstColor}22 0%,transparent 65%)`;
    if(orb2) orb2.style.background=`radial-gradient(circle,${firstColor}14 0%,transparent 65%)`;
    // Reset after 3s
    setTimeout(()=>{
      if(orb1) orb1.style.background='';
      if(orb2) orb2.style.background='';
    }, 3000);
  }

  // Stats — cascade with counter animation
  animateNumber(sStations, r.totalStations, '');
  setTimeout(()=>{ sTime.textContent=`~${r.estimatedMinutes}m`; }, 120);
  setTimeout(()=>{ animateNumber(sChanges, r.lineChanges + r.walkCount, ''); }, 240);
  setTimeout(()=>{ sFare.textContent=`₹${calcFare(r.totalStations)}`; }, 360);

  rvPath.textContent=`${src}  →  ${dst}`;
  renderTrack(r);
  renderSegs(r.segments);

  setTimeout(()=>resultsWrap.scrollIntoView({behavior:'smooth',block:'start'}),100);
}

function animateNumber(el, target, suffix) {
  let cur=0, step=Math.max(1,Math.floor(target/20));
  el.textContent='0'+suffix;
  const iv=setInterval(()=>{
    cur=Math.min(cur+step,target);
    el.textContent=cur+suffix;
    if(cur>=target)clearInterval(iv);
  },30);
}

function calcFare(n){
  for(const t of FARE_TABLE) if(n<=t.max) return t.fare;
  return 60;
}

/* ══════════════════════════════════════════════════
   ROUTE TRACK — pure HTML document flow
   No absolute positioning, no SVG+overlay mismatch.
   Layout: each item is a flex row (rail col + content col).
   Rail col = line segments + dot. Content col = name + badges + platform detail.
   Everything sizes naturally, wraps correctly on mobile.
══════════════════════════════════════════════════ */
function renderTrack(result){
  routeTrack.innerHTML='';
  const {path, pathLines, pathWalk} = result;
  const interchSet = new Set(Object.keys(METRO.interchanges));

  // Build a flat list of "display items" in order
  // Each item: {type:'station'|'change'|'walk', ...data}
  const displayItems = [];

  for(let i=0;i<path.length;i++){
    const lineId  = pathLines[i];
    const isWalk  = pathWalk[i];
    const line    = METRO.lines[lineId];
    const color   = line?.color||'#888';
    const isFirst = i===0, isLast = i===path.length-1;
    const isInterch = interchSet.has(path[i]) && !isFirst && !isLast;

    // Insert transition row BEFORE this station when line changes
    if(i>0){
      const prevLineId  = pathLines[i-1];
      const prevWalk    = pathWalk[i-1];
      if(isWalk){
        // Walking transfer
        const wlInfo = METRO.walkingLinks.find(w=>
          (w.stationA===path[i-1]&&w.stationB===path[i])||
          (w.stationB===path[i-1]&&w.stationA===path[i])
        );
        displayItems.push({type:'walk', wlInfo,
          prevColor: METRO.lines[prevLineId]?.color||'#fb923c'});
      } else if(!prevWalk && lineId!==prevLineId){
        // Line change
        const pfm = getPlatformInfo(path[i], prevLineId, lineId);
        displayItems.push({type:'change',
          newLine:line, newColor:color,
          prevLineId, newLineId:lineId,
          boardPlatform: pfm?.board||null,
          boardDirection: pfm?.boardDirection||null});
      }
    }

    // Station item
    displayItems.push({type:'station',
      name:path[i], lineId, color, line,
      isFirst, isLast, isInterch, isWalk,
      prevLineId: i>0 ? pathLines[i-1] : null,
      nextLineId: i<path.length-1 ? pathLines[i+1] : null,
      nextIsWalk: i<path.length-1 ? pathWalk[i+1] : false,
    });
  }

  // ── Render each display item ──────────────────
  displayItems.forEach((item, di)=>{
    const animDelay = di * 40; // stagger

    if(item.type==='station'){
      renderStationRow(item, di, animDelay);
    } else if(item.type==='change'){
      renderChangeRow(item, di, animDelay);
    } else if(item.type==='walk'){
      renderWalkRow(item, di, animDelay);
    }
  });
}

/* ── Station row ── */
function renderStationRow(item, di, delay){
  const {name, lineId, color, isFirst, isLast, isInterch, isWalk,
         prevLineId, nextLineId, nextIsWalk} = item;

  const row = document.createElement('div');
  row.className='rt-row';
  row.style.animationDelay=delay+'ms';
  setTimeout(()=>row.classList.add('anim-in'), delay);

  // ── Rail ──
  const rail = document.createElement('div');
  rail.className='rt-rail';

  if(!isFirst){
    const lineAbove = document.createElement('div');
    lineAbove.className='rt-rail-line grow';
    lineAbove.style.background=color;
    // Add subtle glow shadow on the line
    lineAbove.style.boxShadow=`0 0 6px ${color}55`;
    lineAbove.style.setProperty('--grow-delay', delay+'ms');
    lineAbove.style.setProperty('--shimmer-delay', (di*0.18)+'s');
    rail.appendChild(lineAbove);
  } else {
    const sp=document.createElement('div'); sp.style.flex='1'; rail.appendChild(sp);
  }

  // Dot wrapper
  const dotWrap = document.createElement('div');
  dotWrap.className='rt-dot-wrap';
  dotWrap.style.color=color;

  // Pulse rings for start/end/interchange
  if(isFirst||isLast||isInterch){
    dotWrap.classList.add('has-pulse');
    dotWrap.style.setProperty('--pulse-delay', (Math.random()*0.3)+'s');
    const r1=document.createElement('div'); r1.className='pulse-ring'; dotWrap.appendChild(r1);
    const r2=document.createElement('div'); r2.className='pulse-ring2'; dotWrap.appendChild(r2);
  }

  // Glow blob
  const glow=document.createElement('div');
  glow.className='rt-dot-glow';
  const gs=isFirst||isLast?26:isInterch?20:16;
  glow.style.cssText=`width:${gs}px;height:${gs}px;background:${color}`;
  dotWrap.appendChild(glow);

  // Dot
  const dot=document.createElement('div');
  dot.className=`rt-dot ${isFirst||isLast?'d-end':isInterch?'d-interch':'d-norm'}`;
  dot.style.borderColor=color;
  if(!isInterch&&!isFirst&&!isLast) dot.style.background='var(--bg)';
  else if(isFirst||isLast) dot.style.background=color;
  dotWrap.appendChild(dot);

  // Spark particles for interchange nodes
  if(isInterch){
    for(let s=0;s<6;s++){
      const sp=document.createElement('div'); sp.className='spark-p'; dotWrap.appendChild(sp);
    }
  }

  rail.appendChild(dotWrap);

  const nextColor=nextLineId?(METRO.lines[nextLineId]?.color||color):color;
  if(!isLast){
    const lineBelow=document.createElement('div');
    lineBelow.className='rt-rail-line grow';
    lineBelow.style.background=nextIsWalk?'#fb923c':nextColor;
    lineBelow.style.boxShadow=`0 0 6px ${nextIsWalk?'#fb923c':nextColor}55`;
    lineBelow.style.setProperty('--grow-delay',(delay+50)+'ms');
    lineBelow.style.setProperty('--shimmer-delay',((di+0.5)*0.18)+'s');
    rail.appendChild(lineBelow);
  } else {
    const sp=document.createElement('div'); sp.style.flex='1'; rail.appendChild(sp);
  }

  // Trigger dot animation + sparks
  setTimeout(()=>{
    dotWrap.classList.add('anim-dot');
    if(isFirst||isLast||isInterch) dotWrap.classList.add('ripple');
    if(isInterch) setTimeout(()=>dotWrap.classList.add('spark'), 80);
  }, delay+80);

  row.appendChild(rail);

  // ── Content ──
  const content=document.createElement('div');
  content.className='rt-content';

  const stnRow=document.createElement('div');
  stnRow.className='rt-stn-row';

  const nc=isFirst||isLast?'rt-sname bold':'rt-sname';
  let html=`<span class="${nc}">${name}</span>`;
  if(isInterch) html+=`<span class="badge badge-interch">Interchange</span>`;
  if(isFirst)   html+=`<span class="badge badge-end">Start</span>`;
  if(isLast)    html+=`<span class="badge badge-end">End</span>`;
  if(PLATFORM_INFO[name]?.[lineId]){
    const p=PLATFORM_INFO[name][lineId];
    html+=`<span class="badge badge-platform">Plt ${p.platform}</span>`;
  }
  stnRow.innerHTML=html;
  content.appendChild(stnRow);

  // Platform detail — only when changing lines
  const isChangingNext=isInterch&&nextLineId&&nextLineId!==lineId&&!nextIsWalk;
  const isChangingHere=isInterch&&prevLineId&&prevLineId!==lineId;
  
  // UPDATED: Added a transition row indicating "Move: Platform A to Platform B"
  if((isChangingNext||isChangingHere)&&PLATFORM_INFO[name]){
    const pfmData=PLATFORM_INFO[name];
    const rows=[];
    const curPfm=pfmData[lineId];
    if(curPfm){
      rows.push({color:METRO.lines[lineId]?.color||color,platform:`Platform ${curPfm.platform}`,label:isChangingHere?'Arrived at':'You are on',direction:curPfm.direction,level:curPfm.level,highlight:false});
    }
    const targetLineId=isChangingNext?nextLineId:null;
    if(targetLineId&&pfmData[targetLineId]){
      const tgt=pfmData[targetLineId];
      
      // Inject the transition arrow here
      if(curPfm) {
          rows.push({
             isTransition: true,
             text: `Move: Platform ${curPfm.platform} ➔ Platform ${tgt.platform}`
          });
      }

      rows.push({color:METRO.lines[targetLineId]?.color||'#888',platform:`Platform ${tgt.platform}`,label:'Board from',direction:tgt.direction,level:tgt.level,highlight:true});
    }
    if(rows.length){
      const pfmDetail=document.createElement('div');
      pfmDetail.className='rt-pfm-detail';
      pfmDetail.innerHTML=rows.map(r=>{
        if (r.isTransition) {
           return `
             <div class="pfm-walk-path">
               <div class="pfm-walk-line"></div>
               <span>${r.text}</span>
             </div>
           `;
        }
        return `
        <div class="rt-pfm-row${r.highlight?' rt-pfm-row-highlight':''}">
          <span class="pfm-line-dot" style="background:${r.color}"></span>
          <span class="pfm-label-txt">${r.label}</span>
          <span class="pfm-num${r.highlight?' pfm-num-go':''}">${r.platform}</span>
          <span class="pfm-dir">${r.direction}</span>
          <span class="pfm-lvl">${r.level}</span>
        </div>`
      }).join('');
      content.appendChild(pfmDetail);
    }
  }

  row.appendChild(content);
  routeTrack.appendChild(row);
}

/* ── Line-change transition row ── */
function renderChangeRow(item, di, delay){
  const {newLine, newColor, prevLineId, boardPlatform, boardDirection} = item;

  const row=document.createElement('div');
  row.className='rt-transition';
  row.style.animationDelay=delay+'ms';
  setTimeout(()=>row.classList.add('anim-in'), delay);

  // Rail — dashed connector with spinning halo icon
  const rail=document.createElement('div');
  rail.className='rt-t-rail';
  const d1=document.createElement('div'); d1.className='rt-t-line-dash'; d1.style.color=newColor; d1.style.flex='1';
  const icon=document.createElement('div'); icon.className='rt-t-icon'; icon.style.color=newColor; icon.textContent='⇄';
  const d2=document.createElement('div'); d2.className='rt-t-line-dash'; d2.style.color=newColor; d2.style.flex='1';
  rail.append(d1,icon,d2);
  // Trigger halo spin after entrance
  setTimeout(()=>icon.classList.add('spin-halo'), delay+200);
  row.appendChild(rail);

  const content=document.createElement('div');
  content.className='rt-t-content';

  const pill=document.createElement('span');
  pill.className='rt-change-pill';
  pill.style.background=`linear-gradient(135deg, ${newColor}, ${newColor}cc)`;
  pill.style.animationDelay=delay+'ms';
  const pfmTag=boardPlatform?`<span class="pfm-tag">${boardPlatform}</span>`:'';
  pill.innerHTML=`<span class="pill-dot"></span>Board ${newLine?.name||''}${pfmTag}`;
  content.appendChild(pill);

  if(boardDirection){
    const dir=document.createElement('div');
    dir.className='rt-change-dir';
    dir.style.animationDelay=(delay+120)+'ms';
    dir.textContent='→ '+boardDirection;
    content.appendChild(dir);
  }

  row.appendChild(content);
  routeTrack.appendChild(row);
}

/* ── Walk transition row ── */
function renderWalkRow(item, di, delay){
  const {wlInfo} = item;

  const row = document.createElement('div');
  row.className='rt-transition';
  row.style.animationDelay=delay+'ms';
  setTimeout(()=>row.classList.add('anim-in'), delay);

  // Rail — dashed orange
  const rail = document.createElement('div');
  rail.className='rt-t-rail';
  const d1 = document.createElement('div');
  d1.className='rt-t-line-dash';
  d1.style.cssText='color:#fb923c;flex:1';
  const icon = document.createElement('div');
  icon.className='rt-t-icon';
  icon.style.color='#fb923c';
  icon.textContent='🚶';
  icon.style.border='1.5px dashed #fb923c';
  icon.style.fontSize='.9rem';
  const d2 = document.createElement('div');
  d2.className='rt-t-line-dash';
  d2.style.cssText='color:#fb923c;flex:1';
  rail.append(d1, icon, d2);
  row.appendChild(rail);

  // Content
  const content = document.createElement('div');
  content.className='rt-t-content';
  const block = document.createElement('div');
  block.className='rt-walk-block';
  block.innerHTML=`
    <div class="walk-icon-anim">🚶</div>
    <div>
      <div class="walk-pill-title">Walk ~${wlInfo?.walkMinutes||5} mins</div>
      <div class="walk-pill-sub">${wlInfo?.description||'Walk between stations'}</div>
    </div>`;
  content.appendChild(block);
  row.appendChild(content);
  routeTrack.appendChild(row);
}

/* ── Segments breakdown ── */
function renderSegs(segments){
  segList.innerHTML='';
  segments.forEach((seg,idx)=>{
    const isWalk=seg.isWalk||(seg.line==='walk');
    const line=isWalk?null:METRO.lines[seg.line];
    const color=line?.color||'#EA580C';
    const count=seg.stations.length;
    const from=seg.stations[0];
    const to=seg.stations[seg.stations.length-1];
    const wlInfo=isWalk?METRO.walkingLinks.find(w=>
      (w.stationA===from&&w.stationB===to)||(w.stationB===from&&w.stationA===to)
    ):null;

    // Platform info rows
    let platformHTML='';
    if(!isWalk && line){
      const boardPfm=PLATFORM_INFO[from]?.[seg.line];
      const nextSeg=idx<segments.length-1?segments[idx+1]:null;
      const nextLine=nextSeg&&!nextSeg.isWalk?nextSeg.line:null;
      const nextPfm=nextLine&&PLATFORM_INFO[to]?.[nextLine];
      const nextLineData=nextLine?METRO.lines[nextLine]:null;
      let rows=[];
      if(boardPfm){
        rows.push(`<div class="seg-pfm-row">
          <span class="seg-pfm-dot" style="background:${color}"></span>
          <span class="seg-pfm-label">Board at</span>
          <span class="seg-pfm-badge">Platform ${boardPfm.platform}</span>
          <span class="seg-pfm-dir">${boardPfm.direction}</span>
        </div>`);
      }
      
      // Inject the transition arrow into the Breakdown section too
      if(nextPfm&&nextLineData){
        if (boardPfm) {
            rows.push(`
              <div class="pfm-walk-path" style="margin-left: 2px;">
                <div class="pfm-walk-line"></div>
                <span>Move: Platform ${boardPfm.platform} ➔ Platform ${nextPfm.platform}</span>
              </div>
            `);
        }
        
        rows.push(`<div class="seg-pfm-row">
          <span class="seg-pfm-dot" style="background:${nextLineData.color}"></span>
          <span class="seg-pfm-label">Change to</span>
          <span class="seg-pfm-badge">Platform ${nextPfm.platform}</span>
          <span class="seg-pfm-dir">${nextLineData.name}</span>
        </div>`);
      }
      if(rows.length) platformHTML=`<div class="seg-pfm-block">${rows.join('')}</div>`;
    }

    const block=document.createElement('div');
    block.className='seg-block'+(isWalk?' seg-walk':'');
    block.style.animationDelay=`${idx*80}ms`;
    block.innerHTML=`
      <div class="seg-head" style="${isWalk?'':'background:'+color}">
        <div class="seg-num">${idx+1}</div>
        <span class="seg-name">${isWalk?'🚶 Walking Transfer':line?.name||seg.line}</span>
        <span class="seg-cnt">${isWalk?`~${wlInfo?.walkMinutes||5} min walk`:count+' station'+(count>1?'s':'')}</span>
      </div>
      <div class="seg-body">
        <div class="seg-ft">
          <span class="seg-st">${from}</span>
          <span class="seg-arr">→</span>
          <span class="seg-st">${to}</span>
        </div>
        ${isWalk&&wlInfo?`<div class="seg-walk-desc">${wlInfo.description}</div>`:''}
        ${platformHTML}
      </div>`;
    segList.appendChild(block);
  });
}

/* ── Error ── */
function showErr(msg){
  resultsWrap.classList.add('hidden');
  errCard.classList.remove('hidden');
  errMsg.textContent=msg;
  setTimeout(()=>errCard.scrollIntoView({behavior:'smooth',block:'start'}),100);
}
function hideErr(){errCard.classList.add('hidden')}

/* ── Recent searches ── */
function saveRecent(src,dst){
  let r=getRecent().filter(x=>!(x.s===src&&x.d===dst));
  r.unshift({s:src,d:dst});
  r=r.slice(0,5);
  localStorage.setItem('dm-recent',JSON.stringify(r));
  renderRecent(r);
}
function getRecent(){try{return JSON.parse(localStorage.getItem('dm-recent')||'[]')}catch{return[]}}
function loadRecent(){renderRecent(getRecent())}
function renderRecent(r){
  if(!r.length){recentSec.classList.add('hidden');return}
  recentSec.classList.remove('hidden');
  recentRow.innerHTML=r.map(x=>
    `<button class="recent-chip" data-s="${x.s}" data-d="${x.d}">
      <span>${x.s}</span><span class="ch-arr">→</span><span>${x.d}</span>
    </button>`
  ).join('');
  recentRow.querySelectorAll('.recent-chip').forEach(c=>{
    c.addEventListener('click',()=>{
      srcInput.value=c.dataset.s; dstInput.value=c.dataset.d;
      selSrc=c.dataset.s; selDst=c.dataset.d;
      handleFind();
    });
  });
}

/* ── Legend ── */
function renderLegend(){
  legendGrid.innerHTML=Object.entries(METRO.lines).map(([,ld])=>
    `<div class="lg-item">
      <div class="lg-line" style="background:${ld.color}"></div>
      <span>${ld.name}</span>
    </div>`
  ).join('');
}