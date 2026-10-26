
(function(){ if(window.emailjs){ emailjs.init({ publicKey:"G9cGERtMTrbMUKCWI" }); } })();

function sendEmail() {
  const btn=document.getElementById('sendBtn'), btnText=document.getElementById('btnText'), msg=document.getElementById('formMsg');
  const name=document.getElementById('from_name').value.trim(), email=document.getElementById('reply_to').value.trim();
  const phone=document.getElementById('phone').value.trim(), service=document.getElementById('service').value;
  const message=document.getElementById('message').value.trim();
  if(!name||!email||!message){ msg.className='form-msg error'; msg.textContent=' Veuillez remplir les champs obligatoires.'; return; }
  btn.disabled=true; btnText.textContent=' Envoi en cours...'; msg.className='form-msg'; msg.textContent='';
  emailjs.send('service_n5d4a7r','template_xml4vth',{name:name,from_name:name,email:email,from_email:email,from_phone:phone||'Non fourni',service_type:service||'Non précisé',message:message,title:'Nouvelle demande de contact'})
    .then(()=>{ msg.className='form-msg success'; msg.textContent=' Message envoyé avec succès !';
      ['from_name','reply_to','phone','message'].forEach(id=>document.getElementById(id).value='');
      document.getElementById('service').value=''; btnText.textContent=' Envoyer le message'; btn.disabled=false; })
    .catch(err=>{ msg.className='form-msg error'; msg.textContent=' Erreur. Contactez-nous par téléphone.';
      btnText.textContent=' Envoyer le message'; btn.disabled=false; });
}

// ===== CHATBOT =====
const chatbotFAQ = [
  { keys: ['service','services','offre','offres','proposez','mainten','industri','répar','capteur','automat','plc','variateur'], reply: ' <strong>Nos services incluent :</strong><br>• Maintenance industrielle préventive & corrective<br>• Installation de capteurs & automatismes<br>• Programmation PLC / API<br>• Variateurs de vitesse (VFD)<br>• Ingénierie électromécanique<br>• Études & projets sur mesure<br><br>Besoin d\'un service spécifique ? Contactez-nous !' },
  { keys: ['contact','joindre','appel','téléphone','phone','numéro','numero','whatsapp'], reply: ' <strong>Contactez-nous :</strong><br>• WhatsApp / Tél : <a href="https://wa.me/213658724256" target="_blank" style="color:var(--accent)">+213 658 724 256</a> / <a href="tel:+213558304413" style="color:var(--accent)">+213 558 304 413</a><br>• Via le formulaire de contact sur notre site<br>• Ou par email via le formulaire en ligne<br><br>Nous répondons rapidement !' },
  { keys: ['situé','adresse','location','où','oran','algérie','algerie','localisation'], reply: ' <strong>Notre localisation :</strong><br>NV TECH SOLUTIONS est basée à <strong>Oran, Algérie</strong>.<br><br>Nous intervenons sur toute la région Ouest et proposons des déplacements sur l\'ensemble du territoire algérien selon les besoins.' },
  { keys: ['devis','prix','tarif','coût','cout','estimation','budget'], reply: ' <strong>Demande de devis :</strong><br>Pour obtenir un devis personnalisé :<br>1. Remplissez le formulaire de contact<br>2. Ou contactez-nous sur WhatsApp<br>3. Décrivez votre besoin et nous vous répondons rapidement.<br><br><a href="#contact" style="color:var(--accent)" onclick="toggleChatbot()">→ Aller au formulaire</a>' },
  { keys: ['horaire','heure','disponible','ouvert','ouverture','travail'], reply: ' <strong>Nos horaires :</strong><br>• Dimanche – Jeudi : 8h00 – 17h00<br>• Urgences industrielles : contactez-nous par WhatsApp<br><br>N\'hésitez pas à nous écrire à tout moment !' },
  { keys: ['urgence','urgent','panne','arrêt','arrêt','stop'], reply: ' <strong>Urgence industrielle ?</strong><br>Contactez-nous immédiatement sur WhatsApp :<br><a href="https://wa.me/213658724256?text=URGENCE%20-%20" target="_blank" style="color:#25D366;font-weight:700">+213 658 724 256</a><br><br>Notre équipe intervient rapidement pour minimiser votre temps d\'arrêt !' },
  { keys: ['projet','réalisation','reference','travaux','chantier'], reply: ' <strong>Nos réalisations :</strong><br>Nous avons réalisé des projets dans les secteurs :<br>• Agroalimentaire<br>• Eau & traitement<br>• BTP & industrie lourde<br>• Énergie & utilities<br><br>Consultez notre galerie sur le site pour voir nos travaux !' },
  { keys: ['bonjour','salut','hello','salam','بوم','مرحبا','السلام'], reply: ' <strong>Bonjour ! Bienvenue chez NV TECH SOLUTIONS.</strong><br><br>Je suis votre assistant virtuel. Je peux vous renseigner sur :<br>• Nos services & offres<br>• Comment nous contacter<br>• Demande de devis<br>• Localisation & horaires<br><br>Comment puis-je vous aider ?' },
];

