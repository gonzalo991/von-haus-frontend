import React from "react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
    // Guardamos la función para navegar en una variable
    const navigate = useNavigate();

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
        const keywordInput = ev.currentTarget.keyword as HTMLInputElement;
        const keyword = keywordInput.value.trim(); // Obtener el valor del campo de búsqueda y eliminar espacios en blanco al principio y al final

        if (keyword.length !== 0) { // Verificar si la palabra clave no está vacía
            keywordInput.value = ""; // Limpiar el campo de búsqueda
            navigate(`/resultados?keyword=${encodeURIComponent(keyword)}`); // Navegar a la página de resultados con la palabra clave como parámetro
        }
    }

    return (
        // Formulario de búsqueda
        <form className="px-6 py-2" onSubmit={handleSubmit}>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {/* Icono de búsqueda */}
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                {/* Campo de entrada de búsqueda */}
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 pr-12 text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p"
                    placeholder="Busca un producto"
                    name="keyword" // Nombre del campo para que pueda ser accedido en el handleSubmit
                    required // Campo requerido
                />
                {/* Botón de búsqueda */}
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default Buscador;