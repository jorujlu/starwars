import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Ship from "./Ship";

configure({adapter: new Adapter()});

describe("<Ship />", () => {

    it("should render paragraphs for name, model, and manufacturer of the ship", () => {
        const wrapper = shallow(<Ship name={"testName"} model={"testModel"} manufacturer={"testManufacturer"}/>);
        expect(wrapper.contains(<h3>testName</h3>)).toEqual(true);
        expect(wrapper.contains(<p>testModel</p>)).toEqual(true);
        expect(wrapper.contains(<p>testManufacturer</p>)).toEqual(true);
    })
})
