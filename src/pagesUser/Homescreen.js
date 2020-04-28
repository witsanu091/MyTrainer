import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, Modal, AsyncStorage } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import Config from '../components/config';

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
        fetch(Config.url + 'api/Cousre/get_course')
            .then((response) => response.json())
            .then((responseJson) => this.setState({ user: responseJson }));
    }

    get_profile = async () => {
        try {
            const key_token = await AsyncStorage.getItem('key_token');
            if (key_token !== null) {
                console.log("key_token | " + key_token);
                fetch(Config.url + 'api/account/get_profile?token_login=' + key_token)
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
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >

                    <View style={{ flex: 8, left: 20, alignItems: 'center' }}>
                        <Text style={styles.TextBand}>เลือกประเภทคอร์ส</Text>
                    </View>
                    <View style={{ marginTop: 25, marginStart: 10, flex: 1, }}>
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
                                { backgroundColor: "#ba68c8", }] : [styles.Textshow,
                                    ]} >
                                    <Text style={{ fontSize: 17, textAlign: "center", color: "#2e2d27" }} >{item.CTName}</Text>
                                </View>
                            </TouchableOpacity>}
                        keyExtractor={({ id }, index) => id}
                    />
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
        paddingTop: 25,
        color: '#eeeeee',
        fontSize: 25,
        fontWeight: '500',
    },
    Textshow: {
        flex: 1,
        padding: 8,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        height: 60,
        justifyContent: "center"


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