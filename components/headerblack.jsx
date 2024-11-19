import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderBlack = ({
  title,
  onBackPress,
  onHelpPress,
  iconColor = 'black',
  iconSize = 20,
}) => {
  const renderIcon = (name, onPress) => (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <FontAwesome5 name={name} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {onBackPress ? renderIcon('arrow-left', onBackPress) : <View style={styles.iconPlaceholder} />}
      <Text style={styles.title}>{title}</Text>
      {onHelpPress ? renderIcon('question-circle', onHelpPress) : <View style={styles.iconPlaceholder} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  iconContainer: {
    padding: 10,
  },
  iconPlaceholder: {
    width: 40,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'LilitaOne_400Regular',
    flex: 1,
    textAlign: 'center',
  },
});

export default HeaderBlack;