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
                            รายละเอียด : {this.props.course_data.TCDetails}
                        </Text>

                        <Text style={{
                            justifyContent: "center",
                            textAlign: 'left',
                            color: '#62757f',
                            fontSize: 18,
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
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginLeft: 20,
                        marginRight: 20, marginTop: 10
                    }}>
                        <TouchableOpacity onPress={() => { Actions.trainerdetail({ course_data: this.props.course_data }) }} style={styles.coursebutton}>
                            <Text style={{ color: "#eeeeee" }}>ติดต่อเทรนเนอร์</Text>
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