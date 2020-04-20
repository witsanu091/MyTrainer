
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Modal,
    Button,
    Alert,
    Form
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Config from '../components/config';
export default class Trainerdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("------------Trainerdetail---------------");
    }
    goback() {
        Actions.pop()
    }
    userprofile() {
        Actions.userprofile()
    }
    home() {
        Actions.home()
    }

    onEngage = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            console.log("account_id | " + account_id);
            if (account_id != "") {
                fetch(Config.url + 'api/Cousre/insert_engage?UID=' + account_id + "&TCID=" + this.props.course_data.TCID)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson)
                        if (responseJson.status) {
                            alert("ลงทะเบียนสำเร็จ กรุณารอเทรนเนอร์ติดต่อกลับ")
                        } else {
                            alert("Fail!");
                        }
                    });
            }
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    }

    render() {
        return (

            <View style={styles.container}>

                <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={styles.TextBand}>Find Trainer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.userprofile}>

                            <FontAwesome name="user" size={40} color='#fff' />

                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView >
                    <View style={styles.choice}>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'center',
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingTop: 10
                        }}>
                            {this.props.course_data.CName} {'\n'}
                      โดยเทรนเนอร์ {this.props.course_data.nickname}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            สถานที่ฝึกสอน {this.props.course_data.LName}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>
                            ข้อมูลส่วนตัว
                </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '500',
                            paddingTop: 12
                        }}>
                            ชื่อ {this.props.course_data.firstname}  {this.props.course_data.lastname}
                        </Text>

                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '500',
                            paddingTop: 5
                        }}>เพศ {this.props.course_data.gender === 'male' ? 'ชาย' : 'หญิง'}{'\n'}
                         เบอร์โทรศัพท์: {this.props.course_data.telephone}{'\n'}
                                    อีเมล: {this.props.course_data.email}{'\n'}
                                    facebook: {this.props.course_data.contact}{'\n'}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'center',
                            color: '#0b0c0d',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 10,


                        }}>คะแนน :  <Rating
                                type='custom'
                                ratingCount={this.props.course_data.avgscore}
                                ratingColor='#ebc934'
                                ratingBackgroundColor='#ebc934'
                                imageSize={20}
                                showRating
                            // onFinishRating={this.}
                            />
                        </Text>

                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 20,
                        marginRight: 20
                    }}>
                        <TouchableOpacity onPress={() => { this.onEngage(), Actions.Mycourse() }} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ลงทะเบียน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ข้อมูลฟิตเนส</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7ecf8',
        flex: 1
    },
    TextBand: {
        paddingTop: 40,
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: '500',
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
    },
    choice: {
        flex: 1,
        padding: 8,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
})

