import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, Keyboard, StatusBar } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    home() {
        Actions.home()
    }
    saveData = async () => {
        const { email, password } = this.state;

        //save data with asyncstorage
        let loginDetails = {
            email: email,
            password: password
        }

        if (this.props.type !== 'Login') {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);

            this.login();
        }
        else if (this.props.type == 'Login') {
            try {
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.email != null && ld.password != null) {
                    if (ld.email == email && ld.password == password) {
                        alert('Go in!');
                    }
                    else {
                        alert('Email and Password does not exist!');
                    }
                }

            } catch (error) {
                alert(error);
            }
        }
    }

    showData = async () => {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
    }

    render() {
        return (

            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../image/logo.jpg')}
                />
                <Text style={styles.textlogo}> Login </Text>

                <TextInput style={styles.inputBox}
                    onChangeText={(email) => this.setState({ email })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#bdbdbd"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()} />

                <TextInput style={styles.inputBox}
                    onChangeText={(password) => this.setState({ password })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#bdbdbd"
                    ref={(input) => this.password = input}
                />

                <TouchableHighlight style={styles.button} onPress={this.home}>
                    <Text style={styles.buttonText} >{this.props.type}</Text>
                </TouchableHighlight>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10, paddingVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#883997',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    textlogo: {
        color: '#424242',
        marginTop: 10,
        fontSize: 24,
        fontWeight: '500',
    }
});