import "./footer.css";
import enamad from "../assets/icons/per.png";

export const Footer = () => {
    return (
        <footer className=" shadow-inner">
            <div className="container  ">
                <div className="footer-body py-4">

            <div className="footer-section  ">
                    <h3 className="footer-title">About Site</h3>
                    <p className="footer-p">
                        Irure et aute est commodo excepteur. Est exercitation est irure eiusmod quis magna sunt.
                        Dolor voluptate sint dolor magna ad laborum. Sunt aliqua dolor esse deserunt commodo ea proident.
                        Cupidatat incididunt exercitation irure eu mollit nisi nostrud.
                    </p>
                </div>
         
                <div className="footer-section  ">
                    <h3 className="footer-title">LOrem</h3>
                    <ul>
                        <li className="footer-p">lorem</li>
                        <li className="footer-p">lorem</li>

                        <li className="footer-p">lorem</li>
                        <li className="footer-p">lorem</li>
                    </ul>
                </div>
                <div className=" footer-section   ">
                    <img src={enamad} alt="" className="footer-img"/>
                </div>
                </div>
            </div>
        </footer>
    )
}