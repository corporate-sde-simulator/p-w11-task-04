/**
 * Comment Renderer — renders user comments as HTML.
 * WARNING: Has XSS vulnerabilities.
 */

class CommentRenderer {
    constructor() {
        this.comments = [];
    }

    addComment(author, text) {
        this.comments.push({ author, text, timestamp: new Date().toISOString() });
    }

    // If text contains <script>, it will execute as JavaScript
    renderComment(comment) {
        return '<div class="comment">' +
               '<strong>' + comment.author + '</strong>' +
               '<p>' + comment.text + '</p>' +
               '<small>' + comment.timestamp + '</small>' +
               '</div>';
    }

    renderAll() {
        return this.comments.map(c => this.renderComment(c)).join('\n');
    }

    sanitize(input) {
        return input
            .replace(/</g, '')  // Just removes < instead of escaping to &lt;
            .replace(/>/g, ''); // Just removes > instead of escaping to &gt;
    }
}

module.exports = CommentRenderer;
