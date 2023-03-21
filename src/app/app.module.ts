import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
        ]),
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
