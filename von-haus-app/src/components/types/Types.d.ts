// pagination.ts

/**
 * Propiedades para el componente de paginación.
 */
export interface PaginationProps {
    totalDePaginas: number; // Número total de páginas
    currentPage: number; // Página actual
    handleGoToPage: (page: number) => void; // Función para ir a una página específica
    handlePreviousPage: () => void; // Función para ir a la página anterior
    handleNextPage: () => void; // Función para ir a la página siguiente
}

/**
 * Interfaz para representar un artículo.
 */
export interface Article {
    _id: number; // Identificador único del artículo
    titulo: string; // Título del artículo
    subtitulo: string; // Subtítulo del artículo
    image: string; // Imagen del artículo
    texto: string; // Contenido del artículo
    createdAt: string; // Fecha de creación del artículo
}

/**
 * Propiedades para el componente de artículo.
 */
export interface ArticleProps {
    _id: number; // Identificador único del artículo
}

/**
 * Propiedades para el proveedor de autenticación.
 */
export interface LoginProviderProps {
    children: ReactNode; // Componentes secundarios envueltos por el proveedor de autenticación
}

/**
 * Interfaz para representar una galería de imágenes.
 */
export interface Gallery {
    _id: number; // Identificador único de la galería
    titulo: string; // Título de la galería
    image: string; // Imagen de la galería
    descripcion: string; // Descripción de la galería
    createdAt: string; // Fecha de creación de la galería
}

/**
 * Interfaz para representar un usuario.
 */
interface User {
    username: string; // Nombre de usuario
    password: string; // Contraseña del usuario
}

/**
 * Resultado de la validación de autenticación.
 */
interface AuthValidationResult {
    isValid: boolean; // Indica si la autenticación es válida
    message?: string; // Mensaje opcional en caso de autenticación no válida
}