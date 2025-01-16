import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private getUser(): string {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") as any);
    return currentUser.usuario;
  }
}
