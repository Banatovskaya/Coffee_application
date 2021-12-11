// import './ks.css'
import { Fragment } from "react";
import HeaderForYouPleasure from "../header/header-for-you-pleasure";
import Footer from '../footer/footer';
import AboutForYouPleasure from '../about/about-for-you-pleasure';

import ListItem from '../list-item/list-item';


const ForYouPleasure = (props) => {

    return (
        <Fragment>
        <HeaderForYouPleasure/>
        <AboutForYouPleasure/>
        <ListItem
         data={props.data }
         setIdItem={props.setIdItem}
        />			
        <Footer/>
        
       </Fragment>
    )
}

export default ForYouPleasure;