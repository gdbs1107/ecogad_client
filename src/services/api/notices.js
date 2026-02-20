import { noticeItems } from "../../data/notices";

export async function fetchNoticeList() {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return noticeItems;
}

export async function fetchNoticeById(noticeId) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return noticeItems.find((item) => item.id === noticeId) ?? null;
}
