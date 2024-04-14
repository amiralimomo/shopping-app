import "./header.css";
export const Header = () => {
    return (<header className="header w-100">
        <div className="container h-100 pt-2 pb-2">

            <div className="d-flex justify-content-between align-items-center h-100">
                <div className="header-search"><form> <i class="bi bi-search-heart header-search-icon"></i><input placeholder="search products..." type="text" className="header-search-input" /></form></div>
                <div className="d-flex justify-content-between align-items-center h-100">
                    <button className="cart-button"><span className="header-button-responsive">cart | </span> 0</button>
                    <button className="header-sign-in-out-button "><span className="header-button-responsive">Sign in / out</span><i class="bi bi-person-exclamation header-user"></i></button>
                </div> 
            </div>
        </div>
    </header>)
}