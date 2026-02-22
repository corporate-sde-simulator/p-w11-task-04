const CommentRenderer = require('../src/commentRenderer');

describe('XSS Prevention', () => {
    let renderer;
    beforeEach(() => { renderer = new CommentRenderer(); });

    test('script tags are escaped', () => {
        renderer.addComment('Hacker', '<script>alert("xss")</script>');
        const html = renderer.renderAll();
        expect(html).not.toContain('<script>');
        expect(html).toContain('&lt;script&gt;');
    });

    test('normal comments render correctly', () => {
        renderer.addComment('Alice', 'Great article!');
        const html = renderer.renderAll();
        expect(html).toContain('Great article!');
        expect(html).toContain('Alice');
    });

    test('quotes are escaped', () => {
        renderer.addComment('User', 'He said "hello"');
        const html = renderer.renderAll();
        expect(html).toContain('&quot;');
    });
});
