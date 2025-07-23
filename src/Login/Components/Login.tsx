import React, { useState, useContext, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Switch,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { RootStackParamList } from '../../../App';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AxiosError } from 'axios';
import { Cleaning } from '../../Utilites/icons';
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

type LoginPayload = {
  accessToken: string;
  refreshToken: string;
};
interface newError {
  username: string;
  password: string;
}

export default function Login({ navigation }: Props) {
  const Auth = useContext(AuthContext);
  const Api_Url = Config.API_URL;

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('CLEANER');
  // const [isEnabled, setIsEnabled] = useState(false);
  const [errors, setErrors] = useState<newError>({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   setUserType(isEnabled ? 'OPERATIONAL_LEAD' : 'CLEANER');
  // }, [isEnabled]);

  const validateForm = () => {
    const newErrors: newError = {
      username: '',
      password: '',
    };
    if (username === '') {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username Must Contain 3 Letters Above';
    }
    if (password === '') {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password Must Contain 6 Character';
    }

    setErrors(newErrors);

    return (
      Object.values(newErrors).filter(item => item.length !== '').length === 0
    );
  };

  const handleSubmit = async () => {
    console.log(validateForm());
    if (!validateForm()) {
      Alert.alert(
        'Validation Error',
        'Please fill in all required fields correctly',
      );
      return;
    }

    setLoading(true);

    const userData = {
      userName: username.trim().toLowerCase(),
      password: password.toLowerCase(),
      // role: userType,
    };

    try {
      const response = await axios.post(
        `${Api_Url}v1/users/loginCheck`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        },
      );

      console.log('Login response received', response.data.data.user);

      const { data } = response.data;
      const userDatas = response.data.data.user;
      console.log(userDatas, 'LOGIN', data);
      if (response.data.message === 'Login successful' && data) {
        const loginPayload = {
          accessToken: data.__as_secure,
          refreshToken: data.__rs_secure,
        };

        const LoginAuth = Auth?.login(loginPayload, userDatas);

        // Alert.alert('Success', response.data.message);
        // } else {
        //   Alert.alert(
        //     'Login Failed',
        //     response.data.message || 'Invalid credentials',
        //   );
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error('Login error:', error);
      console.log(error.response?.data);
      if (error.response) {
        Alert.alert(
          'Login Error',
          error.response.data?.message || 'Server error occurred',
        );
      } else if (error.request) {
        Alert.alert('Network Error', 'Please check your internet connection');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState);
  // };

  return (
    <SafeAreaView className="flex-1 ">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          className="flex-1 bg-primary/15"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="relative h-72  overflow-hidden">
            <View className="absolute inset-0 bg-primary" />
            <View className="absolute inset-0 -top-32 mx-auto left-[28px] right-0 bottom-0">
              <Image
                source={require('../../assets/Login/Top-Bg.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            </View>
            <View></View>
            <View className="absolute bottom-4 m-auto left-0 right-0    flex items-center ">
              <Text className="text-white text-[40px]  font-outfit-bold text-center ">
                Kleenmatic
              </Text>
              <Text className="text-white/90 text-sm text-center -mt-2 mb-2 font-outfit-medium">
                Professional Cleaning Services
              </Text>
            </View>
          </View>

          <View className="bg-white w-full mt-[-15px] h-full rounded-t-3xl">
            <View className="mb-8 mt-4  ">
              <Text className="text-3xl font-outfit-semibold text-gray-900 text-center mb-2">
                Welcome Back
              </Text>
              <Text className="text-gray-500 text-center font-outfit-medium">
                Sign in to continue your cleaning journey
              </Text>
            </View>

            <View className="mb-6 mx-2">
              <Text className="text-xl font-outfit-medium text-gray-700 mb-2 ml-7">
                Username
              </Text>
              <View className="relative mx-auto">
                <TextInput
                  value={username}
                  onChangeText={setUserName}
                  style={[
                    {
                      fontFamily: 'Outfit',
                    },
                  ]}
                  placeholder="Enter your username"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="none"
                  className={`bg-gray-50 border w-96  ${
                    errors.username ? 'border-red-400' : 'border-gray-200'
                  } rounded-xl px-4 py-4 pl-12  text-gray-900 text-base `}
                />
                <Icon
                  name="person-outline"
                  size={20}
                  color="#9CA3AF"
                  style={{ position: 'absolute', left: 16, top: 13 }}
                />
              </View>
              {errors.username && (
                <Text className="text-red-500 text-xs mt-1 ml-6">
                  {errors.username}
                </Text>
              )}
            </View>

            <View className="mb-6 mx-2">
              <Text className="text-xl font-outfit-medium text-gray-700 mb-2 ml-7">
                Password
              </Text>
              <View className="relative mx-auto">
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  className={`bg-gray-50 border w-96 ${
                    errors.password ? 'border-red-400' : 'border-gray-200'
                  } rounded-xl px-4 py-4 pl-12 pr-12 text-gray-900 text-base`}
                />
                <Icon
                  name="lock-outline"
                  size={20}
                  color="#9CA3AF"
                  style={{ position: 'absolute', left: 16, top: 13 }}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: 16, top: 13 }}
                  className=""
                >
                  <Icon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={20}
                    color="#9CA3AF"
                    className=""
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text className="text-red-500 text-xs mt-1 ml-6">
                  {errors.password}
                </Text>
              )}
            </View>

            {/* <View className="mb-8 bg-gray-50 p-4 rounded-xl">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-sm font-robo-medium text-gray-700 mb-1">
                  Role Selection
                </Text>
              </View>
              <View className="flex-row items-center">
                <Switch
                  trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
                  thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                  ios_backgroundColor="#E5E7EB"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                />
                <Text className="text-sm text-gray-600 font-robo-medium ml-3">Lead</Text>
              </View>
            </View>
          </View> */}

            <TouchableOpacity
              className={`w-96 h-12 rounded-xl mx-auto flex justify-center ${
                loading ? 'bg-blue-300' : 'bg-primary'
              } shadow-lg`}
              onPress={handleSubmit}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <View className="flex-row justify-center items-center">
                  <ActivityIndicator color="#fff" size="small" />
                  <Text className="text-white font-semibold text-lg ml-2 ">
                    Signing In...
                  </Text>
                </View>
              ) : (
                <Text className="text-white text-center  font-outfit-semibold text-lg">
                  Sign In
                </Text>
              )}
            </TouchableOpacity>

            <View className="mt-8 pt-6 border-t border-gray-100">
              <View className="flex-row justify-center items-center">
                <Icon name="help-outline" size={16} color="#9CA3AF" />
                <Text className="text-gray-400 text-sm ml-2 font-outfit-light">
                  Need help?{' '}
                </Text>
                <TouchableOpacity>
                  <Text className="text-primary text-sm font-outfit-semibold">
                    Contact Support
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
