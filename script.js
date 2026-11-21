"use strict";
// Public preview only: no production identity, payments, telemetry or live equipment.
const copy = {
  de: {navFeatures:"Funktionen",navDemo:"Demo",navPrices:"Preise",navTrust:"Vertrauen",tryDemo:"Demo testen",previewBadge:"ÖFFENTLICHE VORSCHAU · SIMULIERTE DATEN",heroTitle:"Technik verstehen. Sicherer entscheiden.",heroText:"Digitale Unterstützung für Aufzugsmonteure, Servicefirmen und Betreiber. Herstellerübergreifend entwickelt.",exploreDemo:"Kostenlose Demo ansehen",discover:"Funktionen entdecken",featuresTitle:"Werkzeuge, die den Arbeitsalltag verstehen.",demoTitle:"Nicht nur erzählen. Zeigen.",demoText:"Ein vollständig simulierter Ablauf ohne Verbindung zu realen Anlagen.",run:"Simulierte Prüfung starten",demoPlaceholder:"Wählen Sie ein Ereignis und starten Sie die Prüfung."},
  en: {navFeatures:"Features",navDemo:"Demo",navPrices:"Pricing",navTrust:"Trust",tryDemo:"Try demo",previewBadge:"PUBLIC PREVIEW · SYNTHETIC DATA",heroTitle:"Understand technology. Make safer decisions.",heroText:"Digital support for elevator technicians, service companies and operators, designed across manufacturers.",exploreDemo:"View free demo",discover:"Discover features",featuresTitle:"Tools built for everyday fieldwork.",demoTitle:"Show, don't just tell.",demoText:"A fully simulated workflow with no connection to real equipment.",run:"Run simulated check",demoPlaceholder:"Choose an event and start the check."},
  cs: {navFeatures:"Funkce",navDemo:"Ukázka",navPrices:"Ceny",navTrust:"Důvěra",tryDemo:"Vyzkoušet ukázku",previewBadge:"VEŘEJNÁ UKÁZKA · SIMULOVANÁ DATA",heroTitle:"Rozumět technice. Rozhodovat bezpečněji.",heroText:"Digitální podpora pro výtahové techniky, servisní firmy a provozovatele napříč výrobci.",exploreDemo:"Zobrazit bezplatnou ukázku",discover:"Prozkoumat funkce",featuresTitle:"Nástroje pro každodenní práci.",demoTitle:"Nejen vyprávět. Ukázat.",demoText:"Plně simulovaný postup bez připojení ke skutečnému zařízení.",run:"Spustit simulovanou kontrolu",demoPlaceholder:"Vyberte událost a spusťte kontrolu."}
};

