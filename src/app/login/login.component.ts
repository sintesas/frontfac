import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginService } from '../services/auth/login.service';

declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: any = "";
  password: any = "";
  titleLogin = "Iniciar sesión";

  loader = false;

  constructor(private loginService: LoginService, private api: ApiService) {
    let t = localStorage.getItem("_expiredTime");
    if (t != null || t != undefined) {
      localStorage.removeItem("_expiredTime");
    }
  }

  ngOnInit(): void {}

  inputNext() {
    $('.inputp').focus();
  }

  login() {
    this.titleLogin = "Iniciando sesión... Espere";
    this.loginService.login({ usuario: this.usuario, password: this.password }).subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo === 0) {
        localStorage.setItem("currentUser", JSON.stringify(response.user.result));
        this.loader = true;
        setTimeout(() => {
          location.href = "/fac/home";
        }, 1000);
      }
      else {
        swal({
          title: 'ERROR',
          text: response.mensaje,
          allowOutsideClick: false,
          showConfirmButton: true,
          type: 'error'
        }).then((result: any) => {
          if (result) {
            this.titleLogin = "Iniciar sesión";
            this.password = "";
          }
        });
      }
    });
  }

}
