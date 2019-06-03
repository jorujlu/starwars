import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ShipInfo } from "./ShipInfo";

configure({adapter: new Adapter()});

describe("<ShipInfo />", () => {

    it("should render label and value for Ship Model and Name", () => {
        const wrapper = shallow(<ShipInfo currentShip={{
            name: "testName",
            model: "testModel"
        }} setLoading={() => {}} match={{params: {}}}/>);
        expect(wrapper.contains(<p><b>Model:</b></p>)).toEqual(true);
        expect(wrapper.contains(<p>testModel</p>)).toEqual(true);
    })
})