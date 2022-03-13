import React from 'react';
import { ReactComponent as StarFull } from "assets/img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty.svg";

type Props = {
    fill: number
}
const Star = ({ fill }: Props) => {

    switch (fill) {
        case 1:
            return <StarFull />
        case 0:
            return <StarEmpty />
        default:
            return <StarHalf />
        
    }
}

export default Star;