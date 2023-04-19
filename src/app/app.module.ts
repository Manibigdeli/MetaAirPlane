import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';


import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HomepageComponent } from './homepage/homepage.component';
import { AirplansComponent } from './airplans/airplans.component';
import { AirplansListComponent } from './airplans/airplans-list/airplans-list.component';
import { AirplansItemComponent } from './airplans/airplans-item/airplans-item.component';
import { CardListComponent } from './shared/card-list/card-list.component';
import { BackTopComponent } from './shared/back-top/back-top.component';
import { RateComponent } from './shared/rate/rate.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { CountriesItemComponent } from './countries/countries-item/countries-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { VerificationComponent } from './profile/verification/verification.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';

registerLocaleData(en);

const antmaterial = [
  NzMenuModule,
  NzIconModule,
  NzSelectModule,
  NzButtonModule,
  NzCarouselModule,
  NzBackTopModule,
  NzCardModule,
  NzRateModule,
  NzInputModule,
  NzFormModule,
  NzAlertModule,
  NzAutocompleteModule,
  NzTableModule,
  NzUploadModule
]


const angularmaterial = [

  
]



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomepageComponent,
    AirplansComponent,
    AirplansListComponent,
    AirplansItemComponent,
    BackTopComponent,
    CardListComponent,
    RateComponent,
    HeaderComponent,
    ErrorPageComponent,
    CountriesComponent,
    CountriesListComponent,
    CountriesItemComponent,
    ProfileComponent,
    VerificationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    angularmaterial,
    antmaterial,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
