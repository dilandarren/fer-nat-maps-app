import { View, Text } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { usePermissionsStore } from '../store/usePermissions'
import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { router } from 'expo-router';

const PermisionsCheckerProvider = ({children}: PropsWithChildren) => {


    const { locationStatus, checkLocationPermission } = usePermissionsStore();


    useEffect(() => {
      
        if (locationStatus === PermissionStatus.GRANTED) {
            router.replace('/map')
        } else if (locationStatus !== PermissionStatus.CHECKING) {
            router.replace('/permissions')
        }
  
    }, [locationStatus])

    useEffect(() => {
      
        checkLocationPermission();
  
    }, [])


    //todo
    //Estar pendiente cuando la aplicación cambie
    


    return <>{children}</>
}

export default PermisionsCheckerProvider