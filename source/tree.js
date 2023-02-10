'use strict';


function* print_symbol(count,symbol){
    for(let  i = 0;i<count;++i) yield symbol;
}
function* row(height,cur_height,symbol){
    yield* print_symbol(height - 1 - cur_height,' ')

    yield* print_symbol(2 * cur_height - 1,symbol)

    yield* print_symbol(height - 1 - cur_height,' ')

    yield "\n";
}

function* create_tree(height) {
    for(let i = 1; i < height; i++)
        yield* row(height, i, '*');

    yield* row(height, 1, '|');
}
const tree = (n) =>{
    const height = Number(n);
    if((isNaN(height))||n===null||(!Number.isInteger(height))||(!isFinite(height))){
        throw new TypeError('такой высоты не бываает');
    }

    if(height<3){
        return null;
    }

    return [...create_tree(height)].join('');


}
