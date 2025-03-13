import {useEffect, useState} from "react";

interface Product {
    pno: number,
    pname: string,
    price: number,
    uploadFileNames: string[]
}
const getProducts = async () => {

    const response:Response = await fetch('http://122.34.51.94:8090/api/products/list')
    return response.json()
}


function KioskPage() {

    const [produts, setProduts] = useState([])

    useEffect(() => {

        getProducts().then(res => {
            setProduts(res.dtoList)
        })

    }, []);
    
    return (
        <div>
            <h1>Kiosk Page</h1>
            <div>
                <ul>
                    {produts.map((p:Product) => <li key={p.pno}>
                        <img src={`http://122.34.51.94:8090/api/products/view/s_${p.uploadFileNames[0]}`}/>
                        {p.pno} - {p.pname} - {p.price}
                    </li>)}
                </ul>
            </div>

            <div>
            </div>
        </div>
    );
}

export default KioskPage;