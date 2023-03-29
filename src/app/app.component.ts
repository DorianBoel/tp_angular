import { Component } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-component",
    templateUrl: "app.template.html",
})
export class AppComponent {

    constructor(private iconLibrary: FaIconLibrary) {
        iconLibrary.addIcons(
            faPlus,
            faPenToSquare,
            faTrash,
        );
    }

}
