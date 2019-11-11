import React from "react";
import {  Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
    return (
        <Menu>
            <Link to='/'><Button>Home</Button></Link>
            <Link to='/characters'><Button>Characters</Button></Link>
            <Link to='/locations'><Button>Locations</Button></Link>
            <Link to='/episodes'><Button>Episodes</Button></Link>
        </Menu>
    )
};
