import { Injectable } from '@angular/core';
import { Task } from './tasks';
import moment from 'moment';


@Injectable({
  providedIn: "root"
})

export class TaskService {

  constructor() { }

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

  updateTask(taskList: Task[]) {
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  toggleTaskMenu(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].showMenu = !task.showMenu;
      }
    }
  }

  showColorMenu(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].showMenu = false;
        taskList[i].colorMenu = true;
      }
    }
  }

  hideColorMenu(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].showMenu = false;
        taskList[i].colorMenu = false;
      }
    }
  }

  changeColor(task: Task, taskList: Task[], color: string) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].taskColor = color;
        taskList[i].showMenu = false;
        taskList[i].colorMenu = false;
      }
    }
    this.updateTask(taskList);
  }

  taskCompleted(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].done = !taskList[i].done;
        taskList[i].showMenu = false;
      }
    }
    this.updateTask(taskList);
  }

  togglePinTask(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].pinned = !taskList[i].pinned;
        taskList[i].showMenu = false;
      }
    }
    this.updateTask(taskList);
  }

  archiveTask(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].archived = !taskList[i].archived;
        taskList[i].showMenu = false;
      }
    }
    this.updateTask(taskList);
  }

  deleteTask(task: Task, taskList: Task[]) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id) {
        taskList[i].deleted = !taskList[i].deleted;
        taskList[i].pinned = false;
        taskList[i].archived = false;
        taskList[i].done = false;
        taskList[i].showMenu = false;
      }
    }
    this.updateTask(taskList);
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
        taskList[i].showMenu = !task.showMenu;
        if (taskList[i].reminder) {
          reminderDateNumber = parseInt(moment(taskList[i].reminder, "yyyy-MM-DD").format("yyyyMMDD"));
          if (reminderDateNumber === today) {
            taskList[i].dateStatus = 'today';
          } else {
            taskList[i].dateStatus = '';
          }
        }
      }
    }
    this.updateTask(taskList);
  }
}
