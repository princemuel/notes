import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("__SITE_THEME__") ?? "";
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(`data-color-scheme=""`, `data-color-scheme="${theme}"`),
  });
  return response;
};
