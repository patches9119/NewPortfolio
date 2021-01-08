import React from "react";
import './style.css';
import { Container, Header, Icon, Button } from 'semantic-ui-react'

const project = ({ img, name, href, description }) => {
    const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);

    return (
        <div
            className="card"
            style={{ border: `1px solid black`, borderRadius: 2, margin: 10 }}
            onClick={() => window.location = href}
            onMouseEnter={e => {
                // style stage container:
                const container = e.target;
                container.style.cursor = "pointer";
              }}
              onMouseLeave={e => {
                const container = e.target;
                container.style.cursor = "default";
              }}
        >
            <div>
                <p style={{ margin: 0, textAlign: "left", padding: "5px 0px 5px 10px" }}>
                    {NAME}
                </p>
            </div>
            <div class="row">
                <div class="column">
                    <img class="img" src={img}></img>
                </div>
                <div class="column">
                    <div style={{ marginLeft: 0, textAlign: "left", padding: "5px 0px 5px 10px" }}>
                            {description}
                    </div>
                </div>
            </div>
            
        </div>
    );
 };

export default project;