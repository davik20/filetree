import { useState } from "react";
import { TreeNodeInterface } from "../../components/TreeNode/TreeNodeInterface";
import { data as result } from "../../constants/data";
import { appContext } from "./useAppContext";
import { findSelectedFolder } from "../../utils";
interface Iprops {
  children: any;
}

function AppContextProvider({ children }: Iprops) {
  const [selected, setSelected] = useState<string>("");
  const [data, setData] = useState<TreeNodeInterface>(result);
  const [isCreating, setIsCreating] = useState<string | null>(null);

  const onSelected = (name: string) => {
    setSelected(name);
    console.log("selected", name);
  };

  const updateData = (data: TreeNodeInterface) => setData(data);

  const handleNewFile = (folderName: string, fileName: string) => {
    const selectedFolder = findSelectedFolder(data, folderName);

    // If the selected folder exists, create a new file within it
    if (selectedFolder) {
      const newFile = {
        name: fileName,
        kind: "file",
        size: "0KB",
        modified: new Date().toISOString(),
      };
      selectedFolder.children.push(newFile);
      setData({ ...data });
      setIsCreating(null);
    }
  };

  const handleNewFolder = (folderName: string, newFolderName: string) => {
    // Find the selected folder node
    const selectedFolder = findSelectedFolder(data, folderName);

    // If the selected folder exists, create a new folder within it
    if (selectedFolder) {
      const newFolder = {
        name: newFolderName,
        kind: "directory",
        children: [],
      };
      selectedFolder.children.push(newFolder);
      setData({ ...data });
      setIsCreating(null);
    }
  };

  const handleIsCreating = (value: string, isCreating: null | string) => {
    setIsCreating(value);
    setTimeout(() => {
      let input: any = document.querySelector(".new-file-input");
      if (input) {
        console.log(input);
        input.focus();
      }
    }, 500);
  };

  return (
    <appContext.Provider
      value={{
        data,
        onSelected,
        selected,
        updateData,
        onNewFile: handleNewFile,
        onNewFolder: handleNewFolder,
        isCreating,
        setIsCreating,
        setData,
        handleIsCreating,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppContextProvider;
