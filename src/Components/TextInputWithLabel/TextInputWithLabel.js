import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from './TextInputWithLabel.style';

const TextInputWithLabel = ({
    label,
    value,
    placeHolder,
    secureTextEntry,
    onChangeText,
    props,
    
}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textLabel}>{label}</Text>
        <TextInput
            value = {value}
            placeholder= {placeHolder}
            style= {styles.inputStyle}
            onChangeText={onChangeText}
            placeholderTextColor={'gray'}
            secureTextEntry = {secureTextEntry}
            {...props}
        />
    </View>
  )
}

export default TextInputWithLabel