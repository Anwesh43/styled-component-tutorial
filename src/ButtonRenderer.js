import styled from 'styled-components'
import React,{Component} from 'react'
const Button = styled.button.attrs({
    onClick:props=>props.onClick
})`
    border-radius:10px;
    background:green;
    border:1px solid green;
    padding:5px;
    margin-top:10px;
`
const ColoredDiv = styled.div`
    width:100px;
    height:100px;
    background:yellow;
    border-radius:${props=>props.border}%;
`
export default class ButtonRenderer extends Component {
    constructor(props) {
        super(props)
        this.state = {border:0}
    }
    componentDidMount() {
        console.log("mounted")
    }
    onClick() {
        if(this.state.border == 0 || this.state.border == 50) {
            var border = this.state.border
            const dir = border==0?1:-1
            const interval = setInterval(()=>{
                console.log(border)
                border+=dir*5
                this.setState({border})
                if(border >= 50 || border<=0) {
                    clearInterval(interval)
                }
            },75)
        }
    }
    render() {
        return <div>
            <ColoredDiv border={this.state.border}>
            </ColoredDiv>
            <Button onClick={this.onClick.bind(this)}>
                ClickMe
            </Button>
        </div>
    }
}
