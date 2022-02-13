import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GitSearchServiceService {

  constructor(private httpClient:HttpClient) {}
    /**
     * locateProfile
     */
    public locateProfile(searchQuery: String) {
      let profileLink = `https://api.github.com/users/${searchQuery}`
    }

}
