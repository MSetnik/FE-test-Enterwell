# Quiz Maker – Enterwell Frontend Zadatak

Ova aplikacija je rješenje za frontend zadatak tvrtke Enterwell. Cilj je bio razviti jednostavnu **Quiz Maker** aplikaciju u modernom JavaScript frameworku (React) koja omogućuje stvaranje, uređivanje, pregled, brisanje i rješavanje kvizova.

---

## 📦 Tehnologije korištene

- **Node v20.18.1**
- **React 19**
- **React Router v6**
- **TypeScript**
- **Bootstrap** 
- **Mockirani podaci**

---
## Struktura fileova
```
src/
├── components/
│   ├── atoms
│   ├── molecules
│   ├── organisms
├── constants/                ---------> mock baze
├── endpoints/
├── helpers/
├── interfaces/
├── pages/
│   ├── pageName/
├── router/
├── main.css
├── main.tsx
└── vite-env.d.ts
```

---

## 🚀 Pokretanje projekta

1. Pokreni projekt:
```bash
cd quizMaker && npm run dev
```



## 📚 Funkcionalnosti
1. ✅ Pregled svih kvizova 
    - Popis svih kreiranih kvizova u tabličnom prikazu
    - Akcije po kvizu: Uredi, Obriši, Riješi kviz
    - Stvaranje novog kviza
    - Unos naziva kviza
    - Dodavanje proizvoljnog broja pitanja (tekst pitanja + tekst odgovora)
    - Recikliranje pitanja iz prethodnih kvizova

2. ✏️ Uređivanje kviza
    - Promjena naziva kviza
    - Dodavanje, uređivanje i uklanjanje pitanja


3. 🗑️ Brisanje kviza
    - Kviz se uklanja iz liste, ali njegova pitanja ostaju dostupna za reciklažu

4. 🧠 “Rješavanje” kviza
    - Slideshow forma prikaza pitanja
    - Gumb za otkrivanje odgovora po svakom pitanju



