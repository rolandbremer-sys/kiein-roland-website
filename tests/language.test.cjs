const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const code=fs.readFileSync('script.js','utf8');
const keys=[...new Set([...html.matchAll(/data-i="([^"]+)"/g)].map(x=>x[1]))];
const ariaKeys=[...new Set([...html.matchAll(/data-i-aria="([^"]+)"/g)].map(x=>x[1]))];
function page(storage={},browser='cs-CZ',search='') {
 const nodes=keys.map(k=>({dataset:{i:k},textContent:''}));
 const namedNodes=ariaKeys.map(key=>({
  dataset:{iAria:key},
  setAttribute(name,value) {
   assert.equal(name,'aria-label');
   this.label=value;
  },
 }));
 const els={lang:{value:'de',addEventListener(ev,fn){this.change=fn}},
 runDemo:{addEventListener(ev,fn){this.click=fn}},
 scenarioSelect:{value:'door'},demoResult:{textContent:'',dataset:{}},
 year:{textContent:''}};
 const document={documentElement:{lang:'de'},querySelectorAll(selector){return selector==="[data-i-aria]"?namedNodes:nodes},getElementById(id){return els[id]},addEventListener(ev,fn){if(ev==='DOMContentLoaded')this.ready=fn}};
 const localStorage={getItem(k){return storage[k]??null},setItem(k,v){storage[k]=v}};
 const context={document,localStorage,navigator:{language:browser},location:{search},URLSearchParams,Date,console};
 vm.createContext(context);vm.runInContext(code,context);document.ready();
 return {context,document,els,nodes,namedNodes,storage};
}
test('all marked text and accessible names translated in CZ, DE and EN',()=>{
 for(const lang of ['cs','de','en']){
  const p=page({},lang+'-CZ');
  assert.equal(p.document.documentElement.lang,lang);
  assert.equal(p.nodes.length,keys.length);
  assert.ok(p.nodes.every(n=>n.textContent.length>0));
  assert.ok(p.namedNodes.every(n=>n.label.length>0));
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

const pricing = html.match(/<section\b[^>]*\bid="pricing">([\s\S]*?)<\/section>/)[1];

test('approved net EUR prices and recurring intervals are consistent across all language views', () => {
  const approvedPlans = [
    ['test', 2, 'week'],
    ['solo', 20, 'month'],
    ['team-5', 89, 'month'],
    ['team-10', 159, 'month'],
    ['team-20', 289, 'month'],
    ['business-50', 649, 'month'],
    ['owner-start', 29, 'month'],
    ['owner-25', 99, 'month'],
    ['owner-100', 299, 'month'],
    ['owner-250', 599, 'month'],
  ];
  const cards = [...pricing.matchAll(/<article class="price" data-plan="([^"]+)">([\s\S]*?)<\/article>/g)];
  const displayedPlans = cards.map(([, plan, card]) => {
    const [, amount, interval] = card.match(/class="amount">(\d+) € <small data-i="(week|month)">/);
    return [plan, Number(amount), interval];
  });
  assert.deepEqual(displayedPlans, approvedPlans);
  const disclosures = {
    de: [/EUR netto/, /Wochenabo.*jede Woche.*gekündigt/, '/ Woche', '/ Monat'],
    cs: [/EUR bez DPH/, /předplatné.*každý týden.*zrušení/, '/ týden', '/ měsíc'],
    en: [/EUR, exclusive of applicable VAT/, /subscription.*every week.*canceled/, '/ week', '/ month'],
  };
  for (const [language, [tax, renewal, week, month]] of Object.entries(disclosures)) {
    const localized = Object.fromEntries(page({}, language).nodes.map(node => [node.dataset.i, node.textContent]));
    assert.match(localized.pricingText, tax);
    assert.match(localized.testDesc, renewal);
    assert.equal(localized.week, week);
    assert.equal(localized.month, month);
    assert.match(localized.soloDesc, /^1 /);
    assert.match(localized.pricingFine, /50.*250/);
  }
});

test('pricing preview contains no payment links, forms or checkout controls', () => {
  assert.doesNotMatch(pricing, /<(?:a|form|button|iframe)\b/i);
  assert.doesNotMatch(html + code, /buy\.stripe\.com|checkout\.stripe\.com|price_[a-z0-9]+/i);
});

test('preview styles and scripts ship with the page under a GitHub Pages project path', () => {
  const project = new URL('https://example.test/kiein-roland-website/');
  const assets = [...html.matchAll(/(?:<script\s+src|<link rel="stylesheet" href)="([^"]+)"/g)].map(([, asset]) => asset);
  assert.deepEqual(assets, ['styles.css', 'script.js']);
  for (const asset of assets) {
    const url = new URL(asset, project);
    assert.equal(url.href, project.href + asset);
    assert.ok(fs.statSync(asset).isFile());
  }
});
