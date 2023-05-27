import React, {Fragment} from 'react';
import './style.css'

const GrayImg = (props) => {
    return (
        <Fragment>
            <img className="grayimg"src={props.img_url} alt=""></img>
        </Fragment> //substitui a div e não renderiza nenhuma tag na árvore DOM
    )
}

export default GrayImg;

