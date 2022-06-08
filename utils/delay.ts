// APIのレスポンスを意図的に遅らせる関数
// PromiseのPendingをFullfiledに変更する
export const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
