import { Position } from '../Position'

import Piece from './Piece'

export class Knight extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return (
      Math.abs(distance.rank) > 0 &&
      Math.abs(distance.file) > 0 &&
      Math.abs(distance.rank) + Math.abs(distance.file) === 3
    )
  }
}
