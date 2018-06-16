import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchServiceClient} from "../services/search.service.client";
import {SearchList} from "../models/search.model.client";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  search: String;
  category:String;
  searchList: SearchList[];
  test;

  searchCraigs()
  {
    console.log("Search list component ts:"+this.search);
    console.log("Search list component ts:"+this.category);
    this.service
      .searchCraigs(this.search,this.category)
      .subscribe((response) => {
        this.searchList = response;
      }
        );

      // .then(searchResult => this.searchResult = searchResult);
    console.log("BAck to client"+ this.searchList);
  }

  constructor(private router: Router,
              private service: SearchServiceClient) { }

  ngOnInit() {
  }

}
