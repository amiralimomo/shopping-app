import "./juwlary.css";
import "./coustomflex.css";
import { Card } from "./card";
import img1 from "../assets/images/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
import img2 from "../assets/images/81Zt42ioCgL._AC_SX679_.jpg";
export const Juwlary = () => {
    return (<section className="juwlary-body pt-5 pb-5">
        <div className="pb-3">
            <h3 className="juwlary-title pb-2">new juwleries</h3>
            <div className="coustom-flex pt-4">
                <div className="coustom-flex-item">
                    <Card img={img1}/>

                </div>
                <div className="coustom-flex-item">
                <Card img={img2}/>

                </div>
                <div className="coustom-flex-item">
                <Card img={img1}/>

                </div>
                <div className="coustom-flex-item">
                <Card img={img2}/>

                </div>
                <div className="coustom-flex-item">
                <Card img={img1}/>

                </div>

            </div>
        </div>
    </section>)
}