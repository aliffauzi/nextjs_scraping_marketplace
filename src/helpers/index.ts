import cookie from "cookie";
import { toast } from "react-toastify";

export function parseCookie(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export function handleAuth(ctx) {
  const cookie = parseCookie(ctx.req);

  if (cookie.userId) {
    ctx.res.writeHead(303, { Location: "/home" });
    ctx.res.finished = true;
    ctx.res.end();
  }
}

export const notification = (data) => {
  return toast.dark(data, {
    hideProgressBar: false,
    position: "bottom-center",
    autoClose: 3000,
  });
};
