import { Position } from '../Position'

import Piece from './Piece'

export class Pawn extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return distance.rank > 0 && distance.rank < 2 && distance.file === 0
  }
}
