import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView, Modal, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Config from '../components/config';

export default class Coursetype extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            coures_list: '',
            genderT: '',
            location: '',
            l_name: ''
        };
        this.load_coures();
        this.get_location();
        // this.gendertrainer();


    }
    get_location() {
        fetch(Config.url + 'api/Cousre/get_location_id')
            .then((response) => response.json())
            .then((responseJson) => this.setState({ location: responseJson }));
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
        this.setState({ modalVisible: visible });
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
        return gender;

    }
    load_coures_location(lid) {
        let gender = this.props.Gender;
        //  console.log(gender);
        if (gender == "all") {
            gender = '';
        }
        console.log(Config.url + 'api/Cousre/get_course_filter?ct=' + this.props.item.CTID + '&gender=' + gender + '&LID=' + lid)
        fetch(Config.url + 'api/Cousre/get_course_filter?ct=' + this.props.item.CTID + '&gender=' + gender + '&LID=' + lid)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    this.setState({ coures_list: responseJson })
                } else {
                    alert("เกิดข้อผิดพลาด");
                    Actions.home();
                }

            });
    }
    load_coures() {
        let gender = this.props.Gender;
        //  console.log(gender);
        if (gender == "all") {
            gender = '';
        }
        fetch(Config.url + 'api/Cousre/get_course_filter?ct=' + this.props.item.CTID + '&gender=' + gender)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if (responseJson.status) {
                    this.setState({ coures_list: responseJson })
                } else {
                    alert("เกิดข้อผิดพลาด");
                    Actions.home();
                }

            });
    }



    render() {

        return (

            <View style={styles.container}>
                {console.log(this.state.coures_list.data)}
                <StatusBar backgroundColor="#00b2cc" barStyle="light-content" />
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={styles.TextBand}>เลือกคอร์ส</Text>
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
                       เพศของเทรนเนอร์ : <Text style={{ color: "#3ac204" }}>{this.gendertrainer()}</Text>

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
                            <Text style={{
                                justifyContent: "center",
                                padding: 10,
                                textAlign: 'center',
                                color: '#62757f',
                                fontSize: 24,
                                fontWeight: '500',
                            }}>ชื่อสถานที่ออกกำลังกาย</Text>

                            <TouchableOpacity onPress={() => {
                                // this.gymlocations()
                                this.load_coures();
                                this.setState({ l_name: 'ทั้งหมด' });
                                this.setModalVisible(false);

                            }}>

                                {/* <Image style={styles.imagelocate} source={require('../image/nppark.jpg')} /> */}

                                <Text style={styles.gymlocate}>
                                    ทั้งหมด {"\n"}
                                </Text>

                            </TouchableOpacity>
                            <FlatList
                                data={this.state.location}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => {
                                        // this.gymlocations()
                                        this.load_coures_location(item.LID);
                                        this.setState({ l_name: item.LName });
                                        this.setModalVisible(false);

                                    }}>

                                        {/* <Image style={styles.imagelocate} source={require('../image/nppark.jpg')} /> */}
                                        <Text style={styles.gymlocate}>
                                            {item.LName}{"\n"}
                                        </Text>

                                    </TouchableOpacity>
                                }
                                keyExtractor={({ id }, index) => id}
                            />
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
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <View style={this.state.locations = true ? [styles.Textshow, { backgroundColor: "#ba68c8", borderWidth: 1, paddingLeft: 10 }] : [styles.Textshow, { backgroundColor: "#ba68c8" }]} >
                            {
                                this.state.l_name ?
                                    <Text style={styles.Textcourse} >

                                        {this.state.l_name} < FontAwesome name="caret-down" size={15} color='#fff' />

                                    </Text>
                                    :
                                    <Text style={styles.Textcourse} >

                                        เลือกสถานที่ < FontAwesome name="caret-down" size={15} color='#fff' />

                                    </Text>
                            }
                        </View>
                    </TouchableOpacity>

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
                            <TouchableOpacity onPress={() => { Actions.coursedetail({ course_data: item }) }}>
                                <View style={{
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
                        keyExtractor={item => item.CTID}
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
        fontSize: 25,
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

    gymlocate: {
        padding: 10,
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#eeeeee",
        margin: 5,
        borderRadius: 15,

        fontSize: 20,
        color: "#62757f",
        height: 60

    },
    // imagelocate: {
    //     width: 90,
    //     height: 90,
    //     borderWidth: 4,
    //     borderColor: "white",
    //     alignSelf: 'flex-start',
    //     // position: 'absolute',
    //     marginLeft: 10,
    // }
})