import { extendTheme } from "@chakra-ui/react";

let colors = {
    brand: {
        text: '#63708C',
        primary: '#1EB0D9',
        primary_faded: '#E0EEF4',
        wallet_bg: '#2C3341',
        text_2: '#2D3436',
        box_bg: '#10B6E8',
        btn: '#1EB0D9',
        text_3: '#232B37',
        faded_bg: '#F0FCFF'
    },


}


let fonts = {
    body: 'Poppins'
}

const theme = extendTheme({ colors })

export default theme