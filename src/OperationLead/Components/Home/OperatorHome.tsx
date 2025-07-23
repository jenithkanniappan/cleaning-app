// import React, { useState } from 'react';
// import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { Bell,Close,Grid,Quality,Report,Survey,Task,Training,Workers,} from '../../../Utilites/icons';
//  type OperatorScreenProps =NativeStackNavigationProp<
//   RootStackParamList,
//   'OperatorHome'
// >;
// type RootStackParamList = {
//   OperatorHome: undefined;
//   TaskManagement: undefined;
//   CleanerList: undefined;
//   ReportManagement: undefined;
// };
// type ScreenNames = "OperatorHome" | "TaskManagement" | "ReportManagement"; 

// type NavigationProp = {
//   navigation:OperatorScreenProps
// }

// export default function OperatorHome({navigation}:NavigationProp) {

//   const [Profile, setProfile] = useState(false);
//   const toggleProfile = () => setProfile(!Profile);
//   const details = [
//     {
//       User_name: 'User_Name',
//       User_Id: 'OP2025101',
//       User_Email: 'user123@gmail.come'
//     },
//   ]

//   const [Notification, setNotification] = useState(false)
//   const toggleNotification = () => setNotification(!Notification);
//   const Message = [
//     {
//       id: 1,
//       Message_title: '168 Trading',
//       Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
//     },
//     {
//       id: 2,
//       Message_title: 'Yew Lee Metal',
//       Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
//     },
//     {
//       id: 3,
//       Message_title: 'Hermes (Wheelock Place #09-01)',
//       Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
//     },
//     {
//       id: 4,
//       Message_title: 'Bayshore Global 28 Duxton Hill #2.3',
//       Message_content: 'Dept: GPD/ GW/ CC | Frequency: Quarterly (2-5-8-11)'
//     },
//     {
//       id: 5,
//       Message_title: 'Bulgari NAC Twr B #11-03',
//       Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
//     },
//     {
//       id: 6,
//       Message_title: "CHS S'pore (1 Finlayson Green, #06-01)",
//       Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
//     },
//     {
//       id: 7,
//       Message_title: 'CVC Asia Pacific, MBFC Twr 2',
//       Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
//     },
//     {
//       id: 8,
//       Message_title: 'Embassy of Brazil, United Sq #29-01',
//       Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
//     },
//     {
//       id: 9,
//       Message_title: 'Fidelity, Asia Sq Twr 1 #27-01',
//       Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
//     },

//   ];

//   type menuItems={
//     id: number,
//     title: string,
//     icon : any,
//     navigateTo: string,

//   }
//   const menuItems:menuItems[] = [
//     {
//       id:1,
//       title: 'Task Management',
//       icon: <Task stroke="#3B82F6" width={36} />,
//       navigateTo: 'TaskManagement',

//     },
//     {
//        id:2,
//       title: 'Cleaner',
//       icon: <Workers stroke="#10B981" width={36} />,
//       navigateTo: 'CleanerList',

//     },
//     {
//        id:3,
//       title: 'Report Management',
//       icon: <Report stroke="#EF4444" width={36}/>,
//       navigateTo: '',

//     },
//     {
//        id:4,
//       title: 'Training Management',
//       icon: <Training stroke="#F97316" width={40} height={40} />,
//       navigateTo: '',

//     },
//     {
//        id:5,
//       title: 'Quality Management',
//       icon: <Quality stroke="#8B5CF6" width={40} height={40} />,
//       navigateTo: '',

//     },
//     {
//        id:6,
//       title: 'Survey Management',
//       icon: <Survey stroke="#06B6D4" width={40} height={40} />,
//       navigateTo: '',

//     },
//   ];
// const handleNavigation=(id:number)=>{

//   const navigateById : menuItems[] = menuItems.filter((item)=>item.id == id  )
// console.log(navigateById,"Asdfasdfasfasd")
// const navigationByName:string = navigateById[0].navigateTo
// console.log(navigationByName,"asdfasdf")
// navigation.navigate(navigationByName as ScreenNames)

// }
//   return (
//     <SafeAreaView className='bg-primary'>
//       <View className="bg-primary h-full">

//         <View className="flex-row justify-between items-center px-5 pt-5">
//           <TouchableOpacity onPress={toggleProfile}>
//             <Grid width={30} height={28} stroke="white" />
//           </TouchableOpacity>
//           <View className='flex items-center'>
//             <Text className="text-textWhite text-[30px] font-outfit">Kleenmatic</Text>
//             <Text className="text-center text-textWhite">Professional Cleaning Service</Text>
//           </View>
//           <TouchableOpacity onPress={toggleNotification}>
//             <Bell width={30} height={28} stroke="white" />
//           </TouchableOpacity>
//         </View>

//         <View className="bg-background flex-1 h-full w-full mt-[18px] rounded-t-3xl px-6 py-8">
//           <ScrollView
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={{ paddingBottom: 20 }}
//           >
//             <View className="flex-row flex-wrap justify-between gap-y-6">
//               {menuItems.map((item, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => handleNavigation(item.id)}
//                   className="w-[48%] bg-white  rounded-full p-4 shadow-lg shadow-gray-200 "
//                 >
//                   <View className="items-center">

