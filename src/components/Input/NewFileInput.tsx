import React, { useRef, useEffect } from "react";
import "./FileInput.css";
import UseAppContext from "../../context/AppContext/useAppContext";

interface IProps {
  input_value: string;
  onInputChange: any;
  placeholder: string;
  type: string;
}
function NewFileInput({
  input_value,
  onInputChange,
  placeholder,
  type,
}: IProps) {
  const newFolderRef = useRef();
  const { isCreating, setIsCreating } = UseAppContext();

  useEffect(() => {
    let handler = (e: any) => {
      console.log(e.target.classList);
      if (
        e.target.classList.contains("fa-folder-plus") ||
        e.target.classList.contains("fa-file-alt")
      ) {
        console.log(document.querySelector(".app-add-controls"), e.target);
        return;
      } else {
      }
      if (isCreating && e.target && !e.target.contains(newFolderRef.current)) {
        console.log("is creating");
        if (setIsCreating) {
          setIsCreating(null);
        }
      }
    };
    document.body.addEventListener("click", handler);
    return () => {
      document.body.removeEventListener("click", handler);
    };
  }, [isCreating, setIsCreating]);

  return (
    <div className={`new-${type}-input`}>
      <div className={`tree-${type}-icon`}></div>
      <input
        type="text"
        placeholder={placeholder}
        value={input_value}
        onChange={onInputChange}
      />
    </div>
  );
}

export default NewFileInput;
