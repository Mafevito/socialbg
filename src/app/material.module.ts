import { NgModule } from '@angular/core';
/*import {MatButtonModule, MatCheckboxModule} from '@angular/material';*/
import {MatToolbarModule,
   MatIconModule,
   MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
  } from '@angular/material';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules

})

export class MaterialModule {}
