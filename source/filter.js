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
const filter = (input, tags) => {
    let output = input.split('').reduce((accum_str, symb) => accum_str += extra[symb] || symb, '');
    
    if (!tags) {
        return output;
    }
    
    const gt_sym = extra['>'];
    const lt_sym = extra['<'];
    const gt_sym_len = gt_sym.length;
    const lt_sym_len = lt_sym.length;
    tags.forEach(tag => {
        const tag_len = tag.length; 
        
        let pos = -1; 
        while ((pos = output.indexOf(tag, pos + 1)) !== -1) {
            if (output.slice(pos - lt_sym_len, pos) !== lt_sym && 
                output.slice(pos - lt_sym_len - 1, pos) !== (`${lt_sym}/`)) {
                continue;
            }

            const gt_sym_pos = output.indexOf(gt_sym, pos);
            output = (output[pos - 1] === '/')
                ? `${output.slice(0, pos - lt_sym_len - 1)}</${tag}>${output.slice(gt_sym_pos + gt_sym_len)}`
                : `${output.slice(0, pos - lt_sym_len)}<${tag}${output.slice(pos + tag_len, gt_sym_pos)}>${output.slice(gt_sym_pos + gt_sym_len)}`;
        }
    });
    return output;
};
