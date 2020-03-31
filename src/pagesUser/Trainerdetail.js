
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

export default class Trainerdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("------------Trainerdetail---------------");
    }

    onEngage = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            console.log("account_id | " + account_id);
            if (account_id != "") {
                fetch('http://172.16.51.79/server/api/Cousre/insert_engage?UID=' + account_id + "&CID=" + this.props.course_data.CID + "&LID=" + this.props.course_data.LID + "&TID=" + this.props.course_data.id)
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
                <ScrollView>
                    <View style={{
                        justifyContent: "center", alignItems: "center", marginLeft: 20,
                        marginRight: 20
                    }}>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'center',
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingTop: 10
                        }}>
                            {this.props.course_data.CName} {'\n'}
                      โดย พี่ {this.props.course_data.nickname}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            สถานที่ {this.props.course_data.LName}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 16,
                            fontWeight: '500',
                            paddingTop: 15
                        }}>
                            คอร์ส Fit Teens คอร์สฟิต ช่วงปิดเทอม ลดไขมัน ด้วยเทคนิคการออกกำลังกายแบบ Sports Performance + Circuit Training เน้นสนุกแต่ได้ผลท้าทาย
                    </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 16,
                            fontWeight: '600',
                            paddingTop: 10

                        }}>
                            *ลงทะเบียนด่วน! มีโปรพิเศษ*
                </Text>
                        <Text style={{ color: '#62757f', fontWeight: "bold" }}>
                            ราคา{"\n"}
                        - 12 ครั้ง 6900{"\n"}
                        - 8  ครั้ง 5200{"\n"}
                        - *มีการ Book Class ล่วงหน้าเพื่อจำกัดจำนวนนักเรียน{"\n"}
                        ต่อ1 คลาส รับนักเรียนได้มากสุด 5 คน
                </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 16,
                            fontWeight: '600',
                            paddingTop: 10

                        }}>PROMOTION ชวนเพื่อนมาเรียนเป็นแก๊ง
                    </Text>
                        <Text style={{
                            color: '#62757f',
                            fontWeight: "bold",
                            paddingTop: 10,
                            textAlign: "left",
                            fontSize: 16,

                        }}>
                            *3 คน ลดทั้งกลุ่ม 15%*
                </Text>
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 20,
                        marginRight: 20
                    }}>
                        <TouchableOpacity onPress={() => { this.onEngage() }} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ลงทะเบียนน</Text>
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
    }
})

