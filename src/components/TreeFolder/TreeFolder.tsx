import React, { useState } from "react";
import "./TreeFolder.css";
import UseAppContext from "../../context/AppContext/useAppContext";
import NewFileInput from "../Input/NewFileInput";

type TreeFolderProps = {
  name: string;
  isOpen: boolean;
  onToggle: () => void;
  children: any;
  onDrop: any;
  onDragStart: any;
  onDragOver: any;
};

const TreeFolder: React.FC<TreeFolderProps> = ({
  name,
  isOpen,
  onToggle,
  children,
  onDrop,
  onDragStart,
  onDragOver,
}) => {
  const [input, setInput] = useState<string>("");
  const { onSelected, selected, onNewFile, onNewFolder, isCreating } =
    UseAppContext();

  const handleCreateFile = (e: any) => {
    e.stopPropagation();
    if (!input) return;
    if (onNewFile) {
      onNewFile(name, input);
    }
  };

  const handleCreateFolder = (e: any) => {
    e.stopPropagation();
    if (!input) return;
    if (onNewFolder) {
      onNewFolder(name, input);
    }
  };

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      draggable={true}
      onDrop={onDrop}
      // onDragEnd={}
      className={`tree-folder`}
      onClick={e => {
        console.log("selecting");
        e.stopPropagation();
        if (onSelected) {
          onSelected(name);
        }
      }}
    >
      <div
        className={`tree-folder-dropdown tree-node ${
          selected === name && "tree-node-selected"
        }`}
        onClick={onToggle}
      >
        <div className="tree-folder-toggle">
          {isOpen ? (
            <i className="fas fa-caret-down"></i>
          ) : (
            <i className="fas fa-caret-right"></i>
          )}
        </div>
        <div className="tree-folder-icon"></div>
        <div className={`tree-folder-name`}>{name}</div>
      </div>
      {isOpen && (
        <div className="tree-folder-children">
          {isCreating === "file" && selected === name && (
            <div className="create-new">
              <NewFileInput
                input_value={input}
                onInputChange={handleInputChange}
                placeholder="New file"
                type="file"
              />
              <button onClick={handleCreateFile}>Create</button>
            </div>
          )}

          {isCreating === "folder" && selected === name && (
            <div className="create-new">
              <NewFileInput
                input_value={input}
                onInputChange={handleInputChange}
                placeholder="New folder"
                type="folder"
              />
              <button onClick={handleCreateFolder}>Create</button>
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

export default TreeFolder;
