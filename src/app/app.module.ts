import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        AppComponent,
        TodoListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        FontAwesomeModule,
        RouterModule.forRoot([
            { path: 'todo', component: TodoListComponent },
        ]),
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
