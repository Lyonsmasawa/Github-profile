import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-prof',
  templateUrl: './user-prof.component.html',
  styleUrls: ['./user-prof.component.css']
})
export class UserProfComponent implements OnInit {

  @Input() userProfile: any;
  constructor() { }

  ngOnInit(): void {
  }

}
