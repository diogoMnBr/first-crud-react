import React, {Fragment} from 'react';


const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <hr />
            <p>
            <a href={props.link}>{props.link}</a>
            </p>
        </Fragment> //substitui a div e não renderiza nenhuma tag na árvore DOM
    )
}

export default DescriptionWithLink;

