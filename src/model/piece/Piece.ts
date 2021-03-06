import { Color, File, Rank } from '../../types'
import { Position } from '../Position'

export abstract class Piece {
  protected position: Position

  constructor(private readonly color: Color, file: File, rank: Rank) {
    // 宣言時に position を初期化していないためコンストラクタ内で値の割り当てが必要
    this.position = new Position(file, rank)
  }

  moveTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position): boolean
}
