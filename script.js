// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Movie data - Latest 2026 Blockbusters
const movies = [
    {
        title: "Dune: Messiah",
        genre: "Sci-Fi",
        duration: "2h 46m",
        rating: 4.9,
        description: "Paul Atreides' journey continues as he faces the consequences of his choices and the burden of prophecy in this epic conclusion."
    },
    {
        title: "Avatar: Fire and Ash",
        genre: "Sci-Fi/Adventure",
        duration: "3h 12m",
        rating: 4.8,
        description: "Jake Sully and Neytiri explore the volcanic regions of Pandora, encountering new tribes and facing unprecedented threats."
    },
    {
        title: "Mission: Impossible 8",
        genre: "Action",
        duration: "2h 43m",
        rating: 4.7,
        description: "Ethan Hunt faces his most dangerous mission yet in this explosive finale to the franchise's greatest saga."
    },
    {
        title: "Avengers: Secret Wars",
        genre: "Action/Superhero",
        duration: "2h 55m",
        rating: 4.9,
        description: "The multiverse collides as heroes from across realities unite for the ultimate battle to save all existence."
    },
    {
        title: "The Batman Part II",
        genre: "Action/Crime",
        duration: "2h 38m",
        rating: 4.8,
        description: "Bruce Wayne delves deeper into Gotham's corruption as new villains emerge from the shadows of the city."
    },
    {
        title: "Wicked",
        genre: "Musical/Fantasy",
        duration: "2h 40m",
        rating: 4.6,
        description: "The untold story of the witches of Oz comes to life in this spectacular musical adaptation starring Cynthia Erivo and Ariana Grande."
    },
    {
        title: "Fantastic Four",
        genre: "Action/Superhero",
        duration: "2h 18m",
        rating: 4.5,
        description: "Marvel's First Family finally joins the MCU in this fresh take on the beloved superhero team."
    },
    {
        title: "Shrek 5",
        genre: "Animation/Comedy",
        duration: "1h 52m",
        rating: 4.7,
        description: "Everyone's favorite ogre returns for another hilarious adventure with Donkey, Puss in Boots, and the whole gang."
    }
];

// Generate movie cards
const moviesGrid = document.getElementById('movies-grid');

