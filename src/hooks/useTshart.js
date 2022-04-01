import { useEffect, useState } from "react"

const useTshart = () => {
    const [tSharts, setTSharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTSharts(data));
    },[])

    return [tSharts, setTSharts];
}

export default useTshart;