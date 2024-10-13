class HeroScroll extends HTMLElement {
    static get style() {
        return /*css*/`
        /* Estilos del componente */
        span {
            font-size: 24px;
            font-weight: 500;
            line-height: 58px;
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 3.5s ease, transform 1.5s ease; /* Añadir la transición para opacidad y posición */
            animation: bounce 5s infinite;
        }
        .section-hero-scroll {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0); 
            }
        }
        `;
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.elements();
        this.events();
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            ${HeroScroll.style}
        </style>
        <div class="section-hero-scroll">
            <span>scroll</span>
        </div>
        `;
    }

    elements() {
        this.$span = this.shadowRoot.querySelector('span');
    }
    startAnimation() {
        const span = this.shadowRoot.querySelector('span');
        span.style.opacity = '1'; // Aparece gradualmente
        span.style.transform = 'translateY(0)'; // Se desplaza hacia su posición original
    }
    events() {
        document.addEventListener('hero-animation-complete', () => {
            this.startAnimation(); // Iniciar la animación del componente scroll cuando se reciba el evento
        })
    }

}

// Definir el nuevo componente
window.customElements.define('hero-scroll', HeroScroll);