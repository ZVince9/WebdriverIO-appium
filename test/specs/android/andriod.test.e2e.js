describe("ApiDemos app", () => {
  it("click app and find Action bar by accessibility id", async () => {
    // find element by accessibility id
    const appOption = await $("~App");

    // click on element
    await appOption.click();

    // assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("find Fragment by accessibility id", async () => {
    const fragment = await $("~Fragment");
    await expect(fragment).toBeExisting();
  });

  it("click alarm and find Alarm Service ", async () => {
    const alarmOption = await $("~Alarm");

    await alarmOption.click();

    const service = await $("~Alarm Service");
    await expect(service).toBeExisting();
  });
});
