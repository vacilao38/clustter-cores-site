# Clustter cores

Vitrine pública de ferramentas selecionadas. Catálogo atual: Folk 1.0.1, Lake 1.2.1, Chain 1.2.0, Noon 0.1.1, Pile 0.1.1 e Chain Companion 1.0.0. Noon mantém código público; Chain voltou a privado por pedido de 24/10/2026. Folk, Lake e Pile mantêm repositórios privados; Pile por pedido explícito de 24/10/2026 (risco de LGPD). Visibilidades e continuidade em ../clustter-main/projects.json. Publicar código não autoriza novos produtos ou downloads na vitrine.

Site estático em `dist/`, sem dependências de build. Layout responsivo, apresentações CSS originais de voz e animação, filtros por plataforma e apresentações de produto com downloads. As animações são demonstrações visuais, não vídeos capturados dos aplicativos. Capturas de interface reais acompanham as descrições.

Respeita movimento reduzido e oferece pausa manual. Não há compra, cadastro ou coleta de dados. Downloads são hospedados separadamente no GitHub Releases. Para incluir produtos, altere explicitamente `catalog.json`, a apresentação e os links correspondentes; outros diretórios deste workspace nunca são publicados automaticamente.

## Publicação

Novas aplicações só devem ser publicadas na Clustter cores quando o usuário pedir explicitamente a publicação daquela aplicação. Desenvolver, compilar ou enviar código para um repositório não autoriza a publicação. Preservar os produtos já selecionados no catálogo. Em 24/10/2026, Pile e seus downloads também receberam autorização explícita. A regra do workspace está em `../AGENTS.md`.

Hospedagem: GitHub Pages, https://vacilao38.github.io/clustter-cores-downloads/ . Arquivos públicos em `docs/` do repositório `vacilao38/clustter-cores-downloads`; releases separadas por produto. Código do Folk em `vacilao38/folk-transcriber`, privado. O Site appgprj_6adb60e943808191a717f5ce5b3b72c7 foi criado, mas não recebeu deploy: a revisão automática bloqueou o método de envio de credenciais do utilitário Sites. Nenhuma credencial desse serviço foi salva em arquivos. GitHub Pages é a hospedagem efetiva.

## Publicação Noon · 23/10/2026

Noon 0.1.0 incluído na vitrine junto de Folk, Lake e Chain. GitHub Pages confirmou built no commit cc5174d8dfbb150cc9bac2a0ef7546154538c90e. Página: https://vacilao38.github.io/clustter-cores-downloads/#noon . Release: https://github.com/vacilao38/clustter-cores-downloads/releases/tag/noon-v0.1.0 . Quatro instaladores e SHA256SUMS.txt públicos, com tamanhos e SHA-256 conferidos, cinco links HTTP 200. Captura real em ../outputs/clustter-noon-publication/noon-publicado.jpg. Mobile verificado a 390 px lógicos, sem rolagem horizontal. Código-fonte Noon não foi publicado.

## Publicação Pile · 24/10/2026

Pile 0.1.0 autorizado para a vitrine. Código privado por decisão do usuário (risco de LGPD); Windows ZIP e APKs por arquitetura distribuídos separadamente. Página: https://vacilao38.github.io/clustter-cores-downloads/#pile . Release: https://github.com/vacilao38/clustter-cores-downloads/releases/tag/pile-v0.1.0 . Captura da interface usa somente arquivos sintéticos. Android físico e chamadas reais de IA permanecem pendentes; a página informa os limites. Publicação não inclui código-fonte do Pile nem dados de uso. Sincronização global dispensada pelo usuário nesta sessão.


## Catálogo e Update · 24/10/2026

`catalog.json` é a fonte dos produtos selecionados, versões completas, destaques e downloads. Execute `node tool/build-catalog.mjs` para validar e gerar `dist/catalog.json` e `dist/updates.json`. Não anunciar uma versão antes de publicar e verificar seus pacotes, com autorização aplicável. O catálogo anuncia apenas as versões efetivamente publicadas e verificadas.

O topo é montado por `dist/catalog-app.js`: até seis ferramentas em destaque, com identificação visual e versão; os demais produtos permanecem na coleção. Novos produtos autorizados recebem card genérico a partir do catálogo. Cada apresentação mostra a versão completa. `dist/app.js` permanece apenas para compatibilidade de páginas antigas em cache. O feed público segue `clustter.update` schema 1; documentação em `../clustter-main/docs/UPDATE.md`.

Após a preparação e um bloqueio inicial de revisão automática, o usuário autorizou explicitamente terminar e publicar nos repositórios e na Clustter. Os cinco releases com Update e instalador Windows foram publicados; versões antigas permanecem no histórico de releases. Vinte e cinco assets públicos (quatro pacotes e SHA256SUMS por app) tiveram tamanho, SHA-256 e URL conferidos.

## Publicação Pile 0.1.1 — 24/10/2026

Nova autorização explícita do usuário: “suba no clustter e no repositório”. A evolução visual está publicada em https://vacilao38.github.io/clustter-cores-downloads/#pile ; release https://github.com/vacilao38/clustter-cores-downloads/releases/tag/pile-v0.1.1 . Windows Setup (11,7 MiB), APKs ARM64 (20,6 MiB), ARM32 (18,4 MiB), x64 (22,0 MiB) e SHA256SUMS.txt públicos, tamanhos/digests SHA-256 locais e remotos iguais e cinco links HTTP 200. Certificado Android igual ao 0.1.0. Instalador testado em pasta/registro isolados, preservando um arquivo sintético extra na desinstalação. Não foi instalada uma cópia de produção neste usuário.

Pages confirmou built em `99cff4766a63996c11c35eddd434b4852c09571a`. Feed anuncia Pile 0.1.1 em Windows/Android. Página real conferida no navegador: versão, galeria sintética atual, instalador/APKs e limites da integração WhatsApp. Prova em `outputs/pile-evolution-2026-10-24/pile-0.1.1-publicado.png`. O código do Pile permanece privado; não foi executado sync global. Android físico/SAF e adição real ao WhatsApp/Business continuam pendentes e divulgados publicamente.

Houve publicação concorrente de versões de outros apps por outra execução. Seus pacotes públicos foram preservados; esta execução preparou e enviou somente pacotes do Pile. O catálogo público e a fonte foram conferidos iguais ao final. Uma release de rascunho homônima de Pile criada por outra execução não foi publicada nem excluída por esta etapa; a release pública e os cinco links corretos foram verificados.

## Companion · 24/10/2026

Catálogo atual também inclui Chain Companion 1.0.0 para Chrome/Edge Windows; Chain atualizado para 1.2.0. Extensão distribuída manualmente com requisito do novo Setup. Plataforma browser e filtro Navegador, feed em chain-extension/browser. `downloadName` permite preservar nomes seguros de arquivos sem alterar o nome exibido. Imagem real do destino de captura identificada no alt; validação completa em navegador/Android físico permanece pendente.