/* Complete translation coverage for all public data-i labels. */
Object.assign(copy.de, {offline:"Offline-Konzept",neutral:"Herstellerneutral",transparent:"Transparenter Status",mockAsset:"Anlagenübersicht",demoData:"DEMODATEN",demoBuilding:"Mustergebäude · 5 Haltestellen",notVerified:"NICHT VERIFIZIERT",controller:"Steuerung",connection:"Verbindung",evidence:"Evidenz",mockEvent1:"Türmeldung empfangen",mockEvent1Sub:"Beobachtung – Ursache nicht bestätigt",mockEvent2:"Anlagenidentität prüfen",mockEvent2Sub:"Freigabe erst nach Abgleich",mockEvent3:"Offline-Protokoll",mockEvent3Sub:"Lokal gespeicherter Testdatensatz",mockFoot:"Konzeptdarstellung – keine Verbindung zu einer echten Aufzugsanlage",strip1:"Gebaut für die Praxis",strip2:"Sicherheit vor Automatisierung",strip3:"Wissen mit Herkunftsnachweis",forEveryone:"EINE PLATTFORM. DREI PERSPEKTIVEN.",featuresText:"Die richtigen Informationen zum richtigen Zeitpunkt.",techTitle:"Für Monteure",techText:"Strukturierte Aufnahme von Anlagen, Wartung und Störungen. Beobachtungen bleiben von Vermutungen getrennt.",techFoot:"Feldarbeit & Diagnose",firmTitle:"Für Servicefirmen",firmText:"Einheitliche Abläufe und nachvollziehbare Berichte für Teams.",firmFoot:"Teams & Serviceprozesse",ownerTitle:"Für Betreiber",ownerText:"Anlagenübersicht, Wartungstermine und verständliche Statusmeldungen.",ownerFoot:"Portfolio & Transparenz",interactive:"INTERAKTIVE VORSCHAU",noticeTitle:"Wichtiger Hinweis",noticeText:"Nur simulierte Abläufe. Keine sichere Arbeitsanweisung.",scenario:"TESTSZENARIO",demoScenario:"Türmeldung · DEMO-LIFT-001",choose:"Simuliertes Ereignis auswählen",optDoor:"Türmeldung",optStale:"Veraltete Daten",optIdentity:"Unbekannte Steuerungsrevision",optNormal:"Statusmeldung",demoDisclaimer:"Keine Diagnose realer Anlagen. Keine Verbindung zu Steuerungen.",responsible:"VERANTWORTUNG IST EIN FEATURE",trustTitle:"Vertrauen entsteht durch überprüfbare Arbeit.",trustText:"Sicherheit, Quellen und Zuständigkeiten gehen vor schnellen Antworten.",point1:"Sicherheitsgrenzen",point1Text:"Keine automatischen Eingriffe in reale Sicherheitskreise.",point2:"Nachvollziehbare Daten",point2Text:"Herkunft, Zeitstempel und Unsicherheiten bleiben erkennbar.",point3:"Ehrlicher Entwicklungsstatus",point3Text:"Testlabor ist keine Produktfreigabe.",human:"TECHNIK. BUSINESS. MENSCH.",ctaTitle:"Gute Technik soll Menschen helfen.",ctaText:"Ein Werkzeug für Menschen, die Verantwortung tragen.",ctaButton:"Simulierte Demo ausprobieren",footerText:"Produktvorschau in Entwicklung. Keine zugelassene Sicherheits- oder Diagnoseanwendung.",footerLinks:"Informationen",navFeatures2:"Funktionen",navDemo2:"Demo",navPrices2:"Preise",legal:"Rechtliches",legalPending:"Impressum, Datenschutz und Vertragsbedingungen vor Verkaufsstart ergänzen.",footerStatus:"Öffentliche Vorschau"});
Object.assign(copy.en, {offline:"Offline-first concept",neutral:"Manufacturer-independent",transparent:"Transparent status",mockAsset:"Equipment overview",demoData:"DEMO DATA",demoBuilding:"Sample building · 5 stops",notVerified:"NOT VERIFIED",controller:"Controller",connection:"Connection",evidence:"Evidence",mockEvent1:"Door event received",mockEvent1Sub:"Observation – cause unverified",mockEvent2:"Verify equipment identity",mockEvent2Sub:"Approval only after verification",mockEvent3:"Offline report",mockEvent3Sub:"Locally saved test record",mockFoot:"Concept only – not connected to a real elevator",strip1:"Built for fieldwork",strip2:"Safety before automation",strip3:"Knowledge with traceable sources",forEveryone:"ONE PLATFORM. THREE PERSPECTIVES.",featuresText:"The right information at the right time.",techTitle:"For technicians",techText:"Structured equipment, maintenance and fault reporting. Observations remain distinct from assumptions.",techFoot:"Fieldwork & diagnosis",firmTitle:"For service companies",firmText:"Consistent workflows and traceable team reports.",firmFoot:"Teams & service workflows",ownerTitle:"For operators",ownerText:"Equipment overview, maintenance dates and clear status updates.",ownerFoot:"Portfolio & transparency",interactive:"INTERACTIVE PREVIEW",noticeTitle:"Important notice",noticeText:"Simulated workflows only. Not a safe work instruction.",scenario:"TEST SCENARIO",demoScenario:"Door event · DEMO-LIFT-001",choose:"Choose a simulated event",optDoor:"Door event",optStale:"Outdated data",optIdentity:"Unknown controller revision",optNormal:"Status update",demoDisclaimer:"No diagnosis of real equipment. No controller connection.",responsible:"RESPONSIBILITY IS A FEATURE",trustTitle:"Trust comes from verifiable work.",trustText:"Safety, sources and accountability come before quick answers.",point1:"Safety boundaries",point1Text:"No automatic intervention in real safety circuits.",point2:"Traceable data",point2Text:"Sources, timestamps and uncertainty remain visible.",point3:"Honest development status",point3Text:"Laboratory testing is not product approval.",human:"TECHNOLOGY. BUSINESS. PEOPLE.",ctaTitle:"Good technology should help people.",ctaText:"A tool for people who take responsibility.",ctaButton:"Try the simulated demo",footerText:"Product preview in development. Not an approved safety or diagnostic application.",footerLinks:"Information",navFeatures2:"Features",navDemo2:"Demo",navPrices2:"Pricing",legal:"Legal",legalPending:"Legal notice, privacy policy and terms must be completed before sales.",footerStatus:"Public preview"});
Object.assign(copy.cs, {offline:"Koncept offline provozu",neutral:"Nezávislé na výrobci",transparent:"Transparentní stav",mockAsset:"Přehled zařízení",demoData:"DEMO ÚDAJE",demoBuilding:"Ukázková budova · 5 stanic",notVerified:"NEOVĚŘENO",controller:"Řídicí systém",connection:"Připojení",evidence:"Podklady",mockEvent1:"Přijata událost dveří",mockEvent1Sub:"Pozorování – příčina nepotvrzena",mockEvent2:"Ověřit identitu zařízení",mockEvent2Sub:"Schválení až po ověření",mockEvent3:"Offline protokol",mockEvent3Sub:"Lokálně uložený testovací záznam",mockFoot:"Pouze koncept – bez spojení se skutečným výtahem",strip1:"Vytvořeno pro praxi",strip2:"Bezpečnost před automatizací",strip3:"Znalosti s dohledatelným zdrojem",forEveryone:"JEDNA PLATFORMA. TŘI POHLEDY.",featuresText:"Správné informace ve správný čas.",techTitle:"Pro techniky",techText:"Strukturované záznamy o zařízení, údržbě a poruchách. Pozorování jsou oddělena od domněnek.",techFoot:"Terénní práce a diagnostika",firmTitle:"Pro servisní firmy",firmText:"Jednotné postupy a dohledatelné týmové zprávy.",firmFoot:"Týmy a servisní procesy",ownerTitle:"Pro provozovatele",ownerText:"Přehled zařízení, termíny údržby a srozumitelné informace o stavu.",ownerFoot:"Portfolio a přehlednost",interactive:"INTERAKTIVNÍ UKÁZKA",noticeTitle:"Důležité upozornění",noticeText:"Pouze simulované postupy. Nejde o bezpečný pracovní návod.",scenario:"TESTOVACÍ SCÉNÁŘ",demoScenario:"Událost dveří · DEMO-LIFT-001",choose:"Vyberte simulovanou událost",optDoor:"Událost dveří",optStale:"Zastaralé údaje",optIdentity:"Neznámá revize řízení",optNormal:"Stavové hlášení",demoDisclaimer:"Žádná diagnostika skutečných zařízení. Bez spojení s řízením.",responsible:"ODPOVĚDNOST JE FUNKCE",trustTitle:"Důvěra vzniká ověřitelnou prací.",trustText:"Bezpečnost, zdroje a odpovědnost mají přednost před rychlými odpověďmi.",point1:"Bezpečnostní hranice",point1Text:"Žádné automatické zásahy do skutečných bezpečnostních obvodů.",point2:"Dohledatelná data",point2Text:"Zdroje, časové údaje a nejistoty zůstávají viditelné.",point3:"Poctivý stav vývoje",point3Text:"Laboratorní test není schválení produktu.",human:"TECHNIKA. BUSINESS. LIDÉ.",ctaTitle:"Dobrá technika má pomáhat lidem.",ctaText:"Nástroj pro lidi, kteří nesou odpovědnost.",ctaButton:"Vyzkoušet simulovanou ukázku",footerText:"Produktová ukázka ve vývoji. Nejde o schválenou bezpečnostní ani diagnostickou aplikaci.",footerLinks:"Informace",navFeatures2:"Funkce",navDemo2:"Ukázka",navPrices2:"Ceny",legal:"Právní informace",legalPending:"Před zahájením prodeje je nutné doplnit identifikační údaje, ochranu soukromí a podmínky.",footerStatus:"Veřejná ukázka"});

