import { Component } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Solicitudes', url: '/folder/Solicitudes', icon: 'albums-outline' },
    { title: 'Mi Auto', url: '/folder/Mi Auto', icon: 'car-sport-outline' },
    { title: 'Rutas', url: '/folder/Rutas', icon: 'Rutas' },
    { title: 'Mensajes', url: '/folder/Mensajes', icon: 'Mensajes' },
    { title: 'Configuración', url: '/folder/Configuración', icon: 'Configuración' },
    { title: 'Cerrar Sesión', url: '/folder/Cerrar sesión', icon: 'Cerrar Sesión' },
  ];
  public labels = ['Derechos reservados', 'Politicas de privacidad', 'Terminos y condiciones'];
  constructor(private alertController: AlertController) {}


  async presentLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            // Agrega aquí la lógica para cerrar la sesión
            // Esto podría incluir la eliminación de tokens de autenticación, redirección, etc.
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
