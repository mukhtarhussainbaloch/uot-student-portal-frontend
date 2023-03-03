import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Person} from "../../models/person";
import {Observable} from "rxjs";


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Output() selectedPerson = new EventEmitter<Person>();
  @Input()   personObservable!: Observable<Person>;
  searchTerm: string= ``;

  person: Person = {} as Person;
  constructor() {
   }

  ngOnInit(): void {
    // this.loadPerson();
    this.personObservable.subscribe((person) => {
      console.log(person);
      this.person = person;
    });
  }
  loadPerson() {
    // if (localStorage.getItem('person')) {
    //   // this.person.setValue(JSON.parse(localStorage.getItem('person') || '{}'));
    // }
    // this.personalInfoService.getPerson(this.searchTerm).subscribe((person) => {
    //   console.log(person);
    //   this.person = person;
    //
    // });
  }


}
