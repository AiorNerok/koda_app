import { createContext } from "react";
import { IInitContext } from "./interface";

const initContext: IInitContext = {
    data: [],
    dataOnRender: [],
    filterValue: 'pr',
    searchValue: 'C',
    tabsList: []
}

const Context = createContext(initContext)

export { Context, initContext }