import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangelogLine, newLine, newTextItem } from './changelog';

@Component({
  selector: 'app-changelog-lines',
  imports: [FormsModule],
  templateUrl: './lines-editor.html',
  styleUrl: './lines-editor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinesEditor {
  readonly lines = input.required<ChangelogLine[]>();
  readonly linesChange = output<ChangelogLine[]>();
  readonly label = input('Description');
  readonly addLabel = input('Add line');
  readonly allowNotes = input(true);
  readonly placeholder = input('');

  add(): void {
    this.linesChange.emit([...this.lines(), newLine()]);
  }
  remove(id: number): void {
    this.linesChange.emit(this.lines().filter((line) => line.id !== id));
  }
  update(id: number, text: string): void {
    this.linesChange.emit(this.lines().map((line) => (line.id === id ? { ...line, text } : line)));
  }
  addNote(id: number): void {
    this.linesChange.emit(
      this.lines().map((line) =>
        line.id === id ? { ...line, notes: [...line.notes, newTextItem()] } : line,
      ),
    );
  }
  updateNote(id: number, noteId: number, text: string): void {
    this.linesChange.emit(
      this.lines().map((line) =>
        line.id === id
          ? {
              ...line,
              notes: line.notes.map((note) => (note.id === noteId ? { ...note, text } : note)),
            }
          : line,
      ),
    );
  }
  removeNote(id: number, noteId: number): void {
    this.linesChange.emit(
      this.lines().map((line) =>
        line.id === id ? { ...line, notes: line.notes.filter((note) => note.id !== noteId) } : line,
      ),
    );
  }
}
