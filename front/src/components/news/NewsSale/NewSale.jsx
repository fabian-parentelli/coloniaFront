import './newSale.scss';
import CloseIcon from '@mui/icons-material/Close';

const NewSale = () => {

    const newSale = {
        name: 'sal fina marolio',
        minQuantity: 6,
        quantity: 1,
        price: 15487.88,
        img: {
            imgName: "02salFinaMarolio.png",
            imgUrl: 'https://res.cloudinary.com/dp5mxcl8f/image/upload/v1710247414/prueba/tnsdtfjskxzppz4oijuh.png',
        },
        type: 'un',
        active: true,
        description: 'estcuhe 500gr',
        category: 'food',
        priceSale: 14487.88
    };

    return (
        <div className='newSale'>
            <div className='newSaleViolet'></div>
            <div className='newSaleYellow'>
                <h2>Producto</h2>
                <h3>Con descuento</h3>
            </div>
            {newSale &&
                <div className='newSaleCont'>
                    <img src="saleOfertA.png" alt="oferA" className='saleOfertA' />
                    <div className='newSaleImg'>
                        <img src={newSale.img.imgUrl} alt={newSale.name} className='imgProduct' />
                    </div>
                    <img src="saleOfertA.png" alt="oferB" className='saleOfertB' />
                    <div className='textNewSale'>
                        <p className='nSName'>{newSale.name}</p>
                        <p className='nSPrice'>Precio: ${newSale.priceSale}</p>
                        <button>Agregar {newSale.minQuantity}</button>
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                        {/* Definir el boton que agrega al carrito */}
                    </div>
                </div>
            }
        </div>
    );
};

export default NewSale;