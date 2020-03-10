import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

export default class Homescreen extends Component {
    state = {
        checked: '',
        select: 0,
        x: '',
        item: ''
    };
    // 1
    coursetype() {
        Actions.coursetype()
    }
    goback() {
        Actions.pop()
    }
    userprofile() {
        Actions.userprofile()
    }
    // test() {
    //     return fetch('http://192.168.43.6/MytrainerWeb/index.php/Course/get_coursetype')
    //         .then((response) => response.json())
    //         .then((responseJson) => this.setState({ x: responseJson }));
    // }
    render() {
        //     this.test();
        // console.log(this.state.x)

        return (
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 20 }} >

                    <View style={{ flex: 8, left: 20, alignItems: 'center' }}>
                        <Text style={styles.TextBand}>My Trainer</Text>
                    </View>
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.userprofile}>

                            <FontAwesome name="user" size={40} color='#fff' />

                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={{
                        paddingTop: 20,
                        justifyContent: "flex-start",
                    }} >
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingLeft: 30
                        }}>เลือกประเภทคอร์สที่ต้องการ</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.setState({ select: 1 })
                        // this.setState({ item: item })

                    }}>
                        <Text style={styles.Textshow} >
                            ออกกำลังกายเพื่อสร้างกล้ามเนื้อ
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ select: 2 })
                        // this.setState({ item: item })

                    }}>
                        <Text style={styles.Textshow}>
                            ออกกำลังกายเพื่อกระชับสัดส่วน
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ select: 3 })
                        // this.setState({ item: item })

                    }}>
                        <Text style={styles.Textshow}>
                            ออกกำลังกายประเภทกี่ฬา
                            </Text>
                    </TouchableOpacity>

                    {/* <FlatList
                        data={this.state.x}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                this.setState({ select: item.CTID })
                                this.setState({ item: item })

                            }}>
                                <View style={this.state.select == item.CTID ? [styles.Textshow,
                                { backgroundColor: "#ba68c8", borderWidth: 3 }] : [styles.Textshow,
                                { backgroundColor: "#ba68c8" }]} >
                                    <Text>{item.CTName}</Text>
                                </View>
                            </TouchableOpacity>}
                        keyExtractor={({ id }, index) => id}
                    /> */}
                    <View>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '500',
                            paddingLeft: 30
                        }}> เลือกเพศของเทรนเนอร์</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingLeft: 15, marginTop: 10 }}>
                        <View style={{ flexDirection: "row", marginRight: 15 }}>
                            <View style={{ borderWidth: 1, borderRadius: 10 }}>
                                <RadioButton
                                    value="all"
                                    status={this.state.checked === 'all' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'all' }); }}
                                ></RadioButton></View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '300',
                                textAlign: "center",
                                margin: 5
                            }}>ทั้งหมด</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 10 }}>
                            <RadioButton
                                value="male"
                                status={this.state.checked === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'male' }); }}
                            ></RadioButton></View>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '300',
                            textAlign: "center",
                            margin: 5
                        }}>เพศชาย</Text>
                        <View style={{ borderWidth: 1, borderRadius: 10 }}>
                            <RadioButton
                                value="female"
                                status={this.state.checked === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'female' }); }}
                            ></RadioButton></View>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '300',
                            textAlign: "center",
                            margin: 5
                        }}>เพศหญิง</Text>
                    </View>

                </ScrollView>


                <TouchableOpacity style={styles.Textbutton} onPress={() => { (this.state.checked != '' && this.state.select != 0) ? Actions.coursetype({ Gender: this.state.checked, CourseType: this.state.select, item: this.state.item }) : alert('กรุณาเลือกประเภทของคอร์ส') }}>

                    <Text style={[styles.Textcourse, { justifyContent: "center" }]} >
                        ค้นหา
                    </Text>

                </TouchableOpacity>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7ecf8'
    },
    TextBand: {
        paddingTop: 40,
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: '500',
    },
    Textshow: {
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        margin: 10,
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        color: "#62757f"

    },
    Textcourse: {
        color: '#eeeeee',
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center",

    },
    Textbutton: {
        paddingBottom: 13,
        paddingTop: 5,
        justifyContent: "flex-end",
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: "#883997",
        marginHorizontal: 130,
    }

})