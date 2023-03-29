import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { TaskService } from "src/app/shared/services/task.service";
import { Task } from "../../shared/models/task";

@Component({
    selector: "app-todo-list",
    templateUrl: "todo-list.template.html",
})
export class TodoListComponent implements OnDestroy {

    private _subscription: Subscription;

    editing: Task | null = null;

    tasks: Task[] = [];

    constructor(private _taskService: TaskService) {
        this._subscription = this._taskService.getSubscription((tasks) => this.tasks = tasks);
    }

    addTask(): void {
        let name = `TODO ${this.tasks.length + 1}`
        this._taskService.addTask(name);
    }

    toggleFinished(task: Task): void {
        if (this.editing !== task) {
            task.finished = !task.finished;
            this._taskService.updateTask(task);
        }
    }

    editStart(task: Task, index: number): void {
        this.editing = task;
        setTimeout(() => document.getElementById(`editing${index}`)?.focus());
    }

    editFinish(): void {
        if (this.editing !== null) {
            this._taskService.updateTask(this.editing);
            this.editing = null;
        }
    }

    deleteTask(task: Task) {
        this._taskService.deleteTask(task);
    }

    taskClassList(task: Task): { [klass: string]: any; } {
        return {
            "has-background-light": task.finished,
            "strikethrough": task.finished,
        }
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    };

}
