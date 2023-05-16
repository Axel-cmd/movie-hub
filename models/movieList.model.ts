/**
 * Interface pour une liste de films
 */
export interface List {
    id: number,
    name: string,
    movies: Array<number>
}


/** Classe pour générer les ID */
export class ListId {
    static #id = -1

    constructor() {}

    static get nextId() {
        ListId.#id++
        return ListId.#id
    }
}