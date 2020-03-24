import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';


export default class Trainerprofile extends Component {
    home() {
        Actions.home()
    }
    goback() {
        Actions.pop()
    }
    get_profile = async () => {
        try {
            const key_token = await AsyncStorage.getItem('key_token');
            if (key_token !== null) {
                console.log("key_token | " + key_token);
                fetch('http://10.66.32.153/server/api/account/get_profile?token_login=' + key_token)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson != null) {
                            this.setState({ data_profile: responseJson });
                            console.log(this.state.data_profile);
                        } else {
                            alert("Not found this profile!");
                            Actions.pop();
                        }
                    });
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 7, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={styles.TextBand}>Trainer profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={styles.avatar} source={require('../image/profile.jpg')} />
                <View style={{ flexDirection: "row-reverse", marginLeft: 20 }}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{ color: "#eeeeee" }}>แก้ไขข้อมูลส่วนตัว</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.bodyContent}>
                        <View style={styles.info}>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ชื่อ-สกุล : firstname+lastname</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ชื่อเล่น : nickname</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>น้ำหนัก : weight</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>ส่วนสูง : height</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>วันเดือนปีเกิด : birthday</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deteil}>
                                <Text style={styles.fontSizeText}>เบอร์โทรศัพท์ : telephone</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#883997",
        height: 100,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 20,
        alignSelf: 'flex-start',
        position: 'absolute',
        marginLeft: 30,
        marginTop: 80
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
        marginTop: 15,
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
        marginTop: 15,
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
    }
});
