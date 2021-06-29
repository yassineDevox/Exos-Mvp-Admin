import { Link } from "react-router-dom"
import React from 'react'
import LinkPage from "../../interfaces/link-page";


interface SideBareItemProps {
    titleDomain:string;
    linksPages:LinkPage[];
}

const SideBareItem = (props:SideBareItemProps) => {
    return (
        <ul>
            <li>{props.titleDomain}</li>
            <ul>
                {props.linksPages.map((l) => (
                    <li>
                        {l.icon} <Link to={l.path} >
                            {l.label}
                        </Link>
                    </li>

                ))}
            </ul>

        </ul>
    )
}

export default SideBareItem;
