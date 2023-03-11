import { TreeNodeInterface } from '../components/TreeNode/TreeNodeInterface';

export const   findSelectedFolder = (node: any, folderName: string): any => {

    if (node.kind === "directory") {
      if (node.name === folderName) {
        return node;
      } else if (node.children) {
        for (let child of node.children) {
          const selectedFolder = findSelectedFolder(child, folderName);
          if (selectedFolder) {
            return selectedFolder;
          }
        }
      }
    }
    return null;
  };


  export   const getParentFolder = (node: any, parent: any): any => {
    if (node.children && node.children.includes(parent)) {
      return node;
    } else if (node.children) {
      for (let child of node.children) {
        const result = getParentFolder(child, parent);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };



  export const findAndUpdate = (
    node_to_find:any,
    currentNode: any,
    parent_to_remove_from: any,
    parent_to_add_to: any = null,
    kind: string,
    
  ): any => {
    if (kind === "remove_from_children") {
      if (currentNode.kind === "directory") {
        if (parent_to_remove_from?.name === currentNode.name) {
          const index = currentNode.children.findIndex(
            (child: any) => child.name === node_to_find.name
          );
          currentNode.children.splice(index, 1);

          return currentNode;
        } else {
          // console.log(currentNode, "new est");
          console.log("children ", currentNode);
          currentNode.children.forEach((child: TreeNodeInterface) => {
            findAndUpdate(
                node_to_find,
              child,
              parent_to_remove_from,
              null,
              "remove_from_children"
            );
          });
        }
      }
    } else if (kind === "push_into_children") {
      if (currentNode.kind === "directory") {
        console.log(parent_to_add_to, "parent to add to");
        if (parent_to_add_to?.name === currentNode.name) {
          currentNode.children.push(node_to_find);
          console.log("node to update ", node_to_find);
          console.log("pusing");
          return currentNode;
        } else {
          // console.log(currentNode, "new est");
         
          currentNode.children.forEach((child: TreeNodeInterface) => {
            console.log("updating child");
            findAndUpdate(
                node_to_find,
              child,
              parent_to_remove_from,
              parent_to_add_to,
              "push_into_children"
            );
          });
        }
      }
    }
    console.log(currentNode);
  };