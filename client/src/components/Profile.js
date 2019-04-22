import React from 'react';

class Profile extends React.Component {
    state = { dataKey: null, account: null, accountBalance: null };

    componentDidMount() {
        const { drizzle } = this.props;

        drizzle.web3.eth.getAccounts().then(e => this.setState({account: e[0]}));

        drizzle.web3.eth.getAccounts().then(z => this.setState({accountBalance: (z/1000000000000000000).toFixed(3)}));
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
                <p>Your address: {this.state.account}</p>
                <p>Your balance: {this.state.accountBalance}</p>
            </div>
        );
    }
}

export default Profile;