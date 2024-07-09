import { useEffect, useState } from "react";
import axios from "axios";

export default function useData(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    function getData() {
        axios.get(url).then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }
    useEffect(() => {
        getData();
    }, [url]);

    return {
        data: data,
        loading: loading,
    };
}
