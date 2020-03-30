import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView, Modal, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

export default class Coursetype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
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
    gymlocations() {
        Actions.gymlocations()
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{
                        justifyContent: "center",
                        paddingTop: 10,
                        textAlign: 'center',
                        color: '#62757f',
                        fontSize: 24,
                        fontWeight: '500',

                    }} >
                        {this.props.item.CTName}

                    </Text>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#ffffff', marginHorizontal: 20, borderRadius: 10 }}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    justifyContent: "center",
                                    paddingTop: 10,
                                    textAlign: 'center',
                                    color: '#62757f',
                                    fontSize: 24,
                                    fontWeight: '500',
                                }}>ชื่อสถานที่ออกกำลังกาย</Text>
                            </View>

                            <Text style={{
                                justifyContent: "flex-start",
                                paddingTop: 10,
                                paddingLeft: 10,
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '500',

                            }}>
                                ตอนนี้คุณอยู่ที่ : ....
                                </Text>
                            <ScrollView>
                                <View style={{ alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => {
                                        this.gymlocations()
                                        this.setModalVisible(false);
                                    }}>
                                        <View style={styles.gymlocate}>
                                            <Image style={styles.imagelocate} source={require('../image/nppark.jpg')} />
                                            <Text style={styles.fontlocateText}>
                                                Np park{"\n"}
                                                สาขาหลังมอ{"\n"}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        this.gymlocations()
                                        this.setModalVisible(false);
                                    }}>
                                        <View style={styles.gymlocate}>
                                            <Image style={styles.imagelocate} source={require('../image/thaiM.jpg')} />
                                            <Text style={styles.fontlocateText}>
                                                Thai-M Gym{"\n"}
                                                สาขาหลังมอ{"\n"}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        this.gymlocations()
                                        this.setModalVisible(false);
                                    }}>
                                        <View style={styles.gymlocate}>
                                            <Image style={styles.imagelocate} source={require('../image/thaiM.jpg')} />
                                            <Text style={styles.fontlocateText}>
                                                Thai-M Gym{"\n"}
                                                สาขาโคลัมโบ{"\n"}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setModalVisible(false);
                                            }} style={{
                                                paddingBottom: 13,
                                                paddingTop: 7,
                                                marginBottom: 15,
                                                borderRadius: 10,
                                                backgroundColor: "#883997",
                                                marginHorizontal: 130,
                                                borderWidth: 1,
                                                width: 100
                                            }}>
                                            <Text style={{
                                                color: '#eeeeee',
                                                fontSize: 20,
                                                fontWeight: '400',
                                                textAlign: "center",
                                            }} >ปิด</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <View style={this.state.locations = true ? [styles.Textshow, { backgroundColor: "#ba68c8", borderWidth: 1 }] : [styles.Textshow, { backgroundColor: "#ba68c8" }]} >
                            <Text style={styles.Textcourse} >
                                เลือกสถานที่ <FontAwesome name="caret-down" size={15} color='#fff' />
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.setState({ sortby: true })
                    }}>
                        <View style={this.state.isVisible = true ? [styles.Textshow, { backgroundColor: "#ba68c8", borderWidth: 1 }] : [styles.Textshow, { backgroundColor: "#ba68c8" }]} >
                            <Text style={styles.Textcourse} >
                                เรียงตาม <FontAwesome name="caret-down" size={15} color='#fff' />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.info}>
                        <TouchableOpacity onPress={this.coursedetail} style={styles.deteil}>
                            <Text style={styles.fontSizeText}>
                                คอร์ส FIT TEENS: สอนออกกำลังกายสำหรับวัยรุ่น{"\n"}
                                By พี่อาร์ม Np park
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity onPress={this.coursedetail} style={styles.deteil}>
                            <Text style={styles.fontSizeText}>
                                เพิ่มกล้ามเนื้อ{"\n"}
                                By พี่ต้อม Thai-M Gym
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity onPress={this.coursedetail} style={styles.deteil}>
                            <Text style={styles.fontSizeText}>
                                เพิ่มกล้ามเนื้อ{"\n"}
                                By ปีเตอร์ Thai-M gym
                        </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity onPress={this.coursedetail} style={styles.deteil}>
                            <Text style={styles.fontSizeText}>
                                เล่นกลามท้อง{"\n"}
                                By พี่น็อต Np park
                        </Text>
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
        backgroundColor: '#f7ecf8',

    },
    TextBand: {
        paddingTop: 40,
        color: '#eeeeee',
        fontSize: 30,
        fontWeight: '500',
    },
    TextSortBy: {
        paddingTop: 20,
        color: '#62757f',
        fontSize: 20,
        fontWeight: '400',
        paddingLeft: 20,
    },
    modal: {
        backgroundColor: "#f7ecf8",
        paddingTop: 20,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 20,
        marginLeft: 40,
        alignItems: "center",
    },
    Textshow: {
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        margin: 10,
        height: 40,
        marginBottom: 2
    },
    Textcourse: {
        color: '#eeeeee',
        fontSize: 16,
        fontWeight: '200',
        textAlign: "center",
    },
    deteil: {
        marginTop: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 300,
        backgroundColor: "#df78ef",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#d6d7da',
        padding: 20,

    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 5,
        alignItems: 'center',
        justifyContent: "center"

    },
    fontSizeText: {
        fontSize: 18,
        color: "#eeeeee",
        textAlign: "left",
        flexDirection: "row",
        alignSelf: 'flex-start',
        justifyContent: "center",
        borderRadius: 63,
        paddingLeft: 10
    },
    fontlocateText: {
        fontSize: 18,
        color: "#62757f",
        textAlign: "left",
        flexDirection: "row",
        alignSelf: 'flex-start',
        justifyContent: "center",
        borderRadius: 63,
        paddingLeft: 10,
        paddingTop: 10
    },
    gymlocate: {
        marginTop: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        width: 300,
        backgroundColor: "#f7ecf8",
        borderWidth: 2,
        borderColor: '#d6d7da',
        paddingTop: 3

    },
    imagelocate: {
        width: 90,
        height: 90,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'flex-start',
        // position: 'absolute',
        marginLeft: 10,
    }
})