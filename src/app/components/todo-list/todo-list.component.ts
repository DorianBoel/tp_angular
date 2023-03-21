import { Component } from "@angular/core";
import { Task } from "./task";

@Component({
    selector: "app-todo-list",
    templateUrl: "todo-list.template.html",
})
export class TodoListComponent {

    editing: Task | null = null;

    tasks: Task[] = [
        { name: "TODO 1", finished: true },
        { name: "TODO 2", finished: false },
        { name: "TODO 3", finished: false },
    ];

    getCompleted(): Task[] {
        return this.tasks.filter((el) => el.finished);
    }

    editStart(evt: MouseEvent, task: Task, index: number): void {
        evt.preventDefault();
        this.editing = task;
        setTimeout(() => document.getElementById(`editing${index}`)?.focus());
    }

    editFinish(): void {
        this.editing = null;
    }

    taskClass(task: Task): { [klass: string]: any; } {
        return {
            "has-background-light": task.finished,
            "strikethrough": task.finished,
        }
    }

    addTask(): void {
        let name = `TODO ${this.tasks.length + 1}`
        this.tasks.push({ name, finished: false });
    }
}
