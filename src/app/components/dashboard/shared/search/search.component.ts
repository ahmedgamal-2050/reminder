import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../components/task.service';
import { Task } from '../../components/tasks';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchValue: string = '';
  @Input() public taskList: Task[] = [];
  @Output() public filter = new EventEmitter<Task[]>();
  @Output() public searching = new EventEmitter<string>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  search(searchValue: string) {
    let filteredTaskList: Task[] = [];
    if (searchValue) {
      filteredTaskList = this.taskService.search(searchValue, this.taskList);
      this.filter.emit(filteredTaskList);
    } else {
      filteredTaskList = [];
      this.filter.emit(filteredTaskList);
    }
    this.searching.emit(searchValue);
  }

}
