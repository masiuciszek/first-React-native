import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
  title2?: string;
}

const Header: React.FC<Props> = ({title, title2}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'rgb(0, 163, 136)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 22,
    padding: 2,
    color: '#fff',
    fontWeight: '800',
  },
  title2: {
    fontSize: 18,
    padding: 2,
    color: '#fff',
  },
});

export default Header;
