import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Keyboard, StatusBar } from 'react-native';
import { DatePicker } from 'react-native-datepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Formsignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            nickname: '',
            weight: '',
            height: '',
            bdate: '',
            // date: "2016-05-15"

        }
    }
    gobacklogin() {
        Actions.login()
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={() => this.gobacklogin()}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems: 'left' }}>
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
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../image/logo.jpg')}
                />
                <Text style={styles.textlogo}> Sign Up </Text>
                <ScrollView>
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
                    <TextInput style={styles.inputBox}
                        onChangeText={(fname) => this.setState({ fname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="First Name"
                        placeholderTextColor="#bdbdbd"
                        selectionColor="#fff"
                        keyboardType="default"
                    />

                    <TextInput style={styles.inputBox}
                        onChangeText={(lname) => this.setState({ lname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Last Name"
                        placeholderTextColor="#bdbdbd"
                        selectionColor="#fff"
                        keyboardType="default"
                    />

                    <TextInput style={styles.inputBox}
                        onChangeText={(nickname) => this.setState({ nickname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Nickname"
                        placeholderTextColor="#bdbdbd"
                        selectionColor="#fff"
                        keyboardType="default"
                    />
                    <TextInput style={styles.inputBox}
                        onChangeText={(weight) => this.setState({ weight })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Weight"
                        placeholderTextColor="#bdbdbd"
                        selectionColor="#fff"
                        keyboardType="default"
                    />
                    <TextInput style={styles.inputBox}
                        onChangeText={(height) => this.setState({ height })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Height"
                        placeholderTextColor="#bdbdbd"
                        selectionColor="#fff"
                        keyboardType="default"
                    />
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.bdate}
                        mode="date"
                        placeholder="select birth date"
                        format="YYYY-MM-DD"
                        minDate="1800-05-01"
                        maxDate="2600-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(bdate) => { this.setState({ bdate: bdate }) }}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.saveData}>SignUp</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>
            // {/* // </View> */ }

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // flex:1
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
        color: '#12799f',
        fontSize: 24,
        fontWeight: '500',
    }
});