'use strict';

let extra = new Map([['>', "&gt;"],
                    ['<', "&lt;"],
                    ['"', "&quot;"],
                    ['&', "&amp;"],
                    ['\'', "&#39;"]]);

/**
 * Filter html block
 * @param {string} - Input html block
 * @param {Object} array of strings - Tags to leave as they are
 * @return {string} - Filtered html block
 * 
 * @author Popov Stepan
 */
let filter = function(input, tags) {
    let output = ""
    for (let i = 0; i < input.length; ++i) {
        let changedSymb = extra.get(input[i])
        if (changedSymb === undefined) {
            output += input[i]
        } else {
            output += changedSymb
        }
    }
    
    if (tags === undefined) {
        return output
    }
    
    let gt_sym_len = extra.get('>').length;
    let lt_sym_len = extra.get('<').length;
    for (let tag of tags) {
        let tag_len = tag.length; 
        
        let pos = -1;
        while ((pos = output.indexOf(tag, pos + 1)) != -1) {
            if (output[pos - 1] == '/') {
                output = output.slice(0, pos - lt_sym_len - 1) + 
                         "</" + tag + ">" + 
                         output.slice(pos + tag_len + gt_sym_len);
            } else {
                output = output.slice(0, pos - lt_sym_len) + 
                         "<" + tag + ">" + 
                         output.slice(pos + tag_len + gt_sym_len);
            }
        }
    }
    return output
};
