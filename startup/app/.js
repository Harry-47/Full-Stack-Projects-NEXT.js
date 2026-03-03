// Next.js Main Topics Covered So Far ✅
// -------------------------------------
// Introduction & Installation: Next.js kya hai, full-stack power, aur npx create-next-app ke zariye setup kaise karte hain.

// File-Based Routing: Folders ke zariye routes banana (e.g., app/about/page.tsx banta hai /about).

// Special Files:

// page.tsx: Har route ka actual content.

// layout.tsx: Shared UI (Navbar/Footer) jo routes ko wrap karta hai aur persist rehta hai.

// Nested Routes & Layouts: Folders ke andar folders bana kar nesting karna aur section-specific layouts set karna.

// Route Groups (folder-name): Folders ko organize karna bina URL disturb kiye aur multiple layouts (Admin vs User) handle karna.

// Navigation: Link component ka use taake page refresh na ho aur "Single Page Application" wala feel aaye.

// Image Optimization: next/image component ke fayde, jaise automatic resizing, WebP conversion, aur lazy loading.

// Metadata API: Har page ke liye alag Title aur Description set karna SEO ke liye (jo tu ne dynamic title wali baat ki thi).






// VeriFlow Planning✅
// -------------------

// Google Lens sirf identification karta hai (ye kya cheez hai?). VeriFlow verification aur custody pe kaam karega. Lens ye nahi batayega ke ye image AI ne banayi hai ya asli hai, na hi wo us image ka ownership record (Blockchain ya Database hash) check karega. VeriFlow batayega: "Ye image 10 din pehle XYZ user ne upload ki thi, ye original hai aur iska AI score 0% hai."🗺️ VeriFlow: The Master Plan & Folder StructureTu ne jo Route Groups aur Layouts seekhe hain, unko use karte hue ye raha tera blueprint:Plaintextapp/
// ├── (marketing)/          <-- Route Group for Public Pages
// │   ├── layout.tsx        <-- Transparent Navbar & Simple Footer
// │   └── page.tsx          <-- Hero Section (Langing Page)
// ├── (auth)/               <-- Route Group for Login/Signup
// │   ├── layout.tsx        <-- Centered Box Layout (No Navbar)
// │   ├── login/page.tsx
// │   └── signup/page.tsx
// ├── (dashboard)/          <-- Route Group for App Logic
// │   ├── layout.tsx        <-- Dashboard Sidebar + User Header
// │   ├── page.tsx          <-- Overview (Stats of verified assets)
// │   ├── verify/           <-- Main Tool
// │   │   └── page.tsx      <-- File Upload & Results UI
// │   └── history/          <-- Past Verifications
// │       └── page.tsx
// ├── components/           <-- Reusable UI (Buttons, Cards, Inputs)
// ├── lib/                  <-- Helper functions (AI Logic, Utils)
// └── public/               <-- Static Images/Icons


// 📊 Phase-wise Planning (What you can do NOW vs LATER)PhaseTasks (Current Learning)Concept Needed (Future)Phase 1: SkeletonFolder structure banana, Route Groups set karna, layout.tsx aur page.tsx ka logic connect karna.Done. Tu ye abhi kar sakta hai.Phase 2: Static UILanding page design karna, Navbar/Sidebar banana, next/image se assets lagana, next/link se navigation.Done. Tu ye abhi kar sakta hai.Phase 3: AuthLogin/Signup pages ki UI banana.Server Actions & Middleware (Authorization ke liye).Phase 4: LogicFile upload ki UI (Drag & Drop box).Client vs Server Components (Interactivity ke liye).Phase 5: DataVerified assets ko list mein dikhana.Data Fetching (Async/Await) & Database (MongoDB).🔥 VeriFlow: Future-Proof Features (Khaas Cheezain)AI Ghost-Marking: User jab file upload karega, hum backend pe AI detection API (like Hive ya OpenAI) se check karwayenge.Asset Fingerprinting: Har upload ki aik unique hash generate hogi. Agar koi wahi image dobara upload karega, system bolay ga "Already exists!".Trust Certificate: Verification ke baad aik downloadable PDF ya Image card (Certificate) jo user social media pe share kar sake.Bulk Scanner: Aik sath 10 links ya images scan karna.🛠️ Tera Start Point (Kal ke liye)Tu abhi Phase 1 aur 2 ke liye bilkul tayyar hai. Tuje kisi naye concept ki zaroorat nahi hai in ka structure khara karne ke liye.Kal tu ne kya karna hai:Next.js v15 project initialize kar.Uper wala folder structure bana (Route Groups ke sath).Marketing aur Dashboard ke liye do alag layouts likh.
