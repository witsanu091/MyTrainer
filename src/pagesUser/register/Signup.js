import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,

} from 'react-native';

import Formsignup from '../../components/Formsignup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return (
            <View styles={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Formsignup type="Signup" />

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
                                        status={this.state.checked === 1 ? 'checked' : 'unchecked'}
                                        onPress={() => { this.setState({ checked: 1 }) }}
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
                                    status={this.state.checked === 2 ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 2 }); }}
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
                        <TouchableOpacity style={styles.button} onPress={() => { this.login(this.state.email, this.state.password, this.state.checked) }}>
                            <Text style={styles.buttonText} >Login</Text>
                        </TouchableOpacity>
                    </View>
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