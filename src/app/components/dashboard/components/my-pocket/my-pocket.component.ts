import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-my-pocket',
  templateUrl: './my-pocket.component.html',
  styleUrls: ['./my-pocket.component.scss']
})
export class MyPocketComponent implements OnInit {
  public taskList: Task[] = [];
  public doneTaskList: Task[] = [];
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.doneTaskList = this.taskList.filter((task: Task) => {
      return (task.done === true && task.archived === false && task.deleted === false);
    })
  }

  toggleTaskMenu(task: Task) {
    this.taskService.toggleTaskMenu(task, this.taskList);
  }

  togglePinTask(task: Task) {
    this.taskService.togglePinTask(task, this.taskList);
  }

  archiveTask(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    this.taskService.archiveTask(task, this.taskList);
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    this.taskService.deleteTask(task, this.taskList);
  }

  taskCompleted(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    this.taskService.taskCompleted(task, this.taskList);
  }

  filter(filteredTaskList: Task[]) {
    if (filteredTaskList) {
      this.filteredTaskList = filteredTaskList;
    }
  }

  search(searching: string) {
    this.searchValue = searching;
  }
}
