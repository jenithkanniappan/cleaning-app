// import React, { useEffect, useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Pressable,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // import { CheckBox } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
// import CheckBox from '@react-native-community/checkbox';

// // import FooterNav from './FooterNav'; // Optional component

// const taskList = [
//   {
//     id: 1,
//     title: 'Clean common area - Block 207A',
//     image: require('../../../assets/img.png'),
//     color: "bg-red-200",
//     member: '10',
//   },
//   {
//     id: 2,
//     title: 'Toilet sanitation check - Block 103',
//     description: 'Toilet sanitation check - Block 103',
//     image: require('../../../assets/img.png'),
//      color: "bg-purple-200"
//   },
//   {
//     id: 3,
//     title: 'Mop corridor and stairs - Block 88B',
//     image: require('../../../assets/img.png'),
//      color: "bg-pink-200"
//   },
//   {
//     id: 4,
//     title: 'Mop corridor and stairs - Block 88B',
//     image: require('../../../assets/img.png'),
//      color: "bg-yellow-200"
//   },
// ];

// export default function Task() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://192.168.0.112:5400/api/v1/CardData')
//       .then(response => {
//         console.log(response, 'sadf');
//         setData(response.data.data);
//       })
//       .catch(error => {
//         console.error('Axios error:', error);
//       });
//   }, []);
//   const [isSelected, setSelection] = useState(false);
//   const navigation = useNavigation();
//   const [agreed, setAgreed] = useState(false);

//   const markComplete = () => {
//     Alert.alert('Success', 'Tasks marked as completed!');
//   };

//   return (
//     <View>
//       <LinearGradient
//         colors={['#ffffff', '#e0f7ff']}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         className=" container w-full h-full"
//       >
//         <View className=" max-w-full ">
//           <Text className="text-[#00C6F7] text-center font-bold text-xl my-4">
//             Tasks
//           </Text>

//          <ScrollView className="px-4 pt-2 space-y-4 ">
//   {taskList.map((task, id) => (
//     <TouchableOpacity
//       key={id}
//       className={`${task.color} rounded-2xl shadow p-4 border-[0.5px+]  mb-3`}
//     >
//       <View className="flex-row items-center">
//         {/* <Image
//           source={task.image}
//           className="w-20 h-20 rounded-lg mr-4"
//           resizeMode="cover"
//         /> */}

//         <View className="flex-1">
//           <Text className="text-lg font-bold text-center text-gray-800 font-robo-bold">
//             {task.title}
//           </Text>
//         </View>
//         <Icon name="arrow-right" size={20} color="#aaa" />
//       </View>
//     </TouchableOpacity>
//   ))}

//   <View className="flex-row items-center space-x-2 mt-6">
//     <CheckBox
//       value={isSelected}
//       onValueChange={setSelection}
//       tintColors={{ true: '#007aff', false: '#ccc' }}
//       className="w-5 h-5 border border-gray-400"
//     />
//     <Text className="text-sm text-gray-700">
//       I confirm all tasks are completed.
//     </Text>
//   </View>

//   <TouchableOpacity
//     disabled={!isSelected}
//     onPress={markComplete}
//     className={`w-full py-3 rounded-full mt-4 ${
//       isSelected ? 'bg-[#007aff]' : 'bg-gray-300'
//     }`}
//   >
//     <Text className="text-white text-center font-semibold text-base">
//       Mark as Complete
//     </Text>
//   </TouchableOpacity>
// </ScrollView>

//         </View>
//       </LinearGradient>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   checkbox: {
//     alignSelf: 'center',
//   },
//   label: {
//     margin: 8,
//   },
// });

import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import CheckBox from '@react-native-community/checkbox';

const { width } = Dimensions.get('window');

interface task {
  id: number;
  title: string;
  // image: any;
  completed: Boolean;
  icon: string;
}
const taskList: task[] = [
  {
    id: 1,
    title: 'Clean common area - Block 207A',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'cleaning-services',
  },
  {
    id: 2,
    title: 'Toilet sanitation check - Block 103',
  
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'water-drop',
  },
  {
    id: 3,
    title: 'Mop corridor and stairs - Block 88B',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'mop',
  },
  {
    id: 4,
    title: 'Vacuum carpet areas - Block 45C',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'soap',
  },
  {
    id: 5,
    title: 'Vacuum carpet areas - Block 45C',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'soap',
  },
  {
    id: 6,
    title: 'Vacuum carpet areas - Block 45C',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'soap',
  },
  {
    id: 7,
    title: 'Vacuum carpet areas - Block 45C',
    // image: require('../../../../assets/img.png'),
    completed: false,
    icon: 'soap',
  },
];

