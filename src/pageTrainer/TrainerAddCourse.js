import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    Modal,
    TextInput
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Config from '../components/config';

export default class TrainerAddCourse extends Component {
    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            isLoading: true,
            search: '',
            course: [],
            course_list: [],
            modalcourse: false,
            modalcourse_list: false,
            modallocation: false,
            course_type: '',
            course_name: '',
            c_detail: '',
            c_price: 0,
            location: '',
            c_location: '',
            TID: ''

        };
        this.arrayholder = [];
        this.get_tid()
        this.get_course()
        this.get_location()
    }

    goback() {
        Actions.pop()
    }
    get_tid = async () => {
        try {
            const account_id = await AsyncStorage.getItem('account_id');
            this.setState({ TID: account_id })
        }
        catch (error) {
            // Error retrieving data
        }
    }
    get_location() {
        fetch(Config.url + 'server/api/Cousre/get_location_id')
            .then((response) => response.json())
            .then((responseJson) => this.setState({ location: responseJson }));
    }
    get_course() {
        fetch(Config.url + 'server/api/Cousre/get_course')
            .then((response) => response.json())
            .then((responseJson) => this.setState({ course: responseJson }));
    }
    load_course(id) {
        fetch(Config.url + 'server/api/Cousre/get_course_id?CTID=' + id)
            .then((response) => response.json())
            .then((responseJson) => this.setState({ course_list: responseJson }));
    }
    add_course(TID, CID, TCPrice, TCDetails, LID) {
        // console.log(Config.url + 'server/api/Cousre/add_course?TID=' + TID + '&CID=' + CID + '&TCPrice=' + Number(TCPrice) + '&TCDetails=' + TCDetails + '&LID=' + LID)
        fetch(Config.url + 'server/api/Cousre/add_course?TID=' + TID + '&CID=' + CID + '&TCPrice=' + Number(TCPrice) + '&TCDetails=' + TCDetails + '&LID=' + LID)
        alert('เพิ่มคอร์สสำเร็จ')
        Actions.Trainercourse()

    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                        }}>เพิ่มคอร์สออกกำลังกาย</Text>
                        <Text style={{
                            color: '#62757f',
                            fontSize: 18,
                            fontWeight: '500',
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginTop: 10,
                            paddingLeft: 10
                        }}>เลือกประเภทคอร์ส</Text>
                    </View>

                    <TouchableOpacity style={styles.choice}
                        onPress={
                            () => {
                                this.setState({ modalcourse: true })
                            }
                        }
                    >
                        {
                            this.state.course_type.CTName ?

                                <Text style={{
                                    justifyContent: "center",
                                    textAlign: 'center',
                                    color: '#62757f',
                                    fontSize: 20,
                                    fontWeight: '500',
                                    paddingVertical: 8
                                }}>
                                    {this.state.course_type.CTName}
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
                                    ประเภทคอร์ส
                        </Text>
                        }
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalcourse}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center', backgroundColor: '#ffffff', marginHorizontal: 25, borderRadius: 10, paddingVertical: 10 }}>
                                <Text style={{
                                    color: '#62757f',
                                    fontSize: 24,
                                    marginTop: 10,
                                }}>เลือกประเภทคอร์ส</Text>
                                <FlatList
                                    data={this.state.course}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity onPress={() => {

                                            this.setState({ modalcourse: false })
                                            this.setState({ course_type: item })
                                            this.setState({ course_name: '' })
                                            this.load_course(item.CTID)
                                        }}>
                                            <View style={styles.Textshow
                                            } >
                                                <Text style={{ fontSize: 17, textAlign: "center" }} >{item.CTName}</Text>
                                            </View>
                                        </TouchableOpacity>}
                                    keyExtractor={({ id }, index) => id}
                                />
                                <View style={{}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ modalcourse: false })
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

                    {this.state.course_type ?
                        <View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 18,
                                fontWeight: '500',
                                justifyContent: 'center',
                                textAlign: 'left',
                                marginTop: 10,
                                paddingLeft: 10
                            }}>เลือกคอร์ส</Text>

                            <TouchableOpacity style={styles.choice}
                                onPress={
                                    () => {
                                        this.setState({ modalcourse_list: true })
                                    }
                                }
                            >
                                {
                                    this.state.course_name.CName ?

                                        <Text style={{
                                            justifyContent: "center",
                                            textAlign: 'center',
                                            color: '#62757f',
                                            fontSize: 20,
                                            fontWeight: '500',
                                            paddingVertical: 8
                                        }}>
                                            {this.state.course_name.CName}
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
                                            เลือกคอร์ส
                        </Text>
                                }
                            </TouchableOpacity>
                        </View>
                        :
                        <View>

                        </View>
                    }
                    {

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalcourse_list}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                                <View style={{ alignItems: 'center', backgroundColor: '#ffffff', marginHorizontal: 25, borderRadius: 10, paddingVertical: 10 }}>
                                    <Text style={{
                                        color: '#62757f',
                                        fontSize: 24,
                                        marginTop: 10,
                                    }}>เลือกคอร์ส</Text>
                                    <FlatList
                                        data={this.state.course_list}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity onPress={() => {

                                                this.setState({ modalcourse_list: false })
                                                this.setState({ course_name: item })
                                            }}>
                                                <View style={styles.Textshow
                                                } >
                                                    <Text style={{ fontSize: 17, textAlign: "center" }} >{item.CName}</Text>
                                                </View>
                                            </TouchableOpacity>}
                                        keyExtractor={({ id }, index) => id}
                                    />
                                    <View style={{}}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({ modalcourse_list: false })
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
                    }
                    {
                        this.state.course_name ?

                            <View>


                                <Text style={{
                                    color: '#62757f',
                                    fontSize: 18,
                                    fontWeight: '500',
                                    justifyContent: 'center',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    paddingLeft: 10
                                }}>รายละเอียดคอร์ส</Text>
                                <TextInput style={[styles.choice, {
                                    backgroundColor: '#ffffff',
                                    paddingVertical: 15,
                                    paddingLeft: 10,
                                    fontSize: 18,

                                }]}
                                    onChangeText={(text) => this.setState({ c_detail: text })}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="ระบุรายละเอียดคอร์ส"

                                    placeholderTextColor="#bdbdbd"

                                />
                                <Text style={{
                                    color: '#62757f',
                                    fontSize: 18,
                                    fontWeight: '500',
                                    justifyContent: 'center',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    paddingLeft: 10
                                }}>ราคาคอร์ส</Text>
                                <TextInput style={[styles.choice, {
                                    backgroundColor: '#ffffff',
                                    paddingVertical: 15,
                                    paddingLeft: 10,
                                    fontSize: 18,

                                }]}
                                    onChangeText={(text) => this.setState({ c_price: text })}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="ระบุราคาคอร์ส"
                                    // secureTextEntry={true}
                                    placeholderTextColor="#bdbdbd"
                                // ref={(input) => this.password = input}
                                />
                            </View>
                            :
                            <View>

                            </View>
                    }

                    {this.state.course_name ?
                        <View>
                            <Text style={{
                                color: '#62757f',
                                fontSize: 18,
                                fontWeight: '500',
                                justifyContent: 'center',
                                textAlign: 'left',
                                marginTop: 10,
                                paddingLeft: 10
                            }}>เลือกคอร์ส</Text>

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
                        </View>
                        :
                        <View>

                        </View>
                    }
                    {

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
                                    }}>เลือกสถานที่ฝึกสอน</Text>
                                    <FlatList
                                        data={this.state.location}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity onPress={() => {

                                                this.setState({ modallocation: false })
                                                this.setState({ c_location: item })
                                            }}>
                                                <View style={styles.Textshow
                                                } >
                                                    <Text style={{ fontSize: 17, textAlign: "center" }} >{item.LName}</Text>
                                                </View>
                                            </TouchableOpacity>}
                                        keyExtractor={({ id }, index) => id}
                                    />
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
                    }


                </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        this.add_course(this.state.TID, this.state.course_name.CID, this.state.c_price, this.state.c_detail, this.state.c_location.LID)
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
                    }} >บันทึก</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

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
        margin: 5,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.25)',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    Textshow: {
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        margin: 10,
        borderRadius: 20,
        borderWidth: 2,
        fontSize: 20,
        color: "#62757f"

    },
});
