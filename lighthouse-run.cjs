const {chromium}=require('C:/Users/Admin/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--remote-debugging-port=9225']});
 try {
  const {default:lighthouse}=await import('file:///C:/Users/Admin/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/index.js');
  const result=await lighthouse('http://127.0.0.1:4178',{port:9225,output:'json',logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo']});
  fs.writeFileSync(__dirname+'/lighthouse.json',result.report);
  console.log(JSON.stringify(Object.fromEntries(Object.entries(result.lhr.categories).map(([key,value])=>[key,value.score*100]))));
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
