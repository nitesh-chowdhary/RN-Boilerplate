import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {s} from '../../../utils/scale';
import {useTheme} from '../../../theme';

interface BottomSheetProps {
  children: React.ReactNode;
  isBottomSheetOpen: boolean;
  handleCloseBottomSheet: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  isBottomSheetOpen,
  handleCloseBottomSheet,
}) => {
  const theme = useTheme();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(isBottomSheetOpen);

  useEffect(() => {
    if (isBottomSheetOpen) {
      setVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setVisible(false);
        handleCloseBottomSheet();
      });
    }
  }, [isBottomSheetOpen]);

  const slideTranslateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  if (!visible) {
    return null;
  }

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseBottomSheet}>
      <StatusBar
        backgroundColor={
          isBottomSheetOpen ? 'rgba(0, 0, 0, 0.3)' : theme.transparent
        }
        barStyle="dark-content"
        animated={true}
      />
      <TouchableWithoutFeedback onPress={() => handleCloseBottomSheet()}>
        <Animated.View style={[styles.overlay, {opacity: fadeAnim}]}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.bottomSheet,

                {
                  transform: [{translateY: slideTranslateY}],
                  backgroundColor: theme.secondaryContentBackgroundColor,
                },
              ]}>
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    padding: s(20),
    borderTopLeftRadius: s(20),
    borderTopRightRadius: s(20),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default BottomSheet;
