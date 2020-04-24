import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, AsyncStorage, Keyboard, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import Config from '../../components/config';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            type: 0
        }
        this.check_login();
    }
    home() {
        Actions.home()
    }
    choice() {
        Actions.choice()
    }


    check_login = async () => {
        try {
            var key_token = await AsyncStorage.getItem('key_token');
            var account_type = await AsyncStorage.getItem('account_type');
            console.log("Logined |" + key_token + " | " + account_type);
            if (key_token != null && account_type != null) {
                console.log("hee")
                if (account_type == 1) {
                    Actions.userprofile();
                } else if (account_type == 2) {
                    Actions.trainerprofile();
                }
            }
        } catch (error) {
            console.log("eooreeeeeeeee")
        }
    }

    login(email, password, login_type) {
        if (login_type != 0) {
            if (this.state.type == 1) {
                fetch(Config.url + 'api/account/login?email=' + email + '&password=' + password)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson.key_token);
                        if (responseJson.status) {// user pass ถูกต้อง
                            if (responseJson.data.status == 1) {//status account = เปิดใช้งาน
                                AsyncStorage.setItem('key_token', responseJson.key_token);
                                AsyncStorage.setItem('account_id', responseJson.data.id);
                                AsyncStorage.setItem('account_email', responseJson.data.email);
                                AsyncStorage.setItem('account_firstname', responseJson.data.firstname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                AsyncStorage.setItem('account_type', responseJson.data.type);
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
                fetch(Config.url + 'api/account_T/login?email=' + email + '&password=' + password)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson.key_token);
                        if (responseJson.status) {// user pass ถูกต้อง
                            if (responseJson.data.status == 1) {//status account = เปิดใช้งาน
                                AsyncStorage.setItem('key_token', responseJson.key_token);
                                AsyncStorage.setItem('account_id', responseJson.data.id);
                                AsyncStorage.setItem('account_email', responseJson.data.email);
                                AsyncStorage.setItem('account_firstname', responseJson.data.firstname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                AsyncStorage.setItem('account_lastname', responseJson.data.lastname);
                                AsyncStorage.setItem('account_type', responseJson.data.type);
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

    render() {
        return (

            <View styles={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            paddingTop: 40,
                            color: '#eeeeee',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>Find Trainer</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={{ marginTop: 10 }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../image/logoApp.png')}
                        />
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.textlogo}>เข้าสู่ระบบ </Text>
                        </View>
                    </View>

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
                                    status={this.state.type === 1 ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ type: 1 }) }}
                                ></RadioButton></View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 16,
                                fontWeight: '300',
                                textAlign: "center",
                                margin: 5
                            }}>ผู้ใช้งาน</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 10 }}>
                            <RadioButton
                                value="2"
                                status={this.state.type === 2 ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ type: 2 }); }}
                            ></RadioButton>
                        </View>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 16,
                            fontWeight: '300',
                            textAlign: "center",
                            margin: 5
                        }}>เทรนเนอร์
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => { this.login(this.state.email, this.state.password, this.state.type) }}>
                        <Text style={styles.buttonText} >เข้าสู่ระบบ</Text>
                    </TouchableOpacity>



                </View>
                <View style={styles.loginTextCont}>
                    <Text style={styles.loginText}>ยังไม่มีบัญชีผู้ใช้ไปหน้า </Text>
                    <TouchableOpacity onPress={this.choice}><Text style={styles.signupButton}> สมัคร</Text></TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    loginTextCont: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row',
        marginTop: 80,

    },
    loginText: {
        color: '#12799f',
        fontSize: 18,
    },
    signupButton: {
        color: '#12799f',
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 1,
        borderRadius: 5,
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
        paddingVertical: 12,
        marginTop: 30
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    textlogo: {
        color: '#12799f',
        marginTop: 10,
        fontSize: 24,
        fontWeight: '500',
    }
});