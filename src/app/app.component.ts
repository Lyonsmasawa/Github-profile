import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public searchQuery!: String;

  /**
   * searchUser
   */
  public searchUser() {
    //https://api.github.com/users/Lyonsmasawa
    //https://api.github.com/users/Lyonsmasawa/repos
  }
    constructor() {

    }
  ngOnInit(): void{}
}
