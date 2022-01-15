Hooks.on("renderActorSheet", (app, html, data) => {
  if (game.settings.get("rm-header-text", "rmHeaderIconActorStyle") === true  ) {
    html[0].classList.add("rmh");
  }
});

Hooks.on("renderItemSheet", (app, html, data) => {
  if (game.settings.get("rm-header-text", "rmHeaderIconItemStyle") === true  ) {
    html[0].classList.add("rmh");
  }
});

Hooks.on("renderJournalSheet", (app, html, data) => {
  if (game.settings.get("rm-header-text", "rmHeaderIconJournalStyle") === true  ) {
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


  game.settings.register("rm-header-text", "rmHeaderIconActorStyle", {
    name: game.i18n.localize("rmHeaderText.actor.name"),
    hint: game.i18n.localize("rmHeaderText.actor.hint"),
    scope: "local",
    config: true,
    type: Boolean,
    default: true       // デフォで使う
  });

  game.settings.register("rm-header-text", "rmHeaderIconItemStyle", {
    name: game.i18n.localize("rmHeaderText.item.name"),
    hint: game.i18n.localize("rmHeaderText.item.hint"),
    scope: "local",
    config: true,
    type: Boolean,
    default: true       // デフォで使う
  });

  game.settings.register("rm-header-text", "rmHeaderIconJournalStyle", {
    name: game.i18n.localize("rmHeaderText.journal.name"),
    hint: game.i18n.localize("rmHeaderText.journal.hint"),
    scope: "local",
    config: true,
    type: Boolean,
    default: true       // デフォで使う
  });
});