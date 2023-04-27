import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diplome } from '../../modules/diplome';
import { SharedService } from '../../services/shared-dep/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
detail : any;
liste : Diplome[]=[];
@Input('parentData') public  title ;
@Output() public Nombredip = new EventEmitter() ;
  constructor(private myservice:SharedService) { }

  ngOnInit(): void {
    this.getNombre();
  }

getNombre (){
  this.myservice.NombreDiplome().subscribe((data)=>{this.detail=data},   
  );
  console.log(  this.detail)
}
eventsize(){
  this.Nombredip.emit(this.detail + ' Diplome(s)')
 
}
}
