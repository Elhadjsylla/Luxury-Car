// Exemple de données véhicules (mets le vrai nom de chaque image)
const vehiclesData = [
    {
        id: 1,
        name: "Mercedes G63 AMG",
        category: "suv",
        image: "G63.JPG", // Mets ici le vrai nom du fichier image
        description: "Le Mercedes G63 AMG est l'incarnation parfaite du luxe et de la performance tout-terrain.",
        specs: {
            "Moteur": "V8 Biturbo 4.0L",
            "Puissance": "585 ch",
            "Transmission": "Automatique 9G-TRONIC",
            "0-100 km/h": "4.5 sec"
        }
    },
    {
        id: 2,
        name: "Mercedes S600",
        category: "berline",
        image: "Mercedes S600.JPG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V12 6.0L",
            "Puissance": "530 ch",
            "Transmission": "Automatique 7G-TRONIC",
            "0-100 km/h": "4.8 sec"
        },
        description: "La Mercedes S600 représente l'excellence de l'ingénierie automobile allemande. Cette berline de prestige est équipée d'un moteur V12 de 6.0 litres développant 530 chevaux. Elle offre un niveau de confort et de luxe inégalé avec ses sièges en cuir premium, son système de divertissement de pointe et ses technologies d'assistance à la conduite les plus avancées."
    },
    {
        id: 3,
        name: "Maybach S600",
        category: "berline",
        image: "Maybach S600.jpg", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V12 6.0L Biturbo",
            "Puissance": "630 ch",
            "Transmission": "Automatique 7G-TRONIC",
            "0-100 km/h": "4.4 sec"
        },
        description: "La Maybach S600 est l'apogée du luxe automobile. Cette limousine d'exception offre un espace arrière somptueux avec des sièges inclinables, un système de massage intégré, et des finitions artisanales d'exception. Son moteur V12 biturbo de 630 chevaux assure des performances époustouflantes dans un silence de cathédrale."
    },
    {
        id: 4,
        name: "Mercedes GLS 600 Maybach",
        category: "suv",
        image: "GLS600.JPG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V8 Biturbo 4.0L + Hybride",
            "Puissance": "558 ch",
            "Transmission": "Automatique 9G-TRONIC",
            "0-100 km/h": "4.9 sec"
        },
        description: "Le Mercedes GLS 600 Maybach redéfinit le concept de SUV de luxe. Combinant la praticité d'un SUV avec l'opulence Maybach, ce véhicule hybride offre 7 places dans un confort royal. Ses sièges arrière de première classe, son toit ouvrant panoramique et ses finitions sur mesure en font un palace roulant."
    },
    {
        id: 5,
        name: "Porsche Macan",
        category: "suv",
        image: "Porsche Macan.PNG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V6 Turbo 2.9L",
            "Puissance": "440 ch",
            "Transmission": "PDK 7 rapports",
            "0-100 km/h": "4.6 sec"
        },
        description: "Le Porsche Macan incarne l'esprit sportif de la marque dans un SUV compact. Son moteur V6 turbo et sa transmission PDK délivrent des sensations de conduite pures, héritées de la lignée des voitures de sport Porsche. Son design élégant et ses technologies avancées en font le choix parfait pour les passionnés de conduite dynamique."
    },
    {
        id: 6,
        name: "Porsche 911",
        category: "sport",
        image: "911.JPG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "Flat-6 Turbo 3.0L",
            "Puissance": "450 ch",
            "Transmission": "PDK 8 rapports",
            "0-100 km/h": "3.7 sec"
        },
        description: "La Porsche 911 est une icône intemporelle du monde automobile. Cette voiture de sport légendaire combine performances exceptionnelles et utilisabilité quotidienne. Son moteur boxer turbo, sa traction intégrale et son châssis parfaitement équilibré offrent une expérience de conduite unique, fidèle à 60 ans d'héritage sportif."
    },
    {
        id: 7,
        name: "Range Rover Vogue",
        category: "suv",
        image: "Range Rover Vogue.JPG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V8 Supercharged 5.0L",
            "Puissance": "525 ch",
            "Transmission": "Automatique 8 rapports",
            "0-100 km/h": "5.1 sec"
        },
        description: "Le Range Rover Vogue est l'incarnation du luxe britannique et de la capacité tout-terrain. Ce SUV prestigieux allie élégance raffinée et robustesse exceptionnelle. Ses capacités off-road légendaires, son intérieur somptueux en cuir premium et ses technologies de pointe en font le véhicule de choix pour ceux qui ne font aucun compromis."
    },
    {
        id: 8,
        name: "Range Rover Evoque",
        category: "suv",
        image: "Range Rover Evoque.PNG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "4 cylindres Turbo 2.0L",
            "Puissance": "300 ch",
            "Transmission": "Automatique 9 rapports",
            "0-100 km/h": "6.4 sec"
        },
        description: "Le Range Rover Evoque révolutionne le segment des SUV compacts de luxe avec son design avant-gardiste et coupé. Ce véhicule urbain chic combine style contemporain et héritage Range Rover. Sa silhouette distinctive, ses technologies innovantes et son habitacle premium en font un statement de style pour la vie moderne."
    },
    {
        id: 9,
        name: "Toyota Land Cruiser",
        category: "suv",
        image: "Land Cruiser.PNG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V8 4.6L",
            "Puissance": "310 ch",
            "Transmission": "Automatique 6 rapports",
            "0-100 km/h": "7.8 sec"
        },
        description: "Le Toyota Land Cruiser est une légende de la robustesse et de la fiabilité. Ce SUV tout-terrain est conçu pour les aventures les plus extrêmes tout en offrant un confort de route exceptionnel. Sa réputation mondiale de durabilité, ses capacités off-road inégalées et son intérieur spacieux en font le compagnon idéal pour tous les voyages."
    },
    {
        id: 10,
        name: "Cadillac CTS",
        category: "berline",
        image: "Cadillac CTS.JPG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V6 Turbo 3.6L",
            "Puissance": "420 ch",
            "Transmission": "Automatique 8 rapports",
            "0-100 km/h": "5.1 sec"
        },
        description: "La Cadillac CTS représente l'élégance américaine moderne avec une touche sportive distinctive. Cette berline de luxe propose un design audacieux, des performances dynamiques et un niveau de confort élevé. Son intérieur raffiné, ses technologies avancées et sa conduite précise en font une alternative séduisante aux berlines européennes traditionnelles."
    },
    {
        id: 11,
        name: "Cadillac Escalade",
        category: "suv",
        image: "Cadillac Escalade.PNG", // Vous ajouterez le chemin de votre image ici
        specs: {
            "Moteur": "V8 6.2L",
            "Puissance": "420 ch",
            "Transmission": "Automatique 10 rapports",
            "0-100 km/h": "6.1 sec"
        },
        description: "Le Cadillac Escalade est l'incarnation du luxe américain XXL. Ce SUV imposant offre un espace généreux pour 8 passagers, un niveau d'équipement exceptionnel et une présence sur route incomparable. Son système de divertissement de pointe, ses sièges en cuir premium et sa technologie de conduite semi-autonome redéfinissent le voyage de luxe."
    }
];

