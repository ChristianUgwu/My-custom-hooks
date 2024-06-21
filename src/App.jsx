// import React from "react";
// import ButtonOnline from "./components/button-online";
// import StatusBar from "./components/status-bar";
// import { useOnlineStatus } from "./hooks/online-status-hooks";
// import useFetchData from './hooks/fetch';
// const App = () => {
  
//   const isOnline = useOnlineStatus();
  
//   return (
//     <>
//       <StatusBar isOnline={isOnline} />
//       <ButtonOnline isOnline={isOnline} />
//     </>
//   );
// };

// export default App;


import React from "react";
import ButtonOnline from "./components/button-online";
import StatusBar from "./components/Status-bar";
import { useOnlineStatus } from "./my-hooks/online-status-hooks";
import useFetchData from './my-hooks/fetch';

const App = () => {
    const isOnline = useOnlineStatus();
    const { data: posts, loading, error } = useFetchData('https://example.com/api/posts');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <StatusBar isOnline={isOnline} />
            <ButtonOnline isOnline={isOnline} />
            <div>
                {posts && posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;



//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function handleSaveClick() {
//   console.log('✅ Progress saved');
  
//   (
//   <button disabled={!isOnline} onClick={handleSaveClick}>
//     {isOnline ? 'Save progress' : 'Reconnecting...'}
//   </button>
//   )
// };


