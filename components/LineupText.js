import React, {useState, useCallback} from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import RecText from '../components/RecText.js'
import uuid from 'uuid-random'

const width = Dimensions.get('window').width;
const cardWidth = width-32;

const LineupText = ({lineupData}) => {
    return (
        <View style={styles.flatContain}>
            <FlatList
                maxToRenderPerBatch={6}
                data={lineupData.slice(0,6)}
                renderItem={({item}) => (
                    <RecText style={styles.itemText}>{item.shirt}. {item.name}</RecText>
                )}
                listKey={uuid()}
            />
            <FlatList
                maxToRenderPerBatch={6}
                data={lineupData.slice(6,11)}
                renderItem={({item}) => (
                    <RecText style={styles.itemText}>{item.shirt}. {item.name}</RecText>
                )}
                listKey={uuid()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatContain: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemText: {
        width: (cardWidth/2)-20,
        height: 20,
    }
});

export default LineupText;