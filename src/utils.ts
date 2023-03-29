const elementById = <T extends HTMLElement>(id: string): T => document.getElementById(id) as T;

const createElement = <T extends HTMLElement>(tagName: keyof HTMLElementTagNameMap): T => document.createElement(tagName) as T;

const randomColor =  function (): string {
    const rgbVals: number[] = Array.from(Array(3))
        .map(() => Math.floor(Math.random() * 255));
    return `rgb(${rgbVals.join(", ")})`;
};

export { elementById, createElement, randomColor };
