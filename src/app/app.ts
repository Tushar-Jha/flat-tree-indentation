import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeStructure } from "./tree-structure/tree-structure";

@Component({
  selector: 'app-root',
  imports: [TreeStructure],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'render-tree';
}
