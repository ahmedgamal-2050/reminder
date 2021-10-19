import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../components/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() public defaultTaskList: Task[] = [];
  @Input() public showedTaskList: Task[] = [];
  @Output() delete = new EventEmitter<Task>();
  @Output() archive = new EventEmitter<Task>();
  @Output() pin = new EventEmitter<Task>();
  @Output() complete = new EventEmitter<Task>();
  @Output() openReminder = new EventEmitter<Task>();
  public colorList: string[] = ['light', 'info', 'primary', 'warning', 'danger', 'success', 'secondary'];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.showedTaskList);
  }

  updateTask(taskList: Task[]) {
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  toggleTaskMenu(task: Task) {
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].showMenu = !task.showMenu;
      }
    }
  }

  showColorMenu(task: Task) {
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].showMenu = false;
        this.defaultTaskList[i].colorMenu = true;
      }
    }
  }

  hideColorMenu(task: Task) {
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].showMenu = false;
        this.defaultTaskList[i].colorMenu = false;
      }
    }
  }

  changeColor(task: Task, color: string) {
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].taskColor = color;
        this.defaultTaskList[i].showMenu = false;
        this.defaultTaskList[i].colorMenu = false;
      }
    }
    this.updateTask(this.defaultTaskList);
  }

  taskCompleted(task: Task) {
    this.complete.emit(task);
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].done = !this.defaultTaskList[i].done;
        this.defaultTaskList[i].deleted = false;
        this.defaultTaskList[i].showMenu = false;
      }
    }
    this.updateTask(this.defaultTaskList);
  }

  togglePinTask(task: Task) {
    this.pin.emit(task);
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].pinned = !this.defaultTaskList[i].pinned;
        this.defaultTaskList[i].showMenu = false;
      }
    }
    this.updateTask(this.defaultTaskList);
  }

  archiveTask(task: Task) {
    this.archive.emit(task);
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].archived = !this.defaultTaskList[i].archived;
        this.defaultTaskList[i].showMenu = false;
      }
    }
    this.updateTask(this.defaultTaskList);
  }

  deleteTask(task: Task) {
    this.delete.emit(task);
    for (let i = 0; i < this.defaultTaskList.length; i++) {
      if (this.defaultTaskList[i].id === task.id) {
        this.defaultTaskList[i].deleted = !this.defaultTaskList[i].deleted;
        this.defaultTaskList[i].pinned = false;
        this.defaultTaskList[i].archived = false;
        this.defaultTaskList[i].done = false;
        this.defaultTaskList[i].showMenu = false;
      }
    }
    this.updateTask(this.defaultTaskList);
  }

  openReminderModal(task: Task) {
    this.openReminder.emit(task);
  }
}
