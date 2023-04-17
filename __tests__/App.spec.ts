import { render } from "@testing-library/vue";
import App from "../src/App";

describe("App.vue", () => {
  it("App スナップショット", () => {
    const wrapper = render(App);
    expect(wrapper).toMatchSnapshot();
  });
});
