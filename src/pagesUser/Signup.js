import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,

} from 'react-native';

import Formsignup from '../components/Formsignup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Formsignup type="Signup" />
                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    signupTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: '#12799f',
        fontSize: 16,

    },
    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500'
    }
});