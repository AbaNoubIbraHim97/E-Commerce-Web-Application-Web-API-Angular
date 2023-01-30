import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/ViewModel/Classes/Interfaces/api-iproduct';
import { Observable, of } from 'rxjs';
import { DataServiceService } from 'src/app/Services/data-service.service';


@Component({
  selector: 'app-addtochart',
  templateUrl: './addtochart.component.html',
  styleUrls: ['./addtochart.component.css']
})
export class AddtochartComponent implements OnInit {
  
  items;

  constructor(private cartService: DataServiceService) {
    

  
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}