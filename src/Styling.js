import Styled from 'styled-components'

const Styling = Styled.div`
.Header {
    background-color: light-blue;
    color: black;
    padding: 0;
    margin: 0;
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
}
.Name {
    width: 60%;
    h1 {
        margin: 0;
        padding-top: 4%;
        padding-left: 5%;
    }
}
.Nav {
    display: flex;
    justify-content: right;
    width: 60%;
    margin-top: 2%;
    a {
        padding-top: 3%;
        padding-right: 8%;
        padding-left: 6%;
    }
}
.TextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: blue;
}
.TextTitle {
    font-size: 1rem;
    padding-top: 6%;
    color: #CCEEEE;
}
.TextParagraph {
    text-align: center;
    color: #CCFFCC;
    font-weight: 900;

p{
    color: yellow;
}
    }
}
`

export default Styling;