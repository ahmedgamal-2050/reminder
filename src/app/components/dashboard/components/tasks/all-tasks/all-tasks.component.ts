import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../tasks';
declare let $: any;

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  public taskList: Task[] = [];
  public selectedTask!: Task;
  public emptyTask!: Task;
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';
  public colorList: string[] = ['light', 'info', 'primary', 'warning', 'danger', 'success', 'secondary'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    //console.log(this.taskList);
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
    $("#reminderModal").modal('hide');
  }
}
