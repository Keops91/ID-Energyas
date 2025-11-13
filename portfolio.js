/* ========================================
   ID ENERGY GROUP - PORTFOLIO JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================================
       DATOS DE LOS PROYECTOS
       ======================================== */
    const proyectosData = {
        '1': {
            titulo: 'Planta Fotovoltaica Ciudad Real',
            categoria: 'solar',
            descripcion: 'Proyecto emblemático de 50 MW que incorpora las últimas tecnologías en paneles solares bifaciales y sistemas de seguimiento solar. Esta instalación suministra energía limpia a más de 25,000 hogares.',
            imagen: 'Imagenes_ID/proyecto-solar-1.jpg',
            potencia: '50 MW',
            anio: '2024',
            ubicacion: 'Ciudad Real, España',
            cliente: 'Confidencial',
            caracteristicas: [
                'Paneles solares bifaciales de última generación',
                'Sistema de seguimiento solar a un eje',
                'Monitorización en tiempo real',
                'Reducción de 75,000 toneladas de CO₂ anuales',
                'Generación estimada: 90 GWh/año',
                'Inversión: 45 millones de euros'
            ]
        },
        '2': {
            titulo: 'Parque Eólico Sierra Norte',
            categoria: 'eolica',
            descripcion: 'Instalación de 20 aerogeneradores de alta potencia en ubicación estratégica con vientos constantes. El proyecto incluye infraestructura de evacuación y sistemas de almacenamiento.',
            imagen: 'Imagenes_ID/proyecto-eolico-1.jpg',
            potencia: '60 MW',
            anio: '2023',
            ubicacion: 'Castilla y León, España',
            cliente: 'Operador Energético Nacional',
            caracteristicas: [
                '20 aerogeneradores de 3 MW cada uno',
                'Altura de torre: 120 metros',
                'Diámetro de rotor: 130 metros',
                'Factor de capacidad: 35%',
                'Producción anual: 185 GWh',
                'Ahorro de 90,000 toneladas CO₂/año'
            ]
        },
        '3': {
            titulo: 'Complejo Residencial Sostenible',
            categoria: 'solar',
            descripcion: 'Proyecto innovador de autoconsumo colectivo que integra 500 viviendas con sistemas solares fotovoltaicos individuales y comunitarios, baterías de almacenamiento y gestión inteligente de energía.',
            imagen: 'Imagenes_ID/proyecto-solar-2.jpg',
            potencia: '5 MW',
            anio: '2024',
            ubicacion: 'Madrid, España',
            cliente: 'Promotora Inmobiliaria',
            caracteristicas: [
                '500 instalaciones individuales',
                'Sistema de autoconsumo colectivo',
                'Baterías de almacenamiento comunitarias',
                'App móvil de monitorización',
                'Ahorro energético del 70%',
                'Certificación energética A'
            ]
        },
        '4': {
            titulo: 'Planta Industrial Autosuficiente',
            categoria: 'industrial',
            descripcion: 'Sistema híbrido solar-eólico diseñado específicamente para una planta industrial de gran consumo. Incluye sistema de gestión energética avanzado y capacidad de almacenamiento.',
            imagen: 'Imagenes_ID/proyecto-industrial-1.jpg',
            potencia: '15 MW',
            anio: '2023',
            ubicacion: 'Valencia, España',
            cliente: 'Grupo Industrial Confidencial',
            caracteristicas: [
                'Combinación solar (10 MW) + eólica (5 MW)',
                'Sistema BESS de 5 MWh',
                'Autosuficiencia energética del 85%',
                'ROI: 7 años',
                'Gestión inteligente de la demanda',
                'Reducción de costes energéticos del 60%'
            ]
        },
        '5': {
            titulo: 'Sistema BESS Madrid',
            categoria: 'almacenamiento',
            descripcion: 'Sistema de almacenamiento de energía mediante baterías de ion-litio de última generación. Proporciona servicios de regulación de frecuencia y gestión de picos de demanda.',
            imagen: 'Imagenes_ID/proyecto-almacenamiento-1.jpg',
            potencia: '50 MW / 100 MWh',
            anio: '2024',
            ubicacion: 'Madrid, España',
            cliente: 'Red Eléctrica Nacional',
            caracteristicas: [
                'Capacidad: 100 MWh',
                'Potencia: 50 MW',
                'Baterías de ion-litio',
                'Tiempo de respuesta: <100ms',
                'Vida útil: 20 años',
                'Eficiencia de ciclo: 92%'
            ]
        },
        '6': {
            titulo: 'Parque Eólico Costa Atlántica',
            categoria: 'eolica',
            descripcion: 'Proyecto offshore pionero con 40 aerogeneradores marinos de última generación. Tecnología floating para aguas profundas y sistema de transmisión submarina.',
            imagen: 'Imagenes_ID/proyecto-eolico-2.jpg',
            potencia: '120 MW',
            anio: '2023',
            ubicacion: 'Galicia, España',
            cliente: 'Consorcio Energético',
            caracteristicas: [
                '40 turbinas offshore de 3 MW',
                'Plataformas flotantes semi-sumergibles',
                'Profundidad: 60-100 metros',
                'Cable submarino de 25 km',
                'Producción: 420 GWh/año',
                'Abastece 140,000 hogares'
            ]
        }
    };

    /* ========================================
       SISTEMA DE FILTRADO
       ======================================== */
    const filtrosBtn = document.querySelectorAll('.filtro-btn');
    const proyectoCards = document.querySelectorAll('.proyecto-card');

    filtrosBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filtrosBtn.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filtro = this.getAttribute('data-filter');
            
            proyectoCards.forEach(card => {
                const categoria = card.getAttribute('data-categoria');
                
                if (filtro === 'todos' || categoria === filtro) {
                    card.classList.remove('oculto');
                    // Animación de entrada
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.classList.add('oculto');
                    }, 300);
                }
            });
        });
    });

    /* ========================================
       MODAL DE PROYECTO
       ======================================== */
    const modal = document.getElementById('modalProyecto');
    const closeBtn = document.querySelector('.close');
    const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

    // Abrir modal
    botonesVerMas.forEach(btn => {
        btn.addEventListener('click', function() {
            const proyectoId = this.getAttribute('data-proyecto');
            mostrarModal(proyectoId);
        });
    });

    // Cerrar modal
    closeBtn.addEventListener('click', cerrarModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            cerrarModal();
        }
    });

    function mostrarModal(proyectoId) {
        const proyecto = proyectosData[proyectoId];
        
        if (!proyecto) return;

        // Rellenar contenido del modal
        document.getElementById('modalImagen').src = proyecto.imagen;
        document.getElementById('modalCategoria').textContent = getCategoriaTexto(proyecto.categoria);
        document.getElementById('modalCategoria').className = `proyecto-categoria ${proyecto.categoria}`;
        document.getElementById('modalTitulo').textContent = proyecto.titulo;
        document.getElementById('modalDescripcion').textContent = proyecto.descripcion;
        document.getElementById('modalPotencia').textContent = proyecto.potencia;
        document.getElementById('modalAnio').textContent = proyecto.anio;
        document.getElementById('modalUbicacion').textContent = proyecto.ubicacion;
        document.getElementById('modalCliente').textContent = proyecto.cliente;

        // Características
        const caracteristicasLista = document.getElementById('modalCaracteristicas');
        caracteristicasLista.innerHTML = '';
        proyecto.caracteristicas.forEach(car => {
            const li = document.createElement('li');
            li.textContent = car;
            caracteristicasLista.appendChild(li);
        });

        // Mostrar modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function cerrarModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    function getCategoriaTexto(categoria) {
        const categorias = {
            'solar': 'Energía Solar',
            'eolica': 'Energía Eólica',
            'almacenamiento': 'Almacenamiento',
            'industrial': 'Industrial'
        };
        return categorias[categoria] || categoria;
    }

    /* ========================================
       ANIMACIÓN DE ENTRADA PARA CARDS
       ======================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    proyectoCards.forEach(card => {
        cardObserver.observe(card);
    });

    /* ========================================
       ANIMACIÓN DE ESTADÍSTICAS (CONTADOR)
       ======================================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animarEstadisticas();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.estadisticas-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    function animarEstadisticas() {
        statNumbers.forEach(stat => {
            const texto = stat.textContent;
            const numero = parseInt(texto.replace(/\D/g, ''));
            const sufijo = texto.replace(/[\d\s]/g, '');
            
            if (!isNaN(numero)) {
                animarContador(stat, 0, numero, 2000, sufijo);
            }
        });
    }

    function animarContador(elemento, inicio, fin, duracion, sufijo) {
        const incremento = fin / (duracion / 16);
        let actual = inicio;
        
        const timer = setInterval(() => {
            actual += incremento;
            if (actual >= fin) {
                actual = fin;
                clearInterval(timer);
            }
            
            const valorMostrar = Math.floor(actual);
            
            if (sufijo.includes('+')) {
                elemento.textContent = valorMostrar + '+';
            } else if (sufijo.includes('MW')) {
                elemento.textContent = valorMostrar + ' MW';
            } else if (sufijo.includes('%')) {
                elemento.textContent = valorMostrar + '%';
            } else {
                elemento.textContent = valorMostrar;
            }
        }, 16);
    }

    /* ========================================
       SMOOTH SCROLL
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    /* ========================================
       HEADER DINÁMICO
       ======================================== */
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    /* ========================================
       ANIMACIÓN CSS ADICIONAL
       ======================================== */
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
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

    /* ========================================
       INFORMACIÓN DE DEBUG
       ======================================== */
    console.log(' Portfolio ID Energy Group iniciado');
    console.log('Total de proyectos:', Object.keys(proyectosData).length);
    console.log(' Sistema de filtrado activo');
    console.log(' Animaciones activadas');
});