import request from 'axios';
import React from 'react';

export function getToken(user, pwd) {
    const reports = {
        url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
        data: { 'username': user, 'password': pwd },
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
        request.post(reports.url, reports.data, { headers: reports.headers })
            .then(res => {
                const authToken = res.data.authToken;
                this.setState({ token: authToken }, () => console.log(this.state.token));
            })
            .catch(e => {
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}

