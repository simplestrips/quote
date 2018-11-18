import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Box } from '../../models/box';
//import { Box } from './hero';
//import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BoxService {

  private heroesUrl = 'http://simplestrips.com/api/wp-json/wp/v2/boxes';  // URL to web api

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  /** GET heroes from the server */
  getBoxes (): Observable<Box[]> {
    return this.http.get<Box[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getBoxes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found
  getBoxNo404<Data>(id: number): Observable<Box> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Box[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Box>(`getBox id=${id}`))
      );
  }
  */

  /** GET hero by id. Will 404 if id not found
  getBox(id: number): Observable<Box> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Box>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Box>(`getBox id=${id}`))
    );
  }
  */

  /* GET heroes whose name contains search term
  searchBoxes(term: string): Observable<Box[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Box[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Box[]>('searchBoxes', []))
    );
  }
  */

  //////// Save methods //////////

  /** POST: add a new hero to the server
  addBox (hero: Box): Observable<Box> {
    return this.http.post<Box>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Box) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Box>('addBox'))
    );
  }
  */

  /** DELETE: delete the hero from the server
  deleteBox (hero: Box | number): Observable<Box> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Box>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Box>('deleteBox'))
    );
  }
   */

  /** PUT: update the hero on the server
  updateBox (hero: Box): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateBox'))
    );
  }
  */

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

  /** Log a BoxService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`BoxService: ${message}`);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
