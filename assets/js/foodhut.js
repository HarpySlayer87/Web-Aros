/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
function enviarWhatsApp() {
    // Obtener los valores de los campos del formulario
    const email = document.querySelector('input[type="email"]').value;
    const nombres = document.querySelector('input[placeholder="NOMBRES"]').value;
    const telefono = document.querySelector('input[placeholder="TELEFONO"]').value;
    const comentario = document.querySelector('input[placeholder="COMENTARIO"]').value;

    // Validar que los campos no estén vacíos
    if (!email || !nombres || !telefono || !comentario) {
        alert('Por favor complete todos los campos');
        return;
    }

    // Crear el mensaje con los datos del formulario
    const mensaje = `*Nuevo mensaje de contacto*\n\n` +
        `*Email:* ${email}\n` +
        `*Nombres:* ${nombres}\n` +
        `*Teléfono:* ${telefono}\n` +
        `*Comentario:* ${comentario}`;

    // Número de WhatsApp (reemplazar con el número deseado)
    const numeroWhatsApp = '+573146613190'; // Reemplazar con el número real

    // Crear el enlace de WhatsApp con el mensaje codificado
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
}

// Agregar el evento click al botón de enviar
document.getElementById('rounded-btn').addEventListener('click', function(e) {
    e.preventDefault();
    enviarWhatsApp();
});

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }
