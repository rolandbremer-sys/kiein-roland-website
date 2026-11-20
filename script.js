"use strict";
// Public preview only: no production identity, payments, telemetry or live equipment.
const copy = {
  de: {navFeatures:"Funktionen",navDemo:"Demo",navPrices:"Preise",navTrust:"Vertrauen",tryDemo:"Demo testen",previewBadge:"ÖFFENTLICHE VORSCHAU · SIMULIERTE DATEN",heroTitle:"Technik verstehen. Sicherer entscheiden.",heroText:"Digitale Unterstützung für Aufzugsmonteure, Servicefirmen und Betreiber. Herstellerübergreifend entwickelt.",exploreDemo:"Kostenlose Demo ansehen",discover:"Funktionen entdecken",featuresTitle:"Werkzeuge, die den Arbeitsalltag verstehen.",demoTitle:"Nicht nur erzählen. Zeigen.",demoText:"Ein vollständig simulierter Ablauf ohne Verbindung zu realen Anlagen.",pricingTitle:"Klare Preise. Keine Überraschungen.",pricingText:"Geplante Tarife. Buchung erst nach Produktfreigabe.",notAvailable:"Noch nicht buchbar",notAvailable2:"Noch nicht buchbar",run:"Simulierte Prüfung starten",demoPlaceholder:"Wählen Sie ein Ereignis und starten Sie die Prüfung."},
  en: {navFeatures:"Features",navDemo:"Demo",navPrices:"Pricing",navTrust:"Trust",tryDemo:"Try demo",previewBadge:"PUBLIC PREVIEW · SYNTHETIC DATA",heroTitle:"Understand technology. Make safer decisions.",heroText:"Digital support for elevator technicians, service companies and operators, designed across manufacturers.",exploreDemo:"View free demo",discover:"Discover features",featuresTitle:"Tools built for everyday fieldwork.",demoTitle:"Show, don't just tell.",demoText:"A fully simulated workflow with no connection to real equipment.",pricingTitle:"Clear prices. No surprises.",pricingText:"Planned pricing. Booking available only after product release.",notAvailable:"Not yet available",notAvailable2:"Not yet available",run:"Run simulated check",demoPlaceholder:"Choose an event and start the check."},
  cs: {navFeatures:"Funkce",navDemo:"Ukázka",navPrices:"Ceny",navTrust:"Důvěra",tryDemo:"Vyzkoušet ukázku",previewBadge:"VEŘEJNÁ UKÁZKA · SIMULOVANÁ DATA",heroTitle:"Rozumět technice. Rozhodovat bezpečněji.",heroText:"Digitální podpora pro výtahové techniky, servisní firmy a provozovatele napříč výrobci.",exploreDemo:"Zobrazit bezplatnou ukázku",discover:"Prozkoumat funkce",featuresTitle:"Nástroje pro každodenní práci.",demoTitle:"Nejen vyprávět. Ukázat.",demoText:"Plně simulovaný postup bez připojení ke skutečnému zařízení.",pricingTitle:"Jasné ceny. Žádná překvapení.",pricingText:"Plánované ceny. Objednávky až po schválení produktu.",notAvailable:"Zatím nelze objednat",notAvailable2:"Zatím nelze objednat",run:"Spustit simulovanou kontrolu",demoPlaceholder:"Vyberte událost a spusťte kontrolu."}
};
const outcomes = {
  de:{door:"Türmeldung: Beobachtung erfasst. Ursache nicht bestätigt. Anlagenidentität und zugelassene Dokumentation müssen vor jeder realen Diagnose geprüft werden.",stale:"Veraltete Informationen: Kein belastbarer Diagnosehinweis möglich. Aktuelle, verifizierte Daten erforderlich.",identity:"Steuerungsrevision unbekannt: STOP. Kein Schaltplan- oder Diagnosehinweis ohne eindeutige Identität.",normal:"Simulierter Status erfasst. Dies ist kein Nachweis eines sicheren Betriebs."},
  en:{door:"Door event recorded. Cause unverified. Verify equipment identity and approved documentation before any real diagnosis.",stale:"Outdated information. No reliable diagnosis possible without current verified evidence.",identity:"Unknown controller revision: STOP. No diagram or diagnostic instruction without verified identity.",normal:"Simulated status recorded. This does not establish safe operation."},
  cs:{door:"Událost dveří zaznamenána. Příčina nepotvrzena. Před skutečnou diagnostikou ověřte identitu zařízení a dokumentaci.",stale:"Zastaralé informace. Bez aktuálních ověřených podkladů nelze stanovit diagnózu.",identity:"Neznámá revize řízení: STOP. Bez ověřené identity nelze poskytovat pokyny.",normal:"Simulovaný stav zaznamenán. Nejde o potvrzení bezpečného provozu."}
};
function setLanguage(lang) {
  const l=copy[lang]?lang:"de";
  document.documentElement.lang=l;
  document.querySelectorAll("[data-i]").forEach(el=>{
    const value=copy[l][el.dataset.i];
    if(value!==undefined) el.textContent=value;
  });
  const picker=document.getElementById("lang");
  if(picker) picker.value=l;
}
document.addEventListener("DOMContentLoaded",()=>{
  const picker=document.getElementById("lang");
  if(picker){picker.addEventListener("change",()=>setLanguage(picker.value));setLanguage(picker.value);}
  const run=document.getElementById("runDemo");
  if(run)run.addEventListener("click",()=>{
    const lang=document.documentElement.lang;
    const event=document.getElementById("scenarioSelect").value;
    document.getElementById("demoResult").textContent=(outcomes[lang]||outcomes.de)[event]||outcomes.de.identity;
  });
  const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
});
