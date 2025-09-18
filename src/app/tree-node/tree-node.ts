import { Component, input } from '@angular/core';
import { TreeNode } from '../restructure-tree';

@Component({
  selector: 'app-tree-node',
  imports: [],
  templateUrl: './tree-node.html',
  styleUrl: './tree-node.css'
})
export class TreeNodeComponent {
  tree = input<TreeNode[]>();
  level = input(0);
}
