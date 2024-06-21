// import React from "react";
// import { useOnlineStatus } from "../hooks/online-status-hooks";


// const StatusBar = ({isOnline}) => {
//     isOnline = useOnlineStatus ();

//     return <h1>{isOnline ? "✅ Online" : '❌ Disconnected'}</h1>;

// }

// 
// export default StatusBar

import React from 'react';

const StatusBar = ({ isOnline }) => {
    return (
        <div>
            {isOnline ? "✅ Online" : '❌ Disconnected is offline'}
        </div>
    );
};

export default StatusBar;
