import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../tasks';
declare let $: any;

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
  public selectedTask!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.doneTaskList = this.taskList.filter((task: Task) => {
      return (task.done === true && task.archived === false && task.deleted === false);
    })
  }

  archiveTask(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
  }

  taskCompleted(task: Task) {
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
  }

  filter(filteredTaskList: Task[]) {
    if (filteredTaskList) {
      this.filteredTaskList = filteredTaskList;
    }
  }

  search(searching: string) {
    this.searchValue = searching;
  }

  openReminderModal(task: Task) {
    this.selectedTask = task
    $("#reminderModal").modal('show');
  }

  editReminder(task: Task) {
    this.taskService.editReminder(task, this.taskList);
    for (let i = 0; i < this.doneTaskList.length; i++) {
      if (this.doneTaskList[i].id === task.id) {
        this.doneTaskList[i].reminder = task.reminder;
      }
    }
    $("#reminderModal").modal('hide');
  }
}
