import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Profile: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the PROFILE screen</Text>
      <Button
        title="Followers / Following"
        onPress={() => navigation.navigate('Connections')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Profile;
