// ===================== గీతా అమృతం — Site Data =====================
// Chapters: traditional 18 chapters of Srimad Bhagavad Gita with Telugu names.
// verse_count values follow the commonly cited traditional count (700 total).

const CHAPTERS = [
  {n:1,  te:"అర్జున విషాద యోగము", sa:"Arjuna Vishada Yoga", shatka:1,
   summary:"యుద్ధభూమిలో బంధువులను చూసిన అర్జునుడు మోహంతో, శోకంతో నిండి యుద్ధం చేయనని నిరాకరించే అధ్యాయం.", verses:47},
  {n:2,  te:"సాంఖ్య యోగము", sa:"Sankhya Yoga", shatka:1,
   summary:"ఆత్మ శాశ్వతమైనదని, శరీరం నశ్వరమని బోధిస్తూ శ్రీకృష్ణుడు జ్ఞానయోగానికి పునాది వేసే అధ్యాయం.", verses:72},
  {n:3,  te:"కర్మ యోగము", sa:"Karma Yoga", shatka:1,
   summary:"ఫలాపేక్ష లేకుండా కర్తవ్య నిర్వహణ చేయడమే నిజమైన కర్మయోగమని వివరించే అధ్యాయం.", verses:43},
  {n:4,  te:"జ్ఞానకర్మసన్న్యాస యోగము", sa:"Jnana Karma Sanyasa Yoga", shatka:1,
   summary:"జ్ఞానం ద్వారా కర్మను త్యజించడం అంటే ఏమిటో, దివ్య జన్మల రహస్యాన్ని తెలిపే అధ్యాయం.", verses:42},
  {n:5,  te:"కర్మసన్న్యాస యోగము", sa:"Karma Sanyasa Yoga", shatka:1,
   summary:"సన్న్యాసం, కర్మయోగం రెండూ ఒకే గమ్యానికి చేర్చే మార్గాలని సమన్వయపరిచే అధ్యాయం.", verses:29},
  {n:6,  te:"ఆత్మసంయమ యోగము", sa:"Atma Samyama Yoga", shatka:1,
   summary:"ధ్యానం, మనోనిగ్రహం ద్వారా ఆత్మసాక్షాత్కారానికి మార్గాన్ని బోధించే అధ్యాయం.", verses:47},
  {n:7,  te:"జ్ఞానవిజ్ఞాన యోగము", sa:"Jnana Vijnana Yoga", shatka:2,
   summary:"పరమేశ్వరుని తత్త్వాన్ని, ప్రకృతి-పురుష భేదాన్ని విశదీకరించే అధ్యాయం.", verses:30},
  {n:8,  te:"అక్షరబ్రహ్మ యోగము", sa:"Akshara Brahma Yoga", shatka:2,
   summary:"అంత్యకాల చింతన, బ్రహ్మము యొక్క స్వరూపం గురించి వివరించే అధ్యాయం.", verses:28},
  {n:9,  te:"రాజవిద్యారాజగుహ్య యోగము", sa:"Raja Vidya Raja Guhya Yoga", shatka:2,
   summary:"అత్యంత రహస్యమైన, రాజోచితమైన జ్ఞానాన్ని, అనన్య భక్తి మహిమను తెలిపే అధ్యాయం.", verses:34},
  {n:10, te:"విభూతి యోగము", sa:"Vibhuti Yoga", shatka:2,
   summary:"సృష్టిలోని ప్రతి శ్రేష్ఠమైన వస్తువులోనూ తన విభూతిని వివరించే అధ్యాయం.", verses:42},
  {n:11, te:"విశ్వరూప సందర్శన యోగము", sa:"Vishwarupa Sandarshana Yoga", shatka:2,
   summary:"అర్జునుడికి శ్రీకృష్ణుడు తన విశ్వరూపాన్ని ప్రదర్శించే అద్భుత అధ్యాయం.", verses:55},
  {n:12, te:"భక్తి యోగము", sa:"Bhakti Yoga", shatka:2,
   summary:"సగుణ, నిర్గుణ ఉపాసనలలో భక్తి మార్గం సులభమైనదని బోధించే అధ్యాయం.", verses:20},
  {n:13, te:"క్షేత్రక్షేత్రజ్ఞవిభాగ యోగము", sa:"Kshetra Kshetrajna Vibhaga Yoga", shatka:3,
   summary:"శరీరం (క్షేత్రం), ఆత్మ (క్షేత్రజ్ఞుడు) మధ్య భేదాన్ని విశదీకరించే అధ్యాయం.", verses:35},
  {n:14, te:"గుణత్రయవిభాగ యోగము", sa:"Gunatraya Vibhaga Yoga", shatka:3,
   summary:"సత్త్వ, రజో, తమో గుణాల ప్రభావాన్ని, వాటిని అధిగమించే మార్గాన్ని తెలిపే అధ్యాయం.", verses:27},
  {n:15, te:"పురుషోత్తమ యోగము", sa:"Purushottama Yoga", shatka:3,
   summary:"సంసార వృక్షాన్ని వర్ణిస్తూ, పరమపురుషుని స్వరూపాన్ని విశదపరిచే అధ్యాయం.", verses:20},
  {n:16, te:"దైవాసురసంపద్విభాగ యోగము", sa:"Daivasura Sampad Vibhaga Yoga", shatka:3,
   summary:"దైవీ, ఆసురీ స్వభావాల లక్షణాలను వేరుచేసి చూపే అధ్యాయం.", verses:24},
  {n:17, te:"శ్రద్ధాత్రయవిభాగ యోగము", sa:"Shraddhatraya Vibhaga Yoga", shatka:3,
   summary:"త్రిగుణాలను అనుసరించి శ్రద్ధ, ఆహారం, యజ్ఞాదులలో వచ్చే భేదాలను తెలిపే అధ్యాయం.", verses:28},
  {n:18, te:"మోక్షసన్న్యాస యోగము", sa:"Moksha Sanyasa Yoga", shatka:3,
   summary:"గీతా సారాంశాన్ని సమన్వయపరుస్తూ, శరణాగతి మార్గాన్ని బోధించే ముగింపు అధ్యాయం.", verses:78}
];