movies.forEach((movie, index) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.style.animationDelay = `${index * 0.1}s`;

    // Generate gradient colors based on index
    const gradients = [
        'linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(255, 217, 61, 0.3))',
        'linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(68, 160, 141, 0.3))',
        'linear-gradient(135deg, rgba(167, 112, 239, 0.3), rgba(207, 139, 243, 0.3))',
        'linear-gradient(135deg, rgba(240, 147, 251, 0.3), rgba(245, 87, 108, 0.3))',
        'linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3))',
        'linear-gradient(135deg, rgba(255, 217, 61, 0.3), rgba(167, 112, 239, 0.3))'
    ];

    movieCard.innerHTML = `
        <div class="movie-poster" style="background: ${gradients[index % gradients.length]}; display: flex; align-items: center; justify-content: center; font-size: 64px; font-weight: 800; color: rgba(255, 255, 255, 0.1);">
            ${movie.title.charAt(0)}
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.genre}</span>
                <span>•</span>
                <span>${movie.duration}</span>
            </div>
            <div class="movie-rating">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0l2.163 4.382 4.837.703-3.5 3.412.826 4.817L8 11.09l-4.326 2.224.826-4.817-3.5-3.412 4.837-.703L8 0z"/>
                </svg>
                <span>${movie.rating}</span>
            </div>
            <p class="movie-description">${movie.description}</p>
            <div class="movie-cta">
                <button class="btn-book" onclick="bookTicket('${movie.title}')">Book Now</button>
                <button class="btn-info" onclick="showInfo('${movie.title}')">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7V7h2v5zm0-6H7V4h2v2z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    moviesGrid.appendChild(movieCard);
});

// Button interactions
function bookTicket(movieTitle) {
    // Create a simple modal effect
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 48px;
            max-width: 500px;
            text-align: center;
            animation: slideUp 0.4s ease;
        ">
            <div style="
                width: 80px;
                height: 80px;
                margin: 0 auto 24px;
                background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 32px rgba(255, 107, 107, 0.4);
            ">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M16.667 28.333L8.333 20l2.357-2.357 6.01 6.01L30.31 10l2.357 2.357-16 16z" fill="white" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <h2 style="
                font-family: 'Outfit', sans-serif;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 16px;
                background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            ">Booking Confirmed!</h2>
            <p style="
                font-size: 18px;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 32px;
                line-height: 1.6;
            ">Your tickets for <strong style="color: white;">${movieTitle}</strong> have been reserved. Check your email for confirmation details.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                padding: 16px 48px;
                background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
                border: none;
                border-radius: 12px;
                color: white;
                font-weight: 700;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 32px rgba(255, 107, 107, 0.5)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 8px 24px rgba(255, 107, 107, 0.4)'">
                Awesome!
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showInfo(movieTitle) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(167, 112, 239, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 48px;
            max-width: 500px;
            text-align: center;
            animation: slideUp 0.4s ease;
        ">
            <h2 style="
                font-family: 'Outfit', sans-serif;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 16px;
            ">${movieTitle}</h2>
            <p style="
                font-size: 16px;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 24px;
                line-height: 1.8;
            ">Detailed information about this movie would appear here, including cast, director, plot summary, and reviews.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                padding: 14px 36px;
                background: rgba(255, 255, 255, 0.05);
                border: 2px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: white;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.08)'; this.style.borderColor='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='rgba(255, 255, 255, 0.1)'">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Hero CTA buttons
document.getElementById('book-now-btn').addEventListener('click', () => {
    document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('explore-btn').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(167, 112, 239, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 48px;
            max-width: 700px;
            text-align: center;
            animation: slideUp 0.4s ease;
        ">
            <div style="
                width: 120px;
                height: 120px;
                margin: 0 auto 24px;
                background: linear-gradient(135deg, #A770EF 0%, #CF8BF3 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 32px rgba(167, 112, 239, 0.4);
            ">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                    <path d="M20 15l30 15-30 15V15z"/>
                </svg>
            </div>
            <h2 style="
                font-family: 'Outfit', sans-serif;
                font-size: 36px;
                font-weight: 800;
                margin-bottom: 16px;
            ">Trailer Preview</h2>
            <p style="
                font-size: 18px;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 32px;
                line-height: 1.8;
            ">Experience the magic before you book. Our exclusive trailers showcase the best moments in stunning quality.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                padding: 16px 48px;
                background: linear-gradient(135deg, #A770EF 0%, #CF8BF3 100%);
                border: none;
                border-radius: 12px;
                color: white;
                font-weight: 700;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 8px 24px rgba(167, 112, 239, 0.4);
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 32px rgba(167, 112, 239, 0.5)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 8px 24px rgba(167, 112, 239, 0.4)'">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
});

document.getElementById('sign-in-btn').addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 48px;
            max-width: 400px;
            width: 90%;
            animation: slideUp 0.4s ease;
        ">
            <h2 style="
                font-family: 'Outfit', sans-serif;
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 24px;
                text-align: center;
            ">Welcome Back</h2>
            <input type="email" placeholder="Email address" style="
                width: 100%;
                padding: 16px;
                margin-bottom: 16px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: white;
                font-size: 15px;
                font-family: 'Inter', sans-serif;
            ">
            <input type="password" placeholder="Password" style="
                width: 100%;
                padding: 16px;
                margin-bottom: 24px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: white;
                font-size: 15px;
                font-family: 'Inter', sans-serif;
            ">
            <button onclick="this.parentElement.parentElement.remove()" style="
                width: 100%;
                padding: 16px;
                background: linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
                border: none;
                border-radius: 12px;
                color: white;
                font-weight: 700;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
                margin-bottom: 16px;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 32px rgba(255, 107, 107, 0.5)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 8px 24px rgba(255, 107, 107, 0.4)'">
                Sign In
            </button>
            <button onclick="this.parentElement.parentElement.remove()" style="
                width: 100%;
                padding: 14px;
                background: rgba(255, 255, 255, 0.05);
                border: 2px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                color: white;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.08)'; this.style.borderColor='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='rgba(255, 255, 255, 0.1)'">
                Cancel
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Pricing card interactions
document.querySelectorAll('.btn-pricing').forEach(btn => {
    btn.addEventListener('click', function () {
        const pricingCard = this.closest('.pricing-card');
        const planName = pricingCard.querySelector('.pricing-name').textContent;
        const price = pricingCard.querySelector('.price-amount').textContent;

        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(68, 160, 141, 0.1) 100%);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                padding: 48px;
                max-width: 500px;
                text-align: center;
                animation: slideUp 0.4s ease;
            ">
                <div style="
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 24px;
                    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 32px rgba(78, 205, 196, 0.4);
                ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 5L23 15H33L25 21L28 31L20 25L12 31L15 21L7 15H17L20 5Z" fill="white"/>
                    </svg>
                </div>
                <h2 style="
                    font-family: 'Outfit', sans-serif;
                    font-size: 32px;
                    font-weight: 800;
                    margin-bottom: 16px;
                    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                ">${planName} Plan Selected</h2>
                <p style="
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 32px;
                    line-height: 1.6;
                ">You've selected the <strong style="color: white;">${planName}</strong> experience at <strong style="color: white;">$${price}</strong> per ticket. Proceed to checkout to complete your booking.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    padding: 16px 48px;
                    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
                    border: none;
                    border-radius: 12px;
                    color: white;
                    font-weight: 700;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 24px rgba(78, 205, 196, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 32px rgba(78, 205, 196, 0.5)'" onmouseout="this.style.transform=''; this.style.boxShadow='0 8px 24px rgba(78, 205, 196, 0.4)'">
                    Continue
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.movie-card, .experience-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});
