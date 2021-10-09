import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public taskList: Task[] = [];
  public deletedTaskList: Task[] = [];
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.deletedTaskList = this.taskList.filter((task: Task) => {
      return (task.deleted === true);
    })
  }

  toggleTaskMenu(task: Task) {
    this.taskService.toggleTaskMenu(task, this.taskList);
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.deletedTaskList.length; i++) {
      if (this.deletedTaskList[i].id === task.id) {
        this.deletedTaskList.splice(i, 1);
      }
    }
    this.taskService.deleteTask(task, this.taskList);
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

