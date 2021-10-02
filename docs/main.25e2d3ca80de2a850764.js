(self.webpackChunktime_manager_app=self.webpackChunktime_manager_app||[]).push([["main"],{8255:o=>{function t(s){return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e})}t.keys=()=>[],t.resolve=t,t.id=8255,o.exports=t},2891:(o,t,s)=>{"use strict";s.d(t,{e:()=>e});class e{constructor(){this.loggedIn=!1,this.currentUser=JSON.parse(localStorage.getItem("currentUser")),this.userList=JSON.parse(localStorage.getItem("userList"))}isAuthenticated(){return new Promise((c,m)=>{c(this.loggedIn)})}login(){localStorage.removeItem("loggedIn"),this.loggedIn=!0,localStorage.setItem("loggedIn","true")}logout(){localStorage.removeItem("loggedIn"),localStorage.removeItem("currentUser"),this.loggedIn=!1,localStorage.setItem("loggedIn","false"),alert("You are logged out")}}},6494:(o,t,s)=>{"use strict";s.d(t,{M:()=>a});var e=s(3786);var l=s(9693),c=s(4106),m=s(3568),n=s(2891);let a=class{constructor(r,g){this.authService=r,this.router=g,this.shrink=!1}ngOnInit(){this.currentUser=JSON.parse(localStorage.getItem("currentUser"))}menuShrink(){this.shrink=!this.shrink}logout(){this.currentUser={username:"",password:"",profilePic:"",fullName:"",email:""},this.authService.logout(),this.router.navigate(["/login"])}};a.ctorParameters=()=>[{type:n.e},{type:m.F0}],a=(0,e.gn)([(0,c.wA2)({selector:"app-dashboard",template:'<div class="row mx-0">\r\n  <div [ngStyle]="{\'width.px\': (!shrink? 280 : 50)}" class="mx-0 px-0 h-100vh fixed-top">\r\n    <div class="d-flex flex-column flex-shrink-0 text-white bg-dark h-100">\r\n      <div class="p-3 bg-light">\r\n        <div class="d-flex justify-content-between">\r\n          <div [ngClass]="{\'d-none\': shrink}">\r\n            <img src="./assets/logo.png" width="18" height="18" />\r\n            <span class="ps-1 text-dark">Reminders</span>\r\n          </div>\r\n          <div class="btn p-0" (click)="menuShrink()">\r\n            <img src="./assets/icons/setting.svg" width="18" height="18" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class="nav nav-pills flex-column mb-auto">\r\n        <li class="nav-item">\r\n          <a class="nav-link py-3 text-white" routerLink="prayer" routerLinkActive="active">\r\n            <img src="./assets/icons/prayer.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Prayer</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="home-dashboard" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/dashboard.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Dashboard</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class="nav-link py-3 text-white" routerLink="tasks" routerLinkActive="active">\r\n            <img src="./assets/icons/tasks.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Tasks</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="reminders" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/time.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Reminders</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="my-pocket" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/pocket.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">My Pocket</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="categories" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/categories.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Categories</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="archive" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/archive.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Archive</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a routerLink="trash" routerLinkActive="active" class="nav-link py-3 text-white">\r\n            <img src="./assets/icons/trash.svg" width="16" height="16" />\r\n            <span class="ms-2" [ngClass]="{\'d-none\': shrink}">Trash</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class="mx-auto py-3 clickable" (click)="logout()" *ngIf="shrink">\r\n        <img src="./assets/icons/logout.svg" width="20" height="20" />\r\n      </div>\r\n      <div>\r\n        <a routerLink="profile" [ngClass]="shrink ? \'px-2\': \'px-3\'" routerLinkActive="bg-primary"\r\n           class="text-white text-decoration-none py-3 profile-href d-inline-block w-100">\r\n          <div class="row justify-content-between align-items-center">\r\n            <div class="col">\r\n              <span class="d-inline-block">\r\n                <img style="height:34px;width:34px;" height="34" width="34" class="img-fluid rounded-circle border"\r\n                     src="{{currentUser.profilePic ? currentUser.profilePic : \'./assets/icons/profile.svg\'}}"/>\r\n              </span>\r\n              <span class="ms-2" [ngClass]="{\'d-none\': shrink}">{{ currentUser.username | titlecase }}</span>\r\n            </div>\r\n            <div class="col-auto" (click)="logout()" *ngIf="!shrink">\r\n              <img src="./assets/icons/logout.svg" width="20" height="20" />\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngStyle]="{\'width.px\': (!shrink? \'280\' : \'50\')}" class="col-auto px-0">\r\n  </div>\r\n  <div class="col px-0" [ngStyle]="{\'width\': (!shrink? \'calc(100% - 280px)\' : \'calc(100% - 50px)\')}">\r\n    <div class="container-fluid">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n',styles:[l]})],a)},1944:(o,t,s)=>{"use strict";s.r(t),s.d(t,{DashboardModule:()=>u});var e=s(3786),d=s(4106),l=s(4364),c=s(3568);const m=[{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("src_app_components_dashboard_components_prayer_prayer_module_ts")]).then(s.bind(s,8386)).then(r=>r.PrayerModule),pathMatch:"prefix"},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_home-dashboard_home-dashboard_module_ts")]).then(s.bind(s,7464)).then(r=>r.HomeDashboardModule)},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_tasks_tasks_module_ts")]).then(s.bind(s,2336)).then(r=>r.TasksModule)},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_reminders_reminders_module_ts")]).then(s.bind(s,4052)).then(r=>r.RemindersModule)},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_my-pocket_my-pocket_module_ts")]).then(s.bind(s,9252)).then(r=>r.MyPocketModule)},{path:"",loadChildren:()=>s.e("src_app_components_dashboard_components_categories_categories_module_ts").then(s.bind(s,1649)).then(r=>r.CategoriesModule)},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_archive_archive_module_ts")]).then(s.bind(s,9801)).then(r=>r.ArchiveModule)},{path:"",loadChildren:()=>Promise.all([s.e("default-node_modules_moment_moment_js"),s.e("common"),s.e("src_app_components_dashboard_components_trash_trash_module_ts")]).then(s.bind(s,1244)).then(r=>r.TrashModule)},{path:"",loadChildren:()=>s.e("src_app_components_dashboard_components_profile_profile_module_ts").then(s.bind(s,1712)).then(r=>r.ProfileModule)}];let n=class{};n=(0,e.gn)([(0,d.LVF)({imports:[c.Bz.forChild(m)]})],n);var a=s(6494);let u=class{};u=(0,e.gn)([(0,d.LVF)({declarations:[a.M],imports:[l.ez,n,c.Bz]})],u)},861:(o,t,s)=>{"use strict";s.r(t),s.d(t,{LoginModule:()=>v});var e=s(3786),d=s(4106),l=s(4364);var m=s(8032),n=s(335),a=s(3568),u=s(2891);let r=class{constructor(i,p,x){this.fb=i,this.router=p,this.authService=x,this.userList=[],this.loginError=!1}ngOnInit(){this.authService.userList&&(this.userList=this.authService.userList),this.loginForm=this.fb.group({username:["",[n.kI.required,n.kI.minLength(3),n.kI.pattern("(^[a-zA-Z].*)([^' ']+$)"),n.kI.maxLength(50)]],password:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(50)]]})}login(){if(this.loginError=!1,this.loginForm.dirty&&this.loginForm.valid){if(!this.userList.length)return void alert("this username doesn't exist, Please create an account");for(let i=0;i<this.userList.length;i++)return this.userList[i].username===this.loginForm.value.username&&this.userList[i].password===this.loginForm.value.password?(alert("You are logged in"),localStorage.setItem("currentUser",JSON.stringify(this.userList[i])),this.authService.login(),void this.router.navigate(["/dashboard/prayer"])):(this.loginError=!0,void alert("username or password are not correct, Please try again"))}else this.loginForm.markAsTouched,this.loginForm.invalid}get username(){return this.loginForm.get("username")}get password(){return this.loginForm.get("password")}showPassword(){$("#password").attr("type","text")}};r.ctorParameters=()=>[{type:n.qu},{type:a.F0},{type:u.e}],r=(0,e.gn)([(0,d.wA2)({selector:"app-login",template:'<div class="container pt-5">\r\n  <form [formGroup]="loginForm" (submit)="login()" novalidate class="pt-5 mt-5">\r\n    <div class="row mt-5 justify-content-center">\r\n      <h3 class="text-center mb-5">\r\n        <img src="./assets/logo.png" width="36" height="36" />\r\n        Reminders\r\n      </h3>\r\n      <div class="col-lg-6 col-md-8 col-sm-12">\r\n        <div class="alert alert-danger fs-7" *ngIf="loginError">\r\n          Username or password are not correct, Please try again!!\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-12 mb-3">\r\n            <div class="row mx-0 align-items-center bg-reminder input-reminder-group"\r\n                 [ngClass]="username?.invalid && (username?.dirty || username?.touched) ? \'border border-danger\':\'\'">\r\n              <div class="col-auto px-3">\r\n                <img src="./assets/icons/user.svg" width="20" height="20" />\r\n              </div>\r\n              <div class="col px-0">\r\n                <input type="text" id="username" class="w-100 ps-2 form-reminder-control"\r\n                       placeholder="Username" formControlName="username">\r\n              </div>\r\n            </div>\r\n            <div *ngIf="username?.invalid && (username?.dirty || username?.touched)" class="text-danger">\r\n              <div *ngIf="username.errors && username.errors.required">\r\n                Username is required.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.minlength">\r\n                Username must be at least 3 characters.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.maxLength">\r\n                Username must be 50 characters maximum.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.pattern">\r\n                Username must start with a letter and remove all spaces.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="col-12 mb-3">\r\n            <div class="row mx-0 align-items-center bg-reminder input-reminder-group"\r\n                 [ngClass]="password?.invalid && (password?.dirty || password?.touched) ? \'border border-danger\':\'\'">\r\n              <div class="col-auto px-3">\r\n                <img src="./assets/icons/password.svg" width="20" height="20" />\r\n              </div>\r\n              <div class="col px-0">\r\n                <input class="w-100 ps-2 form-reminder-control" type="password" id="password"\r\n                       placeholder="Password" formControlName="password">\r\n              </div>\r\n              <div class="col-auto px-3 clickable" (click)="showPassword()">\r\n                <img src="./assets/icons/show.svg" width="20" height="20" />\r\n              </div>\r\n            </div>\r\n            <div *ngIf="password?.invalid && (password?.dirty || password?.touched)" class="text-danger">\r\n              <div *ngIf="password.errors && password.errors.required">\r\n                Password is required.\r\n              </div>\r\n              <div *ngIf="password.errors && password.errors.minlength">\r\n                Password must be at least 5 characters.\r\n              </div>\r\n              <div *ngIf="password.errors && password.errors.maxLength">\r\n                Password must be 50 characters maximum.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="mx-0 row justify-content-end ms-auto col-6">\r\n          <button type="submit" class="btn-reminder p-3">\r\n            <img src="./assets/icons/login.svg" width="20" height="20" />\r\n            <span class="ps-2">Login</span>\r\n          </button>\r\n          <a routerLink="/register" class="text-end fs-7 text-decoration-none text-reminder mt-2">\r\n            Create New Account\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n',styles:[m]})],r);const g=[{path:"",component:r}];let v=class{};v=(0,e.gn)([(0,d.LVF)({declarations:[r],imports:[l.ez,a.Bz.forChild(g),n.UX,n.u5]})],v)},120:(o,t,s)=>{"use strict";s.r(t),s.d(t,{RegisterModule:()=>v});var e=s(3786),d=s(4106),l=s(4364);var m=s(2956),n=s(335),a=s(3568),u=s(2891);let r=class{constructor(i,p,x){this.fb=i,this.router=p,this.authService=x,this.userList=[],this.userExists=!1}ngOnInit(){this.authService.userList&&(this.userList=this.authService.userList),this.userForm=this.fb.group({username:["",[n.kI.required,n.kI.minLength(3),n.kI.pattern("(^[a-zA-Z].*)([^' ']+$)"),n.kI.maxLength(50)]],password:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(50)]]}),this.userForm.valueChanges.subscribe(i=>{if(i.username&&this.userList.length)for(let p=0;p<this.userList.length;p++)this.userList[p].username===i.username?this.userExists=!0:this.userExists=!1})}register(){this.userForm.dirty&&this.userForm.valid&&!1===this.userExists?(this.user={username:this.userForm.value.username,password:this.userForm.value.password,email:this.userForm.value.username.toLowerCase()+"@mail.com",profilePic:"",fullName:""},this.userList.push(this.user),localStorage.setItem("userList",JSON.stringify(this.userList)),this.userForm.reset(),this.router.navigate(["/login"])):(this.userForm.markAsTouched,this.userForm.invalid)}get username(){return this.userForm.get("username")}get password(){return this.userForm.get("password")}showPassword(){$("#password").attr("type","text")}};r.ctorParameters=()=>[{type:n.qu},{type:a.F0},{type:u.e}],r=(0,e.gn)([(0,d.wA2)({selector:"app-register",template:'<div class="container pt-5">\r\n  <form [formGroup]="userForm" (submit)="register()" novalidate class="pt-5 mt-5">\r\n    <div class="row mt-5 justify-content-center">\r\n      <h3 class="text-center mb-5">\r\n        <img src="./assets/logo.png" width="36" height="36"/>\r\n        Reminders\r\n      </h3>\r\n      <div class="col-lg-6 col-md-8 col-sm-12">\r\n        <div class="alert alert-danger fs-7" *ngIf="userExists">\r\n          Username already taken by another user, Please try again!!\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-12 mb-3">\r\n            <div class="row mx-0 align-items-center bg-reminder input-reminder-group"\r\n                 [ngClass]="username?.invalid && (username?.dirty || username?.touched) ? \'border border-danger\':\'\'">\r\n              <div class="col-auto px-3">\r\n                <img src="./assets/icons/user.svg" width="20" height="20" />\r\n              </div>\r\n              <div class="col px-0">\r\n                <input type="text" id="username" class="w-100 ps-2 form-reminder-control"\r\n                       placeholder="Username" formControlName="username">\r\n              </div>\r\n            </div>\r\n            <div *ngIf="username?.invalid && (username?.dirty || username?.touched)" class="text-danger">\r\n              <div *ngIf="username.errors && username.errors.required">\r\n                Username is required.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.minlength">\r\n                Username must be at least 3 characters.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.maxLength">\r\n                Username must be 50 characters maximum.\r\n              </div>\r\n              <div *ngIf="username.errors && username.errors.pattern">\r\n                Username must start with a letter and remove all spaces.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="col-12 mb-3">\r\n            <div class="row mx-0 align-items-center bg-reminder input-reminder-group"\r\n                 [ngClass]="password?.invalid && (password?.dirty || password?.touched) ? \'border border-danger\':\'\'">\r\n              <div class="col-auto px-3">\r\n                <img src="./assets/icons/password.svg" width="20" height="20" />\r\n              </div>\r\n              <div class="col px-0">\r\n                <input class="w-100 ps-2 form-reminder-control" type="password" id="password"\r\n                     placeholder="Password" formControlName="password">\r\n              </div>\r\n              <div class="col-auto px-3 clickable" (click)="showPassword()">\r\n                <img src="./assets/icons/show.svg" width="20" height="20" />\r\n              </div>\r\n            </div>\r\n            <div *ngIf="password?.invalid && (password?.dirty || password?.touched)" class="text-danger">\r\n              <div *ngIf="password.errors && password.errors.required">\r\n                Password is required.\r\n              </div>\r\n              <div *ngIf="password.errors && password.errors.minlength">\r\n                Password must be at least 5 characters.\r\n              </div>\r\n              <div *ngIf="password.errors && password.errors.maxLength">\r\n                Password must be 50 characters maximum.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="mx-0 row justify-content-end ms-auto col-6">\r\n          <button type="submit" class="btn-reminder p-3">\r\n            <img src="./assets/icons/register.svg" width="20" height="20" />\r\n            <span class="ps-2">Register</span>\r\n          </button>\r\n          <a routerLink="/login" class="text-end fs-7 text-decoration-none text-reminder mt-2">\r\n            Already Have An Account ?\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n',styles:[m]})],r);const g=[{path:"",component:r,pathMatch:"prefix"}];let v=class{};v=(0,e.gn)([(0,d.LVF)({declarations:[r],imports:[l.ez,a.Bz.forChild(g),n.UX,n.u5]})],v)},5918:(o,t,s)=>{"use strict";var e=s(4106),d=s(7894),l=s(3786),c=s(1570),m=s(3568),n=s(2891);let a=class{constructor(L,I){this.authService=L,this.router=I}canActivate(L,I){return this.authService.isAuthenticated().then(P=>{let M=JSON.parse(localStorage.getItem("loggedIn"));return!(!P&&!M)||(this.router.navigate(["/login"]),!1)})}};a.ctorParameters=()=>[{type:n.e},{type:m.F0}],a=(0,l.gn)([(0,e.GSi)()],a);const r=[{path:"register",loadChildren:()=>Promise.resolve().then(s.bind(s,120)).then(h=>h.RegisterModule),pathMatch:"prefix"},{path:"login",loadChildren:()=>Promise.resolve().then(s.bind(s,861)).then(h=>h.LoginModule)},{path:"dashboard",loadChildren:()=>Promise.resolve().then(s.bind(s,1944)).then(h=>h.DashboardModule),component:s(6494).M,canActivate:[a]}];let g=class{};g=(0,l.gn)([(0,e.LVF)({imports:[m.Bz.forRoot(r)],exports:[m.Bz]})],g);var f=s(3040);let i=class{constructor(){this.title="time-manager-app"}};i=(0,l.gn)([(0,e.wA2)({selector:"app-root",template:"<router-outlet></router-outlet>\r\n",styles:[f]})],i);var p=s(861),x=s(120),w=s(1944),C=s(3882);let y=class{};y=(0,l.gn)([(0,e.LVF)({declarations:[i],imports:[c.b2,g,x.RegisterModule,p.LoginModule,m.Bz,w.DashboardModule,C.JF],providers:[a,n.e],bootstrap:[i]})],y),(0,e.G48)(),(0,d.y)().bootstrapModule(y).catch(h=>console.error(h))},3040:o=>{"use strict";o.exports=""},9693:o=>{"use strict";o.exports=".nav-link {\n  border-radius: unset !important;\n}\n.nav-link:hover {\n  background-color: #ffffff55;\n}\n.nav-link.active {\n  background-color: #ffffff33;\n}\n.nav-link.active img, .nav-link.active svg {\n  transform: rotate(-20deg);\n}\n.profile-href {\n  background-color: #ffffff33;\n}\n.profile-href:hover {\n  background-color: #ffffff55;\n}"},8032:o=>{"use strict";o.exports=""},2956:o=>{"use strict";o.exports=".vertical-middle-page {\n  margin-top: 100px;\n}"}},o=>{o.O(0,["vendor"],()=>{return e=5918,o(o.s=e);var e});o.O()}]);
//# sourceMappingURL=main.25e2d3ca80de2a850764.js.map