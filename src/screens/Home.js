import React from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {TextInput,ScrollView} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import Category from '../common/Category';
import New from '../common/New';
import Best from '../common/Best';

export default class Home extends React.Component {
    render(){
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:"#f2f2f2",
                paddingHorizontal:20
            }}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                    alignItems:"center"
                }}>
                    <View style={{
                        width:"50%"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:22
                        }}>Sneakers</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        alignItems:"flex-end"
                    }}>
                        <Image
                          source={require("../images/bag-2.png")}
                          style={{width:16,height:20}}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:"100%",
                    marginVertical:30
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:2,
                        width:"85%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:35,
                        borderRadius:10,
                        marginLeft:1
                    }}>
                        <Icon name="ios-search"
                           size={22}
                           color="#4f4a4a"
                           />
                            <TextInput
                                placeholder="Search unique sneakers..."
                                style={{
                                fontFamily:"Medium",
                                paddingHorizontal:10,
                                fontSize:12
                            }}
                            />
                            </View>
                            
                            
                            <View style={{
                                alignItems:"center",
                                elevation:2,
                                width:"15%",
                                backgroundColor:"#FFF",
                                marginLeft:5,
                                height:35,
                                borderRadius:10,
                                marginLeft:1,
                                justifyContent:"center"
                            }}>
                                <Image
                                source={require("../images/sort.png")}
                                style={{
                                    width:18,height:25
                                }}
                                />
                            </View>
                   
                </View>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:18,
                        color:"#4f4a4a"
                    }}>
                        Latest
                    </Text>
                    <View style={{
                        width:5,
                        height:5,
                        borderRadius:5,
                        marginHorizontal:5,
                        backgroundColor:"#4f4a4a"
                    }}></View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:9,
                        color:"#4f4a4a"
                    }}>
                        Good Quality Shoes
                    </Text>
                </View>


                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Category
                            src={require('../images/1.jpg')}
                            name="Nike AirMax Women"
                            onPress={()=>this.props.navigation.navigate('Detail')}
                       
                       />
                         <Category
                            src={require('../images/lr.jpg')}
                            name="Air Jordan IV"
                            onPress={()=>this.props.navigation.navigate('Detail1')}
                       
                       />
                         <Category
                            src={require('../images/2.jpg')}
                            name="Nike Air Force V"
                            onPress={()=>this.props.navigation.navigate('Detail2')}
                       
                       />

                    </ScrollView>
                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Category
                            src={require('../images/6.jpg')}
                            name="Yeezy Boost 350 V2"
                            onPress={()=>this.props.navigation.navigate("Detail3")}
                       
                       />
                         <Category
                            src={require('../images/5.jpg')}
                            name="Air Jordan 1"
                            onPress={()=>this.props.navigation.navigate("Detail4")}
                       
                       />
                         <Category
                            src={require('../images/4.png')}
                            name="Air Jordan 12 Royalty"
                            onPress={()=>this.props.navigation.navigate("Detail5")}
                       
                       />

                    </ScrollView>

                    <View style={{
                        flexDirection:"row",
                        marginTop:30,
                        marginBottom:10,
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#4f4a4a",
                            fontSize:20
                        }}>
                            New Arrivals
                        </Text>
                        <View style={{
                            height:5,
                            width:5,
                            borderRadius:5,
                            backgroundColor:"#4f4a4a",
                            marginHorizontal:4
                        }}>
                        </View>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:10,
                            color:"#4f4a4a"
                        }}>
                            Good Quality Shoes
                        </Text>
                    </View>

                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >

                        <New
                         src={require('../images/3.jpg')}
                        />
                        <New
                        src={require('../images/5.jpg')}
                        />
                        <New
                        src={require('../images/6.jpg')}
                        />
                    </ScrollView>

                    <Text style={{
                        marginTop:20,
                        color:"#4f4a4a",
                        fontSize:18,
                        fontFamily:"Bold"
                    }}>
                        Best Sellers
                    </Text>
            
            
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>

                    <Best/>
                    <Best/>
                    <Best/>
            </ScrollView>


            </ScrollView>
        );
    }
}