import { test } from "@playwright/test";

test.describe("Join Developers Community", () => {
  test("fill out the form", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page
      .getByRole("heading", { name: "Skill Level", level: 2 })
      .isHidden();

    await page.getByRole("textbox", { name: /Full Name/i }).fill("John Doe");
    await page
      .getByRole("textbox", { name: /Email Address/i })
      .fill("john.doe@domain.com");
    await page
      .getByRole("textbox", { name: /Phone Number/i })
      .fill("2152222222");
    await page
      .getByRole("textbox", { name: /Portifolio\/Github Link/i })
      .fill("https://github.com/johndoe");

    await page.getByRole("button", { name: "Next Step" }).click();

    await page
      .getByRole("heading", { name: "Skill Level", level: 2 })
      .isVisible();
  });
});
