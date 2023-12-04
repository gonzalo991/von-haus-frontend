/**
 * Concatena y devuelve una cadena que consiste en las clases proporcionadas.
 *
 * @param {...any} args - Argumentos variables que representan las clases a concatenar.
 * @returns {string} - Cadena de clases concatenadas.
 */
export function classNames(...args: any[]): string {
    // Filtra y elimina valores falsos o nulos del array de clases.
    const filteredClasses = args.filter(Boolean);

    // Concatena las clases con un espacio en blanco y devuelve la cadena resultante.
    return filteredClasses.join(" ");
}