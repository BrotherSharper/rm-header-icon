Hooks.on("renderActorSheet", (app, html, data) => {
    if (game.settings.get("rm-header-text", "rmHeaderIconStyle") === true  ) {
      html[0].classList.add("rmh");
    }
  });
  
  Hooks.on("init", () => {
  //   game.settings.register("remove-header-icons", {
  //     scope: "world",
  //     config: false,
  //     type: Boolean,
  //     default: false
  //   });
  
  
    game.settings.register("rm-header-text", "rmHeaderIconStyle", {
      name: game.i18n.localize("rmHeaderText.name"),
      hint: game.i18n.localize("rmHeaderText.hint"),
      scope: "local",
      config: true,
      type: Boolean,
      default: false       // デフォでは使わない
    });
  });