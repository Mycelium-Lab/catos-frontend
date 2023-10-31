import { createI18n } from "vue-i18n";
import attributes from "./locales/ru.json";

const locale = {
  ru: attributes,
};

const i18n = createI18n({
  locale: "ru",
  messages: locale,
});

export { i18n };
