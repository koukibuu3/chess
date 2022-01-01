import { Position } from '../Position'

import Piece from './Piece'

export class Rook extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return distance.rank * distance.file !== 0
  }
}