//                     <View
//                       className='w-20 h-20  mb-3 justify-center items-center shadow-s shadow-textLight border border-gray-300 rounded-lg' >
//                       {item.icon}
//                     </View>

//                     <Text className="text-[12px] font-extrabold text-textDark text-center leading-4">
//                       {item.title}
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//         </View>


//         <Modal visible={Profile} animationType="slide" transparent onRequestClose={toggleProfile}>
//           <View className="flex-1 bg-black/50 justify-end">
//             {details.map((userDetails, index) => (
//               <View key={index} className="bg-background rounded-t-2xl p-6">
//                 <View className="flex-row justify-between items-center">
//                   <Text className="text-lg font-bold mb-4 text-textDark">Profile</Text>
//                   <TouchableOpacity onPress={toggleProfile}>
//                     <Close color="red" />
//                   </TouchableOpacity>
//                 </View>
//                 <Text className="text-textDark">Name: {userDetails.User_name}</Text>
//                 <Text className="text-textDark">ID: {userDetails.User_Id}</Text>
//                 <Text className="text-textDark">Email: {userDetails.User_Email}</Text>

//                 <TouchableOpacity
//                   onPress={() => setProfile(false)}
//                   className="mt-6 bg-red-500 py-3 rounded-lg">
//                   <Text className="text-center text-textWhite font-bold">Logout</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         </Modal>

//         <Modal
//           visible={Notification}
//           animationType="slide"
//           transparent
//           onRequestClose={toggleNotification}>

//           <View className="bg-black/50 flex-1 justify-end">
//             <View className="bg-background p-6 h-[80%] rounded-t-2xl">
//               <View className="flex-row justify-between items-center">
//                 <Text className="text-lg font-bold mb-4 text-textDark">Notifications</Text>
//                 <TouchableOpacity onPress={toggleNotification}>
//                   <Close color="red" />
//                 </TouchableOpacity>
//               </View>

//               <ScrollView className="space-y-4"
//                 showsVerticalScrollIndicator={false}>
//                 {Message.length > 0 ? (
//                   Message.map((notification, i) => (
//                     <View
//                       key={i}
//                       className="bg-backgroundLight rounded-lg p-4 border border-backgroundDark mb-3">
//                       <Text className="text-sm font-semibold text-textDark">
//                         {notification.Message_title}
//                       </Text>
//                       <Text className="text-xs text-textLight mt-1">
//                         {notification.Message_content}
//                       </Text>
//                     </View>
//                   ))
//                 ) : (
//                   <Text className="text-textLight">No notifications</Text>
//                 )}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// }


import React, { useState } from 'react';
import { Image, ImageSourcePropType, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Bell, Close, Grid, Quality, Report, Survey, Task, Training, Workers, } from '../../../Utilites/icons';
type OperatorScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'OperatorHome'
>;
type RootStackParamList = {
  OperatorHome: undefined;
  TaskManagement: undefined;
  CleanerList: undefined;
  ReportManagement: undefined;
};
type ScreenNames = "OperatorHome" | "TaskManagement" | "ReportManagement";

type NavigationProp = {
  navigation: OperatorScreenProps
}

