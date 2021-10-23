"use strict";(self.webpackChunktime_manager_app=self.webpackChunktime_manager_app||[]).push([["src_app_components_dashboard_components_tasks_my-pocket_my-pocket_module_ts"],{8282:(r,a,s)=>{s.r(a),s.d(a,{MyPocketModule:()=>n});var d=s(3786),l=s(4106),o=s(4364);var c=s(839),k=s(8902);let i=class{constructor(t){this.taskService=t,this.taskList=[],this.doneTaskList=[],this.filteredTaskList=[],this.searchValue=""}ngOnInit(){this.taskList=this.taskService.getTaskList(),this.doneTaskList=this.taskList.filter(t=>!0===t.done&&!1===t.archived&&!1===t.deleted)}archiveTask(t){for(let e=0;e<this.doneTaskList.length;e++)this.doneTaskList[e].id===t.id&&this.doneTaskList.splice(e,1);for(let e=0;e<this.filteredTaskList.length;e++)this.filteredTaskList[e].id===t.id&&this.filteredTaskList.splice(e,1)}deleteTask(t){for(let e=0;e<this.doneTaskList.length;e++)this.doneTaskList[e].id===t.id&&this.doneTaskList.splice(e,1);for(let e=0;e<this.filteredTaskList.length;e++)this.filteredTaskList[e].id===t.id&&this.filteredTaskList.splice(e,1)}taskCompleted(t){for(let e=0;e<this.doneTaskList.length;e++)this.doneTaskList[e].id===t.id&&this.doneTaskList.splice(e,1);for(let e=0;e<this.filteredTaskList.length;e++)this.filteredTaskList[e].id===t.id&&this.filteredTaskList.splice(e,1)}filter(t){t&&(this.filteredTaskList=t)}search(t){this.searchValue=t}openReminderModal(t){this.selectedTask=t,$("#reminderModal").modal("show")}editReminder(t){this.taskService.editReminder(t,this.taskList);for(let e=0;e<this.doneTaskList.length;e++)this.doneTaskList[e].id===t.id&&(this.doneTaskList[e].reminder=t.reminder);$("#reminderModal").modal("hide")}};i.ctorParameters=()=>[{type:k.M}],i=(0,d.gn)([(0,l.wA2)({selector:"app-my-pocket",template:'\x3c!-- Search --\x3e\r\n<app-search [taskList]="doneTaskList"\r\n            (filter)="filter($event)"\r\n            (searching)="search($event)">\r\n</app-search>\r\n\x3c!-- Page Title --\x3e\r\n<div class="alert-success p-3 mb-4 w-100">\r\n  <img src="./assets/icons/pocket-success.svg" width="20" height="20" />\r\n  <span class="ms-2 text-success">My Pocket</span>\r\n</div>\r\n\x3c!-- Filtered Task Menu --\x3e\r\n<div *ngIf="filteredTaskList?.length && searchValue">\r\n  \x3c!-- Task List Menu --\x3e\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="filteredTaskList"\r\n                 (delete)="deleteTask($event)"\r\n                 (archive)="archiveTask($event)"\r\n                 (openReminder)="openReminderModal($event)"\r\n                 (complete)="taskCompleted($event)">\r\n  </app-task-list>\r\n</div>\r\n\x3c!-- Filtered Error Msg --\x3e\r\n<div *ngIf="!filteredTaskList?.length && searchValue" class="py-3">\r\n  <div class="alert alert-primary alert-danger w-75 mx-auto">\r\n    There is no task with that name!!\r\n  </div>\r\n</div>\r\n\x3c!-- All Reminder Tasks --\x3e\r\n<div *ngIf="!filteredTaskList?.length && !searchValue">\r\n  \x3c!-- Task List Menu --\x3e\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="doneTaskList"\r\n                 (delete)="deleteTask($event)"\r\n                 (archive)="archiveTask($event)"\r\n                 (openReminder)="openReminderModal($event)"\r\n                 (complete)="taskCompleted($event)">\r\n  </app-task-list>\r\n</div>\r\n\r\n\x3c!-- Edit Reminder Task Modal --\x3e\r\n<div class="modal fade" id="reminderModal" tabindex="-1" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <app-edit-reminder [selectedTask]="selectedTask"\r\n                         (edit)="editReminder($event)">\r\n      </app-edit-reminder>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[c]})],i);var m=s(3568),p=s(335),T=s(7516);const f=[{path:"my-pocket",component:i}];let n=class{};n=(0,d.gn)([(0,l.LVF)({declarations:[i],imports:[o.ez,m.Bz.forChild(f),p.u5,T.m]})],n)},839:r=>{r.exports=".task-menu {\n  cursor: pointer;\n}\n.task-menu:hover {\n  background-color: #457AFB33;\n}\n.pinned {\n  border-left-width: 15px !important;\n  border-left-color: orange !important;\n}"}}]);
//# sourceMappingURL=src_app_components_dashboard_components_tasks_my-pocket_my-pocket_module_ts.186a0eefb79dd2ba20e3.js.map