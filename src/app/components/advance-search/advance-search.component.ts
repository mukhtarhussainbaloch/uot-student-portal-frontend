import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css'],
})
export class AdvanceSearchComponent {
  searchForm = this.fb.group({
    searchFields: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  addSearchField() {
    this.searchFields.push(this.fb.control(''));
  }
  get searchFields() {
    return this.searchForm.get('searchFields') as FormArray;
  }

  removeSearchField(index: number) {
    this.searchFields.removeAt(index); // (this.fb.control(''));
  }

  search() {}
}
