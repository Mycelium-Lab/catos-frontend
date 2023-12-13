export type Transaction = {
  id: string;
  hash: any;
  exit_code: number;
  sender_id: number;
  amount: number;
  status: TransactionStatuses;
  data?: TransactionData;
};
export type TransactionData = {
  boc: string;
  args: TransactionOperation[];
  other?: unknown;
};
export type TransactionOperation = [string, number];
export enum TransactionStatusesEnum {
  pending = "Ожидание",
  rejected = "Отклонена пользователем",
  approved = "Одобрена пользователем",
  failed = "Ошибка",
  successfull = "Успешно",
}

export type TransactionStatuses = keyof typeof TransactionStatusesEnum;
// Mapping Opcodes from API to operation names
export const TransactionOpcodes = {
  "3855319663": "Создание пула", // 0xe5cb826f
  "1244269745": "Изъятие ликвидности", // 0x4A2A0CB1
  "3846329706": "Взятие займа", // 0xe542556a
  "136447363": "Погашение займа", // 0x08220583
  "2662142657": "Продление займа", // 0x9ead12c1
  "1888846049": "Выставление займа на продажу", // 0x709580e1
  "2197034478": "Одобрение займа", // 0x82f415ee
  "267067517": "Удаление займа", // 0x0feb207d
  "2797266325": "Добавление ликвидности", // 0xa6bae595
  "3837179524": "Покупка займа", // 0xe4b6b684
  "2107689332": "Остановка пула", // 0x7da0c974
  "1434345181": "Восстановление работы пула", // 0x557e5edd
  "3089765306": "Внесение ликвидности", // Old contract version
  "634420970": "Внесение ликвидности", // 0x25d07eea
  "3920079753": "Покупка займа", // 0xe9a7ab89
};
// Which arguments hold TON amount depending on operation type
export const AmountPosition = {
  "1244269745": 1,
  "136447363": "amount",
  "2662142657": "amount",
  "3089765306": 2, // Old contract version
  "2197034478": 3,
  "2797266325": 2,
  "634420970": 2,
  "3920079753": "amount",
}