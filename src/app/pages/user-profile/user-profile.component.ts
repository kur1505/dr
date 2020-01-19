import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  getstate= [{id:'AP',value:'Andhra Pradesh'},
  {id:'AR',value:'Arunachal Pradesh'},
  {id:'AS',value:'Assam'},
  {id:'BR',value:'Bihar'},
  {id:'CT',value:'Chhattisgarh'},
  {id:'GA',value:'Goa'},
  {id:'GJ',value:'Gujarat'},
  {id:'HR',value:'Haryana'},
  {id:'HP',value:'Himachal Pradesh'},
  {id:'JK',value:'Jammu and Kashmir'},
  {id:'JH',value:'Jharkhand'},
  {id:'KA',value:'Karnataka'},
  {id:'KL',value:'Kerala'},
  {id:'MP',value:'Madhya Pradesh'},
  {id:'MH',value:'Maharashtra'},
  {id:'MN',value:'Manipur'},
  {id:'ML',value:'Meghalaya'},
  {id:'MZ',value:'Mizoram'},
  {id:'NL',value:'Nagaland'},
  {id:'OR',value:'Odisha'},
  {id:'PB',value:'Punjab'},
  {id:'RJ',value:'Rajasthan'},
  {id:'SK',value:'Sikkim'},
  {id:'TN',value:'Tamil Nadu'},
  {id:'TG',value:'Telangana'},
  {id:'TR',value:'Tripura'},
  {id:'UT',value:'Uttarakhand'},
  {id:'UP',value:'Uttar Pradesh'},
  {id:'WB',value:'West Bengal'},
  {id:'AN',value:'Andaman and Nicobar Islands'},
  {id:'CH',value:'Chandigarh'},
  {id:'DN',value:'Dadra and Nagar Haveli'},
  {id:'DD',value:'Daman and Diu'},
  {id:'DL',value:'Delhi'},
  {id:'LD',value:'Lakshadweep'},
  {id:'PY',value:'Puducherry'}]
}
