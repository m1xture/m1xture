import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const lang = context.params.lang ?? "en";
  const { default: t } = await import(`../i18n/${lang}.ts`);
  context.locals.t = t;
  context.locals.lang = lang;
  context.locals.all = ["en", "ua"];
  return next();
});
