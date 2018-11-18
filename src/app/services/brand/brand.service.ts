import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Brand } from '../../models/brand';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class BrandService {

  private brandsUrl = 'http://simplestrips.com/api/wp-json/wp/v2/categories';  // URL to web api

  constructor(private http: HttpClient){}

  // GET: 'BRANDS'
  getBrands (): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.brandsUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getBrands', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BrandService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`BrandService: ${message}`);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
