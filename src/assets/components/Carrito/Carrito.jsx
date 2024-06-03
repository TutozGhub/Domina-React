import { useState, useEffect } from "react";

export default function Carrito() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('JSON/productos_carro.json')
    .then((res)=> res.json())
    .then((data)=>{
      setProducts(data);
    })
  }, [])

  const addCart = (producto) => {
    if (producto?.cart !== true){
      setTotal(total + producto.precio);
    }
    producto.cart = true;
  };
  const subCart = (producto) => {
    producto.cart = false;
    setTotal(total - producto.precio);
  };
  const cartProducts = products.filter(p => p?.cart === true)

  return (
    <div className="d-flex justify-content-center m-4">
      <div className="max-width-1200 w-100">
        <h1>Tienda online</h1>
        <div className="row align-content-end">
          <div className="col">
            <div className="row gap-2 w-100">
              {products.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div key={item?.uid} className="col max-width-300 w-100">
                  <div className="card w-100">
                    <div className="card-header">
                      <h3>{item?.nombre}</h3>
                    </div>
                    <div className="card-body justify-content-between">
                      <p>
                        <strong>Precio: $</strong>
                        {item?.precio}
                      </p>
                      <button className="btn btn-secondary" 
                          onClick={() =>{
                          addCart(item);
                          }}>
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col max-width-300">
            <div className="row gap-2">
              <div className="col">
                <div className="card max-width-300 my-0 ms-auto">
                  <div className="card-header">
                    <h4>Carrito de compras</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    {cartProducts.map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li
                        key={item?.uid}
                        className="list-group-item d-flex align-items-center justify-content-between"
                      >
                        {item?.nombre} - ${item?.precio}
                        <button
                          className="btn btn-light m-0 ms-auto"
                          onClick={() =>{
                            subCart(item);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </li>
                    ))}
                    <li className="list-group-item">
                      <strong>Total: </strong>${total}
                    </li>
                  </ul>
                  <button className="btn btn-success btn-top">Pagar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
