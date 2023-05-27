import React, {Fragment} from 'react';
import GrayImg from '../../shared/grayimg';
import DescriptionWithLink from '../../shared/description_with_link';

const Planet = (props) => {
    return (
        <Fragment>
            <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url}/>
            </div>
        </Fragment>
    )}

export default Planet;