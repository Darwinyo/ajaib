import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {
  storage: Storage;
  user:string;
  constructor() {
    this.storage=sessionStorage;
   }

  ngOnInit() {
    this.user=this.storage.getItem('user');
  }

}
