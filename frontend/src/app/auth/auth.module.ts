import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxRequestPasswordComponent } from './request-password/request-password.component';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NgxResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyComponent } from './verify/verify.component'
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  
} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    
    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxRequestPasswordComponent,
    VerifyComponent,
    NgxResetPasswordComponent
  ],
})
export class NgxAuthModule {
}