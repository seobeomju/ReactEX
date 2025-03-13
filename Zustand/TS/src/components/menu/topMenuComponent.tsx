import {NavLink} from "react-router";

function TopMenuComponent() {



    return (
        <div>
            <hr/>
            TOP MENU
            <NavLink to={'/member/login'}>Login</NavLink>
            <NavLink to={'/todo/list'}>Todo</NavLink>
            <hr/>
        </div>
    );
}

export default TopMenuComponent;