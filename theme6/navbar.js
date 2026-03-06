// // Navbar Component - Reusable Navigation Bar
// (function() {
//     'use strict';

//     // Navbar CSS Styles
//     const navbarStyles = `
//         <style id="navbar-styles">
//         nav {
//             position: fixed;
//             width: 100%;
//             padding: 25px 8%;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             z-index: 1000;
//             background: rgba(10, 10, 10, 0.9);
//             backdrop-filter: blur(20px);
//             box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .logo-wrap {
//             display: flex;
//             align-items: center;
//             gap: 12px;
//         }

//         .logo-badge {
//             width: 48px;
//             height: 48px;
//             border-radius: 50%;
//             box-shadow: 0 4px 15px rgba(217, 4, 41, 0.4);
//             background: #fff;
//             object-fit: contain;
//         }

//         .logo-info {
//             display: flex;
//             flex-direction: column;
//         }

//         .logo {
//             font-size: 24px;
//             font-weight: 900;
//             background: linear-gradient(135deg, #FF5E62 0%, #D90429 100%);
//             -webkit-background-clip: text;
//             background-clip: text;
//             -webkit-text-fill-color: transparent;
//             letter-spacing: -1px;
//         }

//         .logo-tagline {
//             font-size: 10px;
//             color: #aaaaaa;
//             font-weight: 700;
//             text-transform: uppercase;
//             letter-spacing: 1.5px;
//         }

//         .nav-menu {
//             display: flex;
//             gap: 50px;
//             list-style: none;
//             transition: all 0.3s ease;
//         }

//         .nav-menu a {
//             color: #fff;
//             text-decoration: none;
//             font-weight: 600;
//             font-size: 15px;
//             transition: all 0.3s;
//         }

//         .nav-menu a:hover {
//             color: #D90429;
//         }

//         .nav-menu li {
//             position: relative;
//         }

//         .nav-menu .dropdown-trigger-wrapper {
//             cursor: pointer;
//             display: flex;
//             align-items: center;
//             gap: 5px;
//             color: #fff;
//             text-decoration: none;
//             font-weight: 600;
//             font-size: 15px;
//             transition: all 0.3s;
//         }

//         .nav-menu .dropdown-trigger-wrapper:hover {
//             color: #D90429;
//         }

//         .nav-menu .dropdown-trigger-wrapper .dropdown-trigger {
//             color: inherit;
//         }

//         .nav-menu .dropdown-trigger-wrapper::after {
//             content: "▼";
//             font-size: 10px;
//             transition: transform 0.3s;
//         }

//         .nav-menu li:hover .dropdown-trigger-wrapper::after {
//             transform: rotate(180deg);
//         }

//         .dropdown-menu {
//             position: absolute;
//             top: 100%;
//             left: 50%;
//             transform: translateX(-50%);
//             background: #fff;
//             border-radius: 16px;
//             padding: 30px;
//             min-width: 600px;
//             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//             margin-top: 20px;
//             z-index: 999;
//         }

//         .nav-menu li:hover .dropdown-menu {
//             opacity: 1;
//             visibility: visible;
//             margin-top: 15px;
//         }

//         .dropdown-grid {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 25px;
//         }

//         .dropdown-item {
//             display: flex;
//             align-items: flex-start;
//             gap: 15px;
//             padding: 15px;
//             border-radius: 12px;
//             transition: all 0.3s;
//             cursor: pointer;
//             text-decoration: none;
//         }

//         .dropdown-item:hover {
//             background: #f5f5f5;
//             transform: translateY(-3px);
//         }

//         .dropdown-icon {
//             width: 60px;
//             height: 60px;
//             background: linear-gradient(135deg, #D90429 0%, #B20021 100%);
//             border-radius: 12px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 28px;
//             flex-shrink: 0;
//         }

//         .dropdown-content {
//             flex: 1;
//         }

//         .dropdown-content h4 {
//             font-size: 16px;
//             font-weight: 800;
//             color: #000;
//             margin-bottom: 5px;
//             line-height: 1.3;
//         }

//         .dropdown-content p {
//             font-size: 12px;
//             color: #666;
//             line-height: 1.4;
//         }

//         .menu-icon {
//             display: none;
//             font-size: 30px;
//             cursor: pointer;
//             z-index: 1001;
//             color: #D90429;
//         }

//         .menu-icon::before {
//             content: "\\2261";
//             font-size: 30px;
//             display: block;
//             transition: content 0.3s, transform 0.3s;
//         }