// Configuration des graphiques
const chartConfigs = {
    satisfaction: {
        labels: ['Service Client', 'Qualité Véhicules', 'Prix', 'Livraison', 'SAV'],
        data: [95, 98, 89, 92, 96],
        backgroundColor: ['#333333', '#444444', '#555555', '#666666', '#777777']
    },
    categories: {
        labels: ['SUV', 'Berlines', 'Sport'],
        data: [7, 4, 1],
        backgroundColor: ['#333333', '#555555', '#777777']
    }
};

// Variables globales
let currentFilter = 'all';
let satisfactionChart = null;
let categoryChart = null;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupNavigation();
    renderVehicles();
    setupFilterButtons();
    setupCharts();
    setupModal();
    setupContactForm();
    setupScrollEffects();
    setupMobileMenu();
}

// Configuration de la navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Rendu des véhicules
function renderVehicles() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    const filteredVehicles = currentFilter === 'all' 
        ? vehiclesData 
        : vehiclesData.filter(vehicle => vehicle.category === currentFilter);
    
    vehiclesGrid.innerHTML = '';
    
    filteredVehicles.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Création d'une carte de véhicule
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.dataset.category = vehicle.category;
    
    const imageUrl = vehicle.image || `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMjIyMjIyIi8+CjxwYXRoIGQ9Ik08MCA4MEgzMjBMMzEwIDE3MEg5MEw4MCA4MFoiIGZpbGw9IiM0NDQ0NDQiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMTcwIiByPSIxNSIgZmlsbD0iIzY2NjY2NiIvPgo8Y2lyY2xlIGN4PSIyODAiIGN5PSIxNzAiIHI9IjE1IiBmaWxsPSIjNjY2NjY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSB2w6loaWN1bGU8L3RleHQ+Cjwvc3ZnPg==`;
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${vehicle.name}" class="vehicle-image">
        <div class="vehicle-info">
            <h3 class="vehicle-name">${vehicle.name}</h3>
            <p class="vehicle-category">${getCategoryName(vehicle.category)}</p>
            <div class="vehicle-specs">
                ${Object.entries(vehicle.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('')}
            </div>
            <div class="vehicle-actions">
                <button class="btn btn-primary" onclick="openVehicleModal(${vehicle.id})">
                    Voir plus
                </button>
                <button class="btn btn-secondary" onclick="scrollToSection('contact')">
                    Contact
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Configuration des boutons de filtre
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Mettre à jour le filtre et re-rendre les véhicules
            currentFilter = this.dataset.category;
            renderVehicles();
        });
    });
}

