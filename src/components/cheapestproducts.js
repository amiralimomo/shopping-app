import "./cheapestproducts.css";
import "./coustomflex.css";
import { SeeAllButton } from "./seeallbutton";
import { Card } from "./card";
import img1 from "../assets/images/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
import img2 from "../assets/images/81Zt42ioCgL._AC_SX679_.jpg";
import offerimg from "../assets/icons/e6.png";
export const TheapestProducts = () => {
    return (
        <section className="cheapest-products-body mt-5 mb-5 ">
            <div className="coustom-flex pb-3">

                <div className="d-flex flex-column align-items-center justify-content-center coustom-flex-item">
                    <img src={offerimg} alt="" className="offer-img" />
                    <h4 className="cheapest-products-title">   Cheapest Products</h4>
                    <SeeAllButton />
                </div>
                <div className="coustom-flex-item">
                    <Card img={img1} />

                </div>
                <div className="coustom-flex-item">
                    <Card img={img2} />

                </div>
                <div className="coustom-flex-item">
                    <Card img={img1} />

                </div>
                <div className="coustom-flex-item">
                    <Card img={img2} />

                </div>

            
            </div>
        </section>)
}