Object.assign(copy.de, {
  pricingTitle: "Tarife",
  pricingText: "Alle Preise in EUR netto, zuzüglich gegebenenfalls anfallender Umsatzsteuer. Buchung erst nach Produktfreigabe.",
  servicePricing: "Für Monteure und Servicefirmen",
  operatorPricing: "Für Betreiber und Hausverwaltungen",
  pricingFine: "Enterprise-Tarife für mehr als 50 Monteure und Portfolios mit mehr als 250 Aufzügen auf Anfrage.",
  testPlan: "Testzugang",
  week: "/ Woche",
  month: "/ Monat",
  testDesc: "Das Wochenabo verlängert sich jede Woche, bis es gekündigt wird.",
  soloDesc: "1 benannter Monteur mit einem Konto für Handy und Laptop.",
  team5Desc: "Bis zu 5 benannte Monteure.",
  team10Desc: "Bis zu 10 benannte Monteure.",
  team20Desc: "Bis zu 20 benannte Monteure.",
  business50Desc: "Bis zu 50 benannte Monteure.",
  ownerStartDesc: "Bis zu 5 Aufzüge.",
  owner25Desc: "Bis zu 25 Aufzüge.",
  owner100Desc: "Bis zu 100 Aufzüge.",
  owner250Desc: "Bis zu 250 Aufzüge.",
});
Object.assign(copy.cs, {
  pricingTitle: "Tarify",
  pricingText: "Všechny ceny jsou v EUR bez DPH. Objednávky budou možné po schválení produktu.",
  servicePricing: "Pro techniky a servisní firmy",
  operatorPricing: "Pro provozovatele a správce budov",
  testPlan: "Zkušební přístup",
  week: "/ týden",
  month: "/ měsíc",
  testDesc: "Týdenní předplatné se obnovuje každý týden až do zrušení.",
  soloDesc: "1 jmenovaný technik s jedním účtem pro telefon i notebook.",
  team5Desc: "Až 5 jmenovaných techniků.",
  team10Desc: "Až 10 jmenovaných techniků.",
  team20Desc: "Až 20 jmenovaných techniků.",
  business50Desc: "Až 50 jmenovaných techniků.",
  ownerStartDesc: "Až 5 výtahů.",
  owner25Desc: "Až 25 výtahů.",
  owner100Desc: "Až 100 výtahů.",
  owner250Desc: "Až 250 výtahů.",
  pricingFine: "Podnikové tarify pro více než 50 techniků a portfolia s více než 250 výtahy na vyžádání.",
});
Object.assign(copy.en, {
  pricingTitle: "Plans and pricing",
  pricingText: "All prices are in EUR, exclusive of applicable VAT. Booking will open after product approval.",
  servicePricing: "For technicians and service companies",
  operatorPricing: "For operators and property managers",
  testPlan: "Trial access",
  week: "/ week",
  month: "/ month",
  testDesc: "The weekly subscription renews every week until canceled.",
  soloDesc: "1 named technician with one account for a phone and laptop.",
  team5Desc: "Up to 5 named technicians.",
  team10Desc: "Up to 10 named technicians.",
  team20Desc: "Up to 20 named technicians.",
  business50Desc: "Up to 50 named technicians.",
  ownerStartDesc: "Up to 5 elevators.",
  owner25Desc: "Up to 25 elevators.",
  owner100Desc: "Up to 100 elevators.",
  owner250Desc: "Up to 250 elevators.",
  pricingFine: "Enterprise plans for over 50 technicians and portfolios of over 250 elevators are available on request.",
});

