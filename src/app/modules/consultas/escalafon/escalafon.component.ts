import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RutaCarreraService } from 'src/app/services/modules/ruta-carrera.service';
import { EscalafonService } from 'src/app/services/modules/escalafon.service';
import { UsuarioService } from '../../../services/modules/usuario.service';
import { Utilidades } from 'src/app/helper/utilidades';

declare var swal: any;

export class Reporte {
  tipo_categoria_id = 0;
  varcuerpo: any;
  cuerpo_id: any;
  varespecialidad: any;
  especialidad_id = 0;
  vararea: any;
  area_id = 0;
}

@Component({
  selector: 'app-escalafon',
  templateUrl: './escalafon.component.html',
  styleUrls: ['./escalafon.component.scss']
})
export class EscalafonComponent implements OnInit {  

  reporte = new Reporte();

  titleModal = "";
  selectModal: any;
  array: any = [];
  inputform: any;

  currentUser: any;

  varPermisos: any = {
    consultar: 0,
    crear: 0,
    actualizar: 0,
    eliminar: 0
  }

  varlistas: any = [];
  varcategoria: any = [];
  varcuerpo: any = [];
  varcuerpoTemp: any = [];
  varespecialidad: any = [];
  varespecialidadTemp: any = [];
  vararea: any = [];
  varareaTemp: any = [];

  constructor(private api: ApiService,
              private ruta: RutaCarreraService,
              private escalafon: EscalafonService,
              private usuario: UsuarioService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
    this.getPermisos(this.currentUser.usuario, 'RU');
  }

  ngOnInit(): void {
    this.getListas();
  }

  getListas() {
    let varlistas = JSON.parse(localStorage.getItem("listasDinamicasFull") as any);
    this.varcategoria = varlistas.filter((x: any) => x.nombre_lista == 'BAS_TIPO_CATEGORIA');
    this.varcategoria.forEach((x: any) => {
      x.id = x.lista_dinamica_id;
      x.detalle = x.lista_dinamica;
    });
  }

  closeSelectModal(bol: any) {
    this.selectModal = bol;
  }

  changeCategoria(id: any) {
    this.reporte.varcuerpo = "";
    this.reporte.varespecialidad = "";
    this.varespecialidad = [];
    this.reporte.vararea = "";
    this.vararea = [];

    this.ruta.getCuerposByCategoria({ tipo_categoria_id: id }).subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        response.result.forEach((x: any) => {
          x.descripcion = x.cuerpo;
        });
        this.varcuerpo = response.result;
      }
    });

    this.ruta.getEspecialidadesByCategoria({ tipo_categoria_id: id}).subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        response.result.forEach((x: any) => {
          x.descripcion = x.especialidad;
        });
        this.varespecialidad = response.result;
      }
    });

    this.ruta.getAreasByCategoria({ tipo_categoria_id: id}).subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        response.result.forEach((x: any) => {
          x.descripcion = x.area;
        });
        this.vararea = response.result;
      }
    });
  }

  saveCuerpo() {
    this.titleModal = 'Cuerpos';
    this.array = this.varcuerpo;
    this.inputform = 'cuerpo';
    this.selectModal = true;
  }

  saveEspecialidad() {
    this.titleModal = 'Especialidades';
    this.array = this.varespecialidad;
    this.inputform = 'especialidad';
    this.selectModal = true;
  }

  saveArea() {
    this.titleModal = 'Área de Conocimiento';
    this.array = this.vararea;
    this.inputform = 'area';
    this.selectModal = true;
  }

  dataform(inputform: any, data: any) {
    this.selectModal = false;

    if (inputform == 'cuerpo') {
      this.reporte.cuerpo_id = data.cuerpo_id;
      this.reporte.varcuerpo = data.descripcion;

      this.reporte.varespecialidad = "";
      this.reporte.especialidad_id = 0;

      this.reporte.vararea = "";
      this.reporte.area_id = 0;
    }

    if (inputform == 'especialidad') {
      this.reporte.especialidad_id = data.especialidad_id;
      this.reporte.varespecialidad = data.descripcion;

      this.reporte.vararea = "";
      this.reporte.area_id = 0;
    }

    if (inputform == 'area') {
      this.reporte.area_id = data.area_id;
      this.reporte.vararea = data.descripcion;
    }
  }

  export() {
    let uuid = Utilidades.generateGuid();

    this.reporte.tipo_categoria_id = Number(this.reporte.tipo_categoria_id);

    if (this.reporte.especialidad_id == 0) {
      swal({
          type: 'warning',
          title: 'ADVERTENCIA',
          text: 'Por favor seleccione una especialidad',
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });
    }
    else {
      this.escalafon.checkReforteEscalafon(this.reporte).subscribe((data: any) => {
        if (data.existe == 1) {
          swal({
            title: 'Descargando',
            text: 'Espere mientras se descarga el archivo...',
            allowOutsideClick: false,
          });
          swal.showLoading();
    
          this.escalafon.reporteExcel(this.reporte).subscribe(
            (data: any) => {
              swal.close();
    
              const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download =  'escalafon-' + uuid + '.xlsx';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
            },
            (error) => {
              // Manejar errores, por ejemplo, mostrar un mensaje de error con Swal
              swal({
                type: 'error',
                title: 'Error',
                text: 'Hubo un problema al descargar el archivo.',
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: 'Aceptar'
              });
            }
          );
        }
        else {
          swal({
            title: 'LO SIENTO',
            html: `<img src="../assets/images/sad.png" style="margin-bottom: 10px"><h4>No hay información.</h4>`,
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }
  }

  getPermisos(user: any, cod_modulo: any) {
    this.usuario.getPermisosByUser({usuario: user, cod_modulo: cod_modulo}).subscribe(data => {
      let response: any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        this.varPermisos.consultar = response.result.consultar;
        this.varPermisos.crear = response.result.crear;
        this.varPermisos.actualizar = response.result.actualizar;
        this.varPermisos.eliminar = response.result.eliminar;
      }
    })
  }
}
