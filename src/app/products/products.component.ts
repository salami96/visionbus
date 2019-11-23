import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/entities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Todos os Móveis';
  products: Product[];
  filteredProducts: Product[];
  search = false;
  query: string;
  constructor(private pService: ProductService) { }
  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.pService.getProducts().subscribe(resp => {
      this.products = resp;
      this.filteredProducts = resp;
    });
  }

  setTitle(text: string) {
    this.title = text;
    if (text !== 'Todos os Móveis') {
      this.filteredProducts = this.products.filter((value) => value.descricao === text);
    } else {
      this.filteredProducts = this.products;
    }
  }

  searchName() {
    if (this.query.length >= 3) {
      this.title = 'Pesquisa: ' + this.query;
      this.filteredProducts = this.products.filter((value) => {
        return value.titulo.toLowerCase().includes(this.query.toLowerCase()) ||
        value.descricao.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  }

}
