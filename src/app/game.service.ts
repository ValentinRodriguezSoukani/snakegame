import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private snake: number[][] = [];
  private food: number[] = [];
  private score: number = 0;
  private direction: string | undefined;
  private gameOverSubject = new Subject<boolean>();
  private scoreSubject = new BehaviorSubject<number>(this.score);

  constructor(private firestore: AngularFirestore) {}

  initializeGame(): void {
    // Inicializar la serpiente y la comida
    this.snake = [[0, 0]]; // posición inicial
    this.food = this.generateFood();

    // Inicializar la dirección
    this.direction = 'RIGHT';

    // Inicializar la puntuación
    this.score = 0;
    this.scoreSubject.next(this.score);

    // Iniciar el bucle del juego
    this.startGameLoop();
  }

  private generateFood(): number[] {
    // Generar una posición aleatoria para la comida
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  private startGameLoop(): void {
    // Implementar el bucle del juego aquí
  }

  private checkCollision(): boolean {
    // Verificar la colisión con las paredes y el cuerpo de la serpiente
    // Devuelve true si hay colisión
    return false;
  }

  private moveSnake(): void {
    // Implementar la lógica de movimiento de la serpiente
  }

  private eatFood(): void {
    // Implementar la lógica de comer la comida y aumentar la puntuación
  }

  private endGame(): void {
    // Manejar el final del juego
    this.gameOverSubject.next(true);

    // Guardar la puntuación en Firebase
    this.saveScoreToFirebase();
  }

  private saveScoreToFirebase(): void {
    const userId = 'user123'; // Reemplazar con la autenticación de usuario real
    this.firestore
      .collection('scores')
      .doc(userId)
      .set({ score: this.score }, { merge: true })
      .then(() => console.log('Puntuación guardada en Firebase'))
      .catch((error) => console.error('Error al guardar la puntuación', error));
  }

  setDirection(newDirection: string): void {
    // Establecer la nueva dirección de la serpiente
    this.direction = newDirection;
  }

  getScore(): Observable<number> {
    return this.scoreSubject.asObservable();
  }

  isGameOver(): Observable<boolean> {
    return this.gameOverSubject.asObservable();
  }
}
