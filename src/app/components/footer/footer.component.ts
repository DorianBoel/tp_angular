import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Task } from "src/app/shared/models/task";
import { TaskService } from "src/app/shared/services/task.service";

@Component({
    selector: "app-footer",
    templateUrl: "footer.template.html",
})
export class FooterComponent implements OnDestroy {

    private _subscription: Subscription;

    tasks: Task[] = [];

    constructor(private _taskService: TaskService) {
        this._subscription = this._taskService.getSubscription((tasks: Task[]) => {
            this.tasks = tasks;
        });
    }

    getFinishedTasks(): Task[] {
        return this.tasks.filter((el) => el.finished);
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    };

}
