"use strict";(self.webpackChunktime_manager_app=self.webpackChunktime_manager_app||[]).push([["common"],{8902:(c,u,o)=>{o.d(u,{M:()=>s});var m=o(3786),l=o(4106),f=o(2281),i=o.n(f);let s=class{constructor(){}getTaskList(){let n,r=[],e=parseInt(i()(new Date).format("yyyyMMDD"));if(localStorage.getItem("taskList")){r=JSON.parse(localStorage.getItem("taskList"));for(let d=0;d<r.length;d++)r[d].reminder&&(n=parseInt(i()(r[d].reminder,"yyyy-MM-DD").format("yyyyMMDD")),r[d].dateStatus=n===e?"today":"");return r}return r}updateTask(r){localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(r))}toggleTaskMenu(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].showMenu=!r.showMenu)}showColorMenu(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].showMenu=!1,e[n].colorMenu=!0)}hideColorMenu(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].showMenu=!1,e[n].colorMenu=!1)}changeColor(r,e,n){for(let d=0;d<e.length;d++)e[d].id===r.id&&(e[d].taskColor=n,e[d].showMenu=!1,e[d].colorMenu=!1);this.updateTask(e)}taskCompleted(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].done=!e[n].done,e[n].showMenu=!1);this.updateTask(e)}togglePinTask(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].pinned=!e[n].pinned,e[n].showMenu=!1);this.updateTask(e)}archiveTask(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].archived=!e[n].archived,e[n].showMenu=!1);this.updateTask(e)}deleteTask(r,e){for(let n=0;n<e.length;n++)e[n].id===r.id&&(e[n].deleted=!e[n].deleted,e[n].pinned=!1,e[n].archived=!1,e[n].done=!1,e[n].showMenu=!1);this.updateTask(e)}search(r,e){return e.filter(n=>n.taskName.toLowerCase().indexOf(r.toLowerCase())>-1)}editReminder(r,e){let n,d=parseInt(i()(new Date).format("yyyyMMDD"));for(let t=0;t<e.length;t++)e[t].id===r.id&&(e[t].reminder=r.reminder,e[t].showMenu=!r.showMenu,e[t].reminder&&(n=parseInt(i()(e[t].reminder,"yyyy-MM-DD").format("yyyyMMDD")),e[t].dateStatus=n===d?"today":""));this.updateTask(e)}};s.ctorParameters=()=>[],s=(0,m.gn)([(0,l.GSi)({providedIn:"root"})],s)},385:(c,u,o)=>{o.d(u,{m:()=>e});var m=o(3786),l=o(4106),f=o(4364);var s=o(3364);let a=class{constructor(){this.edit=new l.vpe}ngOnInit(){}ngOnChanges(d){d.selectedTask.currentValue&&(this.selectedTask=d.selectedTask.currentValue,this.selectedTask&&(this.taskReminder=this.selectedTask.reminder))}editReminder(d){this.selectedTask.reminder=d,this.edit.emit(this.selectedTask)}};a.ctorParameters=()=>[],a.propDecorators={selectedTask:[{type:l.IIB}],edit:[{type:l.r_U}]},a=(0,m.gn)([(0,l.wA2)({selector:"app-edit-reminder",template:'<div class="modal-header">\r\n  <h5 class="modal-title" id="staticBackdropLabel">Edit Task Reminder</h5>\r\n  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r\n</div>\r\n<div class="modal-body">\r\n  <div class="row">\r\n    <div class="col-12 mb-3">\r\n      <label for="reminder" class="mb-1">Reminder</label>\r\n      <input type="date" id="reminder" class="form-control"\r\n              placeholder="mm/dd/yyyy" [(ngModel)]="taskReminder">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="modal-footer">\r\n  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r\n  <button type="button" class="btn btn-success" (click)="editReminder(taskReminder)">Edit</button>\r\n</div>\r\n',styles:[s]})],a);var r=o(335);let e=class{};e=(0,m.gn)([(0,l.LVF)({declarations:[a],imports:[f.ez,r.u5],exports:[a]})],e)},3364:c=>{c.exports=""}}]);
//# sourceMappingURL=common.a3e5f3cbe8360344cfe2.js.map