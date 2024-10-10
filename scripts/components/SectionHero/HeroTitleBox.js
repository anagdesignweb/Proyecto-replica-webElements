class HeroTitleBox extends HTMLElement {
    static get style() {
        return /*css*/`
        /* Estilos del componente */
        h1 {
            font-size: 58px;
            font-weight: 500;
            line-height: 58px;
            letter-spacing: -4px;
        }
        h2 {
            font-size: 35px;
            font-weight: 300;
            line-height: 33px;
        }

        .section-hero-tittle {
            border: 1px solid rgb(72, 255, 0);
            width: fit-content;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* componente - Contenedor principal */
        .section-hero-tittle > .section-hero-tittle-h {
            overflow: hidden;
            width: fit-content;   
            padding: 5px 5px 15px 15px;     
            clip-path: polygon(0 5px, 5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%);
            border-left: 0 solid black;
            border-bottom: 0 solid black;
            transform: translate(0, 0);
            transform-origin: bottom left;
            animation: showBorder 0.6s ease-out forwards, moveBox 0.2s ease-out forwards;
            animation-delay: 1.5s;
        }

        /* Animación de los títulos */
        .section-hero-tittle > .section-hero-tittle-h > * {
            transform: translateY(50px);
            animation: slideUp 0.6s ease-out forwards;
        }

        /* Animación de deslizar los textos */
        @keyframes slideUp {
            0% {
                transform: translateY(50px);
            }
            100% {
                transform: translateY(0);
            }
        }

        /* Animación del borde y expansión */
        @keyframes showBorder {
            0% {
                border-left-width: 0;
                border-bottom-width: 0;
            }
            80% {
                border-left-width: 6px;
                border-bottom-width: 6px;
            }
            100% {
                border-left-width: 5px;
                border-bottom-width: 5px;
            }
        }

        /* Animación de movimiento de la caja */
        @keyframes moveBox {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(5px, -5px); 
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
        this.adjustWidth(); // Ajustar el tamaño inmediatamente después de renderizar
        this.events();
    }

    adjustWidth = () => {
        if (this.$h1 && this.$h2) {
            // Asegurarse de que los elementos existan
            this.$h2.style.width = `${this.$h1.offsetWidth}px`;
        }
    }

    render() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            ${HeroTitleBox.style}
        </style>
        <div class="section-hero-tittle">
            <div class="section-hero-tittle-h">
                <h1>OpenEU</h1>                
            </div>
            <div class="section-hero-tittle-h">
                <h2>The Open European University</h2>
            </div>
        </div>
`;
    }

    elements() {
        this.$h1 = this.shadowRoot.querySelector('h1');
        this.$h2 = this.shadowRoot.querySelector('h2');
    }

    events() {
        // Escuchar el evento de resize en la ventana
        window.addEventListener('resize', this.adjustWidth);
    }

    disconnectedCallback() {
        // Limpiar el evento cuando se desconecte
        window.removeEventListener('resize', this.adjustWidth);
    }
}

// Definir el nuevo componente
window.customElements.define('hero-title-box', HeroTitleBox);
