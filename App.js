import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput'
export default function App() {
  const [goals,setGoals] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false);

  function addGoal(goalText){
   setGoals((currentGoals) =>[...currentGoals, goalText])
  }
  function deleteitem(index){
    const newGoals = goals.filter((el,i) => i!=index )
    setGoals(newGoals);
  }

  function startAddGoalHandler(){
    setIsModalVisible(true);
  }
  function closeAddGoalHandler(){
    setIsModalVisible(false);
  }


  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appcontainer}>
      <Button title='Add New Goal' color='#A070D6' onPress={startAddGoalHandler}/>
      <GoalInput visible = {isModalVisible} onclose={closeAddGoalHandler} onAddGoal={addGoal} />     
      <View style={styles.goalsContainer}>
      <FlatList 
      data={goals}
      renderItem={(itemData) => {
        return <GoalItem text={itemData.item} onDelete= {() => deleteitem(itemData.index)}/>
      }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appcontainer:{
  paddingTop:50,
  paddingHorizontal:16,
  flex: 1,
  backgroundColor:'#1A0037'
 },
 goalsContainer:{
  flex: 4,
 },
 
});
