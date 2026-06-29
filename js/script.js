// Mock Application Database
const appsDatabase = {
    "picsart-pro": {
        name: "PicsArt Pro",
        type: "premium",
        description: "PicsArt Pro est la solution complète pour l'édition photo et vidéo professionnelle. Accédez à des milliers de filtres exclusifs, outils de retouche magiques alimentés par l'IA, et une bibliothèque Premium de 10 millions d'autocollants et d'arrière-plans. Créez des contenus visuels époustouflants sans limitation ni filigrane. Parfait pour les photographes, graphistes et créateurs de contenu.",
        img: "https://github.com/jujucram/DataWork_store/blob/main/images/IMG-20260628-WA0452.jpg",
        category: "Édition photo & vidéo",
        version: "24.1.5",
        size: "156 Mo",
        lang: "Multilingue (45+ langues)",
        link: "https://wa.me//+237673355468?text=Bonjour Brandon, Je veux acheter PicsArt Pro"
    },
    "capcut-pro": {
        name: "CapCut Pro",
        type: "premium",
        description: "CapCut Pro est le meilleur outil d'édition vidéo pour créer du contenu viral. Bénéficiez de transitions fluides, d'effets de texte automatisés, de suivi de mouvement, de chromakey professionnel et d'une bibliothèque massive de musiques royalty-free. Optimisez facilement vos vidéos pour TikTok, YouTube et Instagram. Parfait pour les créateurs de contenu.",
        img: "https://github.com/jujucram/DataWork_store/blob/main/images/IMG-20260627-WA0495.jpg",
        category: "Édition vidéo & Montage",
        version: "11.3.2",
        size: "245 Mo",
        lang: "Multilingue (30+ langues)",
        link: "https://wa.me//+237673355468?text=Bonjour Brandon, Je veux acheter CapCut Pro"
    },
    "vpn-master": {
        name: "VPN Master",
        type: "gratuit",
        description: "Naviguez en toute sécurité et anonymement avec VPN Master. Chiffrez votre connexion Internet, masquez votre adresse IP réelle et accédez aux contenus bloqués géographiquement. Connexion ultra-rapide avec serveurs dans 50+ pays, bande passante illimitée et zéro logs. Protégez votre confidentialité sur WiFi public, et contournez les restrictions de réseau.",
        img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect fill='%23627EEA' width='120' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3EVPN%3C/text%3E%3C/svg%3E",
        category: "Sécurité & Confidentialité",
        version: "5.8.4",
        size: "38 Mo",
        lang: "Français / Anglais / Arabe",
        link: "https://www.mediafire.com/file/jolwpl3lnkgd7gn/SuperVPN+v3.1.6+-+VIP.apk/file"
    },
    "spotify-premium": {
        name: "Spotify Premium",
        type: "premium",
        description: "Spotify Premium vous offre un accès illimité à 100+ millions de chansons et de podcasts sans interruption publicitaire. Écoutez hors ligne, profitez d'un son haute fidélité, créez et partagez des playlists personnalisées. Accès aux pochettes d'album haute résolution et aux podcasts exclusifs. La meilleure expérience musicale du marché.",
        img: "https://cdn.jsdelivr.net/gh/Walkxcode/Dashboard-Icons@main/png/spotify.png",
        category: "Musique & Podcasts",
        version: "8.10.15",
        size: "92 Mo",
        lang: "Multilingue (60+ langues)",
        link: "https://wa.me//+237673355468?text=Bonjour Brandon, Je veux acheter Spotify Premium"
    },
    "subway-surfers": {
        name: "Subway Surfers",
        type: "gratuit",
        description: "Jeu arcade Subway Surfers modifié en APK 3.64.10 avec pièces illimitées, clés et menu amélioré.",
        img: "https://github.com/jujucram/DataWork_store/blob/main/images/IMG-20260625-WA0841.jpg",
        category: "Jeu / Arcade",
        version: "3.64.10",
        size: "81 Mo",
        lang: "Multilingue",
        link: "https://liteapks.com/subway-surfers.html"
    },
    "telegram-web-premium": {
        name: "Telegram Web Mod Premium",
        type: "gratuit",
        description: "Telegram Web mod premium avec pubs supprimées, stories anonymes, vitesse boostée et fonctions premium débloquées.",
        img: "https://cdn.jsdelivr.net/gh/Walkxcode/Dashboard-Icons@main/png/telegram.png",
        category: "Communication & Productivité",
        version: "12.8.1",
        size: "55,86 Mo",
        lang: "Multilingue",
        link: "https://m.easysky.in/qgA0Pk"
    },
    "cinema-premium": {
        name: "Cinema Premium",
        type: "premium",
        description: "Mod Cinema Premium avec abonnement débloqué, pubs supprimées, facturation désactivée et interface propre.",
        img: "https://github.com/jujucram/DataWork_store/blob/main/images/IMG-20260628-WA0447.jpg",
        category: "Films & Divertissement",
        version: "Dernière version",
        size: "Variable selon APK",
        lang: "Multilingue",
        link: "https://wa.me//+237673355468?text=Bonjour Brandon, Je veux acheter Cinema Premium"
    },
    "cricz-tv-premium": {
        name: "CricZ TV Premium",
        type: "premium",
        description: "CricZ TV Premium avec chaînes débloquées, lecture sans pub, interface rapide et compatibilité Android TV.",
        img: "https://github.com/jujucram/DataWork_store/blob/main/images/IMG-20260626-WA0723.jpg",
        category: "TV & Streaming",
        version: "Dernière version",
        size: "Variable selon APK",
        lang: "Multilingue",
        link: "https://wa.me//+237673355468?text=Bonjour Brandon, Je veux acheter CricZ TV Premium"
    }
};



