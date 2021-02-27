import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthorizationService } from '../../myServices/authorization.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class FarmersListComponent implements OnInit {
  public farmers;
  @ViewChild('searchbar') searchbar: ElementRef;
  searchText = '';
  toggleSearch: boolean = false;

  
  constructor(private service: AuthorizationService) { }

  ngOnInit(): void {
    this.service.getFarmers().subscribe((response) => {
      this.farmers = response[1];
      console.log(this.farmers);
    }, error => {
      console.log(error);
    });
  }
  
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  statusUpdate(id, myboolean) {
    this.service.updateAccountStatus(id, myboolean)
      .subscribe(data => {
        console.log(data);
        this.farmers = this.farmers.map((element) => {
          if (element._id == id) {
            element.acountstatus = myboolean;
            console.log('From chang', myboolean);
          }
          return element;
        })
      })

  }

}
