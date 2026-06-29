import React, { useState, useEffect } from 'react';
import {
  Plane, Briefcase, ChevronRight, Globe, TrendingUp, Facebook, Instagram, Linkedin,
  Mail, ArrowLeft, Compass, Award, Users, Calendar, Search, BookOpen,
  Menu, X, Star, Heart, DollarSign, CheckCircle, Send, MapPin, Music, PartyPopper
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// BRAND TOKENS  (Tracy D. Stuckey Brand Identity Guide)
// ─────────────────────────────────────────────────────────────
const B = {
  green:     '#1A4D2E',
  teal:      '#1F6E6D',
  copper:    '#B87333',
  rose:      '#B76E79',
  parchment: '#F5F5DC',
};

// ─────────────────────────────────────────────────────────────
// BLOG CONTENT  — 3 full articles in Tracy's Auntie Voice
// ─────────────────────────────────────────────────────────────
const POSTS = [
  {
    title: "How to Maximize Your Travel Points in 2026",
    category: "Travel Hacks",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Listen, I'm only gonna say this once — you are leaving thousands of dollars of travel value on the table every year. Let me fix that.",
    content: [
      ['hook', "Listen, I'm only gonna say this once — you are leaving thousands of dollars of travel value on the table. Every. Single. Year. The hotels are banking on it. The airlines are definitely banking on it. And I'm here to make sure that stops today."],
      ['p', "Points and miles aren't a coupon — they're a currency. A currency that, when used right, will have you sipping a cocktail in a Maldives overwater bungalow for what amounts to the cost of a Netflix subscription. I've done it. My clients do it. And you can too. Now check it."],
      ['h2', "1. Know What You Already Have"],
      ['p', "Before you can stack, you have to see your stash. Log into every hotel loyalty program and airline account you've ever created. Marriott Bonvoy, Hilton Honors, World of Hyatt, Delta SkyMiles, United MileagePlus — pull them all up. Most people are sitting on 20,000–40,000 points they forgot about completely. That's a free flight or two nights at a solid property, just sitting there collecting digital dust."],
      ['h2', "2. Pick ONE Credit Card and Make It Work Hard"],
      ['p', "Here's where people go wrong — they spread themselves thin across six cards and accumulate nothing meaningful on any of them. That's tired. Pick a travel credit card that aligns with your lifestyle and go all in. If you stay at Marriott properties, the Bonvoy Brilliant card is your best friend. If you want maximum flexibility, Chase Sapphire Preferred is an absolute classic. The signup bonus alone — typically 60,000–80,000 points — is worth $600–$1,200 in travel. That's a flight. For signing up."],
      ['p', "Put every single purchase — groceries, gas, your nail appointment — on that card. Pay it off in full every month. You're not carrying a balance; you're collecting a dividend."],
      ['h2', "3. Book Through a Travel Agent (Yes, Really)"],
      ['p', "Here's what nobody tells you: when you book through an agent like me, you often get perks that you simply cannot access booking through Expedia or the hotel's website. I'm talking complimentary room upgrades, resort credits, late checkout, and welcome amenities. These are real, tangible extras that come from the relationships agents have with properties. When I book your stay at a Hyatt property, I can sometimes stack your World of Hyatt points ON TOP of the agent benefits. You're winning twice."],
      ['h2', "4. Time Your Redemptions Like a Chess Move"],
      ['p', "Points are worth the most when you use them on premium experiences that you'd never pay cash for. Redeeming 50,000 points for a $400 economy ticket? That's worth about half a cent per point — the bare minimum. But redeeming those same 50,000 points for a business class flight that retails at $2,000? Now you're at 4 cents per point. That's the whole game. Think about it before you click redeem."],
      ['p', "Also — book travel during off-peak redemption windows. Most programs have saver award pricing during less busy periods. Do your research, or better yet, let me do it for you."],
      ['h2', "5. Never Let Points Expire"],
      ['p', "This one hurts me every time. Points expire when accounts go inactive. Keep the account active by making one small transaction every 12–18 months — even transferring 1,000 hotel points to a partner resets your clock. Set a calendar reminder. This is not negotiable."],
      ['closing', "I'm telling you this because I love you. The resources are there. The runs are waiting. You just need a strategy — and now you have one. Ready to book? Submit a trip request and let's make those points work."],
    ]
  },
  {
    title: "The Girls' Trip Blueprint: How I Do It Every Time",
    category: "Travel Lifestyle",
    date: "April 30, 2026",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80&w=1200",
    excerpt: "You've been in that group chat for three years. That trip is not going to plan itself. Here's exactly how I pull it off every time.",
    content: [
      ['hook', "You've been in that group chat for three years. Same messages. Same 'we should go to Tulum' energy. Same '2026 is our year' promises. And still — zero flights booked, zero deposits paid, and Keisha just asked 'so what are we doing?' for the fourteenth time this month."],
      ['p', "I hear you. Group travel is a whole mission. Between competing schedules, different budgets, and someone who always goes ghost right when it's time to pay — it can feel impossible. But I've planned dozens of girls' trips, and I've got the blueprint. Follow this and you will be on that plane."],
      ['h2', "Step 1: Have the Budget Conversation First — Before You Even Pick a Destination"],
      ['p', "I know. Nobody wants to talk money. But this is where 90% of trips die in the group chat. Somebody is thinking Maldives and somebody else is thinking Myrtle Beach, and the difference is $4,000. Get everyone on a group call (not the chat — a CALL) and get a real number from each person. The destination needs to match the group's collective stash, not just the wishlist of the two people with the most budget."],
      ['p', "Once you have a real number, I can work with it. I've put together stunning trips on $1,500 per person and I've done luxury runs at $8,000. Both were official. Both were unforgettable. It's not about the number — it's about what you do with it."],
      ['h2', "Step 2: Let the Vibe Choose the Destination"],
      ['p', "Before you pick a place, pick a vibe. Are you trying to fully disconnect? That's a resort with all-inclusive everything. Are you trying to eat your way through a new culture? That's a city run — think Cartagena, New Orleans, Porto. Are you trying to dance until sunrise? Tulum, Ibiza, or Kingston might be calling your name. The destination should serve the energy, not the other way around."],
      ['h2', "Step 3: Lock In the Date Like You Mean It"],
      ['p', "This is where most group trips die. 'Flexible' doesn't work when you have six schedules. Pick two possible weekends, give the group 48 hours to vote, and go with the date that works for the majority. The people who can't make it will book the next one. No extensions, no waiting for everyone to align perfectly — because that day will never come."],
      ['p', "Once the date is locked, send a payment request for the deposit. Not a reminder. Not a 'hey are we doing this?' A payment request. That is the moment the trip becomes real."],
      ['h2', "Step 4: Book in Blocks Through Your Agent"],
      ['p', "Here's what a travel agent actually does that your group chat can't: I book your flights, hotel, transfers, and sometimes excursions as a package. Group hotel blocks often come with discounts and guaranteed rooms together — which matters more than you think when six of you land at midnight and need to get to the same floor. I handle the coordination so nobody's showing up at a different hotel an hour away because they 'found a better deal on Expedia.'"],
      ['h2', "Step 5: Assign a Trip Lead and Trust the Process"],
      ['p', "Someone has to be the point person — the one who collects info, communicates updates, and keeps the energy up. On most of the trips I plan, that's me. I send the itinerary, the packing suggestions, the day-by-day breakdown. Your only job is to show up. But if you want someone internal to the group to run point, make sure they have one contact (me) and one group rule: everyone pays on time or we hold your seat."],
      ['closing', "The girls' trip is not a fantasy. It is a plan waiting to happen — and I'm the one who makes it happen. Submit your trip request, tell me the vibe, and let's get you all on that plane. The table has room. Come travel with us."],
    ]
  },
  {
    title: "From Passport to Paycheck: My Story",
    category: "Business Mindset",
    date: "March 28, 2026",
    image: "https://lh3.googleusercontent.com/d/1WjdrL5S0GS91tgynhyd2IwbJvjx_Po-A",
    excerpt: "Real talk: I turned a girls' trip into a revenue stream. Not by accident — by design. Here's how the whole thing started.",
    content: [
      ['hook', "Real talk: I turned a girls' trip into a revenue stream. And honestly? I didn't plan it that way. The revelation crept up on me somewhere between my third international trip in eighteen months and the moment a friend pulled me aside and said, 'How are you doing all of this?'"],
      ['p', "That question changed my life. Because I realized — I wasn't doing anything magical. I was just paying attention to things most people ignored. And once I understood what I was looking at, everything shifted."],
      ['h2', "What I Discovered About the Travel Industry"],
      ['p', "Here's the thing nobody tells you: every time you book a hotel, a cruise, a flight — that platform you used to book it gets paid a commission. Expedia gets it. Hotels.com gets it. Even the airline's own website factors it in. The commission was always there. The question was always: who was it going to?"],
      ['p', "When I became a certified independent travel agent, that commission started coming to me. Not instead of the client getting a good deal — in addition to it. The hotel pays the agent. The client pays the hotel rate. It's not a hustle. It's infrastructure that's existed for decades. I just finally stepped inside it."],
      ['h2', "The Moment It Got Real"],
      ['p', "I booked a group trip for twelve women — a resort in Punta Cana, all-inclusive, five nights. I handled every detail: flights, transfers, room assignments, a private dinner on night three. The group had the time of their lives. And when the commission deposited, I sat with my phone in my hand for a full two minutes just staring at it."],
      ['p', "I had been recommending trips, restaurants, hotels, and experiences to people my entire life — for free. The same recommendations I'd been giving away. I just didn't know there was a business model built around exactly that."],
      ['h2', "Building the Business"],
      ['p', "I didn't quit anything overnight. I built this alongside my life. Early mornings. Late evenings after the kids were asleep. Learning the booking systems, building client relationships, understanding the products. It took consistency. It took showing up even when bookings were slow. But the industry rewards those who stay — because travel doesn't stop. People always want to go somewhere."],
      ['p', "Now my clients include solo travelers, honeymooners, corporate groups, bridal parties, and families doing their first international trip. I've planned trips to destinations I've never even been to — and I've used the income to fund trips to places I always dreamed of. The business literally funds the lifestyle."],
      ['h2', "What This Means for You"],
      ['p', "If you love to travel — or even if you just love the idea of travel — there is a legitimate business here. Not a side hustle that fizzles out. Not a social media scheme. A real, accredited, commission-based business in one of the world's largest industries. The $9 trillion global travel market is not shrinking. People will always book trips. The only question is whether you're on the earning side of that transaction or the spending side."],
      ['p', "I'm not going to tell you it's easy or that money falls from the sky. I'm going to tell you it's real, it's scalable, and there is someone who can walk you through every step of starting it the right way."],
      ['closing', "That someone is me. Reach out on Facebook or submit a message through this site and let's have a real conversation about where you want to go — in travel and in life. I'm telling you this because I love you. Now go get your bag."],
    ]
  },
  {
    title: "Why InteleTravel Is Changing the Game",
    category: "Industry News",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    excerpt: "An inside look at how independent travel agents are dominating modern booking — and why the big platforms didn't see it coming.",
  },
  {
    title: "Top 5 Destinations for Remote Entrepreneurs",
    category: "Business Lifestyle",
    date: "July 22, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Work from paradise. These are the most wifi-friendly, culture-rich, absolutely official spots to run your business from.",
  },
  {
    title: "Destination Weddings: What Nobody Tells You",
    category: "Travel Planning",
    date: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    excerpt: "Planning a destination wedding without an agent? That's a whole headache — let me give you the run before you even start.",
  },
];

// ─────────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
    setSelectedPost(null);
  }, [view]);

  const pages = {
    home:     <HomePage sv={setView} />,
    travel:   <TravelPage sv={setView} />,
    business: <BusinessPage sv={setView} />,
    blog:     <BlogPage sv={setView} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />,
  };

  return (
    <div style={{ background: B.parchment, color: B.green, fontFamily:"'Source Sans 3',sans-serif", minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .serif{font-family:'Libre Baskerville',serif!important;}
        .italic{font-style:italic;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
        .fade-up{animation:fadeUp .6s ease both;}
        .lift{transition:transform .25s,box-shadow .25s;}
        .lift:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(26,77,46,.14);}
        .copper-bar{height:3px;background:linear-gradient(90deg,transparent,#B87333,transparent);}
        .nav-link{font-weight:600;font-size:.875rem;padding-bottom:3px;border-bottom:2px solid transparent;transition:color .2s,border-color .2s;background:none;border-top:none;border-left:none;border-right:none;cursor:pointer;}
        .nav-link.active{color:#B87333!important;border-color:#B87333;}
        .nav-link:hover{color:#B87333!important;}
        .btn-copper{background:#B87333;color:#F5F5DC;font-weight:700;border:none;cursor:pointer;transition:background .2s,transform .15s;}
        .btn-copper:hover{background:#1F6E6D;transform:translateY(-2px);}
        .btn-outline-copper{border:2px solid #B87333;color:#B87333;background:transparent;font-weight:700;cursor:pointer;transition:all .2s;}
        .btn-outline-copper:hover{background:#B87333;color:#F5F5DC;}
        .form-input{width:100%;padding:.75rem 1rem;border-radius:8px;border:1.5px solid rgba(26,77,46,.2);background:#F5F5DC;font-family:'Source Sans 3',sans-serif;font-size:.9rem;color:#1A4D2E;transition:border-color .2s;outline:none;}
        .form-input:focus{border-color:#B87333;}
        .cat-pill{border:1.5px solid rgba(26,77,46,.25);color:#1A4D2E;background:transparent;padding:.35rem 1rem;border-radius:9999px;font-size:.75rem;font-weight:700;cursor:pointer;transition:all .2s;white-space:nowrap;}
        .cat-pill:hover,.cat-pill.active{background:#B87333;color:#F5F5DC;border-color:#B87333;}
        .article-body h2{font-family:'Libre Baskerville',serif;font-size:1.35rem;font-weight:700;color:#1A4D2E;margin:2.25rem 0 .75rem;}
        .article-body p{font-size:1.05rem;line-height:1.85;color:#1A4D2E;margin-bottom:1.25rem;}
        @media(max-width:768px){
          .desktop-nav{display:none!important;}
          .mobile-btn{display:block!important;}
          .hide-mobile{display:none!important;}
          .split-two{grid-template-columns:1fr!important;}
          .three-col{grid-template-columns:1fr!important;}
          .four-col{grid-template-columns:1fr 1fr!important;}
          .two-col{grid-template-columns:1fr!important;}
          .section-pad{padding:2.5rem 1.25rem!important;}
          .hero-btns{flex-direction:column!important;align-items:stretch!important;gap:.75rem!important;}
          .hero-btns button{justify-content:center!important;width:100%!important;}
          .footer-grid{grid-template-columns:1fr!important;gap:2rem!important;}
          .footer-book-btn{display:flex!important;width:100%!important;justify-content:center!important;padding:1rem!important;font-size:1rem!important;border-radius:8px!important;}
        }
        @media(max-width:480px){
          .four-col{grid-template-columns:1fr!important;}
        }
      `}</style>
      <Navbar view={view} sv={setView} open={mobileOpen} setOpen={setMobileOpen} />
      <main style={{flex:1}}>{pages[view]||pages.home}</main>
      <Footer sv={setView} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────
function Navbar({ view, sv, open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [['home','Home'],['travel','Book Travel'],['business','Build a Business'],['blog','Blog']];
  return (
    <nav style={{ position:'sticky', top:0, zIndex:100, background:scrolled?'rgba(245,245,220,.96)':B.parchment, borderBottom:`1px solid rgba(26,77,46,.1)`, backdropFilter:'blur(12px)', transition:'background .3s,box-shadow .3s', boxShadow:scrolled?'0 2px 20px rgba(26,77,46,.08)':'none' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', height:70 }}>
        <button onClick={() => sv('home')} style={{ background:'none', border:'none', cursor:'pointer', textAlign:'left' }}>
          <div className="serif" style={{ color:B.green, fontSize:'1.2rem', fontWeight:700, lineHeight:1.1 }}>Tracy D. Stuckey</div>
          <div style={{ color:B.copper, fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', fontWeight:700 }}>Travel &amp; Business</div>
        </button>
        <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:'2rem' }}>
          {links.map(([k,l]) => <button key={k} onClick={() => sv(k)} className={`nav-link${view===k?' active':''}`} style={{ color:B.green }}>{l}</button>)}
          <button onClick={() => sv('travel')} className="btn-copper" style={{ padding:'.5rem 1.25rem', borderRadius:6, fontSize:'.875rem' }}>Book Now</button>
        </div>
        <button className="mobile-btn" onClick={() => setOpen(!open)} style={{ display:'none', background:'none', border:'none', cursor:'pointer', color:B.green }}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {open && (
        <div style={{ background:B.parchment, borderTop:`1px solid rgba(26,77,46,.08)`, padding:'1rem 1.5rem 1.5rem' }}>
          {links.map(([k,l]) => <button key={k} onClick={() => sv(k)} style={{ display:'block', width:'100%', textAlign:'left', padding:'.75rem 0', background:'none', border:'none', borderBottom:`1px solid rgba(26,77,46,.07)`, cursor:'pointer', color:view===k?B.copper:B.green, fontWeight:600, fontSize:'1rem' }}>{l}</button>)}
          <button onClick={() => sv('travel')} className="btn-copper" style={{ marginTop:'1rem', width:'100%', padding:'.75rem', borderRadius:6, fontSize:'1rem' }}>Book Now</button>
        </div>
      )}
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────
function Footer({ sv }) {
  return (
    <footer style={{ background:B.green, color:B.parchment }}>
      <div style={{ height:4, background:`linear-gradient(90deg,${B.copper},${B.rose},${B.copper})` }}/>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'4rem 1.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'3rem', marginBottom:'3rem' }}>
          <div style={{ gridColumn:'span 2' }}>
            <div className="serif" style={{ fontSize:'2.25rem', fontWeight:700, marginBottom:'.35rem' }}>Tracy D. Stuckey</div>
            <div style={{ color:B.copper, fontSize:'.8rem', letterSpacing:'.2em', textTransform:'uppercase', fontWeight:700, marginBottom:'1rem' }}>Travel &amp; Business</div>
            <p style={{ fontSize:'.875rem', opacity:.8, lineHeight:1.7, maxWidth:340, marginBottom:'1rem' }}>Travel is more than a getaway — it's a gateway to personal fulfillment, financial freedom, and generational wealth.</p>
            <div className="italic" style={{ color:B.copper, fontSize:'.875rem' }}>"Your legacy starts with your next trip."</div>
          </div>
          <div>
            <div style={{ color:B.copper, fontSize:'.65rem', letterSpacing:'.18em', textTransform:'uppercase', fontWeight:700, marginBottom:'1rem' }}>Navigate</div>
            {[['home','Home'],['travel','Book Travel'],['business','Build a Business'],['blog','Blog']].map(([k,l]) => (
              <button key={k} onClick={() => sv(k)} style={{ display:'block', background:'none', border:'none', cursor:'pointer', color:`${B.parchment}BB`, fontSize:'.875rem', marginBottom:'.6rem', textAlign:'left', transition:'color .2s' }}
                onMouseEnter={e=>e.target.style.color=B.copper} onMouseLeave={e=>e.target.style.color=`${B.parchment}BB`}>{l}</button>
            ))}
          </div>
          <div>
            <div style={{ color:B.copper, fontSize:'.65rem', letterSpacing:'.18em', textTransform:'uppercase', fontWeight:700, marginBottom:'1rem' }}>Connect</div>
            <a href="https://www.facebook.com/Tracydstuckeywfg/" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'.5rem', color:`${B.parchment}BB`, textDecoration:'none', fontSize:'.875rem', marginBottom:'.75rem' }}><Facebook size={17}/> Facebook</a>
            <a href="https://www.instagram.com/travelwithtracydstuckey" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'.5rem', color:`${B.parchment}BB`, textDecoration:'none', fontSize:'.875rem', marginBottom:'.75rem' }}><Instagram size={17}/> Instagram</a>
            <a href="https://www.linkedin.com/company/119594005/" target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:'.5rem', color:`${B.parchment}BB`, textDecoration:'none', fontSize:'.875rem', marginBottom:'1.5rem' }}><Linkedin size={17}/> LinkedIn</a>
            <a href="mailto:info@tracydstuckey.com" style={{ display:'flex', alignItems:'center', gap:'.5rem', color:`${B.parchment}BB`, textDecoration:'none', fontSize:'.875rem', marginBottom:'1.5rem' }}><Mail size={17}/> Email Tracy</a>
            <a href="https://tracystuckey.inteletravel.com/booktravel.cfm" target="_blank" rel="noopener noreferrer" className="btn-copper footer-book-btn" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'.5rem', padding:'.85rem 1.75rem', borderRadius:8, textDecoration:'none', fontSize:'1rem', width:'100%' }}><Plane size={18}/> Book Travel</a>
          </div>
        </div>
        <div className="copper-bar" style={{ marginBottom:'1.5rem' }}/>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'1rem', fontSize:'.75rem', opacity:.5 }}>
          <span>© {new Date().getFullYear()} Tracy D. Stuckey · All rights reserved.</span>
          <span>Independent Travel Agent · InteleTravel</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────────────────────
function HomePage({ sv }) {
  return (
    <div className="fade-up">
      {/* ── HERO: Full-bleed, dead center ── */}
      <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }}/>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(160deg,${B.green}F2 0%,${B.green}C0 45%,${B.teal}95 100%)` }}/>
        <div style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:860, padding:'2rem 1.5rem', color:B.parchment }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div style={{ height:1, width:56, background:B.copper }}/>
            <span style={{ color:B.copper, fontSize:'.68rem', fontWeight:700, letterSpacing:'.25em', textTransform:'uppercase' }}>Travel · Business · Legacy</span>
            <div style={{ height:1, width:56, background:B.copper }}/>
          </div>
          <h1 className="serif" style={{ fontSize:'clamp(2.75rem,6vw,5rem)', fontWeight:700, lineHeight:1.1, marginBottom:'1.5rem', textShadow:'0 2px 20px rgba(0,0,0,.3)' }}>
            Design a Life You Don't Need a{' '}
            <span className="italic" style={{ color:B.copper }}>Vacation From.</span>
          </h1>
          <p style={{ fontSize:'clamp(1rem,2.2vw,1.25rem)', lineHeight:1.75, opacity:.92, maxWidth:680, margin:'0 auto 2rem', textShadow:'0 1px 8px rgba(0,0,0,.2)' }}>
            Whether you're booking the girls' trip of a lifetime or building an empire in the world's most exciting industry — I've got the blueprint. Let's live vibrantly today and build your legacy for tomorrow.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.6rem', justifyContent:'center', marginBottom:'2.5rem' }}>
            {['Explore','Earn','Empower','Inspire'].map((p,i) => (
              <span key={p} style={{ padding:'.35rem 1.1rem', borderRadius:9999, fontSize:'.7rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', background:i%2===0?'rgba(245,245,220,.15)':'rgba(184,115,51,.3)', border:`1px solid ${i%2===0?'rgba(245,245,220,.3)':B.copper}`, color:B.parchment }}>{p}</span>
            ))}
          </div>
          <div className="hero-btns" style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center' }}>
            <button onClick={() => sv('travel')} className="btn-copper lift" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.5rem', padding:'1.1rem 2.5rem', borderRadius:8, fontSize:'1.05rem' }}><Plane size={20}/> Book Your Trip</button>
            <button onClick={() => sv('business')} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.5rem', padding:'1.1rem 2.5rem', borderRadius:8, fontSize:'1.05rem', fontWeight:700, background:'transparent', border:`2px solid ${B.parchment}`, color:B.parchment, cursor:'pointer', transition:'all .2s' }}
              onMouseEnter={e=>{e.currentTarget.style.background=B.parchment;e.currentTarget.style.color=B.green;}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=B.parchment;}}><Briefcase size={20}/> Build Your Business</button>
          </div>
        </div>
        <div className="hide-mobile" style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem', opacity:.55, color:B.parchment }}>
          <span style={{ fontSize:'.65rem', letterSpacing:'.15em', textTransform:'uppercase' }}>Scroll</span>
          <div style={{ width:1, height:36, background:B.parchment }}/>
        </div>
      </section>

      {/* ── SPLIT CTA ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }} className="split-two">
        {[
          { v:'travel',   bg:"url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600')", ov:`${B.teal}CC`, icon:<Plane size={52}/>, title:'Book Your Trip Now', sub:'From hidden gems to luxury bucket lists — I handle every detail so your only job is to show up.', cta:'Explore Travel Services' },
          { v:'business', bg:"url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600')", ov:`${B.green}E0`, icon:<Briefcase size={52} style={{color:B.copper}}/>, title:'Build Your Business', sub:'Get paid to do what you already do — recommend incredible experiences. The blueprint is ready.', cta:'Start Your Travel Business' },
        ].map(({ v, bg, ov, icon, title, sub, cta }) => (
          <div key={v} onClick={() => sv(v)} style={{ position:'relative', minHeight:480, cursor:'pointer', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ position:'absolute', inset:0, backgroundImage:bg, backgroundSize:'cover', backgroundPosition:'center', transition:'transform .7s' }}
              onMouseEnter={e=>e.currentTarget.style.transform='scale(1.08)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
            <div style={{ position:'absolute', inset:0, background:ov }}/>
            <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'2rem', color:B.parchment }}>
              <div style={{ marginBottom:'1.25rem' }}>{icon}</div>
              <h2 className="serif" style={{ fontSize:'clamp(1.75rem,3vw,2.75rem)', fontWeight:700, marginBottom:'1rem' }}>{title}</h2>
              <p style={{ fontSize:'1.05rem', opacity:.9, maxWidth:340, margin:'0 auto 1.5rem', lineHeight:1.65 }}>{sub}</p>
              <span style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', fontWeight:700, borderBottom:`2px solid ${B.copper}`, paddingBottom:4 }}>{cta} <ChevronRight size={18}/></span>
            </div>
          </div>
        ))}
      </section>

      {/* ── PILLARS ── */}
      <section style={{ background:B.green, padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <div className="copper-bar" style={{ width:80, margin:'0 auto 1.5rem' }}/>
            <h2 className="serif italic" style={{ fontSize:'2rem', fontWeight:700, color:B.rose, marginBottom:'.6rem' }}>The Blueprint</h2>
            <p style={{ color:`${B.parchment}99`, fontSize:'1rem' }}>Everything we do is built on four unshakeable pillars.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'2rem' }} className="four-col">
            {[
              { icon:<Globe size={30}/>, label:'Explore', desc:'Expose communities to new cultures, destinations, and perspectives.' },
              { icon:<DollarSign size={30}/>, label:'Earn', desc:'Transform a love of travel into a legitimate income stream.' },
              { icon:<TrendingUp size={30}/>, label:'Empower', desc:'Build generational wealth by merging lifestyle and entrepreneurship.' },
              { icon:<Star size={30}/>, label:'Inspire', desc:'Show future generations that dreaming without borders is a strategy.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div style={{ width:60, height:60, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1rem', background:'rgba(184,115,51,.2)', color:B.copper }}>{icon}</div>
                <h3 style={{ color:B.copper, fontWeight:700, fontSize:'1.05rem', marginBottom:'.5rem' }}>{label}</h3>
                <p style={{ color:`${B.parchment}CC`, fontSize:'.875rem', lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ padding:'5rem 1.5rem', background:B.parchment }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <h2 className="serif" style={{ fontSize:'2rem', fontWeight:700, color:B.green, marginBottom:'.6rem' }}>Latest from the Blog</h2>
            <p style={{ color:`${B.green}99` }}>Travel tips, business insights, and the real talk you didn't know you needed.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'2rem' }}>
            {POSTS.slice(0,3).map((p,i) => <BlogCard key={i} post={p} onClick={() => {}} sv={sv} fromHome />)}
          </div>
          <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
            <button onClick={() => sv('blog')} className="btn-outline-copper" style={{ padding:'.75rem 2rem', borderRadius:8, fontSize:'.9rem' }}>View All Posts</button>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ background:'#0ABAB5', padding:'4.5rem 1.5rem', textAlign:'center' }}>
        <div style={{ fontSize:'3.5rem', color:B.copper, lineHeight:.6, marginBottom:'1.25rem' }}>"</div>
        <p className="serif italic" style={{ fontSize:'clamp(1.3rem,2.5vw,1.9rem)', color:B.parchment, fontWeight:700, maxWidth:700, margin:'0 auto 1rem', lineHeight:1.45 }}>
          I'm telling you this because I love you. Now go get your bag.
        </p>
        <div style={{ color:`${B.parchment}80`, fontSize:'.75rem', letterSpacing:'.18em', textTransform:'uppercase', marginTop:'.75rem' }}>— Tracy D. Stuckey</div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TRAVEL PAGE
// ─────────────────────────────────────────────────────────────
function TravelPage({ sv }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', tripType:'', destination:'', depart:'', returnDate:'', travelers:'2', budget:'', notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm(f => ({...f, [k]: e.target.value}));

  const handleSubmit = e => {
    e.preventDefault();
    const body = `NEW TRIP REQUEST\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTrip Type: ${form.tripType}\nDestination: ${form.destination}\nDepart: ${form.depart}\nReturn: ${form.returnDate}\nTravelers: ${form.travelers}\nBudget: ${form.budget}\nNotes: ${form.notes}`.trim();
    window.location.href = `mailto:info@tracydstuckey.com?subject=Trip Request - ${form.destination||'New Inquiry'}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="fade-up" style={{ background:B.parchment }}>
      <div style={{ background:B.teal, padding:'6rem 1.5rem 7rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000')", backgroundSize:'cover', backgroundPosition:'center', opacity:.2 }}/>
        <div style={{ position:'relative', zIndex:1, maxWidth:1280, margin:'0 auto' }}>
          <button onClick={() => sv('home')} style={{ display:'flex', alignItems:'center', gap:'.4rem', background:'none', border:'none', cursor:'pointer', color:`${B.parchment}99`, marginBottom:'2rem', fontSize:'.875rem' }}><ArrowLeft size={17}/> Back to Home</button>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1rem' }}>
            <Plane size={17} style={{ color:B.copper }}/><span style={{ color:B.copper, fontSize:'.68rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase' }}>Book Travel</span>
          </div>
          <h1 className="serif" style={{ fontSize:'clamp(2.25rem,5vw,3.75rem)', fontWeight:700, color:B.parchment, marginBottom:'1rem', lineHeight:1.15 }}>Your Dream Destination Is One Request Away.</h1>
          <p style={{ fontSize:'1.15rem', color:`${B.parchment}DD`, maxWidth:580, lineHeight:1.7 }}>Tell me where you want to go. I lock in the best rates, VIP perks, and handle every detail — then book through my InteleTravel agent portal so your commissions, protections, and perks are fully covered.</p>
        </div>
      </div>

      <div style={{ maxWidth:900, margin:'-4rem auto 0', padding:'0 1.5rem 5rem', position:'relative', zIndex:10 }}>
        <div style={{ background:'white', borderRadius:16, boxShadow:'0 24px 64px rgba(26,77,46,.16)', padding:'2.5rem', border:`1px solid rgba(31,110,109,.1)` }}>
          <div style={{ marginBottom:'2rem' }}>
            <h2 className="serif" style={{ fontSize:'1.6rem', fontWeight:700, color:B.green, marginBottom:'.4rem' }}>Request Your Trip</h2>
            <p style={{ color:`${B.green}99`, fontSize:'.9rem' }}>Fill this out and I'll reach back within 24 hours with options and pricing. Every booking runs through my <strong>InteleTravel agent portal</strong> — you're protected and I'm credited.</p>
          </div>

          {submitted ? (
            <div style={{ textAlign:'center', padding:'3rem 1rem' }}>
              <CheckCircle size={52} style={{ color:B.teal, margin:'0 auto 1rem', display:'block' }}/>
              <h3 className="serif" style={{ fontSize:'1.75rem', color:B.green, marginBottom:'.75rem' }}>Request Sent!</h3>
              <p style={{ color:`${B.green}99`, maxWidth:400, margin:'0 auto 2rem', lineHeight:1.7 }}>Your trip details are on the way to Tracy. Expect a response within 24 hours. Now go charge your passport — the run is starting.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',tripType:'',destination:'',depart:'',returnDate:'',travelers:'2',budget:'',notes:'' }); }} className="btn-outline-copper" style={{ padding:'.65rem 1.75rem', borderRadius:8, fontSize:'.9rem' }}>Submit Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem', marginBottom:'1.25rem' }} className="two-col">
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Your Name *</label><input required className="form-input" placeholder="First & Last Name" value={form.name} onChange={set('name')}/></div>
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Email *</label><input required type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={set('email')}/></div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem', marginBottom:'1.25rem' }} className="two-col">
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Phone</label><input type="tel" className="form-input" placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')}/></div>
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Trip Type *</label>
                  <select required className="form-input" value={form.tripType} onChange={set('tripType')}>
                    <option value="">Select type...</option>
                    {['All-Inclusive Resort','Cruise','Girls\' Trip','Destination Wedding','International Adventure','Family Vacation','Honeymoon / Romance','Group Trip','Custom / Not Sure'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom:'1.25rem' }}><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Destination *</label><input required className="form-input" placeholder="e.g. Cancún, Maldives, Caribbean Cruise, Europe..." value={form.destination} onChange={set('destination')}/></div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1.25rem', marginBottom:'1.25rem' }} className="three-col">
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Depart Date *</label><input required type="date" className="form-input" value={form.depart} onChange={set('depart')}/></div>
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Return Date</label><input type="date" className="form-input" value={form.returnDate} onChange={set('returnDate')}/></div>
                <div><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}># Travelers *</label>
                  <select required className="form-input" value={form.travelers} onChange={set('travelers')}>{['1','2','3','4','5','6','7','8','9','10+'].map(n=><option key={n}>{n}</option>)}</select>
                </div>
              </div>
              <div style={{ marginBottom:'1.25rem' }}><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Budget Range (per person)</label>
                <select className="form-input" value={form.budget} onChange={set('budget')}>
                  <option value="">Select a range...</option>
                  {['Under $1,000','$1,000 – $2,500','$2,500 – $5,000','$5,000 – $10,000','$10,000+','Flexible / Let Tracy advise'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom:'2rem' }}><label style={{ display:'block', fontSize:'.72rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:B.green, marginBottom:'.4rem' }}>Special Requests or Notes</label><textarea className="form-input" rows={4} placeholder="Anniversaries, dietary needs, dream experiences, vibes — tell me everything..." value={form.notes} onChange={set('notes')} style={{ resize:'vertical' }}/></div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
                <button type="submit" className="btn-copper lift" style={{ display:'flex', alignItems:'center', gap:'.5rem', padding:'1rem 2.25rem', borderRadius:8, fontSize:'1rem' }}><Send size={18}/> Send My Trip Request</button>
                <div style={{ display:'flex', alignItems:'center', gap:'.5rem', fontSize:'.8rem', color:`${B.green}80` }}><CheckCircle size={15} style={{ color:B.teal }}/> Response within 24 hrs · Booked via InteleTravel</div>
              </div>
            </form>
          )}
        </div>
        <div style={{ marginTop:'1.5rem', textAlign:'center', padding:'1.25rem', borderRadius:10, background:`${B.teal}10`, border:`1px solid rgba(31,110,109,.15)` }}>
          <p style={{ color:`${B.green}CC`, fontSize:'.9rem', marginBottom:'.6rem' }}>Already know exactly what you want? Browse live deals directly on my portal:</p>
          <a href="https://tracystuckey.inteletravel.com/booktravel.cfm" target="_blank" rel="noopener noreferrer" className="btn-outline-copper" style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', padding:'.6rem 1.5rem', borderRadius:7, textDecoration:'none', fontSize:'.875rem' }}><Plane size={16}/> Open My InteleTravel Portal →</a>
        </div>
      </div>

      <div style={{ background:`${B.teal}0D`, padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <h2 className="serif" style={{ textAlign:'center', fontSize:'1.9rem', fontWeight:700, color:B.green, marginBottom:'2.5rem' }}>What I Book For You</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:'1.5rem' }}>
            {[
              { icon:<Plane size={26}/>, title:'Flights', desc:'Domestic & international, with flexible fare options and the best routing.' },
              { icon:<Award size={26}/>, title:'Resorts & Hotels', desc:'Boutique to all-inclusive luxury — VIP perks you simply can\'t get booking solo.' },
              { icon:<Globe size={26}/>, title:'Cruises', desc:'Ocean and river cruises, best cabins, and onboard credit deals.' },
              { icon:<Heart size={26}/>, title:'Destination Weddings', desc:'Full group coordination so your big day feels completely effortless.' },
              { icon:<Users size={26}/>, title:'Group Travel', desc:'Girls\' trips, family reunions, corporate retreats — all sizes welcome.' },
              { icon:<Compass size={26}/>, title:'Custom Itineraries', desc:'Tell me your vibe. I\'ll build the perfect blueprint just for you.' },
              { icon:<Calendar size={26}/>, title:'Events', desc:'Travel parties, group experiences, and curated event packages — from concept to execution.' },
              { icon:<Music size={26}/>, title:'Concerts & Shows', desc:'Concert travel packages, festival experiences, and live event trips done right.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="lift" style={{ background:'white', borderRadius:12, padding:'2.25rem', border:`1px solid rgba(26,77,46,.07)` }}>
                <div style={{ width:50, height:50, borderRadius:'50%', background:`${B.teal}15`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1rem', color:B.teal }}>{icon}</div>
                <h3 style={{ fontWeight:700, fontSize:'1rem', color:B.green, marginBottom:'.35rem' }}>{title}</h3>
                <p style={{ fontSize:'.85rem', color:`${B.green}88`, lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BUSINESS PAGE  (no PlanNet Marketing mentions)
// ─────────────────────────────────────────────────────────────
function BusinessPage({ sv }) {
  return (
    <div className="fade-up" style={{ background:B.parchment }}>
      <div style={{ background:B.green, padding:'7rem 1.5rem 6rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=2000')", backgroundSize:'cover', backgroundPosition:'center', opacity:.25 }}/>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(135deg,${B.green}F5,${B.green}B0)` }}/>
        <div style={{ position:'relative', zIndex:1, maxWidth:1280, margin:'0 auto' }}>
          <button onClick={() => sv('home')} style={{ display:'flex', alignItems:'center', gap:'.4rem', background:'none', border:'none', cursor:'pointer', color:B.rose, marginBottom:'2rem', fontSize:'.875rem' }}><ArrowLeft size={17}/> Back to Home</button>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1rem' }}>
            <Briefcase size={17} style={{ color:B.copper }}/><span style={{ color:B.copper, fontSize:'.68rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase' }}>Business Opportunity</span>
          </div>
          <h1 className="serif" style={{ fontSize:'clamp(2.25rem,5vw,3.75rem)', fontWeight:700, color:B.parchment, marginBottom:'1.25rem', lineHeight:1.15 }}>Design Your Financial Freedom.</h1>
          <p style={{ fontSize:'1.15rem', color:`${B.parchment}DD`, maxWidth:600, lineHeight:1.7 }}>The travel industry is worth over $9 trillion globally. Most people only interact with it as consumers — never as earners. I'm here to show you the other side of the table.</p>
        </div>
      </div>

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'5rem 1.5rem' }}>
        <div style={{ maxWidth:820, margin:'0 auto 4rem', textAlign:'center' }}>
          <h2 className="serif" style={{ fontSize:'1.9rem', fontWeight:700, color:B.green, marginBottom:'1.25rem' }}>Real talk: I turned a girls' trip into a revenue stream.</h2>
          <p style={{ fontSize:'1.05rem', lineHeight:1.8, color:`${B.green}CC` }}>Not by accident — by design. The same commissions that hotels, airlines, and resorts pay to big booking platforms can come directly to you. You already love to travel. You already recommend places to everyone you know — for free. What if you got paid for it?</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem', marginBottom:'4rem' }} className="three-col">
          {[
            { icon:<TrendingUp size={34}/>, title:'Multiple Income Streams', desc:'Earn from your own bookings and build a team to generate passive income that works while you sleep.' },
            { icon:<Globe size={34}/>, title:'Work From Anywhere', desc:'Your business travels with you. A laptop and wifi is all you need. Run your empire from a beach in Cancún.' },
            { icon:<Users size={34}/>, title:'Community & Mentorship', desc:'You\'re in business for yourself, but never by yourself. World-class training and a thriving community included.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="lift" style={{ background:'white', borderRadius:16, padding:'2.25rem', textAlign:'center', border:`1px solid rgba(26,77,46,.08)` }}>
              <div style={{ width:68, height:68, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem', background:`${B.rose}18`, color:B.rose }}>{icon}</div>
              <h4 style={{ fontWeight:700, fontSize:'1.1rem', color:B.green, marginBottom:'.6rem' }}>{title}</h4>
              <p style={{ fontSize:'.875rem', lineHeight:1.7, color:`${B.green}99` }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background:B.green, borderRadius:20, padding:'3.5rem', marginBottom:'3rem', color:B.parchment }}>
          <div style={{ display:'grid', gridTemplateColumns:'3fr 2fr', gap:'3rem', alignItems:'center' }} className="two-col">
            <div>
              <h2 className="serif" style={{ fontSize:'1.9rem', fontWeight:700, marginBottom:'1rem' }}>How the Business Works</h2>
              <p style={{ opacity:.85, lineHeight:1.7, marginBottom:'1.75rem', fontSize:'.95rem' }}>As an independent travel agent, you earn commission on every booking you make — flights, hotels, cruises, resorts. The infrastructure is already built. You just need to step in and use it.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:'.9rem' }}>
                {['Become a certified independent travel agent','Book travel for clients and earn commissions','Build a team of fellow travel entrepreneurs','Earn income on your entire team\'s bookings','Unlock exclusive travel perks and discounts for yourself','Work on your own schedule, from anywhere in the world'].map((s,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'.7rem' }}>
                    <div style={{ width:20, height:20, borderRadius:'50%', background:B.copper, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}><CheckCircle size={12} style={{ color:B.parchment }}/></div>
                    <span style={{ fontSize:'.875rem', opacity:.9 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign:'center' }}>
              <div className="serif" style={{ fontSize:'5.5rem', fontWeight:700, color:B.copper, lineHeight:1 }}>$9T</div>
              <div style={{ opacity:.75, marginBottom:'2rem', fontSize:'.95rem' }}>Global travel industry</div>
              <div className="serif italic" style={{ fontSize:'1.6rem', color:B.copper, marginBottom:'.5rem' }}>Now, check it —</div>
              <p style={{ opacity:.8, lineHeight:1.6, fontSize:'.875rem' }}>Most people are on the consumer side. What if you moved to the earner side?</p>
            </div>
          </div>
        </div>

        {/* CTA — Connect with Tracy directly */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }} className="two-col">
          <div className="lift" style={{ background:'white', borderRadius:16, padding:'2.25rem', border:`1px solid rgba(26,77,46,.1)` }}>
            <h3 className="serif" style={{ fontSize:'1.4rem', fontWeight:700, color:B.green, marginBottom:'.75rem' }}>Ready to Get Started?</h3>
            <p style={{ fontSize:'.875rem', color:`${B.green}99`, lineHeight:1.7, marginBottom:'1.5rem' }}>
              The best first step is a conversation. Read the full story of how this business works and what it has meant for my life — then reach out.
            </p>
            <button onClick={() => { const post = POSTS.find(p => p.title.includes('Passport to Paycheck')); if(post){ setSelectedPost(post); sv('blog'); window.scrollTo(0,0); }}} style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', color:B.copper, fontWeight:700, background:'none', border:'none', cursor:'pointer', fontSize:'.9rem', padding:0 }}>
              Read "From Passport to Paycheck" <ChevronRight size={17}/>
            </button>
          </div>
          <div style={{ background:B.teal, borderRadius:16, padding:'2.25rem', color:B.parchment }}>
            <h3 className="serif" style={{ fontSize:'1.4rem', fontWeight:700, marginBottom:'.75rem' }}>Connect With Me Directly</h3>
            <p style={{ opacity:.9, lineHeight:1.7, marginBottom:'1.5rem', fontSize:'.875rem' }}>The best way to understand this opportunity is a real conversation. Follow my journey and let's talk about where you want to go — in travel and in life.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.75rem' }}>
              <a href="https://www.facebook.com/Tracydstuckeywfg/" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:B.parchment, color:B.teal, padding:'.7rem 1.4rem', borderRadius:8, textDecoration:'none', fontWeight:700, fontSize:'.9rem' }}><Facebook size={17}/> Facebook</a>
              <a href="https://www.instagram.com/travelwithtracydstuckey" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:B.parchment, color:B.teal, padding:'.7rem 1.4rem', borderRadius:8, textDecoration:'none', fontWeight:700, fontSize:'.9rem' }}><Instagram size={17}/> Instagram</a>
              <a href="https://www.linkedin.com/company/119594005/" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:B.parchment, color:B.teal, padding:'.7rem 1.4rem', borderRadius:8, textDecoration:'none', fontWeight:700, fontSize:'.9rem' }}><Linkedin size={17}/> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG CARD
// ─────────────────────────────────────────────────────────────
function BlogCard({ post, sv, setSelectedPost, fromHome }) {
  const hasArticle = !!post.content;
  const handleClick = () => {
    if (hasArticle && setSelectedPost) {
      setSelectedPost(post);
      window.scrollTo(0,0);
    } else if (fromHome) {
      sv('blog');
    }
  };
  return (
    <div className="lift" onClick={handleClick} style={{ background:'white', borderRadius:12, overflow:'hidden', cursor:'pointer', border:`1px solid rgba(26,77,46,.08)` }}>
      <div style={{ height:200, backgroundImage:`url(${post.image})`, backgroundSize:'cover', backgroundPosition:'center', position:'relative' }}>
        {hasArticle && (
          <div style={{ position:'absolute', top:12, right:12, background:B.copper, color:B.parchment, fontSize:'.65rem', fontWeight:700, padding:'.25rem .6rem', borderRadius:4, letterSpacing:'.08em', textTransform:'uppercase' }}>Full Article</div>
        )}
      </div>
      <div style={{ padding:'1.4rem' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'.5rem' }}>
          <span style={{ color:B.copper, fontSize:'.68rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase' }}>{post.category}</span>
          <span style={{ color:`${B.green}60`, fontSize:'.75rem' }}>{post.date}</span>
        </div>
        <h3 style={{ fontWeight:700, fontSize:'1rem', color:B.green, marginBottom:'.45rem', lineHeight:1.4 }}>{post.title}</h3>
        <p style={{ fontSize:'.85rem', color:`${B.green}80`, lineHeight:1.6, marginBottom:'1rem' }}>{post.excerpt}</p>
        <span style={{ color:B.copper, fontSize:'.85rem', fontWeight:600, display:'flex', alignItems:'center', gap:3 }}>
          {hasArticle ? 'Read Full Article' : 'Coming Soon'} <ChevronRight size={14}/>
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG POST DETAIL
// ─────────────────────────────────────────────────────────────
function BlogPostDetail({ post, onBack, sv }) {
  return (
    <div className="fade-up">
      {/* Hero image */}
      <div style={{ height:'45vh', minHeight:320, position:'relative', backgroundImage:`url(${post.image})`, backgroundSize:'cover', backgroundPosition:'center' }}>
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(to bottom, rgba(26,77,46,.5), rgba(26,77,46,.85))` }}/>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2.5rem', maxWidth:860, margin:'0 auto' }}>
          <button onClick={onBack} style={{ display:'flex', alignItems:'center', gap:'.4rem', background:'none', border:'none', cursor:'pointer', color:`${B.parchment}CC`, marginBottom:'1rem', fontSize:'.875rem' }}><ArrowLeft size={17}/> Back to Blog</button>
          <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'.75rem' }}>
            <span style={{ color:B.copper, fontSize:'.7rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', background:'rgba(184,115,51,.25)', padding:'.25rem .7rem', borderRadius:4 }}>{post.category}</span>
            <span style={{ color:`${B.parchment}80`, fontSize:'.8rem' }}>{post.date}</span>
          </div>
          <h1 className="serif" style={{ fontSize:'clamp(1.75rem,4vw,2.75rem)', fontWeight:700, color:B.parchment, lineHeight:1.2 }}>{post.title}</h1>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth:760, margin:'0 auto', padding:'4rem 1.5rem 6rem' }}>
        {/* Author tag */}
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'3rem', paddingBottom:'2rem', borderBottom:`1px solid rgba(26,77,46,.1)` }}>
          <div style={{ width:48, height:48, borderRadius:'50%', background:B.green, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <span className="serif" style={{ color:B.copper, fontWeight:700, fontSize:'1.1rem' }}>T</span>
          </div>
          <div>
            <div style={{ fontWeight:700, color:B.green, fontSize:'.9rem' }}>Tracy D. Stuckey</div>
            <div style={{ color:`${B.green}70`, fontSize:'.8rem' }}>Travel Agent · Entrepreneur · Your Auntie in the Business</div>
          </div>
        </div>

        {/* Render content blocks */}
        <div className="article-body">
          {post.content.map(([type, text], i) => {
            if (type === 'hook') return (
              <div key={i} style={{ borderLeft:`4px solid ${B.copper}`, paddingLeft:'1.5rem', marginBottom:'2rem' }}>
                <p style={{ fontSize:'1.2rem', lineHeight:1.8, color:B.green, fontWeight:600 }}>{text}</p>
              </div>
            );
            if (type === 'h2') return <h2 key={i}>{text}</h2>;
            if (type === 'closing') return (
              <div key={i} style={{ background:B.green, borderRadius:12, padding:'2rem', marginTop:'3rem' }}>
                <div className="italic" style={{ color:B.copper, fontSize:'.75rem', fontWeight:700, marginBottom:'.75rem', letterSpacing:'.1em', textTransform:'uppercase' }}>Tracy's Closer</div>
                <p style={{ color:B.parchment, fontSize:'1.05rem', lineHeight:1.8, fontWeight:600 }}>{text}</p>
              </div>
            );
            return <p key={i}>{text}</p>;
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop:'3rem', padding:'2rem', borderRadius:12, background:`${B.teal}10`, border:`1px solid rgba(31,110,109,.15)`, textAlign:'center' }}>
          <p className="serif" style={{ fontSize:'1.1rem', fontWeight:700, color:B.green, marginBottom:'.5rem' }}>Ready to make your next trip happen?</p>
          <p style={{ color:`${B.green}99`, fontSize:'.9rem', marginBottom:'1.5rem' }}>Let Tracy handle every detail — your only job is to show up.</p>
          <button onClick={() => { sv('travel'); window.scrollTo(0,0); }} className="btn-copper" style={{ padding:'.85rem 2rem', borderRadius:8, fontSize:'.95rem', display:'inline-flex', alignItems:'center', gap:'.5rem' }}><Plane size={18}/> Request Your Trip</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BLOG PAGE
// ─────────────────────────────────────────────────────────────
function BlogPage({ sv, selectedPost, setSelectedPost }) {
  const [active, setActive] = useState('All');

  useEffect(() => { if (selectedPost) window.scrollTo(0,0); }, [selectedPost]);

  if (selectedPost) return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} sv={sv}/>;

  const cats = ['All', ...new Set(POSTS.map(p => p.category))];
  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active);

  return (
    <div className="fade-up" style={{ background:B.parchment, minHeight:'100vh' }}>
      <div style={{ background:B.green, padding:'5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <button onClick={() => sv('home')} style={{ display:'flex', alignItems:'center', gap:'.4rem', background:'none', border:'none', cursor:'pointer', color:B.rose, marginBottom:'1.5rem', fontSize:'.875rem' }}><ArrowLeft size={17}/> Back to Home</button>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1rem' }}><BookOpen size={17} style={{ color:B.copper }}/><span style={{ color:B.copper, fontSize:'.68rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase' }}>The Lifestyle Blog</span></div>
          <h1 className="serif" style={{ fontSize:'clamp(2.25rem,5vw,3.5rem)', fontWeight:700, color:B.parchment, marginBottom:'.75rem' }}>Insights, Tea &amp; Travel Tips.</h1>
          <p style={{ fontSize:'1.05rem', color:`${B.parchment}CC`, maxWidth:500 }}>The real talk you need for the travel lifestyle and business you deserve.</p>
        </div>
      </div>

      {/* Filter */}
      <div style={{ background:'white', borderBottom:`1px solid rgba(26,77,46,.08)`, padding:'.75rem 1.5rem', position:'sticky', top:70, zIndex:10 }}>
        <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', gap:'.5rem', overflowX:'auto', paddingBottom:2 }}>
          {cats.map(c => <button key={c} className={`cat-pill${active===c?' active':''}`} onClick={() => setActive(c)}>{c}</button>)}
        </div>
      </div>

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'3rem 1.5rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'2rem' }}>
          {filtered.map((p,i) => <BlogCard key={i} post={p} sv={sv} setSelectedPost={setSelectedPost}/>)}
        </div>
      </div>
    </div>
  );
}
