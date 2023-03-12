import {useContext, createContext} from 'react'
import { TreeNodeInterface } from '../../components/TreeNode/TreeNodeInterface';
import { DragEventHandler } from 'react';



type Context =  {
    node?: TreeNodeInterface;
    onSelected?: (name: string) => void;
    selected?: string;
    updateData?: (data: TreeNodeInterface) => void;
    onNewFile?: (folderName: string, fileName: string) => void;
    onNewFolder?: (folderName: string, folderType: string) => void;
    isCreating?: null | string;
    setData?: any;
    data?: any;
    handleIsCreating?: any;
    setIsCreating?: (value: string | null) => void;
    onDrop?:DragEventHandler<HTMLDivElement>;

    

}

export const appContext = createContext<Context>({});


export default function UseAppContext(){
    const context = useContext(appContext);

    if(context){
        return context
    }else {
        throw new Error("Use context within a provider")
    }
      
}

