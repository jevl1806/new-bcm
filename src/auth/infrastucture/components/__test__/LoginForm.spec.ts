import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LoginForm from "../LoginForm.vue";

describe("Given email and password on login", () => {
  const wrapper = mount(LoginForm);
  const button = wrapper.get("button");
  const inputs = wrapper.findAll("input");
  const inputEmail = inputs.find(
    (element) => element.attributes().type === "email"
  );
  const inputPassword = inputs.find(
    (element) => element.attributes().type === "password"
  );

  it("When the user does not fill in the email and password, then the submit button is disabled", () => {
    const emptyEmail = "";
    const emptyPassword = "";

    expect(inputEmail?.text()).toBe(emptyEmail);
    expect(inputPassword?.text()).toBe(emptyPassword);

    expect(button.element.disabled).toBeTruthy();
  });

  it("When the user types a wrong text in the email field, then, the application displays an email error message", async () => {
    const wrongEmail = "elementdata";
    inputEmail?.setValue(wrongEmail);

    expect(inputEmail?.element.value).toContain(wrongEmail);
    await inputEmail?.trigger("change");
    expect(wrapper.find("span").text()).toContain("Error: email invalid");
  });
});
