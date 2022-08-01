import Nav from "./Nav"
import CartWidget from "./CartWidget"

const Header = (props) => {
    return (
        <header id="header">
            <h1 className="titulo" >Titulo</h1>
            <CartWidget />
            <Nav
                type="header"
            />
        </header>
    )
}

export default Header