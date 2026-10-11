/*
 * La Viva Lounge — main script
 *
 *  - IMG:        image paths
 *  - FOOD, CATS: food menu + categories (prices in GH₵)
 *  - JUICES:     cold pressed juice carousel
 *  - DRINKS:     cocktail / mocktail / mojito lists
 *  - Hero photo parallax + cold vapour (canvas)
 *  - Carousel, menu rendering, item modal, cart & WhatsApp ordering
 */
const IMG = {
  "pineapple": "assets/images/pineapple.webp",
  "logo": "assets/images/logo.webp",
  "badge": "assets/images/badge.webp",
  "hero": "assets/images/hero.jpg",
  "stripA": "assets/images/stripA.jpg",
  "stripB": "assets/images/stripB.jpg",
  "g_red": "assets/images/g_red.jpg",
  "g_orange": "assets/images/g_orange.jpg",
  "g_white": "assets/images/g_white.jpg",
  "g_cuc": "assets/images/g_cuc.jpg",
  "g_straw": "assets/images/g_straw.jpg",
  "g_mint": "assets/images/g_mint.jpg",
  "g_peach": "assets/images/g_peach.jpg",
  "g_clear": "assets/images/g_clear.jpg",
  "g_yellow": "assets/images/g_yellow.jpg",
  "g_mred": "assets/images/g_mred.jpg",
  "f_bigdaddy": "assets/images/f_bigdaddy.jpg",
  "f_jollof": "assets/images/f_jollof.jpg",
  "f_samosa": "assets/images/f_samosa.jpg",
  "f_crepes": "assets/images/f_crepes.jpg",
  "f_salad": "assets/images/f_salad.jpg",
  "f_mixed": "assets/images/f_mixed.jpg",
  "f_chshaw": "assets/images/f_chshaw.jpg",
  "f_wrap_tall": "assets/images/f_wrap_tall.jpg",
  "f_fries": "assets/images/f_fries.jpg",
  "f_fries_wide": "assets/images/f_fries_wide.jpg",
  "b_mango": "assets/images/b_mango.webp",
  "b_range": "assets/images/b_range.webp",
  "b_mellow": "assets/images/b_mellow.webp",
  "b_ginger": "assets/images/b_ginger.webp",
  "b_twist": "assets/images/b_twist.webp",
  "b_gold": "assets/images/b_gold.webp",
  "lime": "assets/images/lime.webp",
  "strawberry1": "assets/images/strawberry1.webp",
  "mint": "assets/images/mint.webp",
  "mint2": "assets/images/mint2.webp",
  "ice": "assets/images/ice.webp",
  "ice2": "assets/images/ice2.webp"
};
const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ced = n => 'GH₵ ' + n;
$('#logoTop').src=IMG.logo; $('#logoFoot').src=IMG.logo; $('#logoPress').src=IMG.badge;
$('#stripA').src = IMG.stripA; $('#stripB').src = IMG.stripB;

