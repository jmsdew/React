import {useEffect, useState} from "react";


const MenuPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/showMe")
            .then((res) => {
                return res.json();
            })
            .then(function (result) {
                setData(result);
            })
    },[]);

    return(
        <div>
            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
        </div>
    )


}

export default MenuPage;