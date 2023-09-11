import { Component } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Solicitudes', url: '/folder/inbox', icon: 'mail' },
    { title: 'Mi Auto', url: '/folder/outbox', icon: 'car' },
    { title: 'Rutas', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Configuracion', url: '/folder/trash', icon: 'trash' },
    { title: 'Cerrar Sesion', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Derechos reservados', 'Politicas de privacidad', 'Terminos y condiciones'];
  constructor() {}
}
