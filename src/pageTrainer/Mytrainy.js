import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    ScrollView,
    AsyncStorage,
    Modal,
    Image,
    Alert
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Avatar, Button } from 'react-native-paper';


export default class Mytrainy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_course: '',
            modalVisible: false,
            show_data: [],
            UID: '',
            listTrainer: [],
            modalcourse: false,
        };
        this.get_listTrainer()
    }

    goback() {
        Actions.pop()
    }
    trainerprofile() {
        Actions.trainerprofile()
    }
    requirement() {
        Actions.requirement()
    }
    Mytrainy() {
        Actions.Mytrainy()
    }
    HistoryTrain() {
        Actions.HistoryTrain()
    }
    get_listTrainer = async () => {

        try {
            const account_id = await AsyncStorage.getItem('account_id');

            await fetch(Config.url + 'api/Cousre/show_engage?seeby=t&TID=' + account_id)
                .then((response) => response.json())
                .then((responseJson) => {
                    result_json = responseJson.filter(obj => obj.engage_status == "2")
                    this.setState({ listTrainer: result_json })
                });
            // console.log(this.state.listTrainer);
        }
        catch (error) {
            // Error retrieving data
        }
    }
    end_course(eng_id, status) {
        console.log("Change status at eng_id | " + eng_id + status)
        fetch(Config.url + 'api/Cousre/end_course_engage?ENGID=' + eng_id + '&engage_status=' + status)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status) {
                    alert("สำเร็จ");
                } else {
                    alert("ไม่สำเร็จ โปรดลองอีกครั้ง");
                }
                this.get_listTrainer();
            });
    }

    reverseString = (str) => {
        let splitString = str.split("-");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("-");
        return joinArray;
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", backgroundColor: "#883997", paddingBottom: 12 }} >
                    <View style={{ marginTop: 30, marginStart: 10, flex: 1, }}>
                        <TouchableOpacity onPress={this.goback}>
                            <FontAwesome name="chevron-left" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.home}>
                            <Text style={{
                                paddingTop: 40,
                                color: '#eeeeee',
                                fontSize: 25,
                                fontWeight: '500',
                            }}>คอร์สที่กำลังสอน</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.trainerprofile}>
                            <FontAwesome name="user" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.choice}>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{
                            margin: 8,
                            height: 45,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 150,
                            borderRadius: 30,
                            backgroundColor: "#d05ce3"
                        }} onPress={() => { this.HistoryTrain() }} >
                            <Text style={{ color: "#eeeeee" }}>ประวัติการสอน</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 8,
                            height: 45,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 150,
                            borderRadius: 30,
                            backgroundColor: "#d05ce3",
                        }} onPress={() => { this.requirement() }} >
                            <Text style={{ color: "#eeeeee" }}>รายชื่อผู้ลงทะเบียนเรียน</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        paddingTop: 8,
                        justifyContent: "center",
                    }} >
                        <Text style={{
                            color: '#62757f',
                            fontSize: 20,
                            fontWeight: '500',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>รายชื่อผู้ใช้ที่กำลังเรียน</Text>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        <FlatList
                            data={this.state.listTrainer}
                            renderItem={({ item }) =>
                                <View>
                                    <View style={{
                                        flex: 1,
                                        padding: 8,
                                        borderRadius: 10,
                                        margin: 5,
                                        backgroundColor: '#eeeeee',
                                        shadowColor: 'rgba(0,0,0,0.25)',
                                        shadowOpacity: 0.3,
                                        shadowRadius: 4,
                                        shadowOffset: { width: 0, height: 2 },
                                        elevation: 5,

                                    }} >
                                        <Text style={{ fontSize: 17, textAlign: "left", color: '#62757f', fontWeight: "bold", margin: 10 }} >
                                            <Text style={{ fontSize: 20 }} >   {item.CName}{'\n'}</Text>
                                       ชื่อเล่น {item.nickname}{'\n'}
                                       ชื่อ-สกุล: {item.firstname} {item.lastname}{'\n'}
                                            {/* <Rating
                                                type='custom'
                                                ratingCount={item.avgscore}
                                                ratingColor='#ebc934'
                                                ratingBackgroundColor='#ebc934'
                                                imageSize={20}
                                                showRating
                                            // onFinishRating={this.}
                                            /> */}
                                    สถานที่: {item.LName}{'\n'}
                                    เบอร์โทรศัพท์: {item.telephone}{'\n'}
                                    อีเมล: {item.email}{'\n'}
                                    facebook: {item.contact}{'\n'}
                                    เพศ: {item.gender === 'male' ? 'ชาย' : 'หญิง'}{'\n'}
                                    สถานะคอร์ส:  <Text style={{ color: "#3ac204" }}>{item.engage_status === '1' ? 'รอการตอบรับ' : item.engage_status === '2' ? 'ได้รับการตอบรับแล้ว' : item.engage_status === '3' ? 'ไม่ได้ตอบรับ' : 'เรียนจบคอร์สแล้ว'}{'\n'}</Text>

                                            <Text style={{ color: "#0479c2" }}>เริ่มวันที่: {item.StartCourse}{'\n'} </Text>
                                        </Text>
                                        <TouchableOpacity style={{
                                            height: 45,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 10,
                                            width: 150,
                                            marginLeft: 15,
                                            borderRadius: 30,
                                            backgroundColor: "#7b13a1",

                                        }} onPress={() => {
                                            Alert.alert(
                                                "จบการสอน",
                                                "",
                                                [
                                                    {
                                                        text: "ยืนยัน",
                                                        onPress: () => this.end_course(item.ENGID, 4),
                                                        // style: "cancel"
                                                    },


                                                    {
                                                        text: "ปิด", onPress: () => console.log("close alert"),
                                                        // style: "cancel"
                                                    }
                                                ],
                                                { cancelable: false }
                                            );
                                        }}>

                                            <Text style={{ color: "#ffffff" }}>จบการสอน</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>}
                            keyExtractor={item => item.ENGID}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7ecf8',
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