import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AllergyComponent } from './allergy/allergy.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BackgComponent } from './backg/backg.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AdvicesComponent } from './advices/advices.component';
import { CardComponent } from './card/card.component';
import { AdviceCardComponent } from './advice-card/advice-card.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AllergyComponent,
    BackgComponent,
    NavComponent,
    FooterComponent,
    AdvicesComponent,
    CardComponent,
    AdviceCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzMenuModule,
        RouterModule,
        NzInputModule,
        HttpClientModule,
        FormsModule,
        NzDropDownModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzRadioModule,
        NzGridModule,
        NzIconModule,
        NzSelectModule

      
     
    ],
  providers: [, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
