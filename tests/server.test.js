const request = require('supertest')
const server = require('../server')

test('get / gives index.html', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/Blogs/)
    })
    done()
})

test('get /<filename> gives <filename>', (done) => {
  request(server)
    .get('/blog/blog-template.html')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/Fusce efficitur ex/)
    })
    request(server)
    .get('/blog/c6-control.html')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/When programming, what are some of your triggers\?/)
    })
    request(server)
    .get('/blog/c7-motivation.html')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toMatch(/How does life look/)
    })
    done()
})
