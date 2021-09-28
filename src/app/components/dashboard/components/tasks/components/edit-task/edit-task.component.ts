import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../tasks';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnChanges {
  public taskForm!: FormGroup;
  public task!: Task;
  @Input() public taskList?: Task[];
  @Input() public selectedTask!: Task;
  @Output() public addTask = new EventEmitter<Task>();
  @Output() public editTask = new EventEmitter<Task>();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[أ-يa-zA-Z].*'),
          Validators.maxLength(50)
        ]
      ],
      category: [
        '',
        [
          Validators.minLength(3),
          Validators.pattern('^[أ-يa-zA-Z].*'),
          Validators.maxLength(50)
        ]
      ],
      reminder: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedTask = changes.selectedTask.currentValue as Task;

    if (this.selectedTask) {
      this.taskForm.patchValue({
        taskName: this.selectedTask.taskName,
        category: this.selectedTask.category,
        reminder: this.selectedTask.reminder
      });
    }
  }

  submitTask() {
    if (this.taskForm.dirty && this.taskForm.valid) {
      if (this.selectedTask) {
        this.task = {
          id: this.selectedTask.id,
          taskName: this.taskForm.value.taskName,
          category: this.taskForm.value.category,
          reminder: this.taskForm.value.reminder,
          pinned: this.selectedTask.pinned,
          archived: this.selectedTask.archived,
          deleted: this.selectedTask.deleted,
          done: this.selectedTask.done,
          showMenu: this.selectedTask.showMenu
        }
        this.editTask.emit(this.task);
      } else {
        let randomNum = parseInt((Math.random() * 10000000).toFixed());
        this.task = {
          id: randomNum,
          taskName: this.taskForm.value.taskName,
          category: this.taskForm.value.category,
          reminder: this.taskForm.value.reminder,
          pinned: false,
          archived: false,
          deleted: false,
          done: false,
          showMenu: false
        }
        this.addTask.emit(this.task);
      }
      this.taskForm.reset();
    } else {
      this.taskForm.markAsTouched();
      this.taskForm.markAsDirty();
    }
  }

  get taskName() {
    return this.taskForm.get('taskName');
  }

  get category() {
    return this.taskForm.get('category');
  }
}
