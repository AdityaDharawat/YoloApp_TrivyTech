import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

const mockCardHolder = 'Jane Doe';
const mockCardNumber = '1234 5678 9012 3456';
const mockExpiry = '12/29';

const YoloPayScreen = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    if (isFront) {
      Animated.timing(animatedValue, {
        toValue: 180,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => setIsFront(false));
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start(() => setIsFront(true));
    }
  };

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
  };

  const cardHolder = mockCardHolder;
  const cardNumber = mockCardNumber;
  const expiry = mockExpiry;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            { transform: [{ rotateY: frontInterpolate }] },
          ]}
        >
          <Text style={styles.bank}>YOLO Bank</Text>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardLabel}>Card Holder</Text>
            <Text style={styles.cardLabel}>Expires</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.cardValue}>{cardHolder}</Text>
            <Text style={styles.cardValue}>{expiry}</Text>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backInterpolate }] },
          ]}
        >
          <View style={styles.blackStrip} />
          <Text style={styles.backText}>Customer Service: 1800-123-4567</Text>
          <Text style={styles.backText}>Valid only in India</Text>
        </Animated.View>
      </View>

      <TouchableOpacity
        style={[styles.button, isFrozen && styles.buttonFrozen]}
        onPress={toggleFreeze}
      >
        <Text style={styles.buttonText}>{isFrozen ? 'Unfreeze Card' : 'Freeze Card'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.flipButton} onPress={flipCard}>
        <Text style={styles.flipText}>{isFront ? 'Show Back' : 'Show Front'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YoloPayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    width: '100%',
    height: 220,
    marginBottom: 30,
    position: 'relative',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    padding: 20,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    justifyContent: 'space-between',
  },
  cardFront: {
    backgroundColor: '#1e3a8a',
  },
  cardBack: {
    backgroundColor: '#111827',
  },
  bank: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
    marginVertical: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#cbd5e1',
    fontSize: 12,
  },
  cardValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  blackStrip: {
    height: 40,
    backgroundColor: '#000',
    marginVertical: 20,
    borderRadius: 4,
  },
  backText: {
    color: '#d1d5db',
    fontSize: 12,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonFrozen: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  flipButton: {
    padding: 10,
  },
  flipText: {
    color: '#38bdf8',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
