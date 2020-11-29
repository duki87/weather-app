import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'wap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  @Output() weatherLocation = new EventEmitter<string>();

  constructor() { }

  myForm:FormGroup;  
  city = new FormControl();
  options: string[] = ['Belgrade', 'Paris', 'Munchen', 'Moscow', 'New York', 'Miami', 'Rome'];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.myForm = new FormGroup({          
      'city': new FormControl(null),
    });

    this.filteredOptions = this.city.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onSelectLocation(location) {
    this.weatherLocation.emit(location);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
