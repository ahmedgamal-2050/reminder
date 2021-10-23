"use strict";(self.webpackChunktime_manager_app=self.webpackChunktime_manager_app||[]).push([["src_app_components_dashboard_components_tasks_trash_trash_module_ts"],{6555:(i,n,s)=>{s.r(n),s.d(n,{TrashModule:()=>r});var d=s(3786),l=s(4106),h=s(4364);var m=s(9040),c=s(8902);let a=class{constructor(e){this.taskService=e,this.taskList=[],this.deletedTaskList=[],this.filteredTaskList=[],this.searchValue=""}ngOnInit(){this.taskList=this.taskService.getTaskList(),this.deletedTaskList=this.taskList.filter(e=>!0===e.deleted)}deleteTask(e){for(let t=0;t<this.deletedTaskList.length;t++)this.deletedTaskList[t].id===e.id&&this.deletedTaskList.splice(t,1)}filter(e){e&&(this.filteredTaskList=e)}search(e){this.searchValue=e}openReminderModal(e){this.selectedTask=e,$("#reminderModal").modal("show")}editReminder(e){this.taskService.editReminder(e,this.taskList);for(let t=0;t<this.deletedTaskList.length;t++)this.deletedTaskList[t].id===e.id&&(this.deletedTaskList[t].reminder=e.reminder);$("#reminderModal").modal("hide")}};a.ctorParameters=()=>[{type:c.M}],a=(0,d.gn)([(0,l.wA2)({selector:"app-trash",template:'\x3c!-- Search --\x3e\r\n<app-search [taskList]="deletedTaskList"\r\n            (filter)="filter($event)"\r\n            (searching)="search($event)">\r\n</app-search>\r\n\x3c!-- Page Title --\x3e\r\n<div class="alert-danger p-3 mb-4 w-100">\r\n  <img src="./assets/icons/trash-danger.svg" width="20" height="20" />\r\n  <span class="ms-2 text-danger">Trash</span>\r\n</div>\r\n\x3c!-- Filtered Task Menu --\x3e\r\n<div *ngIf="filteredTaskList?.length && searchValue">\r\n  \x3c!-- Task List Menu --\x3e\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="filteredTaskList"\r\n                 (delete)="deleteTask($event)"\r\n                 (openReminder)="openReminderModal($event)">\r\n  </app-task-list>\r\n</div>\r\n\x3c!-- Filtered Error Msg --\x3e\r\n<div *ngIf="!filteredTaskList?.length && searchValue" class="py-3">\r\n  <div class="alert alert-primary alert-danger w-75 mx-auto">\r\n    There is no task with that name!!\r\n  </div>\r\n</div>\r\n\x3c!-- All Trash Tasks --\x3e\r\n<div *ngIf="!filteredTaskList?.length && !searchValue">\r\n  \x3c!-- Task List Menu --\x3e\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="deletedTaskList"\r\n                 (delete)="deleteTask($event)"\r\n                 (openReminder)="openReminderModal($event)">\r\n  </app-task-list>\r\n</div>\r\n\r\n\x3c!-- Edit Reminder Task Modal --\x3e\r\n<div class="modal fade" id="reminderModal" tabindex="-1" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <app-edit-reminder [selectedTask]="selectedTask"\r\n                         (edit)="editReminder($event)">\r\n      </app-edit-reminder>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[m]})],a);var k=s(3568),p=s(335),T=s(7516);const v=[{path:"trash",component:a}];let r=class{};r=(0,d.gn)([(0,l.LVF)({declarations:[a],imports:[h.ez,k.Bz.forChild(v),p.u5,T.m]})],r)},9040:i=>{i.exports=""}}]);
//# sourceMappingURL=src_app_components_dashboard_components_tasks_trash_trash_module_ts.6b8b436836d39395588f.js.map