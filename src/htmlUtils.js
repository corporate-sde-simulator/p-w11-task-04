/**HTML escape helper. Clean file.*/
function escapeHtml(str) {
    const map = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'};
    return str.replace(/[&<>"']/g, c => map[c]);
}
module.exports = { escapeHtml };
