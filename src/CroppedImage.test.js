import React from "react";
import { shallow, mount, render } from "enzyme";

import CroppedImage from "./index"
const testImageURL = "https://placekitten.com/200/300";

describe("'CroppedImage' component Tests", () => {
    
    it("If no src passed to CroppedImage", () => {
        let wrapper = <CroppedImage />;
    
        expect(shallow(wrapper).isEmptyRender()).toBeTruthy();

      });
})