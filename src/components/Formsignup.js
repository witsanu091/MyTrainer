import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { Actions } from 'react-native-router-flux';



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

    render() {
        return (

            <View style={styles.container}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../image/logo.jpg')}
                />
                <Text style={styles.textlogo}> Sign Up </Text>

                <ScrollView style={styles.scrollView}>
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
                        <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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