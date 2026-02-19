export async function submitInquiry(payload) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!payload) {
    throw new Error("잘못된 요청입니다.");
  }

  return {
    success: true,
    message: "문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다."
  };
}
