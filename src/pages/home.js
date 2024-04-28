
import "./home.css";
import { Juwlary } from "../components/juwlary";
import { TheapestProducts } from "../components/cheapestproducts";
import { Banner } from "../components/banner";
import { Electronics } from "../components/electronics";

//import {  useProductsByCategory} from "../service/useProductsByCategory";
export const Home = () => {

    //const  [data, isLoading, isError, error, refetch]=useProductsByCategory();

    return (<section className="body container">
        <Banner />
        <Juwlary />
        <TheapestProducts />
        <Electronics/>

    </section>)
}