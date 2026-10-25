const releaseBase = 'https://github.com/vacilao38/clustter-cores-downloads/releases/download/';
const dialog = document.querySelector('dialog');
let products = {}, lastFocus;
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const symbols = {folk:'≋', lake:'◇', chain:'∞', noon:'♪', pile:'▤', 'chain-extension':'↗'};
function openProduct(id, download = false) {
  const p = products[id]; if (!p) return;
  lastFocus = document.activeElement;
  document.querySelector('#dialog-body').innerHTML = `<div class="detail-content"><p class="eyebrow">${esc(p.category)}</p><h2 id="dialog-title">Conheça o ${esc(p.name)}.</h2><p class="version-label">Versão ${esc(p.version)}</p><p class="detail-intro">${esc(p.description)}</p><img class="detail-image" src="${esc(p.image)}" alt="${esc(p.imageAlt ?? `Interface do aplicativo ${p.name}`)}" width="1366" height="900"><div class="detail-columns"><section><h4>Feito para você</h4><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul><h4>Onde funciona</h4><p>${esc(p.requirements)}</p></section><section id="download-options"><h4>Baixe a versão ${esc(p.version)}</h4><div class="download-list">${p.downloads.map(([label,file,size])=>`<a href="${releaseBase}${encodeURIComponent(p.tag)}/${encodeURIComponent(`${p.prefix}-${file}`)}" target="_blank" rel="noopener">${esc(label)}<small>${esc(size)} ↓</small></a>`).join('')}</div><a class="hash-link" href="${releaseBase}${encodeURIComponent(p.tag)}/SHA256SUMS.txt" target="_blank" rel="noopener">Conferir integridade · SHA-256 ↗</a><p class="download-help">${esc(p.downloadHelp ?? "No Windows, use o instalador .exe quando disponível. No Android, escolha seu APK. Versões com Update avisam no próprio app e abrem esta página.")}</p></section></div><div class="release-note">${esc(p.note)}</div></div>`;
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = 'hidden';
  if (download) requestAnimationFrame(()=>document.querySelector('#download-options').scrollIntoView({block:'center',behavior:'instant'}));
}
function closeProduct(){dialog.close();document.body.style.overflow='';lastFocus?.focus()}
function renderCatalog(){
  const entries=Object.entries(products), hero=document.querySelector('#hero-products');
  hero.innerHTML=entries.filter(([,p])=>p.featured!==false).slice(0,6).map(([id,p])=>`<button class="hero-app hero-${esc(id)}" data-open="${esc(id)}" aria-label="Conhecer ${esc(p.name)}, versão ${esc(p.version)}"><span class="hero-app-heading">${esc(p.name)}<span>v${esc(p.version)}</span></span><span class="hero-symbol" aria-hidden="true">${symbols[id]??'✳'}</span><strong>${esc(p.headline??p.category)}</strong><span class="hero-app-bottom">${esc(p.category)} <b aria-hidden="true">↗</b></span></button>`).join('');
  if(hero.children.length<6)hero.insertAdjacentHTML('beforeend','<a class="hero-more" href="#colecao"><span>A SUA PRÓXIMA IDEIA</span><strong>Explore<br>a coleção.</strong><b aria-hidden="true">↓</b></a>');
  document.querySelector('#product-count').textContent=String(entries.length).padStart(2,'0');
  document.querySelector('.hero-note').textContent=`${entries.length} FERRAMENTAS. MUITAS POSSIBILIDADES.`;
  document.querySelector('#filter-status').textContent=`${entries.length} ferramentas disponíveis`;
  for(const[id,p]of entries){
    let card=document.getElementById(id);
    if(!card){card=document.createElement('article');card.id=id;card.className='product';card.innerHTML=`<div class="product-visual future-visual"><img src="${esc(p.image)}" alt="Interface ${esc(p.name)}" loading="lazy"></div><div class="product-info"><p class="category">${esc(p.category)}</p><h3>${esc(p.name)}<span></span></h3><div class="platforms"></div><p>${esc(p.description)}</p><div class="product-actions"><button class="text-link" data-open="${esc(id)}">Conhecer o ${esc(p.name)} ↗</button><button class="button dark small" data-open="${esc(id)}" data-download="true">Baixar ${esc(p.name)} ↓</button></div></div>`;document.querySelector('.products').append(card)}
    card.dataset.platforms=p.platforms.join(' ');
    const version=card.querySelector('h3>span');if(version){version.textContent=`v${p.version}`;version.setAttribute('aria-label',`Versão ${p.version}`)}
    const platforms=card.querySelector('.platforms');if(platforms)platforms.innerHTML=p.platforms.map(platform=>`<span>${platform==='windows'?'⊞ Windows':platform==='browser'?'↗ Chrome / Edge':'◉ Android'}</span>`).join('');
  }
  document.querySelectorAll('.product').forEach(card=>{if(!products[card.id])card.remove()});
}
document.addEventListener('click',event=>{const button=event.target instanceof Element?event.target.closest('[data-open]'):null;if(button)openProduct(button.dataset.open,button.dataset.download==='true')});
document.querySelector('.dialog-close').addEventListener('click',closeProduct);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeProduct()});
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeProduct()});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('.product').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.platforms.split(' ').includes(button.dataset.filter);if(!card.hidden)count++});document.querySelector('#filter-status').textContent=`${count} ferramenta${count===1?' disponível':'s disponíveis'}`}));
const heights=[9,17,25,12,31,39,20,35,44,27,18,32,23,12,19,9];document.querySelectorAll('.wave,.mini-wave').forEach(el=>heights.forEach((h,n)=>{const bar=document.createElement('i');bar.style.setProperty('--h',h);bar.style.setProperty('--n',n);el.append(bar)}));
if('IntersectionObserver'in window){document.body.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const motion=document.querySelector('.motion');let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
function applyMotion(){document.body.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.title=paused?'Retomar animações':'Pausar animações';motion.innerHTML=`${paused?'▶':'Ⅱ'} <span>Movimento</span>`}applyMotion();motion.addEventListener('click',()=>{paused=!paused;applyMotion()});
fetch('catalog.json',{cache:'no-cache'}).then(response=>{if(!response.ok)throw Error('Catálogo indisponível');return response.json()}).then(data=>{if(data.schema!==1||!data.products)throw Error('Catálogo inválido');products=data.products;renderCatalog();const id=location.hash.slice(1);if(products[id])openProduct(id)}).catch(()=>{document.querySelector('#hero-products').innerHTML='<div class="catalog-error" role="status"><strong>O catálogo não carregou.</strong><p>Confira sua conexão e tente novamente.</p><button class="button light" id="retry-catalog">Tentar novamente</button></div>';document.querySelector('#retry-catalog').addEventListener('click',()=>location.reload())});
