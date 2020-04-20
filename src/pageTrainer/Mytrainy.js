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
    Image
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';
import { Rating, AirbnbRating } from 'react-native-ratings';


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
        Actions.userprofile()
    }
    requirement() {
        Actions.requirement()
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
            console.log(this.state.listTrainer);
        }
        catch (error) {
            // Error retrieving data
        }
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
                                fontSize: 30,
                                fontWeight: '500',
                            }}>Find Trainer</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30, marginStart: 10, flex: 1 }}>
                        <TouchableOpacity onPress={this.userprofile}>
                            <FontAwesome name="user" size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.choice}>
                        <View style={{
                            paddingTop: 20,
                            justifyContent: "flex-start",
                        }} >
                            <Text style={{
                                color: '#62757f',
                                fontSize: 20,
                                fontWeight: '500',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>คอร์สที่ลงทะเบียน</Text>
                        </View>
                        <View style={{ flexDirection: "row-reverse", marginLeft: 20 }}>
                            <TouchableOpacity style={{
                                marginTop: 5,
                                height: 45,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 5,
                                width: 150,
                                borderRadius: 30,
                                backgroundColor: "#d05ce3",
                                borderWidth: 2,
                                borderColor: '#d6d7da',
                            }} onPress={() => { this.requirement() }} >
                                <Text style={{ color: "#eeeeee" }}>คำร้องผู้ที่สนใจ</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={this.state.listTrainer}
                            renderItem={({ item }) =>
                                <TouchableOpacity>
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
                                        <Text style={{ fontSize: 17, textAlign: "left", color: '#62757f', fontWeight: "bold" }} >
                                            {item.CName}{'\n'}
                                       โดยเทรนเนอร์ {item.nickname}{'\n'}
                                            {item.firstname} {item.lastname}{'\n'}
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
                                    สถานะคอร์ส: {item.engage_status === '1' ? 'รอการตอบรับ' : item.engage_status === '2' ? 'ได้รับการตอบรับแล้ว' : 'ไม่ได้ตอบรับ'}

                                        </Text>
                                    </View>
                                </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                        {/* <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalcourse}
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
                                            fontSize: 20,
                                            fontWeight: '500',
                                        }}>รายละเอียดผู้เรียน</Text>
                                    </View>

                                    <ScrollView>
                                        <View style={{ alignItems: "flex-start", marginLeft: 10 }}>
                                            <View style={{ justifyContent: "flex-start" }}>
                                                {this.state.listUser[this.state.no] ?
                                                    <Text style={{ fontSize: 18 }}>

                                                        ชื่อ : {this.state.listUser[this.state.no].firstname} {this.state.listUser[this.state.no].lastname}{'\n'}
                                                ชื่อเล่น : {this.state.listUser[this.state.no].nickname} {'\n'}
                                                คอร์สที่เรียน : {this.state.listUser[this.state.no].CName} {'\n'}
                                                น้ำหนัก : {this.state.listUser[this.state.no].weight} {'\n'}
                                                ส่วนสูง : {this.state.listUser[this.state.no].height} {'\n'}
                                                เพศ : {this.state.listUser[this.state.no].gender === 'male' ? 'ชาย' : 'หญิง'} {'\n'}
                                                เบอร์โทรศัพท์ : {this.state.listUser[this.state.no].telephone} {'\n'}
                                                อีเมล : {this.state.listUser[this.state.no].email} {'\n'}
                                                    </Text>
                                                    :
                                                    <Text>
                                                    </Text>
                                                }
                                            </View>
                                            <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
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
                                                        fontSize: 16,
                                                        fontWeight: '300',
                                                        textAlign: "center",
                                                    }} >ปิด</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal> */}
                    </View>
                </ScrollView>
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