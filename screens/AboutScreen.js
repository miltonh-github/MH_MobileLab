

import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  const appName = 'MH_MobileLab';
  const yourName = 'Milton Huang';
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text>{appName}</Text>
      <Text>{yourName}</Text>
      <Text>{currentDate}</Text>
      <Button
            title="Go to Home Screen"
            onPress={() => navigation.navigate('Home')}
        />
    </MainLayout>
  );
};

export default AboutScreen;
