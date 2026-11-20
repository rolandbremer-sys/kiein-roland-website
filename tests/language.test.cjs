const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const code=fs.readFileSync('script.js','utf8');
const keys=[...new Set([...html.matchAll(/data-i="([^"]+)"/g)].map(x=>x[1]))];
function page(storage={},browser='cs-CZ',search='') {
 const nodes=keys.map(k=>({dataset:{i:k},textContent:''}));
 const els={lang:{value:'de',addEventListener(ev,fn){this.change=fn}},
 runDemo:{addEventListener(ev,fn){this.click=fn}},
 scenarioSelect:{value:'door'},demoResult:{textContent:'',dataset:{}},
 year:{textContent:''}};
 const document={documentElement:{lang:'de'},querySelectorAll(){return nodes},getElementById(id){return els[id]},addEventListener(ev,fn){if(ev==='DOMContentLoaded')this.ready=fn}};
 const localStorage={getItem(k){return storage[k]??null},setItem(k,v){storage[k]=v}};
 const context={document,localStorage,navigator:{language:browser},location:{search},URLSearchParams,Date,console};
 vm.createContext(context);vm.runInContext(code,context);document.ready();
 return {context,document,els,nodes,storage};
}
test('all 95 visible keys translated in CZ, DE and EN',()=>{
 for(const lang of ['cs','de','en']){
  const p=page({},lang+'-CZ');
  assert.equal(p.document.documentElement.lang,lang);
  assert.equal(p.nodes.length,keys.length);
  assert.ok(p.nodes.every(n=>n.textContent.length>0));
 }
});
test('Czech selection persists across reload even on German browser',()=>{
 const storage={};const a=page(storage,'de-DE');
 a.els.lang.value='cs';a.els.lang.change();
 const b=page(storage,'de-DE');
 assert.equal(b.document.documentElement.lang,'cs');
 assert.equal(b.els.lang.value,'cs');
});
test('language switch translates simulated result and does not reset to German',()=>{
 const p=page({},'cs-CZ');p.els.runDemo.click();
 assert.match(p.els.demoResult.textContent,/Událost/);
 p.els.lang.value='en';p.els.lang.change();
 assert.match(p.els.demoResult.textContent,/Door event/);
 p.els.lang.value='cs';p.els.lang.change();
 assert.match(p.els.demoResult.textContent,/Událost/);
});
test('unsupported stored language never changes to German unexpectedly',()=>{
 const p=page({'kiein-roland-language-v1':'xx'},'cs-CZ');
 assert.equal(p.document.documentElement.lang,'cs');
});
test('storage denied does not crash',()=>{
 const p=page({},'cs-CZ');
 Object.defineProperty(p.context,'localStorage',{value:{getItem(){throw Error('denied')},setItem(){throw Error('denied')}}});
 assert.doesNotThrow(()=>vm.runInContext("setLanguage('cs')",p.context));
});
test('invalid change cannot override selected language',()=>{
 const p=page({},'cs-CZ');
 assert.equal(vm.runInContext("setLanguage('ru')",p.context),false);
 assert.equal(p.document.documentElement.lang,'cs');
});
