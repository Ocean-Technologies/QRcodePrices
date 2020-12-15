import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Button from '../../components/Button'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
// import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useAuth } from '../../hooks/auth'

const Home: React.FC = () => {
  const { signOut, user } = useAuth()
  const [hasCameraPermission,setHasCameraPermission] = useState<boolean | null>(null)
  const [scanned,setScanned] = useState<boolean | null>(null)

  useEffect(()=>{
    const exec = async ()=> {
      const {
        status
      } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    } 
    exec();

  },[])

  const rendeVariable = useMemo(()=>{
    if (hasCameraPermission === null) {
      return <Text> Requesting
      for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
  },[hasCameraPermission])

  const handleBarCodeScanned = useCallback(({
    type,
    data
  }) => {
    setScanned(true)
    //TODO enviar para o backend os dados de usuario e produto
    alert(`Bar code with type ${user.id} and data ${data} has been scanned!`);
  },[user])

  const handleSignOut = useCallback(()=>{
    signOut()
  },
    [signOut],
  )

  return (
    <>
    {rendeVariable && !rendeVariable ? rendeVariable : 
    
    <View style = {
        {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }
      }
    >
      <BarCodeScanner onBarCodeScanned = {
        scanned ? undefined : handleBarCodeScanned
      }
      style = {
        StyleSheet.absoluteFillObject
      }
      />

      <Button onPress={handleSignOut}> Deslogar</Button>

      {scanned && ( 
        <Button title = {
            'Tap to Scan Again'
          }
          onPress = {
            () => setScanned(false)
          }
        />
      )} 
    </View>
  }
  </>

  );
}

export default Home