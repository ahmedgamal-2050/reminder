"use strict";(self.webpackChunktime_manager_app=self.webpackChunktime_manager_app||[]).push([["src_app_components_dashboard_components_tasks_tasks_module_ts"],{2997:(o,c,t)=>{t.r(c),t.d(c,{TasksModule:()=>m});var l=t(3786),a=t(4106),h=t(4364),k=t(3568),r=t(335);var v=t(6738);let n=class{constructor(s){this.fb=s,this.addTask=new a.vpe,this.editTask=new a.vpe}ngOnInit(){this.taskForm=this.fb.group({taskName:["",[r.kI.required,r.kI.minLength(3),r.kI.pattern("^[\u0623-\u064aa-zA-Z].*"),r.kI.maxLength(50)]],category:["",[r.kI.minLength(3),r.kI.pattern("^[\u0623-\u064aa-zA-Z].*"),r.kI.maxLength(50)]],reminder:[""]})}ngOnChanges(s){this.selectedTask=s.selectedTask.currentValue,this.selectedTask&&this.taskForm.patchValue({taskName:this.selectedTask.taskName,category:this.selectedTask.category,reminder:this.selectedTask.reminder})}submitTask(){if(this.taskForm.dirty&&this.taskForm.valid){if(this.selectedTask)this.task={id:this.selectedTask.id,taskName:this.taskForm.value.taskName,category:this.taskForm.value.category,reminder:this.taskForm.value.reminder,pinned:this.selectedTask.pinned,archived:this.selectedTask.archived,deleted:this.selectedTask.deleted,done:this.selectedTask.done,showMenu:this.selectedTask.showMenu},this.editTask.emit(this.task);else{let s=parseInt((1e7*Math.random()).toFixed());this.task={id:s,taskName:this.taskForm.value.taskName,category:this.taskForm.value.category,reminder:this.taskForm.value.reminder,pinned:!1,archived:!1,deleted:!1,done:!1,showMenu:!1},this.addTask.emit(this.task)}this.taskForm.reset()}else this.taskForm.markAsTouched(),this.taskForm.markAsDirty()}get taskName(){return this.taskForm.get("taskName")}get category(){return this.taskForm.get("category")}};n.ctorParameters=()=>[{type:r.qu}],n.propDecorators={taskList:[{type:a.IIB}],selectedTask:[{type:a.IIB}],addTask:[{type:a.r_U}],editTask:[{type:a.r_U}]},n=(0,l.gn)([(0,a.wA2)({selector:"app-edit-task",template:'<form [formGroup]="taskForm" (submit)="submitTask()" novalidate>\r\n  <div class="modal-header">\r\n    <h5 class="modal-title" id="staticBackdropLabel">{{ selectedTask ? \'Edit\' : \'Create\'}} Task</h5>\r\n    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r\n  </div>\r\n  <div class="modal-body">\r\n    <div class="row">\r\n      <div class="col-12 mb-3">\r\n        <label for="taskName" class="mb-1">Task Name <span class="text-danger">*</span></label>\r\n        <input type="text" id="taskName" class="form-control"\r\n               placeholder="Task Name" formControlName="taskName"\r\n               [ngClass]="taskName?.invalid && (taskName?.dirty || taskName?.touched) ? \'border-danger\':\'\'">\r\n        <div *ngIf="taskName?.invalid && (taskName?.dirty || taskName?.touched)" class="text-danger">\r\n          <div *ngIf="taskName.errors && taskName.errors.required">\r\n            Task Name is required.\r\n          </div>\r\n          <div *ngIf="taskName.errors && taskName.errors.minlength">\r\n            Task Name must be at least 3 characters.\r\n          </div>\r\n          <div *ngIf="taskName.errors && taskName.errors.maxLength">\r\n            Task Name must be 50 characters maximum.\r\n          </div>\r\n          <div *ngIf="taskName.errors && taskName.errors.pattern">\r\n            Task Name must start with a character.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-12 mb-3">\r\n        <label for="category" class="mb-1">Category <span class="text-danger">*</span></label>\r\n        <input type="text" id="category" class="form-control"\r\n               placeholder="Category" formControlName="category"\r\n               [ngClass]="category?.invalid && (category?.dirty || category?.touched) ? \'border-danger\':\'\'">\r\n        <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="text-danger">\r\n          <div *ngIf="category.errors && category.errors.minlength">\r\n            Category must be at least 3 characters.\r\n          </div>\r\n          <div *ngIf="category.errors && category.errors.maxLength">\r\n            Category must be 50 characters maximum.\r\n          </div>\r\n          <div *ngIf="category.errors && category.errors.maxLength">\r\n            Category must be 50 characters maximum.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-12 mb-3">\r\n        <label for="reminder" class="mb-1">Reminder (Optional)</label>\r\n        <input type="date" id="reminder" class="form-control"\r\n               placeholder="mm/dd/yyyy" formControlName="reminder">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="modal-footer">\r\n    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r\n    <button type="submit" class="btn btn-success">Submit</button>\r\n  </div>\r\n</form>\r\n',styles:[v]})],n);var g=t(7516);var T=t(7488),y=t(8902);let d=class{constructor(s){this.taskService=s,this.taskList=[],this.filteredTaskList=[],this.searchValue="",this.colorList=["light","info","primary","warning","danger","success","secondary"]}ngOnInit(){this.taskList=this.taskService.getTaskList()}openModal(s){this.selectedTask=s,$("#taskModal").modal("show")}createTask(s){this.taskList.push(s),this.taskService.updateTask(this.taskList),$("#taskModal").modal("hide"),alert(`${s.taskName} task created successfully`)}editTask(s){for(let i=0;i<this.taskList.length;i++)this.taskList[i].id===s.id&&(this.taskList[i]=s,this.taskList[i].showMenu=!1);this.taskService.updateTask(this.taskList),$("#taskModal").modal("hide"),alert(`${s.taskName} task updated successfully`)}filter(s){s&&(this.filteredTaskList=s)}search(s){this.searchValue=s}openReminderModal(s){this.selectedTask=s,$("#reminderModal").modal("show")}editReminder(s){this.taskService.editReminder(s,this.taskList),$("#reminderModal").modal("hide")}};d.ctorParameters=()=>[{type:y.M}],d=(0,l.gn)([(0,a.wA2)({selector:"app-all-tasks",template:'\x3c!-- Search --\x3e\r\n<app-search [taskList]="taskList"\r\n            (filter)="filter($event)"\r\n            (searching)="search($event)">\r\n</app-search>\r\n\x3c!-- Page Title --\x3e\r\n<div class="bg-light p-3 mb-4 w-100">\r\n  <img src="../../../../../assets/icons/tasks.svg" width="20" height="20" />\r\n  <span class="ms-2 text-primary">Tasks</span>\r\n</div>\r\n\x3c!-- Page Content --\x3e\r\n\x3c!-- Create New Task --\x3e\r\n<div class="row mx-auto justify-content-between rounded w-75 create-task mb-2"\r\n     (click)="openModal(emptyTask)">\r\n  <div class="col-auto p-3">\r\n    <img src="../../../../../assets/icons/create.svg" width="20" height="20" />\r\n    <span class="ps-3">Create New Task</span>\r\n  </div>\r\n  <div class="col-auto">\r\n    <div class="row">\r\n      <div class="col-auto p-3">\r\n        <img src="../../../../../assets/icons/more-black.svg" width="20" height="20" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\x3c!-- Filtered Task Menu --\x3e\r\n<div *ngIf="filteredTaskList?.length && searchValue">\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="filteredTaskList"\r\n                 (openReminder)="openReminderModal($event)">\r\n  </app-task-list>\r\n</div>\r\n\x3c!-- Filtered Error Msg --\x3e\r\n<div *ngIf="!filteredTaskList?.length && searchValue" class="py-3">\r\n  <div class="alert alert-primary alert-danger w-75 mx-auto">\r\n    There is no task with that name!!\r\n  </div>\r\n</div>\r\n\x3c!-- All Task Menu --\x3e\r\n<div *ngIf="!filteredTaskList?.length && !searchValue">\r\n  <app-task-list [defaultTaskList]="taskList"\r\n                 [showedTaskList]="taskList"\r\n                 (openReminder)="openReminderModal($event)">\r\n  </app-task-list>\r\n</div>\r\n\r\n\x3c!-- Create/Edit Task Modal --\x3e\r\n<div class="modal fade" id="taskModal" tabindex="-1" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <app-edit-task (addTask)="createTask($event)"\r\n                     (editTask)="editTask($event)"\r\n                     [taskList]="taskList"\r\n                     [selectedTask]="selectedTask">\r\n      </app-edit-task>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\x3c!-- Edit Reminder Task Modal --\x3e\r\n<div class="modal fade" id="reminderModal" tabindex="-1" aria-hidden="true">\r\n  <div class="modal-dialog modal-dialog-centered">\r\n    <div class="modal-content">\r\n      <app-edit-reminder [selectedTask]="selectedTask"\r\n                         (edit)="editReminder($event)">\r\n      </app-edit-reminder>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[T]})],d);const f=[{path:"tasks",component:d},{path:"",loadChildren:()=>t.e("src_app_components_dashboard_components_tasks_reminders_reminders_module_ts").then(t.bind(t,1320)).then(e=>e.RemindersModule)},{path:"",loadChildren:()=>t.e("src_app_components_dashboard_components_tasks_my-pocket_my-pocket_module_ts").then(t.bind(t,8282)).then(e=>e.MyPocketModule)},{path:"",loadChildren:()=>t.e("src_app_components_dashboard_components_tasks_archive_archive_module_ts").then(t.bind(t,881)).then(e=>e.ArchiveModule)},{path:"",loadChildren:()=>t.e("src_app_components_dashboard_components_tasks_trash_trash_module_ts").then(t.bind(t,6555)).then(e=>e.TrashModule)}];let m=class{};m=(0,l.gn)([(0,a.LVF)({declarations:[d,n],imports:[h.ez,k.Bz.forChild(f),r.UX,g.m]})],m)},7488:o=>{o.exports=".create-task {\n  opacity: 0.5;\n  border: 1px dashed gray;\n}\n.create-task:hover {\n  opacity: 1;\n}"},6738:o=>{o.exports=""}}]);
//# sourceMappingURL=src_app_components_dashboard_components_tasks_tasks_module_ts.c0ebe4bae791b5caf629.js.map