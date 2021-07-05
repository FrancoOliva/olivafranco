import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ 
    `
    a {
      cursor: pointer;
    }
    `
   ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }

  ngOnInit(): void {

      this.items = [
        {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home',
          routerLink: '/'
        },
        {
            label: 'Proyectos',
            icon: 'pi pi-folder',
            items: [
              {
                label: 'Personales',
                routerLink: 'proyectos-personales'
              },
              {
                label: 'Cursos Online',
                routerLink: 'mini-aplicaciones'
              }
            ]
        },
        {
            label: 'Certificaciones',
            icon: 'pi pi-fw pi-file-pdf',
            routerLink: 'certificaciones'
        },
        {
          label: 'Información Personal',
          icon: 'pi pi-fw pi-user',
          routerLink: 'info-personal'
        }
    ];
  }


}


