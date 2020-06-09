import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from "jquery";
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'Doctor profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/masters', title: 'MediMapping',  icon:'ni-planet text-blue', class: '' },
    { path: '/tables', title: 'Follow-up',  icon:'ni-bullet-list-67 text-info', class: '' },
    { path: '/vaccinationpatient', title: 'Vaccination',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/patient', title: 'Patient',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
     { path: '/maps', title: 'Calender',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   $(document).ready(function(){
    
            $(".drp" ).click(function() {

      if($(this).find('a')[0].getAttribute("aria-expanded")=="true"){
            $(this).find('a')[0].setAttribute("aria-expanded","false");
            $(this).find('div').removeClass('in show');
      }
      else{
      console.log(false)
      $(this).find('a')[0].setAttribute("aria-expanded","true");
      
      $(this).find('div').addClass('in show');
      }  
      });
  });

  }
}
