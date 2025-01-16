import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ListaDinamicaService } from '../services/modules/lista-dinamica.service';
import { environment } from '../../environments/environment';
import IdleTimer from '../../assets/libs/IdleTimer';

declare var $:any;

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit, OnDestroy {

  sideBarOpen = true;
  modal: boolean = false;
  timer: any;

  constructor(private api: ApiService, private listaDinamica: ListaDinamicaService) {}

  ngOnInit(): void {
    this.getListasDinamicasFull();
    let t = localStorage.getItem("_expiredTime");
    if (t == null || t == undefined) {
      localStorage.removeItem("_expiredTime");

      this.timer = new IdleTimer({
        timeout: 60 * 5, //expired after 5 min
        onTimeout: () => {
          this.logout();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.timer = null;
  }

  getListasDinamicasFull() {
    this.listaDinamica.getListasDinamicasFull().subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        localStorage.setItem('listasDinamicasFull', JSON.stringify(response.result));
      }
    });
  }

  openModal() {
    this.modal = true;
  }
  
  closeModal(bol: any) {
    this.modal = bol;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  logout() {
    setTimeout(() => {
      localStorage.clear();
      location.href = `${ environment.logout }`;
    }, 10);
  }

}
