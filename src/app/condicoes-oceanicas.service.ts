import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondicoesOceanicasService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getCondicoesOceanicas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
