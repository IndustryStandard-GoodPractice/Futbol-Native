import React, { useState } from 'react';
import {Text} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import COLORS from '../global-styles/Colors.js';

const fetchFonts = () => {
    return Font.loadAsync({
        'recursive-regular': require('../assets/fonts/RecursiveSansLinearB027st-Rg.ttf')
    });
}

const RecText = (props) => {

    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        );
    }

    return (
        <Text style={[{fontFamily: 'recursive-regular', fontSize: 14, color: COLORS.gray01, ...props.style}]}>
            {props.children}
        </Text>
    );
};

export default RecText;