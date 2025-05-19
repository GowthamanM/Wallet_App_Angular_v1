import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-account',
  standalone:true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  imports:[CommonModule, HttpClientModule, HomeComponent]
})
export class AccountComponent  implements OnInit {

  data: any[] = [];

  private apiUrl = 'https://expence-tracker-3ad40-default-rtdb.firebaseio.com/accounts.json';

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.data = response;
        console.log(response);
        // console.log(this.configService.baseUrl);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

}
