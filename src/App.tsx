import React from "react";
import TreeNode from "./components/TreeNode/TreeNode";
import "./App.css";
import UseAppContext from "./context/AppContext/useAppContext";
import AppContextProvider from "./context/AppContext/AppContextProvider";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppContent></AppContent>
    </AppContextProvider>
  );
};

const AppContent = () => {
  const { data, handleIsCreating, isCreating } = UseAppContext();
  return (
    <div>
      <div className="app">
        <div className="app-add-controls">
          <i className="fa-solid fa-file-circle-plus"></i>
          <i
            className="fas fa-file-alt"
            onClick={() => handleIsCreating("file", isCreating)}
          ></i>
          <i
            className="fas fa-folder-plus"
            onClick={() => handleIsCreating("folder", isCreating)}
          ></i>
        </div>

        <TreeNode node={data} />
      </div>
    </div>
  );
};
export default App;
