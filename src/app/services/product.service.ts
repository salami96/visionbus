import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/entities';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  u: string;
  l = '5da0c3d55596b700318ee535';
  url = 'https://sendproms.herokuapp.com/';
  product: Product;
  products: Product[];

  ngOnInit(): void {
    this.getProducts().subscribe( resp => this.products = resp);
  }

  constructor(private http: HttpClient, private uService: UserService) { }

  getUser(): void {
    this.u = this.uService.user._id;
  }

  postarProduct(t: string, i: string[], d: string, dI: Date, dF?: Date): Observable<Product> {
    return this.http.post<Product>(this.url + 'proms',
    {
      'titulo': t,
      'descricao': d,
      'img': i,
      'data': new Date(),
      'dataFinal': new Date(),
      'autor': this.u,
      'loja': this.l,
      'notification': false,
      'facebook': false
    });
  }

  makeFileRequest(files: Array<File>): Promise<string[]> {
    console.log(files);
    this.getUser();
    return new Promise((resolve, reject) => {
        const formData: any = new FormData();
        const xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        for (let i = 0; i < files.length; i++) {
          formData.append('uploads[]', files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr.response);
            }
          }
        };
        xhr.open('POST', this.url + 'images/' + this.l, true);
        xhr.send(formData);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'proms/' + this.l);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + 'prom/' + id);
  }


  removeProduct(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url + 'prom/' + id);
  }
}
