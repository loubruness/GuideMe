import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login() {
  return (
    <View className='flex-1 flex justify-end'>
      {/* jolie image de bg */}
      
      <Image source={require('../../assets/images/beach.jpg')}
        className='h-full w-full absolute'
      />

      {/* Logo in the top left corner */}
      <Image 
        source={require('../../assets/images/LogoBidon1.png')} // replace with your logo path
        // className='mt-50 h-10 w-10 absolute'
        style={styles.logo}
      />
          
      {/* texte & btn */}
      <View className='p-5 pb-6 space-y-8'>
        {/* <View className='space-y-3'>
          <Text className='text-white front-bold text-5xl py-4 px-3' style={{fontSize: wp(10)}}>Find your guide !</Text>
          <Text className='text-neutral-200 front-medium px-3' style={{fontSize: wp(5)}}>Get the help you need to plan your perfect trip ✨</Text>
        </View> */}
        {/* Sign In and Sign Up buttons */}
        <View className="flex-col w-full justify-between pt-8">
          <TouchableOpacity className="flex bg-blue-200 p-4 px-12 rounded-full mb-2">
            <Text className="text-center font-semibold text-sky-900" style={{fontSize: wp(5.5)}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex bg-sky-900 p-4 px-12 rounded-full mt-2">
            <Text className="text-center font-semibold text-blue-300" style={{fontSize: wp(5.5)}}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>
      </View>


    </View>
  );
}

{/* <LinearGradient
          colors={['transparent', 'rgba(238,130,238,1)']}
          style={{width: wp(100), height:hp(60)}}
          start={{x: 0.5, y:0}}
          end={{x:0.5, y:1}}
          className='absolute h-full w-full'
          /> */}


          const styles = StyleSheet.create({
            logo: {
              position: 'absolute',
              top: hp(3),
              left: wp(10),
              width: wp(40),
              height: wp(40), 
              resizeMode: 'contain',
            },
          });