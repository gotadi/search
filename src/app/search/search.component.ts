import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';
import {FormControl} from '@angular/forms';
import {Search} from '../models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'Smart search';

  searchTerm: FormControl = new FormControl();
  searchs: Search[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term !== '') {
          this.searchService.fetchData(term).subscribe(
            res => this.searchs = res
          );
        }
      }
    );
  }

}
