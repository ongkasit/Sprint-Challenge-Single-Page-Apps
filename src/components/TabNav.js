import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function TabNav() {
    return (
        <div>
            <Link to='/'><Button color="primary">Home</Button></Link>
            <Link to='/characters'><Button color="secondary">Characters</Button></Link>
            <Link to='/locations'><Button color="success">Locations</Button></Link>
            <Link to='/episodes'><Button color="info">Episodes</Button></Link>
            <Link to='/search'><Button color="warning">Search</Button></Link>
        </div>
    )
};
