import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, ResetPasswordData, UpdatePasswordData } from 'angular2-token';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  private _resetPasswordData: ResetPasswordData = <ResetPasswordData>{};
  private _updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};  
  private _output: any;

  ngOnInit() {
  }

  resetPassword(){
    this._output = null;
    this._tokenService.resetPassword(this._resetPasswordData).subscribe(
      res => {
        this._resetPasswordData = <ResetPasswordData>{};
        this._output = res;
      }, error => {
        this._resetPasswordData = <ResetPasswordData>{};
        this._output = error;
      }
    );
  }

  updatePassword(){
    this._output = null;
    this._tokenService.updatePassword(this._updatePasswordData).subscribe(
      res => {
        this._updatePasswordData = <UpdatePasswordData>{};
        this._output = res;
      }, error => {
        this._updatePasswordData = <UpdatePasswordData>{};
        this._output =  error;
      }
    )
  }
}
