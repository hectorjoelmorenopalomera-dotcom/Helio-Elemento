const modal = document.getElementById('appModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');
const appCards = document.querySelectorAll('.app-card');

const applicationDetails = {
    medical: {
        title: '🏥 Aplicaciones Médicas',
        content: `
            <h3>Resonancia Magnética (MRI)</h3>
            <p>El helio líquido es esencial para enfriar los imanes superconductores en equipos de resonancia magnética a temperaturas cercanas al cero absoluto (-269°C).</p>
            
            <h3>Ventajas</h3>
            <ul>
                <li>Permite mantener la superconductividad de los imanes</li>
                <li>Reduce el consumo energético del equipo</li>
                <li>Mejora la calidad de las imágenes diagnósticas</li>
            </ul>
            
            <h3>Consumo</h3>
            <p>Un equipo MRI típico contiene entre 1,500 y 2,000 litros de helio líquido.</p>
        `
    },
    aerospace: {
        title: '🚀 Industria Aeroespacial',
        content: `
            <h3>Presurización de Tanques</h3>
            <p>El helio se utiliza para presurizar tanques de combustible en cohetes, desplazando el combustible hacia los motores.</p>
            
            <h3>Aplicaciones Específicas</h3>
            <ul>
                <li>Cohetes SpaceX Falcon 9 y Falcon Heavy</li>
                <li>Sistema de Lanzamiento Espacial (SLS) de NASA</li>
                <li>Vehículos de lanzamiento comerciales</li>
            </ul>
            
            <h3>Ventajas</h3>
            <ul>
                <li>Inerte y no inflamable</li>
                <li>Baja densidad reduce peso del sistema</li>
                <li>No reacciona con combustibles criogénicos</li>
            </ul>
        `
    },
    diving: {
        title: '🤿 Buceo Profesional',
        content: `
            <h3>Mezclas Heliox</h3>
            <p>Combinación de helio y oxígeno utilizada en buceo a profundidades superiores a 60 metros.</p>
            
            <h3>Beneficios</h3>
            <ul>
                <li>Reduce el riesgo de narcosis por nitrógeno</li>
                <li>Menor densidad facilita la respiración a presión</li>
                <li>Permite inmersiones más profundas y seguras</li>
            </ul>
            
            <h3>Aplicaciones</h3>
            <ul>
                <li>Buceo comercial y de saturación</li>
                <li>Operaciones de rescate submarino</li>
                <li>Exploración de pecios profundos</li>
            </ul>
        `
    },
    industry: {
        title: '🏭 Aplicaciones Industriales',
        content: `
            <h3>Soldadura</h3>
            <p>Atmósfera protectora en soldadura de arco para metales reactivos como aluminio, acero inoxidable y titanio.</p>
            
            <h3>Detección de Fugas</h3>
            <p>Por su pequeño tamaño molecular, el helio es ideal para detectar fugas en sistemas presurizados, tuberías y contenedores.</p>
            
            <h3>Fabricación de Semiconductores</h3>
            <ul>
                <li>Atmósfera controlada en procesos de fabricación</li>
                <li>Enfriamiento de obleas de silicio</li>
                <li>Transporte de calor en equipos de litografía</li>
            </ul>
            
            <h3>Fibra Óptica</h3>
            <p>Atmósfera protectora durante la fabricación de cables de fibra óptica.</p>
        `
    },
    research: {
        title: '🔬 Investigación Científica',
        content: `
            <h3>Criogenia</h3>
            <p>El helio líquido es el refrigerante más frío disponible, alcanzando temperaturas de -269°C.</p>
            
            <h3>Física de Partículas</h3>
            <ul>
                <li>Gran Colisionador de Hadrones (LHC) del CERN</li>
                <li>Enfriamiento de detectores de partículas</li>
                <li>Mantenimiento de imanes superconductores</li>
            </ul>
            
            <h3>Superconductividad</h3>
            <p>Investigación de materiales superconductores y sus aplicaciones tecnológicas.</p>
            
            <h3>Telescopios Espaciales</h3>
            <p>Enfriamiento de sensores infrarrojos en telescopios como el James Webb.</p>
        `
    },
    balloons: {
        title: '🎈 Aerostática',
        content: `
            <h3>Globos Meteorológicos</h3>
            <p>Utilizados para recopilar datos atmosféricos a altitudes de hasta 40 km.</p>
            
            <h3>Dirigibles</h3>
            <ul>
                <li>Publicidad aérea y eventos deportivos</li>
                <li>Vigilancia y monitoreo</li>
                <li>Investigación atmosférica</li>
            </ul>
            
            <h3>Ventajas sobre el Hidrógeno</h3>
            <ul>
                <li>No inflamable ni explosivo</li>
                <li>Seguro para uso recreativo</li>
                <li>97% de la capacidad de elevación del hidrógeno</li>
            </ul>
            
            <h3>Uso Recreativo</h3>
            <p>Globos de fiesta y decoración, aunque su uso está siendo limitado debido a la escasez del recurso.</p>
        `
    }
};

appCards.forEach(card => {
    card.addEventListener('click', () => {
        const appType = card.getAttribute('data-app');
        const details = applicationDetails[appType];
        
        modalContent.innerHTML = `
            <h2>${details.title}</h2>
            <div class="modal-body">
                ${details.content}
            </div>
        `;
        
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

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

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.property-card, .app-card, .fact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
