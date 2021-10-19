import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';
declare let $: any;

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  public taskList: Task[] = [];
  public todayTasks: Task[] = [];
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';
  public colorList: string[] = ['light', 'info', 'primary', 'warning', 'danger', 'success', 'secondary'];
  public remindersList: Task[] = [];
  public pocketsTasks: Task[] = [];
  public archiveList: Task[] = [];
  public remindersNo: number = 0;
  public pocketsNo: number = 0;
  public tasksNo: number = 0;
  public archiveNo: number = 0;
  public selectedTask!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.todayTasks = this.taskList.filter((task: Task) => {
      return (task.dateStatus === 'today' && task.deleted === false && task.archived === false);
    });
    this.tasksNo = this.taskList.length;
    this.getReminderNo(this.taskList);
    this.getPocketsNo(this.taskList);
    this.getArchiveNo(this.taskList);
  }

  getReminderNo(taskList: Task[]) {
    this.remindersList = taskList.filter((task: Task) => {
      return (task.reminder);
    });
    this.remindersNo = this.remindersList.length;
  }

  getPocketsNo(taskList: Task[]) {
    this.pocketsTasks = this.taskList.filter((task: Task) => {
      return (task.done === true);
    });
    this.pocketsNo = this.pocketsTasks.length;
  }

  getArchiveNo(taskList: Task[]) {
    this.archiveList = this.taskList.filter((task: Task) => {
      return (task.archived === true);
    });
    this.archiveNo = this.archiveList.length;
  }

  archiveTask(task: Task) {
    for (let i = 0; i < this.todayTasks.length; i++) {
      if (this.todayTasks[i].id === task.id) {
        this.todayTasks.splice(i, 1);
      }
    }
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.todayTasks.length; i++) {
      if (this.todayTasks[i].id === task.id) {
        this.todayTasks.splice(i, 1);
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
    for (let i = 0; i < this.todayTasks.length; i++) {
      if (this.todayTasks[i].id === task.id && task.reminder) {
        this.todayTasks.splice(i, 1);
      }
    }
    this.taskService.editReminder(task, this.taskList);
    $("#reminderModal").modal('hide');
  }

}
