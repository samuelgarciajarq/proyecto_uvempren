document.addEventListener('DOMContentLoaded', () => {
    let currentDate = new Date();
    
    // Elementos del DOM
    const currentDateElement = document.getElementById('current-date');
    const prevDayButton = document.getElementById('prev-day');
    const nextDayButton = document.getElementById('next-day');
    const dateInput = document.getElementById('date-input');
    const openCalendarButton = document.getElementById('open-calendar');

    // Formatear fecha inicial
    function updateDateDisplay() {
        currentDateElement.textContent = currentDate.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dateInput.value = currentDate.toISOString().split('T')[0];
    }

    // Navegación días
    prevDayButton.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateDisplay();
    });

    nextDayButton.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateDisplay();
    });

    // Selector de fecha
    openCalendarButton.addEventListener('click', () => {
        dateInput.showPicker();
    });

    dateInput.addEventListener('change', (e) => {
        currentDate = new Date(e.target.value);
        updateDateDisplay();
    });

    // Inicializar con fecha actual
    updateDateDisplay();
});



document.querySelectorAll('.menu-trigger').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const menu = this.closest('.ejercicio').querySelector('.menu-desplegable');
        document.querySelectorAll('.menu-desplegable').forEach(otherMenu => {
            if (otherMenu !== menu) otherMenu.classList.remove('active');
        });
        menu.classList.toggle('active', this.checked);
    });
});

document.querySelectorAll('.borg-item').forEach(item => {
    item.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.borg-item').forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Nuevo código para el botón Enviar
document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function() {
        const menu = this.closest('.menu-desplegable');
        const checkbox = menu.closest('.ejercicio').querySelector('.menu-trigger');
        
        // Cerrar el menú
        menu.classList.remove('active');
        
        // Aquí puedes agregar la lógica para enviar los datos
        const selectedValue = menu.querySelector('.selected')?.dataset.value;
        const comment = menu.querySelector('.comentario').value;
        
        console.log('Datos enviados:', {
            valor: selectedValue,
            comentario: comment
        });
    });
});





if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Mejora la detección de toques
document.querySelectorAll('.servicio-card').forEach(card => {
    let isTouching = false;
    
    card.addEventListener('touchstart', () => {
        isTouching = true;
        card.style.transform = 'scale(0.92) translateY(3px)';
    });

    card.addEventListener('touchend', () => {
        if(isTouching) {
            isTouching = false;
            card.style.transform = '';
        }
    });

    // Prevención de toques fantasmas
    card.addEventListener('touchmove', (e) => {
        if(isTouching) e.preventDefault();
    });
});