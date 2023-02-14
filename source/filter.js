'use strict';

const extra = { 
    '>' : '&gt;',
    '<' : '&lt;',
    '"' : '&quot;',
    '&' : '&amp;',
    '\'' : '&#39;' 
};

/*
 * Filter html block
 * @param {string} - Input html block
 * @param {Object} array of strings - Tags to leave as they are
 * @return {string} - Filtered html block
 * 
 * @author Popov Stepan
 */
let filter = (input, tags) => {
    let output = '';
    input.split('').forEach((symb) => {
        let changedSymb = extra[symb];
        if (changedSymb === undefined) {
            output += symb;
        } else {
            output += changedSymb;
        }
    });
    
    if (tags === undefined) {
        return output;
    }
    
    let gt_sym = extra['>'];
    let lt_sym = extra['<'];
    let gt_sym_len = gt_sym.length;
    let lt_sym_len = lt_sym.length;
    tags.forEach(tag => {
        let tag_len = tag.length; 
        
        let pos = -1; 
        while ((pos = output.indexOf(tag, pos + 1)) != -1) {
            if (output.slice(pos - lt_sym_len, pos) !== lt_sym && 
                output.slice(pos - lt_sym_len - 1, pos) !== (lt_sym + '/')) {
                continue;
            }

            let left_part = (output[pos - 1] === '/') 
                ? (output.slice(0, pos - lt_sym_len - 1)) 
                : (output.slice(0, pos - lt_sym_len));
            let gt_sym_pos = output.indexOf(gt_sym, pos);
            let tag_part = (output[pos - 1] === '/')
                ? ('</' + tag + '>')
                : ('<' + tag + output.slice(pos + tag_len, gt_sym_pos) + '>');
            let right_part = output.slice(gt_sym_pos + gt_sym_len);

            output = left_part + tag_part + right_part;
        }
    });
    return output
};
