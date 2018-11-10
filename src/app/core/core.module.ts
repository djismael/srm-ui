import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MessageComponent} from './message/message.component';
import {ServicoService} from '../cliente/servico.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NavbarComponent, MessageComponent, MessageComponent],
  exports: [NavbarComponent, MessageComponent],
  providers: [ServicoService]
})
export class CoreModule {
}
