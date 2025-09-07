import { View, Text, Pressable } from 'react-native'
import { ThemedText } from '@/presentation/components/shared/ThemedText'
import { usePermissionsStore } from '@/presentation/store/usePermissions'

const PermissionScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionsStore();




  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Pressable onPress={requestLocationPermission}>
        <ThemedText>Habilitar ubicación</ThemedText>
      </Pressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  )
}

export default PermissionScreen