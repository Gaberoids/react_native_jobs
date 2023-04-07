// Home page
import {useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

// from folders folders on work space
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const Home = () => {
    // creating a layout start with a router
    const router = useRouter();
    return (
        <SafeAreaView styles={{flex: 1, setStatusBarBackgroundColor: COLORS.lightWhite }}>
            <Text>Home</Text>
            <Stack.Screen options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrL={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrL={icons.profile} dimension="100%" />
                ),
                 }} />
        </SafeAreaView>
        // headershadowview hides the header if there is a header "INDEX" on the page.
    )
}

export default Home;