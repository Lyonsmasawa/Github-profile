import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //use these variables to store data collect3ed when from is submited
  public userSearch!: string
  public userProfile: any;
  public userRepository: any[] = [];
  public errorMessage: string | any;


  constructor(private searchService: SearchService) { //link to service

  }
  ngOnInit(): void{
    this.searchService.getUserData("Lyonsmasawa").subscribe((data) => {
      this.userProfile = data
    });

    this.searchService.getRepoData("Lyonsmasawa").subscribe((data) => {
      this.userRepository = data
    });
  }

  //fetch data
  public queryUser(){
    if(this.userSearch === '' || this.userSearch === undefined){
      alert("username is required")
      return;
    }
    this.searchService.getUserData(this.userSearch).subscribe((data) => {
      this.userProfile = data
    } , (error) => {
      this.errorMessage = error;
    });

    this.searchService.getRepoData(this.userSearch).subscribe((data) => {
      this.userRepository = data
    } , (error) => {
      this.errorMessage = error;
    });
  }

}
