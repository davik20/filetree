import React, { useState } from "react";
import TreeFolder from "../TreeFolder/TreeFolder";
import TreeFile from "../TreeFile/TreeFile";
import "./TreeNode.css";
import { TreeNodeInterface } from "./TreeNodeInterface";
import UseAppContext from "../../context/AppContext/useAppContext";
import { findAndUpdate } from "../../utils/index";

type TreeNodeProps = {
  node: TreeNodeInterface;
  parentNode?: null | TreeNodeInterface;
};

const TreeNode: React.FC<TreeNodeProps> = ({ node, parentNode }) => {
  const { setData, data, isCreating } = UseAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [draggedOver, setDraggedOver] = useState<TreeNodeInterface | null>(
    null
  );

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    node: any
  ) => {
    event.stopPropagation();
    setDraggedOver(null);
    if (isCreating) return;

    let data;
    if (node.kind === "directory") {
      data = {
        name: node.name,
        kind: node.kind,
        children: node.children,
        parent: parentNode,
      };
    } else {
      data = {
        name: node.name,
        kind: node.kind,
        size: node.size,
        modified: node.modified,
        parent: parentNode,
      };
    }

    // console.log(data);
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    node: any
  ) => {
    event.preventDefault();
    event.stopPropagation();
    event.preventDefault();
    setDraggedOver(node);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    parentNode: any
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (draggedOver === null) {
      return;
    }
    const node = JSON.parse(event.dataTransfer.getData("text/plain"));
    const new_data: any = { ...data };
    findAndUpdate(node, new_data, node.parent, null, "remove_from_children");
    findAndUpdate(
      node,
      new_data,
      node.parent,
      draggedOver,
      "push_into_children"
    );

    setData({ ...new_data });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {node.kind === "directory" ? (
        <TreeFolder
          name={node.name}
          isOpen={isOpen}
          onToggle={handleToggle}
          onDrop={(e: any) => handleDrop(e, parentNode)}
          onDragStart={(e: any) => handleDragStart(e, node)}
          onDragOver={(e: any) => handleDragOver(e, node)}
        >
          {isOpen &&
            node.children &&
            node.children.map((childNode: TreeNodeInterface) => (
              <div key={childNode.name}>
                <TreeNode node={childNode} parentNode={node} />
              </div>
            ))}
        </TreeFolder>
      ) : (
        <TreeFile
          name={node.name}
          size={node.size}
          modified={node.modified}
          onDrop={(e: any) => handleDrop(e, parentNode)}
          onDragStart={(e: any) => handleDragStart(e, node)}
          onDragOver={(e: any) => handleDragOver(e, parentNode)}
        />
      )}
    </div>
  );
};

export default TreeNode;
