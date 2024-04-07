import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {

  const [goalText, setGoalText] = useState('')

  function goalInputContainer(text) {
    setGoalText(text)
  }
  function addgoalhandler() {
    props.onAddGoal(goalText)
    props.onclose();
    setGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.Inputcontainer}>
        <Image style={styles.image} source={require('./assets/images/Target.png')} />
        <TextInput
          onChangeText={goalInputContainer}
          style={styles.textinput}
          placeholder='Type Your Goal'
          value={goalText} />
        <View style={styles.button}>
            <View style={styles.btn}>
              <Button 
              color='#f31282'
              title='Cancel'
              onPress={props.onclose}/>
            </View>
          <View style={styles.btn}>
            <Button
            onPress={addgoalhandler}
            title='Add Goal' />
          </View>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  Inputcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 24,
    flex: 1,
    padding:16,
    backgroundColor:'#1A0037',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
    borderRadius:6,
    backgroundColor:'#e4d0ff'
  },
  button:{
    flexDirection: 'row',
    marginTop:16,
  },
  btn:{
    width:100,
    marginHorizontal:8,
  },
  image:{
    width:100,
    height:100,
    margin:20,
  }
})

module.exports = GoalInput;