//         #menu-toggle {
//             display: none;
//         }

//         @media (max-width: 1024px) {
//             .dropdown-menu {
//                 min-width: 500px;
//             }

//             .dropdown-grid {
//                 grid-template-columns: repeat(2, 1fr);
//             }
//         }

//         @media (max-width: 768px) {
//             nav {
//                 padding: 20px 5%;
//             }

//             .menu-icon {
//                 display: block;
//             }

//             .nav-menu {
//                 position: absolute;
//                 top: 88px;
//                 left: 0;
//                 width: 100%;
//                 flex-direction: column;
//                 background: #111111;
//                 border-top: 1px solid rgba(255, 255, 255, 0.1);
//                 border-bottom-left-radius: 12px;
//                 border-bottom-right-radius: 12px;
//                 padding: 20px 0;
//                 transform: translateY(-150%);
//                 opacity: 0;
//                 pointer-events: none;
//                 gap: 5px;
//                 max-height: calc(100vh - 88px);
//                 overflow-y: auto;
//                 -webkit-overflow-scrolling: touch;
//             }

//             .nav-menu li {
//                 width: 100%;
//                 text-align: center;
//             }

//             .nav-menu a {
//                 display: block;
//                 padding: 12px 20px;
//                 border-radius: 8px;
//                 margin: 0 10px;
//             }

//             .nav-menu a:hover {
//                 background: rgba(217, 4, 41, 0.2);
//             }

//             .nav-menu .dropdown-trigger-wrapper {
//                 display: flex;
//                 align-items: center;
//                 justify-content: space-between;
//                 width: 100%;
//                 padding: 12px 20px;
//                 border-radius: 8px;
//                 margin: 0 10px;
//                 cursor: pointer;
//                 color: #fff;
//                 text-decoration: none;
//                 font-weight: 600;
//                 font-size: 15px;
//             }

//             .nav-menu .dropdown-trigger-wrapper:hover {
//                 background: rgba(217, 4, 41, 0.2);
//             }

//             .nav-menu .dropdown-trigger-wrapper .dropdown-trigger {
//                 flex: 1;
//                 color: #fff;
//             }

//             .nav-menu .dropdown-trigger-wrapper .dropdown-trigger::after {
//                 display: none;
//             }

//             .dropdown-toggle {
//                 display: none;
//             }

//             .dropdown-trigger-wrapper::after {
//                 content: "▼";
//                 font-size: 10px;
//                 transition: transform 0.3s;
//                 color: #fff;
//                 margin-left: 8px;
//                 flex-shrink: 0;
//             }

//             .dropdown-toggle:checked + .dropdown-trigger-wrapper::after {
//                 transform: rotate(180deg);
//             }

//             .dropdown-menu {
//                 position: static;
//                 transform: none;
//                 opacity: 0;
//                 visibility: hidden;
//                 max-height: 0;
//                 margin-top: 0;
//                 margin-left: 20px;
//                 margin-right: 20px;
//                 margin-bottom: 0;
//                 min-width: auto;
//                 padding: 0 20px;
//                 background: #1a1a1a;
//                 border-radius: 12px;
//                 overflow: hidden;
//                 transition: all 0.3s ease;
//             }

//             .dropdown-toggle:checked ~ .dropdown-menu {
//                 opacity: 1;
//                 visibility: visible;
//                 max-height: 400px;
//                 margin-bottom: 10px;
//                 padding: 20px;
//                 overflow-y: auto;
//                 -webkit-overflow-scrolling: touch;
//             }

//             .dropdown-grid {
//                 grid-template-columns: 1fr;
//                 gap: 15px;
//             }

//             .dropdown-item {
//                 padding: 12px;
//                 background: #0a0a0a;
//             }

//             .dropdown-item:hover {
//                 background: rgba(217, 4, 41, 0.2);
//             }

//             .dropdown-content h4 {
//                 color: #fff;
//             }

//             .dropdown-content p {
//                 color: #aaaaaa;
//             }

//             #menu-toggle:checked ~ .nav-menu {
//                 transform: translateY(0);
//                 opacity: 1;
//                 pointer-events: auto;
//             }

//             #menu-toggle:checked ~ .menu-icon::before {
//                 content: "✖";
//                 font-size: 28px;
//                 transform: rotate(90deg);
//             }
//         }
//         </style>
//     `;

//     // Navbar HTML Structure
//     function getNavbarHTML() {
//         const currentPage = window.location.pathname.split('/').pop() || 'index.html';

