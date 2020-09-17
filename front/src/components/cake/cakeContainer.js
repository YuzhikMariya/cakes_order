import { connect } from "react-redux";
import Cake from "./cake";

let mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let cake = {};
    state.catalogPage.catalog.forEach(element => {
        if(element.id == id){
            cake = element;
        }
    });
    return cake;
}


export const CakeContainer = connect(mapStateToProps)(Cake);