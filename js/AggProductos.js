document.addEventListener('DOMContentLoaded', function() {
        const formulario = document.getElementById('formulario-producto');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const precio = document.getElementById('precio').value;
            const imagen = document.getElementById('imagen').files[0]; // Aquí asumo que solo se selecciona una imagen

            // Crear el elemento de producto
            const nuevoProducto = document.createElement('div');
            nuevoProducto.classList.add('producto');

            const imagenProducto = document.createElement('img');
            imagenProducto.src = URL.createObjectURL(imagen);
            imagenProducto.alt = nombre;

            const nombreProducto = document.createElement('h2');
            nombreProducto.textContent = nombre;

            const precioProducto = document.createElement('p');
            precioProducto.textContent = `$${precio}`;

            nuevoProducto.appendChild(imagenProducto);
            nuevoProducto.appendChild(nombreProducto);
            nuevoProducto.appendChild(precioProducto);

            // Botón para eliminar el producto
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('eliminar-producto');
            nuevoProducto.appendChild(botonEliminar);

            // Agregar el nuevo producto a la sección de productos
            const contenedorProductos = document.querySelector('.productos');
            contenedorProductos.appendChild(nuevoProducto);

            // Limpiar el formulario
            formulario.reset();
        });

        // Escuchar eventos de clic en los botones de eliminar producto
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('eliminar-producto')) {
                const producto = event.target.closest('.producto');
                producto.remove(); // Eliminamos el producto
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Escuchamos el clic en los botones de eliminar producto
        document.querySelectorAll('.eliminar-producto').forEach(button => {
            button.addEventListener('click', function() {
                const producto = this.closest('.producto');
                producto.remove(); // Eliminamos el producto
            });
        });

        const formulario = document.getElementById('formulario-producto');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener los valores del formulario

            // Código para crear el nuevo producto

            // Código para agregar el nuevo producto a la sección de productos

            // Limpiar el formulario
            formulario.reset();
        });
    });