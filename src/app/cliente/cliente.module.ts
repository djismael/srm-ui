import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientesComponent} from './clientes/clientes.component';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, DataTableModule, DropdownModule, InputTextModule, PanelModule, TooltipModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,

    DropdownModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    DataTableModule,
    TooltipModule
  ],
  declarations: [ClientesComponent],
  exports: [ClientesComponent]
})
export class ClienteModule {
}
