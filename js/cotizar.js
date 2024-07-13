// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const selectedService = urlParams.get('servicio');
//     const preciorecive = urlParams.get('precio');
//     let total = 0;


//     if (selectedService) {
//         document.getElementById('proyecto').value = selectedService;

//         const checkboxes = document.querySelectorAll('#servicios-adicionales input[type="checkbox"]');
//         checkboxes.forEach(checkbox => {
//             if (checkbox.value === selectedService) {
//                 // checkbox.checked = true;
//                 checkbox.parentElement.style.display = 'none';
//             }
//         });
//     }

//     const form = document.getElementById('cotizacionForm');
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const formData = new FormData(form);
//         const data = {};
//         formData.forEach((value, key) => {
//             if (!data[key]) {
//                 data[key] = value;
//             } else {
//                 if (!Array.isArray(data[key])) {
//                     data[key] = [data[key]];
//                 }
//                 data[key].push(value);
//             }
//         });

//         const resultadoDiv = document.getElementById('resultado');
//         resultadoDiv.innerHTML = generateInvoiceHTML(data);
        

//         // Limpiar campos del formulario
//         form.reset();
//     });

//     function generateInvoiceHTML(data) {
//         let additionalServicesHTML = '';
        
//         if (data['servicios[]']) {
//             let additionalServices = data['servicios[]'];
//             if (!Array.isArray(additionalServices)) {
//                 additionalServices = [additionalServices];
//             }
//             additionalServicesHTML = additionalServices.map(service => `<li>${service}</li>`).join('');
//         }
//         return `
//             <h2>Factura de Servicio</h2>
//             <table>
//                 <tr>
//                     <th>Fecha:</th>
//                     <td>${data.fecha}</td>
//                 </tr>
//                 <tr>
//                     <th>Nombre:</th>
//                     <td>${data.nombre}</td>
//                 </tr>
//                 <tr>
//                     <th>Apellido:</th>
//                     <td>${data.apellido}</td>
//                 </tr>
//                 <tr>
//                     <th>Celular:</th>
//                     <td>${data.celular}</td>
//                 </tr>
//                 <tr>
//                     <th>Correo:</th>
//                     <td>${data.correo}</td>
//                 </tr>
//                 <tr>
//                     <th>Servicio a realizar:</th>
//                     <td>${data.proyecto}</td>
//                 </tr>
//                 ${additionalServicesHTML ? `
//                 <tr>
//                     <th>Servicios adicionales:</th>
//                     <td>
//                         <ul>${additionalServicesHTML}</ul>
//                     </td>
//                 </tr>
//                 ` : ''}
//                 <tr>
//                     <th>Requerimiento:</th>
//                     <td>${data.requerimiento}</td>
//                 </tr>
//                 <tr>
//                     <th>¿Cómo se enteró?:</th>
//                     <td>${data.enterar}</td>
//                 </tr>
//                 <tr>
//                     <th>Total:</th>
//                     <td id="preciototal">${total}.00</td>
//                 </tr>
//             </table>
//         `;
//     }

//     const checkboxes = document.querySelectorAll('#servicios-adicionales input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', () => {
//             actualizarTotal();
//         });
//     });

//     function actualizarTotal() {
        
//         // const precioInicial = parseFloat(document.getElementById('precioInicial').value) || 0;
//         const precioInicial = parseFloat(preciorecive) || 0;
//         total = precioInicial;

//         checkboxes.forEach(checkbox => {
//             if (checkbox.checked) {
//                 const precio = parseFloat(checkbox.getAttribute('data-precio')) || 0;
//                 total += precio;
//             }
//         });
        
//     }

//     actualizarTotal(); // Inicializar el total al cargar la página
// });





document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('servicio');
    const preciorecive = urlParams.get('precio');
    let total = 0;

    if (selectedService) {
        document.getElementById('proyecto').value = selectedService;

        const checkboxes = document.querySelectorAll('#servicios-adicionales input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.value === selectedService) {
                checkbox.parentElement.style.display = 'none';
            }
        });
    }

    const form = document.getElementById('cotizacionForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            if (!data[key]) {
                data[key] = value;
            } else {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            }
        });

        localStorage.setItem('cotizacionData', JSON.stringify(data));
        localStorage.setItem('total', total);

        window.location.href = 'resultado.html';
    });

    const checkboxes = document.querySelectorAll('#servicios-adicionales input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            actualizarTotal();
        });
    });

    function actualizarTotal() {
        const precioInicial = parseFloat(preciorecive) || 0;
        total = precioInicial;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const precio = parseFloat(checkbox.getAttribute('data-precio')) || 0;
                total += precio;
            }
        });
    }

    actualizarTotal();
});
