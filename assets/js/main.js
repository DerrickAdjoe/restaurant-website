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
  "g_orange": "assets/images/g_orange.jpg",
  "g_white": "assets/images/g_white.jpg",
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
  "b_ginger": "assets/images/b_ginger.webp",
  "b_twist": "assets/images/b_twist.webp",
  "b_gold": "assets/images/b_gold.webp",
  "lime": "assets/images/lime.webp",
  "mint2": "assets/images/mint2.webp",
  "d_peach_island": "assets/images/d_peach_island.jpg",
  "d_berry_peach": "assets/images/d_berry_peach.jpg",
  "d_sotb": "assets/images/d_sotb.jpg",
  "d_blue_lagoon": "assets/images/d_blue_lagoon.jpg",
  "d_tequila": "assets/images/d_tequila.jpg",
  "d_margarita": "assets/images/d_margarita.jpg",
  "d_cosmo": "assets/images/d_cosmo.jpg",
  "d_passion": "assets/images/d_passion.jpg",
  "d_emerald": "assets/images/d_emerald.jpg",
  "d_twilight": "assets/images/d_twilight.jpg",
  "d_supernova": "assets/images/d_supernova.jpg",
  "d_hookup": "assets/images/d_hookup.jpg",
  "d_mojito": "assets/images/d_mojito.jpg",
  "d_tit": "assets/images/d_tit.jpg",
  "d_emerald_m": "assets/images/d_emerald_m.jpg",
  "f_wings": "assets/images/f_wings.jpg",
  "s_wings": "assets/images/s_wings.jpg",
  "s_wrap": "assets/images/s_wrap.jpg",
  "s_juices": "assets/images/s_juices.jpg",
  "d_bishop": "assets/images/d_bishop.jpg",
  "d_capone": "assets/images/d_capone.jpg",
  "d_guavana": "assets/images/d_guavana.jpg",
  "sm_strawberry": "assets/images/sm_strawberry.jpg",
  "sm_blueberry": "assets/images/sm_blueberry.jpg",
  "sm_milkyway": "assets/images/sm_milkyway.jpg",
  "sm_mango": "assets/images/sm_mango.jpg",
  "sm_banana_oat": "assets/images/sm_banana_oat.jpg",
  "sm_oreo": "assets/images/sm_oreo.jpg",
  "badge_dark": "assets/images/badge_dark.webp",
  "d_paloma": "assets/images/d_paloma.jpg",
  "i_orange": "assets/images/i_orange.svg",
  "i_lemon": "assets/images/i_lemon.svg",
  "i_cucumber": "assets/images/i_cucumber.svg",
  "i_passion": "assets/images/i_passion.svg",
  "i_apple": "assets/images/i_apple.svg",
  "i_mango": "assets/images/i_mango.svg",
  "i_carrot": "assets/images/i_carrot.svg",
  "i_ginger": "assets/images/i_ginger.svg",
  "i_mint": "assets/images/i_mint.svg",
  "i_pineapple": "assets/images/i_pineapple.svg"
};
const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ced = n => 'GH₵ ' + n;
$('#logoTop').src=IMG.logo; $('#logoFoot').src=IMG.logo; $('#logoPress').src=IMG.badge_dark;
$('#stripA').src = IMG.stripA; $('#stripB').src = IMG.stripB;