export default function OperatorHome({ navigation }: NavigationProp) {

  const [Profile, setProfile] = useState(false);
  const toggleProfile = () => setProfile(!Profile);
  const details = [
    {
      User_name: 'User_Name',
      User_Id: 'OP2025101',
      User_Email: 'user123@gmail.come',
      User_Img: require('../../../assets/OperationLead/User/user.jpg')
    },
  ]

  const [Notification, setNotification] = useState(false)
  const toggleNotification = () => setNotification(!Notification);
  const Message = [
    {
      id: 1,
      Message_title: '168 Trading',
      Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
    },
    {
      id: 2,
      Message_title: 'Yew Lee Metal',
      Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
    },
    {
      id: 3,
      Message_title: 'Hermes (Wheelock Place #09-01)',
      Message_content: 'Contact: Adrian | Dept: GPD | Frequency: Monthly'
    },
    {
      id: 4,
      Message_title: 'Bayshore Global 28 Duxton Hill #2.3',
      Message_content: 'Dept: GPD/ GW/ CC | Frequency: Quarterly (2-5-8-11)'
    },
    {
      id: 5,
      Message_title: 'Bulgari NAC Twr B #11-03',
      Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
    },
    {
      id: 6,
      Message_title: "CHS S'pore (1 Finlayson Green, #06-01)",
      Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
    },
    {
      id: 7,
      Message_title: 'CVC Asia Pacific, MBFC Twr 2',
      Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
    },
    {
      id: 8,
      Message_title: 'Embassy of Brazil, United Sq #29-01',
      Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
    },
    {
      id: 9,
      Message_title: 'Fidelity, Asia Sq Twr 1 #27-01',
      Message_content: 'Dept: GPD | Frequency: Quarterly (3-6-9-12)'
    },

  ];

  type menuItems = {
    id: number,
    title: string,
    icon: ImageSourcePropType,
    navigateTo: string,

  }
  const menuItems: menuItems[] = [
    {
      id: 1,
      title: 'Task Management',
      icon: require('../../../assets/OperationLead/Icons/task.png'),
      navigateTo: 'TaskManagement',

    },
    {
      id: 2,
      title: 'Cleaner',
      icon: require('../../../assets/OperationLead/Icons/cleaner.png'),
      navigateTo: 'CleanerList',

    },
    {
      id: 3,
      title: 'Report Management',
      icon: require('../../../assets/OperationLead/Icons/report.png'),
      navigateTo: '',

    },
    {
      id: 4,
      title: 'Training Management',
      icon: require('../../../assets/OperationLead/Icons/training.png'),
      navigateTo: '',

    },
    {
      id: 5,
      title: 'Quality Management',
      icon: require('../../../assets/OperationLead/Icons/quality.png'),
      navigateTo: '',

    },
    {
      id: 6,
      title: 'Survey Management',
      icon: require('../../../assets/OperationLead/Icons/survey.png'),
      navigateTo: '',

    },

  ];
  const handleNavigation = (id: number) => {

    const navigateById: menuItems[] = menuItems.filter((item) => item.id == id)
    console.log(navigateById, "Asdfasdfasfasd")
    const navigationByName: string = navigateById[0].navigateTo
    console.log(navigationByName, "asdfasdf")
    navigation.navigate(navigationByName as ScreenNames)

  }
  return (
    <SafeAreaView className='bg-primary'>
      <View className="bg-primary h-full">

        <View className="flex-row justify-between items-center px-5 pt-5">
          <TouchableOpacity onPress={toggleProfile}>
            <Grid width={30} height={28} stroke="white" />
          </TouchableOpacity>
          <View className='flex items-center'>
            <Text className="text-textWhite text-[30px] font-outfit-extrabold">Kleenmatic</Text>
            <Text className="text-center text-textWhite font-outfit">Professional Cleaning Service</Text>
          </View>
          <TouchableOpacity onPress={toggleNotification}>
            <Bell width={30} height={28} stroke="white" />
          </TouchableOpacity>
        </View>

        <View className="bg-background flex-1 h-full w-full mt-[18px] rounded-t-3xl px-6 py-8">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="flex flex-row flex-wrap justify-around  ">
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleNavigation(item.id)}
                  className="p-5"
                >
                  <View className="flex items-center">
                    <Image
                      source={item.icon}
                      style={{
                        width: 120,
                        height: 120,
                        marginBottom: 10,

                      }}
                      className='  '
                    />
                    <Text className="  w-full text-[14px] font-outfit-extrabold text-center text-textDark">
                      {item.title}
                    </Text>
                  </View>

                </TouchableOpacity>
              ))}
            </View>

          </ScrollView>
        </View>


        <Modal
          visible={Profile}
          animationType="slide"
          transparent
          onRequestClose={toggleProfile}>

          <View className="flex-1 bg-black/60 justify-end ">
            {details.map((userDetails, index) => (
              <View key={index} className="  bg-background rounded-t-3xl min-h-[50%] p-6 shadow-2xl">


                <View className='items-end '>
                  <TouchableOpacity
                    onPress={toggleProfile}
                    className=" flex justify-center items-center w-10 h-10 rounded-full">
                    <Close color="red" width={40} />
                  </TouchableOpacity>
                </View>

                <View className="items-center mb-8 gap-y-5">
                  <View className="h-[120px] w-[120px] rounded-full border border-backgroundLight  overflow-hidden" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Image source={userDetails.User_Img}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',

                      }} 
                      />

                  </View>
                  <Text className="text-xl font-semibold text-textDark">{userDetails.User_name}</Text>
                  <Text className="text-sm text-textLight">Operation lead</Text>
                  <Text className="text-sm text-textLight">{userDetails.User_Email}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setProfile(false)}
                  className="bg-red-500 py-4 rounded-xl shadow-lg border border-red-200">
                  <Text className="text-center text-white font-bold text-lg">Sign Out</Text>
                </TouchableOpacity>

              </View>
            ))}
          </View>
        </Modal>

        <Modal
          visible={Notification}
          animationType="slide"
          transparent
          onRequestClose={toggleNotification}>

          <View className="bg-black/50 flex-1 justify-end">
            <View className="bg-background p-6 h-[80%] rounded-t-2xl">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-bold mb-4 text-textDark">Notifications</Text>
                <TouchableOpacity onPress={toggleNotification}>
                  <Close color="red" />
                </TouchableOpacity>
              </View>

              <ScrollView className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {Message.length > 0 ? (
                  Message.map((notification, i) => (
                    <View
                      key={i}
                      className="bg-backgroundLight rounded-lg p-4 border border-backgroundDark mb-3">
                      <Text className="text-sm font-semibold text-textDark">
                        {notification.Message_title}
                      </Text>
                      <Text className="text-xs text-textLight mt-1">
                        {notification.Message_content}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text className="text-textLight">No notifications</Text>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}