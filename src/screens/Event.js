import React from 'react';
import {View,Text,Image,Modal,StyleSheet} from 'react-native';
import {Card,ListItem,Button} from 'react-native-elements';

const Event = props => {
  let modalContent = null;

  if (props.eventName) {
    modalContent = (
      <View>
        <Image source={props.eventName.image} style={styles.bucketlistImage} />
        <Text style={styles.bucketlistItem}>{props.eventName.name}</Text>
      </View>
    );
  }

    return (
      <Modal
        onRequestClose={props.onModalClosed}
        visible={props.eventName !== null}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            <Button
              title='Delete'
              color='red'
              onPress={props.onItemDeleted} />
            <Button
              title='Close'
              onPress={props.onModalClosed} />
          </View>
        </View>
      </Modal>
    );

};

export default Event;

// <Card
// title='Pedalpalooza'
// image={require('../images/pedal.jpg')}>
// <Text style={{marginBottom: 10}}>
// Find out when Loud and Lit and Get Lost rides are this year. Also find out when Bowie vs. Prince ride is?
// </Text>
// <Text style={{marginBottom: 10}}> $0 - Free</Text>
// <Text style={{marginBottom: 10}}> Portland, OR </Text>
// <Button
// backgroundColor='#03A9F4'
// buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
// title='VIEW MORE' />
// </Card>


const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  bucketlistImage: {
    width: '100%',
    height: 200
  },
  bucketlistItem: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  }
});