/* ---------------- DATA (from the La Viva menu) ---------------- */
const FOOD = [
  {id:'jollof', name:'Gizzy Jollof', img:'f_jollof', story:"Welcome to your ultimate jollof rice destination. We don't just make jollof rice, we master it. Every single batch is cooked to order in a blazing hot wok, delivering that authentic, aromatic satisfaction for your taste buds with a lingering memory.", tag:'Popular', cats:['popular','plates'], desc:'Jollof with gizzard chunks, plantain, protein, veggies, gizzard khebab', opts:[['M pack',50],['L pack',80]]},
  {id:'bigdaddy', name:'Big Daddy Shawarma', img:'f_bigdaddy', story:"Craving the perfect roll? Savor the bold flavor of slow-roasted, perfectly spiced shawarma wrapped in warm, fluffy pita. Juicy and tender chicken and beef bursting with flavor, tightly wrapped, creamy and spicy, made just for you.", tag:'Best seller', cats:['popular','shawarma'], desc:'Chicken, beef, veggies, cream / sauce, tortilla', opts:[['Medium',60],['Loaded',80]]},
  {id:'fries', name:'Loaded Fries', img:'f_fries_wide', tag:'Popular', cats:['popular','plates'], desc:'Crispy fries, melted cheese and sauce, protein, fresh veggies', opts:[['M pack',50],['L pack',80]]},
  {id:'chshaw', name:'Chicken Shawarma', img:'f_chshaw', story:"Craving the perfect roll? Savor the bold flavor of slow-roasted, perfectly spiced shawarma wrapped in warm, fluffy pita. Juicy and tender chicken and beef bursting with flavor, tightly wrapped, creamy and spicy, made just for you.", tag:'Wrap', cats:['shawarma'], desc:'Chicken, veggies, cream / sauce, tortilla', opts:[['Medium',50],['Loaded',65]]},
  {id:'samosa', name:'Samosa', img:'f_samosa', tag:'Bites', cats:['shawarma','popular'], desc:'Samosa with black pepper sauce dip', opts:[['5 pieces',30],['8 pieces',45]]},
  {id:'crepes', name:'Crepes (Pancakes)', img:'f_crepes', tag:'Sweet', cats:['shawarma'], desc:'Pancakes, cream, filling, raisins, M&M / party sprinkles', opts:[['4 pieces',25],['5 pieces',30]], fill:['Strawberry sauce + cream','Blueberry sauce + cream']},
  {id:'salad', name:'Chicken Salad', img:'f_salad', tag:'Fresh', cats:['plates'], desc:'Fried chicken, veggies, mayonnaise, cream and mixed sauce', opts:[['M pack',40],['L pack',60]]},
  {id:'wings', name:'Spicy Garlic Honey Wings / Thighs', img:'f_wings', story:"Meet your new obsession: Spicy Honey Garlic Wings. We take our extra-crispy, jumbo chicken wings and toss them in a sticky, addictive glaze made from pure local honey, roasted garlic, and a kick of fiery chili. It’s the perfect balance of sweet, savory, and heat that hits just right.", tag:'Hot', cats:['plates','popular'], desc:'Crispy and juicy chicken wings or thighs, garlic honey sauce, spices', opts:[['Wings · 5 pcs',50],['Wings · 10 pcs',105],['Thighs · 6 pcs',45],['Thighs · 10 pcs',100]]},
];
const CATS = [
  {id:'popular', label:'Popular', img:'f_chshaw', color:'#C8102E'},
  {id:'shawarma', label:'Shawarma & bites', img:'f_mixed', color:'#FDBE00', yellow:true},
  {id:'plates', label:'Daily plates', img:'f_jollof', color:'#A50E0E'},
];
const JUICES = [
  {name:['Range','Lover'], ing:'Orange, Carrot, Apple, Pineapple', bottle:'b_range', price:25, main:'#F26A10', bg:'#FFE1C9', deep:'#9C3500', fruits:[['i_orange'],['i_carrot'],['i_apple'],['i_pineapple']]},
  {name:['Mango','Smash'], ing:'Mango, Pineapple, Ginger', bottle:'b_mango', price:25, main:'#FFAA00', bg:'#FFEFC6', deep:'#9A5A00', fruits:[['i_mango'],['i_pineapple'],['i_ginger'],['i_mango'],['i_pineapple'],['i_ginger']]},
  {name:['Ginger','Pine'], ing:'Pineapple, Ginger', bottle:'b_ginger', price:20, main:'#C2B200', bg:'#F7F2C4', deep:'#6B6100', fruits:[['i_pineapple'],['i_ginger'],['i_pineapple'],['i_ginger']]},
  {name:['Twist',''], ing:'Pineapple, Cucumber, Mint Leaves', bottle:'b_twist', price:20, main:'#2EA85A', bg:'#D5F3DE', deep:'#145F31', fruits:[['i_pineapple'],['i_cucumber'],['i_mint'],['i_pineapple'],['i_cucumber'],['i_mint']]},
  {name:['Liquid','Gold'], ing:'Orange, Pineapple, Mango, Passion Fruit, Lemon, Ginger', bottle:'b_gold', price:27, main:'#E09A00', bg:'#FFF1C2', deep:'#7A4E00', fruits:[['i_orange'],['i_pineapple'],['i_mango'],['i_passion'],['i_lemon'],['i_ginger']]},
];
const DRINKS = {
  'Signature': {note:'Signature cocktails', items:[
    ['Peach Island',45,'OJ, Peach Schnapps, Peach Syrup, Mango Juice, Cranberry Juice, Vodka, Wine Float','#ff9a5a','#ffd27a'],
    ['Passion Wave',40,'Vodka, Peach Schnapps, Coconut Rum, OJ, Passion Puree, Pina Juice','#ff8a00','#ffd166'],
    ['Emerald',40,'Pina Juice, Rum, Triple Sec, Midori, Blue Curacao, OJ, Mint Leaves','#079e6e','#9be15d'],
    ['Twilight',40,'Strawberry Puree, Malibu, Pina Juice, Peach Schnapps, Cranberry, Dark Rum','#7c3aed','#ec4899'],
    ['Supernova',45,'Strawberry Puree, Brandy, OJ, Triple Sec, Honey Syrup, Red Wine','#b0102f','#f59e0b'],
    ['Hookup',45,'Rum, Coconut Rum, Peach Schnapps, Amaretto, Passion Fruit Juice','#f97316','#fde047'],
  ]},
  'Special': {note:'Special cocktails', items:[
    ['Tropical Island Tea (TIT)',45,'Gin, Vodka, Tequila, Triple Sec, Mango Juice, OJ, Lime Juice','#f59e0b','#fdba74'],
    ['Long Island Ice Tea',45,'Rum, Gin, Vodka, Tequila, Triple Sec, Sweet & Sour, Cola','#7c2d12','#d97706'],
    ['Hi-Life (AMF)',45,'Rum, Gin, Vodka, Tequila, Triple Sec, Sweet & Sour, Blue Curacao, Soda','#1d4ed8','#22d3ee'],
    ['Bishop (Slushie)',55,'Pineapple, Mint Leaves, Lime Juice, Blue Curacao, Triple Sec, Apple Vodka, Rum','#0ea5e9','#a7f3d0'],
    ['Capone (Slushie)',60,'Strawberries, Lime Juice, Triple Sec, Mint, Rum, Vodka, Wine','#be123c','#fb7185'],
  ]},
  'Classic': {note:'Classic cocktails', items:[
    ['Pina Colada',40,'Pina Juice, Coconut Rum, Coconut Cream','#fde68a','#fffbeb'],
    ['Sex on the Beach',40,'Vodka, Orange Juice, Peach Schnapps, Cranberry Juice','#e11d48','#fb923c'],
    ['Blue Lagoon',35,'Vodka, Blue Curacao, Lime Juice, Lime Soda','#0369a1','#38bdf8'],
    ['Tequila Sunrise',35,'Tequila, Orange Juice, Lime Juice, Triple Sec, Grenadine','#c81e1e','#fbbf24'],
    ['Margarita',40,'Tequila, Triple Sec, Lime Juice, Agave Syrup','#bef264','#f7fee7'],
    ['Cosmopolitan',35,'Vodka, Lemon Juice, Triple Sec, Cranberry Juice','#be123c','#f472b6'],
    ['Paloma',40,'Tequila, Grapefruit Juice, Triple Sec, Lime Juice','#fb7185','#fecdd3'],
    ['Classic Daiquiri',35,'Lime Juice, Simple Syrup, Rum, Triple Sec','#d9f99d','#f7fee7'],
  ]},
  'Mocktails': {note:'Mocktails, non-alcoholic', items:[
    ['Virgin Mojito',30,'Lime Juice, Mint Leaves, Syrups, Soda Lime','#bef264','#f0fdf4'],
    ['Tropical Twist',35,'Guava Juice, Passion Juice, OJ, Pina Juice, Lime Juice, Strawberry Syrup','#fb923c','#f472b6'],
    ['Emerald (Mocktail)',30,'Midori, Blue Curacao, Pina Juice, Mint Syrup, OJ, Mint Leaves','#0d9488','#86efac'],
    ['First Kiss',35,'Mango Juice, Pina Juice, Strawberry Syrup, Mint, Lipton Lime Soda','#f43f5e','#fbbf24'],
    ['Guavana',35,'Guava Juice, Orange Juice, Passion Juice, Strawberry Puree','#fb7185','#fecdd3'],
    ['Berry & Peach',35,'Peach Syrup, Orange Juice, Mango Juice, Cranberry Juice Float','#e11d48','#fb923c'],
    ['Coco Mojito',25,'Lime Juice, Simple Syrup, Mint Leaves, Coconut Cream, Lime Soda','#d9f99d','#ffffff'],
    ['10 Ova 10',30,'Lime Juice, Cinnamon Syrup, Pineapple Juice, Lime Soda','#fde68a','#fffbeb'],
    ['Sensational',35,'Lime Juice, Strawberry Syrup, Lipton Lime Soda','#f43f5e','#fecdd3'],
  ]},
  'Mojitos': {note:'Mojitos', items:[
    ['Classic Man',30,'Rum, Lime Juice, Simple Syrup, Mint, Lime Soda','#86efac','#f0fdf4'],
    ['Mojito Gold',35,'Rum, Sweet & Sour, Mint, Lipton Lime Soda','#eab308','#fef08a'],
    ['Irish Tea',35,'Whisky, Sweet & Sour, Mint, Lipton Lime Soda','#92400e','#fbbf24'],
    ['Mojito Melon',30,'Rum, Lime Juice, Simple Syrup, Mint, Lime Soda','#f43f5e','#fecdd3'],
    ['Berry Mojito',30,'Rum, Lime Juice, Simple Syrup, Mint Leaves, Lime Soda, Strawberry','#e11d48','#fecdd3'],
    ['Passion Mojito',35,'Rum, Lime Juice, Simple Syrup, Mint Leaves, Lime Soda, Passion Puree','#f59e0b','#fde68a'],
  ]},
  'Smoothies': {note:'Premium smoothies', items:[
    ['Strawberry Yogurt',30,'Frozen Strawberries, Yogurt, Cream, Milk','#f472b6','#fce7f3'],
    ['Blueberry Yogurt',35,'Frozen Blueberries, Yogurt, Cream, Milk','#7c3aed','#ede9fe'],
    ['Milkyway',35,'Banana, Pineapple, Mango, Peanut Butter, Milk','#fbbf24','#fef3c7'],
    ['Mango Magic',30,'Banana, Mango, Passion Pulp, Yogurt, Milk','#f59e0b','#fde68a'],
    ['Banana Oatmeal',35,'Banana, Strawberry, Oat, Peanut Butter, Milk','#d6b38a','#f5ebe0'],
    ['Oreo Krusher',35,'Oreo Biscuit, Cream, Milk, Vanilla Syrup, Vanilla Ice Cream','#57534e','#e7e5e4'],
  ]},
};
const PHOTO = {
  'Peach Island':['d_peach_island'], 'Passion Wave':['d_passion'], 'Emerald':['d_emerald'], 'Twilight':['d_twilight'],
  'Supernova':['d_supernova'], 'Hookup':['d_hookup'],
  'Tropical Island Tea (TIT)':['d_tit'], 'Long Island Ice Tea':['g_orange','saturate(.85) brightness(.72) hue-rotate(-8deg)'],
  'Hi-Life (AMF)':['g_yellow','hue-rotate(165deg) saturate(1.3)'], 'Bishop (Slushie)':['d_bishop'], 'Capone (Slushie)':['d_capone'],
  'Pina Colada':['g_white'], 'Sex on the Beach':['d_sotb'], 'Blue Lagoon':['d_blue_lagoon'],
  'Tequila Sunrise':['d_tequila'], 'Margarita':['d_margarita'], 'Cosmopolitan':['d_cosmo'],
  'Virgin Mojito':['d_mojito'], 'Tropical Twist':['g_peach','hue-rotate(-26deg) saturate(1.2)'], 'Emerald (Mocktail)':['d_emerald_m'],
  'First Kiss':['g_mred','hue-rotate(14deg)'], 'Guavana':['d_guavana'], 'Berry & Peach':['d_berry_peach'],
  'Coco Mojito':['g_clear'], 'Classic Man':['d_mojito'], 'Mojito Gold':['g_yellow'], 'Irish Tea':['g_orange','brightness(.8) saturate(.9)'], 'Mojito Melon':['g_mred','hue-rotate(-8deg) brightness(1.08)'],
  'Paloma':['d_paloma'], 'Classic Daiquiri':['d_margarita'], '10 Ova 10':['g_yellow','saturate(.8)'], 'Sensational':['g_mred'],
  'Berry Mojito':['g_mred','hue-rotate(-8deg)'], 'Passion Mojito':['g_yellow'],
  'Strawberry Yogurt':['sm_strawberry'], 'Blueberry Yogurt':['sm_blueberry'], 'Milkyway':['sm_milkyway'],
  'Mango Magic':['sm_mango'], 'Banana Oatmeal':['sm_banana_oat'], 'Oreo Krusher':['sm_oreo'],
};

