const base='https://github.com/vacilao38/clustter-cores-downloads/releases/download/';
const products={
  "folk": {
    "name": "Folk",
    "version": "1.0.0",
    "category": "TRANSCRIÇÃO LOCAL",
    "description": "Da voz para o que importa. Transcreva áudio e vídeo no próprio aparelho, com modelos incluídos e sem enviar o conteúdo para a nuvem.",
    "image": "assets/folk-interface.png",
    "features": [
      "Importa MP4, MP3, WAV, M4A, FLAC e outros formatos compatíveis.",
      "Processa conteúdos longos em blocos, salvando o progresso para retomar.",
      "Revisão por trechos e exportação TXT, SRT, VTT e JSON."
    ],
    "requirements": "Windows 10/11 x64 com AVX2. Android 7 ou superior. Precisa de espaço para a cópia local da mídia e dos modelos. Mantenha o aplicativo aberto durante o processamento.",
    "note": "Modelo de voz incluído. Transcrição real validada no Windows. APKs compilados e conferidos; uso em aparelho Android físico ainda precisa de validação. A precisão depende do áudio: revise o texto.",
    "tag": "folk-v1.0.0",
    "prefix": "Folk-1.0.0",
    "windows": true
  },
  "lake": {
    "name": "Lake",
    "version": "1.2.0",
    "category": "ANIMAÇÃO VETORIAL",
    "description": "Um estúdio para compor e animar no Windows e no Android. Dê vida a formas, textos e imagens com camadas, keyframes e curvas de animação.",
    "image": "assets/lake-interface.png",
    "features": [
      "Formas vetoriais, texto, máscaras, grupos e importação de imagens e SVG.",
      "Timeline com keyframes, curvas Bézier e animação ao longo de caminhos.",
      "Projetos .lake editáveis e exportação PNG, SVG estático e SVG animado."
    ],
    "requirements": "Windows 10/11 x64 ou celular/tablet com Android 7 ou superior. Composições de até 30 segundos e 80 camadas. No Windows, extraia o ZIP completo e abra lake.exe.",
    "note": "Não exporta MP4 ou GIF e não importa áudio ou vídeo. Compilação e testes automatizados aprovados no Windows. Diálogos nativos ainda sem validação manual completa; uso em hardware Android também precisa de validação. Exporte seus projetos .lake para backup.",
    "tag": "lake-v1.2.0",
    "prefix": "Lake-1.2.0",
    "windows": true
  },
  "chain": {
    "name": "Chain",
    "version": "1.0.0",
    "category": "COLEÇÕES DE LINKS",
    "description": "Tudo o que inspira, em um lugar para conectar. Organize links em coleções com capas e leve suas ideias de um aparelho ao outro por conexão direta.",
    "image": "assets/chain-interface.png",
    "features": [
      "Coleções com capas pessoais ou abstratas, categorias, notas, etiquetas, favoritos e busca.",
      "Importação e exportação .chain com as capas incluídas para guardar backups.",
      "Pareamento único, aparelhos lembrados e ações Enviar alterações / Puxar mais recentes por P2P criptografado."
    ],
    "requirements": "Windows 10/11 x64 ou celular/tablet Android 7+. Extraia o ZIP completo e abra chain.exe. Para transferir, mantenha o Chain aberto nos dois aparelhos. Wi-Fi ou hotspot na mesma rede funciona sem internet.",
    "note": "Sem servidor intermediário. Entre redes diferentes, é necessário IPv6 acessível ou redirecionamento de porta; CGNAT e firewalls podem impedir a conexão. Edições divergentes viram cópias de conflito, sem propagar exclusões. Biblioteca e exportações locais não são criptografadas. 10 testes aprovados e inicialização Windows verificada; uso em Android físico ainda precisa de validação. APKs de uso pessoal com assinatura de desenvolvimento.",
    "tag": "chain-v1.0.0",
    "prefix": "Chain-1.0.0",
    "windows": true,
    "downloads": [
      [
        "Windows x64 · ZIP",
        "Windows-x64.zip",
        "13,9 MiB"
      ],
      [
        "Android ARM64 · recomendado",
        "arm64-v8a.apk",
        "18,0 MiB"
      ],
      [
        "Android ARM32",
        "armeabi-v7a.apk",
        "15,5 MiB"
      ],
      [
        "Android x64",
        "x86_64.apk",
        "19,4 MiB"
      ]
    ]
  },
  "noon": {
    "name": "Noon",
    "version": "0.1.0",
    "category": "SÍNTESE & COMPOSIÇÃO",
    "description": "Dê forma ao que você ouve. Crie timbres, efeitos e pequenas trilhas em camadas, com uma interface visual que também é um script editável.",
    "image": "assets/noon-interface.png",
    "features": [
      "Até 8 camadas com instrumentos por síntese, filtro, distorção, eco e reverb.",
      "Guias de acordes e seções para compor; exportação WAV estéreo e projetos .noon editáveis.",
      "Visual e Noon Script sincronizados. Copie para sua LLM, cole o resultado e aplique o script validado."
    ],
    "requirements": "Windows 10/11 x64 ou celular/tablet com Android 7 ou superior. Extraia o ZIP completo no Windows e abra noon.exe. O runtime Visual C++ acompanha o pacote.",
    "note": "Primeira versão: até 16 compassos e 60 segundos de arranjo, mais a cauda dos efeitos. O teclado toca uma nota por vez. Sem samples importados, MIDI, VST, motor em tempo real ou reconhecimento de músicas. A LLM é usada externamente, por copiar/colar. Player real validado no Windows; uso em aparelho Android ainda precisa de validação. Exporte .noon para backup.",
    "tag": "noon-v0.1.0",
    "prefix": "Noon-0.1.0",
    "windows": true,
    "downloads": [
      [
        "Windows x64 · ZIP",
        "Windows-x64.zip",
        "13,2 MiB"
      ],
      [
        "Android ARM64 · recomendado",
        "arm64.apk",
        "17,5 MiB"
      ],
      [
        "Android ARM32",
        "arm32.apk",
        "15,0 MiB"
      ],
      [
        "Android x64",
        "x64.apk",
        "18,9 MiB"
      ]
    ]
  }
};
const dialog=document.querySelector('dialog');let lastFocus;
function openProduct(id,download=false){const p=products[id];if(!p)return;lastFocus=document.activeElement;const links=p.downloads??[...(p.windows?[['Windows x64 · ZIP','Windows-x64.zip',id==='folk'?'182,6 MiB':'13,7 MiB']]:[]),['Android ARM64 · recomendado','arm64.apk',id==='folk'?'89,4 MiB':'17,8 MiB'],['Android ARM32','arm32.apk',id==='folk'?'99,0 MiB':'15,3 MiB'],['Android x64','x64.apk',id==='folk'?'92,2 MiB':'19,2 MiB']];document.querySelector('#dialog-body').innerHTML=`<div class="detail-content"><p class="eyebrow">${p.category} / ${p.version}</p><h2 id="dialog-title">Conheça o ${p.name}.</h2><p class="detail-intro">${p.description}</p><img class="detail-image" src="${p.image}" alt="Interface do aplicativo ${p.name}" width="1366" height="900"><div class="detail-columns"><section><h4>Feito para você</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul><h4>Onde funciona</h4><p>${p.requirements}</p></section><section id="download-options"><h4>Escolha sua plataforma</h4><div class="download-list">${links.map(([label,file,size])=>`<a href="${base}${p.tag}/${p.prefix}-${file}" target="_blank" rel="noopener">${label}<small>${size} ↓</small></a>`).join('')}</div><a class="hash-link" href="${base}${p.tag}/SHA256SUMS.txt" target="_blank" rel="noopener">Conferir integridade · SHA-256 ↗</a><p style="font-size:11px">Download direto pelo GitHub Releases. No Android, esta versão usa assinatura de desenvolvimento e instalação por APK.</p></section></div><div class="release-note">${p.note}</div></div>`;dialog.showModal();document.body.style.overflow='hidden';if(download)setTimeout(()=>document.querySelector('#download-options').scrollIntoView({block:'center',behavior:'instant'}),30)}
function closeProduct(){dialog.close();document.body.style.overflow='';lastFocus?.focus()}
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>openProduct(button.dataset.open,button.dataset.download==='true')));document.querySelector('.dialog-close').addEventListener('click',closeProduct);dialog.addEventListener('cancel',e=>{e.preventDefault();closeProduct()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProduct()}});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',b===button)});let count=0;document.querySelectorAll('.product').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.platforms.split(' ').includes(button.dataset.filter);if(!card.hidden)count++});document.querySelector('#filter-status').textContent=`${count} ferramenta${count===1?' disponível':'s disponíveis'}`}));
const heights=[9,17,25,12,31,39,20,35,44,27,18,32,23,12,19,9];document.querySelectorAll('.wave,.mini-wave').forEach(el=>heights.forEach((h,n)=>{const bar=document.createElement('i');bar.style.setProperty('--h',h);bar.style.setProperty('--n',n);el.append(bar)}));
if('IntersectionObserver'in window){document.body.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const motion=document.querySelector('.motion');let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;function applyMotion(){document.body.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.title=paused?'Retomar animações':'Pausar animações';motion.innerHTML=`${paused?'▶':'Ⅱ'} <span>Movimento</span>`}applyMotion();motion.addEventListener('click',()=>{paused=!paused;applyMotion()});
