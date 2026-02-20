import React from "react";

const EmptyState = ({ title, message, actionText, onAction }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>
      <h3 className="heading-3 empty-title">{title || "등록된 데이터가 없습니다"}</h3>
      <p className="body-text empty-message">
        {message || "현재 카테고리에 등록된 제품이 없습니다. 관리자에게 문의하거나 나중에 다시 확인해 주세요."}
      </p>
      {actionText ? (
        <button className="btn btn-outline" onClick={onAction}>
          {actionText}
        </button>
      ) : null}
    </div>
  );
};

export default EmptyState;
