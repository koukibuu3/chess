import { Position } from '../Position'

import { Piece } from './Piece'

export class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position)
    return Math.abs(distance.rank) < 2 && Math.abs(distance.file) < 2
  }
}
