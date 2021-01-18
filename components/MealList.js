import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem onSelectMeal={() => {
                props.navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav: isFavorite
                }})
            }} title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} image={itemData.item.imageUrl} />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList style={{ width: '100%' }} data={props.listData} renderItem={renderMealItem} keyExtractor={(item, index) => item.id} />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealList;