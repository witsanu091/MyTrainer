import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';


export default class Trainerprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_profile: {},
            counterItem1: 0,
            counterItem2: 0

        };

        this.load_profile();
    }

    home() {
        Actions.home()
    }
    goback() {
        Actions.pop()
    }
    requirement() {
        Actions.requirement()
    }
    Trainercourse() {
        Actions.Trainercourse()
    }

    load_profile = async () => {
        console.log("data profile loading....")
        try {
            const key_token = await AsyncStorage.getItem('key_token');
            console.log(key_token)
            if (key_token != null) {
                console.log("key_token | " + key_token);
                fetch('http://10.66.32.45/server/api/account_T/get_profile?token_login=' + key_token)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson != null) {
                            this.setState({ data_profile: responseJson });
                            // console.log(this.state.data_profile);
                        } else {
                            alert("Not found this profile!");
                            Actions.pop();
                        }
                    });
            }
        } catch (error) {

        }
    }
    logout = async () => {
        try {
            await AsyncStorage.removeItem('key_token');
            // var key_token = await AsyncStorage.getItem('key_token');
            // console("logout key|" + key_token)
            console.log("logout success.");
            Actions.login();
        } catch (error) {
            alert("Logout fail.")
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >

                    <View style={{ flex: 7, alignItems: 'center' }}>

                        <Text style={styles.TextBand}>Trainer profile</Text>

                    </View>
                </View>
                <Image style={styles.avatar} source={require('../image/tprofile.png')} />
                <View style={{ flexDirection: "row-reverse", marginLeft: 20, marginTop: 10 }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.logout()}>
                        <Text style={{ color: "#eeeeee" }}>ออกจากระบบ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row-reverse", marginLeft: 20 }}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.Trainercourse() }} >
                        <Text style={{ color: "#eeeeee" }}>คอร์สออกกำลังกาย</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.bodyContent}>
                        <View style={styles.info}>
                            <View style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ชื่อ-สกุล : {this.state.data_profile.firstname}  {this.state.data_profile.lastname}</Text>
                            </View>
                            <View style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ชื่อเล่น : {this.state.data_profile.nickname}</Text>
                            </View>
                            <View style={styles.deteil}>
                                <Text style={styles.fontSizeText}>น้ำหนัก : {this.state.data_profile.weight}</Text>
                            </View>
                            <View style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ส่วนสูง : {this.state.data_profile.height}</Text>
                            </View>
                            <View style={styles.deteil}>
                                <Text style={styles.fontSizeText}>วันเดือนปีเกิด : {this.state.data_profile.birthday}</Text>
                            </View>
                            <View style={styles.deteil} >
                                <Text style={styles.fontSizeText}>เบอร์โทรศัพท์ : {this.state.data_profile.telephone}</Text>
                            </View>
                            <View style={{
                                flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 20,
                                marginRight: 20
                            }}>
                                <TouchableOpacity onPress={() => { this.requirement() }} style={styles.coursebutton}>
                                    <Text style={{ color: "#eeeeee" }}>รายชื่อผู้เรียน</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.coursebutton}>
                                    <Text style={{ color: "#eeeeee" }}>ข้อมูลฟิตเนส</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7ecf8',
        height: 100,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'flex-start',
        position: 'absolute',
        marginLeft: 40,
        marginTop: 98
    },
    TextBand: {
        paddingTop: 40,
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: '500',

    },
    body: {
        marginTop: 20,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        marginTop: 0
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 5,
        alignItems: 'center',
    },
    deteil: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 300,
        backgroundColor: "#df78ef",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#d6d7da',

    },
    buttonContainer: {
        marginTop: 5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#d05ce3",
        borderWidth: 2,
        borderColor: '#d6d7da',

    },
    fontSizeText: {
        fontSize: 18,
        color: "#eeeeee"
    },
    coursebutton: {
        margin: 8,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        borderRadius: 30,
        backgroundColor: "#d05ce3",
        borderWidth: 2,
        borderColor: '#d6d7da',
    }
});
