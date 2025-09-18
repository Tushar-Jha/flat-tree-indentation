import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

export type FlatTree = Record<string, string[]>;
export type TreeNode = { name: string; children: TreeNode[] };
export type NestedTree = TreeNode[];

@Injectable({
  providedIn: 'root'
})
export class RestructureTree {

  flatToNested(flatTree: FlatTree): NestedTree {
    const nestedTree: NestedTree = [];
    const processedStates: Record<string, boolean> = Object.keys(flatTree).reduce((map, key) => ({ ...map, [key]: false }), {});
    const processedSubtrees: Record<string, TreeNode> = {};

    const recursiveTraversal = (node: string): TreeNode => {
      const newNode: TreeNode = { name: node, children: [] }
      
      if(!flatTree[node]) return newNode

      flatTree[node]?.forEach((child) => {
          if(!!processedStates[child]) {
            newNode.children.push(processedSubtrees[child]!);
            delete processedSubtrees[child];
          } else {
            newNode.children.push(recursiveTraversal(child));
          }
      });
      processedStates[node] =true;

      return newNode;
    }

    Object.keys(flatTree).forEach((key) => {
        if(!processedStates[key]) {
          const subTree = recursiveTraversal(key); 
          processedSubtrees[key] = subTree;
        }
    })

    return Object.values(processedSubtrees)?.map(node => cloneDeep(node)) ?? [];
  }
}
