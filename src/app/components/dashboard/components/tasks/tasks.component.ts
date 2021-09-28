import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';
declare let $: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  public taskList: Task[] = [];
  public selectedTask!: Task;
  public emptyTask!: Task;
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';
  public colorList: string[] = ['light', 'info', 'primary', 'warning', 'danger', 'success', 'secondary'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
  }

  openModal(task: Task) {
    this.selectedTask = task;
    $("#taskModal").modal('show');
  }

  createTask(task: Task) {
    this.taskList.push(task);
    this.taskService.updateTask(this.taskList);
    $("#taskModal").modal('hide');
    alert(`${task.taskName} task created successfully`);
  }

  editTask(task: Task) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === task.id) {
        this.taskList[i] = task;
        this.taskList[i].showMenu = false;
      }
    }
    this.taskService.updateTask(this.taskList);
    $("#taskModal").modal('hide');
    alert(`${task.taskName} task updated successfully`);
  }

  toggleTaskMenu(task: Task) {
    this.taskService.toggleTaskMenu(task, this.taskList);
  }

  showColorMenu(task: Task) {
    this.taskService.showColorMenu(task, this.taskList);
  }

  hideColorMenu(task: Task) {
    this.taskService.hideColorMenu(task, this.taskList);
  }

  changeColor(task: Task, color: string) {
    this.taskService.changeColor(task, this.taskList, color);
  }

  taskCompleted(task: Task) {
    this.taskService.taskCompleted(task, this.taskList);
  }

  togglePinTask(task: Task) {
    this.taskService.togglePinTask(task, this.taskList);
  }

  archiveTask(task: Task) {
    this.taskService.archiveTask(task, this.taskList);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task, this.taskList);
  }

  search(searchValue: string) {
    if (searchValue) {
      this.filteredTaskList = this.taskService.search(searchValue, this.taskList);
    } else {
      this.filteredTaskList = [];
    }
  }
}
