import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tienda',
  standalone: false,
  
  templateUrl: './tienda.component.html', 
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

  
data: any [] = [];  // se guardan todos los productos de la base de datos

constructor(private apiService: ApiService){}
 
ngOnInit(): void{   //Trae los productos una vez haya iniciado Angular
  this.getAllDisfraces();
}

ngOnChanges(): void{

}

getAllDisfraces(){
  this.apiService.getDisfraces().subscribe((res:any)=> {
    this.data = res;
    console.log(this.data);
  })
}

deleteDisfraz(id: string){
  console.log("Eliminando producto: ", id);
  if(confirm("¿Está seguro de querer eliminar este producto?")){
    this.apiService.deleteDisfraz(id).subscribe({
      next: (res) => {
        console.log("Producto Eliminado", res);
        this.getAllDisfraces();
      }, error: (err) => {
        console.log("Error al eliminar el producto", err);
      }
    })
  }
}

}
