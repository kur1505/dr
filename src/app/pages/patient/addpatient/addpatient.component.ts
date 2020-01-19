import { Component, OnInit } from '@angular/core';
import { DynamicGrid } from './grid.model'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddPatientComponent implements OnInit {

  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {};  
  constructor() { }

  ngOnInit() {
    this.newDynamic = {title1: "", title2: "",title3:""};  
    this.dynamicArray.push(this.newDynamic);  
    console.log(this.dynamicArray);  
  }
  addRow(index) {    
    console.log(this.dynamicArray.length);  
    this.newDynamic = {title1: "", title2: "",title3:""};  
    this.dynamicArray.push(this.newDynamic);  
    Swal.fire('New row added successfully', 'New Row',"success");  
    
    return true;  
}  
  
deleteRow(index) {  
    if(this.dynamicArray.length ==1) {  
      Swal.fire("Can't delete the row when there is only one row", 'Warning',"error");  
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
        Swal.fire('Row deleted successfully', 'Delete row',"success");  
        return true;  
    }  
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
