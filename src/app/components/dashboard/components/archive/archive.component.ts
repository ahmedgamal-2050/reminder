import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../tasks';
declare let $: any;

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  public taskList: Task[] = [];
  public archivedTaskList: Task[] = [];
  public filteredTaskList: Task[] = [];
  public pinnedTaskList: Task[] = [];
  public allArchiveTasks: Task[] = [];
  public searchValue: string = '';
  public colorList: string[] = ['light', 'info', 'primary', 'warning', 'danger', 'success', 'secondary'];
  public selectedTask!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.allArchiveTasks = this.taskList.filter((task: Task) => {
      return (task.archived === true && task.deleted === false);
    })
    if (this.allArchiveTasks?.length) {
      this.pinnedTaskList = this.allArchiveTasks.filter((task: Task) => {
        return (task.pinned === true);
      })
      this.archivedTaskList = this.allArchiveTasks.filter((task: Task) => {
        return (task.pinned === false);
      })
    }
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

  togglePinTask(task: Task) {
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
      this.archivedTaskList.push(task);
    } else {
      for (let i = 0; i < this.archivedTaskList.length; i++) {
        if (this.archivedTaskList[i].id === task.id) {
          this.archivedTaskList.splice(i, 1);
        }
      }
      this.pinnedTaskList.push(task);
    }
    this.taskService.togglePinTask(task, this.taskList);
  }

  archiveTask(task: Task) {
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
    } else {
      for (let i = 0; i < this.archivedTaskList.length; i++) {
        if (this.archivedTaskList[i].id === task.id) {
          this.archivedTaskList.splice(i, 1);
        }
      }
    }
    this.taskService.archiveTask(task, this.taskList);
  }

  taskCompleted(task: Task) {
    this.taskService.taskCompleted(task, this.taskList);
  }

  deleteTask(task: Task) {
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
    } else {
      for (let i = 0; i < this.archivedTaskList.length; i++) {
        if (this.archivedTaskList[i].id === task.id) {
          this.archivedTaskList.splice(i, 1);
        }
      }
    }
    this.taskService.deleteTask(task, this.taskList);
  }

  search(searchValue: string) {
    if (searchValue) {
      this.filteredTaskList = this.taskService.search(searchValue, this.allArchiveTasks);
    } else {
      this.filteredTaskList = [];
    }
  }

  openReminderModal(task: Task) {
    this.selectedTask = task
    $("#reminderModal").modal('show');
  }

  editReminder(task: Task) {
    this.taskService.editReminder(task, this.taskList);
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList[i].reminder = task.reminder;
        }
      }
    } else {
      for (let i = 0; i < this.archivedTaskList.length; i++) {
        if (this.archivedTaskList[i].id === task.id) {
          this.archivedTaskList[i].reminder = task.reminder;
        }
      }
    }
    $("#reminderModal").modal('hide');
  }
}


