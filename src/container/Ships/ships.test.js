import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Ship from "../../components/Ship/Ship";
import { Ships } from "./Ships";

configure({adapter: new Adapter()});

describe("<Ships />", () => {

    it("should render 2 <Ship /> elements", () => {
        const wrapper = shallow(<Ships people={[1, 2]} ships={[{id: 1}, {id: 2}]}/>);
        expect(wrapper.find(Ship)).toHaveLength(2);
    })
})