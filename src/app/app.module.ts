import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environments';

import { AppComponent } from './app.component';
import { GameBoardComponent } from '../app/game-board/game-board.component';
import { SnakeComponent } from '../app/snake/snake.component';
import { FoodComponent } from '../app/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    SnakeComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
