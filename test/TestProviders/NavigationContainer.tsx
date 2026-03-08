import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavigationContainer>{children}</NavigationContainer>
    )
}

const customRender = (ui: React.ReactElement, options?: any) => {
    return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react-native';
export { customRender as render };
