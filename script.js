// Manejador de envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener datos del formulario
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Validación simple (chequeo básico)
    if (name && email && phone && message) {
        // En una aplicación real, enviarías estos datos a un servidor
        // Por ahora, solo mostrar una alerta
        alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');
        
        // Reiniciar el formulario
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});