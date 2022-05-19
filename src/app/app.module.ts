import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFirstComponentComponent } from './test-first-component/test-first-component.component';
import { ABoutComponent } from './about/about.component';
import { OnSoldPipe } from './on-sold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestFirstComponentComponent,
    ABoutComponent,
    OnSoldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
