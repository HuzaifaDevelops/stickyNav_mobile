import { Animated, Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardWithBoxes from './CardWithBoxes';
import IconButtonComp from './Components/IconButtonComp';
import { IconButton, MD3Colors } from 'react-native-paper';
import { useEffect } from 'react';

const height = Dimensions.get("screen").height;
const headerSectionHeight = height / 2;

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

const TopBar = () => {
    return (

        <View
            style={
                {
                    backgroundColor: 'white',
                }
            }>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{padding: 20}}>🏠</Text>
                    <Text style={{padding: 20}}>menu</Text>
            </View>
        </View>
    )
}


export default function Goal() {
    const scrollY = new Animated.Value(0)
    const stickyTop = scrollY.interpolate({
        outputRange: [-25, 0],
        inputRange: [headerSectionHeight, headerSectionHeight + 60],
        extrapolate: 'clamp'
    })
    const stickyOpacity = scrollY.interpolate({
        outputRange: [0, 1],
        inputRange: [headerSectionHeight, headerSectionHeight + 10],
        extrapolate: 'clamp'
    })

    // console.log(stickyTop)

    return (
        <View style={styles.container}>
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
                    <TopBar />

                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        <CardWithBoxes />

                    </View>
                </View>
                <BodySection />
            </ScrollView>
            <Animated.View style={[styles.animatedView, {
                top: stickyTop,
                opacity: stickyOpacity
            }]}>
                <TopBar />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    animatedView: {
        // height: 80,
        // justifyContent: 'flex-end',
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
        // justifyContent: 'flex-end',
        backgroundColor: 'green'
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
    itemText: { textAlign: 'center' },


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
});










