export class Tree {
  constructor(public data: DataItem[]) {}

  straighten(): TreeItem[] {
    const out: TreeItem[] = [];

    const flattenTree = (node: DataItem | null, parentId: number | null) => {
      if (node) {
        out.push({
          id: node.id,
          parentId: parentId,
          name: node.name
        });

        if (node.children && node.children.length > 0) {
          for (const child of node.children) {
            flattenTree(child, node.id);
          }
        }
      }
    };

    for (const node of this.data) {
      flattenTree(node, null);
    }

    return out;
  }
}

export interface DataItem {
  id: number;
  parentId: number | null;
  name: string;
  children: DataItem[];
}

interface TreeItem {
  id: number;
  parentId: number | null;
  name: string;
}
