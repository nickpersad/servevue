import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, Button, StyleSheet, Text, View } from 'react-native';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            context: null,
        };
        this.checkAuthentication = this.checkAuthentication.bind(this);
    }
}