/* ---------------- DATA (from the La Viva menu) ---------------- */
const FOOD = [
  {id:'jollof', name:'Gizzy Jollof', img:'f_jollof', tag:'Popular', cats:['popular','plates'], desc:'Jollof with gizzard chunks, plantain, protein, veggies, gizzard khebab', opts:[['M pack',50],['L pack',80]]},
  {id:'bigdaddy', name:'Big Daddy Shawarma', img:'f_bigdaddy', tag:'Best seller', cats:['popular','shawarma'], desc:'Chicken, beef, veggies, cream / sauce, tortilla', opts:[['Medium',55],['Loaded',80]]},
  {id:'fries', name:'Loaded Fries', img:'f_fries_wide', tag:'Popular', cats:['popular','plates'], desc:'Crispy fries, melted cheese and sauce, protein, fresh veggies', opts:[['M pack',50],['L pack',80]]},
  {id:'chshaw', name:'Chicken Shawarma', img:'f_chshaw', tag:'Wrap', cats:['shawarma'], desc:'Chicken, veggies, cream / sauce, tortilla', opts:[['Medium',50],['Loaded',65]]},
  {id:'samosa', name:'Samosa', img:'f_samosa', tag:'Bites', cats:['shawarma','popular'], desc:'Samosa with black pepper sauce dip', opts:[['5 pieces',35],['8 pieces',45]]},
  {id:'crepes', name:'Crepes (Pancakes)', img:'f_crepes', tag:'Sweet', cats:['shawarma'], desc:'Pancakes, cream, filling, raisins, M&M / party sprinkles', opts:[['5 pieces',30],['8 pieces',45]], fill:['Strawberry sauce + cream','Blueberry sauce + cream']},
  {id:'salad', name:'Chicken Salad', img:'f_salad', tag:'Fresh', cats:['plates'], desc:'Fried chicken, veggies, mayonnaise, cream and mixed sauce', opts:[['M pack',40],['L pack',60]]},
  {id:'wings', name:'Spicy Garlic Honey Wings / Thighs', img:null, tag:'Hot', cats:['plates','popular'], desc:'Crispy and juicy chicken wings or thighs, garlic honey sauce, spices', opts:[['Wings · 5 pcs',50],['Wings · 10 pcs',105],['Thighs · 5 pcs',55],['Thighs · 10 pcs',120]]},
];
const CATS = [
  {id:'popular', label:'Popular', img:'f_chshaw', color:'#C8102E'},
  {id:'shawarma', label:'Shawarma & bites', img:'f_mixed', color:'#FDBE00', yellow:true},
  {id:'plates', label:'Daily plates', img:'f_jollof', color:'#A50E0E'},
];
const JUICES = [
  {name:['Mango','Smash'], ing:'Mango, Pineapple, Ginger', bottle:'b_mango', tint:'#ffb52e', price:25, main:'#FFAA00', bg:'#FFEFC6', deep:'#9A5A00', fruits:[['pineapple'],['orange'],['mint2'],['ice'],['lemon']], note:'Ripe mango and pineapple with a warm kick of fresh ginger.'},
  {name:['Range','Lover'], ing:'Orange, Carrot, Apple, Pineapple', bottle:'b_range', tint:'#ff7a1a', price:25, main:'#F26A10', bg:'#FFE1C9', deep:'#9C3500', fruits:[['orange'],['ice'],['pineapple'],['orange'],['mint2']], note:'Bright orange and sweet carrot, rounded out with apple and pineapple.'},
  {name:['Mellow','Mind'], ing:'Watermelon, Beetroot, Pineapple, Mint Leaves, Ginger', bottle:'b_mellow', tint:'#f0507e', price:20, main:'#D42A62', bg:'#FFD6E3', deep:'#7E0E36', fruits:[['strawberry1'],['mint2'],['ice'],['strawberry1'],['pineapple']], note:'Juicy watermelon and earthy beetroot, cooled down with mint.'},
  {name:['Ginger','Pine'], ing:'Pineapple, Ginger', bottle:'b_ginger', tint:'#fff6d6', price:20, main:'#C2B200', bg:'#F7F2C4', deep:'#6B6100', fruits:[['pineapple'],['lemon'],['ice'],['mint2'],['pineapple']], note:'Just two ingredients: sweet pineapple and plenty of ginger.'},
  {name:['Twist',''], ing:'Pineapple, Cucumber, Mint Leaves', bottle:'b_twist', tint:'#8fdc6a', price:20, main:'#2EA85A', bg:'#D5F3DE', deep:'#145F31', fruits:[['lime'],['mint2'],['ice'],['lime'],['pineapple']], note:'Crisp cucumber and pineapple with fresh mint. Light and very cold.'},
  {name:['Liquid','Gold'], ing:'Orange, Pineapple, Mango, Passion Fruit, Lemon, Ginger', bottle:'b_gold', tint:'#ffc21a', price:27, main:'#E09A00', bg:'#FFF1C2', deep:'#7A4E00', fruits:[['orange'],['pineapple'],['ice'],['lemon'],['orange']], note:'Six fruits pressed together. Our most popular juice.'},
];
const DRINKS = {
  'Signature': {note:'Signature cocktails', items:[
    ['Peach Island',45,'OJ, Peach Schnapps, Peach Syrup, Mango Juice, Cranberry Juice, Vodka, Wine Float','#ff9a5a','#ffd27a'],
    ['Passion Wave',35,'Vodka, Peach Schnapps, Coconut Rum, OJ, Passion Puree, Pina Juice','#ff8a00','#ffd166'],
    ['Emerald',30,'Pina Juice, Rum, Triple Sec, Midori, Blue Curacao, OJ, Mint Leaves','#079e6e','#9be15d'],
    ['Twilight',40,'Strawberry Puree, Malibu, Pina Juice, Peach Schnapps, Cranberry, Dark Rum','#7c3aed','#ec4899'],
    ['Supernova',50,'Strawberry Puree, Brandy, OJ, Triple Sec, Honey Syrup, Red Wine','#b0102f','#f59e0b'],
    ['Hookup',45,'Rum, Coconut Rum, Peach Schnapps, Amaretto, Passion Fruit Juice','#f97316','#fde047'],
  ]},
  'Special': {note:'Special cocktails', items:[
    ['Tropical Island Tea (TIT)',45,'Gin, Vodka, Tequila, Triple Sec, Mango Juice, OJ, Lime Juice','#f59e0b','#fdba74'],
    ['Long Island Ice Tea',45,'Rum, Gin, Vodka, Tequila, Triple Sec, Sweet & Sour, Cola','#7c2d12','#d97706'],
    ['Hi-Life (AMF)',45,'Rum, Gin, Vodka, Tequila, Triple Sec, Sweet & Sour, Blue Curacao, Soda','#1d4ed8','#22d3ee'],
    ['Bishop (Slushie)',55,'Pineapple, Mint Leaves, Lime Juice, Blue Curacao, Triple Sec, Apple Vodka, Rum','#0ea5e9','#a7f3d0'],
    ['Capone (Slushie)',55,'Strawberries, Lime Juice, Triple Sec, Mint, Rum, Vodka, Wine','#be123c','#fb7185'],
  ]},
  'Classic': {note:'Classic cocktails', items:[
    ['Pina Colada',40,'Pina Juice, Coconut Rum, Coconut Cream','#fde68a','#fffbeb'],
    ['Sex on the Beach',40,'Vodka, Orange Juice, Peach Schnapps, Cranberry Juice','#e11d48','#fb923c'],
    ['Blue Lagoon',35,'Vodka, Blue Curacao, Lime Juice, Lime Soda','#0369a1','#38bdf8'],
    ['Tequila Sunrise',35,'Tequila, Orange Juice, Lime Juice, Triple Sec, Grenadine','#c81e1e','#fbbf24'],
    ['Margarita',40,'Tequila, Triple Sec, Lime Juice, Agave Syrup','#bef264','#f7fee7'],
    ['Cosmopolitan',35,'Vodka, Lemon Juice, Triple Sec, Cranberry Juice','#be123c','#f472b6'],
  ]},
  'Mocktails': {note:'Mocktails, non-alcoholic', items:[
    ['Virgin Mojito',25,'Lime Juice, Mint Leaves, Syrups, Soda Lime','#bef264','#f0fdf4'],
    ['Tropical Twist',30,'Guava Juice, Passion Juice, OJ, Pina Juice, Lime Juice, Strawberry Syrup','#fb923c','#f472b6'],
    ['Emerald (Mocktail)',25,'Midori, Blue Curacao, Pina Juice, Mint Syrup, OJ, Mint Leaves','#0d9488','#86efac'],
    ['First Kiss',30,'Mango Juice, Pina Juice, Strawberry Syrup, Mint, Lipton Lime Soda','#f43f5e','#fbbf24'],
    ['Guavana',30,'Guava Juice, Orange Juice, Passion Juice, Strawberry Puree','#fb7185','#fecdd3'],
    ['Berry & Peach',25,'Peach Syrup, Orange Juice, Mango Juice, Cranberry Juice Float','#e11d48','#fb923c'],
    ['Coco Mojito',25,'Lime Juice, Simple Syrup, Mint Leaves, Coconut Cream, Lime Soda','#d9f99d','#ffffff'],
  ]},
  'Mojitos': {note:'Mojitos', items:[
    ['Classic Man',30,'Rum, Lime Juice, Simple Syrup, Mint, Lime Soda','#86efac','#f0fdf4'],
    ['Mojito Gold',35,'Rum, Sweet & Sour, Mint, Lipton Lime Soda','#eab308','#fef08a'],
    ['Irish Tea',35,'Whisky, Sweet & Sour, Mint, Lipton Lime Soda','#92400e','#fbbf24'],
    ['Mojito Melon',30,'Rum, Lime Juice, Simple Syrup, Mint, Lime Soda','#f43f5e','#fecdd3'],
  ]},
};
const PHOTO = {
  'Peach Island':['g_peach'], 'Passion Wave':['g_orange'], 'Emerald':['g_cuc','saturate(2.2) hue-rotate(18deg)'], 'Twilight':['g_straw','hue-rotate(-48deg) saturate(1.2)'],
  'Supernova':['g_red'], 'Hookup':['g_yellow','hue-rotate(-14deg) saturate(1.2)'],
  'Tropical Island Tea (TIT)':['g_peach','hue-rotate(12deg) saturate(1.1)'], 'Long Island Ice Tea':['g_orange','saturate(.85) brightness(.72) hue-rotate(-8deg)'],
  'Hi-Life (AMF)':['g_yellow','hue-rotate(165deg) saturate(1.3)'], 'Bishop (Slushie)':['g_mint','hue-rotate(95deg) saturate(2.4)'], 'Capone (Slushie)':['g_straw'],
  'Pina Colada':['g_white'], 'Sex on the Beach':['g_peach','hue-rotate(-14deg) saturate(1.3)'], 'Blue Lagoon':['g_yellow','hue-rotate(150deg) saturate(1.5) brightness(.95)'],
  'Tequila Sunrise':['g_orange','saturate(1.2)'], 'Margarita':['g_cuc','hue-rotate(-22deg) saturate(1.4)'], 'Cosmopolitan':['g_straw','hue-rotate(-16deg) saturate(1.1)'],
  'Virgin Mojito':['g_mint'], 'Tropical Twist':['g_peach','hue-rotate(-26deg) saturate(1.2)'], 'Emerald (Mocktail)':['g_cuc','saturate(2) hue-rotate(38deg)'],
  'First Kiss':['g_mred','hue-rotate(14deg)'], 'Guavana':['g_straw','hue-rotate(8deg) saturate(.75) brightness(1.12)'], 'Berry & Peach':['g_mred','hue-rotate(6deg) saturate(1.1)'],
  'Coco Mojito':['g_clear'], 'Classic Man':['g_mint'], 'Mojito Gold':['g_yellow'], 'Irish Tea':['g_orange','brightness(.8) saturate(.9)'], 'Mojito Melon':['g_mred','hue-rotate(-8deg) brightness(1.08)'],
};