document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CODE DE LA BARRE DE RECHERCHE (Page Accueil) ---
    const searchInputHome = document.getElementById('searchInputHome');
    if (searchInputHome) {
        searchInputHome.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const term = searchInputHome.value.trim().toLowerCase();
                if (term) {
                    window.location.href = `apps.html?search=${term}`;
                }
            }
        });
        document.getElementById('searchBtnHome').addEventListener('click', function() {
            const term = searchInputHome.value.trim().toLowerCase();
            if (term) {
                window.location.href = `apps.html?search=${term}`;
            }
        });
    }

    // --- 1.5. BURGER MENU MOBILE ---
    const burgerBtn = document.querySelector('.burger');
    const mainNav = document.querySelector('header nav');
    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
            });
        });
    }

    // --- 2. CODE DE FILTRAGE & RECHERCHE (Page Applications) ---
    const appsContainer = document.getElementById('appsContainer');
    if (appsContainer) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const appItems = document.querySelectorAll('.app-list-item');

        // Gérer les Onglets (Toutes / Gratuites / Premium)
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                filterApps(filterValue);
            });
        });

        function filterApps(type) {
            appItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                if (type === 'all' || itemType === type) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Vérifier s'il y a une recherche venant de l'accueil
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        if (searchParam) {
            appItems.forEach(item => {
                const name = item.getAttribute('data-name');
                if (name.includes(searchParam)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }

    // --- 3. CHARGEMENT DYNAMIQUE DES DÉTAILS (Page App) ---
    const detailContainer = document.getElementById('appDetailContainer');
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const appId = urlParams.get('id');

        if (appId && appsDatabase[appId]) {
            const app = appsDatabase[appId];
            
            // Personnalisation du bouton selon gratuit ou payant
            let actionBtnHtml = '';
            if (app.type === 'premium') {
                actionBtnHtml = `<a href="${app.link}" target="_blank" class="btn-large buy">Acheter via WhatsApp</a>`;
            } else {
                actionBtnHtml = `<a href="${app.link}" target="_blank" class="btn-large download">Télécharger</a>`;
            }

            const badgeClass = app.type === 'premium' ? 'premium' : 'free';
            const badgeLabel = app.type === 'premium' ? 'Premium' : 'Gratuit';

            detailContainer.innerHTML = `
                <div class="app-detail-container-grid">
                    <div class="app-sidebar">
                        <img src="${app.img}" alt="${app.name}">
                        <h2>${app.name} <span class="badge ${badgeClass}">${badgeLabel}</span></h2>
                        ${actionBtnHtml}
                        <a href="apps.html" class="btn-large back"><i class="fa-solid fa-arrow-left"></i> Retour</a>
                        <p class="secure-tag"><i class="fa-solid fa-shield-halved"></i> Paiement sécurisé & lien vérifié</p>
                    </div>
                    <div class="app-main-content">
                        <h3>Description</h3>
                        <p>${app.description}</p>
                        
                        <h3>Informations</h3>
                        <div class="info-table">
                            <div class="info-row">
                                <span class="info-label">Catégorie</span>
                                <span class="info-value">${app.category}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Version</span>
                                <span class="info-value">${app.version}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Taille</span>
                                <span class="info-value">${app.size}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Langue</span>
                                <span class="info-value">${app.lang}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            detailContainer.innerHTML = `<p style="text-align:center; padding: 40px 0;">Application introuvable. <a href="apps.html" style="color:#00ff66;">Retourner au catalogue</a></p>`;
        }
    }
});