const SHATKAS = [
  {range:"1-6", key:1, title:"కర్మ షట్కం",
   desc:"'త్వమ్‌' పదార్థాన్ని వివరించే మొదటి 6 అధ్యాయాలు. నిష్కామ కర్మ, కర్తవ్య నిర్వహణ మరియు మనోనిగ్రహ సాధనలను నేర్పుతాయి.", featured:false},
  {range:"7-12", key:2, title:"భక్తి షట్కం",
   desc:"'తత్‌' పదార్థమైన పరమేశ్వరుని తత్త్వాన్ని, విభూతులను, విశ్వరూపాన్ని మరియు అనన్య శరణాగతిని ఆవిష్కరించే మధ్య 6 అధ్యాయాలు.", featured:true},
  {range:"13-18", key:3, title:"జ్ఞాన షట్కం",
   desc:"'అసి' పదార్థమైన జీవాత్మ-పరమాత్మ ఐక్యత, ప్రకృతి-పురుష వివేకం, గుణత్రయ విభాగం మరియు మోక్ష సన్యాసాన్ని వివరించే చివరి 6 అధ్యాయాలు.", featured:false}
];

// Verse content store, keyed by "chapter-verse".
// Only 1-1 is filled in as a working sample; add more the same way.
const VERSES = {
  "1-1": {
    chapter:1, verse:1,
    speaker:"ధృతరాష్ట్ర ఉవాచ",
    sanskrit:[
      "ధృతరాష్ట్ర ఉవాచ ।",
      "ధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।",
      "మామకాః పాండవాశ్చైవ కిమకుర్వత సంజయ ।। 1 ।।"
    ],
    padachedanam:"ధృతరాష్ట్రః ఉవాచ, ధర్మ-క్షేత్రే, కురు-క్షేత్రే, సమవేతాః, యుయుత్సవః, మామకాః, పాండవాః, చ, ఏవ, కిమ్, అకుర్వత, సంజయ.",
    pratipadartham:"ధృతరాష్ట్ర ఉవాచ — ధృతరాష్ట్రుడు పలికెను; ధర్మ-క్షేత్రే — ధర్మభూమి యందు; కురు-క్షేత్రే — కురుక్షేత్రము నందు; సమవేతాః — సమావేశమైనవారు; యుయుత్సవః — యుద్ధేచ్ఛ గలవారు; మామకాః — నా పుత్రులు; పాండవాః — పాండురాజు పుత్రులు; చ ఏవ — మరియు నిజముగా; కిం — ఏమి; అకుర్వత — చేసిరి; సంజయ — ఓ సంజయా.",
    translation:"ధృతరాష్ట్రుడు పలికెను — ఓ సంజయా! ధర్మభూమి అయిన కురుక్షేత్రంలో యుద్ధేచ్ఛతో సమావేశమైన నా పుత్రులు మరియు పాండురాజు పుత్రులు ఏమి చేసిరి?",
    commentary:[
      "గీత ఆరంభమే ఒక ప్రశ్నతో మొదలవుతుంది. పుత్ర వ్యామోహంతో కళ్లు మూసుకుపోయిన ధృతరాష్ట్రుడు, తన మనసులోని అశాంతిని దాచుకోలేక సంజయుడిని అడుగుతాడు — కురుక్షేత్రంలో సమావేశమైన తన పుత్రులు, పాండు పుత్రులు ఏమి చేస్తున్నారని.",
      "ఇక్కడ 'ధర్మక్షేత్రే' అనే పదం ప్రత్యేకమైనది. కురుక్షేత్రం కేవలం ఒక యుద్ధభూమి కాదు, అది ధర్మం వర్ధిల్లే పవిత్ర భూమి. ఆ భూమి ప్రభావం వల్ల తన పుత్రులు యుద్ధం చేయడానికి వెనుకాడతారేమోనన్న భయం ధృతరాష్ట్రుడి మనసులో దాగి ఉంది — అదే ఈ ప్రశ్నలో ధ్వనిస్తుంది.",
      "ఈ ఒక్క శ్లోకంతోనే గీత మొత్తం ఒక సంభాషణగా ఆరంభమవుతుంది — ఒక తండ్రి ఆందోళన, ఒక రాజ్య భవితవ్యం, మరియు రాబోయే దివ్యోపదేశానికి నాంది."
    ]
  }
};

function getLocalDrafts(){
  try{ return JSON.parse(localStorage.getItem("gita_local_verses") || "{}"); }
  catch(e){ return {}; }
}
function saveLocalDraft(key, verseObj){
  const drafts = getLocalDrafts();
  drafts[key] = verseObj;
  localStorage.setItem("gita_local_verses", JSON.stringify(drafts));
}
function getChapter(n){ return CHAPTERS.find(c => c.n === Number(n)); }
function getVerse(ch, v){
  const key = ch + "-" + v;
  const drafts = getLocalDrafts();
  return drafts[key] || VERSES[key];
}
function versesForChapter(ch){
  const drafts = getLocalDrafts();
  const merged = Object.assign({}, VERSES, drafts);
  return Object.values(merged).filter(v => v.chapter === Number(ch)).sort((a,b)=>a.verse-b.verse);
}
