import React from 'react';
import { StyleSheet, View } from 'react-native';

interface TabletLayoutProps {
    children: React.ReactNode
}

const TabletLayout: React.FC<TabletLayoutProps> = ({ children }) => {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default TabletLayout