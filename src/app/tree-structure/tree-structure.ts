import { Component, inject, input, model } from '@angular/core';
import { FlatTree, RestructureTree, TreeNode } from '../restructure-tree';
import { TreeNodeComponent } from "../tree-node/tree-node";

@Component({
  selector: 'app-tree-structure',
  imports: [TreeNodeComponent],
  templateUrl: './tree-structure.html',
  styleUrl: './tree-structure.css'
})
export class TreeStructure {
  restructTree = inject(RestructureTree);

  flatTree: FlatTree = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };

}
