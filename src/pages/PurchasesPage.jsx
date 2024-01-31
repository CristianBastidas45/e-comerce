import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"

const PurchasesPage = () => {

    const [purchases, getPurchases] = useFetch()

    useEffect(()=>{
        const url = 'https://ecomerce-backend-6ch6.onrender.com/purchases'
        getPurchases(url, getConfigToken())
    },[])


    return (
        <div>
            <h2>My Purchases</h2>
            <div>
                {
                    purchases?.map(  infoPurchase => (
                        <PurchaseCard 
                            key={infoPurchase.id}
                            purchase={infoPurchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PurchasesPage