/* ---------------- HERO PHOTO ---------------- */
document.querySelectorAll('[data-src]').forEach(i=>i.src=IMG[i.dataset.src]);
const heroPhoto=$('#heroPhoto'); heroPhoto.src=IMG.hero;
/* ---------------- VAPOR (canvas) ---------------- */
const cv = $('#vapor'), cx = cv.getContext('2d'); let parts=[], W=0, H=0, rim={x:0,y:0,w:0}, base={y:0,w:0};
function sizeVapor(){
  const r = cv.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,2);
  W=r.width; H=r.height; cv.width=W*dpr; cv.height=H*dpr; cx.setTransform(dpr,0,0,dpr,0,0);
  const nw=heroPhoto.naturalWidth||920, nh=heroPhoto.naturalHeight||1119, sc=Math.max(W/nw,H/nh)*1.06, dw=nw*sc, dh=nh*sc, ox=(W-dw)/2, oy=(H-dh)/2;
  rim = {x:ox+dw*.49, y:oy+dh*.37, w:dw*.33};
  base = {x:ox+dw*.49, y:oy+dh*.9, w:dw*.5};
}
function spawn(kind){
  if (kind==='top') parts.push({x:rim.x+(Math.random()-.5)*rim.w*.85, y:rim.y+4, vx:(Math.random()-.5)*.35, vy:-(.35+Math.random()*.55), r:8+Math.random()*10, gr:.28+Math.random()*.25, life:0, max:150+Math.random()*90, a:.13+Math.random()*.1});
  else { const side=Math.random()<.5?-1:1; parts.push({x:base.x+side*base.w*(.3+Math.random()*.25), y:base.y-6, vx:side*(.25+Math.random()*.45), vy:.05+Math.random()*.12, r:10+Math.random()*10, gr:.3, life:0, max:160+Math.random()*80, a:.08}); }
}
function tickVapor(){
  cx.clearRect(0,0,W,H);
  if (parts.length<90){ spawn('top'); if (Math.random()<.5) spawn('top'); if (Math.random()<.35) spawn('base'); }
  for (let i=parts.length-1;i>=0;i--){
    const p=parts[i]; p.life++; p.x+=p.vx+Math.sin((p.life+p.y)/30)*.25; p.y+=p.vy; p.r+=p.gr; p.vx*=.995;
    const t=p.life/p.max, al = p.a * Math.min(1,W/900) * (t<.2 ? t/.2 : 1-(t-.2)/.8);
    if (p.life>p.max){ parts.splice(i,1); continue; }
    const g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);
    g.addColorStop(0,`rgba(255,255,255,${al})`); g.addColorStop(.6,`rgba(255,240,240,${al*.45})`); g.addColorStop(1,'rgba(255,255,255,0)');
    cx.fillStyle=g; cx.beginPath(); cx.arc(p.x,p.y,p.r,0,7); cx.fill();
  }
}

