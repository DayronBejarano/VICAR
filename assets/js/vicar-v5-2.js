
(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  setHeader(); window.addEventListener('scroll', setHeader, {passive:true});
  const closeNav = () => { if (!nav || !toggle) return; nav.dataset.open='false'; toggle.setAttribute('aria-expanded','false'); toggle.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`; document.body.style.overflow=''; };
  toggle?.addEventListener('click', () => { const open=nav.dataset.open !== 'true'; nav.dataset.open=String(open); toggle.setAttribute('aria-expanded',String(open)); toggle.innerHTML = open ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>` : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`; document.body.style.overflow=open?'hidden':''; });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
  window.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target)}}),{threshold:.12}) : null;
  document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in-view'));

  document.querySelector('[data-quick-booking]')?.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    sessionStorage.setItem('vicarService', data.get('servicio') || '');
    sessionStorage.setItem('vicarMode', data.get('modalidad') || '');
    sessionStorage.setItem('vicarCity', data.get('ciudad') || '');
    window.location.href='agendar.html';
  });

  const loadButton = document.querySelector('[data-load-agenda]');
  loadButton?.addEventListener('click', () => {
    const frame = document.querySelector('[data-agenda-frame]');
    const consent = document.querySelector('[data-agenda-consent]');
    if (!frame || !consent) return;
    const iframe=document.createElement('iframe');
    iframe.src=loadButton.dataset.src;
    iframe.title='Agenda de citas de Consultoría Psicojurídica VICAR';
    iframe.loading='lazy';
    iframe.allow='geolocation; microphone; camera';
    frame.appendChild(iframe); frame.hidden=false; consent.hidden=true;
  });

  const contactForm=document.querySelector('[data-whatsapp-contact]');
  const message=document.querySelector('#contact-message');
  const counter=document.querySelector('[data-char-count]');
  message?.addEventListener('input',()=>{if(counter)counter.textContent=String(message.value.length)});
  contactForm?.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(contactForm);
    const name=String(fd.get('nombre')||'').trim(); const type=String(fd.get('tipo')||'').trim(); const service=String(fd.get('servicio')||'').trim(); const msg=String(fd.get('mensaje')||'').trim();
    const text=`Hola, soy ${name}. Tipo de solicitante: ${type}. Servicio de interés: ${service}. Descripción general: ${msg}`;
    window.open(`https://wa.me/573203732450?text=${encodeURIComponent(text)}`,'_blank','noopener');
  });
})();
