import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useTheme} from '../theme';
import {BottomSheet, Button, Screen} from '../components/core';
import useBottomSheet from '../components/core/bottomSheet/useBottomSheet';
import CustomCircularLoader from '../components/core/loader/circularLoader';
import BouncingLoader from '../components/core/loader/circularLoader';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const {isBottomSheetOpen, openBottomSheet, closeBottomSheet} =
    useBottomSheet();

  return (
    // <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
    <Screen>
      {/* Filled Button */}
      <Button
        onPress={() => console.log('Pressed Filled Button')}
        variant="filled"
        disabled={false}
        style={styles.button}>
        Filled Button
      </Button>
      {/* <CustomCircularLoader /> */}
      <BouncingLoader />
      {/* Outline Button */}
      <Button
        onPress={() => console.log('Pressed Outline Button')}
        variant="outline"
        disabled={false}
        style={styles.button}>
        Outline Button
      </Button>

      {/* Circular Button (Medium Size) */}
      <Button
        onPress={() => console.log('Pressed Circular Button')}
        variant="circular"
        size="medium"
        disabled={false}
        style={styles.button}>
        + {/* Custom content inside */}
      </Button>

      {/* Link Button */}
      <Button
        onPress={() => console.log('Pressed Link Button')}
        variant="link"
        disabled={false}
        style={styles.button}>
        Link Button
      </Button>

      {/* Button with Loading State */}
      <Button
        onPress={() => console.log('Pressed Button with Loading')}
        loading={true}
        variant="filled"
        disabled={false}
        style={styles.button}>
        Loading Button
      </Button>

      {/* Disabled Button */}
      <Button
        onPress={() => console.log('Pressed Disabled Button')}
        variant="filled"
        disabled={true}
        style={styles.button}>
        Disabled Button
      </Button>

      {/* Button with Custom Text Style */}
      <Button
        onPress={() => console.log('Pressed Custom Text Style Button')}
        variant="outline"
        textStyle={{fontSize: 18, fontWeight: 'bold', color: 'green'}}
        disabled={false}
        style={styles.button}>
        Custom Text Style Button
      </Button>

      {/* Custom Button with Icon */}
      <Button
        onPress={openBottomSheet}
        // onPress={() => console.log('Pressed Button with Icon')}
        variant="filled"
        disabled={false}
        style={styles.button}>
        <Text style={{color: 'white'}}>Confirm</Text>
      </Button>

      {/* The BottomSheet component with customizable children */}
      <BottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        handleCloseBottomSheet={closeBottomSheet}>
        <View style={styles.drawerContent}>
          <Text style={styles.title}>Bottom Drawer Content</Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Text style={styles.description}>
            This is an example of how you can use the BottomDrawer component.
          </Text>
          <Button onPress={closeBottomSheet}>Close</Button>
        </View>
      </BottomSheet>

      <View style={styles.content}>
        <Text style={styles.text}>Main Content Here</Text>
      </View>
      {/* </TouchableWithoutFeedback> */}
      {/* </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 24, fontWeight: 'bold'},
  button: {
    marginVertical: 10,
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
  customText: {
    fontSize: 18,
    color: '#333',
  },
  drawerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
