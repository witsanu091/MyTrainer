import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button,
    Alert,
    Form
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

export default class Coursetype extends Component {
    goback() {
        Actions.pop()
    }
    coursedetail() {
        Actions.coursedetail()
    }
    userprofile() {
        Actions.userprofile()
    }
    home() {
        Actions.home()
    }
    gymlocations() {
        Actions.gymlocations()
    }
    tprofile() {
        Actions.trainerprofile()
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
                            คอร์ส FIT TEENS: สอนออกกำลังกายสำหรับวัยรุ่น {"\n"}
                            สอนโดยเทรนเนอร์โจ้
                    </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            GYM : Thai-M gym
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
                        <TouchableOpacity onPress={this.tprofile} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ข้อมูลเทรนเนอร์</Text>
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
        flex: 1,
        // flexDirection: "column",
        backgroundColor: '#f7ecf8'
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