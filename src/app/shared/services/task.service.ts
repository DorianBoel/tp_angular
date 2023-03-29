import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Task } from "../models/task";
import { environment as env } from 'src/env/env';

@Injectable({
    providedIn: "root",
})
export class TaskService {

    private _baseUrl = `${env.API_URL}/tasks`;

    private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

    constructor(private _http: HttpClient) {
        this.fetchTasks();
    }

    private fetchTasks() {
        this._http
            .get<Task[]>(this._baseUrl)
            .subscribe((data) => this._tasks$.next(data));
    }

    private newTask(name: string): Task {
        return {
            name,
            finished: false,
        }
    }

    getSubscription(callback: (value: Task[]) => void) {
        return this._tasks$.subscribe(callback);
    }

    getAllTasks() {
        return this._tasks$.value;
    }

    addTask(name: string): void {
        let task = this.newTask(name);
        this._http
            .post<Task>(this._baseUrl, task)
            .subscribe(() => this.fetchTasks());
    }

    updateTask(task: Task): void {
        this._http
            .put<Task>(`${this._baseUrl}/${task.id}`, task)
            .subscribe(() => this.fetchTasks());
    }

    deleteTask(task: Task): void {
        this._http
            .delete<Task>(`${this._baseUrl}/${task.id}`)
            .subscribe(() => this.fetchTasks());
    }

}
