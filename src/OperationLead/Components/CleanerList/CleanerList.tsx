// import React from 'react'
// import { TouchableOpacity,Text ,View,SafeAreaView } from 'react-native';


// const workersList = [
//     {
//         id: 'W001',
//         name: 'Sabitha',
//         image: 'https://randomuser.me/api/portraits/men/32.jpg',
//         phone: '1234567890',
//     },
//     {
//         id: 'W002',
//         name: 'Thamizh',
//         image: 'https://randomuser.me/api/portraits/women/65.jpg',
//         phone: '9876543210',
//     },
//     {
//         id: 'W003',
//         name: 'Mowliyan',
//         image: 'https://randomuser.me/api/portraits/men/53.jpg',
//         phone: '4567891234',
//     },
// ];

// export default function CleanerList({ navigation }) {
//     return (
//         <SafeAreaView className="flex-1 bg-blue-50/50">
//             <View className="flex-row items-center gap-2 ps-5 mb-3">
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     {/* <Icon name="arrow-back" size={18} color="#6366f0" /> */}
//                 </TouchableOpacity>
//                 <Text className="text-xl font-bold">Workers</Text>
//             </View>

//             <TouchableOpacity
//                 onPress={() => navigation.navigate('CleanerDetails')}
//             >
//                 {workersList.map((worker, index) => (
//                     <View
//                         key={index}
//                         className="mb-6 bg-white border border-white/40 rounded-2xl overflow-hidden"
//                     >
//                         <View className="p-5 flex-row items-center gap-4">
//                             {/* <Image
//                                 source={{ uri: worker.image }}
//                                 className="w-14 h-14 rounded-full"
//                             /> */}

//                             <View className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
//                                 {/* <Icon name="person-outline" size={26} color="#6366f0" /> */}
//                             </View>
//                             <View className="flex-1">
//                                 <Text className="text-lg font-semibold text-gray-800">{worker.name}</Text>
//                                 <Text className="text-sm text-gray-500">ID: {worker.id}</Text>
//                             </View>

//                             <View className="flex-row gap-3">
//                                 <TouchableOpacity
//                                     className="bg-green-100 p-2 rounded-full"
//                                     // onPress={() => handleCall(worker.phone)}
//                                 >
//                                     {/* <Icon name="call-outline" size={20} color="#10b981" /> */}
//                                 </TouchableOpacity>

//                                 <TouchableOpacity
//                                     className="bg-blue-100 p-2 rounded-full"
//                                     // onPress={() => handleMessage(worker.phone)}
//                                 >
//                                     {/* <Icon name="chatbox-ellipses-outline" size={20} color="#6366f0" /> */}

//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 ))}
//             </TouchableOpacity>
//         </SafeAreaView>
//     )
// }



import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  CleanerList: undefined;
  CleanerDetails: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CleanerList'>;


const workersList = [
    {
        id: 'W001',
        name: 'Sabitha',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        phone: '1234567890',
    },
    {
        id: 'W002',
        name: 'Thamizh',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        phone: '9876543210',
    },
    {
        id: 'W003',
        name: 'Mowliyan',
        image: 'https://randomuser.me/api/portraits/men/53.jpg',
        phone: '4567891234',
    },
];

export default function CleanerList() {
  const navigation = useNavigation<NavigationProp>();

  const workersList = [
    {
      id: 'W001',
      name: 'Sabitha',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      phone: '1234567890',
    },
    {
      id: 'W002',
      name: 'Thamizh',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      phone: '9876543210',
    },
    {
      id: 'W003',
      name: 'Mowliyan',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      phone: '4567891234',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-blue-50/50">
      {/* <View className="flex-row items-center gap-2 ps-5 mb-3">
        <TouchableOpacity onPress={() => navigation.goBack()}/>
       
        <Text className="text-xl font-bold">Workers</Text>
      </View> */}

      {workersList.map((worker, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('CleanerDetails')}
          className='px-5 p-1 mt-5'
        >
          <View className=" bg-white border border-white/40 rounded-2xl overflow-hidden">
            <View className="p-5 flex-row items-center gap-4">
              <View className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center" />
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  {worker.name}
                </Text>
                <Text className="text-sm text-gray-500">ID: {worker.id}</Text>
              </View>
              <View className="flex-row gap-3">
                <TouchableOpacity className="bg-green-100 p-2 rounded-full" />
                <TouchableOpacity className="bg-blue-100 p-2 rounded-full" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
