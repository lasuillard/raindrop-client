/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Highlight = {
    /**
     * Unique id of highlight
     */
    _id?: string;
    /**
     * Text of highlight (required)
     */
    text?: string;
    /**
     * Color of highlight.
     * Default yellow
     *
     * Can be blue, brown, cyan, gray, green, indigo, orange, pink, purple, red, teal, yellow
     */
    color?: Highlight.color;
    /**
     * Optional note for highlight
     */
    note?: string;
    /**
     * Creation date of highlight
     */
    created?: string;
};

export namespace Highlight {

    /**
     * Color of highlight.
     * Default yellow
     *
     * Can be blue, brown, cyan, gray, green, indigo, orange, pink, purple, red, teal, yellow
     */
    export enum color {
        BLUE = 'blue',
        BROWN = 'brown',
        CYAN = 'cyan',
        GRAY = 'gray',
        GREEN = 'green',
        INDIGO = 'indigo',
        ORANGE = 'orange',
        PINK = 'pink',
        PURPLE = 'purple',
        RED = 'red',
        TEAL = 'teal',
        YELLOW = 'yellow',
    }


}

