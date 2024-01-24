export enum StatusTranslation {
  "approve" = "Одобрено",
  "reject" = "Отклонено",
  "pending" = "Ожидание",
}

export enum Status {
  approve,
  reject,
  pending,
}

export enum ButtonIconTranslation {
  "back_with_text" = "Назад",
  share = "Поделиться",
  sharied = "Поделиться",
  copy = "Скопировать",
  copied = "Скопировано",
  topulls = "Перейти к формату карточек пулов:",
}

export enum ButtonIconVariant {
  "back_with_text",
  share,
  sharied,
  copy,
  copied,
  topulls,
  back,
  pagination,
}

export enum ButtonSliderVariant {
  registration,
  loans,
  dashboard,
  collector,
}

export type Content = StatusTranslation[] | ButtonIconTranslation[];
