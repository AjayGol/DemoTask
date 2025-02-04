import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import imgVoice from './../assets/img_voice.png';
import imgMore from './../assets/img_more.png';
import imgKeyboard from './../assets/img_keyboard.png';

export default function DemoScreen() {
    const [selected, setSelected] = useState(-1);

    const options = [
        'What would you like to do today?',
        'Raise a service request',
        'Book an amenity',
        'Check my packages',
        'Request guest entry',
        'View my documents',
    ];

    return (
        <LinearGradient
            colors={['#d8b4fe', '#a5f3fc', '#D9B3E8']}
            style={styles.container}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.headerSpacer} />
                    <Text style={styles.greeting}>
                        Good Morning,{'\n'}
                        <Text style={styles.username}>Krishna</Text>
                    </Text>
                    <Image
                        source={{
                            uri: 'https://c.superprof.com/i/m/10303986/160/20230123195002/10303986.webp',
                        }}
                        style={styles.profileImage}
                    />
                </View>

                {/* Options List */}
                <View style={styles.optionsContainer}>
                    {options.map((item, index) => (
                        <View style={styles.directionRow} key={index}>
                            <TouchableOpacity
                                key={index}
                                style={styles.optionButton}
                                onPress={() => setSelected(index)}>
                                <Text
                                    style={[
                                        styles.optionText,
                                        selected === index && styles.optionTextSelected,
                                    ]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Bottom Navigation */}
                <View style={styles.bottomNav}>
                    <View style={styles.bottomNavBackground} />
                    <Image source={imgMore} style={styles.navIcon} />
                    <View style={styles.navSpacer} />
                    <View style={styles.centerIcon}>
                        <Image source={imgVoice} style={styles.voiceIcon} />
                    </View>
                    <Image source={imgKeyboard} style={styles.navIcon} />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerSpacer: {
        flex: 1,
    },
    directionRow: { flexDirection: 'row'},
    greeting: {
        fontSize: 18,
        color: '#1f2937',
        textAlign: 'right',
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        color: '#4b5563',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    optionsContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    optionButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 12,
        borderRadius: 20,
        marginVertical: 8,
        borderColor: 'white',
        borderWidth: 1,
    },
    optionText: {
        fontSize: 13,
        color: '#6366f1',
        textAlign: 'center',
    },
    optionTextSelected: {
        color: '#000',
    },
    bottomNav: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        padding: 5,
        borderColor: 'white',
        borderWidth: 1,
        position: 'relative',
    },
    bottomNavBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    navIcon: {
        width: 45,
        height: 45,
    },
    navSpacer: {
        flex: 1,
    },
    centerIcon: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    voiceIcon: {
        width: 130,
        height: 130,
    },
});
