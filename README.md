## How to Install 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## File tree component
The user can explore a directory tree structure displayed by this React component. The feature includes expanding and collapsing all directories, highlighting chosen files or folders, opening and closing directories by clicking on them, and adding new files or folders to the file tree. Furthermore, it has drag-and-drop capabilities that let users move files and folders around the directory tree structure.

#### Design Decisions
Folder and File Icons
To differentiate between folders and files, I used different icons for each. Folders are represented by a folder icon, and files are represented by a file icon. This makes it easy for the user to quickly identify whether an item in the tree is a folder or a file.

#### Expand/Collapse Icons
To allow the user to expand and collapse directories, I used different icons to represent different states . This provides a clear visual cue to the user that they can click on the icon to open or close the directory.

#### Highlighting Selected Items
To make it clear which item is currently selected, I decided to highlight the selected item by changing its background color. This provides a clear visual cue to the user that they have selected an item in the tree.

#### Creating New Files or Folders
To allow the user to create new files or folders within the file tree, I decided to implement a fileIcon button that displays an input field when clicked. The user can then enter the name of the new file or folder and click the "Create" button to add it to the tree.

#### Drag-and-Drop Functionality
I  implemented drag-and-drop functionality. The user can simply click and drag a file or folder to a new location within the tree, and the file or folder will be moved to that location.

## Potential Improvements


#### Search Functionality
Another potential improvement would be to add search functionality to the component. This would allow the user to search for a specific file or folder within the tree, which could be particularly useful for users with large file trees.

#### Improved Styling
The styling of the component could be improved to make it more visually appealing and user-friendly. This could include adding animations to expand and collapse directories, as well as using a more modern design language for the icons and overall layout.

### Test
Adding appropriate test for the react components is another improvement, this improves reliability and minimizes future bugs


```
src
  components folder
  context folder
  utils folder
```






