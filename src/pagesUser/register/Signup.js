import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            nickname: '',
            weight: '',
            height: '',
            gender: '',
            telephone: '',
            birthday: '',
            items: ''
        };
        this.register();
    }
    goBack() {
        Actions.pop()
    }
    login() {
        Actions.login()
    }

    register(email, password, firstname, lastname, nickname, weight, height, gender, telephone, birthday) {
        fetch('http://172.16.51.79/server/api/account/register?email=' + email + '&password=' + password + '$firstname=' + firstname + '$lastname=' + lastname + '$nickname=' + nickname + '$weight=' + weight + '$height=' + height + '$gender=' + gender + '$telephone=' + telephone + '$birthday=' + birthday + '$status=2')
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    if (responseJson.data.status = "true") {
                        alert("สมัครสำเร็จ รอการตรวจสอบข้อมูล");
                        Actions.login();
                    } else {
                        alert(responseJson.message);
                    }
                    console.log("xxx");
                }
            })
        // console.log(this.register);
        console.log(this.state.email)
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={() => this.login}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems: 'left' }}>
                        <Text style={{
                            paddingTop: 40,
                            color: '#eeeeee',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>My Trainer</Text>
                    </View>
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../../image/logo.jpg')}
                />
                <Text style={styles.textlogo}> Sign Up </Text>
                <ScrollView >
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
                        onSubmitEditing={() => this.firstname.focus()}
                        ref={(input) => this.password = input} />

                    <TextInput style={styles.inputBox}
                        onChangeText={(firstname) => this.setState({ firstname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="ชื่อ"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="default"
                        ref={(input) => this.firstname = input}
                        onSubmitEditing={() => this.lastname.focus()} />



                    <TextInput style={styles.inputBox}
                        onChangeText={(lastname) => this.setState({ lastname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="นามสกุล"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="default"
                        ref={(input) => this.lastname = input}
                        onSubmitEditing={() => this.nickname.focus()} />



                    <TextInput style={styles.inputBox}
                        onChangeText={(nickname) => this.setState({ nickname })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="ชื่อเล่น"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="default"
                        ref={(input) => this.nickname = input}
                        onSubmitEditing={() => this.weight.focus()} />

                    <TextInput style={styles.inputBox}
                        onChangeText={(weight) => this.setState({ weight })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="น้ำหนัก"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="default"
                        ref={(input) => this.weight = input}
                        onSubmitEditing={() => this.height.focus()}
                    />
                    <TextInput style={styles.inputBox}
                        onChangeText={(height) => this.setState({ height })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="ส่วนสูง"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="default"
                        ref={(input) => this.height = input}
                        onSubmitEditing={() => this.telephone.focus()}
                    />
                    <TextInput style={styles.inputBox}
                        onChangeText={(telephone) => this.setState({ telephone })}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="เบอร์โทรศัพท์"
                        placeholderTextColor="#bdbdbd"
                        keyboardType="numeric"
                        ref={(input) => this.telephone = input}
                    />


                    <View style={{ flexDirection: "row", paddingLeft: 15, marginTop: 10 }}>
                        <View style={{ flexDirection: "row", marginRight: 15, }}>
                            <View style={{ borderWidth: 1, borderRadius: 10 }}>
                                {/* {console.log(this.state.checked)} */}
                                <RadioButton
                                    value="male"
                                    status={this.state.gender === 'male' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ gender: "male" }) }}
                                ></RadioButton></View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '300',
                                textAlign: "center",
                                margin: 5
                            }}>ชาย</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 10 }}>
                            <RadioButton
                                value="female"
                                status={this.state.gender === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ gender: 'female' }); }}
                            ></RadioButton>
                        </View>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '300',
                            textAlign: "center",
                            margin: 5
                        }}>หญิง</Text>
                    </View>
                    <DatePicker
                        style={{ width: 200, marginTop: 10 }}
                        date={this.state.birthday}
                        mode="date"
                        placeholder="select birth date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        locale={'th'}
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
                        onDateChange={(birthday) => { this.setState({ birthday: birthday }) }}
                    />
                </ScrollView>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.register}>SignUp</Text>
                </TouchableOpacity>
            </View>
            // </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white'
        justifyContent: 'center',
        alignItems: 'center'
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