const outcomes = {
  de:{door:"Türmeldung: Beobachtung erfasst. Ursache nicht bestätigt. Anlagenidentität und zugelassene Dokumentation müssen vor jeder realen Diagnose geprüft werden.",stale:"Veraltete Informationen: Kein belastbarer Diagnosehinweis möglich. Aktuelle, verifizierte Daten erforderlich.",identity:"Steuerungsrevision unbekannt: STOP. Kein Schaltplan- oder Diagnosehinweis ohne eindeutige Identität.",normal:"Simulierter Status erfasst. Dies ist kein Nachweis eines sicheren Betriebs."},
  en:{door:"Door event recorded. Cause unverified. Verify equipment identity and approved documentation before any real diagnosis.",stale:"Outdated information. No reliable diagnosis possible without current verified evidence.",identity:"Unknown controller revision: STOP. No diagram or diagnostic instruction without verified identity.",normal:"Simulated status recorded. This does not establish safe operation."},
  cs:{door:"Událost dveří zaznamenána. Příčina nepotvrzena. Před skutečnou diagnostikou ověřte identitu zařízení a dokumentaci.",stale:"Zastaralé informace. Bez aktuálních ověřených podkladů nelze stanovit diagnózu.",identity:"Neznámá revize řízení: STOP. Bez ověřené identity nelze poskytovat pokyny.",normal:"Simulovaný stav zaznamenán. Nejde o potvrzení bezpečného provozu."}
};
const LANGUAGE_KEY="kiein-roland-language-v1";
function selectedLanguage() {
  try {
    const stored=localStorage.getItem(LANGUAGE_KEY);
    if(stored && Object.prototype.hasOwnProperty.call(copy,stored)) return stored;
  } catch (_) { /* storage disabled: retain in-page language */ }
  const query=new URLSearchParams(location.search).get("lang");
  if(query && Object.prototype.hasOwnProperty.call(copy,query)) return query;
  const browser=(navigator.language||"").toLowerCase().split("-")[0];
  return Object.prototype.hasOwnProperty.call(copy,browser)?browser:"en";
}
function setLanguage(lang) {
  if(!Object.prototype.hasOwnProperty.call(copy,lang)) return false;
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i]").forEach(el=>{
    const value=copy[lang][el.dataset.i];
    if(value===undefined) throw new Error("Missing translation "+lang+":"+el.dataset.i);
    el.textContent=value;
  });
  const picker=document.getElementById("lang");
  if(picker) picker.value=lang;
  try { localStorage.setItem(LANGUAGE_KEY,lang); } catch (_) { /* private mode */ }
  const result=document.getElementById("demoResult");
  if(result && result.dataset.scenario) {
    result.textContent=outcomes[lang][result.dataset.scenario];
  }
  return true;
}
document.addEventListener("DOMContentLoaded",()=>{
  const picker=document.getElementById("lang");
  if(picker) picker.addEventListener("change",()=>setLanguage(picker.value));
  setLanguage(selectedLanguage());
  const run=document.getElementById("runDemo");
  if(run) run.addEventListener("click",()=>{
    const lang=document.documentElement.lang;
    const scenario=document.getElementById("scenarioSelect").value;
    const result=document.getElementById("demoResult");
    result.dataset.scenario=scenario;
    result.textContent=outcomes[lang][scenario]||outcomes[lang].identity;
  });
  const year=document.getElementById("year");
  if(year) year.textContent=String(new Date().getFullYear());
});