let chatOpen = false;

function toggleChatbot() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatbotWindow');
  if(chatOpen) {
    win.classList.add('open');
    if(!document.getElementById('chatMessages').children.length) {
      setTimeout(() => addBotMsg(' Bonjour ! Je suis l\'assistant de <strong>NV TECH SOLUTIONS</strong>.<br>Comment puis-je vous aider aujourd\'hui ?'), 300);
    }
  } else {
    win.classList.remove('open');
  }
}

function addBotMsg(text, delay=0) {
  const msgs = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'chat-msg';
  typing.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    typing.remove();
    const div = document.createElement('div');
    div.className = 'chat-msg';
    div.innerHTML = `<div class="chat-bubble">${text}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }, delay + 800);
}

function addUserMsg(text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function getBotReply(text) {
  const t = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  for(const faq of chatbotFAQ) {
    if(faq.keys.some(k => t.includes(k))) return faq.reply;
  }
  return ' Je n\'ai pas bien compris votre question.<br>Vous pouvez utiliser les boutons rapides ci-dessous, ou nous contacter directement sur WhatsApp : <a href="https://wa.me/213658724256" target="_blank" style="color:#25D366;font-weight:700">+213 658 724 256</a>';
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  addUserMsg(text);
  input.value = '';
  const reply = getBotReply(text);
  addBotMsg(reply, 200);
}

function askQuick(q) {
  if(!chatOpen) { chatOpen = true; document.getElementById('chatbotWindow').classList.add('open'); }
  addUserMsg(q);
  const reply = getBotReply(q);
  addBotMsg(reply, 200);
}
// ===== END CHATBOT =====

// ===== CAREERS MODAL =====
let currentJob = '';
function openModal(jobTitle) {
  currentJob = jobTitle;
  document.getElementById('modalJobTitle').textContent = jobTitle;
  document.getElementById('applyModal').classList.add('open');
  document.getElementById('applyModalMsg').className = 'modal-msg';
  document.getElementById('applyModalMsg').textContent = '';
  document.getElementById('applySubmitBtn').disabled = false;
  document.getElementById('applySubmitBtn').textContent = ' Envoyer ma candidature';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('applyModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('applyModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
function submitApplication() {
  const name = document.getElementById('applyName').value.trim();
  const phone = document.getElementById('applyPhone').value.trim();
  const email = document.getElementById('applyEmail').value.trim();
  const level = document.getElementById('applyLevel').value;
  const exp = document.getElementById('applyExp').value;
  const msg = document.getElementById('applyMsg').value.trim();
  const btn = document.getElementById('applySubmitBtn');
  const msgEl = document.getElementById('applyModalMsg');

  if (!name || !email) {
    msgEl.className = 'modal-msg error';
    msgEl.textContent = ' Veuillez remplir au moins votre nom et email.';
    return;
  }
  btn.disabled = true;
  btn.textContent = ' Envoi en cours...';
  msgEl.className = 'modal-msg';

  emailjs.send('service_n5d4a7r', 'template_xml4vth', {
    name: name,
    from_name: name,
    email: email,
    from_email: email,
    from_phone: phone || '—',
    service_type: 'Candidature : ' + currentJob,
    title: 'Candidature emploi – ' + currentJob,
    message: `Poste : ${currentJob}\nNiveau : ${level || '—'}\nExpérience : ${exp || '—'}\n\n${msg || 'Aucun message.'}`
  }).then(() => {
    msgEl.className = 'modal-msg success';
    msgEl.textContent = ' Candidature envoyée avec succès ! Nous vous contacterons bientôt.';
    btn.textContent = ' Envoyée !';
    document.getElementById('applyName').value = '';
    document.getElementById('applyPhone').value = '';
    document.getElementById('applyEmail').value = '';
    document.getElementById('applyLevel').value = '';
    document.getElementById('applyExp').value = '';
    document.getElementById('applyMsg').value = '';
  }).catch(() => {
    msgEl.className = 'modal-msg error';
    msgEl.textContent = ' Erreur lors de l\'envoi. Veuillez réessayer.';
    btn.disabled = false;
    btn.textContent = ' Envoyer ma candidature';
  });
}
// ===== END CAREERS MODAL =====

// ===== HAMBURGER MENU =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
function closeMobileNav() {
  hamburgerBtn.classList.remove('open');
  mobileNav.classList.remove('open');
}
// Close on outside click
document.addEventListener('click', (e) => {
  if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
    closeMobileNav();
  }
});
// ===== END HAMBURGER =====

function subscribe() {
  const btn=document.getElementById('subBtn'), msg=document.getElementById('subMsg');
  const name=document.getElementById('sub_name').value.trim(), email=document.getElementById('sub_email').value.trim();
  if(!email){ msg.className='sub-msg error'; msg.textContent=' Veuillez entrer votre email.'; return; }
  btn.disabled=true; btn.textContent='...'; msg.className='sub-msg'; msg.textContent='';
  emailjs.send('service_n5d4a7r','template_xml4vth',{name:name||'Abonné',from_name:name||'Abonné',email:email,from_email:email,from_phone:'—',service_type:'Abonnement newsletter',message:'Nouvelle inscription abonnement depuis le site web.',title:'Abonnement newsletter'})
    .then(()=>{ msg.className='sub-msg success'; msg.textContent=' Abonnement confirmé ! Merci de rejoindre notre réseau.';
      document.getElementById('sub_name').value=''; document.getElementById('sub_email').value='';
      btn.textContent=' Abonné'; })
    .catch(()=>{ msg.className='sub-msg error'; msg.textContent=' Erreur. Réessayez plus tard.';
      btn.disabled=false; btn.textContent=' S\'abonner'; });
}



(function(){
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles, lines;

  function resize(){
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min,max){ return Math.random()*(max-min)+min; }

  // Particles
  function initParticles(){
    particles = [];
    const count = Math.floor(W*H/8000);
    for(let i=0;i<count;i++){
      particles.push({
        x: rand(0,W), y: rand(0,H),
        vx: rand(-0.4,0.4), vy: rand(-0.4,0.4),
        r: rand(1,2.5),
        alpha: rand(0.3,0.9)
      });
    }
  }

  function drawParticles(){
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
      ctx.fill();
    });
  }

  function drawConnections(){
    const maxDist = 130;
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<maxDist){
          const alpha=(1-dist/maxDist)*0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(59,130,246,${alpha})`;
          ctx.lineWidth=0.8;
          ctx.stroke();
        }
      }
    }
  }

  // Shooting lines
  const shoots = [];
  function addShoot(){
    const fromLeft = Math.random()>0.5;
    shoots.push({
      x: fromLeft ? 0 : W,
      y: rand(H*0.1, H*0.9),
      vx: fromLeft ? rand(4,8) : rand(-8,-4),
      vy: rand(-1.5,1.5),
      len: rand(80,200),
      alpha: 0.8,
      decay: rand(0.012,0.022)
    });
  }

  function drawShoots(){
    for(let i=shoots.length-1;i>=0;i--){
      const s=shoots[i];
      ctx.beginPath();
      ctx.moveTo(s.x,s.y);
      ctx.lineTo(s.x - s.vx*s.len/Math.abs(s.vx), s.y - s.vy*s.len/Math.abs(s.vx||1));
      const grad=ctx.createLinearGradient(s.x,s.y,s.x-s.vx*10,s.y-s.vy*10);
      grad.addColorStop(0,`rgba(99,179,255,${s.alpha})`);
      grad.addColorStop(1,'rgba(59,130,246,0)');
      ctx.strokeStyle=grad;
      ctx.lineWidth=1.5;
      ctx.stroke();
      s.x+=s.vx; s.y+=s.vy; s.alpha-=s.decay;
      if(s.alpha<=0||(s.x<-50||s.x>W+50)) shoots.splice(i,1);
    }
    if(Math.random()<0.03 && shoots.length<6) addShoot();
  }

  function animate(){
    ctx.clearRect(0,0,W,H);
    drawConnections();
    drawParticles();
    drawShoots();
    requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();

  window.addEventListener('resize',()=>{ resize(); initParticles(); });
})();



(function(){
  var t=document.querySelector('.ref-track');if(!t)return;
  var orig=Array.prototype.slice.call(t.children);
  function build(){
    Array.prototype.slice.call(t.children).forEach(function(c){if(c.getAttribute('aria-hidden'))t.removeChild(c);});
    var setW=0;orig.forEach(function(c){setW+=c.offsetWidth+28;});
    if(!setW)return;
    var reps=Math.max(1,Math.ceil(window.innerWidth/setW));
    var total=reps*2-1; // originals count as first set; add enough so each half >= viewport
    for(var i=0;i<total;i++){orig.forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');t.appendChild(k);});}
    t.style.animationDuration=(setW*reps/60)+'s';
  }
  window.addEventListener('load',build);
  var r;window.addEventListener('resize',function(){clearTimeout(r);r=setTimeout(build,200);});
})();
