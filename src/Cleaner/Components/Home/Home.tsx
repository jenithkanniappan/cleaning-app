import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  Animated,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../../../App';
import { useState, useEffect, useRef, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Bell, Close, Grid, ProfileSvg } from '../../../Utilites/icons';
import { AuthContext } from '../../../Authentication/AuthContext/AuthContext';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface CardData {
  id: number;
  color: string;
  title: string;

  img: ImageSourcePropType;
  icon: string;
}

const { width, height } = Dimensions.get('window');

const menuData: CardData[] = [
  {
    id: 1,
    color: '#3B82F6',
    title: 'Daily Tasks',
    img: require('../../../assets/Cleaner/Hom_Screen/CardImg_1.png'),
    icon: 'assignment',
  },
  {
    id: 2,
    color: '#10B981',
    title: 'Training',
    img: require('../../../assets/Cleaner/Hom_Screen/CardImg_2.png'),
    icon: 'school',
  },
];

const Home = ({ navigation }: Props) => {
  const [cardData, setCardData] = useState(menuData);
  const [Profile, setProfile] = useState(false);
  const Auth = useContext(AuthContext);
  const toggleProfile = () => setProfile(!Profile);
  
  const handleNavigation = (index: number, id: number) => {
    if (cardData[index].id === 1) {
      navigation.navigate('Task');
    } else {
      navigation.navigate('Training');
    }
  };
  return (
    <SafeAreaView className="flex-1  bg-primary ">
      <ScrollView
        className="flex-1 bg-primary/30  "
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={['#3B82F6', '#1E40AF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="relative "
        >
         
          <View className="absolute inset-0 bg-primary/30  " />

          <View className="flex-row  justify-center items-center mb-4 mt-5">
            <View className="bg-white/20 p-3 rounded-full mr-3">
              <Icon name="cleaning-services" size={30} color="#fff" />
            </View>
            <View></View>
          </View>

           <View className='absolute top-7 left-2'>
            <TouchableOpacity className='w-20 h-10 flex justify-center rounded-xl bg-background/30'>
            <Text className='text-background text-lg font-outfit-medium mx-2'> ← Back</Text>
                 </TouchableOpacity>
          </View>
        
          {/* <View className="absolute top-3 right-0">
            <TouchableOpacity
              className=" bg-white/40 rounded-full mr-2 "
              onPress={toggleProfile}
            >
              <ProfileSvg width={60} height={60} className="" />
            </TouchableOpacity>
          </View> */}

          <View className="items-center mb-5">
            <Text className="text-3xl font-robo-bold text-background text-center mb-2">
              Welcome Thamizh
            </Text>
            <Text className="text-background/90 text-base text-center">
              Ready to make a difference today?
            </Text>
          </View>
        </LinearGradient>
        <View className="bg-primary">
          <View className="flex-row justify-evenly items-center rounded-t-3xl bg-white  px-5 pt-5">
            <View className="mr-4">
              <Text className="text-xl text-center mt-3 font-outfit-semibold text-gray-900 mb-2 ">
                Main Menu
              </Text>
              <Text className="text-gray-600 text-center font-outfit-medium text-sm">
                Choose what you'd like to do today
              </Text>
            </View>
          </View>

          <View className="flex h-full bg-white">
            {cardData.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="mb-2 my-10 mx-4 bg-white rounded-2xl border-x-[1px] border-b-[1px] h-32 shadow-lg overflow-hidden"
                onPress={() => handleNavigation(index, item.id)}
              >
                <LinearGradient
                  colors={[item.color, item.color + 'CC']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="h-3"
                />

                <View className="flex-row p-4">
                  <View className="flex-1 justify-center pr-4">
                    <View className="flex-row items-center mb-2">
                      <View
                        className="w-12 h-12 rounded-full items-center justify-center mr-3"
                        style={{ backgroundColor: item.color + '20' }}
                      >
                        <Icon name={item.icon} size={30} color={item.color} />
                      </View>
                      <View className="flex-row  justify-center items-center gap-5">
                        <Text className="text-[35px] font-outfit-medium text-gray-900">
                          {item.title}
                        </Text>

                        <Icon
                          name="arrow-forward"
                          size={20}
                          color={item.color}
                        />
                      </View>
                    </View>
                  </View>

                  <View className="items-center justify-center">
                    <View
                      className="w-20 h-20 rounded-xl overflow-hidden items-center justify-center"
                      style={{ backgroundColor: item.color + '10' }}
                    >
                      <Image
                        source={item.img}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Modal
          visible={Profile}
          animationType="slide"
          transparent
          onRequestClose={toggleProfile}
        >
          <View className="flex-1 bg-black/50 justify-center ">
            <View className="bg-background rounded-2xl h-32  ">
              <View>
                <Text className='text-center text-2xl mt-3 font-outfit-semibold'>Are You Want to Logout </Text>
              </View>
              <View className="flex-row gap-4  justify-center">
                <TouchableOpacity
                  onPress={() => setProfile(false)}
                  className="mt-6 bg-red-500 py-3 px-5 rounded-lg"
                >
                  <Text className="text-center text-textWhite font-outfit-medium">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {setProfile(false),Auth?.logout()}}
                  className="mt-6 bg-red-500 py-3 px-5 rounded-lg"
                >
                  <Text className="text-center text-textWhite font-outfit-medium">
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
