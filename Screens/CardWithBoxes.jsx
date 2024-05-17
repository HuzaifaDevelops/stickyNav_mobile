import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardWithBoxes = () => {
  return (
    <View style={styles.card}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.yellowish]} />
        <View style={[styles.box, styles.yellowish]} />
        <View style={[styles.box, styles.yellowish]} />
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.yellowish]} />
        <View style={[styles.box, styles.yellowish]} />
        <View style={[styles.box, styles.yellowish]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Light opacity background
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  yellowish: {
    backgroundColor: '#FFEC8B', // Yellowish color
  },
});

export default CardWithBoxes;
