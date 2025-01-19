import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, fontWeight: 'bold'},
});

export default DetailsScreen;
