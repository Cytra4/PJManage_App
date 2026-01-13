import Feather from '@expo/vector-icons/Feather';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

export default function GroupLayout() {
  const router = useRouter();
  const { groupId } = useLocalSearchParams<{ groupId: string }>();

  return (
    <Stack>
      {/* Tabs 容器 */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: '小組',
          headerTitleAlign: 'center',

          // 左上角返回 index
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.replace('/');
              }}
              style={{ paddingHorizontal: 12 }}
            >
              <Feather name="arrow-left" size={24} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
