import { File, Rank } from '../types'

export class Position {
  /* eslint-disable no-useless-constructor */
  constructor(
    // コンストラクタ内の private はそのパラメータを自動的に this に割り当てる
    private file: File,
    private rank: Rank,
  ) {}

  distanceFrom(position: Position) {
    return {
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
      rank: Math.abs(position.rank - this.rank),
    }
  }
}
