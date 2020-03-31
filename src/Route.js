import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pagesUser/register/Login';
import Choice from './pagesUser/register/Choice';
import Signup from './pagesUser/register/Signup';
import Homescreen from './pagesUser/Homescreen';
import Coursetype from './pagesUser/Coursetype';
import Coursedetail from './pagesUser/Coursedetail';
import Userprofile from './pagesUser/Userprofile';
import GymLocation from './pagesUser/GymLocation';
import Gymdetail from './pagesUser/Gymdetail';
import Trainerprofile from './pageTrainer/Trainerprofile';
import Trainercourse from './pageTrainer/Trainercourse';
import Requirement from './pageTrainer/Requirement';
import Trainerdetail from './pagesUser/Trainerdetail';





export default class Route extends Component {
    render() {
        return (
            <Router barButtonIconStyle={styles.barButtonIconStyle}
                hideNavBar={false}
                navigationBarStyle={{ backgroundColor: '#883997', }}
                titleStyle={{ color: 'white', }}  >
                <Stack key="root">
                    <Scene key="login" component={Login} hideNavBar={true} />
                    <Scene key="signup" component={Signup} hideNavBar={true} />
                    <Scene key="home" component={Homescreen} hideNavBar={true} />
                    <Scene key="coursetype" component={Coursetype} hideNavBar={true} />
                    <Scene key="coursedetail" component={Coursedetail} hideNavBar={true} />
                    <Scene key="userprofile" component={Userprofile} hideNavBar={true} />
                    <Scene key="gymlocations" component={GymLocation} hideNavBar={true} />
                    <Scene key="gymdetail" component={Gymdetail} hideNavBar={true} />
                    <Scene key="trainerprofile" component={Trainerprofile} hideNavBar={true} />
                    <Scene key="choice" component={Choice} hideNavBar={true} />
                    <Scene key="Trainercourse" component={Trainercourse} hideNavBar={true} />
                    <Scene key="requirement" component={Requirement} hideNavBar={true} />
                    <Scene key="trainerdetail" component={Trainerdetail} hideNavBar={true} />






                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white',

    }
}