import React from 'react';

export default function (props) {

    // console.log(props.productos);
    const listItems = props.productos.map(prod =>
        <tr key={prod.id}>
                <td>{ prod.id }</td>
                <td>{ prod.nombre }</td>
                <td>{ prod.inventario }</td>
                <td>{ prod.descripcion }</td>
                <td>{ prod.precio }</td>
                <td>{ prod.estado ? 'Yes' : 'No' }</td>
                <td>{ prod.imagen }</td>
                <td>{ prod.categoria }</td>
                <td></td>
        </tr>);
    return(      
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Inventario</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Imagen</th>
                <th>categoria</th>
                <th></th>
            </tr> 
        </thead>        
        <tbody>
            {listItems}
        </tbody>
    </table>
    );    
}
// export default function (props) {
//     // const fullName = useState(props.fullName);

//         return (<div>{props.fullName}</div> );
// }

// export default function (props) {
//     return (<div>holla {props.fullName} <div>holitas</div></div>);
// }

