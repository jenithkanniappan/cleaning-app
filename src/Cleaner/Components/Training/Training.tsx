import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Dot } from '../../../Utilites/icons';

const Training = () => {
  return (
    <SafeAreaView className="flex-1  bg-white ">
      <ScrollView
        className="flex-1  "
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-3">

                <View className='w-full h-20  flex-row  justify-between item-center py-4 px-3'>
                    <Text className='text-3xl font-outfit-semibold '>Training Schedule</Text>
                   <Dot width={30} height={30}
                   style={{ 
              transform: [{ rotateZ: '90deg' }] 
            }} />                    
                </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Training;
