import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlimagen = '../../../assets/icon/clima.png';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  error = false;
  nombre_ciudad = '';

  constructor(private _climaservice: ClimaService) {

  }

  ngOnInit(): void {

  }

  obtenerClima() {
    this.loading = true; //Se utiliza para empezar a mostrar el spinner
    this.query = false;
    this._climaservice.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.nombre_ciudad = this.ciudad;
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    }, error => {
      console.log(error);
      this.loading = false;
      this.MostrarError();
    })
  }

  MostrarError() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
      this.ciudad = '';
    }, 3000)
  }


}