/* ---------------- HERO PHOTO ---------------- */
document.querySelectorAll('[data-src]').forEach(i=>i.src=IMG[i.dataset.src]);
const SLIDES=[
  {img:'d_peach_island', field:'Signature cocktails', type:'drink', group:'Signature', name:'Peach Island', rim:[.5,.46,.6], pos:'50% 50%'},
  {img:'s_wrap', field:'Daily servings', type:'food', id:'chshaw', pos:'50% 50%'},
  {img:'d_blue_lagoon', field:'Classic cocktails', type:'drink', group:'Classic', name:'Blue Lagoon', rim:[.51,.31,.28], pos:'50% 45%'},
  {img:'s_juices', field:'Cold pressed juices', type:'juice', ji:1, pos:'50% 50%'},
  {img:'s_wings', field:'Daily servings', type:'food', id:'wings', pos:'50% 45%'},
  {img:'d_emerald_m', field:'Mocktails', type:'drink', group:'Mocktails', name:'Emerald (Mocktail)', label:'Emerald', rim:[.5,.43,.37], pos:'50% 50%'},
  {img:'d_tit', field:'Special cocktails', type:'drink', group:'Special', name:'Tropical Island Tea (TIT)', pos:'50% 50%'},
  {img:'hero', field:'Mojitos', type:'drink', group:'Mojitos', name:'Classic Man', rim:[.49,.37,.33], pos:'50% 50%'},
];
const slidesEl=$('#slides');
slidesEl.innerHTML=SLIDES.map((s,i)=>`<img src="${IMG[s.img]}" alt="" style="object-position:${s.pos}" ${i?'loading="lazy"':''}>`).join('');
const slideImgs=[...slidesEl.children];
$('#capDots').innerHTML=SLIDES.map((s,i)=>`<button aria-label="Show ${s.field}" data-s="${i}"></button>`).join('');
let si=-1, slideTimer;
function slideInfo(s){
  if (s.type==='drink'){ const d=DRINKS[s.group].items.find(x=>x[0]===s.name); return {name:s.label||d[0], price:ced(d[1])}; }
  if (s.type==='food'){ const f=FOOD.find(x=>x.id===s.id); return {name:f.name, price:(f.opts.length>1?'from ':'')+ced(f.opts[0][1])}; }
  const j=JUICES[s.ji]; return {name:j.name.join(' ').trim(), price:ced(j.price)};
}
function showSlide(i){
  const n=(i+SLIDES.length)%SLIDES.length; if (n===si) return;
  const old=slideImgs[si]; if (old){ old.classList.remove('on'); old.classList.add('prev'); setTimeout(()=>old.classList.remove('prev'),1400); }
  si=n; slideImgs[si].classList.add('on');
  const s=SLIDES[si], info=slideInfo(s), cap=$('#heroCap');
  $('#capField').textContent=s.field; $('#capName').textContent=info.name; $('#capPrice').textContent=info.price;
  cap.classList.remove('swap'); void cap.offsetWidth; cap.classList.add('swap');
  document.querySelectorAll('#capDots button').forEach((b,k)=>b.classList.toggle('on',k===si));
  parts=[]; setTimeout(sizeVapor,50);
  clearTimeout(slideTimer); if(!reduce) slideTimer=setTimeout(()=>showSlide(si+1),6500);
}
document.querySelectorAll('#capDots button').forEach(b=>b.onclick=()=>showSlide(+b.dataset.s));
$('#capOrder').onclick=()=>{ const s=SLIDES[si];
  if (s.type==='drink'){ const d=DRINKS[s.group].items.find(x=>x[0]===s.name); openDrink({name:d[0],price:d[1],desc:d[2],a:d[3],b:d[4],group:s.group}); }
  else if (s.type==='food') openFood(s.id);
  else { $('#pressed').scrollIntoView({behavior:'smooth'}); setJuice(s.ji,true); } };
