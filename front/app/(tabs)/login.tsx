import {  View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
// import { tw } from 'nativewind';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      {/* Logo */}
      <View className="mb-8 items-center">
        <View className="w-16 h-16 bg-white rounded-full mb-4" />
        <Text className="text-3xl font-bold text-black">GuideME</Text>
      </View>

      {/* Welcome Text */}
      <View className="bg-white w-full p-8 rounded-t-3xl items-center">
        <Text className="text-lg font-semibold mb-2">
          Welcome to GuideME
        </Text>
        <Text className="text-center text-gray-500 mb-4">
          Live life with no excuses, travel with no regret
        </Text>

        {/* Buttons */}
        <TouchableOpacity className="w-full flex-row justify-center items-center bg-black p-4 rounded-lg mb-4">
          {/* <Image source={require('./assets/apple.png')} className="w-5 h-5 mr-2" /> */}
          <Text className="text-white font-semibold">Sign in with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="w-full flex-row justify-center items-center bg-red-500 p-4 rounded-lg mb-4">
          {/* <Image source={require('./assets/google.png')} className="w-5 h-5 mr-2" /> */}
          <Text className="text-white font-semibold">Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="w-full flex-row justify-center items-center bg-blue-600 p-4 rounded-lg mb-4">
          {/* <Image source={require('./assets/facebook.png')} className="w-5 h-5 mr-2" /> */}
          <Text className="text-white font-semibold">Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Continue as Guest */}
        <TouchableOpacity>
          <Text className="text-gray-500 underline mb-4">Continue as guest</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-500">Or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Sign In and Sign Up buttons */}
        <View className="flex-row w-full justify-between">
          <TouchableOpacity className="flex-1 bg-blue-200 p-4 rounded-lg mr-2">
            <Text className="text-center font-semibold text-blue-700">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-black p-4 rounded-lg ml-2">
            <Text className="text-center font-semibold text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
// import React from 'react';
// import { verifyInstallation } from 'nativewind';
// import { ThemedText } from '@/components/ThemedText';

// function Login() {
//   // Ensure to call inside a component, not globally
//   verifyInstallation();

//   return (
//     <ThemedText>
//       This app has two screens:{' '}
//       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//     </ThemedText>
//   );
// }
