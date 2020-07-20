import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./shared/token-interceptor";
import {SearchComponent} from './search/search.component';
import {FormsModule} from "@angular/forms";
import {DateValueAccessorModule} from "angular-date-value-accessor";
import { BookFormComponent } from './book-form/book-form.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormMessagesComponent } from './form-messages/form-messages.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookListItemComponent,
        BookDetailComponent,
        HomeComponent,
        SearchComponent,
        BookFormComponent,
        CreateBookComponent,
        FormMessagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DateValueAccessorModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
