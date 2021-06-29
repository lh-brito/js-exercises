let piece = 'KNIGHT';

switch (piece.toLowerCase()) {
    case 'king':
        console.log ('King: any direction - 1 square. Additionally, kings are able to make a special move, know as castling.');
        break;
    case 'queen':
        console.log ('Queen: diagonally, horizontally or vertically - any number of squares.');
        break;
    case 'rook':
        console.log ('Rook: horizontally or vertically - any number of squares. Rooks move when the king castles.');
        break;
    case 'bishop':
        console.log ('Bishop: diagonally - any number of squares.');
        break;
    case 'knight':
        console.log ('Knight: "L" shape - 2 squares in a horizontal or vertical direction, then move 1 square horizontally or vertically. They are the only piece able to jump over other pieces.');
        break;
    case 'pawn':
        console.log ('Pawn: vertically forward - 1 square, with the option to move 2 squares if they have not yet moved. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backwards on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
        break;
    default:
        console.log ('Please write the correct name of the piece you wanna get to know.')
}
