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
    Form,
    AsyncStorage
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Config from '../components/config';

export default class Coursetype extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("---------------- detail-----------")
        console.log(this.props.course_data)
    }
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
    coursetype() {
        Actions.coursetype()
    }
    trainerdetail() {
        Actions.trainerdetail()
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

    show_star(number) {
        let point = parseFloat(number) - parseInt(number);
        let result = parseInt(number);
        return (
            <View style={{ flexDirection: 'row' }}>
                {
                    result == 1 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                    </View>

                }
                {
                    result == 2 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                    </View>

                }
                {
                    result == 3 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                    </View>

                }
                {
                    result == 4 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                    </View>

                }
                {
                    result == 5 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                        <FontAwesome name="star" size={30} color='#F1C40F' />
                    </View>
                }
                {
                    point != 0 &&
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star-half" size={30} color='#F1C40F' />
                    </View>
                }
            </View>
        )

    }

    render() {
        return (

            <View style={styles.container}>

                <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 25, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={styles.TextBand}>รายละเอียดคอร์ส</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 25, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.userprofile}>

                            <FontAwesome name="user" size={40} color='#fff' />

                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.choice}>
                        {/* // justifyContent: "center", alignItems: "center", marginLeft: 20,
                        // marginRight: 20
                    // }}> */}
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
                        {/* <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            สถานที่ {this.props.course_data.LName}
                        </Text> */}
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            ข้อมูลคอร์ส
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 16,
                            fontWeight: '500',
                            paddingTop: 15
                        }}>
                            รายละเอียด : {this.props.course_data.TCDetails}
                        </Text>

                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 16,
                            fontWeight: '600',
                            paddingTop: 15
                        }}>
                            ราคา : {this.props.course_data.TCPrice}
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
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>
                            ข้อมูลเทรนเนอร์
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 17, textAlign: "center", color: '#62757f', fontWeight: "bold" }} >
                                คะแนน
                                        </Text>
                            {
                                this.show_star(this.props.course_data.avgscore)
                            }
                        </View>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#0b0c0d',
                            fontSize: 18,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>
                            ข้อมูลสถานที่
                </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 15,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>

                            สถานที่ฝึกสอน {this.props.course_data.LName}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 15,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>

                            {this.props.course_data.LDetails}
                        </Text>
                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 15,
                            fontWeight: '600',
                            paddingTop: 15

                        }}>

                            ติดต่อ {this.props.course_data.LContact}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: "center", alignItems: "center", marginLeft: 20,
                        marginRight: 20, marginTop: 10
                    }}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                "ยืนยันการลงทะเบียน",
                                "",
                                [
                                    {
                                        text: "ยืนยัน",
                                        onPress: () => { this.onEngage(), Actions.Mycourse() },
                                        // style: "cancel"
                                    },


                                    {
                                        text: "ยกเลิก", onPress: () => console.log("close alert"),
                                        // style: "cancel"
                                    }
                                ],
                                { cancelable: false }
                            );
                        }} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ลงทะเบียน</Text>

                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => { Actions.trainerdetail({ course_data: this.props.course_data }) }} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ติดต่อเทรนเนอร์</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ข้อมูลฟิตเนส</Text>
                        </TouchableOpacity> */}
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
        paddingTop: 25,
        color: '#eeeeee',
        fontSize: 25,
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

    }, boxChoice: {
        flex: 1,
        padding: 8,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#fff',
        borderColor: '#00396D',
        borderWidth: 3,
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