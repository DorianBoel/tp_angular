import "./styles/styles.scss";
import { elementById as _id, createElement as _ce, randomColor } from "./utils";

(function () {
    const init: () => void = function() {
        const useRandomColorCheck: HTMLInputElement = _id("useRandomColor");
        const colorPick: HTMLInputElement = _id("colorPick");
        const squares: HTMLDivElement = _id("squares");
        const addSquareBtn: HTMLButtonElement = _id("addSquare");
        const resetBtn: HTMLButtonElement = _id("reset");

        let useRandomColor: boolean = true;

        function toggleUseRandomColor(evt: Event) {
            if (evt.target instanceof HTMLInputElement) {
                useRandomColor = evt.target.checked;
                colorPick.toggleAttribute("disabled", useRandomColor);
            }
        }

        function addSquare() {
            const square: HTMLDivElement = _ce("div");
            square.classList.add("square");
            square.style.backgroundColor = !useRandomColor ? colorPick.value : randomColor();
            squares.appendChild(square);
        }

        function reset() {
            squares.innerHTML = "";
        }

        useRandomColorCheck.addEventListener("input", toggleUseRandomColor);
        addSquareBtn.addEventListener("click", addSquare);
        resetBtn.addEventListener("click", reset);

        colorPick.disabled = true;
        useRandomColorCheck.checked = true;
    }

    document.addEventListener("DOMContentLoaded", init);
})();
