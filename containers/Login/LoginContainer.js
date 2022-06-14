import React, { useState } from 'react';
import {
    Button,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    cardContainer,
    logoContainer,
    btnProps,
    wrapperStyles,
    title,
    titleCaption,
    loginButton,
    loginButtonLabel,
    input,
    inputStyle,
    labelStyle,
    placeholderStyle,
    textErrorStyle,
} from './styles';
import { TextInput } from 'react-native-element-textinput';

function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setpasswordError] = useState('');

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const triggerLogin = () => {
        if (emailError === '' && password !== '') {
            navigation.navigate('Details');
        }
        if(email === '') {
            setEmailError('Email cannot be empty')
        }
        if(password === '') {
            setpasswordError('Password cannot be empty')
        }
    }

    const validateEmail = (email) => {
        setEmail(email);
        if(email === '') {
            setEmailError('Email cannot be empty')
        } else if (emailRegex.test(email)) {
            setEmailError('')
        } else {
            setEmailError('Please enter a valid E-Mail ID')
        }
    }

    const validatePassword = (password) => {
        if (password === '') {
            setpasswordError('Password cannot be empty');
        } else {
            setPassword(password);
            setpasswordError('');
        }
    }

    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={cardContainer}>
                <View style={{ paddingVertical: 20 }}>
                    <TextInput
                        value={email}
                        textError={emailError}
                        style={input}
                        inputStyle={inputStyle}
                        labelStyle={labelStyle}
                        placeholderStyle={placeholderStyle}
                        textErrorStyle={textErrorStyle}
                        label="Enter E-Mail ID"
                        placeholder="Input your email"
                        placeholderTextColor="gray"
                        focusColor="blue"
                        onChangeText={email => {
                            validateEmail(email);
                        }}
                    />
                </View>
                <View>
                    <TextInput
                        value={password}
                        textError={passwordError}
                        style={input}
                        inputStyle={inputStyle}
                        labelStyle={labelStyle}
                        placeholderStyle={placeholderStyle}
                        textErrorStyle={textErrorStyle}
                        label="Password"
                        placeholder="Input your password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        onChangeText={password => {
                            validatePassword(password);
                        }}
                    />
                </View>
                <TouchableOpacity onPress={triggerLogin} style={loginButton}>
                    <Text style={loginButtonLabel}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;