//         return `
//             <nav>
//                 <div class="logo-wrap">
//                     <img src="logo.png" alt="OM Import Export Logo" class="logo-badge">
//                     <div class="logo-info">
//                         <div class="logo">OM Import Export</div>
//                         <div class="logo-tagline">GPS Tracking</div>
//                     </div>
//                 </div>

//                 <input type="checkbox" id="menu-toggle">

//                 <label for="menu-toggle" class="menu-icon"></label>

//                 <ul class="nav-menu">
//                     <li><a href="index.html" ${currentPage === 'index.html' ? 'style="color: #D90429;"' : ''}>Home</a></li>
//                     <li>
//                         <input type="checkbox" id="services-dropdown-toggle" class="dropdown-toggle">
//                         <label for="services-dropdown-toggle" class="dropdown-trigger-wrapper">
//                             <span class="dropdown-trigger">Our Services</span>
//                         </label>
//                         <div class="dropdown-menu">
//                             <div class="dropdown-grid">
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">🚛</div>
//                                     <div class="dropdown-content">
//                                         <h4>Fleet Management</h4>
//                                         <p>OM IMPORT EXPORT in Fleet Management</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">👥</div>
//                                     <div class="dropdown-content">
//                                         <h4>Field Force Management</h4>
//                                         <p>OM IMPORT EXPORT in Field Force Management</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">🚗</div>
//                                     <div class="dropdown-content">
//                                         <h4>Driver Behavior Management</h4>
//                                         <p>OM IMPORT EXPORT in Driver Behavior Management</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">📦</div>
//                                     <div class="dropdown-content">
//                                         <h4>Asset Tracking</h4>
//                                         <p>OM IMPORT EXPORT in Asset Tracking</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">🚚</div>
//                                     <div class="dropdown-content">
//                                         <h4>Delivery Services</h4>
//                                         <p>OM IMPORT EXPORT in Delivery Services</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">📦</div>
//                                     <div class="dropdown-content">
//                                         <h4>Container Tracking</h4>
//                                         <p>OM IMPORT EXPORT in Container Tracking</p>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <input type="checkbox" id="products-dropdown-toggle" class="dropdown-toggle">
//                         <label for="products-dropdown-toggle" class="dropdown-trigger-wrapper">
//                             <span class="dropdown-trigger">Products</span>
//                         </label>
//                         <div class="dropdown-menu">
//                             <div class="dropdown-grid">
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">📱</div>
//                                     <div class="dropdown-content">
//                                         <h4>GPS Tracking Devices</h4>
//                                         <p>Advanced GPS tracking hardware solutions</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">💻</div>
//                                     <div class="dropdown-content">
//                                         <h4>Tracking Software</h4>
//                                         <p>Comprehensive software platform for fleet management</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">📊</div>
//                                     <div class="dropdown-content">
//                                         <h4>Analytics Dashboard</h4>
//                                         <p>Real-time analytics and reporting tools</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">🔔</div>
//                                     <div class="dropdown-content">
//                                         <h4>Alert Systems</h4>
//                                         <p>Customizable alert and notification systems</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">🗺️</div>
//                                     <div class="dropdown-content">
//                                         <h4>Route Optimization</h4>
//                                         <p>AI-powered route planning and optimization</p>
//                                     </div>
//                                 </a>
//                                 <a href="#" class="dropdown-item">
//                                     <div class="dropdown-icon">📈</div>
//                                     <div class="dropdown-content">
//                                         <h4>Reporting Tools</h4>
//                                         <p>Advanced reporting and metrics tools</p>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </li>
//                     <li><a href="about.html" ${currentPage === 'about.html' ? 'style="color: #D90429;"' : ''}>About</a></li>
//                     <li><a href="contact.html" ${currentPage === 'contact.html' ? 'style="color: #D90429;"' : ''}>Contact</a></li>
//                 </ul>
//             </nav>
//         `;
//     }

//     // Initialize navbar when DOM is ready
//     function initNavbar() {
//         // Inject styles if not already present
//         if (!document.getElementById('navbar-styles')) {
//             document.head.insertAdjacentHTML('beforeend', navbarStyles);
//         }

//         // Remove existing nav if present
//         const existingNav = document.querySelector('nav');
//         if (existingNav) {
//             existingNav.remove();
//         }

//         // Inject navbar HTML at the beginning of body
//         const body = document.body;
//         if (body) {
//             body.insertAdjacentHTML('afterbegin', getNavbarHTML());
//         }
//     }

