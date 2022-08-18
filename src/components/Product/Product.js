import React from 'react';

// kono data parameter hisebe newar jnno 'props' use hoise
const Product = (props) => {
    // props er moddhe kichu ase kina seta janar jnne, r akhane product ta holo property er naam 
    
    //console.log(props.product.name);
    return (
        <div>
            {/* <h3>This is Product</h3> */}
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;