let idCount = 0;
/**
 * Generates a unique ID with the format 'auId-[counter]'.
 *
 * @returns The generated ID.
 */
export const generateId = () => `auId-${idCount++}`;
