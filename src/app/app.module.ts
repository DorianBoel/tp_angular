import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
    declarations: [
        HeaderComponent,
        AppComponent,
        TodoListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'todo', component: TodoListComponent }
        ]),
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
