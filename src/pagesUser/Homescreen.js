import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, Modal, AsyncStorage } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'all',
            select: 0,
            x: '',
            item: '',
            modalVisible: false,
            user: [],
            data_profile: {}
        };
        this.get_profile();
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    coursetype() {
        Actions.coursetype()
    }
    goback() {
        Actions.pop()
    }
    userprofile() {
        Actions.userprofile()
    }
    get_course() {
        fetch('http://10.66.32.121/server/user/get_course')
            .then((response) => response.json())
            .then((responseJson) => this.setState({ user: responseJson }));
    }

    get_profile = async () => {
        try {
            const key_token = await AsyncStorage.getItem('key_token');
            if (key_token !== null) {
                console.log("key_token | " + key_token);
                fetch('http://10.66.32.121/server/api/account/get_profile?token_login=' + key_token)
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
        this.get_course();
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

                    <FlatList
                        data={this.state.user}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                this.setState({ select: item.CTID })
                                this.setState({ item: item })
                                this.setState({ modalVisible: true })

                            }}>
                                <View style={this.state.select == item.CTID ? [styles.Textshow,
                                { backgroundColor: "#ba68c8", borderWidth: 3 }] : [styles.Textshow,
                                    ]} >
                                    <Text style={{ fontSize: 17, textAlign: "center" }} >{item.CTName}</Text>
                                </View>
                            </TouchableOpacity>}
                        keyExtractor={({ id }, index) => id}
                    />
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.select == 4 && this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}>
                        <View style={{ marginTop: 22, flex: 1 }}>
                            <View>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{
                                        justifyContent: "center",
                                        paddingTop: 10,
                                        textAlign: 'center',
                                        color: '#62757f',
                                        fontSize: 24,
                                        fontWeight: '500',
                                    }}>ประเภทกีฬา</Text>
                                </View>

                                <Text style={{
                                    justifyContent: "flex-start",
                                    paddingTop: 10,
                                    paddingLeft: 10,
                                    color: '#62757f',
                                    fontSize: 20,
                                    fontWeight: '500',

                                }}>
                                    เลือกประเภทกีฬา
                                </Text>
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
                                <ScrollView>


                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
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


                <TouchableOpacity style={styles.Textbutton} onPress={() => { (this.state.type != '' && this.state.select != 0) ? Actions.coursetype({ Gender: this.state.type, CourseType: this.state.select, item: this.state.item }) : alert('กรุณาเลือกประเภทของคอร์ส') }}>

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
        fontSize: 20,
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