/* ---------------- Parallax ---------------- */
const stage=$('#stage'); let tx=0, ty=0, mx=0, my=0;
addEventListener('pointermove', e => { mx=e.clientX/innerWidth-.5; my=e.clientY/innerHeight-.5; }, {passive:true});
let heroVisible=true;
new IntersectionObserver(es=>{ heroVisible = es[0].isIntersecting; }).observe($('.hero'));
function loop(){
  if (heroVisible){
    tx += (-mx*18 - tx)*.05; ty += (-my*12 - ty)*.05;
    heroPhoto.style.transform=`translate3d(${tx}px,${ty}px,0) scale(1.06)`;
    tickVapor();
  }
  requestAnimationFrame(loop);
}
addEventListener('resize', sizeVapor);
if (!reduce){ const go=()=>requestAnimationFrame(()=>{ sizeVapor(); loop(); }); heroPhoto.complete?go():heroPhoto.onload=go; }

/* ---------------- Nav ---------------- */
$('#menuToggle').onclick=()=>{ const ul=$('#navList'); const o=ul.classList.toggle('open'); $('#menuToggle').setAttribute('aria-expanded',o); };
document.querySelectorAll('#navList a').forEach(a=>a.addEventListener('click',()=>$('#navList').classList.remove('open')));

/* ---------------- Cravings ---------------- */
let curCat='popular';
function renderCats(){
  $('#cats').innerHTML = CATS.map(c=>`<button class="cat ${c.yellow?'yellow':''} ${c.id===curCat?'on':''}" role="tab" aria-selected="${c.id===curCat}" style="--bgc:${c.color}" data-cat="${c.id}"><div class="ph"><img src="${IMG[c.img]}" alt=""></div><span>${c.label}</span></button>`).join('');
  document.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{ curCat=b.dataset.cat; renderCats(); renderFood(); });
}
function renderFood(){
  const list=FOOD.filter(f=>f.cats.includes(curCat));
  $('#foodGrid').innerHTML = list.map((f,i)=>`<article class="fcard" style="animation-delay:${i*70}ms">
    ${f.img?`<div class="ph"><img src="${IMG[f.img]}" alt="${f.name}" loading="lazy"><span class="tag">${f.tag}</span></div>`:`<div class="ph typo"><span class="tag">${f.tag}</span><b>Wings &amp; thighs</b><span>5 or 10 pieces · garlic honey glaze</span></div>`}
    <h3>${f.name}</h3><p>${f.desc}</p>
    <div class="foot"><span class="price"><small style="margin:0 6px 0 0">${f.opts.length>1?'from':''}</small>${ced(f.opts[0][1])}</span><button class="mini-btn" data-food="${f.id}">Order</button></div></article>`).join('');
  document.querySelectorAll('[data-food]').forEach(b=>b.onclick=()=>openFood(b.dataset.food));
}
renderCats(); renderFood();

