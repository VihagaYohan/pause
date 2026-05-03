import { StyleSheet } from 'react-native'

// components
import { AppTextInput } from '../../components'

const PageOne = () => {

    return (
        <AppTextInput
            placeholder="What's pulling you away from what matters?"
            multiline={true}
            keyboardType='default' />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PageOne