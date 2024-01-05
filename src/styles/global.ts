import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
    --body-bg-color: #F6F7F8;
    --text-color: #777777;
    --border: #DDDFE0;
    --light-border: #F3F4F5;

    --black: #121212;
    --white: #ffffff;

    --gray: #ECF1F7;
    --yellow: #FFDE31;
    --light-yellow: rgba(255, 222, 49, 0.20);
    --blue: #2C80FF;
    

    --shadow: 0px 0px 0px 0px rgba(38, 43, 48, 0.02), 0px 0px 0px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.01), 0px 0px 1px 0px rgba(38, 43, 48, 0.00), 0px 0px 1px 0px rgba(38, 43, 48, 0.00);
}

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    background: var(--body-bg-color);
    color: var(--black);
}

img {
    display: block;
}

a, input, button {
    color: inherit;
}

a {
    text-decoration: none;
}

input, button {
    font-family: inherit;
    font-size: inherit;
}

`

export default GlobalStyle
