import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, ScrollView, TouchableOpacity, AsyncStorage, Keyboard, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
// import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            type: 0
        }
    }
    home() {
        Actions.home()
    }
    signup() {
        Actions.signup()
    }

    login(email, password, login_type) {
        if (login_type != 0) {
            if (this.state.type == 1) {
                fetch('http://172.16.51.79/server/api/account/login?email=' + email + '&password=' + password)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // console.log(responseJson.key_token);
                        if (responseJson.status) {// user pass ถูกต้อง
                            if (responseJson.data.status == 1) {//status account = เปิดใช้งาน
                                AsyncStorage.setItem('key_token', responseJson.key_token);
                                AsyncStorage.setItem('account_email', responseJson.data.email);
                                AsyncStorage.setItem('account_firstname', responseJson.data.firstname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                Actions.userprofile();
                            } else if (responseJson.data.status == 2) {//status account = รอการตวจสอบ
                                alert("รอการตวจสอบบัญชี");
                            } else if (responseJson.data.status == 3) {//status account = ถูกระงับการใช้งาน
                                alert("บัญชีถูกระงับการใช้งาน");
                            }
                        } else {
                            alert(responseJson.message);
                        }
                        console.log("xxx");
                    })
            } else if (this.state.type == 2) {
                fetch('http://172.16.51.79/server/api/account_T/login?email=' + email + '&password=' + password)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // console.log(responseJson);
                        if (responseJson.status) {// user pass ถูกต้อง
                            if (responseJson.data.status == 1) {//status account = เปิดใช้งาน
                                AsyncStorage.setItem('key_token', responseJson.key_token);
                                AsyncStorage.setItem('account_email', responseJson.data.email);
                                AsyncStorage.setItem('account_firstname', responseJson.data.firstname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                Actions.trainerprofile();
                            } else if (responseJson.data.status == 2) {//status account = รอการตวจสอบ
                                alert("รอการตวจสอบบัญชี");
                            } else if (responseJson.data.status == 3) {//status account = ถูกระงับการใช้งาน
                                alert("บัญชีถูกระงับการใช้งาน");
                            }
                        } else {
                            alert(responseJson.message);
                        }
                        console.log("yyy");

                    })
            }
        } else {
            alert("กรุณาเลือกสถานะผู้ใช้งาน");
        }
    }

    _storeData = async (responseJson) => {
        try {
            await AsyncStorage.setItem('key_token', responseJson.key_token);
            await AsyncStorage.setItem('account_email', responseJson.data.email);
            await AsyncStorage.setItem('account_firstname', responseJson.data.firstname);
            await AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
            await AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
        } catch (error) {
            alert(error)
        }
    };

    render() {
        return (
            // <View style={styles.container}>
            <View styles={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <Form type="Login" /> */}
                    <View style={styles.container}>
                        <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
                            <View style={{ flex: 5, alignItems: 'center' }}>
                                <TouchableOpacity onPress={this.home}>
                                    <Text style={{
                                        paddingTop: 40,
                                        color: '#eeeeee',
                                        fontSize: 30,
                                        fontWeight: '500'
                                    }}>My Trainer</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
                        <View style={{ flexDirection: "row", paddingLeft: 15, marginTop: 10 }}>
                            <View style={{ flexDirection: "row", marginRight: 15, }}>
                                <View style={{ borderWidth: 1, borderRadius: 10 }}>
                                    {/* {console.log(this.state.checked)} */}
                                    <RadioButton
                                        value="1"
                                        status={this.state.type === 1 ? 'type' : 'unchecked'}
                                        onPress={() => { this.setState({ type: 1 }) }}
                                    ></RadioButton></View>
                                <Text style={{
                                    color: '#62757f',
                                    fontSize: 20,
                                    fontWeight: '300',
                                    textAlign: "center",
                                    margin: 5
                                }}>User</Text>
                            </View>
                            <View style={{ borderWidth: 1, borderRadius: 10 }}>
                                <RadioButton
                                    value="2"
                                    status={this.state.type === 2 ? 'type' : 'unchecked'}
                                    onPress={() => { this.setState({ type: 2 }); }}
                                ></RadioButton>
                            </View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '300',
                                textAlign: "center",
                                margin: 5
                            }}>Trainer</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => { this.login(this.state.email, this.state.password, this.state.type) }}>
                            <Text style={styles.buttonText} >Login</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
                {/* </View> */}
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginTextCont: {
        // flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    loginText: {
        color: '#12799f',
        fontSize: 16,
    },
    signupButton: {
        color: '#12799f',
        fontSize: 16,
        fontWeight: '500',
    }, inputBox: {
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