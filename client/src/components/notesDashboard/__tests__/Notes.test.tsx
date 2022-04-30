import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Notes from '../Notes';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Button } from 'semantic-ui-react';
import toJson from "enzyme-to-json";

const mockStore = configureMockStore();
const store = mockStore({})

Enzyme.configure({ adapter: new Adapter() });
describe("Notes Component", () => {
    it("test", () => {

       const wrapper = shallow(<Provider store={store}><Notes/></Provider>)
       expect(wrapper.find(Button).length).toBe(0)
    })
    it("all notes tag would not appear if loaded the first time", () => {
        const wrapper = shallow(<Provider store={store}><Notes/></Provider>)
        const label = wrapper.find({name : "allmonthlabel"});
        expect(label.length).toBe(0);
    })

    test("should render correctly", () => {
        const wrapper = shallow(<Provider store={store}><Notes/></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
      });
})