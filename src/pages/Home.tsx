import { useContext } from "react";

import { Context } from "../context";

export const Home = () => {

    const ctx = useContext(Context)

    console.log('ctx', ctx);
    
    return(
        <div>home page</div>
    )
};
