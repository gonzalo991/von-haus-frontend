// Configuración de los módulos y formatos para el editor React Quill

// Definición de los módulos que estarán disponibles en la barra de herramientas del editor.
export const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],         // Opciones para los encabezados de texto
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],   // Estilos de texto
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],  // Listas y sangrías
        ['link', 'image', 'video'],            // Enlaces, imágenes y videos
        ['clean'],                             // Limpiar formato
    ],
};

// Definición de los formatos disponibles en el editor.
export const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',   // Estilos de texto y bloques
    'list', 'bullet', 'indent',            // Listas y sangrías
    'link', 'image', 'video',              // Enlaces, imágenes y videos
];