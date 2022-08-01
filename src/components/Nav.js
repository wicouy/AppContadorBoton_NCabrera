const Nav = (parametros) => {

  if(parametros.type == "header"){
    return (
      <nav>
        <a href="#">Uno</a>
        <a href="#">Dos</a>
        <a href="#">Tres</a>
      </nav>
    )
  }else{
    return (
      <nav>
        <a href="#">Footer Cuatro</a>
        <a href="#">Footer Cinco</a>
        <a href="#">Footer Seis</a>
      </nav>
    )
  }

}

export default Nav