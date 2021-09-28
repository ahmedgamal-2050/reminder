import { Component, OnInit } from '@angular/core';
import { Prayer } from '../prayer/prayer';
import { TaskService } from '../task.service';
import { Task } from '../tasks';

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
  public todayPrayers: Prayer[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    if (localStorage.getItem('todayPrayers')) {
      this.todayPrayers = JSON.parse(localStorage.getItem('todayPrayers') as string);
    }
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

  toggleTaskMenu(task: Task) {
    this.taskService.toggleTaskMenu(task, this.taskList);
  }

  taskCompleted(task: Task) {
    this.taskService.taskCompleted(task, this.taskList);
  }

  togglePinTask(task: Task) {
    this.taskService.togglePinTask(task, this.taskList);
  }

  archiveTask(task: Task) {
    for (let i = 0; i < this.todayTasks.length; i++) {
      if (this.todayTasks[i].id === task.id) {
        this.todayTasks.splice(i, 1);
      }
    }
    this.taskService.archiveTask(task, this.taskList);
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.todayTasks.length; i++) {
      if (this.todayTasks[i].id === task.id) {
        this.todayTasks.splice(i, 1);
      }
    }
    this.taskService.deleteTask(task, this.taskList);
  }

  search(searchValue: string) {
    if (searchValue) {
      this.filteredTaskList = this.taskService.search(searchValue, this.todayTasks);
    } else {
      this.filteredTaskList = [];
    }
  }

}
