import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { TaskService } from '../../task.service';
import { Task } from '../../tasks';
declare let $: any;

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
  public selectedTask!: Task;

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
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
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
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
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
    for (let i = 0; i < this.filteredTaskList.length; i++) {
      if (this.filteredTaskList[i].id === task.id) {
        this.filteredTaskList.splice(i, 1);
      }
    }
  }

  openReminderModal(task: Task) {
    this.selectedTask = task;
    $("#reminderModal").modal('show');
  }

  editReminder(task: Task) {
    let reminderDate: number = parseInt(moment(task.reminder, "yyyy-MM-DD").format("yyyyMMDD"));
    let oldReminderDate: number = 0;
    this.taskList = this.taskService.getTaskList();
    if (task.pinned) {
      for (let i = 0; i < this.pinnedTaskList.length; i++) {
        if (this.pinnedTaskList[i].id === task.id && this.pinnedTaskList[i].reminder !== task.reminder) {
          this.pinnedTaskList[i].reminder = task.reminder;
        }
      }
    } else {
      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].id === task.id) {
          oldReminderDate = parseInt(moment(this.taskList[i].reminder, "yyyy-MM-DD").format("yyyyMMDD"));
          if (oldReminderDate < this.today) {
            for (let i = 0; i < this.pastTasks.length; i++) {
              if (this.pastTasks[i].id === task.id) {
                this.pastTasks.splice(i, 1);
              }
            }
          } else if (oldReminderDate === this.today) {
            for (let i = 0; i < this.todayTasks.length; i++) {
              if (this.todayTasks[i].id === task.id) {
                this.todayTasks.splice(i, 1);
              }
            }
          } else if (oldReminderDate > this.today) {
            for (let i = 0; i < this.futureTasks.length; i++) {
              if (this.futureTasks[i].id === task.id) {
                this.futureTasks.splice(i, 1);
              }
            }
          }
        }
      }
      if (reminderDate < this.today) {
        this.pastTasks.push(task);
      } else if (reminderDate === this.today) {
        task.dateStatus = 'today';
        this.todayTasks.push(task);
      } else if (reminderDate > this.today) {
        this.futureTasks.push(task);
      }
    }
    this.taskService.editReminder(task, this.taskList);
    $("#reminderModal").modal('hide');
  }

  filter(filteredTaskList: Task[]) {
    if (filteredTaskList) {
      this.filteredTaskList = filteredTaskList;
    }
  }

  search(searching: string) {
    this.searchValue = searching;
  }
}

