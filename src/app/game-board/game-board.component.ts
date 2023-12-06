import { Component, OnInit, HostListener } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  constructor(private gameService: GameService) {}

  ngOnInit() {
    // Inicializa el juego
    this.gameService.initializeGame();

    // Maneja eventos del teclado
    this.subscribeToKeyboardEvents();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Maneja eventos de teclado y actualiza la dirección de la serpiente
    this.handleArrowKeys(event);
  }

  private subscribeToKeyboardEvents(): void {
    // Puedes agregar más lógica aquí según sea necesario
  }

  private handleArrowKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.gameService.setDirection('UP');
        break;
      case 'ArrowDown':
        this.gameService.setDirection('DOWN');
        break;
      case 'ArrowLeft':
        this.gameService.setDirection('LEFT');
        break;
      case 'ArrowRight':
        this.gameService.setDirection('RIGHT');
        break;
      default:
        // No hagas nada si no es una tecla de flecha
        break;
    }
  }
}