/* ---------------- Cold pressed carousel ---------------- */
const pressed=$('#pressed'); let ji=0, jTimer, busy=false;
const FX={orange:['lime','hue-rotate(-48deg) saturate(2.1) brightness(1.04)'], lemon:['lime','hue-rotate(-22deg) saturate(1.5) brightness(1.12)']};
$('#thumbs').innerHTML = JUICES.map((j,i)=>`<button class="thumb" role="tab" aria-label="${j.name.join(' ')}" style="--tc:${j.main}" data-j="${i}"><span class="t"></span><span class="tb"><img src="${IMG[j.bottle]}" alt=""></span></button>`).join('');
document.querySelectorAll('.thumb').forEach(b=>b.onclick=()=>{ setJuice(+b.dataset.j, true); });
function paintJuice(j){
  pressed.style.setProperty('--main',j.main); pressed.style.setProperty('--bg',j.bg); pressed.style.setProperty('--deep',j.deep);
  const t=$('#ptitle'); t.classList.remove('go'); t.innerHTML=`<span><em>${j.name[0]}</em></span>${j.name[1]?`<span><em>${j.name[1]}</em></span>`:''}`; void t.offsetWidth; t.classList.add('go');
  $('#pdesc').textContent=j.note; $('#pings').textContent=j.ing; $('#pprice').textContent=ced(j.price);
  // real fruit orbiting
  const n=j.fruits.length;
  $('#orbit').innerHTML = j.fruits.map((f,k)=>{ const key=f[0], m=FX[key]||[key,'none'];
    return `<span class="fruit enter" style="--a:${k*360/n + 20}deg;--rad:${k%2? '45cqw':'41cqw'};--sp:${12+k*3}s;--fw:${k%2?'15cqw':'19cqw'};--ff:${m[1]};animation-delay:${k*90}ms"><img src="${IMG[m[0]]}" alt=""></span>`; }).join('');
  setTimeout(()=>document.querySelectorAll('.fruit').forEach(e=>e.classList.remove('enter')),1400);
  $('#bottleImg').src=IMG[j.bottle]; $('#bottleImg').alt=j.name.join(' ')+' cold pressed juice';
  document.querySelectorAll('.thumb').forEach((b,k)=>b.setAttribute('aria-selected',k===ji));
  const tb=document.querySelectorAll('.thumb')[ji]; $('#tbar').style.transform=`translateX(${tb.offsetLeft+3}px)`;
  $('#blob').classList.remove('wob'); void $('#blob').offsetWidth; $('#blob').classList.add('wob');
}
function setJuice(i, user){
  if (busy || i===ji && user) return;
  ji=(i+JUICES.length)%JUICES.length; const bowl=$('#bowl');
  if (reduce){ paintJuice(JUICES[ji]); return; }
  busy=true; bowl.classList.remove('in'); bowl.classList.add('out');
  setTimeout(()=>{ paintJuice(JUICES[ji]); bowl.classList.remove('out'); void bowl.offsetWidth; bowl.classList.add('in'); busy=false; },520);
  restartJ();
}
function restartJ(){ clearInterval(jTimer); if(!reduce) jTimer=setInterval(()=>setJuice(ji+1),5600); }
$('#pcard').addEventListener('pointerenter',()=>clearInterval(jTimer)); $('#pcard').addEventListener('pointerleave',restartJ);
paintJuice(JUICES[0]); $('#bowl').classList.add('in'); restartJ();
addEventListener('resize',()=>{ const tb=document.querySelectorAll('.thumb')[ji]; $('#tbar').style.transform=`translateX(${tb.offsetLeft+3}px)`; });
$('#padd').onclick=()=>{ const j=JUICES[ji]; addToCart(j.name.join(' ').trim()+' (Cold pressed)', '', j.price, 1); };

