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
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RadioButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import Config from '../../components/config';


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
            items: '',
            password2: '',
            validated: false,
        };
    }
    validated = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
        if (reg.test(this.state.email) === true) {
            // alert('success');
        }
        else {
            alert('กรุณาตรวจสอบอีเมล');
        }
    }
    choice() {
        Actions.choice()
    }
    login() {
        Actions.login()
    }

    register(email, password, firstname, lastname, nickname, weight, height, gender, telephone, birthday) {
        if (this.props.user_type == 1) {
            fetch(Config.url + 'api/account/register?email=' + email + '&password=' + password + '&firstname=' + firstname + '&lastname=' + lastname + '&nickname=' + nickname + '&weight=' + weight + '&height=' + height + '&gender=' + gender + '&telephone=' + telephone + '&birthday=' + birthday + '&status=1' + '&type=1')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
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
        } else if (this.props.user_type == 2) {
            fetch(Config.url + 'api/account_T/register?email=' + email + '&password=' + password + '&firstname=' + firstname + '&lastname=' + lastname + '&nickname=' + nickname + '&weight=' + weight + '&height=' + height + '&gender=' + gender + '&telephone=' + telephone + '&birthday=' + birthday + '&status=1' + '&type=2')
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    if (responseJson.status) {
                        if (responseJson.data.status = "true") {
                            alert("สมัครสำเร็จ รอการตรวจสอบข้อมูล");
                            Actions.login();
                        } else {
                            alert(responseJson.message);
                        }
                        console.log("yyy");
                    }
                })
        }

    }

    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    {/* {console.log(this.props.user_type)} */}
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={() => this.choice()}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, alignItems: 'left' }}>
                        <Text style={{
                            paddingTop: 40,
                            color: '#eeeeee',
                            fontSize: 30,
                            fontWeight: '500'
                        }}>Find Trainer</Text>
                    </View>
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center' }} behavior='padding'>
                    <ScrollView >
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={require('../../image/logoApp.png')}
                            />
                            <Text style={styles.textlogo}>สมัครบัญชีผู้ใช้</Text>
                        </View>
                        <TextInput style={styles.inputBox}
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="อีเมล"
                            placeholderTextColor="#bdbdbd"
                            keyboardType="email-address"
                            onSubmitEditing={() => {
                                this.validated()
                                this.password.focus()

                            }} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(password) => this.setState({ password })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="รหัสผ่าน"
                            secureTextEntry={true}
                            placeholderTextColor="#bdbdbd"
                            onSubmitEditing={() => this.password2.focus()}
                            ref={(input) => this.password = input} />

                        <TextInput style={styles.inputBox}
                            onChangeText={(password2) => this.setState({ password2 })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="ใส่รหัสผ่านอีกครั้ง"
                            secureTextEntry={true}
                            placeholderTextColor="#bdbdbd"
                            onSubmitEditing={() => {
                                this.firstname.focus()
                                if (this.state.password != this.state.password2) Alert.alert(
                                    "กรุณาตรวจสอบรหัสผ่าน",
                                    "รหัสผ่านไม่ตรงกัน",
                                    [
                                        {
                                            text: "ตกลง", onPress: () => console.log("ok")

                                        },


                                        {
                                            text: "ปิด", onPress: () => console.log("close alert"),

                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }}
                            ref={(input) => this.password2 = input} />


                        <TextInput style={styles.inputBox}
                            onChangeText={(firstname) => this.setState({ firstname })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="ชื่อจริง"
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
                            format="YYYY-MM-DD"
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
                        <Text style={styles.buttonText} onPress={() =>
                            this.register(this.state.email, this.state.password, this.state.firstname, this.state.lastname, this.state.nickname, this.state.weight, this.state.height, this.state.gender, this.state.telephone, this.state.birthday
                            )}>สมัคร</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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
        marginVertical: 10, paddingVertical: 15
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
        marginTop: 10,

    }
});