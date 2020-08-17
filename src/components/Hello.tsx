import React from "react";
import {match} from "react-router-dom";

interface HelloParams {
    id: string;
}

export interface HelloProps {
    title: string;
    name: string;
    age: number;
    match?: match<HelloParams>;
}

export class Hello extends React.Component<HelloProps, any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const match = this.props.match;
        return <h1>{this.props.title} {this.props.name} is {this.props.age} old. ID: {match?.params.id}</h1>
    }
}