/* ---------------- Bar ---------------- */
let curTab='Signature';
const photoHTML=(n,cls)=>{ const p=PHOTO[n]||['g_clear']; return `<img class="${cls}" src="${IMG[p[0]]}" alt="${n}" loading="lazy" style="filter:${p[1]||'none'}">`; };
function renderTabs(){
  $('#tabs').innerHTML = Object.keys(DRINKS).map(k=>`<button class="tab ${k===curTab?'on':''}" role="tab" aria-selected="${k===curTab}" data-tab="${k}">${k}</button>`).join('');
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{ curTab=b.dataset.tab; renderTabs(); renderDrinks(); });
  $('#tabNote').textContent = DRINKS[curTab].note;
  const strip={Signature:['stripA','stripB'],Special:['stripB','stripA'],Classic:['stripA','stripB'],Mocktails:['stripB','stripA'],Mojitos:['stripB','stripA']}[curTab];
  $('#stripA').src=IMG[strip[0]]; $('#stripB').src=IMG[strip[1]];
}
function renderDrinks(){
  $('#drinkGrid').innerHTML = DRINKS[curTab].items.map((d,i)=>`<button class="dcard" style="animation-delay:${i*60}ms" data-d="${i}" aria-label="${d[0]}, ${ced(d[1])}">
    <div class="dph">${photoHTML(d[0],'')}</div><div><div class="row"><h3>${d[0]}</h3><span class="pt">${ced(d[1])}</span></div><p>${d[2]}</p></div></button>`).join('');
  document.querySelectorAll('.dcard').forEach(b=>b.onclick=()=>{ const d=DRINKS[curTab].items[+b.dataset.d]; openDrink({name:d[0],price:d[1],desc:d[2],a:d[3],b:d[4],group:curTab}); });
}
renderTabs(); renderDrinks();

