import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import { Actions } from 'react-native-router-flux';

import Form from '../components/Form';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    render() {
        return (
            <View style={styles.container}>
                <View styles={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Form type="Login" />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.loginTextCont}>
                    <Text style={styles.loginText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    loginTextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    loginText: {
        color: '#12799f',
        fontSize: 16,
    },
    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500',
    }
});