export default function Task() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState(taskList);
  const [isSelected, setSelection] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get('http://192.168.0.112:5400/api/v1/CardData')
  //     .then(response => {
  //       console.log(response, 'API Response');
  //       setData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error('Axios error:', error);
  //     });
  // }, []);

  const handleTaskPress = (id: number) => {
     setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
    
  };


console.log(tasks.filter(item => item.completed ==false),"xdfhgsdfgf")
  const markAllComplete = () => {
    Alert.alert('Confirm', 'Mark all tasks as completed?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => {
          setTasks(prev => prev.map(task => ({ ...task, completed: true })));
          Alert.alert('Success', 'All tasks marked as completed!');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#f0f9ff', '#e0f2fe', '#bae6fd']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View className="pt-12 pb-6 px-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-[#0369a1] tracking-wide">
              Daily Tasks
            </Text>
            <TouchableOpacity className="p-2 rounded-full bg-white/30">
              <Icon name="bell" size={20} color="#0369a1" />
            </TouchableOpacity>
          </View>
          <View></View>

          <View className="mt-4 bg-white/40 rounded-2xl p-4 backdrop-blur-sm">
            <View className="flex-row justify-between items-center">
              <View className="items-center">
                <Text className="text-lg font-bold text-[#0369a1]">
                  {tasks.filter(item => item.completed).length}
                </Text>
                <Text className="text-sm text-[#0369a1]/70">Completed</Text>
              </View>
              <View className="items-center">
                <Text className="text-lg font-bold text-[#0369a1]">
                  {tasks.filter(item => item.completed == false).length}
            
                </Text>
                <Text className="text-sm text-[#0369a1]/70">Remaining</Text>
              </View>
              <View className="items-center">
                <Text className="text-lg font-bold text-[#0369a1]">
                  {Math.round(
                    (tasks.filter(item => item.completed).length / tasks.length) *
                      100,
                  )}
                  %
                </Text>
                <Text className="text-sm text-[#0369a1]/70">Progress</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          className="flex-1 px-4 "
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              onPress={() => handleTaskPress(task.id)}
              className={` w-full  h-24   bg-white border-[0.5px] rounded-2xl mb-4  ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              <View className="flex-row justify-center items-center my-auto">
                <View className="flex-1  justify-center ">
                  <Text className="text-2xl  text-center my-4 font-robo text-black mb-1">
                    {task.title}
                  </Text>

                 

                 
                </View>

                <View className="items-center justify-center mr-4">
                  {task.completed ? (
                    <View className="w-8 h-8 bg-green-500 rounded-full  items-center justify-center">
                      <Icon name="check" size={16} color="white" />
                    </View>
                  ) : (
                    <Icon name="chevron-right" size={20} color="#0369a1" />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View className="mt-6 bg-white/40 rounded-3xl p-6 backdrop-blur-sm">
          <View className="flex-row items-center space-x-3 mb-4 gap-4">
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{ true: '#0369a1', false: '#94a3b8' }}
              style={styles.checkbox}
            />
            <Text className="text-base text-gray-700 flex-1">
              I confirm all tasks are completed and areas are clean
            </Text>
          </View>

          <TouchableOpacity
            disabled={!isSelected}
            onPress={markAllComplete}
            className={`w-full py-4 rounded-2xl ${
              isSelected ? 'bg-[#0369a1]' : 'bg-gray-300'
            }`}
            style={styles.completeButton}
          >
            <Text className="text-white text-center font-bold text-lg">
              Mark All Complete
            </Text>
          </TouchableOpacity>
        </View>

        {/* <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View className="items-center mb-6">
                <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-4">
                  <Icon name="check-circle" size={40} color="#0369a1" />
                </View>
                <Text className="text-xl font-bold text-gray-800 text-center mb-2">
                  Complete Task
                </Text>
                <Text className="text-gray-600 text-center">
                  {selectedTask?.title}
                </Text>
              </View>

              <Text className="text-gray-700 text-center mb-8">
                Are you sure you want to mark this task as completed?
              </Text> */}

              {/* <View className="flex-row space-x-4 gap-3">
                <TouchableOpacity
                  onPress={() => setShowModal(false)}
                  className="flex-1 py-3 rounded-2xl border-2 border-gray-300"
                >
                  <Text className="text-gray-600 text-center font-semibold text-base">
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={markTaskComplete}
                  className="flex-1 py-3 rounded-2xl bg-[#0369a1]"
                >
                  <Text className="text-white text-center font-semibold text-base">
                    Yes, Complete
                  </Text>
                </TouchableOpacity>
              </View> */}
            {/* </View>
          </View>
        </Modal> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  completeButton: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
