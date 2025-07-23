import React, { useState } from 'react';
import {
    TouchableOpacity,
    ScrollView,
    Text,
    View,
    SafeAreaView,
    ImageSourcePropType,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    OperatorHome: undefined;
    TaskManagement: undefined;
    CleanerList: { task: TaskType };
    ReportManagement: undefined;
};

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'TaskManagement'
>;

type TaskType = {
    id: number;
    Location: string;
    description: string;
    member: string;
    img: ImageSourcePropType;
};

const routineTasks: TaskType[] = [
    {
        id: 1,
        Location: 'Yew Lee Metal',
        description: 'GPD',
        member: '10',
        img: require('../../../assets/OperationLead/Loaction_img2.jpg')
    },
    {
        id: 2,
        Location: 'Bayshore Global 28 Duxton Hill',
        description: 'GPD / GW / CC',
        member: '2',
        img: require('../../../assets/OperationLead/Loaction_img1.jpg')
    },
    {
        id: 3,
        Location: 'Milestone #12-03 (Singpost)',
        description: 'GPD/ GW',
        member: '12',
        img: require('../../../assets/OperationLead/Loaction_img3.jpg')
    },
];

const periodicTasks: TaskType[] = [
    {
        id: 1,
        Location: 'Milestone #12-03 (Singpost)',
        description: 'GPD/ GW',
        member: '12',
        img: require('../../../assets/OperationLead/Loaction_img3.jpg')
    },
    {
        id: 2,
        Location: 'Bayshore Global 28 Duxton Hill',
        description: 'GPD / GW / CC',
        member: '2',
        img: require('../../../assets/OperationLead/Loaction_img1.jpg')
    },
    {
        id: 3,
        Location: 'Yew Lee Metal',
        description: 'GPD',
        member: '10',
        img: require('../../../assets/OperationLead/Loaction_img2.jpg')
    },
];

const adHocTasks: TaskType[] = [
       {
        id: 1,
        Location: 'Bayshore Global 28 Duxton Hill',
        description: 'GPD / GW / CC',
        member: '2',
        img: require('../../../assets/OperationLead/Loaction_img1.jpg')
    },
    {
        id: 2,
        Location: 'Yew Lee Metal',
        description: 'GPD',
        member: '10',
        img: require('../../../assets/OperationLead/Loaction_img2.jpg')
    },
    {
        id: 3,
        Location: 'Milestone #12-03 (Singpost)',
        description: 'GPD/ GW',
        member: '12',
        img: require('../../../assets/OperationLead/Loaction_img3.jpg')
    },
];

const categories = ['Routine Cleaning', 'Periodic Cleaning', 'Ad-hoc Cleaning'];

export default function TaskManagement() {
    const navigation = useNavigation<NavigationProp>();
    const [selectedCategory, setSelectedCategory] = useState<string>('Routine Cleaning');

    const getFilteredTasks = () => {
        switch (selectedCategory) {
            case 'Routine Cleaning':
                return routineTasks;
            case 'Periodic Cleaning':
                return periodicTasks;
            case 'Ad-hoc Cleaning':
                return adHocTasks;
            default:
                return [];
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-4 py-2 mt-16 bg-gray-100">

                <View className="flex-row justify-between mb-4 mt-4">
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            onPress={() => setSelectedCategory(category)}
                            className={`flex-1 mx-1 py-4 rounded-xl font-outfit ${selectedCategory === category ? 'bg-blue-600' : 'bg-background'}`}
                        >
                            <Text
                                className={`text-center text-sm font-semibold ${selectedCategory === category ? 'text-white' : 'text-textDark'}`}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <ScrollView
                    className="flex-1 p-2"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                >
                    {getFilteredTasks().map((item) => (
                        <View
                            key={item.id}
                            className="mb-6">
                            <View className="relative bg-white border border-white/40 rounded-2xl overflow-hidden"
                            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <View className="p-5 rounded-2xl w-full bg-background   flex-1 gap-3 justify-between">
                                    <View className="bg-backgroundLight h-[180px] rounded-b-3xl overflow-hidden">
                                        <Image
                                            source={item.img}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                resizeMode: 'cover',
                                                
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text className="text-lg font-outfit-semibold">{item.Location}</Text>
                                        <Text className="text-textLight text-sm font-outfit">{item.description}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('CleanerList', { task: item })}
                                        activeOpacity={0.95}
                                        className="bg-slate-50 rounded-xl h-[50px] flex items-center justify-center"
                                    >
                                        <Text className="text-textDark font-outfit-bold text-[20px]">Get Start</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
