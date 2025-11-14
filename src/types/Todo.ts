//読み込み指定
export type Todo = {
    id: number;//数字
    text: string;//文字
    completed: boolean;//true or false (完了済かどうか)
    deadline: string; // ISO文字列で日付を保持
    priority?: 1 | 2 | 3; // 手動優先度 1=高, 2=中, 3=低（任意）
  };