/* ---------------- VAPOR (canvas) ---------------- */
const cv = $('#vapor'), cx = cv.getContext('2d'); let parts=[], W=0, H=0, rim={x:0,y:0,w:0}, base={y:0,w:0};
function sizeVapor(){
  const r = cv.getBoundingClientRect(), dpr=Math.min(devicePixelRatio||1,2);
  W=r.width; H=r.height; cv.width=W*dpr; cv.height=H*dpr; cx.setTransform(dpr,0,0,dpr,0,0);
  const s=SLIDES[si], im=slideImgs[si];
  if (!s || !s.rim || !im.naturalWidth){ rim=null; return; }
  const nw=im.naturalWidth, nh=im.naturalHeight, sc=Math.max(W/nw,H/nh)*1.06, dw=nw*sc, dh=nh*sc;
  const [px,py]=s.pos.split(' ').map(v=>parseFloat(v)/100), ox=(W-dw)*px, oy=(H-dh)*py;
  rim = {x:ox+dw*s.rim[0], y:oy+dh*s.rim[1], w:dw*s.rim[2]};
}
function spawn(kind){
  if (kind==='top') parts.push({x:rim.x+(Math.random()-.5)*rim.w*.85, y:rim.y+4, vx:(Math.random()-.5)*.35, vy:-(.35+Math.random()*.55), r:8+Math.random()*10, gr:.28+Math.random()*.25, life:0, max:150+Math.random()*90, a:.13+Math.random()*.1});
  else { const side=Math.random()<.5?-1:1; parts.push({x:base.x+side*base.w*(.3+Math.random()*.25), y:base.y-6, vx:side*(.25+Math.random()*.45), vy:.05+Math.random()*.12, r:10+Math.random()*10, gr:.3, life:0, max:160+Math.random()*80, a:.08}); }
}
function tickVapor(){
  cx.clearRect(0,0,W,H);
  if (parts.length<90 && rim){ spawn('top'); if (Math.random()<.5) spawn('top'); }
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
    slidesEl.style.transform=`translate3d(${tx}px,${ty}px,0) scale(1.06)`;
    tickVapor();
  }
  requestAnimationFrame(loop);
}
addEventListener('resize', sizeVapor);
slideImgs.forEach(im=>im.addEventListener('load',sizeVapor));
if (!reduce) requestAnimationFrame(loop);

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
  $('#pdesc').textContent=j.ing; $('#pings').textContent=''; $('#pprice').textContent=ced(j.price);
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
  const strip={Signature:['stripA','stripB'],Special:['stripB','stripA'],Classic:['stripA','stripB'],Mocktails:['stripB','stripA'],Mojitos:['stripB','stripA'],Smoothies:['stripA','stripB']}[curTab];
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
  $('#mCat').textContent=CATS.find(c=>c.id===f.cats[0]).label; $('#mName').textContent=f.name; $('#mDesc').innerHTML=f.story?`${f.story}<span class="m-ing">What's inside: ${f.desc}</span>`:f.desc;
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

