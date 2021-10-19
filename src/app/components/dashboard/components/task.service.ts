import { Injectable } from '@angular/core';
import { Task } from './tasks';
import moment from 'moment';


@Injectable({
  providedIn: "root"
})

export class TaskService {

  constructor() { }

  updateTask(taskList: Task[]) {
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  getTaskList() {
    let taskList: Task[] = [];
    let today: number = parseInt(moment(new Date()).format("yyyyMMDD"));
    let reminderDateNumber: number;
    if (localStorage.getItem('taskList')) {
      taskList = JSON.parse(localStorage.getItem('taskList') as string);
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].reminder) {
          reminderDateNumber = parseInt(moment(taskList[i].reminder, "yyyy-MM-DD").format("yyyyMMDD"));
          if (reminderDateNumber === today) {
            taskList[i].dateStatus = 'today';
          } else {
            taskList[i].dateStatus = '';
          }
        }
      }
      return taskList as Task[];
    } else {
      return taskList;
    }
  }

  search(searchValue: string, taskList: Task[]) {
    return taskList.filter((task: Task) => {
      return (task.taskName.toLowerCase().indexOf(searchValue.toLowerCase() as string) > -1);
    })
  }

  editReminder(task: Task, taskList: Task[]) {
    let reminderDateNumber: number;
    let today: number = parseInt(moment(new Date()).format("yyyyMMDD"));
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].reminder = task.reminder;
        if (taskList[i].reminder) {
          reminderDateNumber = parseInt(moment(taskList[i].reminder, "yyyy-MM-DD").format("yyyyMMDD"));
          if (reminderDateNumber === today) {
            taskList[i].dateStatus = 'today';
          } else {
            taskList[i].dateStatus = '';
          }
        }
        taskList[i].showMenu = !task.showMenu;
      }
    }
    this.updateTask(taskList);
  }
}
