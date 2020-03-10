import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pagesUser/Login';
import Signup from './pagesUser/Signup';
import Homescreen from './pagesUser/Homescreen';
import Coursetype from './pagesUser/Coursetype';
import Coursedetail from './pagesUser/Coursedetail';
import Userprofile from './pagesUser/Userprofile';
import GymLocation from './pagesUser/GymLocation';
export default class Route extends Component {
    render() {
        return (
            <Router barButtonIconStyle={styles.barButtonIconStyle}
                hideNavBar={false}
                navigationBarStyle={{ backgroundColor: '#883997', }}
                titleStyle={{ color: 'white', }}
            >
                <Stack key="root">
                    <Scene key="login" component={Login} hideNavBar={false} />
                    <Scene key="signup" component={Signup} title="" />
                    <Scene key="home" component={Homescreen} hideNavBar={true} />
                    <Scene key="coursetype" component={Coursetype} hideNavBar={true} />
                    <Scene key="coursedetail" component={Coursedetail} hideNavBar={true} />
                    <Scene key="userprofile" component={Userprofile} hideNavBar={true} />
                    <Scene key="gymlocations" component={GymLocation} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'

    }
}