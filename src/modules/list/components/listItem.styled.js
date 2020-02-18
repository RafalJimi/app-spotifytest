import styled from 'styled-components';

export const ListItemContainer = styled.div`
    height: 50px;
    width: 100%;
    background-color: transparent;
    z-index: 5;
    transform: translate(0px);
    padding-left: 50px;

.row {
    transform: translate(-150px);
    text-align: left;
    border-top:solid 1px #252525;
    margin-left: 150px;
    margin-right: 0px;
    width: calc(100% - 120px);
    height: 52px;
}

.favo {
    float: left;
    font-size: 1.3em;
    padding-top: 7px;
    height: 40px;
    width: 118px;
    font-weight: 700;
    text-align: right;
}

.titl {
    float: left;
    padding-top: 8px;
    font-size: 1.3em;
    height: 38px;
    padding-left: 34px;
    width: calc(100% - 632px);
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
}

.auth {
    float: left;
    padding-top: 8px;
    font-size: 1.3em;
    height: 38px;
    padding-left: 50px;
    width: 235px;
    font-weight: 700;
    white-space: nowrap;
}

.date {
    float: left;
    padding-top: 8px;
    font-size: 1.3em;
    height: 39px;
    padding-left: 25px;
    width: 150px;
    font-weight: 700;
}
`