# Imagens de estúdio — MGM Source

Geradas com a ferramenta integrada image_gen em 10/09/2026. Direção baseada na referência enviada pelo usuário: fundo quase preto, luz azul, metal e vidro bem definidos, reflexos discretos e composição limpa. Imagens ilustrativas, sem representar estoque disponível.

## Arquivos aplicados

- `assets/hero-v3.webp`: notebook, celular, tablet e controle.
- `assets/phones-v2.webp`: dois celulares azuis.
- `assets/games-v2.webp`: console e controle.
- `assets/laptop-v2.webp`: notebook aberto.
- `assets/tablets-v2.webp`: tablets e caneta.
- `assets/repair-v2.webp`: assistência técnica.

Os PNGs correspondentes ficam em `assets/sources/`. As versões anteriores foram preservadas.

## Prompt comum

Use case: product-mockup. Create a premium photorealistic technology campaign photograph for MGM Source website. Reference direction: midnight navy almost black #090d16 seamless studio, controlled electric blue rim lighting, deep clean blacks, beautifully defined brushed metal and glass, photographic realistic proportions and precise industrial geometry, subtle reflections on a flat dark polished table, cinematic professional advertising. No text, watermark, logos, UI, labels, pedestal, floating platforms, neon rings or decorative props. Produce one standalone landscape image 3:2.

## Complementos por imagem

### Hero

HERO group shot: open dark aluminum laptop at left, blue smartphone showing back with three camera lenses in center foreground, upright tablet at right with subtle blue abstract flowing wallpaper and slim white stylus, white and black game controller in front of tablet. Correct laptop hinge and keyboard alignment, controller has exactly two grips. All four devices fully in frame with 10% safe margins, realistic relative sizes (phone smaller than laptop screen), visually layered but recognizable individually. Camera at tabletop height, elegant blue light behind devices, glossy floor reflections, screens bright enough to read shapes. No large blank area for copy; image is the right-hand visual beside separate HTML text.

Revisão: Edit this product campaign photograph. Keep four devices, blue lighting, realistic metal, floor reflections. Make three precise corrections: (1) Replace mountain wallpaper on laptop with flowing abstract electric-blue folds matching tablet screen; (2) Remove all brand logos, including apple silhouette on phone, leaving plain blue metal; (3) zoom camera out 18 percent so EVERY device is fully inside the frame with at least 8 percent dark breathing room on EVERY side, particularly laptop left edge currently cut off. Maintain straight correct notebook hinge and exactly two controller grips. Output landscape 3:2. No text, no additional objects.

### Celulares

Product category: dramatic three-quarter macro photograph of two premium blue smartphones, foreground phone back with exactly three detailed camera lenses and polished blue edges, second phone behind showing blue abstract curved wallpaper. Strong composition filling central 80% of frame with entire phones visible, crisp lenses and tactile brushed metal, subtle blue reflection below.

### Videogames

Product category: white and black game controller in foreground, viewed from slightly above in three-quarter angle, exactly two handles, realistic symmetric analog sticks, behind it a softly lit white and black game console standing upright. Devices fully in frame, control surfaces exceptionally precise, bright neutral white shells with electric blue rim highlights.

### Notebooks

Product category: a premium thin dark aluminum notebook open to 105 degrees in three-quarter front view, precise straight keyboard rows, generous trackpad, physically correct straight hinge connecting screen with chassis. Screen shows deep blue abstract flowing folds. Entire notebook visible at central 80% of frame, low camera angle, exquisite metal edge highlights.

### Tablets

Product category: premium thin tablet in landscape orientation tilted slightly back, large luminous display with blue and violet abstract flowing folds, second tablet behind showing dark blue brushed metal back, slim white stylus resting diagonally on the tabletop in front. Full devices comfortably in frame with precise rectangular geometry and rounded corners. Low three-quarter camera angle.

### Assistência

Service category: premium editorial macro photograph of skilled technician's hands in black nitrile gloves carefully repairing an opened smartphone on a dark antistatic work mat. One gloved hand stabilizes phone by edge, the other uses a precision screwdriver at a visible screw. Physically realistic internal battery and metal shields, tiny organized screws and precision tweezers nearby. Focus on tool tip and phone internals, shallow depth of field, no faces, cool blue rim lighting on metal, clean professional workbench. Compose phone and both hands in central 70% so image works in portrait crop.

## Revisões finais

### Tablets

Keep the two tablets and white stylus, their precise shapes and arrangement. Replace the ENTIRE room and tabletop with a seamless nearly black midnight navy #090d16 studio and dark subtly reflective flat table, electric-blue rim lighting. Remove ALL words, branding and graphics from rear tablet and stylus. No plants, books, window, lamps, decor or lettering anywhere. Premium cinematic product photography matching blue-lit electronics campaign, landscape 3:2. Preserve full devices.

### Assistência

Keep this macro phone repair photograph and the precise hands, tool and smartphone geometry. Remove ALL logos, text, letters, numbers and symbols from battery, phone components, work mat, containers and background items; make surfaces plain black and graphite. Simplify background into near-black midnight navy studio, stronger controlled electric blue side light, clean professional workbench. No lettering anywhere. Premium cinematic commercial photograph. Preserve portrait framing and detailed metal components.

## Validação

`node verify.cjs`: aprovado em 1440, 1024, 768, 390 e 320px. Carregamento das imagens, navegação, abas, teclado, temas e movimento reduzido verificados. Revisão visual do hero nos dois temas e dos painéis de produtos/assistência. Lighthouse local: desempenho 98, acessibilidade 100, boas práticas 100 e SEO 100.

`node prepare-images.cjs` reconverte os PNGs preservados e sincroniza dimensões no HTML. Sharp usa o caminho já disponível neste computador, sem dependência adicionada ao site.
