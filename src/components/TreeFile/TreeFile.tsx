import React from "react";
import "./TreeFile.css";
import UseAppContext from "../../context/AppContext/useAppContext";

type TreeFileProps = {
  name: string;
  size?: string;
  modified?: string;
  // onSelected: (name: string)=> void;
  // selected:string;
  onDrop: any;
  onDragStart: any;
  onDragOver: any;
};

const TreeFile: React.FC<TreeFileProps> = ({
  name,
  size,
  modified,
  onDragStart,
  onDragOver,
}) => {
  const { onSelected, selected, onDrop } = UseAppContext();
  return (
    <div
      className={`tree-file tree-node ${
        selected === name && "tree-node-selected"
      }`}
      onClick={e => {
        e.stopPropagation();
        if (onSelected) {
          onSelected(name);
        }
      }}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      draggable={true}
      onDrop={onDrop}
    >
      <div className="tree-file-icon"></div>
      <div className="tree-file-name">{name}</div>
      <div className="tree-file-size">{size}</div>
      {/* <div className="tree-file-modified">{modified}</div> */}
    </div>
  );
};

export default TreeFile;
