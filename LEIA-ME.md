# MGM Source

Landing page local e independente do Lead Radar. Abra `index.html` no navegador, sem instalar dependências.

Para acessar por servidor local, nesta pasta execute:

```powershell
python -m http.server 4178 --bind 127.0.0.1
```

Acesse http://127.0.0.1:4178. Esse endereço funciona apenas neste computador; não é um link público para o cliente.

## Implementado

- Identidade azul, temas claro e escuro com preferência salva.
- Entrada coreografada, profundidade com mouse, parallax por rolagem e revelações de seção.
- Vitrine com quatro categorias (celulares, videogames, notebooks, tablets e iPads) e navegação por teclado. No celular, as abas ficam em duas linhas.
- Contato WhatsApp com mensagem específica para cada categoria e conserto.
- Assistência, avaliações, endereço, telefone, Instagram, rota e perguntas frequentes.
- Carrossel manual com toque, setas e teclado. Sem avanço automático durante a leitura.
- Menu móvel, foco visível, funcionamento com movimento reduzido e conteúdo disponível sem JavaScript.
- Fontes e imagens locais, imagens WebP otimizadas. Sem dependência de CDN em execução.
- Tema claro: a imagem do hero é um painel com cantos arredondados e elevação, na mesma largura do tema escuro. A máscara radial continua só no tema escuro, porque sobre fundo claro ela borraria a foto.
- Piso em perspectiva atrás do hero, com deriva por rolagem, visível também no celular. Vitrine de categorias entra girando no eixo Y. Ambos em CSS, sem biblioteca e sem arquivo novo. A imagem do hero não recebe camadas sobrepostas.
- Hero revisado em `assets/hero-v2.webp`: tela do notebook alinhada à base e controle com anatomia convencional de dois apoios. O original permanece em `assets/hero-original.png`.

## Conteúdo e identidade

O usuário confirmou posteriormente a venda de tablets e iPads. A categoria tem imagem ilustrativa própria gerada com image_gen integrado, salva em `assets/tablets-original.png` e otimizada em `assets/tablets.webp`. Prompt: dois tablets azuis, frente e traseira, inteiros em pedestal grafite, fundo escuro e iluminação azul, sem texto ou logos, seguindo a vitrine existente.

Dados comerciais e avaliações vieram do material fornecido em 06/09/2026. Os depoimentos são trechos das avaliações fornecidas, sem acréscimo de alegações. O Instagram bloqueou a leitura automatizada nesta sessão.

A assinatura MGM SOURCE com seta é uma proposta tipográfica provisória, não o arquivo oficial do logo. Ajustar ao logo real quando disponibilizado. Azul escolhido como direção visual; cor exata do logo não verificada.

Todas as fotografias de produtos e assistência são ilustrações geradas por IA. Não representam estoque confirmado, fotos reais da loja ou funcionários. Essa natureza está identificada no site. Modelos, valores, prazos, garantias, pagamentos e horários completos não foram presumidos.

Os botões abrem o WhatsApp; não enviam mensagens automaticamente. Não há checkout ou confirmação de compra no site.

## Arquivos

- `index.html`: conteúdo, navegação e metadados.
- `styles.css`: identidade, responsividade e animações CSS.
- `script.js`: temas, vitrine, teclado, menu, profundidade e avaliações.
- `assets/`: imagens, fonte Outfit (SIL OFL) e favicon tipográfico.
- `preview-*.png`: capturas de verificação.
- `verification.json`: resultados dos testes funcionais.
- `lighthouse.json`: auditoria local de laboratório, não dados de usuários reais.

Ícones Lucide incorporados no HTML (ISC); fonte Outfit sob SIL OFL. Os scripts `verify.cjs` e `lighthouse-run.cjs` usam ferramentas já presentes neste computador, com caminhos absolutos. Não são necessários para executar ou publicar o site.

Antes da publicação comercial, conferir com a loja a identidade oficial e os dados fornecidos. Para publicar, basta servir `index.html`, `styles.css`, `script.js` e `assets/` em uma hospedagem estática. Não há chaves ou backend.

## Validação final (06/09/2026)

Testes funcionais passaram em 1440, 1024, 768, 390 e 320px. Lighthouse local final: desempenho 100, acessibilidade 100, boas práticas 100 e SEO 100. As capturas preview-final mostram o resultado final em desktop, mobile e tema claro. Animações desativadas somente para essas capturas estáticas.

