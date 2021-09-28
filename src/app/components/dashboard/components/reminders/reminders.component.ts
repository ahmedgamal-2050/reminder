import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  public taskList: Task[] = [];
  public reminderTaskList: Task[] = [];
  public pinnedTaskList: Task[] = [];
  public todayTasks: Task[] = [];
  public pastTasks: Task[] = [];
  public futureTasks: Task[] = [];
  public today: number = parseInt(moment(new Date()).format("yyyyMMDD"));
  public filteredTaskList: Task[] = [];
  public searchValue: string = '';
  public filteredReminderTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskList();
    this.getAllReminderTaskList();
  }

  getAllReminderTaskList() {
    let reminderDate: number;
    this.filteredReminderTasks = this.taskList.filter((task: Task) => {
      return (task.reminder && task.done === false && task.archived === false && task.deleted === false);
    })
    if (this.filteredReminderTasks?.length) {
      this.pinnedTaskList = this.filteredReminderTasks.filter((task: Task) => {
        return (task.pinned === true);
      })
      this.reminderTaskList = this.filteredReminderTasks.filter((task: Task) => {
        return (task.pinned === false);
      })
    }
    if (this.reminderTaskList?.length) {
      this.pastTasks = this.reminderTaskList.filter((task: Task) => {
        reminderDate = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
        return (reminderDate < this.today);
      });
      this.todayTasks = this.reminderTaskList.filter((task: Task) => {
        return (task.dateStatus === 'today');
      });
      this.futureTasks = this.reminderTaskList.filter((task: Task) => {
        reminderDate = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
        return (reminderDate > this.today);
      });
    }
  }

  taskCompleted(task: Task) {
    let reminderDate: number = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
    } else if (reminderDate < this.today) {
      for (let i = 0; i < this.pastTasks.length; i++) {
        if (this.pastTasks[i].id === task.id) {
          this.pastTasks.splice(i, 1);
        }
      }
    } else if (reminderDate === this.today) {
      for (let i = 0; i < this.todayTasks.length; i++) {
        if (this.todayTasks[i].id === task.id) {
          this.todayTasks.splice(i, 1);
        }
      }
    } else if (reminderDate > this.today) {
      for (let i = 0; i < this.futureTasks.length; i++) {
        if (this.futureTasks[i].id === task.id) {
          this.futureTasks.splice(i, 1);
        }
      }
    }
    this.taskService.taskCompleted(task, this.taskList);
  }

  toggleTaskMenu(task: Task) {
    this.taskService.toggleTaskMenu(task, this.taskList);
  }

  togglePinTask(task: Task) {
    let reminderDate: number = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
      if (reminderDate < this.today) {
        this.pastTasks.push(task);
      } else if (reminderDate === this.today) {
        this.todayTasks.push(task);
      } else if (reminderDate > this.today) {
        this.futureTasks.push(task);
      }
    } else {
      if (reminderDate < this.today) {
        for (let i = 0; i < this.pastTasks.length; i++) {
          if (this.pastTasks[i].id === task.id) {
            this.pastTasks.splice(i, 1);
          }
        }
      } else if (reminderDate === this.today) {
        for (let i = 0; i < this.todayTasks.length; i++) {
          if (this.todayTasks[i].id === task.id) {
            this.todayTasks.splice(i, 1);
          }
        }
      } else if (reminderDate > this.today) {
        for (let i = 0; i < this.futureTasks.length; i++) {
          if (this.futureTasks[i].id === task.id) {
            this.futureTasks.splice(i, 1);
          }
        }
      }
      this.pinnedTaskList.push(task);
    }
    this.taskService.togglePinTask(task, this.taskList);
  }

  archiveTask(task: Task) {
    let reminderDate: number = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
    } else {
      if (reminderDate < this.today) {
        for (let i = 0; i < this.pastTasks.length; i++) {
          if (this.pastTasks[i].id === task.id) {
            this.pastTasks.splice(i, 1);
          }
        }
      } else if (reminderDate === this.today) {
        for (let i = 0; i < this.todayTasks.length; i++) {
          if (this.todayTasks[i].id === task.id) {
            this.todayTasks.splice(i, 1);
          }
        }
      } else if (reminderDate > this.today) {
        for (let i = 0; i < this.futureTasks.length; i++) {
          if (this.futureTasks[i].id === task.id) {
            this.futureTasks.splice(i, 1);
          }
        }
      }
    }
    this.taskService.archiveTask(task, this.taskList);
  }

  deleteTask(task: Task) {
    let reminderDate: number = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id) {
          this.pinnedTaskList.splice(i, 1);
        }
      }
    } else {
      if (reminderDate < this.today) {
        for (let i = 0; i < this.pastTasks.length; i++) {
          if (this.pastTasks[i].id === task.id) {
            this.pastTasks.splice(i, 1);
          }
        }
      } else if (reminderDate === this.today) {
        for (let i = 0; i < this.todayTasks.length; i++) {
          if (this.todayTasks[i].id === task.id) {
            this.todayTasks.splice(i, 1);
          }
        }
      } else if (reminderDate > this.today) {
        for (let i = 0; i < this.futureTasks.length; i++) {
          if (this.futureTasks[i].id === task.id) {
            this.futureTasks.splice(i, 1);
          }
        }
      }
    }
    this.taskService.deleteTask(task, this.taskList);
  }

  onReminderChange(task: Task) {

  }

  search(searchValue: string) {
    if (searchValue) {
      this.filteredTaskList = this.taskService.search(searchValue, this.filteredReminderTasks);
    } else {
      this.filteredTaskList = [];
    }
  }
}

