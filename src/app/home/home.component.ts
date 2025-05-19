import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WalletComponent } from './wallet/wallet.component';
import { AccountComponent } from './account/account.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WalletComponent, AccountComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
