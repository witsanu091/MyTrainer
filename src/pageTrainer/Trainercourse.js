/*This is an Example of SearchBar in React Native*/
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

export default class Trainercourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_course: '',
            modalVisible: false,
            show_data: []
        };
        this.get_trainer_course();
    }

    goback() {
        Actions.pop()
    }

    trainerprofile() {
        Actions.trainerprofile()
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    // componentDidUpdate() {
    //     this.get_trainer_course()
    // }
    get_trainer_course = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            console.log("account_id | " + account_id);

            if (account_id !== null) {
                fetch(Config.url + 'api/Cousre/show_course_trainer?TID=' + account_id)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson != null) {
                            this.setState({ data_course: responseJson.data });
                            console.log(this.state.data_course);
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
                        <TouchableOpacity onPress={() => { this.trainerprofile() }}>
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
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>คอร์สออกกำลังกาย</Text>
                    </View>
                    <View style={{ flexDirection: "row-reverse", marginLeft: 20 }}>
                        <TouchableOpacity style={{
                            marginTop: 10,
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
                        }} onPress={() => { Actions.TrainerAddCourse() }}>
                            <Text style={{ color: "#eeeeee" }}>เพิ่มคอร์ส</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={this.state.data_course}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true)
                                this.setState({ show_data: item })
                            }}>
                                <View style={styles.choice}>
                                    <Text style={{
                                        justifyContent: "center",
                                        textAlign: 'center',
                                        color: '#62757f',
                                        fontSize: 16,
                                        fontWeight: '500',
                                        paddingTop: 10
                                    }}>
                                        {item.CName} {'\n'}
                                        {item.LName} {'\n'}
                                        {/* {item.} {'\n'} */}

                                    </Text>

                                </View>

                            </TouchableOpacity>}
                        keyExtractor={item => item.TID}
                    />

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                            <View style={{ backgroundColor: '#ffffff', marginHorizontal: 25, borderRadius: 10, paddingVertical: 10 }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{
                                        justifyContent: "center",
                                        paddingTop: 10,
                                        textAlign: 'center',
                                        color: '#62757f',
                                        fontSize: 24,
                                        fontWeight: '500',
                                    }}>รายละเอียด</Text>
                                </View>
                                <ScrollView>
                                    <View style={{ alignItems: "center" }}>
                                        <TouchableOpacity onPress={() => {
                                            this.gymlocations()
                                            this.setModalVisible(false);
                                        }}>
                                            <Text style={{ fontSize: 18 }}>
                                                ชื่อคอร์ส <Text style={{ color: '#62757f' }}>{this.state.show_data.CName}{"\n"}</Text>
                                    ประเภทคอร์ส <Text style={{ color: '#62757f' }}>{this.state.show_data.CTName}{"\n"}</Text>
                                    ราคา <Text style={{ color: '#62757f' }}>{this.state.show_data.TCPrice}{"\n"}</Text>
                                    รายละเอียด <Text style={{ color: '#62757f' }}>{this.state.show_data.TCDetails}{"\n"}</Text>
                                    สถานที่ <Text style={{ color: '#62757f' }}>{this.state.show_data.LDetails}{"\n"}</Text>

                                            </Text>
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

                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#f7ecf8',
    },
    textStyle: {
        padding: 10,
    },
    choice: {
        flex: 1,
        padding: 8,
        borderRadius: 10,
        margin: 8,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    imagelocate: {
        width: 90,
        height: 90,
        borderWidth: 4,
        borderColor: "white",
        alignSelf: 'flex-start',
        // position: 'absolute',
        marginLeft: 10,
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
});
