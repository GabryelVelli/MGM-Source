const {chromium}=require('C:/Users/Admin/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs=require('node:fs');
const {pathToFileURL}=require('node:url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const errors=[];const results=[];
 const page=await browser.newPage({colorScheme:'dark'});
 page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:900});
  await page.goto(pathToFileURL(__dirname+'/index.html').href);
  await page.evaluate(()=>document.fonts.ready);
  for(const tab of await page.getByRole('tab').all()){
   await tab.click();
   const panel=page.getByRole('tabpanel');
   await panel.locator('img').evaluate(i=>i.decode());
   if(await panel.count()!==1)throw Error('Multiple active panels');
  }
  await page.getByRole('tab',{name:'Celulares'}).click();
  await page.getByRole('tab',{name:'Celulares'}).press('ArrowRight');
  if(await page.getByRole('tab',{name:'Videogames'}).getAttribute('aria-selected')!=='true')throw Error('Keyboard tabs');
  await page.getByRole('tab',{name:'Videogames'}).press('Home');
  for(const img of await page.locator('img:visible').all()){
   await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());
  }
  if(width<768){
   await page.locator('.mobile-menu summary').click();
   await page.getByRole('navigation',{name:'Navegação móvel'}).getByRole('link',{name:'Produtos'}).click();
   if(await page.locator('.mobile-menu').evaluate(e=>e.open))throw Error('Menu link close');
   await page.locator('.mobile-menu summary').click();await page.keyboard.press('Escape');
   if(await page.locator('.mobile-menu').evaluate(e=>e.open))throw Error('Menu Escape');
  }
  await page.locator('.faq-list summary').first().click();
  if(!await page.locator('.faq-list details').first().evaluate(e=>e.open))throw Error('FAQ');
  await page.locator('.faq-list summary').first().click();
  await page.locator('.review-track').scrollIntoViewIfNeeded();
  await page.locator('.review-next').click();await page.waitForTimeout(650);
  if(await page.locator('.review-track').evaluate(e=>e.scrollLeft)<50)throw Error('Carousel');
  await page.locator('.review-prev').click();await page.waitForTimeout(650);
  const state=await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),whatsapp:[...document.querySelectorAll('a[href*="wa.me"]')].every(a=>new URL(a.href).pathname==='/5511970538937'),images:[...document.images].every(i=>i.complete&&i.naturalWidth>0),font:document.fonts.check('16px Outfit')}));
  if(state.overflow||state.brokenAnchors.length||!state.whatsapp||!state.images||!state.font)throw Error(JSON.stringify(state));
  await page.evaluate(()=>{document.querySelectorAll('[data-reveal]').forEach(e=>e.classList.add('is-visible'));scrollTo({top:0,behavior:'instant'})});
  await page.waitForTimeout(1100);
  await page.screenshot({path:__dirname+'/preview-'+width+'.png',fullPage:true});
  results.push(state);
 }
 await page.setViewportSize({width:1440,height:1000});
 await page.getByRole('button',{name:'Ativar tema claro'}).click();
 await page.screenshot({path:__dirname+'/preview-light.png',fullPage:true});
 await page.reload();
 if(await page.locator('html').getAttribute('data-theme')!=='light')throw Error('Theme persistence');
 await page.getByRole('button',{name:'Ativar tema escuro'}).click();
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.reload();
 const reduced=await page.evaluate(()=>({animations:document.getAnimations().length,hidden:[...document.querySelectorAll('[data-reveal]')].filter(e=>getComputedStyle(e).opacity==='0').length}));
 if(reduced.animations||reduced.hidden)throw Error(JSON.stringify(reduced));
 await page.getByRole('tab',{name:'Videogames'}).click();
 if(await page.evaluate(()=>document.getAnimations().length))throw Error('Reduced motion category transition');
 await browser.close();
 if(errors.length)throw Error(errors.join('\n'));
 fs.writeFileSync(__dirname+'/verification.json',JSON.stringify({errors,results,reduced},null,2));
 console.log('PASS: 5 widths, all images, font, anchors, WhatsApp, category tabs and keyboard, FAQ, mobile menu, carousel, theme persistence, reduced motion.');
})().catch(e=>{console.error(e);process.exitCode=1;});
