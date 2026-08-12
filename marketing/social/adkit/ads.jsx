// ads.jsx — Tangram social ad concepts + shared primitives + schedule data.
// Ads are authored at a 1080px base. `format` is 'sq' (1080×1080) or 'st' (1080×1920).
// `t` carries live Tweak values.

const ASSET = 'assets/';

const GRADIENTS = {
  royal:    'linear-gradient(157deg,#401F7D 0%,#5a228f 42%,#88229D 74%,#B14FC5 116%)',
  twilight: 'linear-gradient(157deg,#401F7D 0%,#7a2597 46%,#B14FC5 100%)',
  midnight: 'linear-gradient(160deg,#2D1659 0%,#401F7D 60%,#6a2a93 110%)',
};
const HILITE = { mint:'#3FDE9D', pacific:'#5FD0FF', lilac:'#C97BD6' };

// ---- small helpers ----
function hFont(t){ return t.headlineFont === 'alata' ? "'Alata',sans-serif" : "'League Spartan',sans-serif"; }
function hWeight(t){ return t.headlineFont === 'alata' ? 400 : 800; }

function Arrow({ size = 30, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display:'block' }}>
      <path d="M5 12h13M13 6l6 6-6 6" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Eyebrow({ children, format, color }) {
  const fs = format === 'st' ? 27 : 25;
  return (
    <span className="ad-eyebrow" style={{ fontSize: fs, color: color || 'rgba(255,255,255,.92)' }}>
      {children}
    </span>
  );
}

function Cta({ t, format, theme = 'on-dark' }) {
  const fs = format === 'st' ? 36 : 33;
  const pad = format === 'st' ? '36px 64px' : '32px 58px';
  const sz = format === 'st' ? 66 : 60;
  return (
    <span className={`ad-cta ${theme}`} style={{ fontSize: fs, padding: pad }}>
      {t.ctaText}
      <span className="arrow" style={{ width: sz, height: sz }}><Arrow size={sz*0.5} color={theme==='on-dark' ? '#fff' : '#fff'} /></span>
    </span>
  );
}

function BrandFoot({ format, dark = true, t }) {
  const h = format === 'st' ? 58 : 52;
  const src = dark ? ASSET + 'Tangram_Secondary_Logo_Lilac.svg' : ASSET + 'Tangram_Logo_Primary_Grape.svg';
  const urlColor = dark ? 'rgba(255,255,255,.82)' : 'rgba(64,31,125,.7)';
  return (
    <div className="ad-foot">
      <img src={src} alt="Tangram" style={{ height: h }} />
      <span style={{ width: 1, height: h*0.6, background: dark ? 'rgba(255,255,255,.25)' : 'rgba(64,31,125,.2)' }}></span>
      <span className="ad-url" style={{ fontSize: format==='st'?30:27, color: urlColor }}>gettangram.com</span>
    </div>
  );
}

