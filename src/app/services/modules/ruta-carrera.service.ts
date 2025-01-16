import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class RutaCarreraService {

  // Ruta Carrera
  private apiGetRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/getRutaCarrera";
  private apiCreateRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/crearRutaCarrera";
  private apiUpdateRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/actualizarRutaCarrera";
  private apiEliminarRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/eliminarRutaCarrera";
  private apiGetGradosByEspecialidad = this.api.getBaseUrl + "auth/rutacarrera/getGradosByEspecialidad";
  private apiGetGradosDetalleByEspecialidad = this.api.getBaseUrl + "auth/rutacarrera/getGradosDetalleByEspecialidad";
  private apiGetGradosDetalleCargo = this.api.getBaseUrl + "auth/rutacarrera/getGradosDetalleCargo";
  private apiGetGradosDetalleRequerimiento = this.api.getBaseUrl + "auth/rutacarrera/getGradosDetalleRequerimiento";
  private apigetGradosDetalleRequisitoLey = this.api.getBaseUrl + "auth/rutacarrera/getGradosDetalleRequisitoLey";
  private apiGetCuerposByCategoria = this.api.getBaseUrl + "auth/rutacarrera/getCuerposByCategoria";
  private apiGetEspecialidadesByCategoria = this.api.getBaseUrl + "auth/rutacarrera/getEspecialidadesByCategoria";
  private apiGetAreasByCategoria = this.api.getBaseUrl + "auth/rutacarrera/getAreasByCategoria";
  private apiGetEspecialidadesByCategoriaCuerpo = this.api.getBaseUrl + "auth/rutacarrera/getEspecialidadesByCategoriaCuerpo";
  private apiGetAreasByCategoriaEspecialidad = this.api.getBaseUrl + "auth/rutacarrera/getAreasByCategoriaEspecialidad";
  private apiGetDetalleCargoRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/getDetalleCargoRutaCarrera";
  private apiGetCuerposEspecialidadesAreasRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/getCuerposEspecialidadesAreasRutaCarrera";
  private apiGetEspecialidadesRutas = this.api.getBaseUrl + "auth/rutacarrera/getEspecialidadesRutas";
  private apiGetRutaCarreraActivos = this.api.getBaseUrl + "auth/rutacarrera/getRutaCarreraActivos";
  private apiGetWidthByRutas = this.api.getBaseUrl + "auth/rutacarrera/getWidthByRutas";
  private apiRutasExportarExcel = this.api.getBaseUrl + "auth/rutacarrera/export";

  // Rutas
  private apiGetRutas = this.api.getBaseUrl + "auth/rutacarrera/getRutas";
  private apiCreateRutas = this.api.getBaseUrl + "auth/rutacarrera/crearRutas";
  private apiUpdateRutas = this.api.getBaseUrl + "auth/rutacarrera/actualizarRutas";
  private apiDeleteRuta = this.api.getBaseUrl + "auth/rutacarrera/eliminarRuta";
  private apiGetRutasByRutaCarrera = this.api.getBaseUrl + "auth/rutacarrera/getRutasByRutaCarrera";
  private apiGetCargosByRutas = this.api.getBaseUrl + "auth/rutacarrera/getCargosByRutas";
  private apiGetRutasFull = this.api.getBaseUrl + "auth/rutacarrera/getRutasFull";

  constructor(private http: HttpClient, private api: ApiService) { }

  // Ruta Carrera
  public getRutaCarrera(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public createRutaCarrera(data: any): Observable<any> {
    return this.http.post<any>(this.apiCreateRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public updateRutaCarrera(data: any): Observable<any> {
    return this.http.post<any>(this.apiUpdateRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public eliminarRutaCarrera(data: any): Observable<any> {
    return this.http.post<any>(this.apiEliminarRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getGradosByEspecialidad(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetGradosByEspecialidad, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getGradosDetalleByEspecialidad(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetGradosDetalleByEspecialidad, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getGradosDetalleCargo(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetGradosDetalleCargo, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getGradosDetalleRequerimiento(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetGradosDetalleRequerimiento, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getGradosDetalleRequisitoLey(data: any): Observable<any> {
    return this.http.post<any>(this.apigetGradosDetalleRequisitoLey, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getCuerposByCategoria(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetCuerposByCategoria, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getEspecialidadesByCategoria(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetEspecialidadesByCategoria, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getAreasByCategoria(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetAreasByCategoria, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getEspecialidadesByCategoriaCuerpo(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetEspecialidadesByCategoriaCuerpo, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getAreasByCategoriaEspecialidad(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetAreasByCategoriaEspecialidad, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getDetalleCargoRutaCarrera(data: any): Observable<any> {
    return this.http.post<any>(this.apiGetDetalleCargoRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getCuerposEspecialidadesAreasRutaCarrera(): Observable<any> {
    return this.http.get<any>(this.apiGetCuerposEspecialidadesAreasRutaCarrera, this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getEspecialidadesRutas(): Observable<any> {
    return this.http.get<any>(this.apiGetEspecialidadesRutas, this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getRutaCarreraActivos() : Observable<any> {
    return this.http.get<any>(this.apiGetRutaCarreraActivos, this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }  

  // Rutas
  public getRutas(data: any) : Observable<any> {
    return this.http.post<any>(this.apiGetRutas, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public createRutas(data: any) : Observable<any> {
    return this.http.post<any>(this.apiCreateRutas, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public updateRutas(data: any) : Observable<any> {
    return this.http.post<any>(this.apiUpdateRutas, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public deleteRuta(data: any): Observable<any> {
    return this.http.post<any>(this.apiDeleteRuta, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getRutasByRutaCarrera(data: any) : Observable<any> {
    return this.http.post<any>(this.apiGetRutasByRutaCarrera, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getCargosByRutas(data: any) : Observable<any> {
    return this.http.post<any>(this.apiGetCargosByRutas, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getRutasFull(): Observable<any> {
    return this.http.get<any>(this.apiGetRutasFull, this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public getWidthByRutas(data: any) : Observable<any> {
    return this.http.post<any>(this.apiGetWidthByRutas, JSON.stringify(data), this.api.getHttpOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }

  public rutasExportarExcel() {
    return this.http.get(this.apiRutasExportarExcel, this.api.getHttpOptions('e'));
  }
}
