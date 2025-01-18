import React from "react";

//whole application would be wrapped inside the context

const UserContext = ({children}) => {
    return(
        <div>
            {children}

        </div>
    )
}

export default UserContext;