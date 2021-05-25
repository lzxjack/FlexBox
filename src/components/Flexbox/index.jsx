import React, { Fragment } from 'react';
import { nanoid } from 'nanoid';
import './index.css';

const FlexBox = () => {
    const [flexDirection, setFlexDirection] = React.useState(0);
    const [flexFrap, setFlexFrap] = React.useState(0);
    const [justifyContent, setJustifyContent] = React.useState(0);
    const [alignItems, setAlignItems] = React.useState(0);
    const [alignContent, setAlignContent] = React.useState(0);

    const [itemCount, setItemCount] = React.useState(3);
    const [width, setWidth] = React.useState(100);

    const flexDirectionVal = ['row', 'row-reverse', 'column', 'column-reverse'];
    const flexFrapVal = ['nowrap', 'wrap', 'wrap-reverse'];
    const justifyContentVal = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ];
    const alignItemsVal = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
    const alignContentVal = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch',
    ];

    return (
        <Fragment>
            <div className="head">Flex容器属性演示</div>
            <div className="btnBox">
                <div className="propFlow">
                    <div className="flowName">flex-flow</div>
                    <div className="flowValue">
                        <div className="flowProp">
                            <div className="direction">flex-direction</div>
                            <div className="directionValueBox">
                                <label
                                    className="inputBox"
                                    id={flexDirection === 0 ? 'checked' : ''}
                                >
                                    <input
                                        className="value"
                                        name="flex-direction"
                                        type="radio"
                                        onChange={e => {
                                            setFlexDirection(0);
                                        }}
                                        checked={flexDirection === 0 ? true : false}
                                    />
                                    row
                                </label>
                                <label
                                    className="inputBox"
                                    id={flexDirection === 1 ? 'checked' : ''}
                                >
                                    <input
                                        className="value"
                                        name="flex-direction"
                                        type="radio"
                                        onChange={e => {
                                            setFlexDirection(1);
                                        }}
                                        checked={flexDirection === 1 ? true : false}
                                    />
                                    row-reverse
                                </label>
                                <label
                                    className="inputBox"
                                    id={flexDirection === 2 ? 'checked' : ''}
                                >
                                    <input
                                        className="value"
                                        name="flex-direction"
                                        type="radio"
                                        onChange={e => {
                                            setFlexDirection(2);
                                        }}
                                        checked={flexDirection === 2 ? true : false}
                                    />
                                    column
                                </label>
                                <label
                                    className="inputBox"
                                    id={flexDirection === 3 ? 'checked' : ''}
                                >
                                    <input
                                        className="value"
                                        name="flex-direction"
                                        type="radio"
                                        onChange={e => {
                                            setFlexDirection(3);
                                        }}
                                        checked={flexDirection === 3 ? true : false}
                                    />
                                    column-reverse
                                </label>
                            </div>
                        </div>
                        <div className="flowProp">
                            <div className="wrap">flex-wrap</div>
                            <div className="wrapValueBox">
                                <label className="inputBox" id={flexFrap === 0 ? 'checked' : ''}>
                                    <input
                                        className="value"
                                        name="flex-wrap"
                                        type="radio"
                                        onChange={e => {
                                            setFlexFrap(0);
                                        }}
                                        checked={flexFrap === 0 ? true : false}
                                    />
                                    nowrap
                                </label>
                                <label className="inputBox" id={flexFrap === 1 ? 'checked' : ''}>
                                    <input
                                        className="value"
                                        name="flex-wrap"
                                        type="radio"
                                        onChange={e => {
                                            setFlexFrap(1);
                                        }}
                                        checked={flexFrap === 1 ? true : false}
                                    />
                                    wrap
                                </label>
                                <label className="inputBox" id={flexFrap === 2 ? 'checked' : ''}>
                                    <input
                                        className="value"
                                        name="flex-wrap"
                                        type="radio"
                                        onChange={e => {
                                            setFlexFrap(2);
                                        }}
                                        checked={flexFrap === 2 ? true : false}
                                    />
                                    wrap-reverse
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prop">
                    <div className="name">justify-content</div>
                    <div className="valueBox">
                        <label className="inputBox" id={justifyContent === 0 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(0);
                                }}
                                checked={justifyContent === 0 ? true : false}
                            />
                            flex-start
                        </label>
                        <label className="inputBox" id={justifyContent === 1 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(1);
                                }}
                                checked={justifyContent === 1 ? true : false}
                            />
                            flex-end
                        </label>
                        <label className="inputBox" id={justifyContent === 2 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(2);
                                }}
                                checked={justifyContent === 2 ? true : false}
                            />
                            center
                        </label>
                        <label className="inputBox" id={justifyContent === 3 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(3);
                                }}
                                checked={justifyContent === 3 ? true : false}
                            />
                            space-between
                        </label>
                        <label className="inputBox" id={justifyContent === 4 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(4);
                                }}
                                checked={justifyContent === 4 ? true : false}
                            />
                            space-around
                        </label>
                        <label className="inputBox" id={justifyContent === 5 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="justify-content"
                                type="radio"
                                onChange={e => {
                                    setJustifyContent(5);
                                }}
                                checked={justifyContent === 5 ? true : false}
                            />
                            space-evenly
                        </label>
                    </div>
                </div>
                <div className="prop">
                    <div className="name">align-items</div>
                    <div className="valueBox">
                        <label className="inputBox" id={alignItems === 0 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-items"
                                type="radio"
                                onChange={e => {
                                    setAlignItems(0);
                                }}
                                checked={alignItems === 0 ? true : false}
                            />
                            flex-start
                        </label>
                        <label className="inputBox" id={alignItems === 1 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-items"
                                type="radio"
                                onChange={e => {
                                    setAlignItems(1);
                                }}
                                checked={alignItems === 1 ? true : false}
                            />
                            flex-end
                        </label>
                        <label className="inputBox" id={alignItems === 2 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-items"
                                type="radio"
                                onChange={e => {
                                    setAlignItems(2);
                                }}
                                checked={alignItems === 2 ? true : false}
                            />
                            center
                        </label>
                        <label className="inputBox" id={alignItems === 3 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-items"
                                type="radio"
                                onChange={e => {
                                    setAlignItems(3);
                                }}
                                checked={alignItems === 3 ? true : false}
                            />
                            baseline
                        </label>
                        <label className="inputBox" id={alignItems === 4 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-items"
                                type="radio"
                                onChange={e => {
                                    setAlignItems(4);
                                }}
                                checked={alignItems === 4 ? true : false}
                            />
                            stretch
                        </label>
                    </div>
                </div>
                <div className="prop">
                    <div className="name">align-content</div>
                    <div className="valueBox">
                        <label className="inputBox" id={alignContent === 0 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(0);
                                }}
                                checked={alignContent === 0 ? true : false}
                            />
                            flex-start
                        </label>
                        <label className="inputBox" id={alignContent === 1 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(1);
                                }}
                                checked={alignContent === 1 ? true : false}
                            />
                            flex-end
                        </label>
                        <label className="inputBox" id={alignContent === 2 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(2);
                                }}
                                checked={alignContent === 2 ? true : false}
                            />
                            center
                        </label>
                        <label className="inputBox" id={alignContent === 3 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(3);
                                }}
                                checked={alignContent === 3 ? true : false}
                            />
                            space-between
                        </label>
                        <label className="inputBox" id={alignContent === 4 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(4);
                                }}
                                checked={alignContent === 4 ? true : false}
                            />
                            space-around
                        </label>
                        <label className="inputBox" id={alignContent === 5 ? 'checked' : ''}>
                            <input
                                className="value"
                                name="align-content"
                                type="radio"
                                onChange={e => {
                                    setAlignContent(5);
                                }}
                                checked={alignContent === 5 ? true : false}
                            />
                            stretch
                        </label>
                    </div>
                </div>
            </div>
            <div className="controlBox">
                flex容器内盒子数量：{itemCount}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 盒子宽度：{width}px
                <div
                    className="addBtn"
                    onClick={() => {
                        setItemCount(itemCount => itemCount + 1);
                    }}
                >
                    增加
                </div>
                <div
                    className="minBtn"
                    onClick={() => {
                        if (itemCount === 1) {
                            alert('最低数量为1！');
                            return;
                        }
                        setItemCount(itemCount => itemCount - 1);
                    }}
                >
                    减少
                </div>
                <div
                    className="widenBtn"
                    onClick={() => {
                        setWidth(width => width + 50);
                    }}
                >
                    变宽
                </div>
                <div
                    className="narrowBtn"
                    onClick={() => {
                        if (width === 50) {
                            alert('最小宽度为50px！');
                            return;
                        }
                        setWidth(width => width - 50);
                    }}
                >
                    变窄
                </div>
            </div>
            <div
                className="showBox"
                style={{
                    flexDirection: flexDirectionVal[flexDirection],
                    flexWrap: flexFrapVal[flexFrap],
                    justifyContent: justifyContentVal[justifyContent],
                    alignItems: alignItemsVal[alignItems],
                    alignContent: alignContentVal[alignContent],
                }}
            >
                {(() => {
                    const arr = [];
                    for (let i = 0; i < itemCount; i++) {
                        arr.push(
                            <div key={nanoid()} className="itemBox" style={{ width }}>
                                {i + 1}
                            </div>
                        );
                    }
                    return arr;
                })()}
            </div>
        </Fragment>
    );
};

export default FlexBox;
