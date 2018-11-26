import chai from 'chai'
const
  expect = chai.expect,
  should = chai.should()


let
  foo = 'bar',
  beverages = { tea: ['chai', 'matcha', 'oolong'] }

expect(foo).to.be.a('string')
expect(foo).to.equal('bar')
expect(foo).to.have.lengthOf(3)
expect(beverages).to.have.property('tea').with.lengthOf(3)

foo.should.be.a('string')
foo.should.equal('bar')
foo.should.have.lengthOf(3)
beverages.should.have.property('tea').with.lengthOf(3)
