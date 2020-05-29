import React from "react";
import { Button, Input } from 'antd';
import { CaretUpOutlined, CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, ArrowLeftOutlined, WindowsOutlined, SaveOutlined } from '@ant-design/icons';
import '../style/keydown.css'

class keydown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backColor: null,
            beibanColor: null,
            keyLightColor: null,
            keyTopColor: null,
            key: [],
            keyColor: '',
            btn: {
                contentTopLeft: [
                    { text: 'Esc', style: { marginRight: '50px', marginLeft: '0' }, },
                    { text: 'F1', },
                    { text: 'F2', },
                    { text: 'F3', },
                    { text: 'F4', style: { marginRight: '30px' }, },
                    { text: 'F5', },
                    { text: 'F6', },
                    { text: 'F7', },
                    { text: 'F8', style: { marginRight: '30px' }, },
                    { text: 'F9', },
                    { text: 'F10', },
                    { text: 'F11', },
                    { text: 'F12', },
                ],
                contentTopCenter: [
                    { text: 'Sys', },
                    { text: 'Scrol', },
                    { text: 'Break', },
                ],
                centerInfo: [
                    { text: 'Insert', },
                    { text: 'Home', },
                    { text: 'Pgup', },
                    { text: 'Delete', },
                    { text: 'End', },
                    { text: 'Pgon', },
                ],
                centerDirection: [
                    { text: null, className: 'keyClass-none', },
                    { text: CaretUpOutlined, },
                    { text: null, className: 'keyClass-none', },
                    { text: CaretLeftOutlined, },
                    { text: CaretDownOutlined, },
                    { text: CaretRightOutlined, },
                ],
                bottomRight1: [
                    { text: 'Num', },
                    { text: '/', },
                    { text: '*', },


                    { text: '7', },
                    { text: '8', },
                    { text: '9', },

                    { text: '4', },
                    { text: '5', },
                    { text: '6', },
                    { text: '1', },
                    { text: '2', },
                    { text: '3', },

                    { text: '0', style: { width: '106px' } },
                    { text: '.', },
                ],
                bottomRight2: [
                    { text: '—', },
                    { text: '+', style: { height: '102px' } },
                    { text: 'Enter', style: { height: '102px' } },
                ],
                bottomLeft: [
                    [
                        { text: '~', },
                        { text: '1', },
                        { text: '2', },
                        { text: '3', },
                        { text: '4', },
                        { text: '5', },
                        { text: '6', },
                        { text: '7', },
                        { text: '8', },
                        { text: '9', },
                        { text: '0', },
                        { text: '-', },
                        { text: '=', },
                        { text: "Back Space", style: { width: '90px' } },
                    ],
                    [
                        { text: 'Tab', style: { width: '95px' } },
                        { text: 'Q', },
                        { text: 'W', },
                        { text: 'E', },
                        { text: 'R', },
                        { text: 'T', },
                        { text: 'Y', },
                        { text: 'U', },
                        { text: 'I', },
                        { text: 'O', },
                        { text: 'P', },
                        { text: '[', },
                        { text: ']', },
                        { text: '\\', style: { width: '70px' } },
                    ],
                    [
                        { text: 'Caps', style: { width: '110px' } },
                        { text: 'A', },
                        { text: 'S', },
                        { text: 'D', },
                        { text: 'F', },
                        { text: 'G', },
                        { text: 'H', },
                        { text: 'J', },
                        { text: 'K', },
                        { text: 'L', },
                        { text: ';', },
                        { text: '\'', },
                        { text: 'Enter', style: { width: '100px' } },
                    ],
                    [
                        { text: 'Shift', style: { width: '125px' } },
                        { text: 'Z', },
                        { text: 'X', },
                        { text: 'C', },
                        { text: 'V', },
                        { text: 'B', },
                        { text: 'N', },
                        { text: 'M', },
                        { text: '<', },
                        { text: '>', },
                        { text: '?', },
                        { text: 'Shift', style: { width: '130px' } },
                    ],
                    [{ text: 'Ctrl' },
                    { text: WindowsOutlined, isIcon: true, },
                    { text: 'Alt', },
                    { text: '空格', style: { width: '430px' } },
                    { text: 'Alt', },
                    { text: WindowsOutlined, isIcon: true, },
                    { text: SaveOutlined, isIcon: true, },
                    { text: 'Ctrl', },]

                ]
            },
            light: [
                'Num', 'Caps', 'Scroll'
            ]
        };
    }

    domSwitch = (e, className, keyLightColor,keyTopColor) => {
        if (e.isIcon) {
            return <div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                <e.text />
            </div>
        } else {
            return <div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                {e.text}
            </div>
        }
    }

    onChangeColor(type, e) {
        console.log(type, e.target.value)
        this.setState({ [type]: e.target.value })
    }

    orginColor(style, color, keyTopColor) {
        const keyStyle = style ? JSON.parse(JSON.stringify(style)) : {};
        var newStyle = Object.assign(keyStyle, color ? { 'color': color } : {}, keyTopColor ? { 'background': keyTopColor } : {});
        return newStyle
    }

    render() {
        const { light, btn, backColor, beibanColor, keyLightColor, keyTopColor } = this.state;
        let className = 'keyClass';
        return (
            <div>
                <div className={'btn-info'}>
                    <div className={'color-btn'}>
                        <Button className={'btn'} >背板色</Button>
                        <Input type={'color'} onChange={this.onChangeColor.bind(this, 'beibanColor')} />
                        {beibanColor}
                    </div>

                    <div className={'color-btn'}>
                        <Button className={'btn'} >外壳色</Button>
                        <Input type={'color'} onChange={this.onChangeColor.bind(this, 'backColor')} />
                        {backColor}
                    </div>

                    <div className={'color-btn'}>
                        <Button className={'btn'} >按键灯光色</Button>
                        <Input type={'color'} onChange={this.onChangeColor.bind(this, 'keyLightColor')} />
                        {keyLightColor}
                    </div>

                    <div className={'color-btn'}>
                        <Button className={'btn'} >键帽色</Button>
                        <Input type={'color'} onChange={this.onChangeColor.bind(this, 'keyTopColor')} />
                        {keyTopColor}
                    </div>
                </div>
                <div className="keyDown" style={backColor && { 'backgroundColor': backColor }}>
                    <div className="lyout-top">

                    </div>
                    <div className="lyout-content" style={beibanColor && { 'backgroundColor': beibanColor }}>
                        <div className="content-top">
                            <div className="top-left">
                                {
                                    btn.contentTopLeft.map(e => {
                                        return (<div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)} >
                                            {e.text}
                                        </div>)
                                    })
                                }
                            </div>
                            <div className="top-center">

                                {
                                    btn.contentTopCenter.map(e => {
                                        return (<div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                                            {e.text}
                                        </div>)
                                    })
                                }
                            </div>
                            <div className="top-right">
                                <div className={'light-lyout'}>
                                    {
                                        light.map(e => {
                                            return (
                                                <div className={'light-div'}>
                                                    <span></span>
                                                    <div>{e}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="content-bottom">
                            <div className="bottom-left">
                                {
                                    btn.bottomLeft.map(e => {
                                        return (
                                            <div className="bottom-left-chidlren">
                                                {
                                                    e.map(item => {
                                                        return this.domSwitch(item, className, keyLightColor,keyTopColor)
                                                    })
                                                }
                                            </div>

                                        )
                                    })
                                }

                            </div>
                            <div className="bottom-center">
                                <div className="center-info">
                                    {
                                        btn.centerInfo.map(e => {
                                            return (<div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                                                {e.text}
                                            </div>)
                                        })
                                    }
                                </div>
                                <div className="center-direction">
                                    {
                                        btn.centerDirection.map(e => {
                                            return (
                                                e.text ? <div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                                                    <e.text />
                                                </div> : <div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="bottom-right">

                                <div className={'bottom-right-1'}>
                                    {
                                        btn.bottomRight1.map(e => {
                                            return (<div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                                                {e.text}
                                            </div>)
                                        })
                                    }
                                </div>
                                <div className={'bottom-right-2'}>
                                    {
                                        btn.bottomRight2.map(e => {
                                            return (<div className={e.className ? className : className} style={this.orginColor(e.style, keyLightColor, keyTopColor)}>
                                                {e.text}
                                            </div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default keydown;