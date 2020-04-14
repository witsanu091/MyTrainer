import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView, Modal, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Coursetype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modallocation: false,
            course_list: [],
            genderT: '',
            show_data: '',
            c_location: [],


        };
        this.load_coures();
        // this.gendertrainer();

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
    gymlocations() {
        Actions.gymlocations()
    }
    setModalVisible(visible) {
        this.setState({ modallocation: visible });
    }

    gendertrainer() {
        let gender = this.props.Gender;
        if (gender == "all") {
            gender = 'ทั้งหมด';

        } if (gender == "male") {
            gender = 'ชาย';

        } if (gender == "female") {
            gender = 'หญิง';

        }
        return gender

    }
    load_coures() {
        let gender = this.props.Gender;
        //  console.log(gender);
        if (gender == "all") {
            gender = '';
        }
        fetch('http://10.66.32.45/server/api/Cousre/get_course_filter?ct=' + this.props.item.CTID + '&gender=' + gender)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    this.setState({ course_list: responseJson })
                } else {
                    alert("เกิดข้อผิดพลาด");
                    Actions.home();
                }

            });
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
                        {this.props.item.CTName} {'\n'}
                       เพศของเทรนเนอร์ : {this.gendertrainer()}

                    </Text>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modallocation}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', backgroundColor: '#ffffff', marginHorizontal: 25, borderRadius: 10, paddingVertical: 10 }}>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 24,
                                marginTop: 10,
                            }}>เลือกสถานที่</Text>
                            <TouchableOpacity onPress={() => {

                                this.setState({ modallocation: false })
                                this.setState({ c_location: item })
                            }}>
                                <View style={styles.Textshow
                                } >
                                    <Text style={{ fontSize: 17, textAlign: "center" }} >{this.state.c_location.LName}</Text>
                                </View>
                            </TouchableOpacity>}


                            <View style={{}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ modallocation: false })
                                    }} style={{
                                        paddingVertical: 10,
                                        marginVertical: 10,
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
                    </View>
                </Modal>
                <TouchableOpacity style={styles.choice}
                    onPress={
                        () => {
                            this.setState({ modallocation: true })
                        }
                    }
                >
                    {
                        this.state.c_location.LName ?

                            <Text style={{
                                justifyContent: "center",
                                textAlign: 'center',
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '500',
                                paddingVertical: 8
                            }}>
                                {this.state.c_location.LName}
                            </Text>
                            :
                            <Text style={{
                                justifyContent: "center",
                                textAlign: 'center',
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '500',
                                paddingVertical: 8
                            }}>
                                เลือกสถานที่ฝึกสอน
                            </Text>
                    }
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                    {/* <TouchableOpacity onPress={() => {
                        this.setModalVisible(true)
                        this.setState({ show_data: item })
                    }}>
                        <View style={this.state.locations = true ? [styles.Textshow, { backgroundColor: "#ba68c8", borderWidth: 1 }] : [styles.Textshow, { backgroundColor: "#ba68c8" }]} >
                            <Text style={styles.Textcourse} >
                                เลือกสถานที่ <FontAwesome name="caret-down" size={15} color='#fff' />
                            </Text>
                        </View>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity onPress={() => {
                        this.setState({ sortby: true })
                    }}>
                        <View style={this.state.isVisible = true ? [styles.Textshow, { backgroundColor: "#ba68c8", borderWidth: 1 }] : [styles.Textshow, { backgroundColor: "#ba68c8" }]} >
                            <Text style={styles.Textcourse} >
                                เรียงตาม <FontAwesome name="caret-down" size={15} color='#fff' />
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.coures_list.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => { { this.setState({ c_location: item }) } Actions.coursedetail({ course_data: item }) }}>
                                <View style={{
                                    padding: 20,
                                    justifyContent: "center",
                                    backgroundColor: "#eeeeee",
                                    margin: 10,
                                    borderRadius: 20,
                                    borderWidth: 2,
                                    borderColor: "#d6d7da",
                                    fontSize: 20,
                                    color: "#62757f",

                                }} >
                                    <Text style={{ fontSize: 17, textAlign: "center", color: '#62757f', fontWeight: "bold" }} >
                                        {item.CName}{'\n'}
                                       โดยเทรนเนอร์ {item.nickname}
                                        <Rating
                                            type='custom'
                                            ratingCount={item.avgscore}
                                            ratingColor='#ebc934'
                                            ratingBackgroundColor='#ebc934'
                                            imageSize={20}
                                            showRating
                                        // onFinishRating={this.}
                                        />
                                    สถานที่: {item.LName}
                                    </Text>
                                </View>
                            </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />


                </ScrollView>
            </View >
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