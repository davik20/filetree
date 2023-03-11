const {createContext, useContext} = require('react')
import { TreeNodeInterface } from '../../components/TreeNode/TreeNodeInterface';



// type Context =  {
//     node?: TreeNodeInterface;
//     onSelected?: (name: string) => void;
//     selected?: string;
//     updateData?: (data: TreeNodeInterface) => void;
//     onNewFile?: (folderName: string, fileName: string) => void;
//     onNewFolder?: (folderName: string, folderType: string) => void;
//     isCreating?: null | string;
//     setData?: any;
//     // setIsCreating: (value: string | null) => void;
// }

export const appContext = createContext();


export default function UseAppContext(){
    const context = useContext(appContext);

    if(context){
        return context
    }else {
        throw new Error("Use context within a provider")
    }
      
}

