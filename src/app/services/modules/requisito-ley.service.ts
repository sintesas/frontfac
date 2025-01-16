import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class RequisitoLeyService {

  private apiGetRequisitosLey = this.api.getBaseUrl + "auth/requisitoley/getRequisitosLey";
  private apiCreateRequisitosLey = this.api.getBaseUrl + "auth/requisitoley/crearRequisitosLey";
  private apiUpdateRequisitosLey = this.api.getBaseUrl + "auth/requisitoley/actualizarRequisitosLey";

  private apiGetRequisitosEspecialidades = this.api.getBaseUrl + "auth/requisitoley/getRequisitosEspecialidades";
  private apiCreateRequisitosEspecialidades = this.api.getBaseUrl + "auth/requisitoley/crearRequisitosEspecialidades";
  private apiUpdateRequisitosEspecialidades = this.api.getBaseUrl + "auth/requisitoley/actualizarRequisitosEspecialidades";

  private apiGetRequisitosGrados = this.api.getBaseUrl + "auth/requisitoley/getRequisitosGrados";
  private apiCreateRequisitosGrados = this.api.getBaseUrl + "auth/requisitoley/crearRequisitosGrados";
  private apiUpdateRequisitosGrados = this.api.getBaseUrl + "auth/requisitoley/actualizarRequisitosGrados";

  constructor(private http: HttpClient, private api: ApiService) { }

  public getRequisitosLey(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetRequisitosLey, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public createRequisitosLey(data: any): Observable<any> {
    return this.http.post<any>(this.apiCreateRequisitosLey, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public updateRequisitosLey(data: any): Observable<any> {
    return this.http.post<any>(this.apiUpdateRequisitosLey, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getRequisitosEspecialidades(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetRequisitosEspecialidades, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public createRequisitosEspecialidades(data: any): Observable<any> {
    return this.http.post<any>(this.apiCreateRequisitosEspecialidades, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public updateRequisitosEspecialidades(data: any): Observable<any> {
    return this.http.post<any>(this.apiUpdateRequisitosEspecialidades, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getRequisitosGrados(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetRequisitosGrados, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public createRequisitosGrados(data: any): Observable<any> {
    return this.http.post<any>(this.apiCreateRequisitosGrados, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public updateRequisitosGrados(data: any): Observable<any> {
    return this.http.post<any>(this.apiUpdateRequisitosGrados, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }
}
