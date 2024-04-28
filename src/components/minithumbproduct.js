import "./minithumbproduct.css";
import "../tailwind.css";
import img1 from "../assets/images/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
export const MiniThumbProduct = () => {
    return (
        <div className="d-flex justify-content-start align-items-center h-100 w-100 pl-3 pr-3 mini-thumb-product 

        shadow-md
        ">
            <div className="mini-thumb-product-img">
                <img src={img1} alt="" />

            </div>
            <span className="mini-thumb-product-title pl-2">Title</span>
        </div>
    )
}