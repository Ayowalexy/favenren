import { extendTheme } from "@chakra-ui/react";

let colors = {
    brand: {
        text: '#63708C',
        primary: '#1EB0D9',
        primary_faded: '#E0EEF4',
        wallet_bg: '#2C3341'
    },


}


let fonts = {
    body: 'Poppins'
}

const theme = extendTheme({ colors })

export default theme