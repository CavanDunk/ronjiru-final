import React from 'react';
import { ContractData, ContractForm } from 'drizzle-react-components';
import Button from "react-bootstrap/Button";

class Generate extends React.Component {
    render() {
        return (
            <div className="div-bg">
                <div className="center-screen">
                    <ContractData contract="GenerateAvatar" method="random" />
                </div>
            </div>
        );
    }
}

export default Generate;