import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen!</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealDetailsScreen;