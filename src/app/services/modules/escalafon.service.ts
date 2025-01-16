import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class EscalafonService {

  private apiEscalafonExport = this.api.getBaseUrl + "auth/escalafon/export";
  private apiCheckReporteEscalafon = this.api.getBaseUrl + "auth/escalafon/checkReforteEscalafon";

  constructor(private http: HttpClient, private api: ApiService) { }

  public reporteExcel(data: any) {
    return this.http.post<any>(this.apiEscalafonExport, JSON.stringify(data), this.api.getHttpOptions('b'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public checkReforteEscalafon(data: any): Observable<any> {
    return this.http.post<any>(this.apiCheckReporteEscalafon, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }
}
