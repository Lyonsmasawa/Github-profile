import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { apiKey, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  //profile search
  public getUserData(userSearch: string):Observable<any>{//brings back objects
    let dataUrl = `https://api.github.com/users/${userSearch}?access_token=${apiKey}`;
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(2),
      catchError(this.errorHandling)
    );
  }

  //repo search
  public getRepoData(userSearch: string):Observable<any[]>{//repos get arrays
    let dataUrl = `https://api.github.com/users/${userSearch}/repos?access_token=${apiKey}`;
    return this.httpClient.get<any[]>(dataUrl).pipe(
      retry(2),
      catchError(this.errorHandling)
    );
  }

  //catch errors
  public errorHandling(error:HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
       errorMessage = `MESSAGE : ${error.message}`;
    }
    else{
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage)
  }
}
