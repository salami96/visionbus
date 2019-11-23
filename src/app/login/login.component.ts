import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail = '';
  inputSenha = '';
  loading = false;
  nome: string = null;
  erroEmail = false;
  erroSenha = false;
  erroLogin = false;

  ngOnInit(): void {
    if (this.uService.user !== null) {
      this.nome = this.uService.user.nome;
    }
  }

  constructor(private uService: UserService, private router: Router) {}

  public validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  public logar() {
    let valid = true;
    if (this.inputEmail === null || !this.validateEmail(this.inputEmail)) {
      this.erroEmail = true;
      valid = false;
    } else {
      this.erroEmail = false;
      valid = true;
    }
    if (this.inputSenha === null || this.inputEmail.length < 8) {
      this.erroSenha = true;
      valid = false;
    } else {
      this.erroSenha = false;
      valid = true;
    }
    if (valid) {
      this.loading = true;
      this.uService.login(this.inputEmail, this.inputSenha).subscribe(resp => {
        if (resp) {
          this.loading = false;
          this.nome = resp.nome;
          this.router.navigate(['/novo/produto']);
        } else {
          this.loading = false;
          this.erroLogin = true;
          this.uService.user = null;
        }
      });
    }
  }
  deslogar(): void {
    this.nome = null;
    this.uService.user = null;
  }

}