/* ---------------- Modal ---------------- */
let mItem=null, mOpt=0, mFill=0, mQty=1;
function showModal(){ $('#scrim').classList.add('on'); $('#modal').classList.add('on'); $('#mClose').focus(); }
function hideAll(){ $('#scrim').classList.remove('on'); $('#modal').classList.remove('on'); $('#drawer').classList.remove('on'); }
function updAdd(){ const p = mItem.opts ? mItem.opts[mOpt][1] : mItem.price; $('#mAdd').textContent=`Add to order · ${ced(p*mQty)}`; $('#qVal').textContent=mQty; }
function openFood(id){
  const f=FOOD.find(x=>x.id===id); mItem=f; mOpt=0; mFill=0; mQty=1;
  const v=$('#mVis'); v.className='m-vis'; v.innerHTML = f.img?`<img src="${IMG[f.img]}" alt="${f.name}">`:`<div class="ph typo" style="position:absolute;inset:0"><b style="font-size:44px">Wings &amp; thighs</b><span>Crispy, juicy and glazed in spicy garlic honey</span></div>`;
  $('#mCat').textContent=CATS.find(c=>c.id===f.cats[0]).label; $('#mName').textContent=f.name; $('#mDesc').textContent=f.desc;
  $('#mOptsWrap').style.display=''; $('#mOptL').textContent = /pcs|pieces/i.test(f.opts[0][0])?'Choose an amount':'Choose a size';
  const draw=()=>{ $('#mOpts').innerHTML=f.opts.map((o,i)=>`<button class="opt ${i===mOpt?'on':''}" data-o="${i}"><b>${o[0]}</b><span>${ced(o[1])}</span></button>`).join('');
    document.querySelectorAll('#mOpts .opt').forEach(b=>b.onclick=()=>{mOpt=+b.dataset.o; draw(); updAdd();});
    if (f.fill){ $('#mFillWrap').style.display=''; $('#mFill').innerHTML=f.fill.map((o,i)=>`<button class="opt ${i===mFill?'on':''}" data-f="${i}"><b>${o}</b></button>`).join(''); document.querySelectorAll('#mFill .opt').forEach(b=>b.onclick=()=>{mFill=+b.dataset.f; draw();}); } else $('#mFillWrap').style.display='none'; };
  draw(); updAdd(); showModal();
}
function openDrink(d){
  mItem=d; mQty=1; const v=$('#mVis'); v.className='m-vis dark'; v.style.setProperty('--mglow',d.a); v.innerHTML=photoHTML(d.name,'big');
  $('#mCat').textContent=DRINKS[d.group].note; $('#mName').textContent=d.name; $('#mDesc').textContent=d.desc;
  $('#mOptsWrap').style.display='none'; $('#mFillWrap').style.display='none'; updAdd(); showModal();
}
$('#qMinus').onclick=()=>{ mQty=Math.max(1,mQty-1); updAdd(); }; $('#qPlus').onclick=()=>{ mQty=Math.min(20,mQty+1); updAdd(); };
$('#mAdd').onclick=()=>{
  if (mItem.opts){ let det=mItem.opts[mOpt][0]; if (mItem.fill) det+=', '+mItem.fill[mFill]; addToCart(mItem.name, det, mItem.opts[mOpt][1], mQty); }
  else addToCart(mItem.name,'',mItem.price,mQty);
  hideAll();
};
$('#mClose').onclick=hideAll; $('#scrim').onclick=hideAll; addEventListener('keydown',e=>{ if(e.key==='Escape') hideAll(); });

