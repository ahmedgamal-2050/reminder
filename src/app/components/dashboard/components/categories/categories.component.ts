import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
declare let $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public taskList: Task[] = [];
  public categoryList: string[] = [];
  public filteredCategoryList: string[] = [];
  public searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
    let categories: string[] = [];
    if (localStorage.getItem('categoryList')) {
      this.categoryList = JSON.parse(localStorage.getItem('categoryList') as string);
    } else if (!localStorage.getItem('categoryList') && localStorage.getItem('taskList')) {
      this.taskList = JSON.parse(localStorage.getItem('taskList') as string);
      categories = this.taskList.map((task: Task) => {
        return task.category as string;
      });
      this.categoryList = [...new Set(categories)];
    }
  }

  search(searchValue: string) {
    if (searchValue) {
      this.filteredCategoryList = this.categoryList.filter((category: string) => {
        return (category.toLowerCase().indexOf(searchValue.toLowerCase() as string) > -1);
      })
    } else {
      this.filteredCategoryList = [];
    }
  }

  openCategoryModal() {
    $("#categoryModal").modal('show');
  }

  createCategory(category: string) {
    this.categoryList.push(category);
    localStorage.removeItem('categoryList');
    localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
    $("#categoryModal").modal('hide');
    alert(`${category} category created successfully`);
  }

  deleteCategory(category: string) {
    for (let i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i] === category) {
        this.categoryList.splice(i, 1);
      }
    }
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].category === category) {
        this.taskList[i].category = '';
      }
    }
    localStorage.removeItem('categoryList');
    localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    alert(`${category} category deleted successfully`);
  }
}