//     // Run when DOM is ready
//     if (document.readyState === 'loading') {
//         document.addEventListener('DOMContentLoaded', initNavbar);
//     } else {
//         initNavbar();
//     }
// })();

(function () {
  "use strict";

  const navbarStyles = `
          <style id="navbar-styles">
          :root{
              --accent-red: #D90429;
              --nav-bg: rgba(10,10,10,0.9);
          }
  
          /* Prevent page-level horizontal overflow */
          html, body {
              max-width: 100%;
              overflow-x: hidden;
              -webkit-overflow-scrolling: touch;
          }
  
          *{ box-sizing: border-box; }
  
          nav {
              position: fixed;
              width: 100%;
              padding: 25px 8%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              z-index: 1000;
              background: var(--nav-bg);
              backdrop-filter: blur(20px);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }
  
          .logo-wrap { display:flex; align-items:center; gap:12px; }
          .logo-badge { width:48px; height:48px; border-radius:50%; box-shadow:0 4px 15px rgba(217,4,41,0.35); background:#fff; object-fit:contain; }
          .logo { font-size: clamp(18px,1.6vw,24px); font-weight:900; background: linear-gradient(135deg,#FF5E62 0%, #D90429 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; letter-spacing:-1px; }
          .logo-tagline { font-size:10px; color:#aaaaaa; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; }
  
          .nav-menu {
              display:flex;
              gap: 50px;
              list-style:none;
              transition: all .28s ease;
              align-items:center;
          }
  
          .nav-menu a { color:#fff; text-decoration:none; font-weight:600; font-size:15px; transition: color .2s; }
          .nav-menu a:hover { color: var(--accent-red); }
  
          .nav-menu li { position:relative; }
  
          .dropdown-trigger-wrapper {
              cursor: pointer;
              display:flex;
              align-items:center;
              gap: 6px;
              color:#fff;
              font-weight:600;
              font-size:15px;
              transition: color .2s;
              user-select: none;
          }
  
          .dropdown-trigger-wrapper:hover { color: var(--accent-red); }
  
          .dropdown-trigger-wrapper::after {
              content: "▼";
              font-size: 10px;
              transition: transform .28s;
              display:inline-block;
              margin-left:4px;
          }
  
          .nav-menu li.active .dropdown-trigger-wrapper::after,
          .nav-menu li:hover .dropdown-trigger-wrapper::after {
              transform: rotate(180deg);
          }
  
          /* --- Dropdown menu (popover style) --- */
          .dropdown-menu {
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              background: #fff;
              border-radius: 14px;
              padding: 24px;
              min-width: 420px;
              max-width: 95vw;
              width: auto;
              box-shadow: 0 20px 60px rgba(0,0,0,0.28);
              opacity: 0;
              visibility: hidden;
              transition: all .28s ease;
              margin-top: 18px;
              z-index: 999;
              box-sizing: border-box;
              overflow: visible;
          }
  
          .nav-menu li:hover .dropdown-menu,
          .nav-menu li.active .dropdown-menu {
              opacity: 1;
              visibility: visible;
              margin-top: 12px;
          }
  
          /* Responsive content layout inside dropdown (desktop default = horizontal) */
          .dropdown-grid {
              display: flex;
              flex-wrap: wrap;
              gap: 18px;
              align-items: flex-start;
              justify-content: flex-start;
          }
  
          /* flexible items but allow shrink/wrap */
          .dropdown-item {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              padding: 12px;
              border-radius: 10px;
              transition: all .18s;
              text-decoration: none;
              color: inherit;
              flex: 1 1 220px; /* flexible basis; will shrink when needed */
              min-width: 0;   /* enables wrapping inside flex */
              background: transparent;
          }
  
          .dropdown-item:hover { transform: translateY(-4px); background: #f7f7f7; }
  
          .dropdown-icon {
              width: 50px;
              height: 50px;
              background: linear-gradient(135deg,#D90429 0%, #B20021 100%);
              border-radius: 10px;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size: 22px;
              color:#fff;
              flex-shrink: 0;
          }
  
          .dropdown-content { flex: 1 1 auto; min-width: 0; } /* allow text to wrap */
          .dropdown-content h4 {
              font-size: 15px;
              font-weight: 800;
              margin:0 0 6px 0;
              color: #111;
              word-break: break-word;
          }
  
          .dropdown-content p {
              font-size: 13px;
              margin:0;
              color:#666;
              word-break: break-word;
              white-space: normal;
          }
  
          /* --- Mobile and Tablet adjustments --- */
          .menu-icon { display:none; font-size:30px; cursor:pointer; color: var(--accent-red); }
  
          @media (max-width: 1024px) {
              .dropdown-menu { padding: 20px; min-width: 360px; }
              .dropdown-grid { gap: 16px; }
          }
  
          @media (max-width: 768px) {
              nav { padding: 18px 5%; }
              .menu-icon { display:block; }
              .nav-menu {
                  position:absolute;
                  top:88px;
                  left:0;
                  width:100%;
                  flex-direction:column;
                  background:#111;
                  border-top:1px solid rgba(255,255,255,0.06);
                  border-radius: 0 0 12px 12px;
                  padding: 14px 0;
                  transform: translateY(-150%);
                  opacity:0;
                  pointer-events:none;
                  transition: all .28s ease;
                  max-height: calc(100vh - 88px);
                  overflow-y: auto;
                  -webkit-overflow-scrolling: touch;
              }
  
              .nav-menu.show { transform: translateY(0); opacity:1; pointer-events:auto; }
  
              .nav-menu li { width:100%; text-align:center; }
  
              .nav-menu a,
              .dropdown-trigger-wrapper {
                  display:flex;
                  align-items:center;
                  justify-content:space-between;
                  gap: 12px; /* gap between text and icon */
                  padding: 12px 18px;
                  margin: 0 10px;
                  border-radius:8px;
              }
  
              /* Mobile: dropdown becomes full-width inside menu and vertical; prevents overflow */
              .dropdown-menu {
                  position: static;
                  transform: none;
                  left: 0;
                  background: #1a1a1a;
                  border-radius: 12px;
                  padding: 0;
                  margin: 0 12px 12px 12px;
                  width: calc(100% - 24px); /* inside mobile menu */
                  max-width: calc(100% - 24px);
                  max-height: 0;
                  opacity: 0;
                  overflow: hidden;
                  transition: max-height .32s ease, opacity .28s ease, padding .28s ease;
              }
  
              .dropdown-menu.show {
                  max-height: 60vh;
                  padding: 14px;
                  opacity: 1;
                  overflow-y: auto;
                  -webkit-overflow-scrolling: touch;
              }
  
              .dropdown-grid {
                  flex-direction: column; /* vertical stacking on mobile */
                  gap: 12px;
              }
  
              .dropdown-item {
                  align-items: center;
                  justify-content: flex-start;
                  gap: 12px;
                  width: 100%;
                  flex: 1 1 100%;
                  padding: 10px;
                  background: transparent;
              }
  
              .dropdown-content h4 { color: #fff; }
              .dropdown-content p { color: #cfcfcf; }
          }
  
          @media (max-width: 420px) {
              .dropdown-menu.show { max-height: 70vh; padding: 12px; }
              .dropdown-content h4 { font-size: 15px; }
              .dropdown-content p { font-size: 13px; }
          }
  
          /* scrollbar styling (nice but optional) */
          .dropdown-menu.show::-webkit-scrollbar { width: 8px; }
          .dropdown-menu.show::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 8px; }
  
          </style>
      `;

  function getNavbarHTML() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    return `
              <nav>
                  <div class="logo-wrap">
                      <img src="logo.png" alt="OM Import Export Logo" class="logo-badge">
                      <div class="logo-info">
                          <div class="logo">OM Import Export</div>
                          <div class="logo-tagline">GPS Tracking</div>
                      </div>
                  </div>
  
                  <div class="menu-icon" id="menu-icon" aria-label="Toggle menu" role="button">&#9776;</div>
  
                  <ul class="nav-menu" id="nav-menu" role="menubar" aria-label="Main navigation">
                      <li role="none"><a role="menuitem" href="index.html" ${
                        currentPage === "index.html"
                          ? 'style="color:#D90429;"'
                          : ""
                      }>Home</a></li>
  
                      <li class="dropdown" data-dropdown="services" role="none">
                          <div class="dropdown-trigger-wrapper" role="menuitem" aria-haspopup="true" aria-expanded="false">Our Services</div>
                          <div class="dropdown-menu" role="menu" aria-label="Our Services">
                              <div class="dropdown-grid">
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🚛</div><div class="dropdown-content"><h4>Fleet Management</h4><p>OM IMPORT EXPORT in Fleet Management</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">👥</div><div class="dropdown-content"><h4>Field Force Management</h4><p>OM IMPORT EXPORT in Field Force Management</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🚗</div><div class="dropdown-content"><h4>Driver Behavior Management</h4><p>OM IMPORT EXPORT in Driver Behavior Management</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">📦</div><div class="dropdown-content"><h4>Asset Tracking</h4><p>OM IMPORT EXPORT in Asset Tracking</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🚚</div><div class="dropdown-content"><h4>Delivery Services</h4><p>OM IMPORT EXPORT in Delivery Services</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🧭</div><div class="dropdown-content"><h4>Container Tracking</h4><p>OM IMPORT EXPORT in Container Tracking</p></div></a>
                              </div>
                          </div>
                      </li>
  
                      <li class="dropdown" data-dropdown="products" role="none">
                          <div class="dropdown-trigger-wrapper" role="menuitem" aria-haspopup="true" aria-expanded="false">Products</div>
                          <div class="dropdown-menu" role="menu" aria-label="Products">
                              <div class="dropdown-grid">
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">📱</div><div class="dropdown-content"><h4>GPS Tracking Devices</h4><p>Advanced GPS tracking hardware</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">💻</div><div class="dropdown-content"><h4>Tracking Software</h4><p>Comprehensive fleet management tools</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">📊</div><div class="dropdown-content"><h4>Analytics Dashboard</h4><p>Real-time analytics and reporting</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🔔</div><div class="dropdown-content"><h4>Alert Systems</h4><p>Customizable notifications</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">🗺️</div><div class="dropdown-content"><h4>Route Optimization</h4><p>AI-powered planning</p></div></a>
                                  <a href="#" class="dropdown-item" role="menuitem"><div class="dropdown-icon">📈</div><div class="dropdown-content"><h4>Reporting Tools</h4><p>Advanced metrics tracking</p></div></a>
                              </div>
                          </div>
                      </li>
  
                      <li role="none"><a role="menuitem" href="about.html" ${
                        currentPage === "about.html"
                          ? 'style="color:#D90429;"'
                          : ""
                      }>About</a></li>
                      <li role="none"><a role="menuitem" href="contact.html" ${
                        currentPage === "contact.html"
                          ? 'style="color:#D90429;"'
                          : ""
                      }>Contact</a></li>
                  </ul>
              </nav>
          `;
  }

  function initNavbar() {
    if (!document.getElementById("navbar-styles")) {
      document.head.insertAdjacentHTML("beforeend", navbarStyles);
    }

    const existingNav = document.querySelector("nav");
    if (existingNav) existingNav.remove();

    document.body.insertAdjacentHTML("afterbegin", getNavbarHTML());

    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    // Toggle main mobile menu
    menuIcon.addEventListener("click", () => navMenu.classList.toggle("show"));

    // Handle dropdown toggling / responsiveness
    document.querySelectorAll(".dropdown").forEach((drop) => {
      const trigger = drop.querySelector(".dropdown-trigger-wrapper");
      const menu = drop.querySelector(".dropdown-menu");

      // Toggle on click/tap for mobile
      trigger.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          const isOpen = menu.classList.toggle("show");
          drop.classList.toggle("active", isOpen);
          trigger.setAttribute("aria-expanded", String(isOpen));
        }
      });

      // keyboard toggle for accessibility
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (window.innerWidth <= 768) {
            const isOpen = menu.classList.toggle("show");
            drop.classList.toggle("active", isOpen);
            trigger.setAttribute("aria-expanded", String(isOpen));
          }
        }
      });
    });

    // Close mobile menus / dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      const isInsideNav = e.target.closest("nav");
      if (!isInsideNav) {
        // close mobile main menu
        if (navMenu.classList.contains("show"))
          navMenu.classList.remove("show");

        // close any open mobile dropdowns
        document.querySelectorAll(".dropdown-menu.show").forEach((d) => {
          d.classList.remove("show");
          const parent = d.closest(".dropdown");
          if (parent) parent.classList.remove("active");
          const trigger =
            parent && parent.querySelector(".dropdown-trigger-wrapper");
          if (trigger) trigger.setAttribute("aria-expanded", "false");
        });
      }
    });

    // Close mobile-specific dropdowns when resizing larger
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document
          .querySelectorAll(".dropdown-menu.show")
          .forEach((d) => d.classList.remove("show"));
        document
          .querySelectorAll(".dropdown")
          .forEach((dd) => dd.classList.remove("active"));
        document
          .querySelectorAll(".dropdown-trigger-wrapper")
          .forEach((tr) => tr.setAttribute("aria-expanded", "false"));
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();