/* ---------------- Cart ---------------- */
let cart=[], mode='Dine in';
try { const s=JSON.parse(localStorage.getItem('laviva-cart')||'[]'); if (Array.isArray(s)) cart=s; } catch(e){}
function save(){ try{ localStorage.setItem('laviva-cart',JSON.stringify(cart)); }catch(e){} }
function addToCart(name,det,price,qty){
  const key=name+'|'+det; const ex=cart.find(c=>c.key===key);
  if (ex) ex.qty+=qty; else cart.push({key,name,det,price,qty});
  save(); renderCart(); toast(`Added ${qty} × ${name}`);
}
function renderCart(){
  const count=cart.reduce((a,c)=>a+c.qty,0), tot=cart.reduce((a,c)=>a+c.qty*c.price,0);
  document.querySelectorAll('.cart-count').forEach(e=>e.textContent=count);
  $('#fab').classList.toggle('show',count>0);
  $('#dList').innerHTML = cart.length ? cart.map((c,i)=>`<div class="d-item"><div class="n"><b>${c.name}</b><span>${c.det?c.det+' · ':''}${ced(c.price)}</span></div><div class="q"><button data-m="${i}" aria-label="Remove one">−</button><span>${c.qty}</span><button data-p="${i}" aria-label="Add one">+</button></div></div>`).join('')
    : `<div class="d-empty">Your order is empty.<br>Tap any dish or drink to add it here.</div>`;
  document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{ const c=cart[+b.dataset.m]; c.qty--; if(c.qty<1) cart.splice(+b.dataset.m,1); save(); renderCart(); });
  document.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{ cart[+b.dataset.p].qty++; save(); renderCart(); });
  $('#dTot').textContent=ced(tot);
  const wa=$('#waBtn');
  if (cart.length){
    const lines=cart.map(c=>`${c.qty} × ${c.name}${c.det?' ('+c.det+')':''} - ${ced(c.qty*c.price)}`);
    const note=$('#dNote').value.trim();
    const msg=`Hello La Viva Lounge, I'd like to order (${mode}):\n${lines.join('\n')}\nTotal: ${ced(tot)}${note?'\n'+note:''}`;
    wa.href='https://wa.me/233544369707?text='+encodeURIComponent(msg); wa.setAttribute('aria-disabled','false');
  } else { wa.removeAttribute('href'); wa.setAttribute('aria-disabled','true'); }
}
$('#dNote').addEventListener('input',renderCart);
document.querySelectorAll('.d-mode button').forEach(b=>b.onclick=()=>{ mode=b.dataset.mode; document.querySelectorAll('.d-mode button').forEach(x=>x.classList.toggle('on',x===b)); renderCart(); });
document.querySelectorAll('[data-open-cart]').forEach(b=>b.onclick=()=>{ $('#scrim').classList.add('on'); $('#drawer').classList.add('on'); });
$('#dClose').onclick=hideAll;
let tt; function toast(m){ const t=$('#toast'); t.textContent=m; t.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('on'),1800); }
renderCart();

/* nav highlight on scroll */
const secs=['home','story','cravings','pressed','bar','contact'].map(id=>document.getElementById(id));
const navIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ document.querySelectorAll('.nav a.lk').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)); } }),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>navIO.observe(s));