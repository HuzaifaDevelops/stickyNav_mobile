import {
    StyleSheet,
    ScrollView,
    View,
    Pressable,
    Image,
    Text,
    FlatList,
    Animated,
    TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
// import TextComp from '../components/textComp';
// import { colors } from '../components/colors';
// import { height, width } from '../screenSize/size';
// import IconButtonComp from '../components/iconButtonComp';
// import { homeItemsContentData, sideBardItemsData } from '../components/data';
// import { Context } from '../contextApi/context';

const headerSectionHeight = 80;




const headerTabs = [
    {
        text: 'Tab 1'
    },
    {
        text: 'Tab 2'
    },
    {
        text: 'Tab 3'
    },
    {
        text: 'Tab 4'
    },
    {
        text: 'Tab 5'
    },
]

const renderHeaderTabs = () => (
    <View style={styles.headerTabView}>
        <ScrollView
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
        >
            {headerTabs.map((tab, index) => (
                <TouchableOpacity key={index} style={styles.tab}>
                    <Text style={styles.tabText}>{tab.text}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
)


const BodySection = () => {
    const data = new Array(100).fill(0)
    return (
        <View>
            {data.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    )
}

const Home = ({ navigation }) => {

    const scrollY = new Animated.Value(0)
    const stickyTop = scrollY.interpolate({
        outputRange: [-25, 0],
        inputRange: [headerSectionHeight, headerSectionHeight + 150],
        extrapolate: 'clamp'
    })
    const stickyOpacity = scrollY.interpolate({
        outputRange: [0, 1],
        inputRange: [headerSectionHeight, headerSectionHeight + 10],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', flex: 3 }}>
                <View
                    style={
                        {
                            // backgroundColor: colors.secondary,
                            // opacity: 0.7,
                        }
                    }>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        {/* <IconButtonComp
                            iconName="menu"
                            iconColor={colors.secondary}
                            onIconPress={openDrawer}
                        />
                        <IconButtonComp iconName="home" iconColor={colors.secondary} /> */}
                    </View>
                </View>
                <View style={styles.card}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        {/* <Image
                            source={require('../assets/logo.png')}
                            style={[
                                {
                                    // width: height / 6,
                                    // height: height / 6,
                                    // borderRadius: 50,
                                    // borderColor: '#fff',
                                    // borderWidth: 2,
                                },
                            ]}
                        /> */}
                    </View>

                    {/* second half */}
                    <View
                        style={{
                            flex: 1,
                            // borderTopColor: colors.primary,
                            borderTopWidth: 0.5,
                            alignItems: 'center',
                            paddingTop: 10,
                        }}>
                        {/* <FlatList
                            ItemSeparatorComponent={
                                <View style={{ padding: width / 38 }}></View>
                            }
                            horizontal
                            style={{ flexDirection: 'row' }}
                            data={sidebarItems}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={{
                                        alignItems: 'center',
                                        // width: lang === 'English' ? width / 6 : '',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                    }}
                                    key={item.id}
                                    // onPress={() => navigation.navigate('subMenu', { id: item.id })}

                                    >
                                    <View
                                        style={{
                                            backgroundColor: colors.yellow,
                                            borderRadius: 20,
                                        }}>
                                        <IconButtonComp
                                            iconName={item.icon}
                                            iconColor={colors.primary}
                                            iconSize={30}
                                        />
                                    </View>
                                    <TextComp
                                        children={item.name}
                                        style={{
                                            color: colors.primary,
                                            fontSize: width * 0.034,
                                            textAlign: 'center',
                                        }}
                                    />
                                </Pressable>
                            )}
                        /> */}
                    </View>
                </View>
            </View>

            <View
                style={{
                    flex: 3,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20, // Adjust the value as needed
                    borderTopRightRadius: 20, // Adjust the value as needed
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}>
                <View style={styles.scrollView}>
                    <ScrollView
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                            useNativeDriver: false
                        })}
                    >
                        <View style={styles.headerSection}
                        >
                            {renderHeaderTabs()}
                        </View>
                        <BodySection />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Home;

const Separator = val => {
    return <View style={{ margin: val }}></View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        // backgroundColor: 'pink',
        paddingVertical: 10,
    },
    card: {
        // height: height / 3.5,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 23,
        // backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: '#fff',
        padding: 16,
        borderBottomWidth: 0,
        margin: 20,
    },
    innerContent: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    box: {
        padding: 20,
        // width: width / 2.3,
        height: 100,
        backgroundColor: "white",
        marginTop: 5,
        marginRight: 5,
        padding: 16,
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 12,
        // ...styling.neomorphism,
    },
    iconBox: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        padding: 16,
        // ...styling.neomorphism,
    },
    textBox: {
        width: '60%',
        alignItems: 'center',
    },
    text: {
        color: "green",
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        // fontSize: width * 0.04,
        color: "green",
        fontWeight: 'bold',
        color: "green", // Text color
        textShadowColor: "green",
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 4,
    },
    appNameB: {
        // fontSize: width * 0.1,
        color: "green",
        fontWeight: 'bold',
        color: "green",
        textShadowColor: "green",
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 4,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "#000000",
        opacity: 0.7,
        zIndex: 0,
    },

    container: {
        flex: 1,
    },
    animatedView: {
        height: 80,
        // paddingBottom: 16,
        backgroundColor: '#F4EEE0',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: -150, // -150 -> 0
        left: 0,
        right: 0,
        opacity: 1,
        ...Platform.select({
            android: {
                elevation: 3,
            },
            ios: {
                shadowColor: '#a8bed2',
                shadowOpacity: 1,
                shadowRadius: 16,
                shadowOffset: {
                    width: 4,
                    height: 3,
                },
            },
        }),
    },
    headerSection: {
        height: headerSectionHeight,
        justifyContent: 'flex-end',
        backgroundColor: '#F4EEE0'
    },
    headerTabView: {
        paddingVertical: 24,
        backgroundColor: '#F4EEE0',
    },
    tab: {
        backgroundColor: '#6D5D6E',
        marginHorizontal: 10,
        paddingHorizontal: 15,
        borderRadius: 50,
        paddingVertical: 5
    },
    tabText: { color: '#fff' },
    item: {
        backgroundColor: '#4F4557',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
    },
    itemText: { textAlign: 'center' }
});