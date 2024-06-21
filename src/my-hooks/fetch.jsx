import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false); // Set loading to false in case of an error
            }
        };
        fetchPost();
    }, [url]); // Include url in the dependency array

    return [posts, loading];
};

export default useFetchData;

