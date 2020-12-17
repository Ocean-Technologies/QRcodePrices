import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  align-self: stretch;
  height: 60px;
  background: #6548A3;
  border-radius: 10px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`
export const ButtonText = styled.Text`
  font-family: sans-serif;
  color: #fff;
  font-size: 18px;
`