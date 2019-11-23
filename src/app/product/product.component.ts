import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/entities';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  loading = true;
  constructor(private route: ActivatedRoute, private pService: ProductService, private router: Router) {  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.pService.getProduct(res.id).subscribe(resp => {
        this.loading = false;
        this.product = resp;
      }, error => {
        console.log('ERRO: ' + error);
        this.router.navigate(['/e404']);
      });
    });
  }
}
