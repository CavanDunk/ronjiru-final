import React from 'react';
import { AccountData } from 'drizzle-react-components';

class Profile extends React.Component {

    render() {
        return (
            <div className="center-screen">
                <h1>Profile</h1>
                <AccountData accountIndex="0" units="ether" precision="3" render={({ address, balance, units }) =>  (
                    <div>
                        <div><strong>Address:</strong> {address}</div>
                        <div><strong>Balance:</strong> {balance} {units}</div>
                    </div>
                )}/>
            </div>
        );
    }
}

export default Profile;