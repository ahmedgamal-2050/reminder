import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {
  public categoryForm!: FormGroup;
  public categoryName: string = '';
  @Input() public categoryList?: string[];
  @Output() public addCategory = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      category: [
        '',
        [
          Validators.minLength(3),
          Validators.pattern('^[أ-يa-zA-Z].*'),
          Validators.maxLength(50)
        ]
      ]
    });
  }

  submitCategory() {
    if (this.categoryForm.dirty && this.categoryForm.valid) {
      this.categoryName = this.categoryForm.value.category;
      this.addCategory.emit(this.categoryName);
      this.categoryForm.reset();
    } else {
      this.categoryForm.markAsTouched();
      this.categoryForm.markAsDirty();
    }
  }

  get category() {
    return this.categoryForm.get('username');
  }
}
