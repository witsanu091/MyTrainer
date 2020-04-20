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
    Button
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default class mycourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_course: '',
            modalVisible: false,
            show_data: [],
            UID: '',
            listTrainer: [],
            listTrainer_by_filter: [],
            modalcourse: false,
        };
        this.get_listTrainer()
    }

    goback() {
        Actions.pop()
    }
    userprofile() {
        Actions.userprofile()
    }

    get_listTrainer = async () => {

        try {
            const account_id = await AsyncStorage.getItem('account_id');

            await fetch(Config.url + 'api/Cousre/show_engage?seeby=u&UID=' + account_id)
                .then((response) => response.json())
                .then((responseJson) => {
                    // result_json = responseJson.filter(obj => obj.engage_status == "2")
                    this.setState({ listTrainer: responseJson })
                    this.filter_listTrainer();// all
                });
            console.log(this.state.listTrainer);
        }
        catch (error) {
            // Error retrieving data
        }
    }

    filter_listTrainer(status = null) {
        if (status != null) {
            result_json = this.state.listTrainer.filter(obj => obj.engage_status == status)
            this.setState({ listTrainer_by_filter: result_json })
        } else {
            this.setState({ listTrainer_by_filter: this.state.listTrainer })
        }
        console.log(this.state.listTrainer_by_filter);
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
                <View style={{ flexDirection: 'row' }}>
                    <Button title={"ตอบรับแล้ว"} onPress={() => { this.filter_listTrainer(2) }} />
                    <Button title={"รอการตอบรับ"} onPress={() => { this.filter_listTrainer(1) }} />
                    <Button title={"ไม่ตอบรับ"} onPress={() => { this.filter_listTrainer(3) }} />
                    <Button title={"ทั้งหมด"} onPress={() => { this.filter_listTrainer() }} />
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

                        <FlatList
                            data={this.state.listTrainer_by_filter}
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
                            keyExtractor={item => item.ENGID}
                        />
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