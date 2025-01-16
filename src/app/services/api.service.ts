import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

declare var swal:any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = `${ environment.url }`;
  private baseurl = this.url + "apiplan/api/";
  private reporteurl = this.url + "apiplan/";

  constructor() { }

  public getHttpOptions(tipo = 'l'): any {
    if (tipo == 'l') {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=utf8',
          'Data-Type': 'json'
        })
      };
    }
    else if (tipo == 'g') {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Data-Type': 'json',
          'Accept': 'json',
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        })
      };
    }
    else if (tipo == 'b') {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=utf8',
          'Data-Type': 'json'
        }),
        responseType: 'blob' as 'json'
      };
    }
    else if (tipo == 'e') {
      return {
        responseType: 'blob'
      }
    }
  }

  get getBaseUrl() {
    return this.baseurl;
  }

  get getReporteUrl() {
    return this.reporteurl;
  }

  /* Error Exceptions */
  public errorHandle(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.Message;
      swal({
        type: 'error',
        text: errorMessage
      });
    }
    else {
      if (error.status === 0) {
        errorMessage = "El servicio está apagado o inaccesible. Contacte a su administrador";
        swal({
          title: 'ERROR',
          type: 'error',
          text: errorMessage,
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        }).then((result: any) => {
          setTimeout(() => {
            localStorage.clear();
            window.location.href = "/";
          }, 50);
        });
      }
      else if (error.status === 401) {
        errorMessage = "Su sesión ha expirado. Intente conectarse nuevamente.";
        swal({
          title: 'ERROR AUTENTICACIÓN',
          type: 'error',
          text: errorMessage,
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        }).then((result: any) => {
          setTimeout(() => {
            localStorage.clear();
            window.location.href = `${ environment.logout }`;
          }, 50);
        });
      }
      else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        swal({
          title: 'ERROR',
          type: 'error',
          text: errorMessage,
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });
      }
    }

    return throwError(errorMessage);
  }

  public ProcesarRespuesta(request: any) {
    if (request != undefined && request.tipo != 0 && request.tipo != -1) {
      swal({
        title: 'ERROR EN EL SISTEMA',
        text: request.mensaje,
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        type: 'error'
      })
    }
    if (request != undefined && request.tipo == -1) {
      swal({
        title: 'ADVERTENCIA',
        text: request.mensaje,
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        type: 'warning'
      })
    }
    if (request != undefined && request.tipo == -1 && request.codigo == 2) {
      swal({
        title: 'ADVERTENCIA',
        type: 'error',
        text: request.mensaje,
        confirmButtonText: 'Aceptar'
      }).then((result: any) => {
        setTimeout(() => {
          localStorage.clear();
          window.location.href = `${ environment.logout }`;
        }, 50);
      });
    }

    return request;
  }
}