// Configuration des graphiques
function setupCharts() {
    setupSatisfactionChart();
    setupCategoryChart();
}

function setupSatisfactionChart() {
    const ctx = document.getElementById('satisfactionChart');
    if (!ctx) return;
    
    if (satisfactionChart) {
        satisfactionChart.destroy();
    }
    
    satisfactionChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: chartConfigs.satisfaction.labels,
            datasets: [{
                label: 'Satisfaction (%)',
                data: chartConfigs.satisfaction.data,
                backgroundColor: 'rgba(102, 102, 102, 0.2)',
                borderColor: '#666666',
                borderWidth: 2,
                pointBackgroundColor: '#666666',
                pointBorderColor: '#ffffff',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#cccccc'
                    },
                    grid: {
                        color: '#333333'
                    },
                    pointLabels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });
}

function setupCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    if (categoryChart) {
        categoryChart.destroy();
    }
    
    categoryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartConfigs.categories.labels,
            datasets: [{
                data: chartConfigs.categories.data,
                backgroundColor: chartConfigs.categories.backgroundColor,
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        padding: 20
                    }
                }
            }
        }
    });
}

// Configuration de la modal
function setupModal() {
    const modal = document.getElementById('vehicleModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Ouverture de la modal de véhicule
function openVehicleModal(vehicleId) {
    const vehicle = vehiclesData.find(v => v.id === vehicleId);
    if (!vehicle) return;
    
    const modal = document.getElementById('vehicleModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSpecs = document.getElementById('modalSpecs');
    
    const imageUrl = vehicle.image || `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMjIyMjIyIi8+CjxwYXRoIGQ9Ik08MCA5MEgzMjBMMzEwIDIxMEg5MEw4MCA5MFoiIGZpbGw9IiM0NDQ0NDQiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMjEwIiByPSIyMCIgZmlsbD0iIzY2NjY2NiIvPgo8Y2lyY2xlIGN4PSIyODAiIGN5PSIyMTAiIHI9IjIwIiBmaWxsPSIjNjY2NjY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBkw6l0YWlsw6llPC90ZXh0Pgo8L3N2Zz4=`;
    
    modalImage.src = imageUrl;
    modalImage.alt = vehicle.name;
    modalTitle.textContent = vehicle.name;
    modalDescription.textContent = vehicle.description;
    
    modalSpecs.innerHTML = Object.entries(vehicle.specs).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

// Configuration du formulaire de contact
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulation d'envoi de formulaire
        alert('Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.');
        contactForm.reset();
        
        // Ici, vous pourriez intégrer un service d'envoi d'email réel
        console.log('Données du formulaire:', formData);
    });
}

// Configuration des effets de scroll
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        }
        
        // Animation des éléments au scroll
        animateOnScroll();
    });
}

// Animation des éléments au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.vehicle-card, .performance-card, .contact-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Configuration du menu mobile
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Fonction de scroll vers une section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Fonction utilitaire pour obtenir le nom de catégorie en français
function getCategoryName(category) {
    const categoryNames = {
        'berline': 'Berline',
        'suv': 'SUV',
        'sport': 'Voiture de Sport'
    };
    return categoryNames[category] || category;
}

// Fonction pour changer l'image hero (optionnel)
function changeHeroImage(imagePath) {
    const heroImage = document.getElementById('hero-car');
    heroImage.src = imagePath;
}

// Fonction pour changer le logo (optionnel)
function changeLogo(logoPath) {
    const logo = document.getElementById('logo');
    logo.src = logoPath;
}

// Fonction pour mettre à jour une image de véhicule
function updateVehicleImage(vehicleId, imagePath) {
    const vehicle = vehiclesData.find(v => v.id === vehicleId);
    if (vehicle) {
        vehicle.image = imagePath;
        renderVehicles(); // Re-rendre les véhicules avec la nouvelle image
    }
}

if (vehicle.image) {
    document.getElementById('hero-car').src = vehicle.image;
}