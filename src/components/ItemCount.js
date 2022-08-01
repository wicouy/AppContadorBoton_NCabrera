import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../estilos.scss";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = () => {
let stockInicial = useState(10);        
let contador = useState(0);
let carrito =useState(0);
const setContador = contador[1];

    const aumentoContador = () => {
        if (stockInicial[0] > 0) {
            stockInicial[1](stockInicial[0] - 1);
            setContador(contador[0] + 1);
        }
    };

    let restoContador = () => {
        if (stockInicial[0] > 1 && contador[0] > 0) {
            stockInicial[1](stockInicial[0] + 1);
            setContador(contador[0] - 1);
        }

    };

    let agregarCarrito = () => {    
        carrito[1](carrito[0] += contador[0]);
        setContador(contador[0] =0);
    };

    let reset = () => {    
        setContador(contador[0] =0 )
        stockInicial[1](stockInicial[0] =10)
        carrito[1](carrito[0] =0)
    };

  return (
    <> 
        <div id="BtnContadorPadre">
            <div id="BtnContadorHijo">
                <p>El stock total es de: {stockInicial[0]}</p>
                <p> El carrito tiene {carrito[0]} items</p>
            <InputGroup className="mb-3">
                <Button onClick={aumentoContador}>+</Button>
                <Form.Control type="text"  id="txtContadorHijo" value={contador[0]} disabled readonly />
                <Button onClick={restoContador}>-</Button>
                
            </InputGroup>
            <button id="btnContadorHijo" onClick={agregarCarrito}>Agregar al carrito</button>
            <button onClick={reset}>Reset</button>
            </div>
        
        </div>
    </>
  );
}

export default ItemCount;