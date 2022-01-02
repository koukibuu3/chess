import { Position } from '../Position'

import { Piece } from './Piece'

export class Queen extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return (
      Math.abs(distance.rank) === Math.abs(distance.file) ||
      distance.rank * distance.file !== 0
    )
  }
}
