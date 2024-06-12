import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DialogAddUserComponent } from './user/dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {MatMenuModule} from '@angular/material/menu';
import { EditAdressComponent } from './user/edit-adress/edit-adress.component';
import { LeadsComponent } from './leads/leads.component';
import { DialogAddLeadComponent } from './leads/dialog-add-lead/dialog-add-lead.component';
import {MatSelectModule} from '@angular/material/select';
import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogAddQualicallComponent } from './leads/dialog-add-qualicall/dialog-add-qualicall.component';
import { DialogAddSaleComponent } from './leads/dialog-add-sale/dialog-add-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    EditAdressComponent,
    LeadsComponent,
    DialogAddLeadComponent,
    LeadDetailComponent,
    DialogAddQualicallComponent,
    DialogAddSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
  
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-196e1","appId":"1:761038459601:web:2a0f24db96d64b0d4d6bf0","storageBucket":"simple-crm-196e1.appspot.com","apiKey":"AIzaSyAgjK2mR5g41qT-Ln3fcCaVt7A2A_qAgIs","authDomain":"simple-crm-196e1.firebaseapp.com","messagingSenderId":"761038459601"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
