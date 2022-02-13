import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiAccessKey } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GitSearchServiceService {

  constructor(private httpClient:HttpClient) {}
    /**
     * locateProfile
     */
    public locateProfile(searchQuery: String) {
      let profileLink = `https://api.github.com/users/${searchQuery}?client_id=${apiAccessKey}`
      return this.httpClient.get(profileLink).pipe(
        
      )
    }

}