// background decoration layers
function Decor({ t, kind = 'grape' }) {
  return (
    <React.Fragment>
      {t.textureOn && <div className="ad-tex"></div>}
      {kind !== 'light' && (
        <React.Fragment>
          <div className="ad-blob" style={{ width: 760, height: 760, top: -240, right: -200,
            background: 'radial-gradient(circle, rgba(95,208,255,.22), transparent 68%)' }}></div>
          <div className="ad-blob" style={{ width: 640, height: 640, bottom: -220, left: -180,
            background: 'radial-gradient(circle, rgba(177,79,197,.30), transparent 70%)' }}></div>
        </React.Fragment>
      )}
      {t.shapesOn && kind !== 'light' && (
        <React.Fragment>
          <div style={{ position:'absolute', top:-2, right:90, width:0, height:0, zIndex:2,
            borderLeft:'150px solid transparent', borderRight:'150px solid transparent',
            borderTop:'170px solid rgba(255,255,255,.05)' }}></div>
          <div style={{ position:'absolute', bottom:-40, left:-30, width:0, height:0, zIndex:2,
            borderTop:'240px solid transparent', borderRight:'300px solid rgba(255,255,255,.045)' }}></div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

// root wrapper
function AdBase({ format, bgClass, bgStyle, children }) {
  return (
    <div className={`ad ${format} ${bgClass}`} style={bgStyle}>
      {children}
    </div>
  );
}

// ============================================================
// CONCEPT A — "Build it once. Get it for every class." (explain product)
// ============================================================
function FanMotif({ format, t }) {
  const tile = format === 'st' ? 168 : 150;
  const chip = format === 'st' ? 116 : 104;
  const labels = ['P1','P2','P3','P4','P5'];
  return (
    <div style={{ display:'flex', alignItems:'center', gap: format==='st'?40:34, marginTop: format==='st'?22:14 }}>
      <div style={{ width:tile, height:tile, borderRadius:24, flex:'none', position:'relative',
        background:'rgba(255,255,255,.14)', border:'1.5px solid rgba(255,255,255,.3)',
        backdropFilter:'blur(6px)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
        <img src={ASSET+'Tangram_T_Mark_Primary.svg'} alt="" style={{ height: tile*0.42, filter:'brightness(0) invert(1)', opacity:.95 }} />
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:format==='st'?15:14, letterSpacing:'.05em', color:'#fff', opacity:.92 }}>1 MASTER</span>
      </div>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:.92 }}>
        <Arrow size={format==='st'?52:46} color="rgba(255,255,255,.85)" />
      </div>
      <div style={{ display:'flex', gap:format==='st'?16:13 }}>
        {labels.map((l,i)=>(
          <div key={l} style={{ width:chip, height:chip, borderRadius:18, flex:'none', position:'relative', overflow:'hidden',
            background:`linear-gradient(150deg, rgba(255,255,255,${0.20-i*0.02}), rgba(255,255,255,${0.07-i*0.008}))`,
            border:'1.5px solid rgba(255,255,255,.22)', display:'flex', alignItems:'flex-end', padding:14 }}>
            <div style={{ position:'absolute', top:14, left:14, width:0, height:0,
              borderLeft:`${chip*0.26}px solid transparent`, borderRight:`${chip*0.26}px solid transparent`,
              borderTop:`${chip*0.30}px solid ${HILITE[t.highlight]}`, opacity:.9 }}></div>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:format==='st'?16:15, fontWeight:500, color:'#fff' }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConceptA({ format, t }) {
  const st = format === 'st';
  const pad = st ? '128px 100px 116px' : '92px';
  return (
    <AdBase format={format} bgClass="ad-bg-grape" bgStyle={{ background: GRADIENTS[t.gradient] }}>
      <Decor t={t} kind="grape" />
      <div className="ad-in" style={{ padding: pad, justifyContent:'space-between' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <Eyebrow format={format}>How Tangram works</Eyebrow>
        </div>
        <div style={{ marginTop: st ? 0 : 6 }}>
          <h2 className="ad-h" style={{ fontFamily:hFont(t), fontWeight:hWeight(t), fontSize: st?138:118, color:'#fff' }}>
            Build it once.<br/>Get it for<br/><span style={{ color: HILITE[t.highlight] }}>every class.</span>
          </h2>
          <p className="ad-sub" style={{ fontSize: st?37:31, color:'rgba(255,255,255,.82)', maxWidth: st?860:760, marginTop: st?40:30 }}>
            One master lesson in. Personalized versions out — adapted for IEPs, 504s, ELL levels, and reading levels.
          </p>
          <FanMotif format={format} t={t} />
        </div>
        <div style={{ display:'flex', flexDirection: st?'column':'row', gap: st?44:0, alignItems: st?'flex-start':'flex-end', justifyContent:'space-between' }}>
          <Cta t={t} format={format} theme="on-dark" />
          <BrandFoot format={format} dark t={t} />
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// CONCEPT B — "Plan smarter with Tan." (explain product, lighter)
// ============================================================
function ConceptB({ format, t }) {
  const st = format === 'st';
  const pad = st ? '120px 100px 112px' : '92px';
  const tan = st ? 300 : 248;
  return (
    <AdBase format={format} bgClass="ad-bg-light">
      <Decor t={t} kind="light" />
      <div className="ad-blob" style={{ width:620, height:620, top:-180, right:-160, background:'radial-gradient(circle, rgba(177,79,197,.16), transparent 68%)' }}></div>
      <div className="ad-blob" style={{ width:520, height:520, bottom:-160, left:-150, background:'radial-gradient(circle, rgba(95,208,255,.14), transparent 70%)' }}></div>
      <div className="ad-in" style={{ padding: pad, justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap:28 }}>
          <div className="tan-circle" style={{ width:tan, height:tan, display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(160deg,#F6EFFA,#EADBF2)' }}>
            <img src={ASSET+'Tangram_Owl.png'} alt="Tangram Owl" style={{ width:'62%', height:'62%', objectFit:'contain', transform:'none' }} />
          </div>
          <div>
            <Eyebrow format={format} color="#B14FC5">Meet Tan</Eyebrow>
            <p style={{ fontFamily:"'Work Sans',sans-serif", fontSize: st?28:25, color:'#6c6682', marginTop:14, maxWidth:420 }}>
              Your AI planning partner
            </p>
          </div>
        </div>
        <div>
          <h2 className="ad-h" style={{ fontFamily:hFont(t), fontWeight:hWeight(t), fontSize: st?134:114, color:'#401F7D' }}>
            Plan smarter,<br/>not longer.
          </h2>
          <div className="chat-bubble" style={{ padding: st?'34px 38px':'30px 34px', marginTop: st?48:34, maxWidth: st?900:840 }}>
            <span className="chat-from" style={{ fontSize: st?17:16 }}>Tan</span>
            <p style={{ fontSize: st?34:30, lineHeight:1.4, marginTop:10, color:'#3a3550' }}>
              Let's build your 5E lesson — start with the standard you're teaching, and I'll adapt every piece for the students in front of you.
            </p>
          </div>
        </div>
        <div style={{ display:'flex', flexDirection: st?'column':'row', gap: st?40:0, alignItems: st?'flex-start':'flex-end', justifyContent:'space-between' }}>
          <Cta t={t} format={format} theme="on-light" />
          <BrandFoot format={format} dark={false} t={t} />
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// CONCEPT C — "We didn't curate best practices." (methodology, owl)
// ============================================================
function ConceptC({ format, t }) {
  const st = format === 'st';
  const pad = st ? '124px 100px 112px' : '92px';
  const owl = st ? 360 : 300;
  return (
    <AdBase format={format} bgClass="ad-bg-deep">
      <Decor t={t} kind="grape" />
      <img src={ASSET+'Tangram_Owl.png'} alt="" style={{ position:'absolute', zIndex:2, opacity:.16,
        width: st?760:620, right: st?-150:-130, bottom: st?-60:-80 }} />
      <div className="ad-in" style={{ padding: pad, justifyContent:'space-between' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <Eyebrow format={format}>The methodology</Eyebrow>
          <img src={ASSET+'Tangram_Owl.png'} alt="" style={{ width: owl*0.6, opacity:.95 }} />
        </div>
        <div>
          <h2 className="ad-h" style={{ fontFamily:hFont(t), fontWeight:hWeight(t), fontSize: st?120:104, color:'#fff', maxWidth: st?920:880 }}>
            We didn't curate <span style={{ color: HILITE[t.highlight] }}>best practices.</span><br/>We built something new.
          </h2>
          <p className="ad-sub" style={{ fontSize: st?37:31, color:'rgba(255,255,255,.80)', maxWidth: st?880:780, marginTop: st?44:32 }}>
            An original personalization method, built by founders with 50+ years across hundreds of districts — not a repackaged template library.
          </p>
        </div>
        <div style={{ display:'flex', flexDirection: st?'column':'row', gap: st?40:0, alignItems: st?'flex-start':'flex-end', justifyContent:'space-between' }}>
          <Cta t={t} format={format} theme="on-dark" />
          <BrandFoot format={format} dark t={t} />
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// CONCEPT D — "150 students. 5 periods. 1 workflow." (methodology, cadence)
// ============================================================
function ConceptD({ format, t }) {
  const st = format === 'st';
  const pad = st ? '128px 100px 116px' : '92px';
  const lines = [
    { n:'150', l:'students' },
    { n:'5', l:'class periods' },
    { n:'1', l:'workflow' },
  ];
  return (
    <AdBase format={format} bgClass="ad-bg-grape" bgStyle={{ background: GRADIENTS[t.gradient] }}>
      <Decor t={t} kind="grape" />
      <div className="ad-in" style={{ padding: pad, justifyContent:'space-between' }}>
        <Eyebrow format={format}>One workflow</Eyebrow>
        <div>
          {lines.map((row,i)=>(
            <div key={i} style={{ display:'flex', alignItems:'baseline', gap: st?30:26, borderBottom:'1.5px solid rgba(255,255,255,.16)', padding: st?'22px 0':'18px 0' }}>
              <span className="stat-num" style={{ fontFamily:hFont(t), fontWeight:hWeight(t), fontSize: st?118:100, color:'#fff', minWidth: st?260:224 }}>{row.n}</span>
              <span style={{ fontFamily:"'Alata',sans-serif", fontSize: st?44:38, color:'rgba(255,255,255,.78)' }}>{row.l}</span>
            </div>
          ))}
          <div style={{ paddingTop: st?28:22 }}>
            <span className="stat-num" style={{ fontFamily:hFont(t), fontWeight:hWeight(t), fontSize: st?96:82, color: HILITE[t.highlight], letterSpacing:'-.03em' }}>Zero compromises.</span>
          </div>
          <p className="ad-sub" style={{ fontSize: st?37:31, color:'rgba(255,255,255,.82)', maxWidth: st?860:740, marginTop: st?40:28 }}>
            Differentiation that used to cost you the whole weekend. Now it's just part of the build.
          </p>
        </div>
        <div style={{ display:'flex', flexDirection: st?'column':'row', gap: st?40:0, alignItems: st?'flex-start':'flex-end', justifyContent:'space-between' }}>
          <Cta t={t} format={format} theme="on-dark" />
          <BrandFoot format={format} dark t={t} />
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// CONCEPT E — Teacher testimonial (photo)
// ============================================================
function ConceptE({ format, t }) {
  const st = format === 'st';
  const pad = st ? '0 100px 116px' : '0 92px 92px';
  return (
    <AdBase format={format} bgClass="ad-bg-deep">
      <img className="ad-photo" src={ASSET+'class-placeholder-1.jpg'} alt="Classroom" />
      <div className="ad-photo-veil" style={{ background:'linear-gradient(180deg, rgba(45,22,89,.42) 0%, rgba(45,22,89,.55) 45%, rgba(45,22,89,.92) 100%)' }}></div>
      {t.textureOn && <div className="ad-tex" style={{ zIndex:2 }}></div>}
      <div className="ad-in" style={{ padding: pad, justifyContent:'flex-end' }}>
        <div style={{ marginTop: st?120:80 }}>
          <Eyebrow format={format}>What teachers say</Eyebrow>
        </div>
        <span className="quote-mark" style={{ fontSize: st?220:180, marginTop: st?20:8 }}>“</span>
        <h2 className="ad-h alata" style={{ fontFamily:"'Alata',sans-serif", fontSize: st?86:74, color:'#fff', marginTop: st?-60:-50, maxWidth: st?900:840, lineHeight:1.08 }}>
          Finally — differentiation that doesn't cost me my evenings.
        </h2>
        <div style={{ display:'flex', alignItems:'center', gap:18, marginTop: st?44:32 }}>
          <span style={{ width: st?56:48, height:3, background:HILITE[t.highlight], borderRadius:2 }}></span>
          <span style={{ fontFamily:"'Work Sans',sans-serif", fontSize: st?29:26, fontWeight:600, color:'#fff', whiteSpace:'nowrap' }}>Maya R.</span>
          <span style={{ fontFamily:"'Work Sans',sans-serif", fontSize: st?26:23, color:'rgba(255,255,255,.7)' }}>7th-grade ELA · 5 sections</span>
        </div>
        <div style={{ display:'flex', justifyContent: st?'flex-start':'space-between', alignItems:'flex-end', marginTop: st?64:48, flexDirection: st?'column':'row', gap: st?40:0 }}>
          <Cta t={t} format={format} theme="on-dark" />
          <BrandFoot format={format} dark t={t} />
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// CONCEPT F — Testimonial / social proof (quote-forward, no photo)
// ============================================================
function ConceptF({ format, t }) {
  const st = format === 'st';
  const pad = st ? '124px 100px 112px' : '92px';
  return (
    <AdBase format={format} bgClass="ad-bg-grape" bgStyle={{ background: GRADIENTS[t.gradient] }}>
      <Decor t={t} kind="grape" />
      <div className="ad-in" style={{ padding: pad, justifyContent:'space-between' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <Eyebrow format={format}>What teachers say</Eyebrow>
          <span className="quote-mark" style={{ fontSize: st?180:150, lineHeight:.6 }}>”</span>
        </div>
        <div>
          <h2 className="ad-h alata" style={{ fontFamily:"'Alata',sans-serif", fontSize: st?96:82, color:'#fff', maxWidth: st?920:880, lineHeight:1.1 }}>
            I build <span style={{ color: HILITE[t.highlight] }}>one lesson</span> and walk in with a version for every student who needs one.
          </h2>
          <div style={{ display:'flex', alignItems:'center', gap:18, marginTop: st?48:36 }}>
            <span style={{ width: st?56:48, height:3, background:HILITE[t.highlight], borderRadius:2 }}></span>
            <span style={{ fontFamily:"'Work Sans',sans-serif", fontSize: st?29:26, fontWeight:600, color:'#fff', whiteSpace:'nowrap' }}>David O.</span>
            <span style={{ fontFamily:"'Work Sans',sans-serif", fontSize: st?26:23, color:'rgba(255,255,255,.72)' }}>High-school Biology</span>
          </div>
        </div>
        <div>
          <div className="badge-live" style={{ padding: st?'14px 26px':'12px 22px', marginBottom: st?44:34, fontSize: st?25:22, color:'#fff', fontFamily:"'Work Sans',sans-serif", fontWeight:500 }}>
            <span className="pdot" style={{ width:12, height:12 }}></span>
            Join teachers personalizing 100s of lessons
          </div>
          <div style={{ display:'flex', flexDirection: st?'column':'row', gap: st?40:0, alignItems: st?'flex-start':'flex-end', justifyContent:'space-between' }}>
            <Cta t={t} format={format} theme="on-dark" />
            <BrandFoot format={format} dark t={t} />
          </div>
        </div>
      </div>
    </AdBase>
  );
}

// ============================================================
// registry
// ============================================================
const CONCEPTS = {
  A: { comp: ConceptA, name: 'Build it once. Get it for every class.', goal: 'explain' },
  B: { comp: ConceptB, name: 'Plan smarter with Tan',                 goal: 'explain' },
  C: { comp: ConceptC, name: 'We built something new',                goal: 'method'  },
  D: { comp: ConceptD, name: '150 students. Zero compromises.',       goal: 'method'  },
  E: { comp: ConceptE, name: 'Teacher testimonial — Maya R.',         goal: 'proof'   },
  F: { comp: ConceptF, name: 'Teacher testimonial — David O.',        goal: 'proof'   },
};

function renderAd(id, format, t) {
  const C = CONCEPTS[id].comp;
  return <C format={format} t={t} />;
}

// scaled preview of any ad to a target display width
function AdPreview({ id, format, t, displayW }) {
  const baseW = 1080;
  const baseH = format === 'st' ? 1920 : 1080;
  const scale = displayW / baseW;
  return (
    <div className="ad-frame" style={{ width: displayW, height: baseH * scale }}>
      <div className="ad-scale" style={{ width: baseW, height: baseH, transform: `scale(${scale})` }}>
        {renderAd(id, format, t)}
      </div>
    </div>
  );
}

// ============================================================
// SCHEDULE — 3-week Mon/Wed/Fri cadence
// ============================================================
const POSTS = [
  { id:'A', format:'sq', date:'Mon · Jun 8',  iso:'2026-06-08', col:0, plat:'IG + FB feed',
    caption:`Every class you teach is different. Now your lessons can be, too.\n\nBuild one master lesson with Tan, and Tangram generates a personalized version for every section — adapted for IEPs, 504s, ELL levels, and reading levels.\n\nStart with 3 free lessons → gettangram.com`,
    tags:'#Tangram #TeacherTools #LessonPlanning #Differentiation #TeachersOfInstagram' },
  { id:'B', format:'st', date:'Wed · Jun 10', iso:'2026-06-10', col:2, plat:'IG + FB story',
    caption:`Meet Tan — your AI planning partner. 👋\n\nTell Tan the standard you're teaching, and it walks you through a full 5E lesson, then adapts every piece for the students in front of you.\n\nPlan smarter, not longer. Try 3 lessons free.`,
    tags:'#Tangram #Tan #TeacherLife #EdTech #PersonalizedLearning' },
  { id:'E', format:'sq', date:'Fri · Jun 12', iso:'2026-06-12', col:4, plat:'IG + FB feed',
    caption:`"Finally — differentiation that doesn't cost me my evenings."\n\n— Maya R., 7th-grade ELA, 5 sections\n\nThis is why we built Tangram. Personalize at the student level without losing your weekend.`,
    tags:'#TeacherTestimonial #Differentiation #Tangram #TeachersOfInstagram #TeacherLife' },
  { id:'C', format:'sq', date:'Mon · Jun 15', iso:'2026-06-15', col:0, plat:'IG + FB feed',
    caption:`We didn't curate best practices. We built something new.\n\nTangram's personalization method comes from founders with 50+ years across hundreds of districts — an original instrument for teaching, not a repackaged template library.\n\nSee how it works → gettangram.com`,
    tags:'#Tangram #Methodology #TeacherTools #EdTech #InstructionalDesign' },
  { id:'D', format:'st', date:'Wed · Jun 17', iso:'2026-06-17', col:2, plat:'IG + FB story',
    caption:`150 students. 5 class periods. 1 workflow. Zero compromises.\n\nThe differentiation that used to eat your whole weekend is now just part of the build. That's the Tangram difference.`,
    tags:'#Tangram #TeacherLife #LessonPlanning #Differentiation #Teachers' },
  { id:'F', format:'sq', date:'Fri · Jun 19', iso:'2026-06-19', col:4, plat:'IG + FB feed',
    caption:`"I build one lesson and walk in with a version for every student who needs one."\n\n— David O., high-school Biology\n\nJoin the teachers personalizing 100s of lessons with Tangram. Your first 3 are free.`,
    tags:'#TeacherTestimonial #Tangram #MTSS #Differentiation #TeachersOfInstagram' },
  { id:'A', format:'st', date:'Mon · Jun 22', iso:'2026-06-22', col:0, plat:'IG + FB story',
    caption:`Build it once. Get it for every class. 🧩\n\nOne master lesson in. Personalized versions out — for every section, every learner, every period.\n\n3 lessons free at gettangram.com`,
    tags:'#Tangram #TeacherTools #LessonPlanning #BackToSchool #Differentiation' },
  { id:'D', format:'sq', date:'Wed · Jun 24', iso:'2026-06-24', col:2, plat:'IG + FB feed',
    caption:`Zero compromises.\n\nPersonalize for 150 students across 5 periods in a single workflow — IEPs, 504s, ELL, reading levels and MTSS tiers handled as you build.\n\nStart free → gettangram.com`,
    tags:'#Tangram #Differentiation #TeacherLife #EdTech #PersonalizedLearning' },
  { id:'B', format:'sq', date:'Fri · Jun 26', iso:'2026-06-26', col:4, plat:'IG + FB feed',
    caption:`Planning shouldn't take longer than teaching.\n\nTan guides you from standard to a complete, differentiated 5E lesson — and a tailored copy for every class — in one sitting.\n\nMeet Tan → gettangram.com`,
    tags:'#Tangram #Tan #TeacherTools #LessonPlanning #TeachersOfInstagram' },
];

const GOAL_META = {
  explain: { name:'How it works', tag:'EXPLAIN THE PRODUCT', sub:'Show teachers the core promise — build one master lesson, get a personalized version for every class — and introduce Tan, the AI planning partner.' },
  method:  { name:'The methodology', tag:'WHY TANGRAM IS DIFFERENT', sub:'Stake out the differentiation story: an original personalization method built by experienced educators, not a repackaged template library.' },
  proof:   { name:'Social proof', tag:'TESTIMONIALS', sub:'Let teachers hear from peers. Real-classroom warmth, plain-spoken quotes, credible attribution.' },
};

Object.assign(window, {
  renderAd, AdPreview, CONCEPTS, POSTS, GOAL_META, GRADIENTS, HILITE,
});
