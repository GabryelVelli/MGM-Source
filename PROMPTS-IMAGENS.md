# Prompts para novas imagens — MGM Source Landing

Gere as três imagens abaixo em outra sessão (image_gen), salve na raiz do projeto
com o nome indicado e me avise. Eu converto para WebP com sharp, integro no HTML/CSS
com as mesmas animações do restante do site e rodo a verificação Playwright/Lighthouse.

## Âncora de estilo (vale para as três)

As imagens atuais (`assets/hero-v2.webp`, `assets/repair.webp`) definem o padrão:
fotografia fotorrealista de estúdio, fundo azul-marinho quase preto, luz suave com
recorte azul elétrico, profundidade de campo rasa, sem texto legível e sem logotipos
de marcas reais.

Paleta do site:

- Fundo escuro: `#090d16`
- Superfície: `#111722`
- Azul de destaque: `#245adc` (claro) e `#729fff` (escuro)
- Azul de botão: `#3469ed`

Regras obrigatórias em todos os prompts:

- Sem texto, letras ou números legíveis na imagem.
- Sem logotipos ou marcas registradas identificáveis.
- Sem rostos identificáveis (mãos e silhuetas são permitidas).
- Sem preços, etiquetas ou informação que o site não possa comprovar.

---

## 1. Interior da loja — `store.png`

**Onde entra:** seção "Nossa loja" (`#loja`), ao lado do cartão de endereço.
Hoje a seção tem apenas texto; a foto equilibra o bloco e reforça confiança.

**Proporção:** 3:2 — gerar em 1536×1024 ou maior.

**Prompt:**

> Fotografia fotorrealista do interior de uma pequena loja moderna de tecnologia,
> vista em ângulo de três quartos. Balcão de atendimento em madeira escura com
> tampo liso, vitrine de vidro iluminada por dentro exibindo celulares e consoles
> sem marca aparente, prateleiras ao fundo com caixas neutras e acessórios.
> Ambiente limpo e organizado, com luz de teto quente equilibrada por faixas de
> LED azul elétrico na base da vitrine e atrás das prateleiras. Fundo azul-marinho
> profundo quase preto, reflexos suaves no piso polido, profundidade de campo rasa
> com foco no balcão. Estética de fotografia comercial premium, alto contraste,
> sombras suaves. Sem texto, sem logotipos, sem pessoas.

---

## 2. Faixa ambiente — `statement.png`

**Onde entra:** seção "Uma loja perto de você" (bloco `statement`), como fundo
full-bleed com parallax por rolagem, mesmo efeito do hero.

**Proporção:** 2:1 panorâmica — gerar em 2048×1024 ou maior.
Composição precisa deixar o centro relativamente vazio, porque o texto fica por cima.

**Prompt:**

> Fotografia fotorrealista panorâmica de uma bancada de tecnologia vista de cima
> em leve ângulo. À esquerda, um notebook aberto de perfil com a tela exibindo um
> gradiente azul abstrato; à direita, dois celulares deitados e um controle de
> videogame branco. Centro da composição deliberadamente vazio, apenas a superfície
> escura e limpa. Fundo e superfície em azul-marinho quase preto, iluminação de
> estúdio lateral suave com recorte azul elétrico nas bordas dos objetos, reflexos
> discretos, névoa sutil ao fundo. Baixa saturação exceto pelos azuis. Estética
> editorial de tecnologia premium, cinematográfica, ampla. Sem texto, sem logotipos,
> sem pessoas.

---

## 3. Bancada de assistência — `repair-2.png`

**Onde entra:** seção "Assistência" (`#assistencia`), formando par com
`assets/repair.webp`, que hoje aparece sozinha.

**Proporção:** 3:2 — gerar em 1536×1024 ou maior.
Deve conversar com a imagem existente: mesma bancada, mesmo tom, ângulo diferente.

**Prompt:**

> Fotografia macro fotorrealista de uma bancada de assistência técnica de celulares.
> Placa-mãe de smartphone desmontada sobre tapete de silício azul-escuro, ao lado de
> uma pinça de precisão, chave Torx e parafusos minúsculos organizados. Uma mão
> segura a placa pela borda com luva antiestática. Iluminação de estúdio lateral
> fria com recorte azul elétrico nas trilhas metálicas da placa, fundo azul-marinho
> quase preto desfocado. Profundidade de campo muito rasa com foco nos componentes.
> Estética técnica premium, limpa, alto detalhe. Sem texto, sem logotipos,
> sem rostos.

---

## Depois de gerar

Coloque os três arquivos `.png` na raiz do projeto
(`C:\Users\Admin\Desktop\MGM Source - Landing`) e avise nesta sessão.
Ainda falta a etapa de integração: conversão para WebP, marcação HTML,
CSS responsivo, animações de entrada e verificação nos cinco breakpoints.
