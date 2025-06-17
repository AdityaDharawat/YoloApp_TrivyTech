import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function CardFront({ cardData, isFrozen, onCopy }) {
  return (
    <Animated.View style={[styles.card, isFrozen && styles.frozen]}>
      <Text style={styles.title}>YOLO</Text>
      <Text style={styles.text}>{cardData.cardNumber}</Text>
      <Text style={styles.text}>expiry {cardData.expiry}</Text>
      <Text style={styles.text}>cvv {cardData.cvv}</Text>
      <TouchableOpacity onPress={onCopy}>
        <Text style={styles.copy}>📋 copy details</Text>
      </TouchableOpacity>
      <Text style={styles.brand}>RuPay PREPAID</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
  },
  frozen: {
    opacity: 0.4,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 4,
  },
  copy: {
    color: 'red',
    marginTop: 10,
  },
  brand: {
    color: '#fff',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});
