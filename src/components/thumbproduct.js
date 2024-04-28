import "./thumbproduct.css";
import "../tailwind.css";
import img from "../assets/images/81Zt42ioCgL._AC_SX679_.jpg";
import img2 from "../assets/images/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
export const ThumbProduct = () => {
    return (
        <div className="d-flex justify-content-start align-items-center h-100 w-100 p-4 thumb-product-body   shadow-md">
            <div className="thumb-product-img-parent"><img className="thumb-product-img" src={img2} alt="" /></div>
            <div className="p-3 text-start  d-flex  flex-column justify-content-between">
                <div className="">
                    <h5 className="thumb-product-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                    <p className="thumb-product-description ">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>

                </div>
                <span className="thumb-product-price ">	109.95</span>
            </div>
        </div>
    )
}