/* ---------------- Mobile Money payment (Paystack) ----------------
   key:   Paystack PUBLIC key (starts pk_test_ for testing, pk_live_ when live).
          Leave it empty ('') and payment is switched off: orders go to WhatsApp as before.
   modes: order types that must pay before the order is sent. */
const PAY = { key: '', modes: ['Takeout','Online'] };
let paid = null;
function payNeeded(){ return !!PAY.key && PAY.modes.includes(mode); }
if (PAY.key){ const ps=document.createElement('script'); ps.src='https://js.paystack.co/v1/inline.js'; document.head.appendChild(ps); }

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
  const REF={'Dine in':'Table number','Takeout':'Ticket number','Online':'Phone number'};
  const name=$('#dName').value.trim(), ref=$('#dRef').value.trim(), loc=$('#dLoc').value.trim();
  const needLoc = mode==='Online' && fulfil==='Delivery';
  const ready=cart.length && name && ref && (!needLoc || loc);
  let hint='';
  if (cart.length && !ready){
    const miss=[]; if(!name) miss.push('your name'); if(!ref) miss.push(REF[mode].toLowerCase()); if(needLoc && !loc) miss.push('delivery location');
    hint='Add '+miss.join(', ').replace(/, ([^,]*)$/,' and $1')+' to send your order';
  }
  $('#dHint').textContent=hint;
  const payBtn=$('#payBtn'), rc=$('#dReceipt'), locked=!!paid;
  $('#dWho').hidden=locked; $('#dHint').hidden=locked; rc.hidden=!locked;
  document.querySelectorAll('.d-mode button, [data-m], [data-p]').forEach(b=>b.disabled=locked);
  if (locked){
    rc.innerHTML=`<div class="ok" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M5 12l5 5 9-10"/></svg></div><b class="t">Payment successful</b><div class="r"><span>Receipt</span><b>${paid.ref}</b></div><div class="r"><span>Amount</span><b>${ced(paid.total)}</b></div><div class="r"><span>Paid with</span><b>Mobile Money</b></div><div class="r"><span>Date</span><b>${paid.when}</b></div><div class="r"><span>Order</span><b>${paid.mode} · ${paid.refVal}</b></div><button class="d-new" type="button" id="dNew">Start a new order</button>`;
    $('#dNew').onclick=()=>{ paid=null; cart=[]; save(); renderCart(); };
    payBtn.hidden=true; $('#dSecure').hidden=true; wa.hidden=false;
    wa.href='https://wa.me/233544369707?text='+encodeURIComponent(paid.msg); wa.setAttribute('aria-disabled','false');
    return;
  }
  const mustPay=payNeeded();
  payBtn.hidden=!mustPay; $('#dSecure').hidden=!mustPay; wa.hidden=mustPay;
  if (ready){
    const lines=cart.map(c=>`${c.qty} × ${c.name}${c.det?' ('+c.det+')':''} - ${ced(c.qty*c.price)}`);
    const tag = mode==='Online' ? `*ONLINE - ${fulfil.toUpperCase()}*` : '*'+mode.toUpperCase()+'*';
    const where = needLoc ? `\nLocation: ${loc}` : '';
    const msg=`Hello La Viva Lounge, I'd like to order:     ${tag}\n\nName: ${name}\n${REF[mode]}: ${ref}${where}\n\n${lines.join('\n')}\n\nTotal: ${ced(tot)}`;
    if (mustPay){
      payBtn.disabled=false; payBtn.textContent=`Pay ${ced(tot)} with Mobile Money`;
      payBtn.onclick=()=>startPay({msg,total:tot,mode:mode==='Online'?'Online '+fulfil:mode,refVal:ref,name,lines});
    } else {
      wa.href='https://wa.me/233544369707?text='+encodeURIComponent(msg); wa.setAttribute('aria-disabled','false');
    }
  } else {
    payBtn.disabled=true; payBtn.textContent=`Pay ${ced(tot)} with Mobile Money`;
    wa.removeAttribute('href'); wa.setAttribute('aria-disabled','true');
  }
}
function startPay(o){
  if (!window.PaystackPop){ toast('Payment is still loading. Try again in a moment.'); return; }
  const ref='LV-'+Date.now().toString(36).slice(-5).toUpperCase()+Math.random().toString(36).slice(2,4).toUpperCase();
  const handler=PaystackPop.setup({
    key: PAY.key, email: 'orders+'+ref.toLowerCase()+'@lavivalounge.com',
    amount: Math.round(o.total*100), currency: 'GHS', ref: ref, channels: ['mobile_money'],
    metadata: { custom_fields: [
      { display_name:'Name', variable_name:'name', value:o.name },
      { display_name:'Order type', variable_name:'order_type', value:o.mode+' · '+o.refVal },
      { display_name:'Items', variable_name:'items', value:o.lines.join('; ') } ] },
    callback: function(r){
      const when=new Date().toLocaleString('en-GB',{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'});
      const rf=(r && r.reference) || ref;
      paid={ ref:rf, total:o.total, mode:o.mode, refVal:o.refVal, when,
             msg: o.msg+`\n\n*PAID* · Receipt ${rf}\nPaid with Mobile Money · ${when}` };
      renderCart(); toast('Payment successful. Now send your order.');
    },
    onClose: function(){ if(!paid) toast('Payment not completed. Your order was not sent.'); }
  });
  handler.openIframe();
}
$('#waBtn').addEventListener('click',()=>{ if(paid){ setTimeout(()=>{ cart=[]; save(); },500); } });
let fulfil='Delivery';
function setRefField(){
  const REF={'Dine in':'Table number','Takeout':'Ticket number','Online':'Phone number'};
  const r=$('#dRef'); r.placeholder=REF[mode]; r.setAttribute('aria-label',REF[mode]);
  r.type = mode==='Online' ? 'tel' : 'text';
  $('#dGen').hidden = mode!=='Takeout';
  $('#dOnline').hidden = mode!=='Online';
  $('#dLoc').hidden = !(mode==='Online' && fulfil==='Delivery');
}
$('#dName').addEventListener('input',renderCart);
$('#dRef').addEventListener('input',renderCart);
$('#dLoc').addEventListener('input',renderCart);
document.querySelectorAll('.d-mode button').forEach(b=>b.onclick=()=>{ mode=b.dataset.mode; document.querySelectorAll('.d-mode button').forEach(x=>x.classList.toggle('on',x===b)); setRefField(); renderCart(); });
document.querySelectorAll('.d-sub button').forEach(b=>b.onclick=()=>{ fulfil=b.dataset.fulfil; document.querySelectorAll('.d-sub button').forEach(x=>x.classList.toggle('on',x===b)); setRefField(); renderCart(); });
/* Takeout ticket number: generated on tap, e.g. T-1847-3 (time + a random digit) */
$('#dGen').onclick=()=>{
  const d=new Date(), p=n=>String(n).padStart(2,'0');
  $('#dRef').value=`T-${p(d.getHours())}${p(d.getMinutes())}-${Math.floor(Math.random()*10)}`;
  renderCart(); toast('Ticket number '+$('#dRef').value);
};
setRefField();
document.querySelectorAll('[data-open-cart]').forEach(b=>b.onclick=()=>{ $('#scrim').classList.add('on'); $('#drawer').classList.add('on'); });
$('#dClose').onclick=hideAll;
let tt; function toast(m){ const t=$('#toast'); t.textContent=m; t.classList.add('on'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('on'),1800); }
renderCart();

/* nav highlight on scroll */
const secs=['home','story','cravings','pressed','bar','contact'].map(id=>document.getElementById(id));
const navIO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ document.querySelectorAll('.nav a.lk').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)); } }),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>navIO.observe(s));
showSlide(0);
